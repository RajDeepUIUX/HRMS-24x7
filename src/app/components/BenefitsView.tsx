import { useState } from 'react';
import { Gift, Pencil, X } from 'lucide-react';
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
  const [activeTab, setActiveTab]                   = useState<TabType>('catalog');
  const [allocationHistory, setAllocationHistory]   = useState<AllocationRecord[]>([]);
  const [assigningBenefit, setAssigningBenefit]     = useState<Benefit | null>(null);
  const [viewingRecord, setViewingRecord]           = useState<AllocationRecord | null>(null);

  /* Custom benefits */
  const [customBenefits, setCustomBenefits]         = useState<Benefit[]>([]);

  /* Add / Edit modal */
  const [modalOpen, setModalOpen]                   = useState(false);
  const [editingBenefit, setEditingBenefit]         = useState<Benefit | null>(null);
  const [modalName, setModalName]                   = useState('');
  const [modalDesc, setModalDesc]                   = useState('');
  const [nameError, setNameError]                   = useState(false);

  const allBenefits = [...MOCK_BENEFITS, ...customBenefits];
  const isCustom = (id: string) => customBenefits.some(b => b.id === id);

  const openAddModal = () => {
    setEditingBenefit(null);
    setModalName('');
    setModalDesc('');
    setNameError(false);
    setModalOpen(true);
  };

  const openEditModal = (benefit: Benefit) => {
    setEditingBenefit(benefit);
    setModalName(benefit.name);
    setModalDesc(benefit.description);
    setNameError(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingBenefit(null);
    setModalName('');
    setModalDesc('');
    setNameError(false);
  };

  const handleSaveBenefit = () => {
    if (!modalName.trim()) {
      setNameError(true);
      return;
    }
    if (editingBenefit) {
      setCustomBenefits(prev =>
        prev.map(b =>
          b.id === editingBenefit.id
            ? { ...b, name: modalName.trim(), description: modalDesc.trim() }
            : b
        )
      );
    } else {
      setCustomBenefits(prev => [
        ...prev,
        { id: `custom-${Date.now()}`, name: modalName.trim(), description: modalDesc.trim() },
      ]);
    }
    setActiveTab('catalog');
    closeModal();
  };

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

      {/* ── Add / Edit Custom Benefit Modal ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-[2px] px-[16px]">
          <div className="bg-white rounded-[16px] shadow-2xl max-w-[480px] w-full overflow-hidden">
            {/* Header */}
            <div className="flex items-start justify-between px-[24px] py-[20px] border-b border-[#eaecf0]">
              <div>
                <h2 className="text-[18px] font-bold text-[#101828] leading-[28px]">
                  {editingBenefit ? 'Edit Custom Benefit' : 'Add Custom Benefit'}
                </h2>
                <p className="text-[13px] text-[#667085] mt-[2px]">
                  {editingBenefit
                    ? 'Update the custom benefit details.'
                    : 'Create a new custom benefit for your organization.'}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-[6px] text-[#98a2b3] hover:text-[#344054] hover:bg-[#f2f4f7] rounded-full transition-all mt-[2px] shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="px-[24px] py-[20px] space-y-[20px]">
              <div>
                <label className="block text-[13px] font-semibold text-[#344054] mb-[6px]">
                  Benefit Name<span className="text-[#d92d20] ml-[2px]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter benefit name"
                  value={modalName}
                  onChange={e => { setModalName(e.target.value); if (nameError) setNameError(false); }}
                  className={`w-full px-[12px] py-[10px] border rounded-[8px] text-[14px] text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-[#3a58ef]/20 focus:border-[#3a58ef] transition-all ${
                    nameError ? 'border-[#d92d20]' : 'border-[#d0d5dd]'
                  }`}
                />
                {nameError && (
                  <p className="text-[12px] text-[#d92d20] mt-[4px]">Benefit name is required.</p>
                )}
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#344054] mb-[6px]">Description</label>
                <textarea
                  placeholder="Enter description (optional)"
                  value={modalDesc}
                  onChange={e => setModalDesc(e.target.value)}
                  rows={3}
                  className="w-full px-[12px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] bg-white focus:outline-none focus:ring-2 focus:ring-[#3a58ef]/20 focus:border-[#3a58ef] transition-all resize-none"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-[24px] py-[16px] border-t border-[#eaecf0] flex items-center justify-end gap-[12px]">
              <button
                onClick={closeModal}
                className="px-[20px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveBenefit}
                className="px-[24px] py-[10px] bg-[#3a58ef] rounded-[8px] text-[14px] font-semibold text-white hover:bg-[#2d46d6] transition-colors shadow-sm"
              >
                {editingBenefit ? 'Save' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}

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
          <button
            onClick={openAddModal}
            className="inline-flex items-center gap-[8px] bg-[#3a58ef] text-white px-[16px] py-[10px] rounded-[8px] text-[14px] font-semibold hover:bg-[#2d46d6] transition-colors shadow-sm shrink-0"
          >
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
                    {allBenefits.map(benefit => (
                      <tr key={benefit.id} className="border-b border-[#f2f2f2] hover:bg-[#f9fafb] transition-colors">
                        <td className="px-[16px] py-[14px] text-[14px] font-semibold text-[#101828] whitespace-nowrap">
                          <div className="flex items-center gap-[8px]">
                            {benefit.name}
                            {isCustom(benefit.id) && (
                              <span className="inline-flex items-center bg-[#eff4ff] border border-[#c7d7fd] text-[#3a58ef] text-[12px] font-medium px-[8px] py-[3px] rounded-full">
                                Custom
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-[16px] py-[14px] text-[14px] text-[#344054] max-w-[400px]">{benefit.description}</td>
                        <td className="px-[16px] py-[14px]">
                          <div className="flex items-center gap-[8px]">
                            <button
                              onClick={() => isCustom(benefit.id) ? openEditModal(benefit) : undefined}
                              className={`p-[7px] border rounded-[6px] transition-colors ${
                                isCustom(benefit.id)
                                  ? 'border-[#d0d5dd] text-[#344054] hover:bg-[#f9fafb] hover:border-[#3a58ef] hover:text-[#3a58ef]'
                                  : 'invisible pointer-events-none'
                              }`}
                              tabIndex={isCustom(benefit.id) ? undefined : -1}
                              title={isCustom(benefit.id) ? 'Edit custom benefit' : undefined}
                            >
                              <Pencil size={14} />
                            </button>
                            <button
                              onClick={() => setAssigningBenefit(benefit)}
                              className="px-[14px] py-[7px] border border-[#3a58ef] text-[#3a58ef] rounded-[6px] text-[13px] font-semibold hover:bg-[#eff4ff] transition-colors whitespace-nowrap"
                            >
                              Assign Benefits
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden p-[16px] space-y-[12px]">
                {allBenefits.map(benefit => (
                  <div key={benefit.id} className="bg-white border border-[#eaecf0] rounded-[8px] p-[16px] shadow-sm">
                    <div className="flex items-center gap-[8px] mb-[6px]">
                      <h3 className="text-[14px] font-bold text-[#101828]">{benefit.name}</h3>
                      {isCustom(benefit.id) && (
                        <span className="inline-flex items-center bg-[#eff4ff] border border-[#c7d7fd] text-[#3a58ef] text-[12px] font-medium px-[8px] py-[3px] rounded-full">
                          Custom
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-[#667085] mb-[14px]">{benefit.description}</p>
                    <div className="flex items-center gap-[8px]">
                      {isCustom(benefit.id) && (
                        <button
                          onClick={() => openEditModal(benefit)}
                          className="p-[7px] border border-[#d0d5dd] text-[#344054] rounded-[6px] hover:bg-[#f9fafb] hover:border-[#3a58ef] hover:text-[#3a58ef] transition-colors"
                          title="Edit custom benefit"
                        >
                          <Pencil size={14} />
                        </button>
                      )}
                      <button
                        onClick={() => setAssigningBenefit(benefit)}
                        className="flex-1 px-[14px] py-[8px] border border-[#3a58ef] text-[#3a58ef] rounded-[6px] text-[13px] font-semibold hover:bg-[#eff4ff] transition-colors"
                      >
                        Assign Benefits
                      </button>
                    </div>
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
