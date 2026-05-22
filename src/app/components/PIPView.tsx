import React, { useState, useEffect } from 'react';
import { Eye, MoreVertical, Search, Filter, Info } from 'lucide-react';

interface PIPViewProps {
  onNavigationChange?: (view: string) => void;
}

interface PIPRecord {
  id: number;
  pipId: string;
  staffName: string;
  pipDuration: string;
  startDate: string;
  endDate: string;
  endDateSubtext: string;
  status: 'Completed' | 'In Progress' | 'Not Cleared' | 'Extended';
  goalStatus: string;
  supportedDocuments: string;
  documentsCount: number;
}

const initialPIPData: PIPRecord[] = [
  {
    id: 1,
    pipId: 'PIP-1001',
    staffName: 'Aarav Mehta',
    pipDuration: '90 Days',
    startDate: 'Jan 05, 2025',
    endDate: 'Apr 05, 2025',
    endDateSubtext: 'Ended 2 Days Ago',
    status: 'Completed',
    goalStatus: '3/8',
    supportedDocuments: 'View (4)',
    documentsCount: 4
  },
  {
    id: 2,
    pipId: 'PIP-1002',
    staffName: 'Nisha Patel',
    pipDuration: '30 Days',
    startDate: 'Jan 04, 2025',
    endDate: 'Feb 03, 2025',
    endDateSubtext: '1 Day Remaining',
    status: 'In Progress',
    goalStatus: '6/15',
    supportedDocuments: 'View (2)',
    documentsCount: 2
  },
  {
    id: 3,
    pipId: 'PIP-1003',
    staffName: 'Karan Singh',
    pipDuration: '60 Days',
    startDate: 'Jan 04, 2025',
    endDate: 'Apr 04, 2025',
    endDateSubtext: '',
    status: 'Not Cleared',
    goalStatus: '8/8',
    supportedDocuments: 'View (4)',
    documentsCount: 4
  },
  {
    id: 4,
    pipId: 'PIP-1004',
    staffName: 'Anaya Gupta',
    pipDuration: '30 Days',
    startDate: 'Jan 01, 2025',
    endDate: 'Jan 31, 2025',
    endDateSubtext: 'Ended 5 Days Ago',
    status: 'Extended',
    goalStatus: '4/5',
    supportedDocuments: 'View (2)',
    documentsCount: 2
  },
];

export default function PIPView({ onNavigationChange }: PIPViewProps) {
  const [pipData, setPIPData] = useState<PIPRecord[]>(initialPIPData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const savedData = localStorage.getItem('pip-data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setPIPData(parsed);
      } catch (e) {
        console.error('Failed to parse PIP data:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pip-data', JSON.stringify(pipData));
  }, [pipData]);

  const filteredData = pipData.filter(record =>
    record.staffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.pipId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = 7;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentData = filteredData.slice(0, itemsPerPage);

  const statusColors = {
    'Completed': { bg: 'bg-[#d1fadf]', text: 'text-[#039855]', label: 'Completed' },
    'In Progress': { bg: 'bg-[#fef0c7]', text: 'text-[#dc6803]', label: 'In Progress' },
    'Not Cleared': { bg: 'bg-[#fee4e2]', text: 'text-[#d92d20]', label: 'Not Cleared' },
    'Extended': { bg: 'bg-[#fef0c7]', text: 'text-[#dc6803]', label: 'Extended' },
  };

  function BodyHeader() {
    return (
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[5]">
        <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap whitespace-pre">Staff</p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d="M6 12L10 8L6 4" stroke="#1D2939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">PIP</p>
          </div>
          <p className="font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Performance Improvement Program</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
          <div className="bg-white relative rounded-[4px] shrink-0 w-[298px]">
            <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[298px]">
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="font-normal leading-[20px] not-italic flex-1 bg-transparent outline-none text-[#344054] text-[14px] placeholder:text-[#5d667b]"
              />
              <Search className="relative shrink-0 size-[20px] text-[#5d667b]" strokeWidth={2} />
            </div>
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px] cursor-pointer hover:bg-[#2d47d9] transition-colors">
            <Filter className="relative shrink-0 size-[20px] text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
    );
  }

  function Pagination() {
    return (
      <div className="content-stretch flex gap-[12px] items-center justify-between relative shrink-0 w-full pt-[16px]">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Showing</p>
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="font-semibold leading-[24px] not-italic text-[#1d2939] text-[16px] bg-transparent outline-none cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <p className="font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap whitespace-pre">of {String(totalItems).padStart(2, '0')}</p>
          <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Events</p>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="relative shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M15.8337 10H4.16699M4.16699 10L10.0003 15.8333M4.16699 10L10.0003 4.16667" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="relative shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </button>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <input
              type="number"
              value={currentPage}
              onChange={(e) => {
                const page = Math.max(1, Math.min(totalPages, Number(e.target.value)));
                setCurrentPage(page);
              }}
              className="bg-white box-border overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 w-[60px] font-semibold text-[#1d2939] text-[16px] text-center outline-none border border-[#d0d5dd]"
            />
            <p className="font-normal leading-[1.25] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">of {String(totalPages).padStart(2, '0')} pages</p>
          </div>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="relative shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage >= totalPages}
            className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="relative shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_0px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] w-full h-full">
      <BodyHeader />

      {/* Table Container */}
      <div className="flex-1 min-h-0 overflow-auto w-full">
        <table className="border-collapse w-full" style={{ minWidth: '1110px' }}>
          <thead>
            <tr className="bg-[#ebeefd] h-[42px]">
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] sticky left-0 z-[2] bg-[#ebeefd] border-r border-[#d0d5dd] whitespace-nowrap" style={{ width: '120px' }}>
                PIP ID
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[140px] whitespace-nowrap">
                Staff Name
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] whitespace-nowrap" style={{ width: '130px' }}>
                PIP Duration
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] whitespace-nowrap" style={{ width: '140px' }}>
                Start Date
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] whitespace-nowrap" style={{ width: '160px' }}>
                End's On
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] whitespace-nowrap" style={{ width: '150px' }}>
                Status
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] whitespace-nowrap" style={{ width: '130px' }}>
                Goal Status
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] whitespace-nowrap" style={{ width: '180px' }}>
                Supported Documents
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] sticky right-0 z-[2] bg-[#ebeefd] border-l border-[#d0d5dd] whitespace-nowrap" style={{ width: '100px' }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((record) => {
              const sc = statusColors[record.status];
              return (
                <tr key={record.id} className="group border-b border-[#f2f2f2] hover:bg-[#f9fafb] transition-colors">
                  <td className="px-[16px] py-[12px] sticky left-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-r border-[#d0d5dd] transition-colors" style={{ width: '120px' }}>
                    <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] truncate">{record.pipId}</p>
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] truncate">{record.staffName}</p>
                  </td>
                  <td className="px-[16px] py-[12px]" style={{ width: '130px' }}>
                    <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] truncate">{record.pipDuration}</p>
                  </td>
                  <td className="px-[16px] py-[12px]" style={{ width: '140px' }}>
                    <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] truncate">{record.startDate}</p>
                  </td>
                  <td className="px-[16px] py-[12px]" style={{ width: '160px' }}>
                    <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] truncate">{record.endDate}</p>
                    {record.endDateSubtext && (
                      <p className="font-normal leading-[16px] not-italic text-[#98a2b3] text-[12px] truncate">{record.endDateSubtext}</p>
                    )}
                  </td>
                  <td className="px-[16px] py-[12px]" style={{ width: '150px' }}>
                    <div className={`${sc.bg} box-border content-stretch flex gap-[6px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[16px] shrink-0 w-fit`}>
                      <div className={`${sc.text} relative shrink-0 size-[6px] rounded-full`} style={{ backgroundColor: 'currentColor' }} />
                      <p className={`font-medium leading-[18px] not-italic relative shrink-0 ${sc.text} text-[12px] text-nowrap whitespace-pre`}>
                        {sc.label}
                      </p>
                    </div>
                  </td>
                  <td className="px-[16px] py-[12px]" style={{ width: '130px' }}>
                    <div className="flex items-center gap-[8px]">
                      <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] truncate">{record.goalStatus}</p>
                      <Info className="relative shrink-0 size-[16px] text-[#98a2b3] cursor-pointer hover:text-[#5d667b] transition-colors" strokeWidth={2} />
                    </div>
                  </td>
                  <td className="px-[16px] py-[12px]" style={{ width: '180px' }}>
                    <button className="font-medium leading-[20px] not-italic text-[#3a58ef] text-[14px] truncate hover:text-[#2d47d9] transition-colors cursor-pointer">
                      {record.supportedDocuments}
                    </button>
                  </td>
                  <td className="px-[16px] py-[12px] sticky right-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-l border-[#d0d5dd] transition-colors" style={{ width: '100px' }}>
                    <div className="flex items-center gap-[12px]">
                      <Eye className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
                      <MoreVertical className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
}
