import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, FileText, Clock, CheckCircle, XCircle, Eye, Edit3 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

// Mock data for leave requests
const mockLeaveRequests = [
  {
    id: 1,
    staffName: "Kasturba Kamdar",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c0c0?w=40&h=40&fit=crop&crop=face",
    startDate: "Dec 24, 2024",
    endDate: "Dec 24, 2024",
    days: "1 Day",
    leaveType: "Annual",
    status: "pending",
    canEdit: true
  },
  {
    id: 2,
    staffName: "Krishna Chauhan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    startDate: "Dec 20, 2024",
    endDate: "Dec 19, 2024",
    days: "5 Days",
    leaveType: "Unpaid",
    status: "pending",
    canEdit: true
  },
  {
    id: 3,
    staffName: "Srinivasan Anand",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    startDate: "Dec 17, 2024",
    endDate: "Dec 17, 2024",
    days: "3 Days",
    leaveType: "Annual",
    status: "pending",
    canEdit: true
  },
  {
    id: 4,
    staffName: "Darlene Robertson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    startDate: "Dec 17, 2024",
    endDate: "Dec 17, 2024",
    days: "1 Day",
    leaveType: "Unpaid",
    status: "pending",
    canEdit: true
  },
  {
    id: 5,
    staffName: "Pushpa Ray",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face",
    startDate: "Dec 11, 2024",
    endDate: "Dec 11, 2024",
    days: "1 Day",
    leaveType: "Sick",
    status: "rejected",
    canEdit: false
  },
  {
    id: 6,
    staffName: "Urmi Kale",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    startDate: "Nov 25, 2024",
    endDate: "Nov 28, 2024",
    days: "4 Days",
    leaveType: "Unpaid",
    status: "approved",
    canEdit: true
  },
  {
    id: 7,
    staffName: "Falguni Hans",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    startDate: "Nov 25, 2024",
    endDate: "Nov 26, 2024",
    days: "2 Days",
    leaveType: "Sick",
    status: "approved",
    canEdit: false
  }
];

type LeaveStatus = 'pending' | 'approved' | 'rejected';
type LeaveType = 'Annual' | 'Sick' | 'Unpaid';

interface LeaveRequest {
  id: number;
  staffName: string;
  avatar: string;
  startDate: string;
  endDate: string;
  days: string;
  leaveType: LeaveType;
  status: LeaveStatus;
  canEdit: boolean;
}

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count, icon, color }) => (
  <div className="bg-gray-50 border border-[#e3e0fb] rounded-lg p-4 h-[92px]">
    <div className="flex items-start justify-between h-full">
      <div className="flex flex-col justify-between h-[60px]">
        <h3 className="text-[#5d667b] text-lg font-medium capitalize leading-7">{title}</h3>
        <div className="text-[#101828] text-2xl font-bold leading-8">
          {count.toString().padStart(2, '0')}
        </div>
      </div>
      <div className={`${color} w-[46px] h-[46px] rounded flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  </div>
);

const StatusBadge: React.FC<{ status: LeaveStatus }> = ({ status }) => {
  const statusConfig = {
    pending: {
      bg: "bg-[#fffaeb]",
      border: "border-[#fee4e2]",
      text: "text-[#f79009]",
      label: "Pending"
    },
    approved: {
      bg: "bg-[#ecfdf3]",
      border: "border-[#ecfdf3]",
      text: "text-[#12b76a]",
      label: "Approved"
    },
    rejected: {
      bg: "bg-[#fef3f2]",
      border: "border-[#fee4e2]",
      text: "text-[#d92d20]",
      label: "Rejected"
    }
  };

  const config = statusConfig[status];

  return (
    <div className={`${config.bg} ${config.border} border-[0.817px] rounded px-2 py-1 inline-flex items-center`}>
      <span className={`${config.text} text-xs font-medium text-center`}>
        {config.label}
      </span>
    </div>
  );
};

export default function LeaveManagementView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<LeaveStatus | 'all'>('all');
  const [leaveTypeFilter, setLeaveTypeFilter] = useState<LeaveType | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // Calculate dashboard statistics
  const dashboardStats = useMemo(() => {
    const total = mockLeaveRequests.length;
    const pending = mockLeaveRequests.filter(req => req.status === 'pending').length;
    const approved = mockLeaveRequests.filter(req => req.status === 'approved').length;
    const rejected = mockLeaveRequests.filter(req => req.status === 'rejected').length;

    return { total, pending, approved, rejected };
  }, []);

  // Filter and search leave requests
  const filteredRequests = useMemo(() => {
    return mockLeaveRequests.filter(request => {
      const matchesSearch = request.staffName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
      const matchesType = leaveTypeFilter === 'all' || request.leaveType === leaveTypeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
    });
  }, [searchTerm, statusFilter, leaveTypeFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRequests = filteredRequests.slice(startIndex, startIndex + itemsPerPage);

  const handleViewRequest = (id: number) => {
    console.log('View request:', id);
  };

  const handleEditRequest = (id: number) => {
    console.log('Edit request:', id);
  };

  const handleGenerateReport = () => {
    console.log('Generate leave report');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm h-full flex flex-col p-6">
      <div className="flex flex-col gap-4 w-full h-full">
        {/* Header */}
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col gap-1">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1">
              <span className="text-[#98a2b3] text-xs font-medium leading-[18px]">Human Resources</span>
              <ChevronDown className="w-4 h-4 text-[#1D2939] rotate-[-90deg]" />
              <span className="text-[#344054] text-xs font-medium leading-[18px]">Leave Management</span>
            </div>
            
            {/* Title and subtitle */}
            <h1 className="text-[#101828] text-2xl font-semibold leading-8">Leave Management</h1>
            <p className="text-[#98a2b3] text-xs font-medium leading-[18px]">
              Manage and view detailed compensation data for your staff.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* FY Dropdown */}
            <div className="bg-gray-50 border border-[#eaecf0] rounded px-4 py-2.5 flex items-center gap-2">
              <span className="text-[#101828] text-sm font-normal leading-5">FY 2024-2025</span>
              <ChevronDown className="w-5 h-5 text-[#5D667B]" />
            </div>

            {/* Generate Report Button */}
            <Button 
              onClick={handleGenerateReport}
              className="bg-[#3a58ef] text-white px-4 py-2.5 rounded shadow-sm hover:bg-[#2947dd] transition-colors"
            >
              Generate Leave Report
            </Button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="flex gap-4 w-full">
          <DashboardCard
            title="Total Request"
            count={dashboardStats.total}
            icon={<FileText className="w-6 h-6 text-[#5D667B]" />}
            color="bg-white"
          />
          <DashboardCard
            title="Pending Request"
            count={dashboardStats.pending}
            icon={<Clock className="w-6 h-6 text-[#5D667B]" />}
            color="bg-white"
          />
          <DashboardCard
            title="Approved Request"
            count={dashboardStats.approved}
            icon={<CheckCircle className="w-6 h-6 text-[#5D667B]" />}
            color="bg-white"
          />
          <DashboardCard
            title="Declined Request"
            count={dashboardStats.rejected}
            icon={<XCircle className="w-6 h-6 text-[#5D667B]" />}
            color="bg-white"
          />
        </div>

        {/* Leave Request Section */}
        <div className="flex items-center justify-between">
          <h2 className="text-[#1d2939] text-xl font-semibold leading-[30px]">Leave Request</h2>
          
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Input
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[298px] bg-[#f2f4f7] border-[#eaecf0] pl-4 pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#5D667B]" />
            </div>

            {/* Filter Button */}
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-[#3a58ef] border-[#3a58ef] text-white hover:bg-[#2947dd]"
            >
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4">
          <Select value={statusFilter} onValueChange={(value: LeaveStatus | 'all') => setStatusFilter(value)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>

          <Select value={leaveTypeFilter} onValueChange={(value: LeaveType | 'all') => setLeaveTypeFilter(value)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Annual">Annual</SelectItem>
              <SelectItem value="Sick">Sick</SelectItem>
              <SelectItem value="Unpaid">Unpaid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="flex-1 border border-[#f2f2f2] rounded-lg overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Table Header */}
            <div className="bg-[#ebeefd] h-[42px] flex items-center px-4 text-[#1d2939] text-xs font-semibold sticky top-0">
              <div className="w-[200px]">Staff Name</div>
              <div className="flex-1">Start Date</div>
              <div className="flex-1">End Date</div>
              <div className="w-[80px]">Days</div>
              <div className="flex-1">Leave Type</div>
              <div className="flex-1">Status</div>
              <div className="flex-1 border-l border-[#f2f2f2] pl-4">Action</div>
            </div>

            {/* Table Body */}
            <div className="flex-1 overflow-auto scrollbar-hide">
              {paginatedRequests.map((request, index) => (
                <div key={request.id} className="h-[50px] flex items-center px-4 border-b border-[#f2f2f2] text-[#344054] text-sm">
                  <div className="w-[200px] flex items-center gap-2.5">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={request.avatar} alt={request.staffName} />
                      <AvatarFallback>{request.staffName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="font-normal leading-5">{request.staffName}</span>
                  </div>
                  <div className="flex-1 font-normal leading-5">{request.startDate}</div>
                  <div className="flex-1 font-normal leading-5">{request.endDate}</div>
                  <div className="w-[80px] font-normal leading-5">{request.days}</div>
                  <div className="flex-1 font-normal leading-5">{request.leaveType}</div>
                  <div className="flex-1">
                    <StatusBadge status={request.status} />
                  </div>
                  <div className="flex-1 border-l border-[#f2f2f2] pl-4">
                    {request.status === 'pending' ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewRequest(request.id)}
                        className="bg-[#ebeefd] text-[#3a58ef] border-0 shadow-sm hover:bg-[#d8defc]"
                      >
                        View Request
                      </Button>
                    ) : request.canEdit ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditRequest(request.id)}
                        className="bg-[#ebeefd] text-[#3a58ef] border-0 shadow-sm hover:bg-[#d8defc]"
                      >
                        Edit Request
                      </Button>
                    ) : (
                      <Eye className="w-5 h-5 text-[#5D667B]" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="bg-white h-[60px] flex items-center justify-between px-6 py-4 border-t shadow-[0px_-4px_21px_0px_rgba(0,0,0,0.04)] rounded-bl-lg rounded-br-lg">
              <div className="flex items-center gap-3">
                <span className="text-[#5d667b] text-base font-normal leading-6">Showing</span>
                <div className="bg-white border border-[#eaecf0] rounded px-3 py-2 flex items-center gap-1">
                  <span className="text-[#1d2939] text-base font-medium leading-5 w-[26px]">
                    {itemsPerPage}
                  </span>
                  <ChevronDown className="w-[18px] h-[18px] text-[#5D667B]" />
                </div>
                <span className="text-[#1d2939] text-base font-semibold leading-6">of {filteredRequests.length}</span>
                <span className="text-[#5d667b] text-base font-normal leading-6">Events</span>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="w-8 h-8"
                >
                  <ChevronDown className="w-5 h-5 rotate-90" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8"
                >
                  <ChevronDown className="w-5 h-5 rotate-90" />
                </Button>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white border-2 border-[#98a2b3] rounded-lg px-3 py-2">
                    <span className="text-[#1d2939] text-base font-medium leading-5 w-[25px] text-center">
                      {currentPage}
                    </span>
                  </div>
                  <span className="text-[#5d667b] text-base font-normal leading-5">
                    of {totalPages} pages
                  </span>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8"
                >
                  <ChevronDown className="w-5 h-5 -rotate-90" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8"
                >
                  <ChevronDown className="w-5 h-5 -rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}