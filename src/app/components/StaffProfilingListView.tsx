import { useState } from 'react';
import { Download, Upload } from 'lucide-react';

interface StaffProfilingListViewProps {
  onNavigationChange?: (view: string) => void;
  onSelectStaff?: (staffName: string) => void;
}

interface StaffProfileData {
  id: string;
  staffName: string;
  designation: string;
  department: string;
  location: string;
  joiningDate: string;
  status: 'Active' | 'Inactive' | 'On Leave';
}

export default function StaffProfilingListView({ onNavigationChange, onSelectStaff }: StaffProfilingListViewProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'inactive'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const staffData: StaffProfileData[] = [
    {
      id: 'SP-001',
      staffName: 'Yaswanth Kumar',
      designation: 'Senior Tax Accountant',
      department: 'Tax Department',
      location: 'India',
      joiningDate: '2023-01-15',
      status: 'Active'
    },
    {
      id: 'SP-002',
      staffName: 'Surya Prakash',
      designation: 'Tax Specialist',
      department: 'Tax Department',
      location: 'India',
      joiningDate: '2022-08-20',
      status: 'Active'
    },
    {
      id: 'SP-003',
      staffName: 'Dev Anand',
      designation: 'Junior Tax Accountant',
      department: 'Tax Department',
      location: 'India',
      joiningDate: '2024-03-10',
      status: 'Active'
    },
    {
      id: 'SP-004',
      staffName: 'Priya Sharma',
      designation: 'Audit Associate',
      department: 'Audit Department',
      location: 'India',
      joiningDate: '2023-06-01',
      status: 'On Leave'
    },
    {
      id: 'SP-005',
      staffName: 'Rahul Verma',
      designation: 'Payroll Specialist',
      department: 'HR Department',
      location: 'India',
      joiningDate: '2021-12-15',
      status: 'Inactive'
    }
  ];

  const filteredData = staffData.filter(staff => {
    const matchesTab = 
      activeTab === 'all' || 
      (activeTab === 'active' && staff.status === 'Active') || 
      (activeTab === 'inactive' && staff.status === 'Inactive');
    
    const matchesSearch = 
      staff.staffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-[#ecfdf3] text-[#027a48]';
      case 'Inactive':
        return 'bg-[#fef3f2] text-[#b42318]';
      case 'On Leave':
        return 'bg-[#fef6ee] text-[#b54708]';
      default:
        return 'bg-[#f2f4f7] text-[#344054]';
    }
  };

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full">
      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <p className="font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full whitespace-pre-wrap">
            Staff Profiling
          </p>
          <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[14px] w-full">
            Manage and view staff profiles and information
          </p>
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="bg-white border border-[#d0d5dd] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#f9fafb] transition-colors">
            <Upload className="w-[20px] h-[20px] text-[#344054]" />
            <p className="font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-[#344054]">
              Import
            </p>
          </div>
          <div className="bg-white border border-[#d0d5dd] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#f9fafb] transition-colors">
            <Download className="w-[20px] h-[20px] text-[#344054]" />
            <p className="font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-[#344054]">
              Export
            </p>
          </div>
          <div className="bg-[#3a58ef] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#2d47d1] transition-colors">
            <p className="font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white">
              Add New Staff
            </p>
          </div>
        </div>
      </div>

      {/* Search and Tabs */}
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        {/* Search Bar */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Search by name, designation, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-[14px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#3a58ef] focus:border-transparent"
          />
        </div>

        {/* Tabs */}
        <div className="content-stretch flex items-start mb-[-2px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div 
              className="content-stretch flex items-start px-[16px] py-[8px] relative shrink-0 cursor-pointer"
              onClick={() => setActiveTab('all')}
            >
              <p className={`font-medium leading-[20px] not-italic relative shrink-0 text-[14px] ${activeTab === 'all' ? 'text-[#3a58ef]' : 'text-[#5d667b]'}`}>
                All Staff
              </p>
            </div>
            <div className={`${activeTab === 'all' ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'} h-px shrink-0 w-full`} />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div 
              className="content-stretch flex items-start px-[16px] py-[8px] relative shrink-0 cursor-pointer"
              onClick={() => setActiveTab('active')}
            >
              <p className={`font-medium leading-[20px] not-italic relative shrink-0 text-[14px] ${activeTab === 'active' ? 'text-[#3a58ef]' : 'text-[#5d667b]'}`}>
                Active
              </p>
            </div>
            <div className={`${activeTab === 'active' ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'} h-px shrink-0 w-full`} />
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div 
              className="content-stretch flex items-start px-[16px] py-[8px] relative shrink-0 cursor-pointer"
              onClick={() => setActiveTab('inactive')}
            >
              <p className={`font-medium leading-[20px] not-italic relative shrink-0 text-[14px] ${activeTab === 'inactive' ? 'text-[#3a58ef]' : 'text-[#5d667b]'}`}>
                Inactive
              </p>
            </div>
            <div className={`${activeTab === 'inactive' ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'} h-px shrink-0 w-full`} />
          </div>
          <div className="basis-0 grow h-px bg-[#eaecf0] self-end" />
        </div>
      </div>

      {/* Table */}
      <div className="relative shrink-0 w-full overflow-x-auto flex-1">
        <table className="border-collapse w-full" style={{ minWidth: '900px' }}>
          <thead>
            <tr className="bg-[#f9fafb]">
              <th className="px-[24px] py-[12px] text-left border-b border-[#eaecf0] sticky left-0 z-[2] bg-[#f9fafb] border-r border-[#d0d5dd]">
                <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase whitespace-nowrap">
                  Staff ID
                </p>
              </th>
              <th className="px-[24px] py-[12px] text-left border-b border-[#eaecf0] min-w-[160px]">
                <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                  Staff Name
                </p>
              </th>
              <th className="px-[24px] py-[12px] text-left border-b border-[#eaecf0] min-w-[160px]">
                <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                  Designation
                </p>
              </th>
              <th className="px-[24px] py-[12px] text-left border-b border-[#eaecf0] min-w-[140px]">
                <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                  Department
                </p>
              </th>
              <th className="px-[24px] py-[12px] text-left border-b border-[#eaecf0] min-w-[100px]">
                <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                  Location
                </p>
              </th>
              <th className="px-[24px] py-[12px] text-left border-b border-[#eaecf0] min-w-[120px]">
                <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                  Joining Date
                </p>
              </th>
              <th className="px-[24px] py-[12px] text-left border-b border-[#eaecf0] min-w-[100px]">
                <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                  Status
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((staff) => (
              <tr
                key={staff.id}
                className="group border-b border-[#eaecf0] hover:bg-[#f9fafb] transition-colors"
              >
                <td className="px-[24px] py-[16px] sticky left-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-r border-[#d0d5dd] transition-colors">
                  <p className="font-normal leading-[24px] not-italic text-[14px] text-[#101828] truncate">
                    {staff.id}
                  </p>
                </td>
                <td className="px-[24px] py-[16px] w-[250px]">
                  <p className="font-medium leading-[20px] not-italic text-[14px] text-[#101828] cursor-pointer hover:text-[#3a58ef] hover:underline transition-colors" onClick={() => onSelectStaff?.(staff.staffName)}>
                    {staff.staffName}
                  </p>
                </td>
                <td className="px-[24px] py-[16px]">
                  <p className="font-normal leading-[24px] not-italic text-[14px] text-[#101828] truncate">
                    {staff.designation}
                  </p>
                </td>
                <td className="px-[24px] py-[16px]">
                  <p className="font-normal leading-[24px] not-italic text-[14px] text-[#101828] truncate">
                    {staff.department}
                  </p>
                </td>
                <td className="px-[24px] py-[16px]">
                  <p className="font-normal leading-[24px] not-italic text-[14px] text-[#101828] truncate">
                    {staff.location}
                  </p>
                </td>
                <td className="px-[24px] py-[16px]">
                  <p className="font-normal leading-[24px] not-italic text-[14px] text-[#101828] truncate">
                    {new Date(staff.joiningDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                </td>
                <td className="px-[24px] py-[16px]">
                  <div className={`inline-flex items-center px-[8px] py-[2px] rounded-[16px] ${getStatusColor(staff.status)}`}>
                    <p className="font-medium leading-[18px] not-italic text-[12px]">
                      {staff.status}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer with count */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full border-t border-[#eaecf0] pt-[16px]">
        <p className="font-normal leading-[20px] not-italic text-[14px] text-[#5d667b]">
          Showing {filteredData.length} of {staffData.length} staff members
        </p>
      </div>
    </div>
  );
}