import { useState, useRef, useEffect } from 'react';
import { Send, Plus, X, Paperclip, Search, ChevronRight, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

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
    <div className="flex items-center gap-[5px] py-[7px]">
      {[0, 1, 2].map(i => <span key={i} className="w-[6px] h-[6px] rounded-full bg-[#3a58ef]" style={{ animation: 'ag2D 1.2s ease-in-out infinite', animationDelay: `${i * 0.2}s` }} />)}
      <style>{`@keyframes ag2D{0%,80%,100%{transform:scale(1);opacity:.35}40%{transform:scale(1.4);opacity:1}}`}</style>
    </div>
  );
}

function renderMd(text: string) {
  return text.split('\n').map((l, i, arr) => <span key={i}><span dangerouslySetInnerHTML={{ __html: l.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />{i < arr.length - 1 && <br />}</span>);
}

function extractText2(content: string): string {
  try {
    const parsed = JSON.parse(content) as AIResponse;
    return parsed.blocks.map(b => b.type === 'text' ? b.content : b.type === 'list' ? b.items.join('\n') : b.items.map(c => `${c.label}: ${c.value}`).join('\n')).join('\n\n');
  } catch { return content; }
}

// ── Message ────────────────────────────────────────────────────────────────────
function Msg({ msg, onFollow }: { msg: Message; onFollow: (t: string) => void }) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState<'up' | 'down' | null>(null);
  const isUser = msg.role === 'user';
  if (isUser) return (
    <div className="flex justify-end gap-[10px] group">
      <div className="flex flex-col items-end gap-[4px] max-w-[70%]">
        {msg.attachments && msg.attachments.length > 0 && (
          <div className="flex flex-wrap gap-[6px] justify-end mb-[4px]">
            {msg.attachments.map(a => a.kind === 'image' && a.url
              ? <img key={a.id} src={a.url} alt={a.name} className="max-h-[150px] max-w-[200px] rounded-[10px] object-cover border-2 border-white shadow-sm" />
              : <div key={a.id} className="flex items-center gap-[6px] bg-[#2d47d1] rounded-[8px] px-[10px] py-[7px]"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="10" height="12" rx="2" stroke="white" strokeWidth="1.3"/><path d="M4 5h6M4 8h4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg><span className="text-[12px] text-white font-medium truncate max-w-[90px]">{a.name}</span></div>
            )}
          </div>
        )}
        {msg.content && <div className="bg-[#3a58ef] text-white px-[16px] py-[10px] rounded-[14px] rounded-tr-[4px]"><p className="text-[14px] leading-[22px]">{msg.content}</p></div>}
        <p className="text-[10px] text-[#98a2b3] opacity-0 group-hover:opacity-100 transition-opacity">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
      <div className="w-[28px] h-[28px] rounded-full bg-[#3a58ef] flex items-center justify-center flex-shrink-0 mt-[1px]"><span className="text-[10px] font-bold text-white">JS</span></div>
    </div>
  );

  let parsed: AIResponse | null = null;
  try { parsed = JSON.parse(msg.content) as AIResponse; } catch { /**/ }
  const blocks = parsed?.blocks ?? [];
  const follow = parsed?.follow;

  return (
    <div className="flex gap-[10px] group">
      <div className="w-[28px] h-[28px] rounded-full bg-gradient-to-br from-[#3a58ef] to-[#7f56d9] flex items-center justify-center flex-shrink-0 mt-[1px]">
        <SparkleIcon size={12} color="white" />
      </div>
      <div className="flex flex-col gap-[4px] max-w-[74%]">
        <div className="bg-[#f8f9ff] border border-[#eaecf0] rounded-[14px] rounded-tl-[4px] px-[16px] py-[12px]">
          {!parsed && <p className="text-[14px] text-[#344054] leading-[22px]">{msg.content}</p>}
          {blocks.map((b, i) => {
            if (b.type === 'text') return <p key={i} className={`text-[14px] text-[#344054] leading-[22px] ${i > 0 ? 'mt-[10px]' : ''}`}>{renderMd(b.content)}</p>;
            if (b.type === 'list') return <ul key={i} className="mt-[10px] flex flex-col gap-[5px]">{b.items.map((it, j) => <li key={j} className="text-[14px] text-[#344054] leading-[22px] flex gap-[8px]"><span className="shrink-0">{it.slice(0, 2)}</span><span>{it.slice(2).trim()}</span></li>)}</ul>;
            if (b.type === 'cards') return <div key={i} className="mt-[10px] grid grid-cols-2 gap-[6px]">{b.items.map((c, j) => <div key={j} className="bg-white border border-[#eaecf0] rounded-[8px] px-[10px] py-[8px]"><p className="text-[10px] text-[#667085]">{c.label}</p><p className="text-[14px] font-bold text-[#101828]">{c.value}</p>{c.note && <p className="text-[10px] text-[#98a2b3]">{c.note}</p>}</div>)}</div>;
            return null;
          })}
        </div>
        {follow && follow.length > 0 && (
          <div className="flex flex-wrap gap-[5px] mt-[2px]">
            {follow.map(f => <button key={f} onClick={() => onFollow(f)} className="text-[11px] font-medium text-[#3a58ef] bg-white border border-[#d0d5dd] rounded-full px-[10px] py-[4px] hover:bg-[#f0f3fe] hover:border-[#c5cae0] transition-colors">{f}</button>)}
          </div>
        )}
        <div className="flex items-center gap-[10px] pl-[2px] mt-[4px]">
          <span className="text-[11px] text-[#98a2b3]">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <button onClick={() => { navigator.clipboard.writeText(extractText2(msg.content)); setCopied(true); setTimeout(() => setCopied(false), 1800); }} className={`transition-colors ${copied ? 'text-[#12b76a]' : 'text-[#98a2b3] hover:text-[#344054]'}`} title="Copy"><Copy className="size-[13px]" /></button>
          <button onClick={() => setLiked(liked === 'up' ? null : 'up')} className={`transition-colors ${liked === 'up' ? 'text-[#3a58ef]' : 'text-[#98a2b3] hover:text-[#344054]'}`} title="Helpful"><ThumbsUp className="size-[13px]" /></button>
          <button onClick={() => setLiked(liked === 'down' ? null : 'down')} className={`transition-colors ${liked === 'down' ? 'text-[#f04438]' : 'text-[#98a2b3] hover:text-[#344054]'}`} title="Not helpful"><ThumbsDown className="size-[13px]" /></button>
        </div>
      </div>
    </div>
  );
}

// ── Conversation history data ──────────────────────────────────────────────────
const CONVS = [
  { id: 'c0', title: 'Attendance this month', time: 'Just now' },
  { id: 'c1', title: 'Leave request help', time: 'Yesterday' },
  { id: 'c2', title: 'Benefits overview', time: 'May 15' },
  { id: 'c3', title: 'Task summary', time: 'May 14' },
  { id: 'c4', title: 'Payroll query', time: 'May 10' },
  { id: 'c5', title: 'Skill set update', time: 'May 8' },
];

const QUICK = [
  { label: "Task status", prompt: "What's my current task status?" },
  { label: "Attendance", prompt: "Show my attendance summary for this month" },
  { label: "Benefits", prompt: "What benefits am I eligible for?" },
  { label: "Leave request", prompt: "Help me write a leave request" },
  { label: "My profile", prompt: "Show my profile overview" },
  { label: "Interview status", prompt: "Show my interview status" },
];

// ── Main ──────────────────────────────────────────────────────────────────────
export default function AIAgentView2() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [pending, setPending] = useState<Attachment[]>([]);
  const [search, setSearch] = useState('');
  const [activeConv, setActiveConv] = useState('c0');
  const bottomRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const started = messages.length > 0;

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping]);

  const fire = (text: string, atts?: Attachment[]) => {
    const trimmed = text.trim();
    const attachList = atts ?? pending;
    if (!trimmed && attachList.length === 0) return;
    setMessages(p => [...p, { id: Date.now().toString(), role: 'user', content: trimmed, timestamp: new Date(), attachments: attachList }]);
    setInput(''); setPending([]);
    if (taRef.current) taRef.current.style.height = 'auto';
    setIsTyping(true);
    setTimeout(() => {
      setMessages(p => [...p, { id: (Date.now() + 1).toString(), role: 'assistant', content: JSON.stringify(buildResponse(trimmed, attachList)), timestamp: new Date() }]);
      setIsTyping(false);
    }, 900 + Math.random() * 600);
  };

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); fire(input); } };
  const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setInput(e.target.value); e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px'; };
  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files || []).forEach(f => {
      const id = Date.now() + Math.random().toString();
      if (f.type.startsWith('image/')) setPending(p => [...p, { id, name: f.name, kind: 'image', url: URL.createObjectURL(f), size: fmtSize(f.size) }]);
      else setPending(p => [...p, { id, name: f.name, kind: 'doc', size: fmtSize(f.size) }]);
    });
    e.target.value = '';
  };
  const newChat = () => { setMessages([]); setInput(''); setIsTyping(false); setPending([]); };

  const filtered = CONVS.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex h-full w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] overflow-hidden">
      <input ref={fileRef} type="file" multiple accept="image/*,.pdf,.doc,.docx,.xlsx,.csv,.txt" className="hidden" onChange={onFile} />

      {/* ── Dark sidebar ── */}
      <div className="w-[248px] flex-shrink-0 bg-[#101828] flex flex-col">

        {/* Brand */}
        <div className="px-[20px] pt-[20px] pb-[16px]">
          <div className="flex items-center gap-[9px] mb-[16px]">
            <div className="w-[30px] h-[30px] rounded-[7px] bg-gradient-to-br from-[#3a58ef] to-[#7f56d9] flex items-center justify-center flex-shrink-0">
              <SparkleIcon size={14} color="white" />
            </div>
            <p className="font-bold text-[15px] text-white">AI Agent 2</p>
          </div>
          <button onClick={newChat} className="w-full flex items-center justify-center gap-[7px] px-[14px] py-[9px] bg-white/10 hover:bg-white/15 border border-white/20 rounded-[8px] text-[13px] font-semibold text-white transition-colors">
            <Plus className="size-[14px]" />New Chat
          </button>
        </div>

        {/* Search */}
        <div className="px-[16px] mb-[8px]">
          <div className="flex items-center gap-[8px] bg-white/8 border border-white/10 rounded-[7px] px-[10px] py-[7px]">
            <Search className="size-[13px] text-white/40 flex-shrink-0" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search chats…" className="flex-1 text-[12px] text-white/70 bg-transparent outline-none placeholder:text-white/30" />
          </div>
        </div>

        {/* Conversation list */}
        <div className="flex-1 overflow-y-auto px-[12px] py-[4px]">
          <p className="text-[10px] font-semibold text-white/30 uppercase tracking-wider px-[8px] mb-[6px]">Recent</p>
          {filtered.map(c => (
            <button key={c.id} onClick={() => { setActiveConv(c.id); newChat(); }} className={`w-full text-left px-[10px] py-[9px] rounded-[7px] mb-[2px] transition-colors group ${activeConv === c.id ? 'bg-white/12' : 'hover:bg-white/8'}`}>
              <p className={`text-[13px] font-medium leading-[18px] truncate ${activeConv === c.id ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>{c.title}</p>
              <p className="text-[10px] text-white/30 mt-[1px]">{c.time}</p>
            </button>
          ))}
        </div>

        {/* User */}
        <div className="px-[16px] py-[14px] border-t border-white/10">
          <div className="flex items-center gap-[8px]">
            <div className="w-[28px] h-[28px] rounded-full bg-[#3a58ef] flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-bold text-white">JS</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-white/80 truncate">John Smith</p>
              <div className="flex items-center gap-[4px]"><span className="w-[5px] h-[5px] rounded-full bg-[#12b76a]" /><span className="text-[10px] text-white/40">Online</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main area ── */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">

        {/* Top bar */}
        <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-[#eaecf0] flex-shrink-0">
          <div>
            <p className="font-bold text-[16px] text-[#101828]">AI Chat</p>
            <p className="text-[12px] text-[#667085]">Your HRMS intelligent assistant</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#12b76a]" />
            <span className="text-[12px] text-[#667085]">Online</span>
          </div>
        </div>

        {/* Welcome */}
        {!started && (
          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-[32px] py-[32px]">
            <div className="w-full max-w-[600px] flex flex-col items-center text-center">
              <div className="w-[60px] h-[60px] rounded-[16px] bg-gradient-to-br from-[#3a58ef] to-[#7f56d9] flex items-center justify-center mb-[20px] shadow-[0px_4px_16px_rgba(58,88,239,0.3)]">
                <SparkleIcon size={26} color="white" />
              </div>
              <h1 className="font-bold text-[26px] text-[#101828] mb-[6px]">{getGreeting()}, <span className="bg-gradient-to-r from-[#3a58ef] to-[#7f56d9] bg-clip-text text-transparent">John Smith</span></h1>
              <p className="text-[14px] text-[#667085] mb-[32px] leading-[22px]">Script a task and your AI Agent can do the rest. Not sure where to start?</p>

              {/* Quick action grid */}
              <div className="grid grid-cols-3 gap-[10px] w-full mb-[32px]">
                {QUICK.map(q => (
                  <button key={q.prompt} onClick={() => fire(q.prompt)} className="flex items-center justify-between px-[14px] py-[11px] border border-[#eaecf0] rounded-[10px] text-left hover:border-[#c5cae0] hover:bg-[#f8f9ff] hover:shadow-[0px_2px_8px_rgba(16,24,40,0.06)] transition-all group">
                    <span className="text-[13px] font-medium text-[#344054] group-hover:text-[#101828]">{q.label}</span>
                    <ChevronRight className="size-[13px] text-[#c5cae0] group-hover:text-[#3a58ef] flex-shrink-0 ml-[6px]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {started && (
          <div className="flex-1 overflow-y-auto px-[28px] py-[24px] flex flex-col gap-[22px] bg-white">
            {messages.map(m => <Msg key={m.id} msg={m} onFollow={fire} />)}
            {isTyping && (
              <div className="flex gap-[10px]">
                <div className="w-[28px] h-[28px] rounded-full bg-gradient-to-br from-[#3a58ef] to-[#7f56d9] flex items-center justify-center flex-shrink-0"><SparkleIcon size={12} color="white" /></div>
                <div className="bg-[#f8f9ff] border border-[#eaecf0] rounded-[14px] rounded-tl-[4px] px-[14px]"><TypingDots /></div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}

        {/* Input */}
        <div className="px-[24px] pb-[18px] pt-[12px] border-t border-[#eaecf0] bg-white flex-shrink-0">
          {pending.length > 0 && (
            <div className="flex flex-wrap gap-[6px] mb-[8px]">
              {pending.map(a => (
                <div key={a.id} className="flex items-center gap-[6px] bg-[#f0f3fe] border border-[#c5cae0] rounded-[8px] px-[10px] py-[5px]">
                  {a.kind === 'image' && a.url ? <img src={a.url} alt={a.name} className="w-[24px] h-[24px] rounded-[3px] object-cover" /> : <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="10" height="12" rx="2" stroke="#3a58ef" strokeWidth="1.3"/><path d="M4 5h6M4 8h4" stroke="#3a58ef" strokeWidth="1.2" strokeLinecap="round"/></svg>}
                  <span className="text-[11px] font-medium text-[#344054] max-w-[80px] truncate">{a.name}</span>
                  <button onClick={() => setPending(p => p.filter(x => x.id !== a.id))} className="text-[#98a2b3] hover:text-[#f04438]"><X className="size-[11px]" /></button>
                </div>
              ))}
            </div>
          )}
          <div className="border border-[#d0d5dd] rounded-[10px] focus-within:border-[#3a58ef] focus-within:shadow-[0px_0px_0px_3px_rgba(58,88,239,0.08)] transition-all bg-white overflow-hidden">
            <div className="px-[14px] pt-[12px] pb-[8px]">
              <textarea ref={taRef} value={input} onChange={onInput} onKeyDown={onKey} placeholder="Summarize the latest…" rows={1} className="w-full text-[14px] text-[#101828] outline-none resize-none leading-[22px] bg-transparent placeholder:text-[#98a2b3]" />
            </div>
            <div className="flex items-center justify-between px-[12px] pb-[10px]">
              <div className="flex items-center gap-[4px]">
                <button onClick={() => fileRef.current?.click()} className="flex items-center gap-[5px] px-[8px] py-[5px] rounded-[6px] text-[12px] text-[#667085] hover:bg-[#f9fafb] hover:text-[#344054] transition-colors"><Paperclip className="size-[13px]" />Attach</button>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="text-[11px] text-[#98a2b3]">{input.length} / 3,000</span>
                <button onClick={() => fire(input)} disabled={!input.trim() && pending.length === 0} className="w-[32px] h-[32px] rounded-[7px] bg-[#3a58ef] flex items-center justify-center hover:bg-[#2d47d1] disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                  <Send className="size-[13px] text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-[8px]">
            <p className="text-[11px] text-[#667085]">Powered by · <span className="font-semibold text-[#101828]">MYCPE ONE</span></p>
            <p className="text-[10px] text-[#98a2b3] mt-[2px] leading-[15px]">AI-generated responses may not always be accurate or complete. Please verify important information before making decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
