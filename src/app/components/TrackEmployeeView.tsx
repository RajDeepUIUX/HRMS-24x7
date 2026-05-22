import { useState } from 'react';
import { Search, Filter, Eye, Bell, CheckCircle, Info, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface TrackEmployeeViewProps {
  onNavigationChange: (view: string) => void;
}

interface Employee {
  id: string;
  name: string;
  avatar: string;
  designation: string;
  completedTasks: string;
  lastActivity: string;
  feedback: string;
  assignedCategories: string[];
  actions: string[];
}

const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Rajnesh Patel',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    designation: 'Audit Specialist',
    completedTasks: '-',
    lastActivity: '-',
    feedback: '-',
    assignedCategories: [],
    actions: ['assign']
  },
  {
    id: '2',
    name: 'Rakhi Dhaliwal',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6d1b98d?w=100&h=100&fit=crop&crop=face',
    designation: 'Audit Associate',
    completedTasks: '-',
    lastActivity: '-',
    feedback: '-',
    assignedCategories: [],
    actions: ['assign']
  },
  {
    id: '3',
    name: 'Amrit Dutta',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    designation: 'Sr. Accountant',
    completedTasks: '-',
    lastActivity: '-',
    feedback: '-',
    assignedCategories: [],
    actions: ['assign']
  },
  {
    id: '4',
    name: 'Kasturba Kamda...',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    designation: 'Audit Specialist',
    completedTasks: '3/12',
    lastActivity: 'Dec 24,2024',
    feedback: 'Pending',
    assignedCategories: ['IT Training', 'SOPs'],
    actions: ['view', 'notify', 'check']
  },
  {
    id: '5',
    name: 'Krishna Chauhan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    designation: 'Audit Associate',
    completedTasks: '15/15',
    lastActivity: 'Dec 24,2024',
    feedback: '-',
    assignedCategories: ['Onboarding'],
    actions: ['view', 'notify', 'check']
  },
  {
    id: '6',
    name: 'Srinivasan Anand',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    designation: 'Sr. Tax Manager',
    completedTasks: '20/22',
    lastActivity: 'Dec 19,2024',
    feedback: '-',
    assignedCategories: ['SOPs'],
    actions: ['view', 'notify', 'check']
  },
  {
    id: '7',
    name: 'Darlene Robertson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    designation: 'Audit Associate',
    completedTasks: '8/11',
    lastActivity: 'Dec 17,2024',
    feedback: '-',
    assignedCategories: ['Onboarding', 'SOPs'],
    actions: ['view', 'notify', 'check']
  },
  {
    id: '8',
    name: 'Pushpa Ray',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6d1b98d?w=100&h=100&fit=crop&crop=face',
    designation: 'Audit Associate',
    completedTasks: '12/12',
    lastActivity: 'Dec 11,2024',
    feedback: 'View',
    assignedCategories: ['IT Training', 'Onboarding', '+2'],
    actions: ['view', 'notify', 'check']
  },
  {
    id: '9',
    name: 'Urmi Kale',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    designation: 'Audit Associate',
    completedTasks: '6/8',
    lastActivity: 'Nov 28,2024',
    feedback: '-',
    assignedCategories: ['Onboarding', 'SOPs'],
    actions: ['view', 'notify', 'check']
  },
  {
    id: '10',
    name: 'Falguni Hans',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    designation: 'Sr. Tax Manager',
    completedTasks: '2/11',
    lastActivity: 'Nov 26,2024',
    feedback: '-',
    assignedCategories: ['SOPs'],
    actions: ['view', 'notify', 'check']
  }
];

export default function TrackEmployeeView({ onNavigationChange }: TrackEmployeeViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [activeTab, setActiveTab] = useState('track-employee');

  const totalItems = 500; // Mock total
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderTasksWithInfo = (tasks: string) => {
    if (tasks === '-') {
      return <span className="text-[#344054] text-[14px]">-</span>;
    }
    return (
      <div className="flex items-center gap-[10px]">
        <span className="text-[#344054] text-[14px] w-[40px]">{tasks}</span>
        <Info className="h-[20px] w-[20px] text-[#5d667b]" />
      </div>
    );
  };

  const renderCategories = (categories: string[]) => {
    if (categories.length === 0) {
      return <span className="text-[#344054] text-[14px]">-</span>;
    }
    
    return (
      <div className="flex gap-[5px] flex-wrap">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="bg-[#f2f4f7] px-[10px] py-[6px] rounded-[100px] h-[26px] flex items-center justify-center"
          >
            <span className="text-[#2a3343] text-[12px] font-normal leading-[18px]">{category}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderActions = (actions: string[]) => {
    if (actions.includes('assign')) {
      return (
        <div className="flex items-center justify-center h-[50px] px-[12px]">
          <button className="bg-[#ebeefd] text-[#3a58ef] px-[14px] py-[8px] rounded-[4px] text-[14px] leading-[20px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex-1">
            Assign
          </button>
        </div>
      );
    }
    
    return (
      <div className="flex items-center gap-[12px] px-[16px] py-[12px]">
        <Eye className="h-[20px] w-[20px] text-[#5d667b] cursor-pointer" />
        <Bell className="h-[20px] w-[20px] text-[#5d667b] cursor-pointer" />
        <CheckCircle className="h-[20px] w-[20px] text-[#5d667b] cursor-pointer" />
      </div>
    );
  };

  return (
    <div className="bg-white box-border flex flex-col gap-[16px] h-[872px] isolate items-center p-[24px] rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-[1092px]">
      {/* Breadcrumbs */}
      <div className="flex items-center justify-between w-[1044px]">
        <div className="flex flex-col gap-[4px] flex-1">
          <div className="flex items-center gap-[4px]">
            <span className="text-[#98a2b3] text-[12px] font-medium leading-[18px]">Human Resources</span>
            <ChevronRight className="h-[16px] w-[16px] text-[#1d2939]" />
            <span className="text-[#344054] text-[12px] font-medium leading-[18px]">Onboarding</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-col items-start w-full relative">
        <div className="flex items-start mb-[-2px] relative z-[2]">
          <div 
            className={`flex items-start px-[16px] py-[8px] cursor-pointer ${
              activeTab === 'all-resources' ? 'text-[#3a58ef]' : 'text-[#5d667b]'
            }`}
            onClick={() => setActiveTab('all-resources')}
          >
            <span className="text-[14px] font-medium leading-[20px]">All Resources</span>
          </div>
          <div 
            className={`flex items-start px-[16px] py-[8px] cursor-pointer ${
              activeTab === 'track-employee' ? 'text-[#3a58ef]' : 'text-[#5d667b]'
            }`}
            onClick={() => setActiveTab('track-employee')}
          >
            <span className="text-[14px] font-medium leading-[20px]">Track Employee</span>
          </div>
        </div>
        <div className="h-[2px] w-full bg-[#eaecf0] mb-[-2px]" />
        {activeTab === 'track-employee' && (
          <div className="h-[1px] w-[140px] bg-[#3a58ef] ml-[125px]" />
        )}
      </div>

      {/* Header Section */}
      <div className="flex items-center justify-between w-[1044px]">
        <div className="flex flex-col gap-[4px] flex-1">
          <h1 className="text-[#101828] text-[24px] font-semibold leading-[32px]">Onboarding Status</h1>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="bg-gray-50 relative rounded-[4px] w-[298px] border border-[#eaecf0]">
            <div className="flex items-center justify-between px-[16px] py-[10px]">
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent text-[#5d667b] text-[14px] leading-[20px] outline-none flex-1"
              />
              <Search className="h-[20px] w-[20px] text-[#5d667b]" />
            </div>
          </div>
          <button className="bg-[#3a58ef] p-[10px] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center justify-center">
            <Filter className="h-[20px] w-[20px] text-white" />
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="flex flex-col items-start flex-1 w-full rounded-[8px] border border-[#f2f2f2] overflow-hidden">
        <div className="flex w-full">
          {/* Staff Name Column */}
          <div className="flex flex-col w-[200px]">
            <div className="bg-[#ebeefd] h-[42px] flex items-center px-[16px] py-[8px] sticky top-0">
              <span className="text-[#1d2939] text-[12px] font-semibold leading-[18px] flex-1">Staff Name</span>
            </div>
            {mockEmployees.map((employee) => (
              <div key={employee.id} className="h-[50px] flex items-center px-[16px] py-[12px] border-b border-[#f2f2f2] gap-[10px]">
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
                <span className="text-[#344054] text-[14px] leading-[20px] flex-1">{employee.name}</span>
                <div className="w-0 h-[36.5px] border-r border-[#d0d5dd]" />
              </div>
            ))}
          </div>

          {/* Designation Column */}
          <div className="flex flex-col w-[147.167px]">
            <div className="bg-[#ebeefd] h-[42px] flex items-center px-[16px] py-[8px]">
              <span className="text-[#1d2939] text-[12px] font-semibold leading-[18px] flex-1">Designation</span>
            </div>
            {mockEmployees.map((employee) => (
              <div key={employee.id} className="h-[50px] flex items-center px-[16px] py-[12px] border-b border-[#f2f2f2]">
                <span className="text-[#344054] text-[14px] leading-[20px] flex-1 truncate">{employee.designation}</span>
              </div>
            ))}
          </div>

          {/* Completed Task Column */}
          <div className="flex flex-col w-[127px]">
            <div className="bg-[#ebeefd] h-[42px] flex items-center px-[16px] py-[8px]">
              <span className="text-[#1d2939] text-[12px] font-semibold leading-[18px] flex-1">Completed Task</span>
            </div>
            {mockEmployees.map((employee) => (
              <div key={employee.id} className="h-[50px] flex items-center px-[16px] py-[12px] border-b border-[#f2f2f2]">
                {renderTasksWithInfo(employee.completedTasks)}
              </div>
            ))}
          </div>

          {/* Last Activity On Column */}
          <div className="flex flex-col w-[125px]">
            <div className="bg-[#ebeefd] h-[42px] flex items-center px-[16px] py-[8px]">
              <span className="text-[#1d2939] text-[12px] font-semibold leading-[18px] flex-1">Last Activity On</span>
            </div>
            {mockEmployees.map((employee) => (
              <div key={employee.id} className="h-[50px] flex items-center px-[16px] py-[12px] border-b border-[#f2f2f2]">
                <span className="text-[#344054] text-[14px] leading-[20px] flex-1 truncate">{employee.lastActivity}</span>
              </div>
            ))}
          </div>

          {/* Feedback Column */}
          <div className="flex flex-col flex-1">
            <div className="bg-[#ebeefd] h-[42px] flex items-center px-[16px] py-[8px] sticky top-0">
              <span className="text-[#1d2939] text-[12px] font-semibold leading-[18px] flex-1">Feedback</span>
            </div>
            {mockEmployees.map((employee) => (
              <div key={employee.id} className="h-[50px] flex items-center px-[16px] py-[12px] border-b border-[#f2f2f2]">
                <span className={`text-[14px] leading-[20px] flex-1 truncate ${
                  employee.feedback === 'View' ? 'text-[#3a58ef]' : 'text-[#344054]'
                }`}>
                  {employee.feedback}
                </span>
              </div>
            ))}
          </div>

          {/* Assigned Category Column */}
          <div className="flex flex-col">
            <div className="bg-[#ebeefd] h-[42px] flex items-center px-[16px] py-[8px] sticky top-0">
              <span className="text-[#1d2939] text-[12px] font-semibold leading-[18px] flex-1">Assigned Category</span>
            </div>
            {mockEmployees.map((employee) => (
              <div key={employee.id} className="h-[50px] flex items-center px-[16px] py-[12px] border-b border-[#f2f2f2]">
                {renderCategories(employee.assignedCategories)}
              </div>
            ))}
          </div>

          {/* Action Column */}
          <div className="flex flex-col border-l border-[#f2f2f2]">
            <div className="bg-[#ebeefd] h-[42px] flex items-center px-[16px] py-[8px]">
              <span className="text-[#1d2939] text-[12px] font-semibold leading-[18px] flex-1">Action</span>
            </div>
            {mockEmployees.map((employee) => (
              <div key={employee.id} className="h-[50px] border-b border-[#f2f2f2]">
                {renderActions(employee.actions)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-white h-[60px] w-full rounded-bl-[12px] rounded-br-[12px] shadow-[0px_-4px_21px_0px_rgba(0,0,0,0.04)] flex items-center justify-between px-[24px] py-[16px]">
        <div className="flex items-center gap-[12px] w-[400px]">
          <span className="text-[#5d667b] text-[16px] leading-[24px]">Showing</span>
          <div className="bg-white border border-[#eaecf0] rounded-[4px] px-[12px] py-[8px] flex items-center gap-[4px]">
            <span className="text-[#1d2939] text-[16px] font-medium leading-[1.25] w-[26px]">{itemsPerPage}</span>
            <ChevronDown className="h-[18px] w-[18px] text-[#5d667b]" />
          </div>
          <span className="text-[#1d2939] text-[16px] font-semibold leading-[24px]">of {totalItems}</span>
          <span className="text-[#5d667b] text-[16px] leading-[24px]">Events</span>
        </div>

        <div className="flex items-center gap-[12px]">
          <button className="bg-white border border-[#eaecf0] rounded-[8px] p-[8px] flex items-center justify-center">
            <ChevronLeft className="h-[20px] w-[20px] text-[#5d667b]" />
            <ChevronLeft className="h-[20px] w-[20px] text-[#5d667b] -ml-[8px]" />
          </button>
          <button className="bg-white border border-[#eaecf0] rounded-[8px] p-[8px] flex items-center justify-center">
            <ChevronLeft className="h-[20px] w-[20px] text-[#5d667b]" />
          </button>
          <div className="flex items-center px-[8px]">
            <div className="bg-white border border-[#98a2b3] rounded-[8px] px-[12px] py-[8px]">
              <span className="text-[#1d2939] text-[16px] font-medium leading-[1.25] w-[25px] text-center">1</span>
            </div>
            <span className="text-[#5d667b] text-[16px] leading-[1.25] px-[12px]">of 25 pages</span>
          </div>
          <button className="bg-white border border-[#eaecf0] rounded-[8px] p-[8px] flex items-center justify-center">
            <ChevronRight className="h-[20px] w-[20px] text-[#5d667b]" />
          </button>
          <button className="bg-white border border-[#eaecf0] rounded-[8px] p-[8px] flex items-center justify-center">
            <ChevronRight className="h-[20px] w-[20px] text-[#5d667b]" />
            <ChevronRight className="h-[20px] w-[20px] text-[#5d667b] -ml-[8px]" />
          </button>
        </div>
      </div>
    </div>
  );
}