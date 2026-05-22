import { useState } from 'react';

interface TimesheetsListViewProps {
  onNavigationChange?: (view: string) => void;
  onSelectClient?: (clientName: string) => void;
  onSelectStaff?: (staffName: string) => void;
}

interface TimesheetData {
  id: string;
  client: string;
  staffingType: string;
  profileName: string;
  estimatedHours: number;
  fte: number;
  eaWorking: string;
}

export default function TimesheetsListView({ onNavigationChange, onSelectClient, onSelectStaff }: TimesheetsListViewProps) {
  const [activeTab, setActiveTab] = useState<'active' | 'team' | 'new'>('active');

  const timesheetsData: TimesheetData[] = [
    {
      id: '2025-12-1877-0001',
      client: 'Fair & Company CPAs PLLC',
      staffingType: 'Temporary Tax',
      profileName: 'Asst. Manager - Tax Accounting',
      estimatedHours: 40,
      fte: 1,
      eaWorking: 'Yaswanth Kumar'
    },
    {
      id: '2025-12-1877-0002',
      client: 'White & Company PSC',
      staffingType: 'Regular Tax',
      profileName: 'Specialist - Tax Accounting',
      estimatedHours: 40,
      fte: 1,
      eaWorking: 'Surya Prakash'
    },
    {
      id: '2025-12-1877-0003',
      client: 'Tetra Advisory',
      staffingType: 'Temporary Tax',
      profileName: 'Specialist - Tax Accounting',
      estimatedHours: 40,
      fte: 1,
      eaWorking: 'Dev Anand'
    }
  ];

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full">
      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <p className="font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full whitespace-pre-wrap">
            Timesheets
          </p>
        </div>
        <div className="bg-[#3a58ef] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#2d47d1] transition-colors">
          <p className="font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white">
            Submit
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="content-stretch flex items-start mb-[-2px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div 
            className="content-stretch flex items-start px-[16px] py-[8px] relative shrink-0 cursor-pointer"
            onClick={() => setActiveTab('active')}
          >
            <p className={`font-medium leading-[20px] not-italic relative shrink-0 text-[14px] ${activeTab === 'active' ? 'text-[#3a58ef]' : 'text-[#5d667b]'}`}>
              Active Timesheets
            </p>
          </div>
          <div className={`${activeTab === 'active' ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'} h-px shrink-0 w-full`} />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div 
            className="content-stretch flex items-start px-[16px] py-[8px] relative shrink-0 cursor-pointer"
            onClick={() => setActiveTab('team')}
          >
            <p className={`font-medium leading-[20px] not-italic relative shrink-0 text-[14px] ${activeTab === 'team' ? 'text-[#3a58ef]' : 'text-[#5d667b]'}`}>
              Team's Timesheets
            </p>
          </div>
          <div className={`${activeTab === 'team' ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'} h-px shrink-0 w-full`} />
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div 
            className="content-stretch flex items-start px-[16px] py-[8px] relative shrink-0 cursor-pointer"
            onClick={() => setActiveTab('new')}
          >
            <p className={`font-medium leading-[20px] not-italic relative shrink-0 text-[14px] ${activeTab === 'new' ? 'text-[#3a58ef]' : 'text-[#5d667b]'}`}>
              New Timesheets
            </p>
          </div>
          <div className={`${activeTab === 'new' ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'} h-px shrink-0 w-full`} />
        </div>
      </div>
      <div className="bg-[#eaecf0] h-[2px] mb-[-26px] shrink-0 w-full" />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto w-full">
        <table className="border-collapse w-full" style={{ minWidth: '1000px' }}>
          <thead>
            <tr className="bg-[#ebeefd]">
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] sticky left-0 z-[2] bg-[#ebeefd] border-r border-[#d0d5dd] whitespace-nowrap">
                Timesheets
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] min-w-[160px]">
                Client
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] min-w-[130px]">
                Staffing Type
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] min-w-[180px]">
                Profile Name
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] min-w-[120px]">
                Estimated Hours
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] min-w-[160px]">
                Full Time Equivalent (FTE)
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] min-w-[130px]">
                EA Working
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] sticky right-0 z-[2] bg-[#ebeefd] border-l border-[#d0d5dd] whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {timesheetsData.map((timesheet) => (
              <tr key={timesheet.id} className="group border-b border-[#f2f2f2] hover:bg-gray-50 transition-colors">
                <td className="px-[16px] py-[12px] sticky left-0 z-[1] bg-white group-hover:bg-gray-50 border-r border-[#d0d5dd] transition-colors">
                  <p className="font-normal leading-[20px] text-[#3a58ef] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:underline">
                    {timesheet.id}
                  </p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p
                    className="font-normal leading-[20px] text-[#3a58ef] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:underline"
                    onClick={() => onSelectClient?.(timesheet.client)}
                  >
                    {timesheet.client}
                  </p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] text-[#5d667b] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {timesheet.staffingType}
                  </p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] text-[#5d667b] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {timesheet.profileName}
                  </p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] text-[#5d667b] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {timesheet.estimatedHours}
                  </p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] text-[#5d667b] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {timesheet.fte}
                  </p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p
                    className="font-normal leading-[20px] text-[#3a58ef] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:underline"
                    onClick={() => onSelectStaff?.(timesheet.eaWorking)}
                  >
                    {timesheet.eaWorking}
                  </p>
                </td>
                <td className="px-[16px] py-[12px] sticky right-0 z-[1] bg-white group-hover:bg-gray-50 border-l border-[#d0d5dd] transition-colors">
                  <div className="flex items-center justify-center">
                    <div className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-70">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="8" stroke="#5D667B" strokeWidth="1.5" fill="none" />
                        <path d="M10 6V10L12.5 12.5" stroke="#5D667B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}