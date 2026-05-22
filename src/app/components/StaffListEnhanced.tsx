import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import svgPaths from "../imports/svg-79dz8ns1yg";
import tooltipSvgPaths from "../imports/svg-3672531vf3";

// Enhanced Staff List Component with detailed information and staff switching
function StaffListEnhanced({ 
  assignedTasksByStaff, 
  selectedStaffId, 
  onStaffSelect 
}: { 
  assignedTasksByStaff: { [staffId: string]: { id: string; name: string }[] };
  selectedStaffId: string;
  onStaffSelect: (staffId: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const badgeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const staffMembers = [
    { 
      id: "deepa-varma",
      name: "Deepa Varma", 
      role: "Senior Accountant", 
      avatar: "DV", 
      active: selectedStaffId === "deepa-varma", 
      taskCount: (assignedTasksByStaff["deepa-varma"] || []).length,
      experience: "8+ years",
      certification: "CPA, CMA",
      location: "Mumbai, India",
      department: "Financial Accounting",
      status: "Available",
      lastActive: "2 minutes ago",
      skills: ["Tax Preparation", "Financial Reporting", "Auditing", "Budget Analysis"],
      phone: "+91 98765 43210",
      email: "deepa.varma@company.com"
    },
    { 
      id: "rekha-singhal",
      name: "Rekha Singhal", 
      role: "Financial Analyst", 
      avatar: "RS", 
      active: selectedStaffId === "rekha-singhal", 
      taskCount: (assignedTasksByStaff["rekha-singhal"] || []).length,
      experience: "5+ years",
      certification: "CFA Level II",
      location: "Delhi, India",
      department: "Financial Planning",
      status: "On Leave",
      lastActive: "3 days ago",
      skills: ["Financial Modeling", "Investment Analysis", "Risk Assessment", "Forecasting"],
      phone: "+91 87654 32109",
      email: "rekha.singhal@company.com"
    },
    { 
      id: "amrit-dutta",
      name: "Amrit Dutta", 
      role: "Tax Specialist", 
      avatar: "AD", 
      active: selectedStaffId === "amrit-dutta", 
      taskCount: (assignedTasksByStaff["amrit-dutta"] || []).length,
      experience: "6+ years",
      certification: "Enrolled Agent",
      location: "Kolkata, India",
      department: "Tax Services",
      status: "Busy",
      lastActive: "15 minutes ago",
      skills: ["Income Tax", "GST Compliance", "Tax Planning", "Corporate Tax"],
      phone: "+91 76543 21098",
      email: "amrit.dutta@company.com"
    },
    { 
      id: "kasturba-kamdar",
      name: "Kasturba Kamdar", 
      role: "Audit Manager", 
      avatar: "KK", 
      active: selectedStaffId === "kasturba-kamdar", 
      taskCount: (assignedTasksByStaff["kasturba-kamdar"] || []).length,
      experience: "12+ years",
      certification: "CIA, CISA",
      location: "Ahmedabad, India",
      department: "Internal Audit",
      status: "In Meeting",
      lastActive: "1 hour ago",
      skills: ["Internal Auditing", "Risk Management", "Compliance", "SOX Testing"],
      phone: "+91 65432 10987",
      email: "kasturba.kamdar@company.com"
    },
    { 
      id: "krishna-chauhan",
      name: "Krishna Chauhan", 
      role: "Accountant", 
      avatar: "KC", 
      active: selectedStaffId === "krishna-chauhan", 
      taskCount: (assignedTasksByStaff["krishna-chauhan"] || []).length,
      experience: "3+ years",
      certification: "B.Com, Pursuing CA",
      location: "Pune, India",
      department: "Accounts Payable",
      status: "Away",
      lastActive: "2 hours ago",
      skills: ["Accounts Payable", "Vendor Management", "Reconciliation", "Invoice Processing"],
      phone: "+91 54321 09876",
      email: "krishna.chauhan@company.com"
    },
    { 
      id: "madan-kumar",
      name: "Madan Kumar", 
      role: "Accountant", 
      avatar: "MK", 
      active: selectedStaffId === "madan-kumar", 
      taskCount: (assignedTasksByStaff["madan-kumar"] || []).length,
      experience: "4+ years",
      certification: "ACCA Part Qualified",
      location: "Bangalore, India",
      department: "Accounts Receivable",
      status: "Available",
      lastActive: "30 minutes ago",
      skills: ["Accounts Receivable", "Collections", "Customer Relations", "Cash Flow Management"],
      phone: "+91 43210 98765",
      email: "madan.kumar@company.com"
    },
    { 
      id: "sonali-sharma",
      name: "Sonali Sharma", 
      role: "Accountant", 
      avatar: "SS", 
      active: selectedStaffId === "sonali-sharma", 
      taskCount: (assignedTasksByStaff["sonali-sharma"] || []).length,
      experience: "2+ years",
      certification: "M.Com, PGDM Finance",
      location: "Hyderabad, India",
      department: "General Accounting",
      status: "Training",
      lastActive: "4 hours ago",
      skills: ["General Ledger", "Journal Entries", "Month-end Close", "Financial Statements"],
      phone: "+91 32109 87654",
      email: "sonali.sharma@company.com"
    },
  ];

  // Filter staff members based on search term
  const filteredStaffMembers = staffMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleMouseEnter = (memberId: string) => {
    const badgeElement = badgeRefs.current[memberId];
    if (badgeElement) {
      const rect = badgeElement.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      });
      setHoveredMemberId(memberId);
    }
  };

  const handleMouseLeave = () => {
    setHoveredMemberId(null);
  };

  // Tooltip Component
  const Tooltip = ({ memberId }: { memberId: string }) => {
    const member = filteredStaffMembers.find(m => m.id === memberId);
    if (!member) return null;

    return createPortal(
      <div 
        className="fixed z-[9999] pointer-events-none"
        style={{
          left: tooltipPosition.x,
          top: tooltipPosition.y,
          transform: 'translateX(-50%) translateY(-100%)'
        }}
      >
        <div className="box-border content-stretch flex flex-col items-center relative rounded-[8px] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1),0px_2px_4px_-2px_rgba(16,24,40,0.06)]">
          {/* Content */}
          <div className="bg-white box-border content-start flex flex-wrap gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0">
            <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">
              {member.taskCount} Task{member.taskCount !== 1 ? 's' : ''} Assigned
            </p>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] h-[6px] relative w-[16px]">
              <div className="absolute bottom-[-24.76%] left-0 right-0 top-[-9.76%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
                  <path d={tooltipSvgPaths.p3404cb00} fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className="bg-white rounded-lg border border-[#eaecf0] overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="bg-[#f2f4f7] border-b border-[#f2f2f2] p-[16px]">
        <h3 className="font-semibold text-[#344054] mb-1">Search Staff</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Staff"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-[#eaecf0] rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute right-3 top-2.5 size-5" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1783a7f0} fill="#5D667B" />
          </svg>
        </div>
      </div>

      {/* Staff List */}
      <div className="flex-1 space-y-3 overflow-y-auto scrollbar-hide p-[12px]">
        {filteredStaffMembers.length === 0 ? (
          <div className="text-center py-8 text-[#5d667b]">
            <p className="text-sm">No staff members found</p>
            <p className="text-xs mt-1">Try adjusting your search term</p>
          </div>
        ) : (
          filteredStaffMembers.map((member, i) => (
          <div
            key={i}
            onClick={() => onStaffSelect(member.id)}
            className={`relative flex items-center gap-2 p-3 rounded-md cursor-pointer transition-all duration-200 ${
              member.active 
                ? 'bg-[#ebeefd] border border-[#758af4] scale-[1.02]' 
                : 'hover:bg-gray-50 hover:shadow-sm'
            }`}
            title={`Click to select ${member.name} - ${member.role} | Status: ${member.status} | Experience: ${member.experience} | Location: ${member.location} | Certification: ${member.certification} | Last Active: ${member.lastActive}`}
          >
            <div className={`size-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
              member.active 
                ? 'bg-[#314bd0] text-white' 
                : 'bg-[#f2f4f7] text-[#344054]'
            }`}>
              {member.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <div className="font-medium text-sm text-[#1d2939] truncate">{member.name}</div>

              </div>
              <div className="text-xs text-[#5d667b] truncate">{member.role} • {member.experience}</div>

            </div>
            {member.taskCount > 0 && (
              <div 
                ref={(el) => badgeRefs.current[member.id] = el}
                className="bg-[#1d2939] text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center cursor-help"
                onMouseEnter={() => handleMouseEnter(member.id)}
                onMouseLeave={handleMouseLeave}
              >
                {member.taskCount}
              </div>
            )}
            
            {/* Selection Indicator */}
            {member.active && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#314bd0] rounded-l-[6px] rounded-r-[0px]"></div>
            )}
          </div>
        ))
        )}
      </div>
      
      {/* Render Tooltip */}
      {hoveredMemberId && <Tooltip memberId={hoveredMemberId} />}
    </div>
  );
}

export default StaffListEnhanced;