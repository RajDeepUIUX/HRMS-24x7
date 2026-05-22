import React, { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-2lp45usntd";
import { Eye, FileText, Search, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MyStaffViewProps {
  onNavigationChange?: (view: string) => void;
}

interface StaffMember {
  id: number;
  name: string;
  avatar: string;
  level: string;
  designation: string;
  joiningDate: string;
  engagementType: string;
  location: string;
  status: 'Active' | 'Inactive';
}

const initialStaffData: StaffMember[] = [
  { id: 1, name: 'Deepa Varma', avatar: 'female7', level: 'Level 1', designation: 'Sr. Tax Manager', joiningDate: 'Nov 12, 2024', engagementType: 'Regular Staffing', location: 'Ahmedabad', status: 'Active' },
  { id: 2, name: 'Rekha Singhal', avatar: 'female5', level: 'Level 3', designation: 'Audit Associate', joiningDate: 'Nov 12, 2024', engagementType: 'Temporary Staffing', location: 'Ahmedabad', status: 'Inactive' },
  { id: 3, name: 'Amrit Dutta', avatar: 'male6', level: 'Level 3', designation: 'Sr. Accountant', joiningDate: 'Nov 12, 2024', engagementType: 'Regular Staffing', location: 'Kolkata', status: 'Active' },
  { id: 4, name: 'Krishna Chauhan', avatar: 'male7', level: 'Level 4', designation: 'Audit Associate', joiningDate: 'Nov 12, 2024', engagementType: 'Regular Staffing', location: 'Ahmedabad', status: 'Active' },
  { id: 5, name: 'Asturba Kamdar', avatar: 'female6', level: 'Level 2', designation: 'Sr. Accountant', joiningDate: 'Nov 12, 2024', engagementType: 'Regular Staffing', location: 'Delhi', status: 'Active' },
  { id: 6, name: 'Dhyaan Vasan Anand', avatar: 'male4', level: 'Level 1', designation: 'Audit Associate', joiningDate: 'Nov 12, 2024', engagementType: 'Temporary Staffing', location: 'Ahmedabad', status: 'Inactive' },
  { id: 7, name: 'Emilene Robertson', avatar: 'female4', level: 'Level 3', designation: 'Sr. Accountant', joiningDate: 'Nov 12, 2024', engagementType: 'Regular Staffing', location: 'Baroda', status: 'Active' },
  { id: 8, name: 'Trishpa Ray', avatar: 'female3', level: 'Level 1', designation: 'Audit Associate', joiningDate: 'Nov 12, 2024', engagementType: 'Regular Staffing', location: 'Surat', status: 'Inactive' },
  { id: 9, name: 'Kanji Kale', avatar: 'male5', level: 'Level 2', designation: 'Sr. Tax Manager', joiningDate: 'Nov 12, 2024', engagementType: 'Regular Staffing', location: 'Kolkata', status: 'Active' },
  { id: 10, name: 'Soumurni Hans', avatar: 'female2', level: 'Level 2', designation: 'Audit Associate', joiningDate: 'Nov 12, 2024', engagementType: 'Regular Staffing', location: 'Baroda', status: 'Active' },
  { id: 11, name: 'Ramlesh Kumar', avatar: 'male3', level: 'Level 3', designation: 'Audit Associate', joiningDate: 'Nov 12, 2024', engagementType: 'Temporary Staffing', location: 'Baroda', status: 'Inactive' },
  { id: 12, name: 'Sameer Shetty', avatar: 'male1', level: 'Level 4', designation: 'Sr. Tax Manager', joiningDate: 'Nov 12, 2024', engagementType: 'Regular Staffing', location: 'Hydrabad', status: 'Inactive' },
  { id: 13, name: 'Rohit Shetty', avatar: 'male2', level: 'Level 3', designation: 'Sr. Tax Manager', joiningDate: 'Nov 12, 2024', engagementType: 'Regular Staffing', location: 'Surat', status: 'Inactive' },
];

export default function MyStaffView({ onNavigationChange }: MyStaffViewProps) {
  const [staffData, setStaffData] = useState<StaffMember[]>(initialStaffData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('my-staff-data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setStaffData(parsed);
      } catch (e) {
        console.error('Failed to parse staff data:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('my-staff-data', JSON.stringify(staffData));
  }, [staffData]);

  const filteredData = staffData.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.level.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = 500;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentData = filteredData.slice(0, itemsPerPage);

  function CaretRight() {
    return (
      <div className="relative shrink-0 size-[16px]" data-name="CaretRight">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="CaretRight">
            <path d={svgPaths.p16897c00} fill="var(--fill-0, #1D2939)" id="Vector" />
          </g>
        </svg>
      </div>
    );
  }

  function Breadcrums() {
    return (
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Breadcrums">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap whitespace-pre">Human Resources</p>
        <CaretRight />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">My Staff</p>
      </div>
    );
  }

  function HeadingSubHeading() {
    return (
      <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Heading & Sub Heading">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full">My Staff</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#98a2b3] text-[12px] w-full">Manage and view in depth data for your staff.</p>
      </div>
    );
  }

  function LeftSide() {
    return (
      <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left Side">
        <Breadcrums />
        <HeadingSubHeading />
      </div>
    );
  }

  function SearchButton() {
    return (
      <div className="bg-gray-50 relative rounded-[4px] shrink-0 w-[298px]" data-name="Button">
        <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[298px]">
          <input
            type="text"
            placeholder="Search here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic flex-1 bg-transparent outline-none text-[#5d667b] text-[14px]"
          />
          <Search className="relative shrink-0 size-[20px] text-[#5d667b]" data-name="MagnifyingGlass" strokeWidth={2} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    );
  }

  function FilterButton() {
    return (
      <div
        className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#2d47d9] transition-colors"
        data-name="Icon Button"
        onClick={() => setShowFilterModal(!showFilterModal)}
      >
        <Filter className="relative shrink-0 size-[20px] text-white" data-name="Funnel" strokeWidth={2} />
      </div>
    );
  }

  function RightSide() {
    return (
      <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right Side">
        <SearchButton />
        <FilterButton />
      </div>
    );
  }

  function BodyHeader() {
    return (
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Body Header">
        <LeftSide />
        <RightSide />
      </div>
    );
  }

  function AvatarComponent({ type, name }: { type: string; name: string }) {
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

  /* ── Shared cell classes ── */
  const thBase = "font-['Inter:Semi_Bold',sans-serif] font-semibold text-[12px] leading-[18px] px-[16px] py-[8px] text-left whitespace-nowrap border-b border-[#f2f2f2] h-[42px]";
  const tdBase = "font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#344054] leading-[20px] px-[16px] py-[12px] whitespace-nowrap border-b border-[#f2f2f2] h-[50px]";

  function Pagination() {
    return (
      <div className="content-stretch flex gap-[12px] items-center justify-between relative shrink-0 w-full pt-[16px]">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Showing</p>
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0">
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic text-[#1d2939] text-[16px] bg-transparent outline-none cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap whitespace-pre">of {totalItems}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Events</p>
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
              className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 w-[60px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#1d2939] text-[16px] text-center outline-none border border-[#d0d5dd]"
            />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.25] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">of {totalPages} pages</p>
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

      {/* Table — flex-1 fills remaining height so pagination stays at bottom */}
      <div className="flex-1 min-h-0 overflow-auto w-full">
        <table className="border-collapse w-full" style={{ minWidth: '900px' }}>
          <thead>
            <tr className="bg-[#ebeefd]">
              {/* Staff Name — sticky left */}
              <th className={`${thBase} sticky left-0 z-[2] bg-[#ebeefd] text-[#101828] w-[220px] border-r border-[#d0d5dd]`}>
                Staff Name
              </th>
              <th className={`${thBase} text-[#1d2939] min-w-[110px]`}>Level</th>
              <th className={`${thBase} text-[#1d2939] min-w-[160px]`}>Designation</th>
              <th className={`${thBase} text-[#1d2939] min-w-[140px]`}>Joining Date</th>
              <th className={`${thBase} text-[#1d2939] min-w-[170px]`}>Engagement Type</th>
              <th className={`${thBase} text-[#1d2939] min-w-[130px]`}>Location</th>
              <th className={`${thBase} text-[#1d2939] min-w-[110px]`}>Status</th>
              {/* Action — sticky right */}
              <th className={`${thBase} sticky right-0 z-[2] bg-[#ebeefd] text-[#1d2939] w-[100px] border-l border-[#d0d5dd]`}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((staff) => (
              <tr key={staff.id} className="group hover:bg-[#f9fafb] transition-colors">
                {/* Staff Name — sticky left */}
                <td className={`${tdBase} sticky left-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-r border-[#d0d5dd] transition-colors`}>
                  <div className="flex items-center gap-[10px]">
                    <AvatarComponent type={staff.avatar} name={staff.name} />
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-[#344054] leading-[20px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px]">
                      {staff.name}
                    </span>
                  </div>
                </td>
                <td className={tdBase}>{staff.level}</td>
                <td className={tdBase}>{staff.designation}</td>
                <td className={tdBase}>{staff.joiningDate}</td>
                <td className={tdBase}>{staff.engagementType}</td>
                <td className={tdBase}>{staff.location}</td>
                <td className={`${tdBase}`}>
                  <div className={`inline-flex px-[10px] py-[2px] rounded-[16px] ${staff.status === 'Active' ? 'bg-[#ecfdf3]' : 'bg-[#f2f4f7]'}`}>
                    <span className={`font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[12px] whitespace-nowrap ${staff.status === 'Active' ? 'text-[#027a48]' : 'text-[#344054]'}`}>
                      {staff.status}
                    </span>
                  </div>
                </td>
                {/* Action — sticky right */}
                <td className={`${tdBase} sticky right-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-l border-[#d0d5dd] transition-colors`}>
                  <div className="flex items-center gap-[12px]">
                    <Eye className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
                    <FileText className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
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
