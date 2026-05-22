import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Pencil, ChevronDown, Plus, X, Search, GripVertical } from 'lucide-react';

type ProfileTab = 'personal' | 'professional' | 'skills' | 'learning' | 'interview' | 'timesheet' | 'intro';

const TABS: { id: ProfileTab; label: string }[] = [
  { id: 'personal', label: 'Personal Details' },
  { id: 'professional', label: 'Professional Details' },
  { id: 'skills', label: 'Skill Set' },
  { id: 'learning', label: 'Learning & Growth' },
  { id: 'interview', label: 'Interview' },
  { id: 'timesheet', label: 'Timesheet Summary' },
  { id: 'intro', label: 'Profile Introduction' },
];

const PROFILE = {
  name: 'John Smith',
  yearsLabel: 'Total Years with MyCPE',
  years: '3 Yrs 2 Mo',
  learningHours: '28 Hrs',
  skills: '8',
  completion: 70,
  personal: {
    employeeId: 'EMP-2024',
    fullName: 'John Smith',
    officialEmail: 'john.smith@gytap.com',
    personalEmail: 'john.smith.personal@gmail.com',
    location: 'Mumbai, India',
    currentWorkmode: 'Work From Home',
    workmodePreference: 'Hybrid',
    shiftTiming: '9:00 AM - 6:00 PM',
    shiftTimingSeasonal: '9:00 AM - 12:00',
  },
  family: {
    fatherName: 'Robert Smith',
    fatherDob: '15 March, 1965',
    fatherPhone: '+91-9876543210',
    motherName: 'Mary Smith',
    motherDob: '20 June, 1968',
    motherPhone: '+91-9876543211',
    maritalStatus: 'Single',
  },
};

const WORKMODE_OPTIONS = ['Work From Home', 'Work From Office', 'Hybrid'];
const SHIFT_OPTIONS = ['9:00 AM - 6:00 PM', '10:00 AM - 7:00 PM', '8:00 AM - 5:00 PM', '11:00 AM - 8:00 PM'];
const SHIFT_SEASONAL_OPTIONS = ['9:00 AM - 12:00', '9:00 AM - 1:00 PM', '9:00 AM - 2:00 PM', '10:00 AM - 1:00 PM'];
const MARITAL_OPTIONS = ['Single', 'Married', 'Divorced', 'Widowed'];
const CHILDREN_COUNT_OPTIONS = ['0', '1', '2', '3', '4', '5'];
const GENDER_OPTIONS = ['Male', 'Female', 'Other'];
const RELATION_OPTIONS = ['Brother', 'Sister', 'Uncle', 'Aunt', 'Cousin', 'Grandparent', 'Other'];

// ── Skill Set types & constants ──────────────────────────────────────────────

type ProficiencyLevel = 'Basic' | 'Average' | 'Intermediate' | 'Advance' | 'Expert';
const PROFICIENCY_LEVELS: ProficiencyLevel[] = ['Basic', 'Average', 'Intermediate', 'Advance', 'Expert'];
type SkillMap = Record<string, Partial<Record<ProficiencyLevel, string[]>>>;

const LEVEL_COLORS: Record<ProficiencyLevel, string> = {
  Basic: '#3a58ef',
  Average: '#7f56d9',
  Intermediate: '#12b76a',
  Advance: '#f79009',
  Expert: '#f04438',
};

const SOFTWARE_CATEGORIES = [
  { id: 'accounting', label: 'Accounting Software', items: ['QuickBooks', 'Xero', 'Sage 50', 'FreshBooks', 'Wave', 'NetSuite', 'Zoho Books', 'MYOB', 'Tally ERP'] },
  { id: 'audit',      label: 'Audit Software',      items: ['CaseWare', 'ProSystem fx', 'TeamMate+', 'IDEA', 'ACL Analytics', 'AuditBoard', 'Inflo'] },
  { id: 'tax',        label: 'Tax Software',         items: ['TurboTax', 'Drake Tax', 'ProConnect Tax', 'Lacerte', 'UltraTax CS', 'GoSystem Tax'] },
  { id: 'other',      label: 'Other Software',       items: ['Microsoft Excel', 'Microsoft Word', 'Google Sheets', 'Tableau', 'Power BI', 'Salesforce', 'SAP'] },
  { id: 'technical',  label: 'Technical Skills',     items: ['Python', 'SQL', 'VBA', 'Power Query', 'DAX', 'JavaScript', 'R Programming'] },
];

const DOMAIN_OPTIONS      = ['Accounting', 'Audit', 'Tax', 'Finance', 'Bookkeeping', 'Payroll', 'Advisory'];
const WORK_TYPE_OPTIONS   = ['Review', 'Preparation', 'Compilation', 'Advisory', 'Compliance', 'Bookkeeping'];
const TIMESHEET_LEVELS    = Array.from({ length: 10 }, (_, i) => `Level ${i + 1}`);
const END_CLIENT_OPTIONS  = ['No Communication', 'Phone Only', 'Email Only', 'Phone & Email', 'All Channels'];
const QUALITY_OPTIONS     = ['Poor', 'Below Average', 'Average', 'Good', 'Excellent'];
const RESP_OPTIONS        = ['Content Developer', 'Team Lead', 'Reviewer', 'Trainer', 'Subject Matter Expert', 'Quality Analyst', 'Process Lead'];
const YES_NO              = ['Yes', 'No'];

const SOFTWARE_MASTER: { name: string; domain: string }[] = [
  { name: 'QuickBooks', domain: 'Accounting' },
  { name: 'Oracle NetSuite', domain: 'Accounting' },
  { name: 'Xero', domain: 'Accounting' },
  { name: 'Sage 50', domain: 'Accounting' },
  { name: 'Sage', domain: 'Accounting' },
  { name: 'FreshBooks', domain: 'Accounting' },
  { name: 'Wave', domain: 'Accounting' },
  { name: 'NetSuite', domain: 'Accounting' },
  { name: 'Zoho Books', domain: 'Accounting' },
  { name: 'MYOB', domain: 'Accounting' },
  { name: 'Tally ERP', domain: 'Accounting' },
  { name: 'CaseWare', domain: 'Audit' },
  { name: 'ProSystem fx', domain: 'Audit' },
  { name: 'TeamMate+', domain: 'Audit' },
  { name: 'IDEA', domain: 'Audit' },
  { name: 'ACL Analytics', domain: 'Audit' },
  { name: 'AuditBoard', domain: 'Audit' },
  { name: 'Inflo', domain: 'Audit' },
  { name: 'TurboTax', domain: 'Tax' },
  { name: 'Drake Tax', domain: 'Tax' },
  { name: 'ProConnect Tax', domain: 'Tax' },
  { name: 'Lacerte', domain: 'Tax' },
  { name: 'UltraTax CS', domain: 'Tax' },
  { name: 'GoSystem Tax', domain: 'Tax' },
  { name: 'Microsoft Excel', domain: 'Other' },
  { name: 'Microsoft Word', domain: 'Other' },
  { name: 'Google Sheets', domain: 'Other' },
  { name: 'Tableau', domain: 'Other' },
  { name: 'Power BI', domain: 'Other' },
  { name: 'Salesforce', domain: 'Other' },
  { name: 'SAP', domain: 'Other' },
];

const TECHNICAL_SKILLS_LIST: string[] = [
  'Python', 'SQL', 'VBA', 'Power Query', 'DAX', 'JavaScript', 'R Programming',
  'TypeScript', 'C#', 'Java', 'HTML/CSS', 'REST APIs', 'Azure', 'AWS', 'Docker', 'Git',
];

// ── Shared utility components ─────────────────────────────────────────────────

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <p className="font-normal leading-[18px] text-[12px] text-[#667085]">{label}</p>
      <p className="font-normal leading-[24px] text-[14px] text-[#101828]">{value}</p>
    </div>
  );
}

function SectionDivider() {
  return <div className="w-full h-px bg-[#eaecf0] my-[20px]" />;
}

function SelectField({
  label, value, options, onChange, placeholder = 'Select', disabled = false, required = false, showError = false,
}: {
  label: string; value: string; options: string[]; onChange: (v: string) => void;
  placeholder?: string; disabled?: boolean; required?: boolean; showError?: boolean;
}) {
  const hasError = showError && required && !value;
  return (
    <div className="flex flex-col gap-[4px]">
      <p className="font-normal leading-[18px] text-[12px] text-[#667085]">
        {label}{required && <span className="text-[#f04438] ml-[2px]">*</span>}
      </p>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`w-full font-normal text-[14px] border rounded-[6px] px-[12px] py-[8px] focus:outline-none appearance-none pr-[36px] leading-[24px] transition-colors ${
            disabled
              ? 'bg-[#f9fafb] text-[#98a2b3] cursor-not-allowed border-[#d0d5dd]'
              : hasError
              ? 'bg-white text-[#101828] cursor-pointer border-[#f04438] focus:border-[#f04438]'
              : 'bg-white text-[#101828] cursor-pointer border-[#d0d5dd] focus:border-[#3a58ef]'
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className={`absolute right-[12px] top-1/2 -translate-y-1/2 size-[16px] pointer-events-none ${disabled ? 'text-[#c5cae0]' : hasError ? 'text-[#f04438]' : 'text-[#667085]'}`} />
      </div>
      {hasError && <p className="text-[11px] text-[#f04438] mt-[1px]">This field is required.</p>}
    </div>
  );
}

function NumberInputField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <p className="font-normal leading-[18px] text-[12px] text-[#667085]">{label}</p>
      <input
        type="number" min="0" value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full font-normal text-[14px] text-[#101828] border border-[#d0d5dd] rounded-[6px] px-[12px] py-[8px] bg-white focus:outline-none focus:border-[#3a58ef] leading-[24px]"
      />
    </div>
  );
}

function TextInputField({ label, value, onChange, placeholder = '', disabled = false }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[4px]">
      <p className="font-normal leading-[18px] text-[12px] text-[#667085]">{label}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full font-normal text-[14px] border border-[#d0d5dd] rounded-[6px] px-[12px] py-[8px] focus:outline-none focus:border-[#3a58ef] leading-[24px] transition-colors ${
          disabled ? 'bg-[#f9fafb] text-[#98a2b3] cursor-not-allowed' : 'bg-white text-[#101828]'
        }`}
      />
    </div>
  );
}

function TagSelectField({
  label, selected, options, onChange, placeholder = 'Select...',
}: {
  label: string; selected: string[]; options: string[]; onChange: (v: string[]) => void; placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  const toggle = (opt: string) =>
    onChange(selected.includes(opt) ? selected.filter((s) => s !== opt) : [...selected, opt]);

  return (
    <div className="flex flex-col gap-[4px]">
      <p className="font-normal leading-[18px] text-[12px] text-[#667085]">{label}</p>
      <div className="relative" ref={ref}>
        <div
          onClick={() => setOpen(!open)}
          className="min-h-[40px] w-full border border-[#d0d5dd] rounded-[6px] px-[10px] py-[6px] bg-white cursor-pointer flex flex-wrap gap-[6px] items-center"
        >
          {selected.length === 0 ? (
            <span className="text-[14px] text-[#98a2b3] flex-1">{placeholder}</span>
          ) : (
            selected.map((item) => (
              <span key={item} className="flex items-center gap-[4px] bg-[#ebeefd] text-[#3a58ef] text-[12px] font-medium px-[8px] py-[2px] rounded-[4px]">
                {item}
                <button onClick={(e) => { e.stopPropagation(); toggle(item); }} className="leading-none">
                  <X className="size-[11px]" />
                </button>
              </span>
            ))
          )}
          <ChevronDown className={`ml-auto size-[16px] text-[#667085] shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
        {open && (
          <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-white border border-[#eaecf0] rounded-[6px] shadow-[0px_4px_12px_rgba(16,24,40,0.08)] z-[50] py-[4px] max-h-[180px] overflow-y-auto">
            {options.map((opt) => {
              const isSel = selected.includes(opt);
              return (
                <button key={opt} onClick={() => toggle(opt)}
                  className={`w-full flex items-center gap-[8px] px-[12px] py-[8px] text-left text-[13px] transition-colors ${isSel ? 'bg-[#f5f8ff] text-[#3a58ef] font-medium' : 'text-[#344054] hover:bg-[#f9fafb]'}`}
                >
                  <div className={`shrink-0 size-[14px] rounded-[3px] border flex items-center justify-center ${isSel ? 'bg-[#3a58ef] border-[#3a58ef]' : 'border-[#d0d5dd]'}`}>
                    {isSel && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </div>
                  {opt}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ── PendingBanner ─────────────────────────────────────────────────────────────

function PendingBanner({ count, tabLabel, onGoTo }: { count: number; tabLabel: string; onGoTo: () => void }) {
  if (count === 0) return null;
  return (
    <div className="flex items-center justify-between px-[16px] py-[11px] bg-[#fff5f5] border border-[#fecdca] rounded-[8px] mb-[20px]">
      <div className="flex items-center gap-[10px]">
        <div className="w-[20px] h-[20px] rounded-full bg-[#f04438] flex items-center justify-center flex-shrink-0">
          <span className="text-[9px] font-bold text-white leading-none">{count}</span>
        </div>
        <p className="text-[13px] text-[#344054]">
          <span className="font-semibold">{count} mandatory {count === 1 ? 'field' : 'fields'}</span> need your attention in {tabLabel}
        </p>
      </div>
      <button onClick={onGoTo} className="text-[13px] font-semibold text-[#3a58ef] hover:underline whitespace-nowrap ml-[16px]">
        Go to Pending Fields
      </button>
    </div>
  );
}

// ── Add Software Popover (portal) ─────────────────────────────────────────────

function AddSoftwarePopover({
  anchorRect, category, level, selectedItems, onToggle, onClose,
}: {
  anchorRect: DOMRect;
  category: { id: string; label: string; items: string[] };
  level: ProficiencyLevel;
  selectedItems: string[];
  onToggle: (item: string) => void;
  onClose: () => void;
}) {
  const [search, setSearch] = useState('');
  const popRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const close = () => onClose();
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => { window.removeEventListener('scroll', close, true); window.removeEventListener('resize', close); };
  }, [onClose]);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (popRef.current && !popRef.current.contains(e.target as Node)) onClose(); };
    setTimeout(() => document.addEventListener('mousedown', h), 0);
    return () => document.removeEventListener('mousedown', h);
  }, [onClose]);

  const filtered = category.items.filter((i) => i.toLowerCase().includes(search.toLowerCase()));
  const isSkills = category.id === 'technical';
  const left = Math.min(anchorRect.left, window.innerWidth - 248);

  return createPortal(
    <div
      ref={popRef}
      style={{ position: 'fixed', top: anchorRect.bottom + 4, left, zIndex: 1000, width: 240 }}
      className="bg-white rounded-[8px] shadow-[0px_8px_24px_rgba(16,24,40,0.12),0px_2px_8px_rgba(16,24,40,0.06)] border border-[#eaecf0]"
    >
      {/* Search */}
      <div className="p-[8px] border-b border-[#eaecf0]">
        <div className="relative">
          <Search className="absolute left-[10px] top-1/2 -translate-y-1/2 size-[14px] text-[#98a2b3]" />
          <input
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Search ${isSkills ? 'skills' : 'software'}...`}
            className="w-full pl-[32px] pr-[10px] py-[7px] text-[13px] border border-[#d0d5dd] rounded-[6px] focus:outline-none focus:border-[#3a58ef]"
          />
        </div>
      </div>

      {/* List */}
      <div className="py-[4px] max-h-[220px] overflow-y-auto">
        {filtered.length === 0 ? (
          <p className="text-[13px] text-[#98a2b3] px-[12px] py-[10px]">No results found</p>
        ) : (
          filtered.map((item) => {
            const isSel = selectedItems.includes(item);
            return (
              <button key={item} onClick={() => onToggle(item)}
                className={`w-full flex items-center gap-[8px] px-[12px] py-[8px] text-left transition-colors ${isSel ? 'bg-[#f5f8ff]' : 'hover:bg-[#f9fafb]'}`}
              >
                <div className={`shrink-0 size-[16px] rounded-[4px] border-[1.5px] flex items-center justify-center ${isSel ? 'bg-[#3a58ef] border-[#3a58ef]' : 'border-[#d0d5dd]'}`}>
                  {isSel && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </div>
                <span className={`text-[13px] ${isSel ? 'font-medium text-[#101828]' : 'font-normal text-[#344054]'}`}>{item}</span>
              </button>
            );
          })
        )}
      </div>

      {/* Footer */}
      <div className="px-[12px] py-[7px] border-t border-[#eaecf0]">
        <p className="text-[11px] text-[#98a2b3]">{selectedItems.length} selected · click to toggle</p>
      </div>
    </div>,
    document.body
  );
}

// ── Skill Drawer (portal) ─────────────────────────────────────────────────────

function SkillDrawer({
  categoryLabel, level, items, onRemove, onClose,
}: {
  categoryLabel: string; level: ProficiencyLevel; items: string[];
  onRemove: (item: string) => void; onClose: () => void;
}) {
  const color = LEVEL_COLORS[level];

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/20 z-[200]" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-[360px] bg-white z-[201] flex flex-col shadow-[-8px_0_32px_rgba(16,24,40,0.12)]">
        {/* Header */}
        <div className="flex items-start justify-between px-[24px] py-[20px] border-b border-[#eaecf0]">
          <div>
            <p className="font-semibold text-[16px] text-[#101828] leading-[24px]">{categoryLabel}</p>
            <div className="flex items-center gap-[6px] mt-[6px]">
              <span className="size-[8px] rounded-full shrink-0" style={{ backgroundColor: color }} />
              <span className="text-[13px] font-semibold" style={{ color }}>{level}</span>
              <span className="text-[13px] text-[#667085]">proficiency</span>
            </div>
          </div>
          <button onClick={onClose} className="text-[#667085] hover:text-[#344054] transition-colors mt-[2px]">
            <X className="size-[20px]" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-[24px] py-[20px]">
          {items.length === 0 ? (
            <div className="flex items-center justify-center h-[120px]">
              <p className="text-[14px] text-[#98a2b3]">No items added yet.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-[8px]">
              {items.map((item, idx) => (
                <div key={item} className="flex items-center justify-between px-[14px] py-[10px] bg-[#f9fafb] border border-[#eaecf0] rounded-[6px] group">
                  <div className="flex items-center gap-[10px]">
                    <span className="size-[22px] rounded-full bg-white border border-[#eaecf0] flex items-center justify-center text-[11px] font-semibold text-[#667085] shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-[14px] text-[#344054]">{item}</span>
                  </div>
                  <button
                    onClick={() => onRemove(item)}
                    className="text-[#c5cae0] hover:text-[#f04438] transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <X className="size-[14px]" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-[24px] py-[14px] border-t border-[#eaecf0] bg-[#f9fafb]">
          <p className="text-[12px] text-[#667085]">
            <span className="font-semibold text-[#344054]">{items.length}</span> {items.length === 1 ? 'item' : 'items'} at{' '}
            <span className="font-semibold" style={{ color }}>{level}</span>
          </p>
        </div>
      </div>
    </>,
    document.body
  );
}

// ── Video Intro types ─────────────────────────────────────────────────────────
type VideoIntro =
  | { type: 'none' }
  | { type: 'link'; url: string }
  | { type: 'file'; filename: string; sizeMb: number; objectUrl: string };

type ModalStep = 'choose' | 'upload' | 'link';

// ── VideoPlayerModal ──────────────────────────────────────────────────────────
function VideoPlayerModal({ filename, objectUrl, onClose }: { filename: string; objectUrl: string; onClose: () => void }) {
  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/70 z-[1000]" onClick={onClose} />
      <div className="fixed inset-0 z-[1001] flex items-center justify-center pointer-events-none p-[24px]">
        <div className="bg-[#101828] rounded-[12px] overflow-hidden shadow-[0px_20px_60px_rgba(0,0,0,0.5)] pointer-events-auto w-full max-w-[720px]">
          <div className="flex items-center justify-between px-[20px] py-[14px] border-b border-white/10">
            <div className="flex items-center gap-[10px] min-w-0">
              <div className="w-[28px] h-[28px] rounded-[4px] bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="2" stroke="white" strokeWidth="1.2"/>
                  <path d="M5 10V4l6 3-6 3z" fill="white"/>
                </svg>
              </div>
              <p className="text-[13px] font-semibold text-white truncate">{filename}</p>
            </div>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors ml-[16px] flex-shrink-0">
              <X className="size-[18px]" />
            </button>
          </div>
          <div className="bg-black">
            <video controls autoPlay src={objectUrl} className="w-full max-h-[480px] block" />
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

// ── VideoIntroModal ───────────────────────────────────────────────────────────
function VideoIntroModal({
  onClose, onSaveLink, onFileReady, initialStep = 'choose', initialLink = '',
}: {
  onClose: () => void;
  onSaveLink: (url: string) => void;
  onFileReady: (file: File) => void;
  initialStep?: ModalStep;
  initialLink?: string;
}) {
  const [step, setStep] = useState<ModalStep>(initialStep);
  const [linkDraft, setLinkDraft] = useState(initialLink);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 200 * 1024 * 1024) { onFileReady(file); onClose(); }
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.size <= 200 * 1024 * 1024) { onFileReady(file); onClose(); }
  };

  const handleSaveLink = () => {
    const trimmed = linkDraft.trim();
    if (!trimmed) return;
    onSaveLink(trimmed);
    onClose();
  };

  const canGoBack = step !== 'choose' && initialStep === 'choose';
  const isEditLink = initialStep === 'link';

  const titles: Record<ModalStep, string> = {
    choose: 'Add Introduction Video',
    upload: 'Upload Introduction Video',
    link: isEditLink ? 'Edit Video Link' : 'Add Video Link',
  };
  const subtitles: Record<ModalStep, string> = {
    choose: "Choose how you'd like to add your intro video",
    upload: 'MP4, MOV, AVI · Max 200 MB',
    link: 'Paste an embed URL from YouTube, Vimeo, or any video platform',
  };

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/40 z-[500]" onClick={onClose} />
      <div className="fixed inset-0 z-[501] flex items-center justify-center pointer-events-none p-[24px]">
        <div className="bg-white rounded-[12px] shadow-[0px_20px_60px_rgba(16,24,40,0.18)] w-full max-w-[480px] pointer-events-auto">
          <input ref={fileInputRef} type="file" accept="video/*" className="hidden" onChange={handleFileInput} />

          {/* Header */}
          <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#eaecf0]">
            <div className="flex items-center gap-[10px] min-w-0">
              {canGoBack && (
                <button
                  onClick={() => setStep('choose')}
                  className="w-[28px] h-[28px] rounded-[4px] flex items-center justify-center text-[#667085] hover:bg-[#f9fafb] hover:text-[#344054] transition-colors flex-shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
              <div className="min-w-0">
                <p className="font-semibold text-[15px] text-[#101828] leading-[22px]">{titles[step]}</p>
                <p className="text-[12px] text-[#667085] leading-[18px] mt-[1px]">{subtitles[step]}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-[#667085] hover:text-[#344054] transition-colors ml-[16px] flex-shrink-0">
              <X className="size-[18px]" />
            </button>
          </div>

          {/* Body */}
          <div className="p-[24px]">

            {step === 'choose' && (
              <div className="grid grid-cols-2 gap-[12px]">
                <button
                  onClick={() => setStep('upload')}
                  className="flex flex-col items-center gap-[12px] p-[24px] border border-[#eaecf0] rounded-[8px] text-center hover:bg-[#f5f8ff] hover:border-[#c5cae0] transition-colors"
                >
                  <div className="w-[44px] h-[44px] rounded-[10px] bg-[#ebeefd] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M11 2v12M7 6l4-4 4 4M2 16v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke="#3a58ef" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[14px] text-[#101828] mb-[4px]">Upload from Device</p>
                    <p className="text-[12px] text-[#667085] leading-[18px]">MP4, MOV, AVI<br/>Max 200 MB</p>
                  </div>
                </button>
                <button
                  onClick={() => setStep('link')}
                  className="flex flex-col items-center gap-[12px] p-[24px] border border-[#eaecf0] rounded-[8px] text-center hover:bg-[#f5f8ff] hover:border-[#c5cae0] transition-colors"
                >
                  <div className="w-[44px] h-[44px] rounded-[10px] bg-[#ebeefd] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M9 11a5 5 0 0 0 7.07.2l1.78-1.78A5 5 0 0 0 10.78 2.5L9 4.21" stroke="#3a58ef" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M11 9a5 5 0 0 0-7.07-.2L2.15 10.58A5 5 0 0 0 9.22 17.5L11 15.79" stroke="#3a58ef" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[14px] text-[#101828] mb-[4px]">Add via Link</p>
                    <p className="text-[12px] text-[#667085] leading-[18px]">Paste a video<br/>embed URL</p>
                  </div>
                </button>
              </div>
            )}

            {step === 'upload' && (
              <div className="flex flex-col gap-[14px]">
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full border-[2px] border-dashed rounded-[8px] py-[44px] px-[24px] flex flex-col items-center gap-[10px] cursor-pointer transition-colors ${
                    isDragging ? 'border-[#3a58ef] bg-[#f5f8ff]' : 'border-[#d0d5dd] hover:border-[#3a58ef] hover:bg-[#f5f8ff]'
                  }`}
                >
                  <div className={`w-[48px] h-[48px] rounded-[10px] flex items-center justify-center transition-colors ${isDragging ? 'bg-[#ebeefd]' : 'bg-[#f9fafb]'}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3v11M8 7l4-4 4 4M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" stroke={isDragging ? '#3a58ef' : '#667085'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-[14px] text-[#344054]">
                      <span className="font-semibold text-[#3a58ef]">Browse file</span> or drag & drop
                    </p>
                    <p className="text-[12px] text-[#667085] mt-[4px]">MP4, MOV, AVI — max 200 MB</p>
                  </div>
                </div>
                <button onClick={onClose} className="w-full px-[14px] py-[9px] border border-[#d0d5dd] rounded-[4px] text-[13px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors">
                  Cancel
                </button>
              </div>
            )}

            {step === 'link' && (
              <div className="flex flex-col gap-[16px]">
                <div>
                  <p className="text-[12px] text-[#667085] mb-[6px]">Video Embed Link</p>
                  <input
                    autoFocus
                    type="url"
                    value={linkDraft}
                    onChange={(e) => setLinkDraft(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSaveLink(); if (e.key === 'Escape') onClose(); }}
                    placeholder="https://youtube.com/embed/…"
                    className="w-full border border-[#d0d5dd] rounded-[6px] px-[14px] py-[10px] text-[13px] text-[#101828] outline-none focus:border-[#3a58ef] transition-colors"
                  />
                </div>
                <div className="flex gap-[8px]">
                  <button onClick={onClose} className="flex-1 px-[14px] py-[9px] border border-[#d0d5dd] rounded-[4px] text-[13px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors">
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveLink}
                    disabled={!linkDraft.trim()}
                    className="flex-1 px-[14px] py-[9px] bg-[#3a58ef] rounded-[4px] text-[13px] font-semibold text-white hover:bg-[#2d47d1] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
                  >
                    {isEditLink ? 'Update Link' : 'Save Link'}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

// ── VideoIntroSlot ─────────────────────────────────────────────────────────────
function VideoIntroSlot({ video, setVideo }: { video: VideoIntro; setVideo: (v: VideoIntro) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalConfig, setModalConfig] = useState<{ step: ModalStep; link: string }>({ step: 'choose', link: '' });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const h = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    setTimeout(() => document.addEventListener('mousedown', h), 0);
    return () => document.removeEventListener('mousedown', h);
  }, [menuOpen]);

  const openModal = (step: ModalStep = 'choose', link = '') => {
    setModalConfig({ step, link });
    setShowModal(true);
    setMenuOpen(false);
  };

  const handleSaveLink = (url: string) => setVideo({ type: 'link', url });

  const handleFileReady = (file: File) => {
    setUploadProgress(0);
    let prog = 0;
    const iv = setInterval(() => {
      prog += Math.random() * 18 + 7;
      if (prog >= 100) {
        clearInterval(iv);
        setVideo({ type: 'file', filename: file.name, sizeMb: +(file.size / (1024 * 1024)).toFixed(1), objectUrl: URL.createObjectURL(file) });
        setUploadProgress(null);
      } else {
        setUploadProgress(Math.round(prog));
      }
    }, 180);
  };

  const handleRemove = () => { setVideo({ type: 'none' }); setShowRemoveModal(false); };

  const formatUrl = (url: string) => {
    try {
      const u = new URL(url);
      const path = u.pathname.length > 10 ? u.pathname.substring(0, 10) + '…' : u.pathname;
      return u.hostname.replace('www.', '') + path;
    } catch {
      return url.length > 28 ? url.substring(0, 28) + '…' : url;
    }
  };

  return (
    <div ref={containerRef} className="relative flex-shrink-0">

      {/* Upload progress */}
      {uploadProgress !== null && (
        <div className="flex items-center gap-[8px] px-[10px] py-[6px] border border-[#eaecf0] rounded-[6px] bg-[#f9fafb] min-w-[160px]">
          <div className="w-[24px] h-[24px] rounded-[4px] bg-[#ebeefd] flex items-center justify-center flex-shrink-0">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v7M3 4l3-3 3 3M1 10h10" stroke="#3a58ef" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-[#667085] leading-none mb-[4px]">Uploading…</div>
            <div className="h-[4px] bg-[#eaecf0] rounded-full overflow-hidden">
              <div className="h-full bg-[#3a58ef] rounded-full transition-all duration-200" style={{ width: `${uploadProgress}%` }} />
            </div>
          </div>
          <span className="text-[10px] font-semibold text-[#3a58ef]">{uploadProgress}%</span>
        </div>
      )}

      {/* Empty state */}
      {video.type === 'none' && uploadProgress === null && (
        <button
          onClick={() => openModal()}
          className="flex items-center gap-[6px] px-[12px] py-[7px] border-[1.5px] border-dashed border-[#d0d5dd] rounded-[6px] hover:border-[#3a58ef] hover:bg-[#f5f8ff] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="2" width="12" height="10" rx="2" stroke="#667085" strokeWidth="1.3"/>
            <path d="M5 9V5l5 2-5 2z" fill="#667085"/>
          </svg>
          <span className="text-[12px] font-medium text-[#667085] whitespace-nowrap">Add intro video</span>
        </button>
      )}

      {/* Link chip */}
      {video.type === 'link' && uploadProgress === null && (
        <div className="flex items-center gap-[6px]">
          <div className="flex items-center gap-[7px] px-[10px] py-[5px] border border-[#eaecf0] rounded-[6px] bg-[#f9fafb]">
            <div className="w-[26px] h-[26px] rounded-[4px] bg-[#ebeefd] flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M5 6.5a3 3 0 0 0 4.24.13l1.06-1.06a3 3 0 0 0-4.24-4.24L5 2.39" stroke="#3a58ef" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M7 5.5a3 3 0 0 0-4.24-.13L1.7 6.43a3 3 0 0 0 4.24 4.24L7 9.61" stroke="#3a58ef" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-[#667085] leading-none mb-[1px]">Intro video</div>
              <a href={video.url} target="_blank" rel="noopener noreferrer"
                className="text-[11px] font-medium text-[#3a58ef] hover:underline block max-w-[130px] overflow-hidden text-ellipsis whitespace-nowrap"
                title={video.url} onClick={e => e.stopPropagation()}
              >{formatUrl(video.url)}</a>
            </div>
            <div className="w-[6px] h-[6px] rounded-full bg-[#12b76a] flex-shrink-0 ml-[2px]" />
          </div>
          <button onClick={() => setMenuOpen(v => !v)}
            className="w-[26px] h-[26px] rounded-[4px] flex items-center justify-center text-[#667085] hover:bg-[#eaecf0] hover:text-[#344054] transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <circle cx="7" cy="2.5" r="1.2"/><circle cx="7" cy="7" r="1.2"/><circle cx="7" cy="11.5" r="1.2"/>
            </svg>
          </button>
        </div>
      )}

      {/* File chip */}
      {video.type === 'file' && uploadProgress === null && (
        <div className="flex items-center gap-[6px]">
          <div className="flex items-center gap-[7px] px-[10px] py-[5px] border border-[#eaecf0] rounded-[6px] bg-[#f9fafb]">
            <div className="w-[26px] h-[26px] rounded-[4px] bg-[#101828] flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="1" width="10" height="10" rx="2" stroke="white" strokeWidth="1.2"/>
                <path d="M4 8V4l5 2-5 2z" fill="white"/>
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-medium text-[#344054] max-w-[110px] overflow-hidden text-ellipsis whitespace-nowrap">{video.filename}</div>
              <div className="text-[10px] text-[#667085]">{video.sizeMb} MB</div>
            </div>
            <div className="w-[6px] h-[6px] rounded-full bg-[#12b76a] flex-shrink-0 ml-[2px]" />
          </div>
          <button onClick={() => setShowPlayer(true)} title="Play video"
            className="w-[26px] h-[26px] rounded-[4px] flex items-center justify-center text-[#667085] hover:bg-[#ebeefd] hover:text-[#3a58ef] transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M5.5 9.5V4.5l5 2.5-5 2.5z" fill="currentColor"/>
            </svg>
          </button>
          <button onClick={() => setMenuOpen(v => !v)}
            className="w-[26px] h-[26px] rounded-[4px] flex items-center justify-center text-[#667085] hover:bg-[#eaecf0] hover:text-[#344054] transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <circle cx="7" cy="2.5" r="1.2"/><circle cx="7" cy="7" r="1.2"/><circle cx="7" cy="11.5" r="1.2"/>
            </svg>
          </button>
        </div>
      )}

      {showPlayer && video.type === 'file' && (
        <VideoPlayerModal filename={video.filename} objectUrl={video.objectUrl} onClose={() => setShowPlayer(false)} />
      )}

      {showModal && (
        <VideoIntroModal
          initialStep={modalConfig.step}
          initialLink={modalConfig.link}
          onClose={() => setShowModal(false)}
          onSaveLink={handleSaveLink}
          onFileReady={handleFileReady}
        />
      )}

      {/* ⋯ dropdown menu */}
      {menuOpen && (
        <div className="absolute top-[calc(100%+4px)] right-0 bg-white border border-[#eaecf0] rounded-[6px] shadow-[0px_4px_12px_rgba(16,24,40,0.10)] w-[152px] z-[100] py-[4px]">
          {video.type === 'link' && (
            <button onClick={() => openModal('link', video.url)}
              className="w-full flex items-center gap-[8px] px-[14px] py-[8px] text-[12px] text-[#344054] hover:bg-[#f9fafb] transition-colors text-left">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 9.5V11h1.5l4.5-4.5-1.5-1.5L1.5 9.5zM9.79 3.21a1 1 0 0 0 0-1.42L8.71.71a1 1 0 0 0-1.42 0L6 2l2 2 1.79-1.79z" fill="#344054"/></svg>
              Edit Link
            </button>
          )}
          {video.type === 'file' && (
            <button onClick={() => openModal('upload')}
              className="w-full flex items-center gap-[8px] px-[14px] py-[8px] text-[12px] text-[#344054] hover:bg-[#f9fafb] transition-colors text-left">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v7M4 4l2.5-3 2.5 3M1 10h11" stroke="#344054" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Replace Video
            </button>
          )}
          <div className="h-px bg-[#eaecf0] mx-[6px] my-[3px]" />
          <button onClick={() => { setMenuOpen(false); setShowRemoveModal(true); }}
            className="w-full flex items-center gap-[8px] px-[14px] py-[8px] text-[12px] text-[#f04438] hover:bg-[#fff5f5] transition-colors text-left">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1 3h11M4.5 3V2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1M10 3l-.5 8h-6L3 3" stroke="#f04438" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Remove Video
          </button>
        </div>
      )}

      {showRemoveModal && createPortal(
        <>
          <div className="fixed inset-0 bg-black/30 z-[1000]" onClick={() => setShowRemoveModal(false)} />
          <div className="fixed inset-0 z-[1001] flex items-center justify-center pointer-events-none">
            <div className="bg-white rounded-[12px] shadow-[0px_20px_40px_rgba(16,24,40,0.18)] w-[360px] p-[24px] pointer-events-auto">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-[#fff0ee] flex items-center justify-center mb-[12px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 4.5h14M6 4.5V3a.75.75 0 0 1 .75-.75h4.5A.75.75 0 0 1 12 3v1.5M13.5 4.5l-.75 11.25h-7.5L4.5 4.5" stroke="#f04438" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p className="font-semibold text-[14px] text-[#101828] mb-[6px]">Remove intro video?</p>
              <p className="text-[13px] text-[#667085] leading-[20px] mb-[20px]">Your profile introduction video will be removed. You can add a new one at any time.</p>
              <div className="flex gap-[10px]">
                <button onClick={() => setShowRemoveModal(false)} className="flex-1 px-[14px] py-[9px] border border-[#d0d5dd] rounded-[4px] text-[13px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors">Cancel</button>
                <button onClick={handleRemove} className="flex-1 px-[14px] py-[9px] bg-[#f04438] rounded-[4px] text-[13px] font-semibold text-white hover:bg-[#d63030] transition-colors">Remove</button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </div>
  );
}

// ── ProfileAvatar ─────────────────────────────────────────────────────────────

function ProfileAvatar({ name, completion }: { name: string; completion: number }) {
  const colors = ['#3A58EF', '#F04438', '#12B76A', '#F79009', '#7F56D9'];
  const colorIndex = name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % colors.length;
  const initials = name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase();
  const r = 42;
  const circumference = 2 * Math.PI * r;
  const filled = (completion / 100) * circumference;

  return (
    <div className="relative shrink-0" style={{ width: 100, height: 100 }}>
      <svg className="absolute inset-0" width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r={r} fill="none" stroke="#eaecf0" strokeWidth="5" />
        <circle cx="50" cy="50" r={r} fill="none" stroke="#3a58ef" strokeWidth="5" strokeLinecap="round" strokeDasharray={`${filled} ${circumference}`} />
      </svg>
      <div className="absolute inset-[9px] rounded-full flex items-center justify-center text-white font-bold text-[22px]" style={{ backgroundColor: colors[colorIndex] }}>
        {initials}
      </div>
      <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 bg-white border border-[#eaecf0] rounded-[10px] px-[6px] py-[1px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06)]">
        <p className="text-[10px] font-semibold text-[#344054] leading-[16px] whitespace-nowrap">{completion}%</p>
      </div>
    </div>
  );
}

// ── RatingSelector ────────────────────────────────────────────────────────────

function RatingSelector({ value, onChange }: { value: ProficiencyLevel | ''; onChange: (v: ProficiencyLevel) => void }) {
  return (
    <div className="flex items-center border border-[#d0d5dd] rounded-[6px] overflow-hidden w-fit">
      {PROFICIENCY_LEVELS.map((level, i) => (
        <button
          key={level}
          type="button"
          onClick={() => onChange(level)}
          className={`px-[14px] py-[7px] text-[12px] font-medium transition-colors whitespace-nowrap ${
            value === level ? 'bg-[#3a58ef] text-white' : 'bg-white text-[#344054] hover:bg-[#f9fafb]'
          }${i > 0 ? ' border-l border-[#d0d5dd]' : ''}`}
        >
          {level}
        </button>
      ))}
    </div>
  );
}

// ── SkillMultiSelect ──────────────────────────────────────────────────────────

function SkillMultiSelect({
  selected, options, onAdd, onRemove, placeholder = 'Search and select...',
}: {
  selected: string[];
  options: string[];
  onAdd: (name: string) => void;
  onRemove: (name: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) { setOpen(false); setSearch(''); }
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 0); }, [open]);

  const available = options.filter(o => !selected.includes(o) && o.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setOpen(v => !v)}
        className="min-h-[42px] w-full border border-[#d0d5dd] rounded-[6px] px-[10px] py-[6px] bg-white cursor-pointer flex flex-wrap gap-[6px] items-center hover:border-[#98a2b3] transition-colors"
      >
        {selected.length === 0 ? (
          <span className="text-[14px] text-[#98a2b3] flex-1">{placeholder}</span>
        ) : (
          selected.map(name => (
            <span key={name} className="flex items-center gap-[4px] bg-[#ebeefd] text-[#3a58ef] text-[12px] font-medium px-[8px] py-[3px] rounded-[4px]">
              {name}
              <button type="button" onClick={e => { e.stopPropagation(); onRemove(name); }} className="leading-none hover:text-[#2d47d1]">
                <X className="size-[11px]" />
              </button>
            </span>
          ))
        )}
        <ChevronDown className={`ml-auto size-[16px] text-[#667085] shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-white border border-[#eaecf0] rounded-[6px] shadow-[0px_4px_12px_rgba(16,24,40,0.08)] z-[60]">
          <div className="p-[8px] border-b border-[#eaecf0]">
            <div className="relative">
              <Search className="absolute left-[10px] top-1/2 -translate-y-1/2 size-[13px] text-[#98a2b3]" />
              <input
                ref={inputRef}
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full pl-[30px] pr-[10px] py-[7px] text-[13px] border border-[#d0d5dd] rounded-[6px] focus:outline-none focus:border-[#3a58ef]"
                onClick={e => e.stopPropagation()}
              />
            </div>
          </div>
          <div className="py-[4px] max-h-[200px] overflow-y-auto">
            {available.length === 0 ? (
              <p className="text-[13px] text-[#98a2b3] px-[12px] py-[10px]">No results found</p>
            ) : (
              available.map(name => (
                <button key={name} type="button" onClick={() => onAdd(name)}
                  className="w-full flex items-center gap-[8px] px-[12px] py-[8px] text-left hover:bg-[#f9fafb] transition-colors">
                  <div className="shrink-0 size-[16px] rounded-[4px] border-[1.5px] border-[#d0d5dd]" />
                  <span className="text-[13px] text-[#344054]">{name}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── ProficiencyBadge ─────────────────────────────────────────────────────────

function ProficiencyBadge({ level }: { level: ProficiencyLevel | '' }) {
  if (!level) return <span className="text-[14px] text-[#98a2b3]">—</span>;
  const styles: Record<ProficiencyLevel, { bg: string; color: string }> = {
    Basic:        { bg: '#eff0fd', color: '#3a58ef' },
    Average:      { bg: '#f5f0ff', color: '#7f56d9' },
    Intermediate: { bg: '#ecfdf3', color: '#027a48' },
    Advance:      { bg: '#fffaeb', color: '#b54708' },
    Expert:       { bg: '#fff1f0', color: '#f04438' },
  };
  const { bg, color } = styles[level];
  return (
    <span className="inline-flex items-center px-[10px] py-[4px] rounded-[4px] text-[12px] font-semibold" style={{ backgroundColor: bg, color }}>
      {level}
    </span>
  );
}

// ── SkillEmptyState ───────────────────────────────────────────────────────────

function SkillEmptyState({ type, onEdit }: { type: 'software' | 'technical'; onEdit: () => void }) {
  return (
    <div className="border border-[#eaecf0] rounded-[8px] bg-[#fafbff] flex flex-col items-center justify-center py-[44px] px-[24px] text-center">
      <div className="w-[44px] h-[44px] rounded-[10px] bg-[#f0f3fe] flex items-center justify-center mb-[14px]">
        {type === 'software' ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="2" y="5" width="18" height="14" rx="2" stroke="#3a58ef" strokeWidth="1.6"/>
            <path d="M6 9h10M6 13h6" stroke="#3a58ef" strokeWidth="1.6" strokeLinecap="round"/>
            <path d="M7 2v3M15 2v3" stroke="#3a58ef" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 6h14M4 11h10M4 16h7" stroke="#3a58ef" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
        )}
      </div>
      <p className="font-semibold text-[14px] text-[#101828] mb-[4px]">
        No {type === 'software' ? 'Software Skills' : 'Technical Skills'} Added
      </p>
      <p className="text-[13px] text-[#667085] leading-[20px] mb-[18px] max-w-[280px]">
        {type === 'software'
          ? 'Add the software tools you use and rate your proficiency for each.'
          : 'Add your technical skills and set your proficiency level.'}
      </p>
      <button
        onClick={onEdit}
        className="flex items-center gap-[6px] px-[14px] py-[8px] border border-[#d0d5dd] rounded-[4px] text-[13px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
      >
        <Plus className="size-[13px]" />
        Add {type === 'software' ? 'Software' : 'Skills'}
      </button>
    </div>
  );
}

// ── SkillSetContent ───────────────────────────────────────────────────────────

type SoftwareRow = { name: string; domain: string; rating: ProficiencyLevel | '' };
type TechRow = { name: string; rating: ProficiencyLevel | '' };

function SkillSetContent({ onPendingChange }: { onPendingChange?: (count: number) => void }) {
  const [isEditing, setIsEditing] = useState(false);
  const [primaryDomain, setPrimaryDomain] = useState('');
  const [secondaryDomain, setSecondaryDomain] = useState('');
  const [typeOfWork, setTypeOfWork] = useState('');

  const [softwareRows, setSoftwareRows] = useState<SoftwareRow[]>([]);
  const [techRows, setTechRows] = useState<TechRow[]>([]);

  // Capacity
  const [parallelFTE, setParallelFTE] = useState('');
  const [timesheetLevel, setTimesheetLevel] = useState('');
  const [endClientInteraction, setEndClientInteraction] = useState('');
  const [endClientQuality, setEndClientQuality] = useState('');
  const [canHandleParallel, setCanHandleParallel] = useState('');
  const [responsibilities, setResponsibilities] = useState<string[]>([]);

  // Quality
  const [suitableToMentor, setSuitableToMentor] = useState('');
  const [escalations, setEscalations] = useState('0');
  const [appreciations, setAppreciations] = useState('0');
  const [replacements, setReplacements] = useState('0');
  const [terminations, setTerminations] = useState('0');

  const primaryDomainRef = useRef<HTMLDivElement>(null);
  const [showValidation, setShowValidation] = useState(false);
  const skillPendingCount = !primaryDomain ? 1 : 0;
  const onSkillPendingRef = useRef(onPendingChange);
  onSkillPendingRef.current = onPendingChange;
  useEffect(() => { onSkillPendingRef.current?.(skillPendingCount); }, [skillPendingCount]);
  const goToPendingFields = () => {
    setShowValidation(true);
    if (!isEditing) setIsEditing(true);
    setTimeout(() => { primaryDomainRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 80);
  };

  const addSoftware = (name: string) => {
    const domain = SOFTWARE_MASTER.find(s => s.name === name)?.domain || 'Other';
    setSoftwareRows(prev => prev.some(r => r.name === name) ? prev : [...prev, { name, domain, rating: '' }]);
  };
  const removeSoftware = (name: string) => setSoftwareRows(prev => prev.filter(r => r.name !== name));
  const updateSoftwareRating = (name: string, rating: ProficiencyLevel) => setSoftwareRows(prev => prev.map(r => r.name === name ? { ...r, rating } : r));

  const addTech = (name: string) => setTechRows(prev => prev.some(r => r.name === name) ? prev : [...prev, { name, rating: '' }]);
  const removeTech = (name: string) => setTechRows(prev => prev.filter(r => r.name !== name));
  const updateTechRating = (name: string, rating: ProficiencyLevel) => setTechRows(prev => prev.map(r => r.name === name ? { ...r, rating } : r));

  const noEndClient = endClientInteraction === 'No Communication';

  // ── View mode ──────────────────────────────────────────────────────────────
  if (!isEditing) {
    return (
      <>
        <PendingBanner count={skillPendingCount} tabLabel="Skill Set" onGoTo={goToPendingFields} />
        <div className="flex items-center justify-between mb-[20px]">
          <p className="font-bold leading-[32px] text-[#101828] text-[22px]">Skill Set</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-[#3a58ef] flex items-center gap-[8px] px-[16px] py-[10px] rounded-[4px] hover:bg-[#2d47d1] transition-colors shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
          >
            <Pencil className="size-[16px] text-white" />
            <span className="font-semibold leading-[20px] text-[14px] text-white">Edit Details</span>
          </button>
        </div>
        <div className="w-full h-px bg-[#eaecf0]" />

        {/* Domain Expertise */}
        <div className="mt-[20px]">
          <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">Domain Expertise</p>
          <div className="grid grid-cols-3 gap-x-[24px] gap-y-[20px]">
            <Field label="Primary Domain" value={primaryDomain || '—'} />
            <Field label="Secondary Domain" value={secondaryDomain || '—'} />
            <Field label="Type of Work Done" value={typeOfWork || '—'} />
          </div>
        </div>

        <SectionDivider />

        {/* Software Skills */}
        <div>
          <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">Software Skills</p>
          {softwareRows.length > 0 ? (
            <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f0f3fe]">
                    <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0] w-[220px]">Software Name</th>
                    <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0] w-[160px]">Software Domain</th>
                    <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0]">Proficiency</th>
                  </tr>
                </thead>
                <tbody>
                  {softwareRows.map(row => (
                    <tr key={row.name} className="border-b border-[#eaecf0] last:border-b-0 hover:bg-[#fafbff] transition-colors">
                      <td className="px-[20px] py-[14px]">
                        <div className="flex items-center gap-[8px]">
                          <div className="w-[26px] h-[26px] rounded-full bg-[#ebeefd] flex items-center justify-center flex-shrink-0">
                            <span className="text-[11px] font-bold text-[#3a58ef]">{row.name.charAt(0).toUpperCase()}</span>
                          </div>
                          <span className="text-[14px] font-medium text-[#101828]">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-[20px] py-[14px]">
                        <span className="inline-flex items-center px-[8px] py-[3px] rounded-[4px] text-[12px] font-medium bg-[#f0f3fe] text-[#3a58ef]">
                          {row.domain}
                        </span>
                      </td>
                      <td className="px-[20px] py-[14px]">
                        <ProficiencyBadge level={row.rating} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <SkillEmptyState type="software" onEdit={() => setIsEditing(true)} />
          )}
        </div>

        <SectionDivider />

        {/* Technical Skills */}
        <div>
          <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">Technical Skills</p>
          {techRows.length > 0 ? (
            <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f0f3fe]">
                    <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0] w-[260px]">Technical Skill Name</th>
                    <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0]">Proficiency</th>
                  </tr>
                </thead>
                <tbody>
                  {techRows.map(row => (
                    <tr key={row.name} className="border-b border-[#eaecf0] last:border-b-0 hover:bg-[#fafbff] transition-colors">
                      <td className="px-[20px] py-[14px]">
                        <div className="flex items-center gap-[8px]">
                          <div className="w-[26px] h-[26px] rounded-full bg-[#f0f3fe] flex items-center justify-center flex-shrink-0">
                            <span className="text-[11px] font-bold text-[#3a58ef]">{row.name.charAt(0).toUpperCase()}</span>
                          </div>
                          <span className="text-[14px] font-medium text-[#101828]">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-[20px] py-[14px]">
                        <ProficiencyBadge level={row.rating} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <SkillEmptyState type="technical" onEdit={() => setIsEditing(true)} />
          )}
        </div>

        <SectionDivider />

        {/* Capacity & Availability */}
        <div>
          <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">Capacity & Availability</p>
          <div className="grid grid-cols-3 gap-x-[24px] gap-y-[20px]">
            <Field label="Parallel FTE Handling Capacity" value={parallelFTE || '—'} />
            <Field label="Up to which level timesheet can handle" value={timesheetLevel || '—'} />
            <Field label="End Client Interaction?" value={endClientInteraction || '—'} />
            <Field label="End Client Interaction Quality?" value={endClientQuality || '—'} />
            <Field label="Can handle parallel clients?" value={canHandleParallel || '—'} />
            <Field label="Additional Responsibility" value={responsibilities.length > 0 ? responsibilities.join(', ') : '—'} />
          </div>
        </div>

        <SectionDivider />

        {/* Quality, Risk & Performance Signals */}
        <div>
          <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">Quality, Risk & Performance Signals</p>
          <div className="grid grid-cols-3 gap-x-[24px] gap-y-[20px]">
            <Field label="Suitable to Mentor Junior" value={suitableToMentor || '—'} />
            <Field label="No. of Escalations" value={escalations} />
            <Field label="No. of Appreciations" value={appreciations} />
            <Field label="Replacements" value={replacements} />
            <Field label="Timesheet Terminations" value={terminations} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PendingBanner count={skillPendingCount} tabLabel="Skill Set" onGoTo={goToPendingFields} />
      {/* Header */}
      <div className="flex items-center justify-between mb-[20px]">
        <p className="font-bold leading-[32px] text-[#101828] text-[22px]">Skill Set</p>
        <div className="flex items-center gap-[8px]">
          <button className="px-[16px] py-[9px] rounded-[4px] border border-[#d0d5dd] text-[14px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors">
            Cancel
          </button>
          <button className="bg-[#3a58ef] px-[16px] py-[9px] rounded-[4px] text-[14px] font-semibold text-white hover:bg-[#2d47d1] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
            Save
          </button>
        </div>
      </div>

      <div className="w-full h-px bg-[#eaecf0]" />

      {/* Domain Expertise */}
      <div className="mt-[20px]">
        <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">Domain Expertise</p>
        <div className="grid grid-cols-3 gap-x-[24px]">
          <div ref={primaryDomainRef}>
            <SelectField label="Primary Domain" value={primaryDomain} options={DOMAIN_OPTIONS} onChange={setPrimaryDomain} required showError={showValidation} />
          </div>
          <SelectField label="Secondary Domain" value={secondaryDomain} options={DOMAIN_OPTIONS} onChange={setSecondaryDomain} />
          <SelectField label="Type of Work Done" value={typeOfWork} options={WORK_TYPE_OPTIONS} onChange={setTypeOfWork} />
        </div>
      </div>

      <SectionDivider />

      {/* Software Skills */}
      <div>
        <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[4px]">Software Skills</p>
        <p className="text-[13px] text-[#667085] leading-[20px] mb-[14px]">Select from the master software list. The domain is automatically assigned.</p>
        <div className="mb-[14px]">
          <p className="font-normal leading-[18px] text-[12px] text-[#667085] mb-[4px]">Add Software</p>
          <SkillMultiSelect
            selected={softwareRows.map(r => r.name)}
            options={SOFTWARE_MASTER.map(s => s.name)}
            onAdd={addSoftware}
            onRemove={removeSoftware}
            placeholder="Search and select software..."
          />
        </div>
        {softwareRows.length > 0 ? (
          <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f0f3fe]">
                  <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0] w-[220px]">Software Name</th>
                  <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0] w-[140px]">Software Domain</th>
                  <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0]">Proficiency</th>
                  <th className="w-[48px] border-b border-[#eaecf0]" />
                </tr>
              </thead>
              <tbody>
                {softwareRows.map(row => (
                  <tr key={row.name} className="border-b border-[#eaecf0] last:border-b-0 hover:bg-[#fafbff] transition-colors">
                    <td className="px-[20px] py-[14px]">
                      <div className="flex items-center gap-[8px]">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#ebeefd] flex items-center justify-center flex-shrink-0">
                          <span className="text-[11px] font-bold text-[#3a58ef]">{row.name.charAt(0).toUpperCase()}</span>
                        </div>
                        <span className="text-[14px] font-medium text-[#101828]">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-[20px] py-[14px]">
                      <span className="inline-flex items-center px-[8px] py-[3px] rounded-[4px] text-[12px] font-medium bg-[#f0f3fe] text-[#3a58ef]">
                        {row.domain}
                      </span>
                    </td>
                    <td className="px-[20px] py-[10px]">
                      <RatingSelector value={row.rating} onChange={v => updateSoftwareRating(row.name, v)} />
                    </td>
                    <td className="px-[8px] py-[14px] text-center">
                      <button onClick={() => removeSoftware(row.name)} className="text-[#c5cae0] hover:text-[#f04438] transition-colors">
                        <X className="size-[14px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="border border-dashed border-[#d0d5dd] rounded-[8px] flex items-center justify-center py-[28px]">
            <p className="text-[13px] text-[#98a2b3]">No software added yet. Use the selector above to add software.</p>
          </div>
        )}
      </div>

      <SectionDivider />

      {/* Technical Skills */}
      <div>
        <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[4px]">Technical Skills</p>
        <p className="text-[13px] text-[#667085] leading-[20px] mb-[14px]">Select your technical skills and rate your proficiency level.</p>
        <div className="mb-[14px]">
          <p className="font-normal leading-[18px] text-[12px] text-[#667085] mb-[4px]">Add Technical Skills</p>
          <SkillMultiSelect
            selected={techRows.map(r => r.name)}
            options={TECHNICAL_SKILLS_LIST}
            onAdd={addTech}
            onRemove={removeTech}
            placeholder="Search and select technical skills..."
          />
        </div>
        {techRows.length > 0 ? (
          <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f0f3fe]">
                  <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0] w-[260px]">Technical Skill Name</th>
                  <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0]">Proficiency</th>
                  <th className="w-[48px] border-b border-[#eaecf0]" />
                </tr>
              </thead>
              <tbody>
                {techRows.map(row => (
                  <tr key={row.name} className="border-b border-[#eaecf0] last:border-b-0 hover:bg-[#fafbff] transition-colors">
                    <td className="px-[20px] py-[14px]">
                      <div className="flex items-center gap-[8px]">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#f0f3fe] flex items-center justify-center flex-shrink-0">
                          <span className="text-[11px] font-bold text-[#3a58ef]">{row.name.charAt(0).toUpperCase()}</span>
                        </div>
                        <span className="text-[14px] font-medium text-[#101828]">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-[20px] py-[10px]">
                      <RatingSelector value={row.rating} onChange={v => updateTechRating(row.name, v)} />
                    </td>
                    <td className="px-[8px] py-[14px] text-center">
                      <button onClick={() => removeTech(row.name)} className="text-[#c5cae0] hover:text-[#f04438] transition-colors">
                        <X className="size-[14px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="border border-dashed border-[#d0d5dd] rounded-[8px] flex items-center justify-center py-[28px]">
            <p className="text-[13px] text-[#98a2b3]">No technical skills added yet. Use the selector above to add skills.</p>
          </div>
        )}
      </div>

      <SectionDivider />

      {/* Capacity & Availability */}
      <div>
        <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">Capacity & Availability</p>
        <div className="flex flex-col gap-[20px]">
          <div className="grid grid-cols-3 gap-x-[24px]">
            <SelectField label="Parallel FTE Handling Capacity" value={parallelFTE} options={YES_NO} onChange={setParallelFTE} />
            <SelectField label="Up to which level timesheet can handle" value={timesheetLevel} options={TIMESHEET_LEVELS} onChange={setTimesheetLevel} />
            <SelectField
              label="End Client Interaction?"
              value={endClientInteraction}
              options={END_CLIENT_OPTIONS}
              onChange={(v) => { setEndClientInteraction(v); if (v === 'No Communication') setEndClientQuality(''); }}
            />
          </div>
          <div className="grid grid-cols-3 gap-x-[24px]">
            <SelectField
              label="End Client Interaction Quality?"
              value={endClientQuality}
              options={QUALITY_OPTIONS}
              onChange={setEndClientQuality}
              disabled={noEndClient}
              placeholder={noEndClient ? 'N/A' : 'Select'}
            />
            <SelectField label="Can handle parallel clients?" value={canHandleParallel} options={YES_NO} onChange={setCanHandleParallel} />
          </div>
          <TagSelectField label="Additional Responsibility" selected={responsibilities} options={RESP_OPTIONS} onChange={setResponsibilities} placeholder="Select responsibilities..." />
        </div>
      </div>

      <SectionDivider />

      {/* Quality, Risk & Performance Signals */}
      <div>
        <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">Quality, Risk & Performance Signals</p>
        <div className="grid grid-cols-3 gap-x-[24px] gap-y-[20px]">
          <SelectField label="Suitable to Mentor Junior" value={suitableToMentor} options={YES_NO} onChange={setSuitableToMentor} />
          <NumberInputField label="No. of Escalations" value={escalations} onChange={setEscalations} />
          <NumberInputField label="No. of Appreciations" value={appreciations} onChange={setAppreciations} />
          <NumberInputField label="Replacements" value={replacements} onChange={setReplacements} />
          <NumberInputField label="Timesheet Terminations" value={terminations} onChange={setTerminations} />
        </div>
      </div>
    </>
  );
}

// ── VideoIntroTabContent ──────────────────────────────────────────────────────
function VideoIntroTabContent({ video, setVideo }: { video: VideoIntro; setVideo: (v: VideoIntro) => void }) {
  type TabMode = 'idle' | 'add-link' | 'edit-link' | 'replace';
  const [mode, setMode] = useState<TabMode>('idle');
  const [linkDraft, setLinkDraft] = useState('');
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startAddLink = () => { setLinkDraft(''); setMode('add-link'); };
  const startEditLink = () => { if (video.type === 'link') setLinkDraft(video.url); setMode('edit-link'); };
  const saveLink = () => {
    const trimmed = linkDraft.trim();
    if (!trimmed) return;
    setVideo({ type: 'link', url: trimmed });
    setMode('idle');
  };
  const startReplace = () => { setMode('replace'); setTimeout(() => fileInputRef.current?.click(), 0); };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 200 * 1024 * 1024) return;
    e.target.value = '';
    setMode('idle');
    setUploadProgress(0);
    let prog = 0;
    const iv = setInterval(() => {
      prog += Math.random() * 18 + 7;
      if (prog >= 100) {
        clearInterval(iv);
        setVideo({ type: 'file', filename: file.name, sizeMb: +(file.size / (1024 * 1024)).toFixed(1), objectUrl: URL.createObjectURL(file) });
        setUploadProgress(null);
      } else {
        setUploadProgress(Math.round(prog));
      }
    }, 180);
  };

  const handleRemove = () => { setVideo({ type: 'none' }); setShowRemoveModal(false); setMode('idle'); };

  return (
    <>
      <input ref={fileInputRef} type="file" accept="video/*" className="hidden" onChange={handleFileSelect} />

      {/* Header */}
      <div className="flex items-center justify-between mb-[20px]">
        <p className="font-bold leading-[32px] text-[#101828] text-[22px]">Profile Introduction</p>
      </div>
      <div className="w-full h-px bg-[#eaecf0]" />

      <div className="mt-[24px]">

        {/* ── Upload progress ── */}
        {uploadProgress !== null && (
          <div className="flex items-center gap-[16px] p-[20px] border border-[#eaecf0] rounded-[8px] bg-[#f9fafb]">
            <div className="w-[44px] h-[44px] rounded-[8px] bg-[#ebeefd] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2v10M6 6l4-4 4 4M2 15v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" stroke="#3a58ef" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-[#344054] mb-[8px]">Uploading video…</p>
              <div className="h-[6px] bg-[#eaecf0] rounded-full overflow-hidden">
                <div className="h-full bg-[#3a58ef] rounded-full transition-all duration-200" style={{ width: `${uploadProgress}%` }} />
              </div>
              <p className="text-[11px] text-[#667085] mt-[4px]">{uploadProgress}% complete</p>
            </div>
          </div>
        )}

        {/* ── Empty state ── */}
        {video.type === 'none' && uploadProgress === null && mode === 'idle' && (
          <div className="flex flex-col items-center text-center py-[32px] px-[24px]">
            <div className="w-[56px] h-[56px] rounded-[12px] bg-[#ebeefd] flex items-center justify-center mb-[16px]">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <rect x="2" y="4" width="22" height="18" rx="3" stroke="#3a58ef" strokeWidth="1.8"/>
                <path d="M10 17V9l8 4-8 4z" fill="#3a58ef"/>
              </svg>
            </div>
            <p className="font-semibold text-[15px] text-[#101828] mb-[6px]">No intro video added yet</p>
            <p className="text-[13px] text-[#667085] max-w-[380px] mb-[24px] leading-[20px]">
              Add a short introduction video so clients and your team can get to know you. You can add a link or upload a file directly.
            </p>
            <div className="flex gap-[12px]">
              <button
                onClick={startAddLink}
                className="flex items-center gap-[8px] px-[18px] py-[9px] border border-[#d0d5dd] rounded-[4px] text-[13px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M6.5 8a3.5 3.5 0 0 0 5 .14l1.27-1.27a3.5 3.5 0 0 0-4.95-4.95L6.5 3.25" stroke="#344054" strokeWidth="1.4" strokeLinecap="round"/><path d="M8.5 7a3.5 3.5 0 0 0-5-.14L2.23 8.13a3.5 3.5 0 0 0 4.95 4.95L8.5 11.75" stroke="#344054" strokeWidth="1.4" strokeLinecap="round"/></svg>
                Add via Link
              </button>
              <button
                onClick={() => { setMode('replace'); setTimeout(() => fileInputRef.current?.click(), 0); }}
                className="flex items-center gap-[8px] px-[18px] py-[9px] bg-[#3a58ef] rounded-[4px] text-[13px] font-semibold text-white hover:bg-[#2d47d1] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 1.5v8M4.5 5l3-3.5 3 3.5M1.5 11v1.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V11" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Upload Video
              </button>
            </div>
          </div>
        )}

        {/* ── Add / Edit link inline ── */}
        {(mode === 'add-link' || mode === 'edit-link') && uploadProgress === null && (
          <div className="max-w-[480px]">
            <p className="text-[13px] font-semibold text-[#101828] mb-[4px]">{mode === 'edit-link' ? 'Edit Video Link' : 'Add Video Link'}</p>
            <p className="text-[12px] text-[#667085] mb-[14px]">{mode === 'edit-link' ? 'Update your embed URL below.' : 'Paste an embed URL from YouTube, Vimeo, or any video platform.'}</p>
            <div className="flex flex-col gap-[10px]">
              <div>
                <p className="text-[12px] text-[#667085] mb-[4px]">Video Embed Link</p>
                <input
                  autoFocus
                  type="url"
                  value={linkDraft}
                  onChange={e => setLinkDraft(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter') saveLink(); if (e.key === 'Escape') setMode('idle'); }}
                  placeholder="https://youtube.com/embed/…"
                  className="w-full border border-[#d0d5dd] rounded-[6px] px-[14px] py-[10px] text-[13px] text-[#101828] outline-none focus:border-[#3a58ef] transition-colors"
                />
              </div>
              <div className="flex gap-[8px]">
                <button onClick={() => setMode('idle')} className="px-[16px] py-[9px] border border-[#d0d5dd] rounded-[4px] text-[13px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors">Cancel</button>
                <button
                  onClick={saveLink}
                  disabled={!linkDraft.trim()}
                  className="px-[16px] py-[9px] bg-[#3a58ef] rounded-[4px] text-[13px] font-semibold text-white hover:bg-[#2d47d1] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
                >{mode === 'edit-link' ? 'Update Link' : 'Save Link'}</button>
              </div>
            </div>
          </div>
        )}

        {/* ── Link saved ── */}
        {video.type === 'link' && uploadProgress === null && mode === 'idle' && (
          <div className="flex items-start gap-[16px] p-[20px] border border-[#eaecf0] rounded-[8px] bg-[#f9fafb] max-w-[560px]">
            <div className="w-[44px] h-[44px] rounded-[8px] bg-[#ebeefd] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M8 9.5a4 4 0 0 0 5.66.17l1.42-1.42a4 4 0 0 0-5.66-5.66L8 3.67" stroke="#3a58ef" strokeWidth="1.5" strokeLinecap="round"/><path d="M10 8.5a4 4 0 0 0-5.66-.17L2.92 9.75a4 4 0 0 0 5.66 5.66L10 14.33" stroke="#3a58ef" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-[6px] mb-[4px]">
                <p className="text-[13px] font-semibold text-[#344054]">Intro video link</p>
                <span className="flex items-center gap-[4px] text-[11px] font-medium text-[#12b76a]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#12b76a] inline-block" />
                  Active
                </span>
              </div>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#3a58ef] hover:underline break-all"
              >
                {video.url}
              </a>
              <p className="text-[11px] text-[#667085] mt-[4px]">Clicking the link opens the video in a new tab</p>
            </div>
            <div className="flex items-center gap-[6px] flex-shrink-0">
              <button
                onClick={startEditLink}
                className="px-[12px] py-[6px] border border-[#d0d5dd] rounded-[4px] text-[12px] font-semibold text-[#344054] bg-white hover:bg-[#f9fafb] transition-colors"
              >Edit Link</button>
              <button
                onClick={() => setShowRemoveModal(true)}
                className="px-[12px] py-[6px] border border-[#fecdca] rounded-[4px] text-[12px] font-semibold text-[#f04438] bg-white hover:bg-[#fff5f5] transition-colors"
              >Remove</button>
            </div>
          </div>
        )}

        {/* ── File saved ── */}
        {video.type === 'file' && uploadProgress === null && mode === 'idle' && (
          <div className="flex items-start gap-[16px] p-[20px] border border-[#eaecf0] rounded-[8px] bg-[#f9fafb] max-w-[560px]">
            <div className="w-[44px] h-[44px] rounded-[8px] bg-[#101828] flex items-center justify-center flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="3" stroke="white" strokeWidth="1.4"/><path d="M7 14V6l8 4-8 4z" fill="white"/></svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-[6px] mb-[4px]">
                <p className="text-[13px] font-semibold text-[#344054] truncate">{video.filename}</p>
                <span className="flex items-center gap-[4px] text-[11px] font-medium text-[#12b76a] flex-shrink-0">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#12b76a] inline-block" />
                  Uploaded
                </span>
              </div>
              <p className="text-[12px] text-[#667085]">{video.sizeMb} MB</p>
            </div>
            <div className="flex items-center gap-[6px] flex-shrink-0">
              <button
                onClick={() => setShowPlayer(true)}
                className="flex items-center gap-[6px] px-[12px] py-[6px] bg-[#3a58ef] rounded-[4px] text-[12px] font-semibold text-white hover:bg-[#2d47d1] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5.5" stroke="white" strokeWidth="1.1"/>
                  <path d="M4.5 8.5V3.5l5 2.5-5 2.5z" fill="white"/>
                </svg>
                Play Video
              </button>
              <button
                onClick={startReplace}
                className="px-[12px] py-[6px] border border-[#d0d5dd] rounded-[4px] text-[12px] font-semibold text-[#344054] bg-white hover:bg-[#f9fafb] transition-colors"
              >Replace</button>
              <button
                onClick={() => setShowRemoveModal(true)}
                className="px-[12px] py-[6px] border border-[#fecdca] rounded-[4px] text-[12px] font-semibold text-[#f04438] bg-white hover:bg-[#fff5f5] transition-colors"
              >Remove</button>
            </div>
          </div>
        )}

      </div>

      {/* Video player modal */}
      {showPlayer && video.type === 'file' && (
        <VideoPlayerModal filename={video.filename} objectUrl={video.objectUrl} onClose={() => setShowPlayer(false)} />
      )}

      {/* Remove confirmation modal */}
      {showRemoveModal && createPortal(
        <>
          <div className="fixed inset-0 bg-black/30 z-[1000]" onClick={() => setShowRemoveModal(false)} />
          <div className="fixed inset-0 z-[1001] flex items-center justify-center pointer-events-none">
            <div className="bg-white rounded-[12px] shadow-[0px_20px_40px_rgba(16,24,40,0.18)] w-[360px] p-[24px] pointer-events-auto">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-[#fff0ee] flex items-center justify-center mb-[12px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 4.5h14M6 4.5V3a.75.75 0 0 1 .75-.75h4.5A.75.75 0 0 1 12 3v1.5M13.5 4.5l-.75 11.25h-7.5L4.5 4.5" stroke="#f04438" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <p className="font-semibold text-[14px] text-[#101828] mb-[6px]">Remove intro video?</p>
              <p className="text-[13px] text-[#667085] leading-[20px] mb-[20px]">Your profile introduction video will be removed. You can add a new one at any time.</p>
              <div className="flex gap-[10px]">
                <button onClick={() => setShowRemoveModal(false)} className="flex-1 px-[14px] py-[9px] border border-[#d0d5dd] rounded-[4px] text-[13px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors">Cancel</button>
                <button onClick={handleRemove} className="flex-1 px-[14px] py-[9px] bg-[#f04438] rounded-[4px] text-[13px] font-semibold text-white hover:bg-[#d63030] transition-colors">Remove</button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}

// ── Personal Details ─────────────────────────────────────────────────────────

type ChildRow = { name: string; dob: string; gender: string };
type FamilyMember = { id: number; name: string; dob: string; phone: string; gender: string; relation: string };

function PersonalDetailsContent({ onPendingChange }: { onPendingChange?: (count: number) => void }) {
  const p = PROFILE.personal;
  const f = PROFILE.family;
  const [isEditing, setIsEditing] = useState(false);
  const [showValidation, setShowValidation] = useState(false);

  const [fullName, setFullName] = useState(p.fullName);
  const [personalEmail, setPersonalEmail] = useState(p.personalEmail);
  const [location, setLocation] = useState(p.location);
  const [workmodePreference, setWorkmodePreference] = useState(p.workmodePreference);
  const [shiftTiming, setShiftTiming] = useState('');
  const [shiftTimingSeasonal, setShiftTimingSeasonal] = useState('');

  const [fatherName, setFatherName] = useState(f.fatherName);
  const [fatherDob, setFatherDob] = useState(f.fatherDob);
  const [fatherPhone, setFatherPhone] = useState(f.fatherPhone);
  const [motherName, setMotherName] = useState(f.motherName);
  const [motherDob, setMotherDob] = useState(f.motherDob);
  const [motherPhone, setMotherPhone] = useState(f.motherPhone);
  const [spouseName, setSpouseName] = useState('');
  const [spouseDob, setSpouseDob] = useState('');
  const [spousePhone, setSpousePhone] = useState('');
  const [maritalStatus, setMaritalStatus] = useState(f.maritalStatus);
  const [noOfChildren, setNoOfChildren] = useState('0');
  const [childrenRows, setChildrenRows] = useState<ChildRow[]>([]);
  const [additionalMembers, setAdditionalMembers] = useState<FamilyMember[]>([]);
  const memberCounter = useRef(0);
  const shiftTimingRef = useRef<HTMLDivElement>(null);
  const shiftSeasonalRef = useRef<HTMLDivElement>(null);

  const pendingCount = [!shiftTiming, !shiftTimingSeasonal].filter(Boolean).length;
  const onPendingRef = useRef(onPendingChange);
  onPendingRef.current = onPendingChange;
  useEffect(() => { onPendingRef.current?.(pendingCount); }, [pendingCount]);

  const goToPendingFields = () => {
    setShowValidation(true);
    if (!isEditing) setIsEditing(true);
    setTimeout(() => {
      const target = !shiftTiming ? shiftTimingRef.current : !shiftTimingSeasonal ? shiftSeasonalRef.current : null;
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 80);
  };

  useEffect(() => {
    const count = parseInt(noOfChildren) || 0;
    setChildrenRows(prev => {
      if (count > prev.length) return [...prev, ...Array.from({ length: count - prev.length }, () => ({ name: '', dob: '', gender: '' }))];
      return prev.slice(0, count);
    });
  }, [noOfChildren]);

  const addMember = () => {
    memberCounter.current += 1;
    setAdditionalMembers(prev => [...prev, { id: memberCounter.current, name: '', dob: '', phone: '', gender: '', relation: '' }]);
  };
  const removeMember = (id: number) => setAdditionalMembers(prev => prev.filter(m => m.id !== id));
  const updateMember = (id: number, field: keyof Omit<FamilyMember, 'id'>, value: string) =>
    setAdditionalMembers(prev => prev.map(m => m.id === id ? { ...m, [field]: value } : m));
  const updateChild = (idx: number, field: keyof ChildRow, value: string) =>
    setChildrenRows(prev => prev.map((c, i) => i === idx ? { ...c, [field]: value } : c));

  const handleCancel = () => {
    setFullName(p.fullName); setPersonalEmail(p.personalEmail); setLocation(p.location);
    setWorkmodePreference(p.workmodePreference); setShiftTiming(''); setShiftTimingSeasonal('');
    setFatherName(f.fatherName); setFatherDob(f.fatherDob); setFatherPhone(f.fatherPhone);
    setMotherName(f.motherName); setMotherDob(f.motherDob); setMotherPhone(f.motherPhone);
    setSpouseName(''); setSpouseDob(''); setSpousePhone('');
    setMaritalStatus(f.maritalStatus); setNoOfChildren('0'); setChildrenRows([]); setAdditionalMembers([]);
    setShowValidation(false);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <>
        <PendingBanner count={pendingCount} tabLabel="Personal Details" onGoTo={goToPendingFields} />
        <div className="flex items-center justify-between mb-[20px]">
          <p className="font-bold leading-[32px] text-[#101828] text-[22px]">Personal Details</p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-[#3a58ef] flex items-center gap-[8px] px-[16px] py-[10px] rounded-[4px] hover:bg-[#2d47d1] transition-colors shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
          >
            <Pencil className="size-[16px] text-white" />
            <span className="font-semibold leading-[20px] text-[14px] text-white">Edit Details</span>
          </button>
        </div>
        <div className="w-full h-px bg-[#eaecf0]" />
        <div className="mt-[20px]">
          <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">My Information</p>
          <div className="grid grid-cols-3 gap-x-[24px] gap-y-[20px]">
            <Field label="Employee ID" value={p.employeeId} />
            <Field label="Full Name" value={fullName} />
            <Field label="Official Email ID" value={p.officialEmail} />
            <Field label="Personal Email ID" value={personalEmail} />
            <Field label="Location" value={location} />
            <Field label="Current Workmode" value={p.currentWorkmode} />
            <Field label="Workmode Preference" value={workmodePreference} />
            <Field label="Shift Timing" value={shiftTiming || '—'} />
            <Field label="Shift Timing : Seasonal" value={shiftTimingSeasonal || '—'} />
          </div>
        </div>
        <SectionDivider />
        <div>
          <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">Family Details</p>
          <div className="grid grid-cols-3 gap-x-[24px] gap-y-[20px]">
            <Field label="Father Name" value={fatherName} />
            <Field label="Father's Date Of Birth" value={fatherDob} />
            <Field label="Father's Phone Number" value={fatherPhone} />
            <Field label="Mother Name" value={motherName} />
            <Field label="Mother's Date Of Birth" value={motherDob} />
            <Field label="Mother's Phone Number" value={motherPhone} />
            <Field label="Marital Status" value={maritalStatus} />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PendingBanner count={pendingCount} tabLabel="Personal Details" onGoTo={goToPendingFields} />
      <div className="flex items-center justify-between mb-[20px]">
        <p className="font-bold leading-[32px] text-[#101828] text-[22px]">Personal Details</p>
        <div className="flex items-center gap-[8px]">
          <button onClick={handleCancel} className="px-[16px] py-[9px] border border-[#d0d5dd] rounded-[4px] text-[14px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors">
            Cancel
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-[#3a58ef] px-[16px] py-[9px] rounded-[4px] text-[14px] font-semibold text-white hover:bg-[#2d47d1] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
            Save
          </button>
        </div>
      </div>
      <div className="w-full h-px bg-[#eaecf0]" />

      <div className="mt-[20px]">
        <p className="font-semibold leading-[24px] text-[16px] text-[#101828] mb-[16px]">My Information</p>
        <div className="grid grid-cols-3 gap-x-[24px] gap-y-[20px]">
          <TextInputField label="Employee ID" value={p.employeeId} onChange={() => {}} disabled />
          <TextInputField label="Full Name" value={fullName} onChange={setFullName} />
          <TextInputField label="Official Email ID" value={p.officialEmail} onChange={() => {}} disabled />
          <TextInputField label="Personal Email ID" value={personalEmail} onChange={setPersonalEmail} />
          <TextInputField label="Location" value={location} onChange={setLocation} />
          <TextInputField label="Current Workmode" value={p.currentWorkmode} onChange={() => {}} disabled />
          <SelectField label="Workmode Preference" value={workmodePreference} options={WORKMODE_OPTIONS} onChange={setWorkmodePreference} />
          <div ref={shiftTimingRef}>
            <SelectField label="Shift Timing" value={shiftTiming} options={SHIFT_OPTIONS} onChange={setShiftTiming} required showError={showValidation} />
          </div>
          <div ref={shiftSeasonalRef}>
            <SelectField label="Shift Timing : Seasonal" value={shiftTimingSeasonal} options={SHIFT_SEASONAL_OPTIONS} onChange={setShiftTimingSeasonal} required showError={showValidation} />
          </div>
        </div>
      </div>

      <SectionDivider />

      <div>
        <div className="flex items-center justify-between mb-[16px]">
          <p className="font-semibold leading-[24px] text-[16px] text-[#101828]">Family Details</p>
          <button onClick={addMember} className="flex items-center gap-[6px] text-[13px] font-semibold text-[#3a58ef] hover:text-[#2d47d1] transition-colors">
            <Plus className="size-[14px]" />
            Add Members
          </button>
        </div>

        {additionalMembers.map((m, idx) => (
          <div key={m.id} className="border border-[#eaecf0] rounded-[8px] p-[20px] mb-[16px]">
            <div className="flex items-center justify-between mb-[16px]">
              <p className="font-semibold text-[14px] text-[#344054]">Family Member {idx + 1}</p>
              <button
                onClick={() => removeMember(m.id)}
                className="px-[12px] py-[5px] border border-[#fecdca] rounded-[4px] text-[12px] font-semibold text-[#f04438] hover:bg-[#fff5f5] transition-colors"
              >
                Delete
              </button>
            </div>
            <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
              <TextInputField label="Name" value={m.name} onChange={(v) => updateMember(m.id, 'name', v)} />
              <TextInputField label="Date of Birth" value={m.dob} onChange={(v) => updateMember(m.id, 'dob', v)} placeholder="DD/MM/YYYY" />
              <TextInputField label="Phone Number" value={m.phone} onChange={(v) => updateMember(m.id, 'phone', v)} />
              <SelectField label="Gender" value={m.gender} options={GENDER_OPTIONS} onChange={(v) => updateMember(m.id, 'gender', v)} />
              <SelectField label="Relation" value={m.relation} options={RELATION_OPTIONS} onChange={(v) => updateMember(m.id, 'relation', v)} />
            </div>
          </div>
        ))}

        <div className="grid grid-cols-3 gap-x-[24px] gap-y-[20px]">
          <TextInputField label="Father Name" value={fatherName} onChange={setFatherName} />
          <TextInputField label="Father's Date Of Birth" value={fatherDob} onChange={setFatherDob} placeholder="DD/MM/YYYY" />
          <TextInputField label="Father's Phone Number" value={fatherPhone} onChange={setFatherPhone} />
          <TextInputField label="Mother Name" value={motherName} onChange={setMotherName} />
          <TextInputField label="Mother's Date Of Birth" value={motherDob} onChange={setMotherDob} placeholder="DD/MM/YYYY" />
          <TextInputField label="Mother's Phone Number" value={motherPhone} onChange={setMotherPhone} />
          {maritalStatus !== 'Single' && (
            <>
              <TextInputField label="Spouse Name" value={spouseName} onChange={setSpouseName} />
              <TextInputField label="Spouse's Date Of Birth" value={spouseDob} onChange={setSpouseDob} placeholder="DD/MM/YYYY" />
              <TextInputField label="Spouse's Phone Number" value={spousePhone} onChange={setSpousePhone} />
            </>
          )}
          <SelectField label="Marital Status" value={maritalStatus} options={MARITAL_OPTIONS} onChange={setMaritalStatus} />
          <SelectField label="No of Children" value={noOfChildren} options={CHILDREN_COUNT_OPTIONS} onChange={setNoOfChildren} />
        </div>

        {childrenRows.length > 0 && (
          <div className="mt-[20px] grid grid-cols-3 gap-x-[24px] gap-y-[20px]">
            {childrenRows.flatMap((child, idx) => [
              <TextInputField key={`cn-${idx}`} label={`Child ${idx + 1} Name`} value={child.name} onChange={(v) => updateChild(idx, 'name', v)} />,
              <TextInputField key={`cd-${idx}`} label={`Child ${idx + 1} Date of Birth`} value={child.dob} onChange={(v) => updateChild(idx, 'dob', v)} placeholder="DD/MM/YYYY" />,
              <SelectField key={`cg-${idx}`} label={`Child ${idx + 1} Gender`} value={child.gender} options={GENDER_OPTIONS} onChange={(v) => updateChild(idx, 'gender', v)} />,
            ])}
          </div>
        )}
      </div>
    </>
  );
}

// ── UserProfileView ───────────────────────────────────────────────────────────

export default function UserProfileView() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('personal');
  const [introVideo, setIntroVideo] = useState<VideoIntro>({ type: 'none' });
  const [tabPendingCounts, setTabPendingCounts] = useState<Partial<Record<ProfileTab, number>>>({});

  return (
    <div className="flex flex-col gap-[16px] h-full w-full overflow-auto">

      {/* Profile Header Card */}
      <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full shrink-0">
        <div className="flex items-center gap-[20px] px-[24px] pt-[24px] pb-[20px]">
          <ProfileAvatar name={PROFILE.name} completion={PROFILE.completion} />
          <div className="flex flex-col gap-[8px] flex-1">
            <p className="font-bold leading-[32px] text-[#101828] text-[24px]">{PROFILE.name}</p>
            <div className="flex items-center gap-[6px] flex-wrap">
              <span className="font-normal text-[13px] leading-[20px] text-[#667085]">{PROFILE.yearsLabel} :</span>
              <span className="font-semibold text-[13px] leading-[20px] text-[#3a58ef]">{PROFILE.years}</span>
              <span className="text-[#d0d5dd] mx-[4px]">|</span>
              <span className="font-normal text-[13px] leading-[20px] text-[#667085]">Learning Hours :</span>
              <span className="font-semibold text-[13px] leading-[20px] text-[#3a58ef]">{PROFILE.learningHours}</span>
              <span className="text-[#d0d5dd] mx-[4px]">|</span>
              <span className="font-normal text-[13px] leading-[20px] text-[#667085]">Skills :</span>
              <span className="font-semibold text-[13px] leading-[20px] text-[#3a58ef]">{PROFILE.skills}</span>
            </div>
          </div>
          <VideoIntroSlot video={introVideo} setVideo={setIntroVideo} />
        </div>
        <div className="flex items-end border-t border-[#eaecf0] px-[24px]">
          {TABS.map((tab) => {
            const pending = tabPendingCounts[tab.id];
            const isComplete = pending === 0;
            const hasPending = typeof pending === 'number' && pending > 0;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="relative flex flex-col items-start shrink-0">
                <div className="px-[16px] py-[12px]">
                  <div className="flex items-center gap-[5px]">
                    <p className={`font-medium leading-[20px] text-[14px] whitespace-nowrap transition-colors ${activeTab === tab.id ? 'text-[#3a58ef]' : 'text-[#667085] hover:text-[#344054]'}`}>
                      {tab.label}
                    </p>
                    {hasPending && (
                      <span className="w-[16px] h-[16px] rounded-full bg-[#f04438] flex items-center justify-center flex-shrink-0">
                        <span className="text-[9px] font-bold text-white leading-none">{pending}</span>
                      </span>
                    )}
                    {isComplete && (
                      <span className="w-[6px] h-[6px] rounded-full bg-[#12b76a] flex-shrink-0" />
                    )}
                  </div>
                </div>
                <div className={`h-[2px] w-full rounded-t-[2px] ${activeTab === tab.id ? 'bg-[#3a58ef]' : 'bg-transparent'}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full p-[24px] flex-1 overflow-auto">

        {activeTab === 'personal' && <PersonalDetailsContent onPendingChange={(n) => setTabPendingCounts(prev => ({ ...prev, personal: n }))} />}

        {activeTab === 'skills' && <SkillSetContent onPendingChange={(n) => setTabPendingCounts(prev => ({ ...prev, skills: n }))} />}

        {activeTab === 'intro' && (
          <VideoIntroTabContent video={introVideo} setVideo={setIntroVideo} />
        )}

        {activeTab !== 'personal' && activeTab !== 'skills' && activeTab !== 'intro' && (
          <div className="flex items-center justify-center h-full min-h-[200px]">
            <p className="text-[14px] text-[#667085]">
              {TABS.find((t) => t.id === activeTab)?.label} — coming soon
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
