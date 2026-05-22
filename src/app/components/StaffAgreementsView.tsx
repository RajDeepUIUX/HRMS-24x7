import { useState } from 'react';
import { Eye, FileText, X } from 'lucide-react';

interface StaffAgreement {
  id: string;
  staffName: string;
  designation: string;
  tentativeJoiningDate: string;
  workMode: 'WFO' | 'WFH' | 'Hybrid';
  location: string;
  level: string;
  status: 'Not Generated' | 'Generated' | 'Under Review' | 'E-Sign Pending' | 'Customized' | 'signed' | 'Onboarded';
  actionActive: boolean;
}

interface StaffAgreementsViewProps {
  onNavigationChange?: (view: string, data?: unknown) => void;
}

export default function StaffAgreementsView({ onNavigationChange }: StaffAgreementsViewProps) {
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [generatingForStaff, setGeneratingForStaff] = useState<StaffAgreement | null>(null);

  const [staffAgreements, setStaffAgreements] = useState<StaffAgreement[]>([
    { id: 'SA-001', staffName: 'Deepa Varma', designation: 'Sr. Tax Manager', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFO', location: 'Ahmedabad', level: 'L3', status: 'Not Generated', actionActive: true },
    { id: 'SA-002', staffName: 'Rekha Singhal', designation: 'Audit Associate', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFH', location: 'Ahmedabad', level: 'L2', status: 'Generated', actionActive: false },
    { id: 'SA-003', staffName: 'Amrit Dutta', designation: 'Sr. Accountant', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFO', location: 'Kolkata', level: 'L4', status: 'Under Review', actionActive: false },
    { id: 'SA-004', staffName: 'Krishna Chauhan', designation: 'Audit Associate', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFO', location: 'Ahmedabad', level: 'L1', status: 'E-Sign Pending', actionActive: true },
    { id: 'SA-005', staffName: 'Kasturba Kamdar', designation: 'Sr. Accountant', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFO', location: 'Delhi', level: 'L2', status: 'Customized', actionActive: false },
    { id: 'SA-006', staffName: 'Srinivasan Anand', designation: 'Audit Associate', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFH', location: 'Ahmedabad', level: 'L4', status: 'signed', actionActive: false },
    { id: 'SA-007', staffName: 'Darlene Robertson', designation: 'Sr. Accountant', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFH', location: 'Baroda', level: 'L3', status: 'Onboarded', actionActive: false },
    { id: 'SA-008', staffName: 'Pushpa Ray', designation: 'Audit Associate', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFO', location: 'Surat', level: 'L2', status: 'Generated', actionActive: false },
    { id: 'SA-009', staffName: 'Urmi Kale', designation: 'Sr. Tax Manager', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFO', location: 'Kolkata', level: 'L1', status: 'signed', actionActive: true },
    { id: 'SA-010', staffName: 'Falguni Hans', designation: 'Audit Associate', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFO', location: 'Baroda', level: 'L3', status: 'E-Sign Pending', actionActive: false },
    { id: 'SA-011', staffName: 'Ramesh Kumar', designation: 'Audit Associate', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFH', location: 'Baroda', level: 'L2', status: 'E-Sign Pending', actionActive: false },
    { id: 'SA-012', staffName: 'Sameer Shetty', designation: 'Sr. Tax Manager', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFH', location: 'Hydrabad', level: 'L2', status: 'signed', actionActive: true },
    { id: 'SA-013', staffName: 'Rohit Shetty', designation: 'Sr. Tax Manager', tentativeJoiningDate: 'Nov 12, 2024', workMode: 'WFH', location: 'Surat', level: 'L5', status: 'E-Sign Pending', actionActive: false },
  ]);

  const stats = {
    generated: staffAgreements.filter(a => a.status === 'Generated' || a.status === 'signed' || a.status === 'Onboarded').length,
    underReview: staffAgreements.filter(a => a.status === 'Under Review').length,
    esignPending: staffAgreements.filter(a => a.status === 'E-Sign Pending').length,
    customized: staffAgreements.filter(a => a.status === 'Customized').length,
    notGenerated: staffAgreements.filter(a => a.status === 'Not Generated').length,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Not Generated': return 'bg-[#f2f4f7] text-[#667085]';
      case 'Generated': return 'bg-[#eff8ff] text-[#175cd3]';
      case 'Under Review': return 'bg-[#fff7ed] text-[#c05621]';
      case 'E-Sign Pending': return 'bg-[#fffbeb] text-[#b45309]';
      case 'Customized': return 'bg-[#ecfdf3] text-[#027a48]';
      case 'signed': return 'bg-[#f4f3ff] text-[#5925dc]';
      case 'Onboarded': return 'bg-[#ecfdf3] text-[#027a48]';
      default: return 'bg-[#f2f4f7] text-[#344054]';
    }
  };

  const handleGenerate = () => {
    if (!generatingForStaff) return;
    setStaffAgreements(prev =>
      prev.map(a =>
        a.id === generatingForStaff.id ? { ...a, status: 'Generated' as const, actionActive: false } : a
      )
    );
    setIsGenerateModalOpen(false);
    setGeneratingForStaff(null);
  };

  return (
    <div className="bg-white box-border flex flex-col gap-[24px] h-full items-stretch overflow-auto p-[16px] md:p-[24px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full font-sans">
      {/* Breadcrumbs */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full gap-[4px]">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
          <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#98a2b3] text-[12px] whitespace-nowrap">
            Human Resources
          </p>
          <div className="relative shrink-0 size-[16px] flex items-center justify-center">
            <svg className="size-[12px]" fill="none" viewBox="0 0 16 16">
              <path d="M6 4L10 8L6 12" stroke="#98a2b3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">
            Staff Agreements
          </p>
        </div>
        <p className="font-bold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">
          Staff Agreements
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[12px] relative shrink-0 w-full">
        {[
          { label: 'Generated', value: stats.generated },
          { label: 'Under Review', value: stats.underReview },
          { label: 'E-Sign Pending', value: stats.esignPending },
          { label: 'Customized', value: stats.customized },
          { label: 'Staff Agreements Not Generated', value: stats.notGenerated },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white border border-[#eaecf0] flex flex-col gap-[8px] items-start p-[16px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
            <p className="font-medium leading-[20px] text-[#475467] text-[14px]">{label}</p>
            <p className="font-bold leading-[44px] text-[#1d2939] text-[36px] whitespace-nowrap">{value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="flex-1 overflow-x-auto w-full border border-[#eaecf0] rounded-[4px]">
        <table className="border-collapse w-full" style={{ minWidth: '1000px' }}>
          <thead className="sticky top-0 bg-[#eff2fe] z-10 border-b border-[#eaecf0]">
            <tr className="h-[44px]">
              <th className="text-left px-[16px] py-[12px] font-semibold text-[13px] text-[#101828] border-r border-[#eaecf0] sticky left-0 z-[20] bg-[#eff2fe] min-w-[200px]">
                Staff Name
              </th>
              <th className="text-left px-[16px] py-[12px] font-semibold text-[13px] text-[#101828] border-r border-[#eaecf0] min-w-[150px]">
                Designation
              </th>
              <th className="text-left px-[16px] py-[12px] font-semibold text-[13px] text-[#101828] border-r border-[#eaecf0] min-w-[160px]">
                Tentative Joining Date
              </th>
              <th className="text-left px-[16px] py-[12px] font-semibold text-[13px] text-[#101828] border-r border-[#eaecf0] min-w-[110px]">
                Work Mode
              </th>
              <th className="text-left px-[16px] py-[12px] font-semibold text-[13px] text-[#101828] border-r border-[#eaecf0] min-w-[110px]">
                Location
              </th>
              <th className="text-left px-[16px] py-[12px] font-semibold text-[13px] text-[#101828] border-r border-[#eaecf0] min-w-[130px]">
                Status
              </th>
              <th className="text-left px-[16px] py-[12px] font-semibold text-[13px] text-[#101828] sticky right-0 z-[20] bg-[#eff2fe] border-l border-[#eaecf0]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {staffAgreements.map((agreement) => (
              <tr key={agreement.id} className="group border-b border-[#eaecf0] transition-colors hover:bg-gray-50 bg-white">
                <td className="px-[16px] py-[12px] border-r border-[#eaecf0] sticky left-0 z-[1] bg-white group-hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-[12px]">
                    <div className="relative shrink-0 size-[32px] rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(agreement.staffName)}&background=random`}
                        alt={agreement.staffName}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(agreement.staffName)}&background=3a58ef&color=fff`;
                        }}
                      />
                    </div>
                    <p className="font-normal text-[#344054] text-[14px]">{agreement.staffName}</p>
                  </div>
                </td>
                <td className="px-[16px] py-[12px] border-r border-[#eaecf0]">
                  <p className="font-normal text-[#1d2939] text-[14px]">{agreement.designation}</p>
                </td>
                <td className="px-[16px] py-[12px] border-r border-[#eaecf0]">
                  <p className="font-normal text-[#344054] text-[14px]">{agreement.tentativeJoiningDate}</p>
                </td>
                <td className="px-[16px] py-[12px] border-r border-[#eaecf0]">
                  <p className="font-normal text-[#344054] text-[14px]">{agreement.workMode}</p>
                </td>
                <td className="px-[16px] py-[12px] border-r border-[#eaecf0]">
                  <p className="font-normal text-[#344054] text-[14px]">{agreement.location}</p>
                </td>
                <td className="px-[16px] py-[12px] border-r border-[#eaecf0]">
                  <div className={`inline-flex items-center px-[8px] py-[2px] rounded-[4px] ${getStatusColor(agreement.status)}`}>
                    <p className="font-medium text-[12px] whitespace-nowrap capitalize">{agreement.status}</p>
                  </div>
                </td>
                <td className="px-[16px] py-[12px] sticky right-0 z-[1] bg-white group-hover:bg-gray-50 transition-colors border-l border-[#eaecf0]">
                  <div className="flex items-center gap-[12px]">
                    <Eye className="w-[18px] h-[18px] text-[#667085] cursor-pointer hover:text-[#3a58ef]" />
                    {agreement.status === 'Not Generated' ? (
                      <button
                        onClick={() => {
                          setGeneratingForStaff(agreement);
                          setIsGenerateModalOpen(true);
                        }}
                        className="bg-[#3a58ef] text-white px-[12px] py-[8px] rounded-[4px] text-[12px] font-semibold hover:bg-[#2d47d1] transition-colors min-w-[120px]"
                      >
                        Generate
                      </button>
                    ) : (
                      <button
                        disabled={!agreement.actionActive}
                        className={`px-[12px] py-[8px] rounded-[4px] text-[12px] font-semibold transition-colors min-w-[120px] ${
                          agreement.actionActive
                            ? 'bg-[#3a58ef] text-white hover:bg-[#2d47d1]'
                            : 'bg-[#d8defc] text-[#a0abff] cursor-not-allowed'
                        }`}
                      >
                        Convert to Staff
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="w-full flex items-center justify-between border-t border-[#eaecf0] pt-[16px]">
        <div className="flex items-center gap-[4px]">
          <div className="size-[32px] flex items-center justify-center border border-[#d0d5dd] rounded-[4px] cursor-pointer hover:bg-gray-50">
            <svg className="w-[12px] h-[12px]" fill="none" viewBox="0 0 16 16">
              <path d="M10 12L6 8L10 4" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} className={`size-[32px] flex items-center justify-center rounded-[4px] cursor-pointer ${i === 1 ? 'bg-[#3a58ef] text-white' : 'text-[#667085] hover:bg-gray-50'}`}>
              <span className="text-[14px] font-medium">{i}</span>
            </div>
          ))}
          <div className="size-[32px] flex items-center justify-center border border-[#d0d5dd] rounded-[4px] cursor-pointer hover:bg-gray-50">
            <svg className="w-[12px] h-[12px]" fill="none" viewBox="0 0 16 16">
              <path d="M6 12L10 8L6 4" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <p className="text-[14px] text-[#667085]">Showing {staffAgreements.length} of {staffAgreements.length} agreements</p>
      </div>

      {/* Generate Confirmation Modal */}
      {isGenerateModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] animate-in fade-in duration-200">
          <div className="bg-white rounded-[12px] p-[32px] max-w-[500px] w-full mx-[20px] shadow-xl relative flex flex-col items-center text-center">
            <button
              onClick={() => setIsGenerateModalOpen(false)}
              className="absolute right-[16px] top-[16px] text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-[20px] h-[20px]" />
            </button>
            <div className="size-[80px] bg-blue-50 rounded-full flex items-center justify-center mb-[24px]">
              <FileText className="w-[40px] h-[40px] text-[#3a58ef]" />
            </div>
            <h2 className="text-[28px] font-bold text-[#101828] mb-[16px]">Generate Offer Letter?</h2>
            <p className="text-[16px] text-[#475467] leading-[24px] mb-[8px]">
              Generating the offer letter for <span className="font-semibold text-[#101828]">{generatingForStaff?.staffName}</span> will allow you to view and customize its contents before sending it to the staff for e-sign.
            </p>
            <p className="text-[16px] text-[#475467] leading-[24px] mb-[32px]">Are you sure you want to proceed?</p>
            <div className="flex gap-[12px] w-full">
              <button
                onClick={() => setIsGenerateModalOpen(false)}
                className="flex-1 px-[20px] py-[12px] border border-[#d0d5dd] rounded-[8px] text-[16px] font-semibold text-[#344054] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleGenerate}
                className="flex-1 px-[20px] py-[12px] bg-[#3a58ef] rounded-[8px] text-[16px] font-semibold text-white hover:bg-[#2d47d1] transition-colors shadow-sm"
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
