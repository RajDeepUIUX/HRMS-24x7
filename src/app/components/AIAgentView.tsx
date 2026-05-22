import { useState, useRef, useEffect } from 'react';
import { Send, Plus, X, Clock, ChevronRight, Paperclip, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────
type Attachment = { id: string; name: string; kind: 'image' | 'doc'; url?: string; size: string };
type Message = { id: string; role: 'user' | 'assistant'; content: string; timestamp: Date; attachments?: Attachment[] };
type Conversation = { id: string; title: string; preview: string; timeLabel: string };
type AIResponse = { blocks: Block[]; follow?: string[] };
type Block =
  | { type: 'text'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'cards'; items: { label: string; value: string; note?: string }[] };

// ── Shared response engine ─────────────────────────────────────────────────────
function buildResponse(msg: string, attachments?: Attachment[]): AIResponse {
  const lower = msg.toLowerCase();
  if (attachments && attachments.length > 0) {
    const imgs = attachments.filter(a => a.kind === 'image');
    const docs = attachments.filter(a => a.kind === 'doc');
    const parts: Block[] = [];
    if (imgs.length) parts.push({ type: 'text', content: `I can see ${imgs.length === 1 ? 'your image' : `${imgs.length} images`}. I've noted it for context. If this is related to an HR matter (attendance slip, payslip, document), please let me know and I'll assist accordingly.` });
    if (docs.length) parts.push({ type: 'text', content: `I received **${docs.map(d => d.name).join(', ')}**. Document processing is being handled. If this is a payslip, leave form, or HR document, I can help you interpret or respond to it.` });
    return { blocks: parts, follow: ['Explain this document', 'Is this a valid leave form?', 'Summarize this'] };
  }
  if (lower.includes('task') || lower.includes('pending')) return { blocks: [{ type: 'text', content: "Here's your current task overview, John:" }, { type: 'list', items: ['🔴 Tax Returns Review — Due tomorrow', '🟡 Client Report Q4 — Due Friday, May 24', '🟢 Staff Onboarding Checklist — Due May 27'] }, { type: 'text', content: 'You have **3 pending tasks** this week. The Tax Returns Review is marked high priority — start with that today.' }], follow: ['Show task details', 'Highest priority task?', 'Mark a task complete'] };
  if (lower.includes('attendance')) return { blocks: [{ type: 'text', content: "Here's your attendance summary for May 2025:" }, { type: 'cards', items: [{ label: 'Days Present', value: '18', note: 'Out of 22 working days' }, { label: 'On Leave', value: '1', note: 'Approved' }, { label: 'Attendance Rate', value: '94.7%', note: 'Above average' }, { label: 'Late Arrivals', value: '2', note: 'Minor' }] }, { type: 'text', content: 'Your attendance is above the team average of 91%. Keep it up!' }], follow: ['Apply for leave', 'Show last month', 'Download report'] };
  if (lower.includes('benefit') || lower.includes('payroll') || lower.includes('salary')) return { blocks: [{ type: 'text', content: "You're currently enrolled in the following benefits, John:" }, { type: 'list', items: ['🏥 Health Insurance — 5,000 USD/year', '🍽️ Meal Allowance — 150 USD/month', '🚗 Transport Allowance — 300 USD/month', '💰 Annual Bonus — 2,000 USD', '🏋️ Gym Membership — 80 USD/month'] }, { type: 'text', content: 'Your total monthly benefits come to approximately **2,530 USD** (excluding annual bonus).' }], follow: ['Payslip details', 'Next salary credit?', 'Benefits history'] };
  if (lower.includes('leave') && (lower.includes('request') || lower.includes('apply') || lower.includes('write') || lower.includes('draft') || lower.includes('help'))) return { blocks: [{ type: 'text', content: "Here's a professional leave request draft for you:" }, { type: 'text', content: "**Subject:** Leave Application — John Smith\n\n**To:** HR Department / [Manager Name]\n\nDear [Manager's Name],\n\nI would like to formally request leave from **[Start Date]** to **[End Date]**.\n\n**Reason:** [Personal / Medical / Vacation]\n\nI will ensure all pending tasks are completed or properly handed over before my leave. Kindly approve at your earliest convenience.\n\nWarm regards,\nJohn Smith · EMP-2024" }], follow: ['Fill in dates', 'Who do I submit this to?', 'Check leave balance'] };
  if (lower.includes('profile') || lower.includes('my info')) return { blocks: [{ type: 'text', content: "Here's a quick overview of your profile:" }, { type: 'cards', items: [{ label: 'Employee ID', value: 'EMP-2024' }, { label: 'Experience', value: '3 Yrs 2 Mo', note: 'At MyCPE' }, { label: 'Learning Hours', value: '28 Hrs' }, { label: 'Skills', value: '8 skills', note: 'On record' }] }, { type: 'text', content: 'Your profile completion is at **70%**. Fill in Professional Details and Skill Set to improve your score.' }], follow: ['Complete my profile', 'Update skills', 'Professional details'] };
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return { blocks: [{ type: 'text', content: "Hello, John! Great to hear from you 👋\n\nI can help you with tasks, attendance, benefits, leave requests, profile, skills, and more." }, { type: 'text', content: "What would you like to know today?" }] };
  if (lower.includes('thank')) return { blocks: [{ type: 'text', content: "You're welcome, John! Happy to help anytime. Is there anything else you need?" }] };
  return { blocks: [{ type: 'text', content: `I understand you're asking about "${msg.length > 55 ? msg.slice(0, 55) + '…' : msg}". Let me help you with that.` }, { type: 'text', content: 'I can assist with tasks, attendance, benefits, leave requests, skills, and general HR queries. Could you provide more context?' }], follow: ['My task status', 'Attendance this month', 'My benefits', 'Draft leave request'] };
}

// ── Shared helpers ─────────────────────────────────────────────────────────────
function getGreeting() {
  const h = new Date().getHours();
  return h < 12 ? 'Good Morning' : h < 17 ? 'Good Afternoon' : 'Good Evening';
}

function fmtSize(bytes: number) {
  return bytes < 1048576 ? `${(bytes / 1024).toFixed(0)} KB` : `${(bytes / 1048576).toFixed(1)} MB`;
}

function StarIcon({ size = 16, color = '#3a58ef' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 20 20" fill="none"><path d="M10 1.5L12 8H18.5L13.5 12L15.5 18.5L10 14.5L4.5 18.5L6.5 12L1.5 8H8L10 1.5Z" fill={color} /></svg>;
}

function TypingDots() {
  return (
    <div className="flex items-center gap-[5px] py-[6px] px-[2px]">
      {[0, 1, 2].map(i => <span key={i} className="w-[7px] h-[7px] rounded-full bg-[#3a58ef]" style={{ animation: 'aiD 1.2s ease-in-out infinite', animationDelay: `${i * 0.2}s` }} />)}
      <style>{`@keyframes aiD{0%,80%,100%{transform:translateY(0);opacity:.35}40%{transform:translateY(-6px);opacity:1}}`}</style>
    </div>
  );
}

function renderMd(text: string) {
  return text.split('\n').map((line, i, arr) => {
    const html = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return <span key={i}><span dangerouslySetInnerHTML={{ __html: html }} />{i < arr.length - 1 && <br />}</span>;
  });
}

function extractText(content: string): string {
  try {
    const parsed = JSON.parse(content) as AIResponse;
    return parsed.blocks.map(b => b.type === 'text' ? b.content : b.type === 'list' ? b.items.join('\n') : b.items.map(c => `${c.label}: ${c.value}`).join('\n')).join('\n\n');
  } catch { return content; }
}

// ── Message bubble ─────────────────────────────────────────────────────────────
function Bubble({ msg }: { msg: Message }) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState<'up' | 'down' | null>(null);
  const isUser = msg.role === 'user';
  if (isUser) {
    return (
      <div className="flex justify-end gap-[10px] group">
        <div className="flex flex-col items-end gap-[4px] max-w-[68%]">
          {msg.attachments && msg.attachments.length > 0 && (
            <div className="flex flex-wrap gap-[6px] justify-end mb-[4px]">
              {msg.attachments.map(a => a.kind === 'image' && a.url ? (
                <img key={a.id} src={a.url} alt={a.name} className="max-h-[160px] max-w-[220px] rounded-[10px] border border-white/20 object-cover" />
              ) : (
                <div key={a.id} className="flex items-center gap-[6px] bg-[#2d47d1] rounded-[8px] px-[10px] py-[7px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="10" height="12" rx="2" stroke="white" strokeWidth="1.3"/><path d="M4 5h6M4 8h4" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  <span className="text-[12px] text-white font-medium truncate max-w-[100px]">{a.name}</span>
                  <span className="text-[10px] text-white/60">{a.size}</span>
                </div>
              ))}
            </div>
          )}
          {msg.content && (
            <div className="bg-[#3a58ef] text-white px-[16px] py-[11px] rounded-[14px] rounded-tr-[4px] shadow-[0px_1px_3px_rgba(58,88,239,0.25)]">
              <p className="text-[14px] leading-[22px]">{msg.content}</p>
            </div>
          )}
          <p className="text-[10px] text-[#98a2b3] opacity-0 group-hover:opacity-100 transition-opacity">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-[#3a58ef] flex items-center justify-center flex-shrink-0 mt-[1px]">
          <span className="text-[11px] font-bold text-white">JS</span>
        </div>
      </div>
    );
  }
  let parsed: AIResponse | null = null;
  try { parsed = JSON.parse(msg.content) as AIResponse; } catch { /**/ }
  const blocks = parsed?.blocks ?? [];
  const follow = parsed?.follow;
  return (
    <div className="flex gap-[10px] group">
      <div className="w-[30px] h-[30px] rounded-full bg-[#ebeefd] flex items-center justify-center flex-shrink-0 mt-[1px]">
        <StarIcon size={13} color="#3a58ef" />
      </div>
      <div className="flex flex-col gap-[4px] max-w-[72%]">
        <div className="bg-white border border-[#eaecf0] rounded-[14px] rounded-tl-[4px] px-[16px] py-[12px] shadow-[0px_1px_3px_rgba(16,24,40,0.06)]">
          {!parsed && <p className="text-[14px] text-[#344054] leading-[22px]">{msg.content}</p>}
          {blocks.map((b, i) => {
            if (b.type === 'text') return <p key={i} className={`text-[14px] text-[#344054] leading-[22px] ${i > 0 ? 'mt-[10px]' : ''}`}>{renderMd(b.content)}</p>;
            if (b.type === 'list') return <ul key={i} className="mt-[10px] flex flex-col gap-[6px]">{b.items.map((it, j) => <li key={j} className="text-[14px] text-[#344054] leading-[22px] flex gap-[8px]"><span className="shrink-0">{it.slice(0, 2)}</span><span>{it.slice(2).trim()}</span></li>)}</ul>;
            if (b.type === 'cards') return <div key={i} className="mt-[12px] grid grid-cols-2 gap-[8px]">{b.items.map((c, j) => <div key={j} className="bg-[#f8f9ff] border border-[#eaecf0] rounded-[8px] px-[12px] py-[10px]"><p className="text-[11px] text-[#667085] mb-[2px]">{c.label}</p><p className="text-[15px] font-bold text-[#101828]">{c.value}</p>{c.note && <p className="text-[10px] text-[#98a2b3]">{c.note}</p>}</div>)}</div>;
            return null;
          })}
        </div>
        {follow && follow.length > 0 && (
          <div className="flex flex-wrap gap-[6px] mt-[4px]">
            {follow.map(f => <button key={f} onClick={() => window.dispatchEvent(new CustomEvent('ai-fu', { detail: f }))} className="text-[12px] font-medium text-[#3a58ef] bg-[#f0f3fe] border border-[#d0d5dd] rounded-full px-[12px] py-[5px] hover:bg-[#ebeefd] hover:border-[#c5cae0] transition-colors">{f}</button>)}
          </div>
        )}
        <div className="flex items-center gap-[10px] pl-[2px] mt-[4px]">
          <span className="text-[11px] text-[#98a2b3]">{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <button onClick={() => { navigator.clipboard.writeText(extractText(msg.content)); setCopied(true); setTimeout(() => setCopied(false), 1800); }} className={`transition-colors ${copied ? 'text-[#12b76a]' : 'text-[#98a2b3] hover:text-[#344054]'}`} title="Copy"><Copy className="size-[13px]" /></button>
          <button onClick={() => setLiked(liked === 'up' ? null : 'up')} className={`transition-colors ${liked === 'up' ? 'text-[#3a58ef]' : 'text-[#98a2b3] hover:text-[#344054]'}`} title="Helpful"><ThumbsUp className="size-[13px]" /></button>
          <button onClick={() => setLiked(liked === 'down' ? null : 'down')} className={`transition-colors ${liked === 'down' ? 'text-[#f04438]' : 'text-[#98a2b3] hover:text-[#344054]'}`} title="Not helpful"><ThumbsDown className="size-[13px]" /></button>
        </div>
      </div>
    </div>
  );
}

// ── Quick actions ──────────────────────────────────────────────────────────────
const QUICK_ACTIONS = [
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 10h8M6 6h8M6 14h4" stroke="#3a58ef" strokeWidth="1.6" strokeLinecap="round"/><rect x="2" y="2" width="16" height="16" rx="3" stroke="#3a58ef" strokeWidth="1.6"/></svg>, bg: '#f0f3fe', title: "What's my task status?", desc: 'Pending, in-progress, and completed task summary.', prompt: "What's my current task status?" },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="13" rx="2" stroke="#7f56d9" strokeWidth="1.6"/><path d="M7 2v4M13 2v4M3 9h14" stroke="#7f56d9" strokeWidth="1.6" strokeLinecap="round"/></svg>, bg: '#f5f0ff', title: 'Attendance summary', desc: 'View your records and patterns for this month.', prompt: 'Show my attendance summary for this month' },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2Z" stroke="#12b76a" strokeWidth="1.6"/><path d="M10 6v4l3 2" stroke="#12b76a" strokeWidth="1.6" strokeLinecap="round"/></svg>, bg: '#f0fdf4', title: 'Benefits & payroll', desc: 'Check enrolled benefits and latest payroll info.', prompt: 'What benefits am I eligible for?' },
  { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4h12v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Z" stroke="#f79009" strokeWidth="1.6"/><path d="M8 9h4M8 12h2M7 4V2M13 4V2" stroke="#f79009" strokeWidth="1.6" strokeLinecap="round"/></svg>, bg: '#fffaeb', title: 'Draft a leave request', desc: 'Write a professional leave request in seconds.', prompt: 'Help me write a leave request' },
];

const HISTORY: Conversation[] = [
  { id: 'h1', title: 'Attendance this month', preview: 'Your attendance: 18 days present…', timeLabel: 'Today' },
  { id: 'h2', title: 'Leave request help', preview: "Here's a draft leave request…", timeLabel: 'Yesterday' },
  { id: 'h3', title: 'Benefits overview', preview: "You're enrolled in Health Insurance…", timeLabel: 'May 15' },
  { id: 'h4', title: 'Task summary', preview: '3 pending tasks this week…', timeLabel: 'May 14' },
  { id: 'h5', title: 'Payroll query', preview: 'Last payslip processed May 1…', timeLabel: 'May 10' },
];

// ── Main Component ─────────────────────────────────────────────────────────────
export default function AIAgentView() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [pending, setPending] = useState<Attachment[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const started = messages.length > 0;

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping]);

  useEffect(() => {
    const h = (e: Event) => fire((e as CustomEvent<string>).detail);
    window.addEventListener('ai-fu', h);
    return () => window.removeEventListener('ai-fu', h);
  });

  const fire = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed && pending.length === 0) return;
    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: trimmed, timestamp: new Date(), attachments: pending };
    setMessages(p => [...p, userMsg]);
    setInput(''); setPending([]);
    if (taRef.current) taRef.current.style.height = 'auto';
    setIsTyping(true);
    setTimeout(() => {
      setMessages(p => [...p, { id: (Date.now() + 1).toString(), role: 'assistant', content: JSON.stringify(buildResponse(trimmed, pending)), timestamp: new Date() }]);
      setIsTyping(false);
    }, 900 + Math.random() * 600);
  };

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); fire(input); } };
  const onInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setInput(e.target.value); e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 140) + 'px'; };
  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    Array.from(e.target.files || []).forEach(f => {
      const id = Date.now() + Math.random().toString();
      const size = fmtSize(f.size);
      if (f.type.startsWith('image/')) { const url = URL.createObjectURL(f); setPending(p => [...p, { id, name: f.name, kind: 'image', url, size }]); }
      else { setPending(p => [...p, { id, name: f.name, kind: 'doc', size }]); }
    });
    e.target.value = '';
  };
  const newChat = () => { setMessages([]); setInput(''); setIsTyping(false); setPending([]); setShowHistory(false); };

  return (
    <div className="flex h-full w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] overflow-hidden bg-white">
      <input ref={fileRef} type="file" multiple accept="image/*,.pdf,.doc,.docx,.xlsx,.csv,.txt" className="hidden" onChange={onFile} />

      {/* ── Chat area ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-[#eaecf0] bg-white flex-shrink-0">
          <div className="flex items-center gap-[10px]">
            {started && <button onClick={newChat} className="flex items-center gap-[6px] px-[12px] py-[7px] border border-[#d0d5dd] rounded-[6px] text-[13px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors"><Plus className="size-[14px]" />New Chat</button>}
            <div className="flex items-center gap-[8px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#ebeefd] flex items-center justify-center"><StarIcon size={13} color="#3a58ef" /></div>
              <div><p className="font-semibold text-[14px] text-[#101828] leading-[18px]">AI Agent</p><div className="flex items-center gap-[4px]"><span className="w-[5px] h-[5px] rounded-full bg-[#12b76a]" /><span className="text-[11px] text-[#667085]">Online</span></div></div>
            </div>
          </div>
          <button onClick={() => setShowHistory(!showHistory)} className={`flex items-center gap-[6px] px-[12px] py-[7px] border rounded-[6px] text-[13px] font-semibold transition-colors ${showHistory ? 'bg-[#f0f3fe] border-[#c5cae0] text-[#3a58ef]' : 'border-[#d0d5dd] text-[#344054] hover:bg-[#f9fafb]'}`}>
            <Clock className="size-[13px]" />History
          </button>
        </div>

        {/* Welcome */}
        {!started && (
          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-[24px] py-[40px]">
            <div className="w-full max-w-[680px] flex flex-col items-center">
              <div className="w-[56px] h-[56px] rounded-full bg-[#ebeefd] border-[6px] border-[#f0f3fe] flex items-center justify-center mb-[20px] shadow-[0px_2px_8px_rgba(58,88,239,0.14)]"><StarIcon size={22} color="#3a58ef" /></div>
              <h1 className="font-bold text-[28px] text-[#101828] leading-[36px] mb-[8px] text-center">{getGreeting()}, <span className="text-[#3a58ef]">John Smith</span></h1>
              <p className="text-[15px] text-[#667085] mb-[36px] text-center leading-[22px]">How can I help you today? Ask me anything about your HRMS data.</p>
              <div className="grid grid-cols-2 gap-[12px] w-full mb-[36px]">
                {QUICK_ACTIONS.map(a => (
                  <button key={a.prompt} onClick={() => fire(a.prompt)} className="flex items-start gap-[14px] p-[18px] border border-[#eaecf0] rounded-[12px] text-left hover:border-[#c5cae0] hover:bg-[#fafbff] hover:shadow-[0px_2px_8px_rgba(16,24,40,0.06)] transition-all group">
                    <div className="w-[36px] h-[36px] rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: a.bg }}>{a.icon}</div>
                    <div className="flex-1 min-w-0"><div className="flex items-center justify-between"><p className="font-semibold text-[14px] text-[#101828] leading-[20px] mb-[4px]">{a.title}</p><ChevronRight className="size-[14px] text-[#c5cae0] group-hover:text-[#3a58ef] transition-colors flex-shrink-0 ml-[4px]" /></div><p className="text-[12px] text-[#667085] leading-[18px]">{a.desc}</p></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        {started && (
          <div className="flex-1 overflow-y-auto px-[32px] py-[24px] flex flex-col gap-[24px] bg-[#fafbff]">
            {messages.map(m => <Bubble key={m.id} msg={m} />)}
            {isTyping && (
              <div className="flex gap-[10px]">
                <div className="w-[30px] h-[30px] rounded-full bg-[#ebeefd] flex items-center justify-center flex-shrink-0"><StarIcon size={13} color="#3a58ef" /></div>
                <div className="bg-white border border-[#eaecf0] rounded-[14px] rounded-tl-[4px] px-[14px] shadow-[0px_1px_3px_rgba(16,24,40,0.06)]"><TypingDots /></div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
        )}

        {/* Input */}
        <div className={`px-[24px] pb-[20px] flex-shrink-0 bg-white ${started ? 'pt-[12px] border-t border-[#eaecf0]' : 'pt-[0px]'}`}>
          <div className="w-full max-w-[680px] mx-auto">
            {/* Pending attachments */}
            {pending.length > 0 && (
              <div className="flex flex-wrap gap-[6px] mb-[8px]">
                {pending.map(a => (
                  <div key={a.id} className="flex items-center gap-[6px] bg-[#f0f3fe] border border-[#c5cae0] rounded-[8px] px-[10px] py-[6px]">
                    {a.kind === 'image' && a.url ? <img src={a.url} alt={a.name} className="w-[28px] h-[28px] rounded-[4px] object-cover" /> : <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="1" width="10" height="12" rx="2" stroke="#3a58ef" strokeWidth="1.3"/><path d="M4 5h6M4 8h4" stroke="#3a58ef" strokeWidth="1.2" strokeLinecap="round"/></svg>}
                    <span className="text-[12px] font-medium text-[#344054] max-w-[100px] truncate">{a.name}</span>
                    <span className="text-[10px] text-[#98a2b3]">{a.size}</span>
                    <button onClick={() => setPending(p => p.filter(x => x.id !== a.id))} className="text-[#98a2b3] hover:text-[#f04438] transition-colors"><X className="size-[12px]" /></button>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-end gap-[10px] border border-[#d0d5dd] rounded-[12px] px-[16px] py-[12px] focus-within:border-[#3a58ef] focus-within:shadow-[0px_0px_0px_3px_rgba(58,88,239,0.08)] transition-all bg-white shadow-[0px_1px_4px_rgba(16,24,40,0.06)]">
              <button onClick={() => fileRef.current?.click()} className="text-[#98a2b3] hover:text-[#3a58ef] transition-colors flex-shrink-0 mb-[1px]" title="Attach file"><Paperclip className="size-[17px]" /></button>
              <textarea ref={taRef} value={input} onChange={onInput} onKeyDown={onKey} placeholder={started ? 'Write a message…' : 'Ask me anything about your HRMS data…'} rows={1} className="flex-1 text-[14px] text-[#101828] outline-none resize-none leading-[22px] bg-transparent placeholder:text-[#98a2b3]" />
              <button onClick={() => fire(input)} disabled={!input.trim() && pending.length === 0} className="w-[34px] h-[34px] rounded-[8px] bg-[#3a58ef] flex items-center justify-center hover:bg-[#2d47d1] disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex-shrink-0"><Send className="size-[14px] text-white" /></button>
            </div>
            <div className="text-center mt-[8px]">
              <p className="text-[11px] text-[#667085]">Powered by · <span className="font-semibold text-[#101828]">MYCPE ONE</span></p>
              <p className="text-[10px] text-[#98a2b3] mt-[2px] leading-[15px]">AI-generated responses may not always be accurate or complete. Please verify important information before making decisions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* History panel */}
      {showHistory && (
        <div className="w-[280px] flex-shrink-0 border-l border-[#eaecf0] flex flex-col bg-[#fafbff]">
          <div className="flex items-center justify-between px-[18px] py-[14px] border-b border-[#eaecf0]">
            <p className="font-semibold text-[14px] text-[#101828]">Recent Chats</p>
            <button onClick={() => setShowHistory(false)} className="text-[#98a2b3] hover:text-[#344054] transition-colors"><X className="size-[16px]" /></button>
          </div>
          <div className="flex-1 overflow-y-auto py-[6px]">
            {HISTORY.map(c => (
              <button key={c.id} onClick={newChat} className="w-full text-left px-[18px] py-[12px] hover:bg-[#f0f3fe] transition-colors group">
                <div className="flex items-start justify-between gap-[8px]"><p className="font-medium text-[13px] text-[#344054] group-hover:text-[#3a58ef] transition-colors line-clamp-1">{c.title}</p><span className="text-[10px] text-[#98a2b3] whitespace-nowrap flex-shrink-0 mt-[1px]">{c.timeLabel}</span></div>
                <p className="text-[12px] text-[#98a2b3] mt-[2px] line-clamp-1">{c.preview}</p>
              </button>
            ))}
          </div>
          <div className="px-[18px] py-[14px] border-t border-[#eaecf0]">
            <button onClick={newChat} className="w-full flex items-center justify-center gap-[6px] px-[14px] py-[9px] bg-[#3a58ef] rounded-[6px] text-[13px] font-semibold text-white hover:bg-[#2d47d1] transition-colors"><Plus className="size-[14px]" />New Conversation</button>
          </div>
        </div>
      )}
    </div>
  );
}
