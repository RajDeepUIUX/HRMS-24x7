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
  mode: 'Lumpsum Value' | 'Value Per Staff' | 'Per Staff Allocation';
  assignedOn: string;
  disbursementDate: string;
  staffMembers: StaffMember[];
  currency: string;
  // Lumpsum: value = total entered (per-staff = value / count)
  // Per Staff: value = per-staff entered (total = value * count)
  // Per Staff Allocation: value = total sum; staffAllocations holds per-staff amounts
  value: number;
  staffAllocations?: Record<string, number>;
  status: 'Completed' | 'Pending';
}

/* ─── Helpers ─── */

export function computePerStaff(record: AllocationRecord): number {
  if (record.mode === 'Per Staff Allocation') return 0;
  return record.mode === 'Lumpsum Value'
    ? record.value / record.staffMembers.length
    : record.value;
}

export function computeTotal(record: AllocationRecord): number {
  if (record.mode === 'Per Staff Allocation') {
    if (!record.staffAllocations) return 0;
    return Object.values(record.staffAllocations).reduce((sum, v) => sum + v, 0);
  }
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
                        {record.mode === 'Per Staff Allocation'
                          ? ['Staff Name', 'Department', 'Amount', 'Currency'].map(col => (
                              <th key={col} className="bg-[#ebeefd] px-[16px] py-[10px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] whitespace-nowrap">{col}</th>
                            ))
                          : ['Employee', 'Allocated Benefit', 'Allocated Value'].map(col => (
                              <th key={col} className="bg-[#ebeefd] px-[16px] py-[10px] text-left text-[12px] font-semibold text-[#1d2939] border-b border-[#eaecf0] whitespace-nowrap">{col}</th>
                            ))
                        }
                      </tr>
                    </thead>
                    <tbody>
                      {record.staffMembers.map((s, i) => (
                        <tr key={s.id} className={`border-b border-[#f2f2f2] last:border-0 ${i % 2 !== 0 ? 'bg-[#f9fafb]' : ''}`}>
                          {record.mode === 'Per Staff Allocation' ? (
                            <>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#101828]">{s.name}</td>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#344054]">{s.department}</td>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#344054]">
                                {(record.staffAllocations?.[s.id] ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </td>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#667085] font-medium">{record.currency}</td>
                            </>
                          ) : (
                            <>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#101828]">{s.name}</td>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#344054]">{record.benefit.name}</td>
                              <td className="px-[16px] py-[12px] text-[14px] text-[#344054]">{perStaff.toFixed(2)} {record.currency}</td>
                            </>
                          )}
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
