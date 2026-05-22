import React, { useState, useEffect } from 'react';
import { Eye, MoreVertical, Search, Filter } from 'lucide-react';

interface AttendanceManagementViewProps {
  onNavigationChange?: (view: string) => void;
}

interface AttendanceRecord {
  id: number;
  name: string;
  avatar: string;
  date: string;
  checkIn: string;
  checkOut: string;
  totalOfficeTime: string;
  overtime: string;
  workMode: 'WFH' | 'WFO' | 'Hybrid' | '';
  department: string;
}

const initialAttendanceData: AttendanceRecord[] = [
  { id: 1, name: 'Deepa Varma', avatar: 'female7', date: 'Dec 25, 2024', checkIn: '13:00', checkOut: '22:00', totalOfficeTime: '09:00', overtime: '-', workMode: 'WFH', department: 'Accounts' },
  { id: 2, name: 'Sushil Dhaliwal', avatar: 'male8', date: 'Dec 25, 2024', checkIn: '13:00', checkOut: '22:55', totalOfficeTime: '09:55', overtime: '00:55', workMode: 'WFO', department: 'Tax & Audit' },
  { id: 3, name: 'Amrit Dutta', avatar: 'male6', date: 'Dec 25, 2024', checkIn: '13:00', checkOut: '22:55', totalOfficeTime: '09:55', overtime: '00:55', workMode: 'WFO', department: 'Finance' },
  { id: 4, name: 'Asturba Kamdar', avatar: 'female6', date: 'Dec 25, 2024', checkIn: '13:00', checkOut: '22:55', totalOfficeTime: '09:55', overtime: '00:55', workMode: 'WFO', department: 'Product' },
  { id: 5, name: 'Krishna Chauhan', avatar: 'male7', date: 'Dec 25, 2024', checkIn: '-', checkOut: '-', totalOfficeTime: '-', overtime: '-', workMode: '', department: 'Accounts' },
  { id: 6, name: 'Dhyaan Vasan Anand', avatar: 'male4', date: 'Dec 25, 2024', checkIn: '13:00', checkOut: '22:55', totalOfficeTime: '09:55', overtime: '00:55', workMode: 'Hybrid', department: 'Finance' },
  { id: 7, name: 'Emilene Robertson', avatar: 'female4', date: 'Dec 25, 2024', checkIn: '13:00', checkOut: '22:55', totalOfficeTime: '09:55', overtime: '00:55', workMode: 'Hybrid', department: 'Accounts' },
  { id: 8, name: 'Trishpa Ray', avatar: 'female3', date: 'Dec 25, 2024', checkIn: '13:00', checkOut: '22:00', totalOfficeTime: '09:00', overtime: '-', workMode: 'WFO', department: 'Finance' },
  { id: 9, name: 'Kanji Kale', avatar: 'male5', date: 'Dec 25, 2024', checkIn: '13:00', checkOut: '18:00', totalOfficeTime: '05:00', overtime: '-', workMode: 'WFH', department: 'Finance' },
  { id: 10, name: 'Soumurni Hans', avatar: 'female2', date: 'Dec 25, 2024', checkIn: '13:00', checkOut: '18:00', totalOfficeTime: '05:00', overtime: '-', workMode: 'WFO', department: 'Tax & Audit' },
  { id: 11, name: 'Ramit Dutta', avatar: 'male3', date: 'Dec 25, 2024', checkIn: '13:00', checkOut: '22:00', totalOfficeTime: '09:00', overtime: '-', workMode: 'WFO', department: 'Tax & Audit' },
];

export default function AttendanceManagementView({ onNavigationChange }: AttendanceManagementViewProps) {
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>(initialAttendanceData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [activeTab, setActiveTab] = useState<'attendance' | 'request'>('attendance');

  useEffect(() => {
    const savedData = localStorage.getItem('attendance-data');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setAttendanceData(parsed);
      } catch (e) {
        console.error('Failed to parse attendance data:', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('attendance-data', JSON.stringify(attendanceData));
  }, [attendanceData]);

  const filteredData = attendanceData.filter(record =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = 500;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentData = filteredData.slice(0, itemsPerPage);

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

  function Breadcrums() {
    return (
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap whitespace-pre">Human Resources</p>
        <div className="relative shrink-0 size-[16px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d="M6 12L10 8L6 4" stroke="#1D2939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">Attendance Management</p>
      </div>
    );
  }

  function Tabs() {
    return (
      <div className="box-border content-stretch flex flex-col isolate items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full z-[3]">
        <div className="box-border content-stretch flex items-start mb-[-2px] relative shrink-0 z-[2]">
          <div
            className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer"
            onClick={() => setActiveTab('attendance')}
          >
            <div className="box-border content-stretch flex gap-[10px] items-start px-[16px] py-[8px] relative shrink-0">
              <p className={`font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${activeTab === 'attendance' ? 'text-[#3a58ef]' : 'text-[#5d667b]'}`}>
                Attendance
              </p>
            </div>
            <div className={`h-px shrink-0 w-full ${activeTab === 'attendance' ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'}`} />
          </div>

          <div
            className="content-stretch flex flex-col items-start relative shrink-0 cursor-pointer"
            onClick={() => setActiveTab('request')}
          >
            <div className="box-border content-stretch flex gap-[10px] items-start px-[16px] py-[8px] relative shrink-0">
              <p className={`font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${activeTab === 'request' ? 'text-[#3a58ef]' : 'text-[#5d667b]'}`}>
                Attendance Request
              </p>
            </div>
            <div className={`h-px shrink-0 w-full ${activeTab === 'request' ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'}`} />
          </div>
        </div>
        <div className="bg-[#eaecf0] h-[2px] mb-[-2px] shrink-0 w-full z-[1]" />
      </div>
    );
  }

  function TitleRow() {
    return (
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[6]">
        <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
          <Breadcrums />
          <p className="font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px]">
            {activeTab === 'attendance' ? 'Attendance' : 'Attendance Request'}
          </p>
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
              className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 w-[60px] font-semibold text-[#1d2939] text-[16px] text-center outline-none border border-[#d0d5dd]"
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

  const actionWidth = activeTab === 'request' ? '180px' : '100px';

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_0px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] w-full h-full">
      <Tabs />
      <TitleRow />

      {/* Table Container */}
      <div className="flex-1 min-h-0 overflow-auto w-full">
        <table className="border-collapse w-full" style={{ minWidth: activeTab === 'attendance' ? '1100px' : '1000px' }}>
          <thead>
            <tr className="bg-[#ebeefd] h-[42px]">
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] sticky left-0 z-[2] bg-[#ebeefd] border-r border-[#d0d5dd] whitespace-nowrap" style={{ width: '200px' }}>
                Staff Name
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[120px] whitespace-nowrap">
                Date
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[100px] whitespace-nowrap">
                Check In
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[100px] whitespace-nowrap">
                Check Out
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[140px] whitespace-nowrap">
                Total Office Time
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[100px] whitespace-nowrap">
                Overtime
              </th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[100px] whitespace-nowrap">
                Work Mode
              </th>
              {activeTab === 'attendance' && (
                <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[120px] whitespace-nowrap">
                  Department
                </th>
              )}
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] sticky right-0 z-[2] bg-[#ebeefd] border-l border-[#d0d5dd] whitespace-nowrap" style={{ width: actionWidth }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((record) => (
              <tr key={record.id} className="group border-b border-[#f2f2f2] hover:bg-[#f9fafb] transition-colors">
                <td className="px-[16px] py-[12px] sticky left-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-r border-[#d0d5dd] transition-colors" style={{ width: '200px' }}>
                  <div className="flex items-center gap-[10px]">
                    <AvatarComponent name={record.name} />
                    <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] truncate">{record.name}</p>
                  </div>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{record.date}</p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{record.checkIn}</p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{record.checkOut}</p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{record.totalOfficeTime}</p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{record.overtime}</p>
                </td>
                <td className="px-[16px] py-[12px]">
                  <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{record.workMode}</p>
                </td>
                {activeTab === 'attendance' && (
                  <td className="px-[16px] py-[12px]">
                    <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{record.department}</p>
                  </td>
                )}
                {activeTab === 'attendance' ? (
                  <td className="px-[16px] py-[12px] sticky right-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-l border-[#d0d5dd] transition-colors" style={{ width: '100px' }}>
                    <div className="flex items-center gap-[12px]">
                      <Eye className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
                      <MoreVertical className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
                    </div>
                  </td>
                ) : (
                  <td className="px-[16px] py-[12px] sticky right-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-l border-[#d0d5dd] transition-colors" style={{ width: '180px' }}>
                    <div className="flex items-center gap-[8px]">
                      <Eye className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
                      <button className="font-medium leading-[20px] not-italic text-[#3a58ef] text-[14px] hover:text-[#2d47d9] transition-colors cursor-pointer">
                        View Request
                      </button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
}
