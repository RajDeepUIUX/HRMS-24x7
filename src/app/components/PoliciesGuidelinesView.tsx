import { useState, useRef } from 'react';
import {
  Search, Filter, FileText, Video, FilePlus,
  X, Link2, Upload, Paperclip, Calendar, ChevronDown, Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-bey3qsqgt6';

/* ─────────────────────────── Types ─────────────────────────── */

interface PolicyData {
  id: string;
  title: string;
  category: string;
  country: string;
  updatedOn: string;
  hasFile: boolean;
  hasVideo: boolean;
}

type TabType = 'published' | 'custom-documents';
type MediaMode = 'link' | 'video';

interface PolicyForm {
  effectiveDate: string;
  countryScope: string;
  category: string;
  workerTypeFull: boolean;
  workerTypePart: boolean;
  mediaMode: MediaMode;
  mediaLink: string;
  mediaVideoFile: File | null;
  policyDocument: File | null;
  onboardingObligatory: boolean;
}

const EMPTY_FORM: PolicyForm = {
  effectiveDate: '',
  countryScope: '',
  category: '',
  workerTypeFull: false,
  workerTypePart: false,
  mediaMode: 'link',
  mediaLink: '',
  mediaVideoFile: null,
  policyDocument: null,
  onboardingObligatory: false,
};

/* ─────────────────────────── Data ─────────────────────────── */

const publishedPolicies: PolicyData[] = [
  { id: '1',  title: 'New HR Policy 2025',  category: 'HR Policies',            country: 'India',       updatedOn: 'Dec 25,2024', hasFile: true,  hasVideo: true  },
  { id: '2',  title: 'EMP Bnft New 25',     category: 'Employee Benefits',       country: 'India',       updatedOn: 'Dec 26,2024', hasFile: true,  hasVideo: false },
  { id: '3',  title: 'Old HR Policy',       category: 'HR Policies',            country: 'India',       updatedOn: 'Dec 27,2024', hasFile: false, hasVideo: true  },
  { id: '4',  title: 'Guidelines AMD',      category: 'Operational Guidelines', country: 'Philippines', updatedOn: 'Dec 24,2024', hasFile: false, hasVideo: true  },
  { id: '5',  title: 'Policy',              category: 'HR Policies',            country: 'Philippines', updatedOn: 'Dec 24,2024', hasFile: true,  hasVideo: false },
  { id: '6',  title: 'Benefits of L&D',     category: 'Employee Benefits',       country: 'India',       updatedOn: 'Dec 19,2024', hasFile: true,  hasVideo: false },
  { id: '7',  title: 'Guidelines Dec24',    category: 'Operational Guidelines', country: 'Philippines', updatedOn: 'Dec 17,2024', hasFile: true,  hasVideo: false },
  { id: '8',  title: 'Legal Auth',          category: 'Compliance & Legal',     country: 'India',       updatedOn: 'Dec 11,2024', hasFile: false, hasVideo: true  },
  { id: '9',  title: 'EMP Benefits 2k24',   category: 'Employee Benefits',       country: 'Philippines', updatedOn: 'Nov 28,2024', hasFile: true,  hasVideo: false },
  { id: '10', title: 'Compliance 2k24',     category: 'Compliance & Legal',     country: 'Philippines', updatedOn: 'Nov 26,2024', hasFile: true,  hasVideo: true  },
];

/* ─────────────────────────── Shared primitives ─────────────────────────── */

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="block text-[13px] font-semibold text-[#344054] mb-[6px]">
      {label}
      {required && <span className="text-[#d92d20] ml-[2px]">*</span>}
    </label>
  );
}

function StyledSelect({
  value, onChange, placeholder, options,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none pl-[12px] pr-[36px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-[#3a58ef]/20 focus:border-[#3a58ef] transition-all"
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={16} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none" />
    </div>
  );
}

/* ─────────────────────────── Add Policy Drawer ─────────────────────────── */

function AddPolicyDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState<PolicyForm>(EMPTY_FORM);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const docInputRef   = useRef<HTMLInputElement>(null);

  const set = <K extends keyof PolicyForm>(key: K, val: PolicyForm[K]) =>
    setForm(prev => ({ ...prev, [key]: val }));

  const switchMediaMode = (mode: MediaMode) => {
    setForm(prev => ({
      ...prev,
      mediaMode: mode,
      mediaLink: mode === 'video' ? '' : prev.mediaLink,
      mediaVideoFile: mode === 'link' ? null : prev.mediaVideoFile,
    }));
  };

  const handleVideoFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    set('mediaVideoFile', file);
    e.target.value = '';
  };

  const handleDocFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    set('policyDocument', file);
    e.target.value = '';
  };

  const handleClose = () => {
    setForm(EMPTY_FORM);
    onClose();
  };

  const handleSubmit = () => {
    handleClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[200]"
            onClick={handleClose}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 320 }}
            className="fixed top-0 right-0 h-full w-full max-w-[600px] bg-white z-[210] flex flex-col shadow-2xl"
          >
            {/* ── Drawer Header ── */}
            <div className="flex items-start justify-between px-[24px] py-[20px] border-b border-[#eaecf0] shrink-0">
              <div>
                <h2 className="text-[18px] font-bold text-[#101828] leading-[28px]">Add New Policy</h2>
                <p className="text-[13px] text-[#667085] mt-[2px]">Fill in the details to create a custom policy document.</p>
              </div>
              <button
                onClick={handleClose}
                className="p-[6px] text-[#98a2b3] hover:text-[#344054] hover:bg-[#f2f4f7] rounded-full transition-all mt-[2px] shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* ── Drawer Body (scrollable) ── */}
            <div className="flex-1 overflow-y-auto px-[24px] py-[20px] space-y-[20px]">

              {/* Row 1: Effective Date + Country Scope */}
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <FieldLabel label="Effective Date" required />
                  <div className="relative">
                    <input
                      type="date"
                      value={form.effectiveDate}
                      onChange={(e) => set('effectiveDate', e.target.value)}
                      className="w-full pl-[12px] pr-[40px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-[#3a58ef]/20 focus:border-[#3a58ef] transition-all"
                    />
                    <Calendar size={16} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none" />
                  </div>
                </div>
                <div>
                  <FieldLabel label="Country Scope" required />
                  <StyledSelect
                    value={form.countryScope}
                    onChange={(v) => set('countryScope', v)}
                    placeholder="Select country"
                    options={['India', 'Philippines', 'Canada']}
                  />
                </div>
              </div>

              {/* Row 2: Category + Worker Type */}
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <FieldLabel label="Category" required />
                  <StyledSelect
                    value={form.category}
                    onChange={(v) => set('category', v)}
                    placeholder="Select category"
                    options={['HR Policies', 'Employee Benefits', 'Operational Guidelines', 'Compliance & Legal']}
                  />
                </div>
                <div>
                  <FieldLabel label="Worker Type" required />
                  <div className="flex items-center gap-[20px] mt-[4px]">
                    {[
                      { key: 'workerTypeFull' as const, label: 'Full Time' },
                      { key: 'workerTypePart' as const, label: 'Part Time' },
                    ].map(({ key, label }) => (
                      <label key={key} className="flex items-center gap-[8px] cursor-pointer group">
                        <div
                          onClick={() => set(key, !form[key])}
                          className={`size-[18px] rounded-[4px] border-2 flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                            form[key]
                              ? 'bg-[#3a58ef] border-[#3a58ef]'
                              : 'border-[#d0d5dd] bg-white group-hover:border-[#3a58ef]'
                          }`}
                        >
                          {form[key] && (
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span className="text-[14px] text-[#344054] font-medium">{label}</span>
                      </label>
                    ))}
                  </div>
                  {!form.workerTypeFull && !form.workerTypePart && (
                    <p className="text-[12px] text-[#667085] mt-[6px]">Select one or both worker types.</p>
                  )}
                </div>
              </div>

              {/* Media Content */}
              <div>
                <FieldLabel label="Media Content" />
                <p className="text-[12px] text-[#667085] mb-[10px]">Choose one option — you can add a link or upload a video, not both.</p>

                {/* Mode toggle */}
                <div className="flex bg-[#f2f4f7] rounded-[8px] p-[4px] mb-[12px] gap-[4px]">
                  {([
                    { mode: 'link'  as MediaMode, icon: <Link2  size={15} />, label: 'Add Link'     },
                    { mode: 'video' as MediaMode, icon: <Upload  size={15} />, label: 'Upload Video' },
                  ]).map(({ mode, icon, label }) => (
                    <button
                      key={mode}
                      onClick={() => switchMediaMode(mode)}
                      className={`flex-1 flex items-center justify-center gap-[6px] py-[8px] px-[12px] rounded-[6px] text-[13px] font-semibold transition-all ${
                        form.mediaMode === mode
                          ? 'bg-white text-[#3a58ef] shadow-sm border border-[#e0e7ff]'
                          : 'text-[#667085] hover:text-[#344054]'
                      }`}
                    >
                      {icon}
                      {label}
                    </button>
                  ))}
                </div>

                {/* Link input */}
                {form.mediaMode === 'link' && (
                  <div className="relative">
                    <Link2 size={16} className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#98a2b3]" />
                    <input
                      type="url"
                      placeholder="https://example.com/video"
                      value={form.mediaLink}
                      onChange={(e) => set('mediaLink', e.target.value)}
                      className="w-full pl-[36px] pr-[12px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] placeholder-[#98a2b3] bg-white focus:outline-none focus:ring-2 focus:ring-[#3a58ef]/20 focus:border-[#3a58ef] transition-all"
                    />
                  </div>
                )}

                {/* Video upload */}
                {form.mediaMode === 'video' && (
                  <>
                    {!form.mediaVideoFile ? (
                      <button
                        type="button"
                        onClick={() => videoInputRef.current?.click()}
                        className="w-full border-2 border-dashed border-[#d0d5dd] rounded-[8px] py-[20px] flex flex-col items-center gap-[8px] hover:border-[#3a58ef] hover:bg-[#f5f8ff] transition-all group"
                      >
                        <div className="size-[40px] rounded-full bg-[#f2f4f7] flex items-center justify-center group-hover:bg-[#eff4ff] transition-colors">
                          <Video size={20} className="text-[#667085] group-hover:text-[#3a58ef]" />
                        </div>
                        <div className="text-center">
                          <p className="text-[13px] font-semibold text-[#3a58ef]">Click to upload video</p>
                          <p className="text-[12px] text-[#667085] mt-[2px]">MP4, MOV, AVI up to 500MB</p>
                        </div>
                      </button>
                    ) : (
                      <div className="flex items-center gap-[10px] p-[12px] bg-[#f5f8ff] border border-[#d1e0ff] rounded-[8px]">
                        <div className="size-[36px] bg-[#eff4ff] rounded-[6px] flex items-center justify-center shrink-0">
                          <Video size={18} className="text-[#3a58ef]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] font-semibold text-[#101828] truncate">{form.mediaVideoFile.name}</p>
                          <p className="text-[11px] text-[#667085]">{(form.mediaVideoFile.size / (1024 * 1024)).toFixed(1)} MB</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => set('mediaVideoFile', null)}
                          className="text-[#98a2b3] hover:text-[#d92d20] transition-colors shrink-0"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    )}
                    <input
                      ref={videoInputRef}
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={handleVideoFile}
                    />
                  </>
                )}
              </div>

              {/* Policy Document */}
              <div>
                <FieldLabel label="Policy Document" />
                <p className="text-[12px] text-[#667085] mb-[10px]">Upload one policy document (PDF, DOC, DOCX).</p>

                {!form.policyDocument ? (
                  <button
                    type="button"
                    onClick={() => docInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-[#d0d5dd] rounded-[8px] py-[20px] flex flex-col items-center gap-[8px] hover:border-[#3a58ef] hover:bg-[#f5f8ff] transition-all group"
                  >
                    <div className="size-[40px] rounded-full bg-[#f2f4f7] flex items-center justify-center group-hover:bg-[#eff4ff] transition-colors">
                      <Paperclip size={20} className="text-[#667085] group-hover:text-[#3a58ef]" />
                    </div>
                    <div className="text-center">
                      <p className="text-[13px] font-semibold text-[#3a58ef]">Click to upload document</p>
                      <p className="text-[12px] text-[#667085] mt-[2px]">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </button>
                ) : (
                  <div className="flex items-center gap-[10px] p-[12px] bg-[#f5f8ff] border border-[#d1e0ff] rounded-[8px]">
                    <div className="size-[36px] bg-[#eff4ff] rounded-[6px] flex items-center justify-center shrink-0">
                      <FileText size={18} className="text-[#3a58ef]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-[#101828] truncate">{form.policyDocument.name}</p>
                      <p className="text-[11px] text-[#667085]">{(form.policyDocument.size / 1024).toFixed(0)} KB</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => set('policyDocument', null)}
                      className="text-[#98a2b3] hover:text-[#d92d20] transition-colors shrink-0"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                )}
                <input
                  ref={docInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleDocFile}
                />
              </div>

              {/* Onboarding Obligatory */}
              <div className="border border-[#eaecf0] rounded-[8px] p-[16px]">
                <label className="flex items-start gap-[12px] cursor-pointer group">
                  <div
                    onClick={() => set('onboardingObligatory', !form.onboardingObligatory)}
                    className={`size-[18px] rounded-[4px] border-2 flex items-center justify-center transition-all cursor-pointer shrink-0 mt-[2px] ${
                      form.onboardingObligatory
                        ? 'bg-[#3a58ef] border-[#3a58ef]'
                        : 'border-[#d0d5dd] bg-white group-hover:border-[#3a58ef]'
                    }`}
                  >
                    {form.onboardingObligatory && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#101828] leading-[20px]">Onboarding Obligatory</p>
                    <p className="text-[13px] text-[#667085] mt-[2px] leading-[18px]">Make this obligatory for the onboarding process</p>
                  </div>
                </label>
              </div>

            </div>

            {/* ── Drawer Footer ── */}
            <div className="shrink-0 px-[24px] py-[16px] border-t border-[#eaecf0] bg-white flex items-center justify-end gap-[12px]">
              <button
                onClick={handleClose}
                className="px-[20px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-[24px] py-[10px] bg-[#3a58ef] rounded-[8px] text-[14px] font-semibold text-white hover:bg-[#2d46d6] transition-colors shadow-sm"
              >
                Submit
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────── Main View ─────────────────────────── */

interface PoliciesGuidelinesViewProps {
  onNavigationChange?: (view: string) => void;
}

export default function PoliciesGuidelinesView({ onNavigationChange }: PoliciesGuidelinesViewProps) {
  const [activeTab, setActiveTab]         = useState<TabType>('published');
  const [searchTerm, setSearchTerm]       = useState('');
  const [filterActive, setFilterActive]   = useState(false);
  const [drawerOpen, setDrawerOpen]       = useState(false);

  const filteredPolicies = publishedPolicies.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AddPolicyDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <div className="bg-white flex flex-col gap-0 h-full w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] overflow-hidden font-sans">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px] px-[16px] md:px-[24px] pt-[20px] pb-[16px] shrink-0">
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center gap-[4px]">
              <span className="text-[12px] font-medium text-[#98a2b3] leading-[18px]">Human Resources</span>
              <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 16 16">
                <path d="M6 4L10 8L6 12" stroke="#98a2b3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[12px] font-medium text-[#344054] leading-[18px]">Policies &amp; Guidelines</span>
            </div>
            <h1 className="text-[24px] font-bold text-[#101828] leading-[32px]">Policies &amp; Guidelines</h1>
          </div>

          <div className="flex items-center gap-[8px] shrink-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-[240px] lg:w-[298px] pl-[16px] pr-[40px] py-[10px] bg-[#f2f4f7] border border-[#eaecf0] rounded-[4px] text-[14px] text-[#5d667b] placeholder-[#5d667b] outline-none focus:ring-1 focus:ring-[#3a58ef] focus:border-[#3a58ef] transition-all"
              />
              <Search className="absolute right-[12px] top-1/2 -translate-y-1/2 size-[20px] text-[#5d667b] pointer-events-none" />
            </div>
            <button
              onClick={() => setFilterActive(!filterActive)}
              className={`p-[10px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 transition-colors bg-[#3a58ef] text-white hover:bg-[#2d46d6] ${filterActive ? 'ring-2 ring-[#3a58ef]/30' : ''}`}
            >
              <Filter className="size-[20px]" />
            </button>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex items-center border-b border-[#eaecf0] px-[16px] md:px-[24px] shrink-0">
          {(['published', 'custom-documents'] as TabType[]).map((tab) => {
            const label = tab === 'published' ? 'Published' : 'Custom Documents';
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-[12px] pt-[4px] px-[4px] mr-[24px] text-[14px] font-medium transition-colors whitespace-nowrap ${
                  isActive ? 'text-[#3a58ef]' : 'text-[#667085] hover:text-[#344054]'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3a58ef] rounded-t-[2px]" />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Tab Content ── */}
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">

          {/* Published */}
          {activeTab === 'published' && (
            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
              <div className="hidden md:block flex-1 overflow-auto">
                <table className="w-full border-collapse">
                  <thead className="sticky top-0 z-10">
                    <tr>
                      {['Policy Title', 'Category', 'Country', 'Updated On', 'File', 'Video'].map((col) => (
                        <th key={col} className="bg-[#ebeefd] px-[16px] py-[12px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] whitespace-nowrap">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPolicies.map((policy) => (
                      <tr key={policy.id} className="border-b border-[#f2f2f2] hover:bg-[#f9fafb] transition-colors">
                        <td className="px-[16px] py-[14px] text-[14px] text-[#1d2939] max-w-[240px]"><span className="block truncate">{policy.title}</span></td>
                        <td className="px-[16px] py-[14px] text-[14px] text-[#344054] whitespace-nowrap">{policy.category}</td>
                        <td className="px-[16px] py-[14px] text-[14px] text-[#344054] whitespace-nowrap">{policy.country}</td>
                        <td className="px-[16px] py-[14px] text-[14px] text-[#344054] whitespace-nowrap">{policy.updatedOn}</td>
                        <td className="px-[16px] py-[14px]">{policy.hasFile ? <FileText className="size-[20px] text-[#5d667b]" /> : <span className="text-[14px] text-[#344054]">-</span>}</td>
                        <td className="px-[16px] py-[14px]">{policy.hasVideo ? <Video className="size-[20px] text-[#5d667b]" /> : <span className="text-[14px] text-[#344054]">-</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden flex-1 overflow-auto p-[16px]">
                <div className="space-y-[12px]">
                  {filteredPolicies.map((policy) => (
                    <div key={policy.id} className="bg-white border border-[#eaecf0] rounded-[8px] p-[16px] shadow-sm">
                      <div className="flex items-start justify-between gap-[8px] mb-[12px]">
                        <h3 className="text-[14px] font-semibold text-[#1d2939] flex-1">{policy.title}</h3>
                        <span className="text-[12px] text-[#667085] whitespace-nowrap shrink-0">{policy.updatedOn}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-[8px] text-[13px] mb-[12px]">
                        <div><span className="text-[#667085]">Category</span><p className="text-[#344054] font-medium mt-[2px]">{policy.category}</p></div>
                        <div><span className="text-[#667085]">Country</span><p className="text-[#344054] font-medium mt-[2px]">{policy.country}</p></div>
                      </div>
                      <div className="flex items-center gap-[20px] pt-[10px] border-t border-[#f2f2f2]">
                        <div className="flex items-center gap-[6px] text-[13px] text-[#667085]">
                          <span>File:</span>{policy.hasFile ? <FileText className="size-[16px] text-[#5d667b]" /> : <span className="text-[#344054]">-</span>}
                        </div>
                        <div className="flex items-center gap-[6px] text-[13px] text-[#667085]">
                          <span>Video:</span>{policy.hasVideo ? <Video className="size-[16px] text-[#5d667b]" /> : <span className="text-[#344054]">-</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="shrink-0 border-t border-[#eaecf0] bg-white shadow-[0px_-4px_21px_0px_rgba(0,0,0,0.04)]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-[12px] px-[16px] md:px-[24px] py-[14px]">
                  <div className="flex items-center gap-[10px] text-[14px] md:text-[16px]">
                    <span className="text-[#5d667b]">Showing</span>
                    <div className="bg-white border border-[#eaecf0] rounded-[4px] px-[12px] py-[6px] flex items-center gap-[4px]">
                      <span className="text-[#1d2939] font-medium">20</span>
                      <svg className="size-[16px]" fill="none" viewBox="0 0 18 18"><path d={svgPaths.pab79800} fill="#5D667B" /></svg>
                    </div>
                    <span className="font-semibold text-[#1d2939]">of 500</span>
                    <span className="text-[#5d667b]">Events</span>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <button className="bg-white border border-[#eaecf0] rounded-[8px] p-[7px] hover:bg-gray-50 transition-colors">
                      <svg className="size-[18px]" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p32b9a560} fill="#5D667B" /><path d={svgPaths.p20dc1080} fill="#5D667B" /></svg>
                    </button>
                    <button className="bg-white border border-[#eaecf0] rounded-[8px] p-[7px] hover:bg-gray-50 transition-colors">
                      <svg className="size-[18px]" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p2ed28900} fill="#5D667B" /></svg>
                    </button>
                    <div className="flex items-center gap-[8px]">
                      <div className="bg-white border border-[#98a2b3] rounded-[8px] px-[12px] py-[6px] min-w-[40px] text-center">
                        <span className="text-[14px] md:text-[16px] font-medium text-[#1d2939]">1</span>
                      </div>
                      <span className="text-[14px] md:text-[16px] text-[#5d667b]">of 25 pages</span>
                    </div>
                    <button className="bg-white border border-[#eaecf0] rounded-[8px] p-[7px] hover:bg-gray-50 transition-colors">
                      <svg className="size-[18px]" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p112ebf00} fill="#5D667B" /></svg>
                    </button>
                    <button className="bg-white border border-[#eaecf0] rounded-[8px] p-[7px] hover:bg-gray-50 transition-colors">
                      <svg className="size-[18px]" fill="none" viewBox="0 0 20 20"><path d={svgPaths.p1823e600} fill="#5D667B" /><path d={svgPaths.p18139cb0} fill="#5D667B" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Custom Documents */}
          {activeTab === 'custom-documents' && (
            <div className="flex-1 flex flex-col items-center justify-center p-[24px] text-center">
              <div className="size-[80px] mx-auto flex items-center justify-center mb-[20px]">
                <FilePlus className="size-[64px] text-[#344054]" strokeWidth={1.2} />
              </div>
              <h2 className="text-[20px] font-bold text-[#1d2939] mb-[8px]">No Data Yet? Let's Get Started!</h2>
              <p className="text-[14px] text-[#5d667b] max-w-[360px] leading-[22px] mb-[28px]">
                It looks like you haven't added any new policies yet.<br />
                Start adding your policies and get things more organised.
              </p>
              <button
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center gap-[8px] bg-[#3a58ef] text-white px-[20px] py-[12px] rounded-[8px] text-[14px] font-semibold hover:bg-[#2d46d6] transition-colors shadow-sm"
              >
                <span className="text-[18px] leading-none">⊕</span>
                Add New Policy
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
