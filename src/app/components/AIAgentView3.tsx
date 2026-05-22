import { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, X, MoreHorizontal, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

// ── Types ──────────────────────────────────────────────────────────────────────
type Attachment = { id: string; name: string; kind: 'image' | 'doc'; url?: string; size: string };
type Message = { id: string; role: 'user' | 'assistant'; content: string; timestamp: Date; attachments?: Attachment[] };
type AIResponse = { blocks: Block[]; follow?: string[] };
type Block =
  | { type: 'text'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'cards'; items: { label: string; value: string; note?: string }[] };

// ── Response engine ────────────────────────────────────────────────────────────
function buildResponse(msg: string, atts?: Attachment[]): AIResponse {
  const low = msg.toLowerCase();
  if (atts && atts.length > 0) {
    const imgs = atts.filter(a => a.kind === 'image'), docs = atts.filter(a => a.kind === 'doc');
    const blocks: Block[] = [];
    if (imgs.length) blocks.push({ type: 'text', content: `I can see ${imgs.length === 1 ? 'your image' : `${imgs.length} images`}. If this is an HR document image (payslip, attendance), please describe what you need and I'll assist.` });
    if (docs.length) blocks.push({ type: 'text', content: `Received **${docs.map(d => d.name).join(', ')}**. If this is a payslip, leave form, or HR document, I can help interpret or respond to it.` });
    return { blocks, follow: ['Explain this document', 'Is this a valid leave form?', 'Summarize'] };
  }
  if (low.includes('task') || low.includes('pending')) return { blocks: [{ type: 'text', content: 'Here\'s your current task overview, John:' }, { type: 'list', items: ['🔴 Tax Returns Review — Due tomorrow', '🟡 Client Report Q4 — Due Friday, May 24', '🟢 Staff Onboarding Checklist — Due May 27'] }, { type: 'text', content: 'You have **3 pending tasks** this week. Tax Returns Review is highest priority.' }], follow: ['Show task details', 'Mark a task complete'] };
  if (low.includes('attendance')) return { blocks: [{ type: 'text', content: 'Your May 2025 attendance summary:' }, { type: 'cards', items: [{ label: 'Days Present', value: '18', note: 'Out of 22' }, { label: 'On Leave', value: '1', note: 'Approved' }, { label: 'Rate', value: '94.7%', note: 'Above avg' }, { label: 'Late', value: '2', note: 'Minor' }] }, { type: 'text', content: 'Above team average of 91%. Great work!' }], follow: ['Apply for leave', 'Show last month'] };
  if (low.includes('benefit') || low.includes('payroll') || low.includes('salary')) return { blocks: [{ type: 'text', content: 'Your enrolled benefits:' }, { type: 'list', items: ['🏥 Health Insurance — 5,000 USD/year', '🍽️ Meal Allowance — 150 USD/month', '🚗 Transport — 300 USD/month', '💰 Annual Bonus — 2,000 USD', '🏋️ Gym Membership — 80 USD/month'] }, { type: 'text', content: 'Total monthly benefits: approximately **2,530 USD**.' }], follow: ['Payslip details', 'Benefits history'] };
  if (low.includes('leave')) return { blocks: [{ type: 'text', content: 'Here\'s a leave request draft:' }, { type: 'text', content: '**Subject:** Leave Application — John Smith\n\nDear [Manager\'s Name],\n\nI would like to request leave from **[Start Date]** to **[End Date]**.\n\n**Reason:** [Personal / Medical / Vacation]\n\nAll tasks will be handed over before departure.\n\nRegards,\nJohn Smith · EMP-2024' }], follow: ['Fill in dates', 'Check leave balance'] };
  if (low.includes('profile') || low.includes('my info')) return { blocks: [{ type: 'text', content: 'Your profile snapshot:' }, { type: 'cards', items: [{ label: 'Employee ID', value: 'EMP-2024' }, { label: 'Experience', value: '3 Yrs 2 Mo' }, { label: 'Learning', value: '28 Hrs' }, { label: 'Skills', value: '8 skills' }] }, { type: 'text', content: 'Profile completion: **70%**. Fill in Professional Details and Skill Set to improve.' }], follow: ['Complete my profile', 'Update skills'] };
  if (low.includes('hello') || low.includes('hi') || low.includes('hey')) return { blocks: [{ type: 'text', content: 'Hello, John! 👋 I can help with tasks, attendance, benefits, leave requests, and more.' }] };
  if (low.includes('thank')) return { blocks: [{ type: 'text', content: "You're welcome! Is there anything else you need?" }] };
  return { blocks: [{ type: 'text', content: `Got it — you're asking about "${msg.length > 55 ? msg.slice(0, 55) + '…' : msg}". Let me help.` }, { type: 'text', content: 'I can assist with tasks, attendance, benefits, leave, skills, and HR queries. Could you share more context?' }], follow: ['My tasks', 'Attendance summary', 'My benefits', 'Leave request'] };
}

// ── Helpers ────────────────────────────────────────────────────────────────────
function fmtSize(b: number) { return b < 1048576 ? `${(b / 1024).toFixed(0)} KB` : `${(b / 1048576).toFixed(1)} MB`; }
function getGreeting() { const h = new Date().getHours(); return h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening'; }

function SparkleIcon({ size = 16, color = '#fff' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 20 20" fill="none"><path d="M10 1L11.8 7.2H18L12.9 11L14.7 17.2L10 13.4L5.3 17.2L7.1 11L2 7.2H8.2L10 1Z" fill={color} /></svg>;
}

function TypingDots() {
  return (
    <div className="flex items-center gap-[5px] py-[8px]">
      {[0, 1, 2].map(i => (
        <span key={i} className="w-[7px] h-[7px] rounded-full bg-[#3a58ef]"
          style={{ animation: 'ag3D 1.3s ease-in-out infinite', animationDelay: `${i * 0.22}s` }} />
      ))}
      <style>{`@keyframes ag3D{0%,80%,100%{transform:scale(1);opacity:.25}40%{transform:scale(1.5);opacity:1}}`}</style>
    </div>
  );
}

function renderMd(text: string) {
  return text.split('\n').map((l, i, arr) => (
    <span key={i}>
      <span dangerouslySetInnerHTML={{ __html: l.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      {i < arr.length - 1 && <br />}
    </span>
  ));
}

function extractText3(content: string): string {
  try {
    const parsed = JSON.parse(content) as AIResponse;
    return parsed.blocks.map(b => b.type === 'text' ? b.content : b.type === 'list' ? b.items.join('\n') : b.items.map(c => `${c.label}: ${c.value}`).join('\n')).join('\n\n');
  } catch { return content; }
}

// ── Message Bubble ─────────────────────────────────────────────────────────────
function Bubble({ msg, onFollow }: { msg: Message; onFollow: (t: string) => void }) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState<'up' | 'down' | null>(null);
  const isUser = msg.role === 'user';

  if (isUser) return (
    <div className="flex justify-end group mb-[18px]">
      <div className="flex flex-col items-end gap-[5px] max-w-[62%]">
        {msg.attachments && msg.attachments.length > 0 && (
          <div className="flex flex-wrap gap-[6px] justify-end mb-[4px]">
            {msg.attachments.map(a => a.kind === 'image' && a.url
              ? <img key={a.id} src={a.url} alt={a.name} className="max-h-[140px] max-w-[190px] rounded-[12px] object-cover shadow-sm" />
              : (
                <div key={a.id} className="flex items-center gap-[6px] bg-[#3a58ef] rounded-[10px] px-[11px] py-[7px]">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="10" height="12" rx="2" stroke="white" strokeWidth="1.3"/><path d="M4 5h6M4 8h4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  <span className="text-[12px] text-white font-medium truncate max-w-[90px]">{a.name}</span>
                </div>
              )
            )}
          </div>
        )}
        {msg.content && (
          <div className="bg-[#3a58ef] px-[18px] py-[11px] rounded-[20px] rounded-tr-[5px] shadow-[0px_2px_8px_rgba(58,88,239,0.25)]">
            <p className="text-[14px] leading-[23px] text-white">{msg.content}</p>
          </div>
        )}
        <p className="text-[10px] text-[#98a2b3] opacity-0 group-hover:opacity-100 transition-opacity px-[4px]">
          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );

  let parsed: AIResponse | null = null;
  try { parsed = JSON.parse(msg.content) as AIResponse; } catch { /**/ }
  const blocks = parsed?.blocks ?? [];
  const follow = parsed?.follow;

  return (
    <div className="flex gap-[12px] group mb-[18px]">
      <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#3a58ef] to-[#7f56d9] flex items-center justify-center flex-shrink-0 mt-[2px] shadow-[0px_2px_8px_rgba(58,88,239,0.3)]">
        <SparkleIcon size={13} color="white" />
      </div>
      <div className="flex flex-col gap-[6px] max-w-[68%]">
        <div className="bg-white border border-[#eaecf0] rounded-[20px] rounded-tl-[5px] px-[18px] py-[13px] shadow-[0px_2px_12px_rgba(16,24,40,0.06)]">
          {!parsed && <p className="text-[14px] text-[#344054] leading-[23px]">{msg.content}</p>}
          {blocks.map((b, i) => {
            if (b.type === 'text') return (
              <p key={i} className={`text-[14px] text-[#344054] leading-[23px] ${i > 0 ? 'mt-[10px]' : ''}`}>
                {renderMd(b.content)}
              </p>
            );
            if (b.type === 'list') return (
              <ul key={i} className="mt-[10px] flex flex-col gap-[5px]">
                {b.items.map((it, j) => (
                  <li key={j} className="text-[14px] text-[#344054] leading-[22px] flex gap-[8px]">
                    <span className="shrink-0">{it.slice(0, 2)}</span>
                    <span>{it.slice(2).trim()}</span>
                  </li>
                ))}
              </ul>
            );
            if (b.type === 'cards') return (
              <div key={i} className="mt-[10px] grid grid-cols-2 gap-[6px]">
                {b.items.map((c, j) => (
                  <div key={j} className="bg-[#f8f9ff] border border-[#eaecf0] rounded-[10px] px-[11px] py-[9px]">
                    <p className="text-[10px] text-[#667085] mb-[1px]">{c.label}</p>
                    <p className="text-[15px] font-bold text-[#101828]">{c.value}</p>
                    {c.note && <p className="text-[10px] text-[#98a2b3] mt-[1px]">{c.note}</p>}
                  </div>
                ))}
              </div>
            );
            return null;
          })}
        </div>
        {follow && follow.length > 0 && (
          <div className="flex flex-wrap gap-[5px]">
            {follow.map(f => (
              <button key={f} onClick={() => onFollow(f)}
                className="text-[11px] font-medium text-[#3a58ef] bg-white/80 backdrop-blur-sm border border-[#d0d5dd] rounded-full px-[11px] py-[4px] hover:bg-[#f0f3fe] hover:border-[#c5cae0] transition-all shadow-[0px_1px_4px_rgba(16,24,40,0.06)]">
                {f}
              </button>
            ))}
          </div>
        )}
        <div className="flex items-center gap-[10px] pl-[4px] mt-[4px]">
          <span className="text-[11px] text-[#98a2b3]">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <button onClick={() => { navigator.clipboard.writeText(extractText3(msg.content)); setCopied(true); setTimeout(() => setCopied(false), 1800); }} className={`transition-colors ${copied ? 'text-[#12b76a]' : 'text-[#98a2b3] hover:text-[#344054]'}`} title="Copy"><Copy className="size-[13px]" /></button>
          <button onClick={() => setLiked(liked === 'up' ? null : 'up')} className={`transition-colors ${liked === 'up' ? 'text-[#3a58ef]' : 'text-[#98a2b3] hover:text-[#344054]'}`} title="Helpful"><ThumbsUp className="size-[13px]" /></button>
          <button onClick={() => setLiked(liked === 'down' ? null : 'down')} className={`transition-colors ${liked === 'down' ? 'text-[#f04438]' : 'text-[#98a2b3] hover:text-[#344054]'}`} title="Not helpful"><ThumbsDown className="size-[13px]" /></button>
        </div>
      </div>
    </div>
  );
}

// ── Quick action cards ─────────────────────────────────────────────────────────
const QUICK = [
  { icon: '📋', label: 'Task Status', sub: 'View pending & due tasks', prompt: "What's my current task status?" },
  { icon: '📅', label: 'Attendance', sub: 'Check this month\'s record', prompt: 'Show my attendance summary for this month' },
  { icon: '💰', label: 'Benefits', sub: 'Benefits & payroll details', prompt: 'What benefits am I eligible for?' },
  { icon: '✈️', label: 'Leave Request', sub: 'Draft a leave application', prompt: 'Help me write a leave request' },
];

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AIAgentView3() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pending, setPending] = useState<Attachment[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const started = messages.length > 0;

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping]);

  useEffect(() => {
    const h = (e: Event) => fire((e as CustomEvent<string>).detail);
    window.addEventListener('ai3-fu', h);
    return () => window.removeEventListener('ai3-fu', h);
  });

  const fire = (text: string, atts?: Attachment[]) => {
    const trimmed = text.trim();
    const attachList = atts ?? pending;
    if (!trimmed && attachList.length === 0) return;
    setMessages(p => [...p, { id: Date.now().toString(), role: 'user', content: trimmed, timestamp: new Date(), attachments: attachList }]);
    setInput(''); setPending([]);
    if (taRef.current) { taRef.current.style.height = 'auto'; }
    setIsTyping(true);
    setTimeout(() => {
      setMessages(p => [...p, { id: (Date.now() + 1).toString(), role: 'assistant', content: JSON.stringify(buildResponse(trimmed, attachList)), timestamp: new Date() }]);
      setIsTyping(false);
    }, 900 + Math.random() * 600);
  };

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); fire(input); }
  };
  const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
  };
  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files || []).forEach(f => {
      const id = Date.now() + Math.random().toString();
      if (f.type.startsWith('image/')) setPending(p => [...p, { id, name: f.name, kind: 'image', url: URL.createObjectURL(f), size: fmtSize(f.size) }]);
      else setPending(p => [...p, { id, name: f.name, kind: 'doc', size: fmtSize(f.size) }]);
    });
    e.target.value = '';
  };

  return (
    <div className="relative h-full w-full rounded-[12px] overflow-hidden flex flex-col" style={{ background: 'linear-gradient(145deg, #f0f3fe 0%, #f8f9ff 45%, #fafbff 100%)' }}>
      <input ref={fileRef} type="file" multiple accept="image/*,.pdf,.doc,.docx,.xlsx,.csv,.txt" className="hidden" onChange={onFile} />

      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-[28px] py-[14px] flex-shrink-0" style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(234,236,240,0.8)' }}>
        <div className="flex items-center gap-[10px]">
          <div className="w-[32px] h-[32px] rounded-[8px] bg-gradient-to-br from-[#3a58ef] to-[#7f56d9] flex items-center justify-center shadow-[0px_2px_8px_rgba(58,88,239,0.3)]">
            <SparkleIcon size={14} color="white" />
          </div>
          <div>
            <p className="font-bold text-[14px] text-[#101828] leading-[18px]">AI Agent 3</p>
            <div className="flex items-center gap-[4px]">
              <span className="w-[5px] h-[5px] rounded-full bg-[#12b76a]" />
              <span className="text-[11px] text-[#667085]">Online · HRMS Assistant</span>
            </div>
          </div>
        </div>
        <button className="w-[30px] h-[30px] rounded-[7px] flex items-center justify-center hover:bg-[#f0f3fe] transition-colors">
          <MoreHorizontal className="size-[16px] text-[#667085]" />
        </button>
      </div>

      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto" style={{ paddingBottom: pending.length > 0 ? '188px' : '148px' }}>

        {/* Welcome */}
        {!started && (
          <div className="flex flex-col items-center justify-center min-h-full px-[32px] py-[40px]">
            <div className="w-full max-w-[580px] flex flex-col items-center text-center">

              {/* Hero icon */}
              <div className="relative mb-[24px]">
                <div className="w-[72px] h-[72px] rounded-[20px] bg-gradient-to-br from-[#3a58ef] to-[#7f56d9] flex items-center justify-center shadow-[0px_8px_32px_rgba(58,88,239,0.35)]">
                  <SparkleIcon size={30} color="white" />
                </div>
                <div className="absolute -top-[4px] -right-[4px] w-[14px] h-[14px] rounded-full bg-[#12b76a] border-2 border-white" />
              </div>

              <h1 className="font-bold text-[30px] leading-[38px] text-[#101828] mb-[8px]">
                {getGreeting()},{' '}
                <span style={{ background: 'linear-gradient(90deg, #3a58ef, #7f56d9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  John Smith
                </span>
              </h1>
              <p className="text-[15px] text-[#667085] leading-[24px] mb-[36px] max-w-[420px]">
                Your intelligent HRMS assistant is ready. Ask about tasks, attendance, benefits, leaves, or anything HR-related.
              </p>

              {/* Quick actions */}
              <div className="grid grid-cols-2 gap-[10px] w-full mb-[12px]">
                {QUICK.map(q => (
                  <button key={q.prompt} onClick={() => fire(q.prompt)}
                    className="flex items-center gap-[12px] px-[16px] py-[14px] bg-white/70 backdrop-blur-sm border border-[#eaecf0] rounded-[14px] text-left hover:bg-white hover:border-[#c5cae0] hover:shadow-[0px_4px_16px_rgba(16,24,40,0.08)] transition-all group">
                    <span className="text-[22px] flex-shrink-0">{q.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-[#101828] leading-[18px] group-hover:text-[#3a58ef] transition-colors">{q.label}</p>
                      <p className="text-[11px] text-[#98a2b3] leading-[16px] mt-[1px]">{q.sub}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {started && (
          <div className="px-[28px] pt-[24px] max-w-[760px] mx-auto w-full">
            {messages.map(m => <Bubble key={m.id} msg={m} onFollow={t => { fire(t); }} />)}
            {isTyping && (
              <div className="flex gap-[12px] mb-[18px]">
                <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#3a58ef] to-[#7f56d9] flex items-center justify-center flex-shrink-0 shadow-[0px_2px_8px_rgba(58,88,239,0.3)]">
                  <SparkleIcon size={13} color="white" />
                </div>
                <div className="bg-white border border-[#eaecf0] rounded-[20px] rounded-tl-[5px] px-[16px] shadow-[0px_2px_12px_rgba(16,24,40,0.06)]">
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* ── Floating input ── */}
      <div className="absolute bottom-0 left-0 right-0 px-[24px] pb-[18px] pt-[10px]" style={{ background: 'linear-gradient(to top, rgba(240,243,254,0.98) 70%, transparent)' }}>
        <div className="max-w-[720px] mx-auto">

          {/* Pending attachments */}
          {pending.length > 0 && (
            <div className="flex flex-wrap gap-[6px] mb-[8px]">
              {pending.map(a => (
                <div key={a.id} className="flex items-center gap-[6px] bg-white border border-[#eaecf0] rounded-[10px] px-[10px] py-[5px] shadow-[0px_1px_4px_rgba(16,24,40,0.06)]">
                  {a.kind === 'image' && a.url
                    ? <img src={a.url} alt={a.name} className="w-[22px] h-[22px] rounded-[3px] object-cover" />
                    : <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="10" height="12" rx="2" stroke="#3a58ef" strokeWidth="1.3"/><path d="M4 5h6M4 8h4" stroke="#3a58ef" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  }
                  <span className="text-[11px] font-medium text-[#344054] max-w-[80px] truncate">{a.name}</span>
                  <button onClick={() => setPending(p => p.filter(x => x.id !== a.id))} className="text-[#98a2b3] hover:text-[#f04438] transition-colors"><X className="size-[11px]" /></button>
                </div>
              ))}
            </div>
          )}

          {/* Input pill */}
          <div className="flex items-end gap-[8px] bg-white border border-[#d0d5dd] rounded-[16px] px-[16px] py-[10px] shadow-[0px_4px_24px_rgba(58,88,239,0.12),0px_1px_6px_rgba(16,24,40,0.08)] focus-within:border-[#3a58ef] focus-within:shadow-[0px_4px_24px_rgba(58,88,239,0.18),0px_0px_0px_3px_rgba(58,88,239,0.08)] transition-all">
            <button onClick={() => fileRef.current?.click()}
              className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center text-[#98a2b3] hover:text-[#3a58ef] hover:bg-[#f0f3fe] flex-shrink-0 transition-all mb-[1px]">
              <Paperclip className="size-[16px]" />
            </button>
            <textarea
              ref={taRef}
              value={input}
              onChange={onInput}
              onKeyDown={onKey}
              placeholder="Ask anything about your HR…"
              rows={1}
              className="flex-1 text-[14px] text-[#101828] outline-none resize-none leading-[22px] bg-transparent placeholder:text-[#98a2b3] py-[4px]"
            />
            <button
              onClick={() => fire(input)}
              disabled={!input.trim() && pending.length === 0}
              className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ background: (!input.trim() && pending.length === 0) ? '#d0d5dd' : 'linear-gradient(135deg, #3a58ef, #7f56d9)', boxShadow: (!input.trim() && pending.length === 0) ? 'none' : '0px 2px_8px_rgba(58,88,239,0.35)' }}
            >
              <Send className="size-[14px] text-white" />
            </button>
          </div>

          <div className="text-center mt-[6px]">
            <p className="text-[11px] text-[#667085]">Powered by · <span className="font-semibold text-[#101828]">MYCPE ONE</span></p>
            <p className="text-[10px] text-[#98a2b3] mt-[2px] leading-[15px]">AI-generated responses may not always be accurate or complete. Please verify important information before making decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
