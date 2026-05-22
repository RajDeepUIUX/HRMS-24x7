# Benefits Module Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Benefits module under Human Resources with a Benefits Catalog tab, Assign Benefits 2-step drawer, Benefits History tab, and View Allocation Summary drawer.

**Architecture:** Three new component files (`ViewAllocationDrawer`, `AssignBenefitsDrawer`, `BenefitsView`) plus modifications to sidebar and routing. Shared types are exported from `ViewAllocationDrawer.tsx` and imported by the other two files to avoid circular dependencies.

**Tech Stack:** React 18, TypeScript, Tailwind CSS 4, motion/react (framer-motion v12), lucide-react icons. Build verification via `npm run build`.

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| Create | `src/app/components/ViewAllocationDrawer.tsx` | Shared types + read-only summary drawer |
| Create | `src/app/components/AssignBenefitsDrawer.tsx` | 2-step assign form + preview + success modal |
| Create | `src/app/components/BenefitsView.tsx` | Main view: tabs, catalog, history, state orchestration |
| Modify | `src/app/components/CollapsibleSidebar.tsx` | Add `benefits` to HR submenu + active condition |
| Modify | `src/app/components/UnifiedHRApplication.tsx` | Add `'benefits'` ViewType + import + render case |
| Modify | `src/app/App.tsx` | Add `'benefits'` to ViewType + validViews |

---

## Task 1: Create ViewAllocationDrawer.tsx (shared types + read-only drawer)

**Files:**
- Create: `src/app/components/ViewAllocationDrawer.tsx`

- [ ] **Step 1: Create the file with full implementation**

```tsx
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

/* ─── Shared Types (imported by AssignBenefitsDrawer and BenefitsView) ─── */

export interface Benefit {
  id: string;
  name: string;
  description: string;
}

export interface StaffMember {
  id: string;
  name: string;
  department: string;
}

export interface AllocationRecord {
  id: string;
  benefit: Benefit;
  department: string;
  mode: 'Lumpsum Value' | 'Value Per Staff';
  assignedOn: string;
  disbursementDate: string;
  staffMembers: StaffMember[];
  currency: string;
  // Lumpsum: value = total entered (per-staff = value / count)
  // Per Staff: value = per-staff entered (total = value * count)
  value: number;
  status: 'Completed' | 'Pending';
}

/* ─── Helpers ─── */

export function computePerStaff(record: AllocationRecord): number {
  return record.mode === 'Lumpsum Value'
    ? record.value / record.staffMembers.length
    : record.value;
}

export function computeTotal(record: AllocationRecord): number {
  return record.mode === 'Lumpsum Value'
    ? record.value
    : record.value * record.staffMembers.length;
}

/* ─── Component ─── */

interface ViewAllocationDrawerProps {
  record: AllocationRecord | null;
  onClose: () => void;
}

export default function ViewAllocationDrawer({ record, onClose }: ViewAllocationDrawerProps) {
  const perStaff = record ? computePerStaff(record) : 0;
  const total    = record ? computeTotal(record)    : 0;

  return (
    <AnimatePresence>
      {record && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[200]"
            onClick={onClose}
          />
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
                <h2 className="text-[18px] font-bold text-[#101828] leading-[28px]">Allocation Summary</h2>
                <p className="text-[13px] text-[#667085] mt-[2px]">Details of the selected benefit allocation.</p>
              </div>
              <button
                onClick={onClose}
                className="p-[6px] text-[#98a2b3] hover:text-[#344054] hover:bg-[#f2f4f7] rounded-full transition-all mt-[2px] shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-[24px] py-[20px] space-y-[24px]">

              {/* Summary grid */}
              <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
                {[
                  { label: 'Benefit Name',      value: record.benefit.name },
                  { label: 'Description',        value: record.benefit.description },
                  { label: 'Department',         value: record.department },
                  { label: 'Allocation Mode',    value: record.mode },
                  { label: 'Assigned On',        value: record.assignedOn },
                  { label: 'Disbursement Date',  value: record.disbursementDate },
                  { label: 'No. of Staffs',      value: String(record.staffMembers.length) },
                  { label: 'Currency',           value: record.currency },
                  { label: 'Amount',             value: `${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${record.currency}` },
                  { label: 'Status',             value: record.status },
                ].map(({ label, value }, i, arr) => (
                  <div
                    key={label}
                    className={`flex items-start py-[12px] px-[16px] ${i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'} ${i < arr.length - 1 ? 'border-b border-[#eaecf0]' : ''}`}
                  >
                    <span className="w-[160px] shrink-0 text-[13px] font-semibold text-[#667085]">{label}</span>
                    {label === 'Status' ? (
                      <span className={`inline-flex items-center px-[8px] py-[2px] rounded-full text-[12px] font-semibold ${value === 'Completed' ? 'bg-[#ecfdf3] text-[#027a48]' : 'bg-[#fffbeb] text-[#b45309]'}`}>
                        {value}
                      </span>
                    ) : (
                      <span className="text-[14px] text-[#101828] flex-1">{value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Staff Allocation table */}
              <div>
                <h3 className="text-[15px] font-bold text-[#101828] mb-[12px]">Staff Allocation</h3>
                <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        {['Employee', 'Allocated Benefit', 'Allocated Value'].map(col => (
                          <th key={col} className="bg-[#ebeefd] px-[16px] py-[10px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] whitespace-nowrap">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {record.staffMembers.map((s, i) => (
                        <tr key={s.id} className={`border-b border-[#f2f2f2] last:border-0 ${i % 2 !== 0 ? 'bg-[#f9fafb]' : ''}`}>
                          <td className="px-[16px] py-[12px] text-[14px] text-[#101828]">{s.name}</td>
                          <td className="px-[16px] py-[12px] text-[14px] text-[#344054]">{record.benefit.name}</td>
                          <td className="px-[16px] py-[12px] text-[14px] text-[#344054]">
                            {perStaff.toFixed(2)} {record.currency}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run build`
Expected: build succeeds with no TypeScript errors in the new file.

---

## Task 2: Create AssignBenefitsDrawer.tsx

**Files:**
- Create: `src/app/components/AssignBenefitsDrawer.tsx`

- [ ] **Step 1: Create the file with full implementation**

```tsx
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, Calendar, CheckCircle } from 'lucide-react';
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
  { id: 's7',  name: 'Albert Flores',      department: 'Audit' },
  { id: 's8',  name: 'Darlene Robertson',  department: 'Audit' },
  { id: 's9',  name: 'Ronald Richards',    department: 'Audit' },
  { id: 's10', name: 'Floyd Miles',        department: 'Audit' },
  { id: 's11', name: 'Arlene McCoy',       department: 'Audit' },
  { id: 's12', name: 'Devon Lane',         department: 'Audit' },
  { id: 's13', name: 'Bessie Cooper',      department: 'Audit' },
  { id: 's14', name: 'Ramesh Kumar',       department: 'Tax' },
  { id: 's15', name: 'Srinivasan Anand',   department: 'Tax' },
  { id: 's16', name: 'Falguni Hans',       department: 'Tax' },
  { id: 's17', name: 'Krishna Chauhan',    department: 'Tax' },
  { id: 's18', name: 'Amrit Dutta',        department: 'Tax' },
];

/* ─── Types ─── */

type AllocationMode = 'Lumpsum Value' | 'Value Per Staff';
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
  const [mode, setMode]                   = useState<AllocationMode>('Lumpsum Value');
  const [department, setDepartment]       = useState('');
  const [staffSearch, setStaffSearch]     = useState('');
  const [selectedStaff, setSelectedStaff] = useState<StaffMember[]>([]);
  const [currency, setCurrency]           = useState('');
  const [value, setValue]                 = useState('');
  const [disbursementDate, setDisbursementDate] = useState('');
  const [showSuccess, setShowSuccess]     = useState(false);

  /* Staff pool for selected department */
  const deptStaff = useMemo(
    () => MOCK_STAFF.filter(s => s.department === department),
    [department]
  );

  /* Filtered by search */
  const filteredStaff = useMemo(
    () => deptStaff.filter(s => s.name.toLowerCase().includes(staffSearch.toLowerCase())),
    [deptStaff, staffSearch]
  );

  const isSelected = (s: StaffMember) => selectedStaff.some(x => x.id === s.id);

  const toggleStaff = (s: StaffMember) => {
    setSelectedStaff(prev =>
      isSelected(s) ? prev.filter(x => x.id !== s.id) : [...prev, s]
    );
  };

  const handleDeptChange = (dept: string) => {
    setDepartment(dept);
    setSelectedStaff([]);
    setStaffSearch('');
  };

  const selectAll = () => setSelectedStaff(deptStaff);
  const clearAll  = () => setSelectedStaff([]);

  /* Computed allocation values */
  const numValue    = Number(value) || 0;
  const staffCount  = selectedStaff.length;
  const perStaff    = mode === 'Lumpsum Value' && staffCount > 0
    ? numValue / staffCount
    : numValue;
  const totalAmount = mode === 'Lumpsum Value'
    ? numValue
    : numValue * staffCount;

  /* Form completeness */
  const isFormComplete = (
    department !== '' &&
    staffCount > 0 &&
    currency !== '' &&
    numValue > 0 &&
    disbursementDate !== ''
  );

  /* Reset and close */
  const handleClose = () => {
    setStep('form');
    setMode('Lumpsum Value');
    setDepartment('');
    setStaffSearch('');
    setSelectedStaff([]);
    setCurrency('');
    setValue('');
    setDisbursementDate('');
    setShowSuccess(false);
    onClose();
  };

  /* Build record for onConfirm */
  const buildRecord = (): Omit<AllocationRecord, 'id'> => ({
    benefit: benefit!,
    department,
    mode,
    assignedOn: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    disbursementDate: new Date(disbursementDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    staffMembers: selectedStaff,
    currency,
    value: numValue,
    status: 'Completed',
  });

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
                    {(['Lumpsum Value', 'Value Per Staff'] as AllocationMode[]).map(m => (
                      <button
                        key={m}
                        onClick={() => setMode(m)}
                        className={`flex-1 py-[8px] px-[12px] rounded-[6px] text-[13px] font-semibold transition-all ${
                          mode === m
                            ? 'bg-white text-[#3a58ef] shadow-sm border border-[#e0e7ff]'
                            : 'text-[#667085] hover:text-[#344054]'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Department */}
                <div>
                  <FieldLabel label="Department" required />
                  <StyledSelect
                    value={department}
                    onChange={handleDeptChange}
                    placeholder="Select department"
                    options={DEPARTMENTS}
                  />
                </div>

                {/* Select Staff */}
                <div>
                  <FieldLabel label="Select Staff" required />
                  {!department ? (
                    <p className="text-[13px] text-[#98a2b3] italic">Select a department first.</p>
                  ) : (
                    <>
                      {/* Panel */}
                      <div className="border border-[#d0d5dd] rounded-[8px] overflow-hidden">
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
                                onClick={() => selectedStaff.length === deptStaff.length ? clearAll() : selectAll()}
                                className={`size-[16px] rounded-[3px] border-2 flex items-center justify-center cursor-pointer transition-all shrink-0 ${
                                  selectedStaff.length === deptStaff.length && deptStaff.length > 0
                                    ? 'bg-[#3a58ef] border-[#3a58ef]'
                                    : 'border-[#d0d5dd] bg-white'
                                }`}
                              >
                                {selectedStaff.length === deptStaff.length && deptStaff.length > 0 && (
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

                      {/* Chips */}
                      {selectedStaff.length > 0 && (
                        <div className="mt-[10px]">
                          <p className="text-[12px] font-semibold text-[#667085] mb-[6px]">
                            {selectedStaff.length} staff selected
                          </p>
                          <div className="flex flex-wrap gap-[6px]">
                            {selectedStaff.map(s => (
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
                          </div>
                        </div>
                      )}
                    </>
                  )}
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

                {/* Disbursement Date */}
                <div>
                  <FieldLabel label="Disbursement Date" required />
                  <div className="relative">
                    <input
                      type="date"
                      value={disbursementDate}
                      onChange={e => setDisbursementDate(e.target.value)}
                      className="w-full pl-[12px] pr-[40px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-[#3a58ef]/20 focus:border-[#3a58ef] transition-all"
                    />
                    <Calendar size={16} className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none" />
                  </div>
                </div>

                {/* Live allocation message */}
                {numValue > 0 && staffCount > 0 && currency && (
                  <div className="p-[12px] bg-[#eff4ff] border border-[#c7d7fd] rounded-[8px]">
                    <p className="text-[13px] text-[#3a58ef] leading-[20px]">
                      {mode === 'Lumpsum Value'
                        ? <>The total lumpsum value of <strong>{numValue.toLocaleString()} {currency}</strong> will be distributed equally among <strong>{staffCount} selected staff members</strong>. Each staff member will receive <strong>{perStaff.toFixed(2)} {currency}</strong>.</>
                        : <>Each of the <strong>{staffCount} selected staff members</strong> will receive <strong>{numValue.toLocaleString()} {currency}</strong>. Total allocation will be <strong>{totalAmount.toLocaleString()} {currency}</strong>.</>
                      }
                    </p>
                  </div>
                )}

              </div>
            )}

            {/* ── PREVIEW STEP ── */}
            {step === 'preview' && (
              <div className="flex-1 overflow-y-auto px-[24px] py-[20px] space-y-[20px]">

                {/* Allocation table */}
                <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        {['Employee', 'Allocated Benefit', 'Value'].map(col => (
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
                    { label: 'Currency',         value: currency },
                    { label: 'Value Per Staff',  value: `${perStaff.toFixed(2)} ${currency}` },
                    { label: 'Total Allocation', value: `${totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${currency}` },
                  ].map(({ label, value: val }, i, arr) => (
                    <div key={label} className={`flex items-center py-[10px] px-[16px] ${i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'} ${i < arr.length - 1 ? 'border-b border-[#eaecf0]' : ''}`}>
                      <span className="w-[160px] shrink-0 text-[13px] font-semibold text-[#667085]">{label}</span>
                      <span className="text-[14px] text-[#101828] font-medium">{val}</span>
                    </div>
                  ))}
                </div>

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
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run build`
Expected: build succeeds with no TypeScript errors.

---

## Task 3: Create BenefitsView.tsx

**Files:**
- Create: `src/app/components/BenefitsView.tsx`

- [ ] **Step 1: Create the file with full implementation**

```tsx
import { useState } from 'react';
import { Gift } from 'lucide-react';
import type { Benefit, AllocationRecord } from './ViewAllocationDrawer';
import { computeTotal } from './ViewAllocationDrawer';
import AssignBenefitsDrawer from './AssignBenefitsDrawer';
import ViewAllocationDrawer from './ViewAllocationDrawer';

/* ─── Mock catalog ─── */

const MOCK_BENEFITS: Benefit[] = [
  { id: 'b1', name: 'Health Insurance',    description: 'Comprehensive medical, dental, and vision coverage for employees.' },
  { id: 'b2', name: 'Meal Allowance',      description: 'Daily meal stipend to cover lunch and dinner expenses.' },
  { id: 'b3', name: 'Transport Allowance', description: 'Monthly reimbursement for commuting and travel expenses.' },
  { id: 'b4', name: 'Annual Bonus',        description: 'Performance-based yearly bonus paid at fiscal year end.' },
  { id: 'b5', name: 'Gym Membership',      description: 'Sponsored fitness center membership for health and wellness.' },
];

/* ─── Types ─── */

type TabType = 'catalog' | 'history';

interface BenefitsViewProps {
  onNavigationChange?: (view: string) => void;
}

/* ─── Component ─── */

export default function BenefitsView({ onNavigationChange: _onNavigationChange }: BenefitsViewProps) {
  const [activeTab, setActiveTab]           = useState<TabType>('catalog');
  const [allocationHistory, setAllocationHistory] = useState<AllocationRecord[]>([]);
  const [assigningBenefit, setAssigningBenefit]   = useState<Benefit | null>(null);
  const [viewingRecord, setViewingRecord]         = useState<AllocationRecord | null>(null);

  const handleConfirmAllocation = (record: Omit<AllocationRecord, 'id'>) => {
    const newRecord: AllocationRecord = {
      ...record,
      id: `alloc-${Date.now()}`,
    };
    setAllocationHistory(prev => [newRecord, ...prev]);
    setActiveTab('history');
  };

  /* ── Status badge ── */
  const StatusBadge = ({ status }: { status: 'Completed' | 'Pending' }) => (
    <span className={`inline-flex items-center px-[8px] py-[2px] rounded-full text-[12px] font-semibold ${
      status === 'Completed' ? 'bg-[#ecfdf3] text-[#027a48]' : 'bg-[#fffbeb] text-[#b45309]'
    }`}>
      {status}
    </span>
  );

  return (
    <>
      <AssignBenefitsDrawer
        benefit={assigningBenefit}
        onClose={() => setAssigningBenefit(null)}
        onConfirm={handleConfirmAllocation}
      />
      <ViewAllocationDrawer
        record={viewingRecord}
        onClose={() => setViewingRecord(null)}
      />

      <div className="bg-white flex flex-col gap-0 h-full w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] overflow-hidden font-sans">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px] px-[16px] md:px-[24px] pt-[20px] pb-[16px] shrink-0">
          <div className="flex flex-col gap-[4px]">
            <div className="flex items-center gap-[4px]">
              <span className="text-[12px] font-medium text-[#98a2b3] leading-[18px]">Human Resources</span>
              <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 16 16">
                <path d="M6 4L10 8L6 12" stroke="#98a2b3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[12px] font-medium text-[#344054] leading-[18px]">Benefits</span>
            </div>
            <h1 className="text-[24px] font-bold text-[#101828] leading-[32px]">Benefits</h1>
          </div>
          <button className="inline-flex items-center gap-[8px] bg-[#3a58ef] text-white px-[16px] py-[10px] rounded-[8px] text-[14px] font-semibold hover:bg-[#2d46d6] transition-colors shadow-sm shrink-0">
            <span className="text-[18px] leading-none">+</span>
            Add Custom Benefit
          </button>
        </div>

        {/* ── Tabs ── */}
        <div className="flex items-center border-b border-[#eaecf0] px-[16px] md:px-[24px] shrink-0">
          {([
            { id: 'catalog' as TabType, label: 'Benefits Catalog' },
            { id: 'history' as TabType, label: 'Benefits History' },
          ]).map(({ id, label }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
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

          {/* Benefits Catalog */}
          {activeTab === 'catalog' && (
            <div className="flex-1 overflow-auto">
              {/* Desktop table */}
              <div className="hidden md:block">
                <table className="w-full border-collapse">
                  <thead className="sticky top-0 z-10">
                    <tr>
                      {['Benefit Name', 'Description', 'Action'].map(col => (
                        <th key={col} className="bg-[#ebeefd] px-[16px] py-[12px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] whitespace-nowrap">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_BENEFITS.map(benefit => (
                      <tr key={benefit.id} className="border-b border-[#f2f2f2] hover:bg-[#f9fafb] transition-colors">
                        <td className="px-[16px] py-[14px] text-[14px] font-semibold text-[#101828] whitespace-nowrap">{benefit.name}</td>
                        <td className="px-[16px] py-[14px] text-[14px] text-[#344054] max-w-[400px]">{benefit.description}</td>
                        <td className="px-[16px] py-[14px]">
                          <button
                            onClick={() => setAssigningBenefit(benefit)}
                            className="px-[14px] py-[7px] border border-[#3a58ef] text-[#3a58ef] rounded-[6px] text-[13px] font-semibold hover:bg-[#eff4ff] transition-colors whitespace-nowrap"
                          >
                            Assign Benefits
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden p-[16px] space-y-[12px]">
                {MOCK_BENEFITS.map(benefit => (
                  <div key={benefit.id} className="bg-white border border-[#eaecf0] rounded-[8px] p-[16px] shadow-sm">
                    <h3 className="text-[14px] font-bold text-[#101828] mb-[6px]">{benefit.name}</h3>
                    <p className="text-[13px] text-[#667085] mb-[14px]">{benefit.description}</p>
                    <button
                      onClick={() => setAssigningBenefit(benefit)}
                      className="w-full px-[14px] py-[8px] border border-[#3a58ef] text-[#3a58ef] rounded-[6px] text-[13px] font-semibold hover:bg-[#eff4ff] transition-colors"
                    >
                      Assign Benefits
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits History */}
          {activeTab === 'history' && (
            <div className="flex-1 overflow-auto">
              {allocationHistory.length === 0 ? (
                /* Empty state */
                <div className="flex flex-col items-center justify-center h-full p-[24px] text-center">
                  <div className="size-[80px] mx-auto flex items-center justify-center mb-[20px]">
                    <Gift className="size-[64px] text-[#344054]" strokeWidth={1.2} />
                  </div>
                  <h2 className="text-[20px] font-bold text-[#1d2939] mb-[8px]">No Allocations Yet</h2>
                  <p className="text-[14px] text-[#5d667b] max-w-[360px] leading-[22px]">
                    Allocations you create from the Benefits Catalog will appear here.
                  </p>
                </div>
              ) : (
                <>
                  {/* Desktop table */}
                  <div className="hidden md:block">
                    <table className="w-full border-collapse">
                      <thead className="sticky top-0 z-10">
                        <tr>
                          {['Benefit Name', 'Description', 'Department', 'Mode', 'Assigned On', 'Disbursement Date', 'No. of Staffs', 'Amount', 'Status', 'Action'].map(col => (
                            <th key={col} className="bg-[#ebeefd] px-[16px] py-[12px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] whitespace-nowrap">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {allocationHistory.map(record => (
                          <tr key={record.id} className="border-b border-[#f2f2f2] hover:bg-[#f9fafb] transition-colors">
                            <td className="px-[16px] py-[14px] text-[14px] font-semibold text-[#101828] whitespace-nowrap">{record.benefit.name}</td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[#344054] max-w-[200px]"><span className="block truncate">{record.benefit.description}</span></td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[#344054] whitespace-nowrap">{record.department}</td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[#344054] whitespace-nowrap">{record.mode}</td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[#344054] whitespace-nowrap">{record.assignedOn}</td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[#344054] whitespace-nowrap">{record.disbursementDate}</td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[#344054] text-center">{record.staffMembers.length}</td>
                            <td className="px-[16px] py-[14px] text-[14px] text-[#344054] whitespace-nowrap">
                              {computeTotal(record).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {record.currency}
                            </td>
                            <td className="px-[16px] py-[14px]"><StatusBadge status={record.status} /></td>
                            <td className="px-[16px] py-[14px]">
                              <button
                                onClick={() => setViewingRecord(record)}
                                className="px-[14px] py-[7px] border border-[#3a58ef] text-[#3a58ef] rounded-[6px] text-[13px] font-semibold hover:bg-[#eff4ff] transition-colors"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile cards */}
                  <div className="md:hidden p-[16px] space-y-[12px]">
                    {allocationHistory.map(record => (
                      <div key={record.id} className="bg-white border border-[#eaecf0] rounded-[8px] p-[16px] shadow-sm">
                        <div className="flex items-start justify-between gap-[8px] mb-[10px]">
                          <h3 className="text-[14px] font-bold text-[#101828]">{record.benefit.name}</h3>
                          <StatusBadge status={record.status} />
                        </div>
                        <div className="grid grid-cols-2 gap-[8px] text-[13px] mb-[12px]">
                          <div><span className="text-[#667085]">Department</span><p className="text-[#344054] font-medium mt-[2px]">{record.department}</p></div>
                          <div><span className="text-[#667085]">Mode</span><p className="text-[#344054] font-medium mt-[2px]">{record.mode}</p></div>
                          <div><span className="text-[#667085]">Assigned On</span><p className="text-[#344054] font-medium mt-[2px]">{record.assignedOn}</p></div>
                          <div><span className="text-[#667085]">Staff</span><p className="text-[#344054] font-medium mt-[2px]">{record.staffMembers.length}</p></div>
                          <div className="col-span-2"><span className="text-[#667085]">Amount</span><p className="text-[#344054] font-medium mt-[2px]">{computeTotal(record).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {record.currency}</p></div>
                        </div>
                        <button
                          onClick={() => setViewingRecord(record)}
                          className="w-full px-[14px] py-[8px] border border-[#3a58ef] text-[#3a58ef] rounded-[6px] text-[13px] font-semibold hover:bg-[#eff4ff] transition-colors"
                        >
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npm run build`
Expected: build succeeds with no TypeScript errors.

---

## Task 4: Wire Navigation

**Files:**
- Modify: `src/app/components/CollapsibleSidebar.tsx`
- Modify: `src/app/components/UnifiedHRApplication.tsx`
- Modify: `src/app/App.tsx`

### 4a — CollapsibleSidebar.tsx

- [ ] **Step 1: Add `benefits` to HR active condition (line 98)**

Find:
```
active: currentView === 'my-staff' || currentView === 'compensation' || currentView === 'attendance-management' || currentView === 'holidays' || currentView === 'pip' || currentView === 'leave' || currentView === 'staff-resignation' || currentView === 'policies-guidelines' || currentView === 'client-referral' || currentView === 'staff-agreements' || currentView === 'onboarding' || currentView === 'employee-loan' || currentView === 'appraisals' || currentView === 'task-repository' || currentView === 'management-fee-chart' || currentView === 'activity-logs' || currentView === 'timesheets' || currentView === 'staff-profiling',
```

Replace with (append `|| currentView === 'benefits'`):
```
active: currentView === 'my-staff' || currentView === 'compensation' || currentView === 'attendance-management' || currentView === 'holidays' || currentView === 'pip' || currentView === 'leave' || currentView === 'staff-resignation' || currentView === 'policies-guidelines' || currentView === 'client-referral' || currentView === 'staff-agreements' || currentView === 'onboarding' || currentView === 'employee-loan' || currentView === 'appraisals' || currentView === 'task-repository' || currentView === 'management-fee-chart' || currentView === 'activity-logs' || currentView === 'timesheets' || currentView === 'staff-profiling' || currentView === 'benefits',
```

- [ ] **Step 2: Add `benefits` to the HR submenu array**

Find (inside the HR submenu array, after the last entry `{ id: 'activity-logs', label: 'Activity Logs', active: currentView === 'activity-logs' }`):
```
            { id: 'activity-logs', label: 'Activity Logs', active: currentView === 'activity-logs' }
```

Replace with:
```
            { id: 'activity-logs', label: 'Activity Logs', active: currentView === 'activity-logs' },
            { id: 'benefits', label: 'Benefits', active: currentView === 'benefits' }
```

- [ ] **Step 3: Add `benefits` to the submenu click handler**

Find (the long condition in the submenu onClick):
```
if (subItem.id === 'my-staff' || subItem.id === 'holidays' || subItem.id === 'task-repository' || subItem.id === 'employee-loan' || subItem.id === 'onboarding' || subItem.id === 'activity-logs' || subItem.id === 'management-fee-chart' || subItem.id === 'policies-guidelines' || subItem.id === 'compensation' || subItem.id === 'attendance-management' || subItem.id === 'pip' || subItem.id === 'leave' || subItem.id === 'staff-resignation' || subItem.id === 'client-referral' || subItem.id === 'staff-agreements' || subItem.id === 'timesheets' || subItem.id === 'staff-profiling' || subItem.id === 'shortlisted') {
```

Replace with (append `|| subItem.id === 'benefits'`):
```
if (subItem.id === 'my-staff' || subItem.id === 'holidays' || subItem.id === 'task-repository' || subItem.id === 'employee-loan' || subItem.id === 'onboarding' || subItem.id === 'activity-logs' || subItem.id === 'management-fee-chart' || subItem.id === 'policies-guidelines' || subItem.id === 'compensation' || subItem.id === 'attendance-management' || subItem.id === 'pip' || subItem.id === 'leave' || subItem.id === 'staff-resignation' || subItem.id === 'client-referral' || subItem.id === 'staff-agreements' || subItem.id === 'timesheets' || subItem.id === 'staff-profiling' || subItem.id === 'shortlisted' || subItem.id === 'benefits') {
```

### 4b — UnifiedHRApplication.tsx

- [ ] **Step 4: Add import for BenefitsView**

After the existing imports (e.g., after the `ShortlistedView` import line), add:
```ts
import BenefitsView from './BenefitsView';
```

- [ ] **Step 5: Add `'benefits'` to ViewType union**

Find:
```
  | 'shortlisted'
  | 'request-technical-assessment';
```

Replace with:
```
  | 'shortlisted'
  | 'request-technical-assessment'
  | 'benefits';
```

- [ ] **Step 6: Add render case in renderMainContent()**

Find:
```
      case 'task-repository':
      default:
        return <ResponsiveTaskRepository onNavigationChange={handleNavigationChange} />;
```

Replace with:
```
      case 'benefits':
        return <BenefitsView onNavigationChange={handleNavigationChange} />;
      case 'task-repository':
      default:
        return <ResponsiveTaskRepository onNavigationChange={handleNavigationChange} />;
```

### 4c — App.tsx

- [ ] **Step 7: Add `'benefits'` to ViewType in App.tsx**

Find:
```
type ViewType = 'dashboard' | 'task-repository' | 'compensation' | 'holidays' | 'employee-loan' | 'onboarding' | 'activity-logs' | 'management-fee-chart' | 'policies-guidelines' | 'my-staff' | 'attendance-management' | 'pip' | 'leave' | 'staff-resignation' | 'client-referral' | 'staff-agreements' | 'billing-details' | 'timesheets' | 'staff-profiling' | 'shortlisted';
```

Replace with:
```
type ViewType = 'dashboard' | 'task-repository' | 'compensation' | 'holidays' | 'employee-loan' | 'onboarding' | 'activity-logs' | 'management-fee-chart' | 'policies-guidelines' | 'my-staff' | 'attendance-management' | 'pip' | 'leave' | 'staff-resignation' | 'client-referral' | 'staff-agreements' | 'billing-details' | 'timesheets' | 'staff-profiling' | 'shortlisted' | 'benefits';
```

- [ ] **Step 8: Add `'benefits'` to validViews array in App.tsx**

Find:
```
    const validViews: ViewType[] = ['dashboard', 'task-repository', 'compensation', 'holidays', 'employee-loan', 'onboarding', 'activity-logs', 'management-fee-chart', 'policies-guidelines', 'my-staff', 'attendance-management', 'pip', 'leave', 'staff-resignation', 'client-referral', 'staff-agreements', 'billing-details', 'timesheets', 'staff-profiling', 'shortlisted'];
```

Replace with:
```
    const validViews: ViewType[] = ['dashboard', 'task-repository', 'compensation', 'holidays', 'employee-loan', 'onboarding', 'activity-logs', 'management-fee-chart', 'policies-guidelines', 'my-staff', 'attendance-management', 'pip', 'leave', 'staff-resignation', 'client-referral', 'staff-agreements', 'billing-details', 'timesheets', 'staff-profiling', 'shortlisted', 'benefits'];
```

---

## Task 5: Final Build Verification

- [ ] **Step 1: Run full build**

Run: `npm run build`
Expected output (last line): `✓ built in X.XXs`
No TypeScript errors, no missing imports.

- [ ] **Step 2: Manual smoke test in browser**

Start dev server: `npm run dev -- --port 5174`

Verify:
1. Sidebar → Human Resources → **Benefits** appears in submenu and navigates correctly
2. Benefits Catalog tab shows 5 benefit rows with "Assign Benefits" buttons
3. Clicking "Assign Benefits" opens the right-side drawer with correct benefit pre-filled
4. Allocation Mode toggle switches between Lumpsum Value and Value Per Staff
5. Selecting a department populates the staff list; search filters it; Select All / Clear All work
6. Staff chips appear below the panel with remove (×) buttons
7. Live allocation message updates as value/staff changes
8. "Preview Allocation" stays disabled until all required fields are filled
9. Preview step shows correct table and summary card
10. "Confirm & Allocate" shows success modal
11. Clicking "OK" closes drawer, switches to Benefits History tab, shows new record
12. "View" button on history row opens the read-only summary drawer
13. Status badges render correctly (green Completed, amber Pending)
14. Mobile card views render correctly at small screen widths
