import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, Plus, Pencil, Trash2, Info, Send, ExternalLink } from 'lucide-react';

const INR_TO_USD = 83;

const EMPLOYMENT_TYPES  = ['Full-Time', 'Part-Time', 'Contract', 'Internship']                                           as const;
const PROBATION_PERIODS = ['1 Month', '3 Months', '6 Months', '1 Year']                                                   as const;
const WORK_MODES        = ['On Site', 'WFH', 'Hybrid']                                                                    as const;
const DOMAINS           = ['Accounting', 'Audit', 'Tax', 'Finance', 'HR', 'IT', 'Assigned by Management']                as const;

interface CustomClause {
  id: string;
  name: string;
  description: string;
  status: 'Pending Review' | 'Approved';
}

export interface StaffInfoForLetter {
  staffName: string;
  designation: string;
  workMode: string;
  location: string;
}

interface Props {
  staff: StaffInfoForLetter;
  sidebarExpanded: boolean;
  onClose: () => void;
  onSendForESign: () => void;
}

/* ─── Sub-helpers ─── */

function FieldLabel({ label, modified }: { label: string; modified?: boolean }) {
  return (
    <label className="block text-[12px] font-medium text-[#667085] mb-[5px]">
      {label}
      {modified && <span className="text-[#d97706] font-semibold ml-[4px]">(Modified)</span>}
    </label>
  );
}

function TextInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-[10px] py-[8px] border border-[#d0d5dd] rounded-[6px] text-[13px] text-[#101828] bg-white focus:outline-none focus:ring-1 focus:ring-[#3a58ef] focus:border-[#3a58ef] transition-all"
    />
  );
}

function StyledSelect({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: readonly string[] }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full appearance-none pl-[10px] pr-[28px] py-[8px] border border-[#d0d5dd] rounded-[6px] text-[13px] text-[#101828] bg-white focus:outline-none focus:ring-1 focus:ring-[#3a58ef] focus:border-[#3a58ef] transition-all cursor-pointer"
      >
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={13} className="absolute right-[8px] top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none" />
    </div>
  );
}

function DateInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <input
        type="date"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full pl-[10px] pr-[32px] py-[8px] border border-[#d0d5dd] rounded-[6px] text-[13px] text-[#101828] bg-white focus:outline-none focus:ring-1 focus:ring-[#3a58ef] focus:border-[#3a58ef] transition-all cursor-pointer"
      />
      <Calendar size={13} className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[#98a2b3] pointer-events-none" />
    </div>
  );
}

function AmountField({ label, value, onChange, modified }: { label: string; value: string; onChange: (v: string) => void; modified?: boolean }) {
  const num = parseFloat(value) || 0;
  const usd = num > 0 ? Math.round(num / INR_TO_USD) : null;
  return (
    <div>
      <FieldLabel label={label} modified={modified} />
      <div className="relative">
        <input
          type="number"
          min="0"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="0"
          className="w-full pl-[10px] pr-[44px] py-[8px] border border-[#d0d5dd] rounded-[6px] text-[13px] text-[#101828] bg-white focus:outline-none focus:ring-1 focus:ring-[#3a58ef] focus:border-[#3a58ef] transition-all"
        />
        <span className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[11px] font-semibold text-[#667085]">INR</span>
      </div>
      {usd !== null && (
        <p className="text-[11px] text-[#98a2b3] mt-[3px] pl-[1px]">≈ ${usd.toLocaleString()} USD</p>
      )}
    </div>
  );
}

function Section({
  title, subtitle, rightContent, collapsed, onToggle, children,
}: {
  title: string; subtitle: string; rightContent?: React.ReactNode;
  collapsed: boolean; onToggle: () => void; children: React.ReactNode;
}) {
  return (
    <div className="border border-[#eaecf0] rounded-[8px] bg-white overflow-hidden">
      <div className="flex items-center justify-between px-[20px] py-[14px]">
        <button onClick={onToggle} className="text-left flex-1 min-w-0 pr-[8px]">
          <h3 className="text-[14px] font-bold text-[#101828]">{title}</h3>
          <p className="text-[12px] text-[#667085] mt-[1px] leading-[16px]">{subtitle}</p>
        </button>
        <div className="flex items-center gap-[10px] shrink-0">
          {rightContent}
          <button onClick={onToggle} className="text-[#667085] hover:text-[#344054] transition-colors">
            {collapsed ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
          </button>
        </div>
      </div>
      {!collapsed && (
        <div className="border-t border-[#eaecf0] px-[20px] pt-[14px] pb-[20px]">
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── Main component ─── */

export default function CustomizeOfferLetterView({ staff, sidebarExpanded, onClose, onSendForESign }: Props) {
  const nameParts      = staff.staffName.split(' ');
  const INIT_JOIN_DATE = '2026-01-19';
  const INIT_SALARY    = '850000';

  /* form state */
  const [firstName,         setFirstName]         = useState(nameParts[0] || 'Sam');
  const [lastName,          setLastName]           = useState(nameParts.slice(1).join(' ') || 'Poland');
  const [email,             setEmail]              = useState(`${(nameParts[0] || 'sam').toLowerCase()}.${(nameParts[1] || 'poland').toLowerCase()}@example.com`);
  const [phone,             setPhone]              = useState('+91 9876543210');
  const [jobTitle,          setJobTitle]           = useState(staff.designation);
  const [location,          setLocation]           = useState(staff.location);
  const [reportingManager,  setReportingManager]   = useState('Ankit Garg');
  const [domain,            setDomain]             = useState<typeof DOMAINS[number]>('Assigned by Management');
  const [employmentType,    setEmploymentType]     = useState<typeof EMPLOYMENT_TYPES[number]>('Full-Time');
  const [joiningDate,       setJoiningDate]        = useState(INIT_JOIN_DATE);
  const [probationPeriod,   setProbationPeriod]    = useState<typeof PROBATION_PERIODS[number]>('6 Months');
  const [workMode,          setWorkMode]           = useState<typeof WORK_MODES[number]>(staff.workMode === 'WFO' ? 'On Site' : (staff.workMode === 'WFH' ? 'WFH' : 'On Site'));
  const [noticeBuyOut,      setNoticeBuyOut]       = useState('No');
  const [employmentEndDate, setEmploymentEndDate]  = useState('2027-01-19');
  const [nextAppraisal,     setNextAppraisal]      = useState('Jan 2027');
  const [salaryPackage,     setSalaryPackage]      = useState(INIT_SALARY);
  const [joiningBonus,      setJoiningBonus]       = useState('0');

  const [hasChanges,    setHasChanges]    = useState(false);
  const [collapsed,     setCollapsed]     = useState<Record<string, boolean>>({});
  const [clauses,       setClauses]       = useState<CustomClause[]>([
    { id: 'c1', name: 'Confidentiality Clause', description: 'The employee shall maintain strict confidentiality regarding all company information, trade secrets, client data, business strategies, and internal documents during employment. This information shall not be disclosed to any third party without prior written consent from the company.', status: 'Pending Review' },
  ]);
  const [showAddClause, setShowAddClause] = useState(false);
  const [newClauseName, setNewClauseName] = useState('');
  const [newClauseDesc, setNewClauseDesc] = useState('');

  const gridCols = sidebarExpanded ? 'grid-cols-2' : 'grid-cols-4';
  const toggle   = (id: string) => setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));

  /* wrap a setter to also mark hasChanges */
  const mk = <T,>(setter: React.Dispatch<React.SetStateAction<T>>) => (v: T) => { setter(v); setHasChanges(true); };

  const fmtDate = (d: string) => {
    if (!d) return '';
    const dt = new Date(d);
    return isNaN(dt.getTime()) ? d : dt.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const handleAddClause = () => {
    if (!newClauseName.trim() || !newClauseDesc.trim()) return;
    setClauses(prev => [...prev, { id: `c${Date.now()}`, name: newClauseName, description: newClauseDesc, status: 'Pending Review' }]);
    setNewClauseName('');
    setNewClauseDesc('');
    setShowAddClause(false);
    setHasChanges(true);
  };

  const salaryNum = parseFloat(salaryPackage) || 0;

  return (
    <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] flex flex-col h-full w-full overflow-hidden font-sans">

      {/* ── Header ── */}
      <div className="flex items-center justify-between px-[24px] py-[14px] border-b border-[#eaecf0] shrink-0">
        <div>
          <div className="flex items-center gap-[5px] mb-[2px]">
            <span className="text-[12px] text-[#98a2b3] font-medium">Human Resources</span>
            <svg className="size-[10px]" fill="none" viewBox="0 0 16 16"><path d="M6 4L10 8L6 12" stroke="#98a2b3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-[12px] text-[#98a2b3] font-medium">Staff Agreements</span>
            <svg className="size-[10px]" fill="none" viewBox="0 0 16 16"><path d="M6 4L10 8L6 12" stroke="#98a2b3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-[12px] text-[#344054] font-medium">Offer Letter</span>
          </div>
          <h1 className="text-[20px] font-bold text-[#101828] leading-[28px]">Customize Offer Letter</h1>
        </div>
        <div className="flex items-center gap-[10px]">
          <button onClick={onClose} className="px-[16px] py-[8px] border border-[#d0d5dd] rounded-[6px] text-[13px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors">
            Close
          </button>
          <button onClick={onSendForESign} className="flex items-center gap-[6px] px-[16px] py-[8px] bg-[#3a58ef] rounded-[6px] text-[13px] font-semibold text-white hover:bg-[#2d46d6] transition-colors shadow-sm">
            <Send size={14} />
            Send for E-Sign
          </button>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex-1 min-h-0 flex overflow-hidden">

        {/* Left: Form */}
        <div className="flex-1 min-w-0 overflow-y-auto px-[20px] py-[16px] space-y-[12px]">

          {/* 1. Candidate Information */}
          <Section
            title="Candidate Information"
            subtitle="Update the candidate's personal and contact details used in the offer letter."
            rightContent={<span className="text-[12px] font-semibold text-[#667085]">4 Fields</span>}
            collapsed={!!collapsed.candidate}
            onToggle={() => toggle('candidate')}
          >
            <div className={`grid ${gridCols} gap-x-[12px] gap-y-[12px]`}>
              <div><FieldLabel label="First Name" /><TextInput value={firstName} onChange={mk(setFirstName)} /></div>
              <div><FieldLabel label="Last Name"  /><TextInput value={lastName}  onChange={mk(setLastName)}  /></div>
              <div><FieldLabel label="Email"       /><TextInput value={email}     onChange={mk(setEmail)}     /></div>
              <div><FieldLabel label="Phone Number"/><TextInput value={phone}     onChange={mk(setPhone)}     /></div>
            </div>
          </Section>

          {/* 2. Position & Reporting */}
          <Section
            title="Position & Reporting"
            subtitle="Update the candidate's role, department, location, and reporting details."
            rightContent={<span className="text-[12px] font-semibold text-[#667085]">4 Fields</span>}
            collapsed={!!collapsed.position}
            onToggle={() => toggle('position')}
          >
            <div className={`grid ${gridCols} gap-x-[12px] gap-y-[12px]`}>
              <div><FieldLabel label="Job Title"         /><TextInput value={jobTitle}         onChange={mk(setJobTitle)}         /></div>
              <div><FieldLabel label="Location"          /><TextInput value={location}          onChange={mk(setLocation)}          /></div>
              <div><FieldLabel label="Reporting Manager" /><TextInput value={reportingManager}  onChange={mk(setReportingManager)}  /></div>
              <div><FieldLabel label="Domain" /><StyledSelect value={domain} onChange={mk(setDomain)} options={DOMAINS} /></div>
            </div>
          </Section>

          {/* 3. Employment Details */}
          <Section
            title="Employment Details"
            subtitle="Define employment terms that will appear in the offer letter."
            rightContent={<span className="text-[12px] font-semibold text-[#667085]">7 Fields</span>}
            collapsed={!!collapsed.employment}
            onToggle={() => toggle('employment')}
          >
            <div className={`grid ${gridCols} gap-x-[12px] gap-y-[12px]`}>
              <div>
                <FieldLabel label="Employment Type" />
                <StyledSelect value={employmentType} onChange={mk(setEmploymentType)} options={EMPLOYMENT_TYPES} />
              </div>
              <div>
                <FieldLabel label="Tentative Date of Joining" modified={joiningDate !== INIT_JOIN_DATE} />
                <DateInput value={joiningDate} onChange={mk(setJoiningDate)} />
              </div>
              <div>
                <FieldLabel label="Probation Period" />
                <StyledSelect value={probationPeriod} onChange={mk(setProbationPeriod)} options={PROBATION_PERIODS} />
              </div>
              <div>
                <FieldLabel label="Work Mode" />
                <StyledSelect value={workMode} onChange={mk(setWorkMode)} options={WORK_MODES} />
              </div>
              <div>
                <FieldLabel label="Notice Buy Out" />
                <StyledSelect value={noticeBuyOut} onChange={mk(setNoticeBuyOut)} options={['Yes', 'No'] as const} />
              </div>
              <div>
                <FieldLabel label="Employment End Date" />
                <DateInput value={employmentEndDate} onChange={mk(setEmploymentEndDate)} />
              </div>
              <div>
                <FieldLabel label="Next Appraisal" />
                <TextInput value={nextAppraisal} onChange={mk(setNextAppraisal)} />
              </div>
            </div>
          </Section>

          {/* 4. Compensation */}
          <Section
            title="Compensation"
            subtitle="Update compensation in the offer letter."
            rightContent={<span className="text-[12px] font-semibold text-[#667085]">2 Fields</span>}
            collapsed={!!collapsed.compensation}
            onToggle={() => toggle('compensation')}
          >
            <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px]">
              <AmountField
                label="Salary Package"
                value={salaryPackage}
                onChange={v => { setSalaryPackage(v); setHasChanges(true); }}
                modified={salaryPackage !== '' && salaryPackage !== '0' && salaryPackage !== INIT_SALARY}
              />
              <AmountField
                label="Joining Bonus (If Applicable)"
                value={joiningBonus}
                onChange={v => { setJoiningBonus(v); setHasChanges(true); }}
              />
            </div>
          </Section>

          {/* 5. Custom Clauses */}
          <Section
            title="Custom Clauses"
            subtitle="Add proposed additions specialized for this candidate."
            rightContent={
              <button
                onClick={e => { e.stopPropagation(); setShowAddClause(true); setCollapsed(prev => ({ ...prev, clauses: false })); }}
                className="flex items-center gap-[4px] text-[13px] font-semibold text-[#3a58ef] hover:text-[#2d46d6] transition-colors"
              >
                <Plus size={13} /> Add New Clause
              </button>
            }
            collapsed={!!collapsed.clauses}
            onToggle={() => toggle('clauses')}
          >
            <div className="space-y-[10px]">
              {/* Info banner */}
              <div className="flex items-start gap-[8px] p-[10px] bg-[#f0f4ff] border border-[#c5d0fa] rounded-[6px]">
                <Info size={13} className="text-[#3a58ef] shrink-0 mt-[1px]" />
                <p className="text-[12px] text-[#3a58ef] leading-[17px]">
                  Custom clauses are proposed additions. They will be sent to the MYCPE ONE recruitment team for validation and will not appear in the offer letter preview until approved.
                </p>
              </div>

              {/* Add Clause form */}
              {showAddClause && (
                <div className="border border-[#eaecf0] rounded-[6px] p-[14px] space-y-[10px]">
                  <div>
                    <FieldLabel label="Clause Name" />
                    <TextInput value={newClauseName} onChange={setNewClauseName} placeholder="Example : Relocation Support" />
                  </div>
                  <div>
                    <FieldLabel label="Clause Description" />
                    <textarea
                      value={newClauseDesc}
                      onChange={e => setNewClauseDesc(e.target.value)}
                      placeholder="Enter the proposed clause text here"
                      rows={4}
                      className="w-full px-[10px] py-[8px] border border-[#d0d5dd] rounded-[6px] text-[13px] text-[#101828] bg-white focus:outline-none focus:ring-1 focus:ring-[#3a58ef] focus:border-[#3a58ef] transition-all resize-none"
                    />
                  </div>
                  <div className="flex justify-end gap-[8px]">
                    <button
                      onClick={() => { setShowAddClause(false); setNewClauseName(''); setNewClauseDesc(''); }}
                      className="px-[14px] py-[7px] border border-[#d0d5dd] rounded-[6px] text-[13px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddClause}
                      className="px-[14px] py-[7px] bg-[#3a58ef] rounded-[6px] text-[13px] font-semibold text-white hover:bg-[#2d46d6] transition-colors"
                    >
                      Add Clause
                    </button>
                  </div>
                </div>
              )}

              {/* Existing clauses */}
              {clauses.map(clause => (
                <div key={clause.id} className="border border-[#eaecf0] rounded-[6px] p-[14px]">
                  <div className="flex items-start justify-between gap-[8px] mb-[6px]">
                    <div className="flex items-center gap-[8px] flex-wrap">
                      <span className="text-[13px] font-semibold text-[#101828]">{clause.name}</span>
                      <span className={`inline-flex items-center px-[6px] py-[1px] rounded-full text-[11px] font-semibold whitespace-nowrap ${clause.status === 'Approved' ? 'bg-[#ecfdf3] text-[#027a48]' : 'bg-[#fffbeb] text-[#b45309]'}`}>
                        {clause.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-[4px] shrink-0">
                      <button className="p-[4px] text-[#98a2b3] hover:text-[#3a58ef] hover:bg-[#eff4ff] rounded-[4px] transition-colors">
                        <Pencil size={12} />
                      </button>
                      <button
                        onClick={() => { setClauses(prev => prev.filter(c => c.id !== clause.id)); setHasChanges(true); }}
                        className="p-[4px] text-[#98a2b3] hover:text-[#d92d20] hover:bg-[#fff1f0] rounded-[4px] transition-colors"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#667085] leading-[18px]">{clause.description}</p>
                </div>
              ))}
            </div>
          </Section>

        </div>

        {/* Right: Offer Letter Preview */}
        <div className="w-[300px] shrink-0 border-l border-[#eaecf0] flex flex-col bg-[#f9fafb] overflow-hidden">
          <div className="flex items-center justify-between px-[14px] py-[10px] border-b border-[#eaecf0] bg-white shrink-0">
            <span className="text-[13px] font-bold text-[#101828]">Offer Letter Preview</span>
            <button className="flex items-center gap-[3px] text-[12px] font-semibold text-[#3a58ef] hover:underline">
              Open Preview <ExternalLink size={11} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-[10px]">
            <div className="bg-white rounded-[4px] border border-[#eaecf0] shadow-sm">
              {/* scaled letter preview */}
              <div className="overflow-hidden relative" style={{ height: '500px' }}>
                <div style={{ transform: 'scale(0.42)', transformOrigin: 'top left', position: 'absolute', top: 0, left: 0, width: '238%' }}>
                  <div style={{ width: '650px', padding: '28px', fontFamily: 'Georgia, serif', background: 'white' }}>
                    {/* header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#3a58ef', fontFamily: 'sans-serif' }}>MYCPE ONE</div>
                        <div style={{ fontSize: '10px', color: '#344054', fontWeight: 600, fontFamily: 'sans-serif', marginTop: '2px' }}>MYCPE ONE SOLUTIONS PRIVATE LIMITED</div>
                      </div>
                      <div style={{ fontSize: '9px', color: '#667085', textAlign: 'right', fontFamily: 'sans-serif' }}>
                        <div>Address: First Horizon, Mahalakshmi Char Rasta,</div>
                        <div>Paldi, Ahmedabad, Gujarat, 380007</div>
                        <div style={{ marginTop: '4px', color: '#98a2b3', fontSize: '8px' }}>CIN: U72900GJ2020PTC114523</div>
                      </div>
                    </div>
                    <div style={{ borderTop: '1px solid #eaecf0', marginBottom: '14px' }} />
                    <div style={{ fontSize: '11px', color: '#667085', marginBottom: '12px', fontFamily: 'sans-serif' }}>Date: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
                    <div style={{ marginBottom: '12px', fontFamily: 'sans-serif' }}>
                      <div style={{ fontWeight: 700, fontSize: '13px', color: '#101828' }}>Dear Ms. {firstName} {lastName},</div>
                      <div style={{ fontSize: '10px', color: '#667085', marginTop: '4px' }}>Address: First Horizon, Mahalakshmi Char Rasta, Paldi, Ahmedabad, Gujarat, 380007</div>
                      <div style={{ fontSize: '10px', color: '#667085' }}>
                        <span style={{ fontStyle: 'italic' }}>({firstName} {lastName})</span>
                      </div>
                      <div style={{ fontSize: '10px', color: '#667085', marginTop: '2px' }}>Email: {email}</div>
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#101828', marginBottom: '8px', fontFamily: 'sans-serif' }}>Welcome to the MYCPE ONE Family!</div>
                    <p style={{ fontSize: '10px', color: '#344054', marginBottom: '14px', lineHeight: '15px', fontFamily: 'sans-serif' }}>
                      In response to your application and the interview conducted, we are pleased to offer you the position of <strong>{jobTitle}</strong> with MYCPE ONE Solutions Private Limited (hereinafter referred to as the "Company"), a company based in Ahmedabad, Gujarat. This offer is being issued post discussions and confirmations regarding the job role and compensation during the telephonic conversation, virtual meeting, and/or physical meeting held between you and the Company.
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px', borderTop: '1px solid #eaecf0' }}>
                      <tbody>
                        {[
                          ['1. Nature of Employment', employmentType],
                          ['2. Joining Date', `Your date of joining shall be ${fmtDate(joiningDate)}`],
                          ['3. Appointment', 'You will be required to sign a formal Employment Agreement at the time of joining.'],
                          ['4. Documentation & Details', 'You are required to submit the following documents and details on or before your date of joining.'],
                          ['5. Security Cheque', 'Pursuant to your Employment Agreement to be executed at the time of joining, you shall be required to provide a security cheque in favour of the Company.'],
                          ['6. Compensation', `Your annual compensation shall be INR ${salaryNum > 0 ? salaryNum.toLocaleString() : '—'}, A detailed breakup of the compensation is detailed below in Annexure 1 which is a part of this Offer.`],
                          ['7. Probation', `You shall be on probation for the initial period of ${probationPeriod}.`],
                          ['8. Normal Leaves', 'Leave details as per company policy.'],
                          ['9. Work Mode', workMode],
                          ['10. Base Location', location],
                        ].map(([label, val], i) => (
                          <tr key={label} style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb' }}>
                            <td style={{ padding: '5px 10px', width: '38%', fontWeight: 600, color: '#344054', verticalAlign: 'top', borderBottom: '1px solid #f2f4f7', fontFamily: 'sans-serif' }}>{label}</td>
                            <td style={{ padding: '5px 10px', color: '#667085', verticalAlign: 'top', borderBottom: '1px solid #f2f4f7', lineHeight: '14px', fontFamily: 'sans-serif' }}>{val}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div style={{ fontSize: '9px', color: '#98a2b3', marginTop: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>Page - 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Unsaved changes bar ── */}
      {hasChanges && (
        <div className="shrink-0 flex items-center justify-between px-[20px] py-[10px] bg-[#fffbeb] border-t border-[#fde68a]">
          <div className="flex items-center gap-[8px]">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M6.86 2.573L1.213 11.667A1.333 1.333 0 0 0 2.36 13.667h11.28a1.333 1.333 0 0 0 1.147-2L9.14 2.573a1.333 1.333 0 0 0-2.28 0Z" fill="#fef3c7" stroke="#d97706" strokeWidth="1.2" />
              <path d="M8 6.333v2.334M8 10.667h.007" stroke="#d97706" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <span className="text-[12px] text-[#92400e]">
              You have unsaved changes. Click <strong className="font-semibold">"Update Changes"</strong> to apply them to the offer letter preview.
            </span>
          </div>
          <button
            onClick={() => setHasChanges(false)}
            className="ml-[12px] shrink-0 px-[14px] py-[7px] bg-[#d97706] rounded-[6px] text-[12px] font-semibold text-white hover:bg-[#b45309] transition-colors"
          >
            Update Changes
          </button>
        </div>
      )}

    </div>
  );
}
