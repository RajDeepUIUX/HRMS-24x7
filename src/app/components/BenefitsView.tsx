import { useState } from 'react';
import { Gift } from 'lucide-react';
import type { Benefit, AllocationRecord } from './ViewAllocationDrawer';
import { computeTotal } from './ViewAllocationDrawer';
import AssignBenefitsDrawer from './AssignBenefitsDrawer';
import ViewAllocationDrawer from './ViewAllocationDrawer';

/* ─── Benefits catalog ─── */

const MOCK_BENEFITS: Benefit[] = [
  { id: 'b1',  name: 'Lunch & Dinner',               description: 'Meal benefit for lunch and dinner expenses.' },
  { id: 'b2',  name: 'Sweet Box',                     description: 'Festive sweet box gifted to staff members.' },
  { id: 'b3',  name: 'Team Outing',                   description: 'Group activity or outing for team bonding.' },
  { id: 'b4',  name: 'Gift Card',                     description: 'Prepaid gift card redeemable at select stores.' },
  { id: 'b5',  name: 'Reimbursements',                description: 'General expense reimbursement for staff.' },
  { id: 'b6',  name: 'PTIN Reimbursements',           description: 'Reimbursement of PTIN registration/renewal fees.' },
  { id: 'b7',  name: 'Gift a Book',                   description: 'Book gifted to staff for learning and development.' },
  { id: 'b8',  name: 'Birthday Cake',                 description: 'Celebratory cake for staff birthdays.' },
  { id: 'b9',  name: 'Travel (With/Without Family)',  description: 'Travel benefit including or excluding family members.' },
  { id: 'b10', name: 'Event Tickets',                 description: 'Tickets for cricket tournaments or movie screenings.' },
  { id: 'b11', name: 'Chocolate Hampers',             description: 'Curated chocolate hamper gifted to staff.' },
  { id: 'b12', name: 'Marriage Gift / Bonus',         description: 'Bonus or gift provided upon staff marriage.' },
];

/* ─── Types ─── */

type TabType = 'catalog' | 'history';

interface BenefitsViewProps {
  onNavigationChange?: (view: string) => void;
}

/* ─── Component ─── */

export default function BenefitsView({ onNavigationChange: _onNavigationChange }: BenefitsViewProps) {
  const [activeTab, setActiveTab]                   = useState<TabType>('catalog');
  const [allocationHistory, setAllocationHistory]   = useState<AllocationRecord[]>([]);
  const [assigningBenefit, setAssigningBenefit]     = useState<Benefit | null>(null);
  const [viewingRecord, setViewingRecord]           = useState<AllocationRecord | null>(null);

  const handleConfirmAllocation = (record: Omit<AllocationRecord, 'id'>) => {
    const newRecord: AllocationRecord = { ...record, id: `alloc-${Date.now()}` };
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
            <div className="flex-1 overflow-auto p-[16px] rounded-[6px] border border-[#eaecf0]">
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
            <div className="flex-1 overflow-auto p-[16px] rounded-[6px] border border-[#eaecf0]">
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
                          {['Benefit Name', 'Description', 'Department', 'Mode', 'Assigned On', 'No. of Staffs', 'Amount', 'Status', 'Action'].map(col => (
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
