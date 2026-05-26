import { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, CheckCircle, Trash2 } from 'lucide-react';
import type { Benefit, StaffMember, AllocationRecord } from './ViewAllocationDrawer';

/* ─── Mock data (defined here; BenefitsView also uses it via import) ─── */

export const DEPARTMENTS = ['Accounting', 'Audit', 'Tax'] as const;
export const CURRENCIES  = ['USD', 'EUR', 'INR', 'GBP'] as const;

export const MOCK_STAFF: StaffMember[] = [
  { id: 's1',  name: 'Priya Sharma',       department: 'Accounting' },
  { id: 's2',  name: 'Rahul Mehta',        department: 'Accounting' },
  { id: 's3',  name: 'Anita Patel',        department: 'Accounting' },
  { id: 's4',  name: 'Vikram Singh',       department: 'Accounting' },
  { id: 's5',  name: 'Sunita Rao',         department: 'Accounting' },
  { id: 's6',  name: 'Deepak Joshi',       department: 'Accounting' },
  { id: 'a1',  name: 'Aarav Sharma',        department: 'Audit' },
  { id: 'a2',  name: 'Priya Mehta',         department: 'Audit' },
  { id: 'a3',  name: 'Rohan Verma',         department: 'Audit' },
  { id: 'a4',  name: 'Neha Kapoor',         department: 'Audit' },
  { id: 'a5',  name: 'Karan Malhotra',      department: 'Audit' },
  { id: 'a6',  name: 'Sneha Iyer',          department: 'Audit' },
  { id: 'a7',  name: 'Arjun Nair',          department: 'Audit' },
  { id: 'a8',  name: 'Meera Joshi',         department: 'Audit' },
  { id: 'a9',  name: 'Vikram Singh',        department: 'Audit' },
  { id: 'a10', name: 'Ananya Rao',          department: 'Audit' },
  { id: 'a11', name: 'Rahul Jain',          department: 'Audit' },
  { id: 'a12', name: 'Pooja Shah',          department: 'Audit' },
  { id: 'a13', name: 'Dev Patel',           department: 'Audit' },
  { id: 'a14', name: 'Kavya Menon',         department: 'Audit' },
  { id: 'a15', name: 'Nikhil Bansal',       department: 'Audit' },
  { id: 'a16', name: 'Riya Desai',          department: 'Audit' },
  { id: 'a17', name: 'Aditya Kulkarni',     department: 'Audit' },
  { id: 'a18', name: 'Simran Kaur',         department: 'Audit' },
  { id: 'a19', name: 'Harsh Gupta',         department: 'Audit' },
  { id: 'a20', name: 'Ishita Chatterjee',   department: 'Audit' },
  { id: 'a21', name: 'Manav Sinha',         department: 'Audit' },
  { id: 'a22', name: 'Tanvi Reddy',         department: 'Audit' },
  { id: 'a23', name: 'Yash Agarwal',        department: 'Audit' },
  { id: 'a24', name: 'Aditi Mishra',        department: 'Audit' },
  { id: 'a25', name: 'Saurabh Saxena',      department: 'Audit' },
  { id: 'a26', name: 'Naina Thomas',        department: 'Audit' },
  { id: 'a27', name: 'Kabir Khanna',        department: 'Audit' },
  { id: 'a28', name: 'Shreya Pillai',       department: 'Audit' },
  { id: 'a29', name: 'Omkar Pandey',        department: 'Audit' },
  { id: 'a30', name: 'Divya Krishnan',      department: 'Audit' },
  { id: 's14', name: 'Ramesh Kumar',       department: 'Tax' },
  { id: 's15', name: 'Srinivasan Anand',   department: 'Tax' },
  { id: 's16', name: 'Falguni Hans',       department: 'Tax' },
  { id: 's17', name: 'Krishna Chauhan',    department: 'Tax' },
  { id: 's18', name: 'Amrit Dutta',        department: 'Tax' },
];

/* ─── Types ─── */

type AllocationMode = 'Lumpsum Amount (equal distribution)' | 'Equal Amount Per Staff' | 'Custom Amount Per Staff';
type DrawerStep     = 'form' | 'preview';

interface AssignBenefitsDrawerProps {
  benefit: Benefit | null;
  onClose: () => void;
  onConfirm: (record: Omit<AllocationRecord, 'id'>) => void;
}

/* ─── Helper: styled select ─── */

function StyledSelect({
  value, onChange, placeholder, options, disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: readonly string[];
  disabled?: boolean;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full appearance-none pl-[12px] pr-[36px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] bg-white focus:outline-none focus:ring-2 focus:ring-[#3a58ef]/20 focus:border-[#3a58ef] transition-all ${disabled ? 'text-[#98a2b3] cursor-not-allowed bg-[#f9fafb]' : 'text-[#101828]'}`}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown size={16} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none" />
    </div>
  );
}

/* ─── Helper: field label ─── */

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="block text-[13px] font-semibold text-[#344054] mb-[6px]">
      {label}
      {required && <span className="text-[#d92d20] ml-[2px]">*</span>}
    </label>
  );
}

/* ─── Main component ─── */

export default function AssignBenefitsDrawer({ benefit, onClose, onConfirm }: AssignBenefitsDrawerProps) {
  const [step, setStep]                   = useState<DrawerStep>('form');
  const [mode, setMode]                   = useState<AllocationMode>('Lumpsum Amount (equal distribution)');
  const [staffSearch, setStaffSearch]     = useState('');
  const [selectedStaff, setSelectedStaff] = useState<StaffMember[]>([]);
  const [currency, setCurrency]           = useState('');
  const [value, setValue]                 = useState('');
  const [showSuccess, setShowSuccess]     = useState(false);
  const [dropdownOpen, setDropdownOpen]   = useState(false);
  const [chipsExpanded, setChipsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Custom Amount Per Staff state */
  const [psSelected, setPsSelected]         = useState<StaffMember[]>([]);
  const [psStaffDropOpen, setPsStaffDropOpen] = useState(false);
  const [psStaffSearch, setPsStaffSearch]   = useState('');
  const [staffAmounts, setStaffAmounts]     = useState<Record<string, string>>({});
  const [columnCurrency, setColumnCurrency] = useState('');
  const psStaffDropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (psStaffDropRef.current && !psStaffDropRef.current.contains(e.target as Node)) {
        setPsStaffDropOpen(false);
      }
    };
    if (psStaffDropOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [psStaffDropOpen]);

  /* Filtered staff for modes 1 & 2 */
  const filteredStaff = useMemo(
    () => MOCK_STAFF.filter(s => s.name.toLowerCase().includes(staffSearch.toLowerCase())),
    [staffSearch]
  );

  /* Filtered staff for Custom Amount Per Staff picker */
  const filteredPsStaff = useMemo(
    () => MOCK_STAFF.filter(s => s.name.toLowerCase().includes(psStaffSearch.toLowerCase())),
    [psStaffSearch]
  );

  const isPsSelected   = (s: StaffMember) => psSelected.some(x => x.id === s.id);
  const togglePsStaff  = (s: StaffMember) => setPsSelected(prev => isPsSelected(s) ? prev.filter(x => x.id !== s.id) : [...prev, s]);
  const psSelectAll    = () => setPsSelected(MOCK_STAFF);
  const psClearAll     = () => setPsSelected([]);
  const removePsStaff  = (id: string) => setPsSelected(prev => prev.filter(s => s.id !== id));

  const isSelected  = (s: StaffMember) => selectedStaff.some(x => x.id === s.id);
  const toggleStaff = (s: StaffMember) => setSelectedStaff(prev => isSelected(s) ? prev.filter(x => x.id !== s.id) : [...prev, s]);
  const selectAll   = () => setSelectedStaff(MOCK_STAFF);
  const clearAll    = () => setSelectedStaff([]);

  /* Computed allocation values */
  const numValue    = Number(value) || 0;
  const staffCount  = selectedStaff.length;
  const perStaff    = mode === 'Lumpsum Amount (equal distribution)' && staffCount > 0
    ? numValue / staffCount
    : numValue;
  const totalAmount = mode === 'Lumpsum Amount (equal distribution)'
    ? numValue
    : numValue * staffCount;

  /* Form completeness */
  const isFormComplete = mode === 'Custom Amount Per Staff'
    ? (
        psSelected.length > 0 &&
        columnCurrency !== '' &&
        psSelected.some(s => Number(staffAmounts[s.id]) > 0)
      )
    : (
        staffCount > 0 &&
        currency !== '' &&
        numValue > 0
      );

  /* Reset and close */
  const handleClose = () => {
    setStep('form');
    setMode('Lumpsum Amount (equal distribution)');
    setStaffSearch('');
    setSelectedStaff([]);
    setCurrency('');
    setValue('');
    setShowSuccess(false);
    setDropdownOpen(false);
    setChipsExpanded(false);
    setPsSelected([]);
    setPsStaffDropOpen(false);
    setPsStaffSearch('');
    setStaffAmounts({});
    setColumnCurrency('');
    onClose();
  };

  /* Build record for onConfirm */
  const buildRecord = (): Omit<AllocationRecord, 'id'> => {
    if (mode === 'Custom Amount Per Staff') {
      const allocations: Record<string, number> = {};
      psSelected.forEach(s => { allocations[s.id] = Number(staffAmounts[s.id]) || 0; });
      const total = Object.values(allocations).reduce((sum, v) => sum + v, 0);
      return {
        benefit: benefit!,
        department: [...new Set(psSelected.map(s => s.department))].join(', '),
        mode,
        assignedOn: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        disbursementDate: '',
        staffMembers: psSelected,
        currency: columnCurrency,
        value: total,
        staffAllocations: allocations,
        status: 'Completed',
      };
    }
    return {
      benefit: benefit!,
      department: [...new Set(selectedStaff.map(s => s.department))].join(', '),
      mode,
      assignedOn: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      disbursementDate: '',
      staffMembers: selectedStaff,
      currency,
      value: numValue,
      status: 'Completed',
    };
  };

  const handleConfirmAndAllocate = () => setShowSuccess(true);

  const handleSuccessOk = () => {
    const record = buildRecord();
    handleClose();
    onConfirm(record);
  };

  return (
    <AnimatePresence>
      {benefit && (
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
            {/* Header */}
            <div className="flex items-start justify-between px-[24px] py-[20px] border-b border-[#eaecf0] shrink-0">
              <div>
                <h2 className="text-[18px] font-bold text-[#101828] leading-[28px]">
                  {step === 'form' ? 'Assign Benefits' : 'Preview Allocation'}
                </h2>
                <p className="text-[13px] text-[#667085] mt-[2px]">
                  {step === 'form'
                    ? 'Allocate this benefit to staff members.'
                    : 'Review the allocation details before confirming.'}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-[6px] text-[#98a2b3] hover:text-[#344054] hover:bg-[#f2f4f7] rounded-full transition-all mt-[2px] shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* ── FORM STEP ── */}
            {step === 'form' && (
              <div className="flex-1 overflow-y-auto px-[24px] py-[20px] space-y-[20px]">

                {/* Benefit Name (read-only) */}
                <div>
                  <FieldLabel label="Benefit Name" />
                  <input
                    readOnly
                    value={benefit.name}
                    className="w-full px-[12px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#98a2b3] bg-[#f9fafb] cursor-not-allowed"
                  />
                </div>

                {/* Description (read-only) */}
                <div>
                  <FieldLabel label="Description" />
                  <textarea
                    readOnly
                    value={benefit.description}
                    rows={2}
                    className="w-full px-[12px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#98a2b3] bg-[#f9fafb] cursor-not-allowed resize-none"
                  />
                </div>

                {/* Allocation Mode toggle */}
                <div>
                  <FieldLabel label="Allocation Mode" required />
                  <div className="flex bg-[#f2f4f7] rounded-[8px] p-[4px] gap-[4px]">
                    {([
                      { value: 'Lumpsum Amount (equal distribution)' as AllocationMode, label: 'Lumpsum Amount' },
                      { value: 'Equal Amount Per Staff'               as AllocationMode, label: 'Equal Amount Per Staff' },
                      { value: 'Custom Amount Per Staff'              as AllocationMode, label: 'Custom Amount Per Staff' },
                    ]).map(({ value: m, label }) => (
                      <button
                        key={m}
                        onClick={() => setMode(m)}
                        className={`flex-1 py-[8px] px-[10px] rounded-[6px] text-[12px] font-semibold transition-all leading-[16px] text-center ${
                          mode === m
                            ? 'bg-white text-[#3a58ef] shadow-sm border border-[#e0e7ff]'
                            : 'text-[#667085] hover:text-[#344054]'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mode info text */}
                <div className="flex items-start gap-[8px] p-[10px] bg-[#f5f8ff] border border-[#c5cae0] rounded-[8px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[1px]" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z" stroke="#3a58ef" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 10.667V8M8 5.333h.007" stroke="#3a58ef" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[12px] text-[#3a58ef] leading-[18px]">
                    {mode === 'Lumpsum Amount (equal distribution)'
                      ? 'Enter a single total amount that is automatically split equally among all selected staff members.'
                      : mode === 'Equal Amount Per Staff'
                        ? 'Assign a custom individual amount to each selected staff member independently.'
                        : 'Set a fixed amount per person, and the system calculates the total based on the number of staff selected.'}
                  </p>
                </div>

                {/* ── Lumpsum Value / Value Per Staff sections ── */}
                {mode !== 'Custom Amount Per Staff' && (<>

                {/* Select Staff */}
                <div>
                  <FieldLabel label="Select Staff" required />
                  <>
                      {/* Dropdown */}
                      <div className="relative" ref={dropdownRef}>
                        {/* Trigger */}
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(prev => !prev)}
                          className="w-full flex items-center justify-between pl-[12px] pr-[12px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] bg-white hover:border-[#3a58ef] focus:outline-none focus:ring-2 focus:ring-[#3a58ef]/20 focus:border-[#3a58ef] transition-all"
                        >
                          <span className={selectedStaff.length > 0 ? 'text-[#101828]' : 'text-[#98a2b3]'}>
                            {selectedStaff.length > 0 ? `${selectedStaff.length} staff selected` : 'Select staff members'}
                          </span>
                          <ChevronDown size={16} className={`text-[#667085] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown panel */}
                        {dropdownOpen && (
                          <div className="absolute top-[calc(100%+4px)] left-0 right-0 border border-[#d0d5dd] rounded-[8px] overflow-hidden bg-white z-[50] shadow-[0px_4px_16px_0px_rgba(16,24,40,0.12)]">
                            {/* Search + controls */}
                            <div className="px-[12px] pt-[10px] pb-[8px] border-b border-[#eaecf0] bg-[#f9fafb]">
                              <input
                                type="text"
                                placeholder="Search staff..."
                                value={staffSearch}
                                onChange={e => setStaffSearch(e.target.value)}
                                className="w-full px-[10px] py-[7px] border border-[#d0d5dd] rounded-[6px] text-[13px] text-[#101828] bg-white placeholder-[#98a2b3] focus:outline-none focus:ring-1 focus:ring-[#3a58ef] focus:border-[#3a58ef] mb-[8px]"
                              />
                              <div className="flex items-center justify-between">
                                <label className="flex items-center gap-[6px] cursor-pointer">
                                  <div
                                    onClick={() => selectedStaff.length === MOCK_STAFF.length ? clearAll() : selectAll()}
                                    className={`size-[16px] rounded-[3px] border-2 flex items-center justify-center cursor-pointer transition-all shrink-0 ${
                                      selectedStaff.length === MOCK_STAFF.length && MOCK_STAFF.length > 0
                                        ? 'bg-[#3a58ef] border-[#3a58ef]'
                                        : 'border-[#d0d5dd] bg-white'
                                    }`}
                                  >
                                    {selectedStaff.length === MOCK_STAFF.length && MOCK_STAFF.length > 0 && (
                                      <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                    )}
                                  </div>
                                  <span className="text-[12px] font-semibold text-[#344054]">Select All</span>
                                </label>
                                <button
                                  onClick={clearAll}
                                  className="text-[12px] font-semibold text-[#667085] hover:text-[#d92d20] transition-colors"
                                >
                                  Clear All
                                </button>
                              </div>
                            </div>

                            {/* Staff list */}
                            <div className="max-h-[200px] overflow-y-auto">
                              {filteredStaff.length === 0 ? (
                                <p className="px-[12px] py-[10px] text-[13px] text-[#98a2b3]">No staff match your search.</p>
                              ) : (
                                filteredStaff.map(s => (
                                  <label
                                    key={s.id}
                                    className="flex items-center gap-[10px] px-[12px] py-[9px] hover:bg-[#f9fafb] cursor-pointer border-b border-[#f2f4f7] last:border-0 transition-colors"
                                  >
                                    <div
                                      onClick={() => toggleStaff(s)}
                                      className={`size-[16px] rounded-[3px] border-2 flex items-center justify-center cursor-pointer transition-all shrink-0 ${
                                        isSelected(s)
                                          ? 'bg-[#3a58ef] border-[#3a58ef]'
                                          : 'border-[#d0d5dd] bg-white'
                                      }`}
                                    >
                                      {isSelected(s) && (
                                        <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                      )}
                                    </div>
                                    <span className="text-[13px] text-[#344054]">{s.name}</span>
                                  </label>
                                ))
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Chips with 2-line overflow */}
                      {selectedStaff.length > 0 && (() => {
                        const VISIBLE = 10;
                        const showAll = chipsExpanded || selectedStaff.length <= VISIBLE;
                        const visibleChips = showAll ? selectedStaff : selectedStaff.slice(0, VISIBLE);
                        const hiddenCount = selectedStaff.length - VISIBLE;
                        return (
                          <div className="mt-[10px]">
                            <p className="text-[12px] font-semibold text-[#667085] mb-[6px]">
                              {selectedStaff.length} staff selected
                            </p>
                            <div className="flex flex-wrap gap-[6px]">
                              {visibleChips.map(s => (
                                <span
                                  key={s.id}
                                  className="inline-flex items-center gap-[4px] bg-[#eff4ff] border border-[#c7d7fd] text-[#3a58ef] text-[12px] font-medium px-[8px] py-[3px] rounded-full"
                                >
                                  {s.name}
                                  <button
                                    onClick={() => toggleStaff(s)}
                                    className="text-[#3a58ef] hover:text-[#d92d20] transition-colors ml-[2px]"
                                  >
                                    <X size={12} />
                                  </button>
                                </span>
                              ))}
                              {!chipsExpanded && hiddenCount > 0 && (
                                <button
                                  onClick={() => setChipsExpanded(true)}
                                  className="inline-flex items-center bg-[#eff4ff] border border-[#c7d7fd] text-[#3a58ef] text-[12px] font-medium px-[8px] py-[3px] rounded-full hover:bg-[#e0eaff] transition-colors"
                                >
                                  View {hiddenCount} more
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })()}
                    </>
                  </div>

                {/* Currency + Value (2-col) */}
                <div className="grid grid-cols-2 gap-[16px]">
                  <div>
                    <FieldLabel label="Currency" required />
                    <StyledSelect
                      value={currency}
                      onChange={setCurrency}
                      placeholder="Select currency"
                      options={CURRENCIES}
                    />
                  </div>
                  <div>
                    <FieldLabel label="Enter Value" required />
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        placeholder="0.00"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className="w-full pl-[12px] pr-[52px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-[#3a58ef]/20 focus:border-[#3a58ef] transition-all"
                      />
                      {currency && (
                        <span className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[12px] font-semibold text-[#667085]">
                          {currency}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                </>)}
                {/* ── End Lumpsum / Value Per Staff sections ── */}

                {/* ── Per Staff Allocation sections ── */}
                {mode === 'Custom Amount Per Staff' && (<>

                {/* Select Staff for Custom Amount Per Staff */}
                <div>
                  <FieldLabel label="Select Staff" required />
                    <div className="relative" ref={psStaffDropRef}>
                      <button
                        type="button"
                        onClick={() => setPsStaffDropOpen(prev => !prev)}
                        className="w-full flex items-center justify-between pl-[12px] pr-[12px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] bg-white hover:border-[#3a58ef] focus:outline-none focus:ring-2 focus:ring-[#3a58ef]/20 focus:border-[#3a58ef] transition-all"
                      >
                        <span className={psSelected.length > 0 ? 'text-[#101828]' : 'text-[#98a2b3]'}>
                          {psSelected.length > 0 ? `${psSelected.length} staff selected` : 'Select staff members'}
                        </span>
                        <ChevronDown size={16} className={`text-[#667085] transition-transform ${psStaffDropOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {psStaffDropOpen && (
                        <div className="absolute top-[calc(100%+4px)] left-0 right-0 border border-[#d0d5dd] rounded-[8px] overflow-hidden bg-white z-[50] shadow-[0px_4px_16px_0px_rgba(16,24,40,0.12)]">
                          <div className="px-[12px] pt-[10px] pb-[8px] border-b border-[#eaecf0] bg-[#f9fafb]">
                            <input
                              type="text"
                              placeholder="Search staff..."
                              value={psStaffSearch}
                              onChange={e => setPsStaffSearch(e.target.value)}
                              className="w-full px-[10px] py-[7px] border border-[#d0d5dd] rounded-[6px] text-[13px] text-[#101828] bg-white placeholder-[#98a2b3] focus:outline-none focus:ring-1 focus:ring-[#3a58ef] focus:border-[#3a58ef] mb-[8px]"
                            />
                            <div className="flex items-center justify-between">
                              <label className="flex items-center gap-[6px] cursor-pointer">
                                <div
                                  onClick={() => psSelected.length === MOCK_STAFF.length ? psClearAll() : psSelectAll()}
                                  className={`size-[16px] rounded-[3px] border-2 flex items-center justify-center cursor-pointer transition-all shrink-0 ${
                                    psSelected.length === MOCK_STAFF.length && MOCK_STAFF.length > 0
                                      ? 'bg-[#3a58ef] border-[#3a58ef]'
                                      : 'border-[#d0d5dd] bg-white'
                                  }`}
                                >
                                  {psSelected.length === MOCK_STAFF.length && MOCK_STAFF.length > 0 && (
                                    <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  )}
                                </div>
                                <span className="text-[12px] font-semibold text-[#344054]">Select All</span>
                              </label>
                              <button
                                onClick={psClearAll}
                                className="text-[12px] font-semibold text-[#667085] hover:text-[#d92d20] transition-colors"
                              >
                                Clear All
                              </button>
                            </div>
                          </div>
                          <div className="max-h-[200px] overflow-y-auto">
                            {filteredPsStaff.length === 0 ? (
                              <p className="px-[12px] py-[10px] text-[13px] text-[#98a2b3]">No staff match your search.</p>
                            ) : (
                              filteredPsStaff.map(s => (
                                <label
                                  key={s.id}
                                  className="flex items-center gap-[10px] px-[12px] py-[9px] hover:bg-[#f9fafb] cursor-pointer border-b border-[#f2f4f7] last:border-0 transition-colors"
                                >
                                  <div
                                    onClick={() => togglePsStaff(s)}
                                    className={`size-[16px] rounded-[3px] border-2 flex items-center justify-center cursor-pointer transition-all shrink-0 ${
                                      isPsSelected(s) ? 'bg-[#3a58ef] border-[#3a58ef]' : 'border-[#d0d5dd] bg-white'
                                    }`}
                                  >
                                    {isPsSelected(s) && (
                                      <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                    )}
                                  </div>
                                  <span className="text-[13px] text-[#344054]">{s.name}</span>
                                </label>
                              ))
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                </div>

                {/* Staff Allocation Table */}
                {psSelected.length > 0 && (
                  <div>
                    <FieldLabel label="Staff Allocation" required />
                    <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th className="bg-[#ebeefd] px-[14px] py-[10px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] w-[32%]">Staff Name</th>
                            <th className="bg-[#ebeefd] px-[10px] py-[10px] text-left border-b border-[#eaecf0] w-[24%]">
                              <div className="flex items-center gap-[4px]">
                                <span className="text-[12px] font-semibold text-[#1d2939]">Currency</span>
                                <select
                                  value={columnCurrency}
                                  onChange={e => setColumnCurrency(e.target.value)}
                                  className="border border-[#c7d7fd] rounded-[4px] text-[11px] font-semibold text-[#3a58ef] bg-[#eff4ff] px-[4px] py-[1px] focus:outline-none cursor-pointer appearance-none"
                                >
                                  <option value="" disabled>—</option>
                                  {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                              </div>
                            </th>
                            <th className="bg-[#ebeefd] px-[14px] py-[10px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] w-[32%]">Amount</th>
                            <th className="bg-[#ebeefd] px-[10px] py-[10px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] w-[12%]">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {psSelected.map((s, i) => (
                            <tr key={s.id} className={`border-b border-[#f2f2f2] last:border-0 ${i % 2 !== 0 ? 'bg-[#f9fafb]' : ''}`}>
                              <td className="px-[14px] py-[10px] text-[13px] text-[#101828] font-medium">{s.name}</td>
                              <td className="px-[14px] py-[10px] text-[13px] font-semibold text-[#667085]">
                                {columnCurrency || '—'}
                              </td>
                              <td className="px-[14px] py-[10px]">
                                <input
                                  type="number"
                                  min="0"
                                  placeholder="0.00"
                                  value={staffAmounts[s.id] ?? ''}
                                  onChange={e => setStaffAmounts(prev => ({ ...prev, [s.id]: e.target.value }))}
                                  className="w-full px-[8px] py-[6px] border border-[#d0d5dd] rounded-[6px] text-[13px] text-[#101828] bg-white focus:outline-none focus:ring-1 focus:ring-[#3a58ef] focus:border-[#3a58ef] transition-all"
                                />
                              </td>
                              <td className="px-[10px] py-[10px] text-center">
                                <button
                                  onClick={() => removePsStaff(s.id)}
                                  className="p-[5px] text-[#98a2b3] hover:text-[#d92d20] hover:bg-[#fff1f0] rounded-[4px] transition-colors"
                                  title="Remove"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                </>)}
                {/* ── End Per Staff Allocation sections ── */}

                {/* Live allocation message (Lumpsum / Value Per Staff only) */}
                {mode !== 'Custom Amount Per Staff' && numValue > 0 && staffCount > 0 && currency && (
                  <div className="p-[12px] bg-[#eff4ff] border border-[#c7d7fd] rounded-[8px]">
                    <p className="text-[13px] text-[#3a58ef] leading-[20px]">
                      {mode === 'Lumpsum Amount (equal distribution)'
                        ? <>The total lumpsum value of <strong>{numValue.toLocaleString()} {currency}</strong> will be distributed equally among <strong>{staffCount} selected staff members</strong>. Each staff member will receive <strong>{perStaff.toFixed(2)} {currency}</strong>.</>
                        : <>Each of the <strong>{staffCount} selected staff members</strong> will receive <strong>{numValue.toLocaleString()} {currency}</strong>. Total allocation will be <strong>{totalAmount.toLocaleString()} {currency}</strong>.</>
                      }
                    </p>
                  </div>
                )}

                {/* Live total for Per Staff Allocation */}
                {mode === 'Custom Amount Per Staff' && columnCurrency && psSelected.some(s => Number(staffAmounts[s.id]) > 0) && (
                  <div className="p-[12px] bg-[#eff4ff] border border-[#c7d7fd] rounded-[8px]">
                    <p className="text-[13px] text-[#3a58ef] leading-[20px]">
                      Total allocation across <strong>{psSelected.filter(s => Number(staffAmounts[s.id]) > 0).length} staff members</strong> is <strong>{psSelected.reduce((sum, s) => sum + (Number(staffAmounts[s.id]) || 0), 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {columnCurrency}</strong>.
                    </p>
                  </div>
                )}

              </div>
            )}

            {/* ── PREVIEW STEP ── */}
            {step === 'preview' && (
              <div className="flex-1 overflow-y-auto px-[24px] py-[20px] space-y-[20px]">

                {mode === 'Custom Amount Per Staff' ? (
                  <>
                    {/* Per Staff Allocation preview table */}
                    <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            {['Staff Name', 'Currency', 'Amount'].map(col => (
                              <th key={col} className="bg-[#ebeefd] px-[16px] py-[10px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] whitespace-nowrap">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {psSelected.map((s, i) => (
                            <tr key={s.id} className={`border-b border-[#f2f2f2] last:border-0 ${i % 2 !== 0 ? 'bg-[#f9fafb]' : ''}`}>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#101828]">{s.name}</td>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#667085] font-medium">{columnCurrency}</td>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#344054]">
                                {(Number(staffAmounts[s.id]) || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Per Staff Allocation summary */}
                    <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
                      <div className="bg-[#ebeefd] px-[16px] py-[10px] border-b border-[#eaecf0]">
                        <h3 className="text-[13px] font-bold text-[#1d2939]">Total Allocation Summary</h3>
                      </div>
                      {[
                        { label: 'Allocation Mode',  value: 'Custom Amount Per Staff' },
                        { label: 'Departments',       value: [...new Set(psSelected.map(s => s.department))].join(', ') },
                        { label: 'Total Staff',       value: String(psSelected.length) },
                        { label: 'Currency',          value: columnCurrency },
                        { label: 'Total Allocation',  value: `${psSelected.reduce((sum, s) => sum + (Number(staffAmounts[s.id]) || 0), 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${columnCurrency}` },
                      ].map(({ label, value: val }, i, arr) => (
                        <div key={label} className={`flex items-center py-[10px] px-[16px] ${i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'} ${i < arr.length - 1 ? 'border-b border-[#eaecf0]' : ''}`}>
                          <span className="w-[160px] shrink-0 text-[13px] font-semibold text-[#667085]">{label}</span>
                          <span className="text-[14px] text-[#101828] font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Allocation table (Lumpsum / Value Per Staff) */}
                    <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            {['Staff Name', 'Allocated Benefit', 'Value'].map(col => (
                              <th key={col} className="bg-[#ebeefd] px-[16px] py-[10px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] whitespace-nowrap">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {selectedStaff.map((s, i) => (
                            <tr key={s.id} className={`border-b border-[#f2f2f2] last:border-0 ${i % 2 !== 0 ? 'bg-[#f9fafb]' : ''}`}>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#101828]">{s.name}</td>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#344054]">{benefit.name}</td>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#344054]">{perStaff.toFixed(2)} {currency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Summary card */}
                    <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
                      <div className="bg-[#ebeefd] px-[16px] py-[10px] border-b border-[#eaecf0]">
                        <h3 className="text-[13px] font-bold text-[#1d2939]">Total Allocation Summary</h3>
                      </div>
                      {[
                        { label: 'Allocation Mode',  value: mode },
                        { label: 'Selected Staff',   value: String(staffCount) },
                        { label: 'Equal Amount Per Staff',  value: `${perStaff.toFixed(2)} ${currency}` },
                        { label: 'Total Allocation', value: `${totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}` },
                      ].map(({ label, value: val }, i, arr) => (
                        <div key={label} className={`flex items-center py-[10px] px-[16px] ${i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'} ${i < arr.length - 1 ? 'border-b border-[#eaecf0]' : ''}`}>
                          <span className="w-[160px] shrink-0 text-[13px] font-semibold text-[#667085]">{label}</span>
                          <span className="text-[14px] text-[#101828] font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

              </div>
            )}

            {/* Footer */}
            <div className="shrink-0 px-[24px] py-[16px] border-t border-[#eaecf0] bg-white flex items-center justify-end gap-[12px]">
              {step === 'form' ? (
                <>
                  <button
                    onClick={handleClose}
                    className="px-[20px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setStep('preview')}
                    disabled={!isFormComplete}
                    className={`px-[24px] py-[10px] rounded-[8px] text-[14px] font-semibold text-white transition-colors shadow-sm ${
                      isFormComplete
                        ? 'bg-[#3a58ef] hover:bg-[#2d46d6] cursor-pointer'
                        : 'bg-[#98a2b3] cursor-not-allowed'
                    }`}
                  >
                    Preview Allocation
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setStep('form')}
                    className="px-[20px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleConfirmAndAllocate}
                    className="px-[24px] py-[10px] bg-[#3a58ef] rounded-[8px] text-[14px] font-semibold text-white hover:bg-[#2d46d6] transition-colors shadow-sm"
                  >
                    Confirm &amp; Allocate
                  </button>
                </>
              )}
            </div>
          </motion.div>

          {/* ── Success Modal ── */}
          {showSuccess && (
            <motion.div
              key="success-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-[2px] px-[16px]"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-[16px] shadow-2xl max-w-[400px] w-full p-[32px] flex flex-col items-center text-center"
              >
                <div className="size-[56px] bg-[#ecfdf3] rounded-full flex items-center justify-center mb-[16px]">
                  <CheckCircle size={28} className="text-[#027a48]" />
                </div>
                <h3 className="text-[18px] font-bold text-[#101828] mb-[8px]">Benefit Allocated Successfully</h3>
                <p className="text-[14px] text-[#667085] leading-[22px] mb-[24px]">
                  The selected benefit has been successfully allocated to the selected staff members.
                  You can view the allocation details in the Benefits History tab.
                </p>
                <button
                  onClick={handleSuccessOk}
                  className="w-full px-[24px] py-[12px] bg-[#3a58ef] rounded-[8px] text-[14px] font-semibold text-white hover:bg-[#2d46d6] transition-colors shadow-sm"
                >
                  OK
                </button>
              </motion.div>
            </motion.div>
          )}

        </>
      )}
    </AnimatePresence>
  );
}
