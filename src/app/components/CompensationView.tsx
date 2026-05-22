import React, { useState, useEffect } from 'react';
import { Eye, FileText, Download, Search, Filter } from 'lucide-react';

interface CompensationViewProps {
  onNavigationChange?: (view: string) => void;
}

interface StaffCompensation {
  id: number;
  name: string;
  avatar: string;
  designation: string;
  currentNetSalary: number;
  yearlyCompensation: number;
  grossRemuneration: number;
  lastRevision: string;
}

const initialCompensationData: StaffCompensation[] = [
  { id: 1, name: 'Deepa Varma', avatar: 'female7', designation: 'Sr. Tax Manager', currentNetSalary: 70000, yearlyCompensation: 840000, grossRemuneration: 9660, lastRevision: 'Jan 01, 2024' },
  { id: 2, name: 'Sushil Dhaliwal', avatar: 'male8', designation: 'Audit Associate', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 3, name: 'Amrit Dutta', avatar: 'male6', designation: 'Sr. Accountant', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 4, name: 'Asturba Kam', avatar: 'female6', designation: 'Audit Associate', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 5, name: 'Krishna Chau', avatar: 'male7', designation: 'Sr. Accountant', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 6, name: 'Dhyaan Vasan Ana', avatar: 'male4', designation: 'Audit Associate', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 7, name: 'Emilene Robet', avatar: 'female4', designation: 'Sr. Accountant', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 8, name: 'Trishpa Ray', avatar: 'female3', designation: 'Audit Associate', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 9, name: 'Kanji Kale', avatar: 'male5', designation: 'Sr. Tax Manager', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 10, name: 'Soumurni Hans', avatar: 'female2', designation: 'Audit Associate', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 11, name: 'Ramlesh Kumar', avatar: 'male3', designation: 'Audit Associate', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 12, name: 'Sameer Shetty', avatar: 'male1', designation: 'Sr. Tax Manager', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
  { id: 13, name: 'Rohit Shetty', avatar: 'male2', designation: 'Sr. Tax Manager', currentNetSalary: 50000, yearlyCompensation: 600000, grossRemuneration: 6900, lastRevision: 'Nov 12, 2023' },
];

export default function CompensationView({ onNavigationChange }: CompensationViewProps) {
  const [compensationData, setCompensationData] = useState<StaffCompensation[]>(initialCompensationData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('compensation-data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setCompensationData(parsed);
      } catch (e) {
        console.error('Failed to parse compensation data:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('compensation-data', JSON.stringify(compensationData));
  }, [compensationData]);

  const filteredData = compensationData.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = 500;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentData = filteredData.slice(0, itemsPerPage);

  const formatNumber = (num: number) => num.toLocaleString('en-IN');

  function AvatarComponent({ name }: { name: string }) {
    const colors = ['#3A58EF', '#F04438', '#12B76A', '#F79009', '#7F56D9', '#2E90FA'];
    const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
    const bgColor = colors[colorIndex];
    const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

    return (
      <div
        className="relative shrink-0 size-[32px] rounded-full flex items-center justify-center text-white font-semibold text-[14px]"
        style={{ backgroundColor: bgColor }}
      >
        {initials}
      </div>
    );
  }

  function BodyHeader() {
    return (
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap whitespace-pre">Human Resources</p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d="M6 12L10 8L6 4" stroke="#1D2939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">Compensation</p>
          </div>
          <p className="font-semibold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full">Compensation</p>
          <p className="font-medium leading-[18px] relative shrink-0 text-[#98a2b3] text-[12px] w-full">Manage and view detailed compensation data for your staff.</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
          <div className="bg-gray-50 relative rounded-[4px] shrink-0 w-[298px]">
            <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[298px]">
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="font-normal leading-[20px] not-italic flex-1 bg-transparent outline-none text-[#5d667b] text-[14px]"
              />
              <Search className="relative shrink-0 size-[20px] text-[#5d667b]" strokeWidth={2} />
            </div>
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
          <div
            className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#2d47d9] transition-colors"
            onClick={() => setShowFilterModal(!showFilterModal)}
          >
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
          <p className="font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap whitespace-pre">of {totalItems}</p>
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
            <p className="font-normal leading-[1.25] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">of {totalPages} pages</p>
          </div>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="relative shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
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
        <table className="border-collapse w-full" style={{ minWidth: '1000px' }}>
          <thead>
            <tr className="bg-[#ebeefd] h-[42px]">
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] sticky left-0 z-[2] bg-[#ebeefd] border-r border-[#d0d5dd] min-w-[180px] whitespace-nowrap">
                Staff Name
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[150px] whitespace-nowrap">
                Designation
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[160px] whitespace-nowrap">
                Current Net Salary (₹)
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[170px] whitespace-nowrap">
                Yearly Compensation (₹)
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[170px] whitespace-nowrap">
                Gross Remuneration ($)
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[120px] whitespace-nowrap">
                Last Revision
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] sticky right-0 z-[2] bg-[#ebeefd] border-l border-[#d0d5dd] whitespace-nowrap" style={{ width: '120px' }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((staff) => (
              <tr key={staff.id} className="group border-b border-[#f2f2f2] hover:bg-[#f9fafb] transition-colors">
                <td className="px-[16px] py-[12px] sticky left-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-r border-[#d0d5dd] transition-colors">
                  <div className="flex items-center gap-[10px]">
                    <AvatarComponent name={staff.name} />
                    <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] truncate">{staff.name}</p>
                  </div>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] truncate">{staff.designation}</p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{formatNumber(staff.currentNetSalary)}</p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{formatNumber(staff.yearlyCompensation)}</p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{formatNumber(staff.grossRemuneration)}</p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{staff.lastRevision}</p>
                </td>
                <td className="px-[16px] py-[12px] sticky right-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-l border-[#d0d5dd] transition-colors" style={{ width: '120px' }}>
                  <div className="flex items-center gap-[12px]">
                    <Eye className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
                    <FileText className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
                    <Download className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
}
