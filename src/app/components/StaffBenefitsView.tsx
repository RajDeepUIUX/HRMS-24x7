type Benefit = {
  id: string;
  name: string;
  description: string;
  assignedOn: string;
  amount: number;
  currency: string;
};

const BENEFITS_DATA: Benefit[] = [
  {
    id: '1',
    name: 'Health Insurance',
    description: 'Comprehensive medical, dental, and vision coverage for employees.',
    assignedOn: 'Jan 01, 2024',
    amount: 5000,
    currency: 'USD',
  },
  {
    id: '2',
    name: 'Meal Allowance',
    description: 'Daily meal stipend to cover lunch and dinner expenses.',
    assignedOn: 'Jan 01, 2024',
    amount: 150,
    currency: 'USD',
  },
  {
    id: '3',
    name: 'Transport Allowance',
    description: 'Monthly reimbursement for commuting and travel expenses.',
    assignedOn: 'Feb 15, 2024',
    amount: 300,
    currency: 'USD',
  },
  {
    id: '4',
    name: 'Annual Bonus',
    description: 'Performance-based yearly bonus paid at fiscal year end.',
    assignedOn: 'Mar 01, 2024',
    amount: 2000,
    currency: 'USD',
  },
  {
    id: '5',
    name: 'Gym Membership',
    description: 'Sponsored fitness center membership for health and wellness.',
    assignedOn: 'Apr 10, 2024',
    amount: 80,
    currency: 'USD',
  },
];


function formatAmount(amount: number): string {
  return amount.toLocaleString();
}

export default function StaffBenefitsView() {
  return (
    <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full h-full flex flex-col overflow-hidden">

      {/* Page header */}
      <div className="px-[24px] pt-[24px] pb-[20px] border-b border-[#eaecf0]">
        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="text-[12px] text-[#667085]">Staff</span>
          <span className="text-[12px] text-[#667085]">›</span>
          <span className="text-[12px] text-[#344054] font-medium">Benefits</span>
        </div>
        <p className="font-bold text-[22px] leading-[32px] text-[#101828]">Benefits</p>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f0f3fe] sticky top-0">
              <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] w-[220px] border-b border-[#eaecf0]">
                Benefit Name
              </th>
              <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] border-b border-[#eaecf0]">
                Description
              </th>
              <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] w-[160px] border-b border-[#eaecf0]">
                Assigned On
              </th>
              <th className="text-left px-[20px] py-[12px] text-[13px] font-semibold text-[#344054] w-[140px] border-b border-[#eaecf0]">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {BENEFITS_DATA.map((benefit, index) => (
              <tr
                key={benefit.id}
                className={`border-b border-[#eaecf0] last:border-b-0 hover:bg-[#fafbff] transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-white'
                }`}
              >
                <td className="px-[20px] py-[16px] text-[14px] font-semibold text-[#101828] align-middle">
                  {benefit.name}
                </td>
                <td className="px-[20px] py-[16px] text-[14px] font-normal text-[#667085] align-middle leading-[22px]">
                  {benefit.description}
                </td>
                <td className="px-[20px] py-[16px] text-[14px] font-normal text-[#344054] align-middle whitespace-nowrap">
                  {benefit.assignedOn}
                </td>
                <td className="px-[20px] py-[16px] align-middle">
                  <span className="text-[14px] font-semibold text-[#101828]">
                    {formatAmount(benefit.amount)}
                  </span>
                  <span className="text-[11px] font-normal text-[#667085] ml-[4px]">
                    {benefit.currency}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {BENEFITS_DATA.length === 0 && (
          <div className="flex items-center justify-center py-[60px]">
            <p className="text-[14px] text-[#98a2b3]">No benefits assigned yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
