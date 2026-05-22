import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-79dz8ns1yg";
import svgPathsTask from "../imports/svg-lnnj227774";
import svgPathsUnassign from "../imports/svg-5u6bqp7ccg";
import imgFrame1149 from "figma:asset/9d24cedab8344e96204e73d7b051c8e8b97069f2.png";
import FigmaAssignTask from "./FigmaAssignTask";
import StaffListEnhanced from "./StaffListEnhanced";
import { toast } from "sonner@2.0.3";
import { Toaster } from "./ui/sonner";



// Sidebar Component
function Sidebar() {
  const sidebarIcons = [
    { icon: svgPaths.pbcf2100, active: false },
    { icon: svgPaths.p3048fe00, active: false },
    { icon: svgPaths.p1312d880, active: false },
    { icon: svgPaths.p3a3fe080, active: true }, // Human Resources - active
    { icon: svgPaths.p25edc380, active: false },
    { icon: svgPaths.p11bef680, active: false },
    { icon: svgPaths.p2a2bd600, active: false },
    { icon: svgPaths.p1f4ad080, active: false },
    { icon: svgPaths.p1d152780, active: false },
    { icon: svgPaths.p20bd1f00, active: false },
    { icon: svgPaths.p36b06100, active: false },
    { icon: svgPaths.p2623d200, active: false },
    { icon: svgPaths.p15aae080, active: false },
    { icon: svgPaths.p24125f00, active: false },
    { icon: svgPaths.p16d63e80, active: false },
    { icon: svgPaths.p79fd680, active: false },
    { icon: svgPaths.p2b4b7980, active: false },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg flex flex-col w-[80px] h-full relative">
      {/* Profile Section */}
      <div className="p-2 border-b border-gray-200">
        <div className="bg-[#f2f4f7] rounded-lg p-2">
          <div className="size-11 rounded-full overflow-hidden mx-auto">
            <img 
              src={imgFrame1149} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex-1 space-y-2 overflow-y-auto scrollbar-hide px-[14px] px-[16px] py-[8px]">
        {sidebarIcons.map((item, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              item.active 
                ? 'bg-[#d8defc] text-[#3A58EF]' 
                : 'hover:bg-gray-100 text-[#5D667B]'
            }`}
          >
            <svg className="size-5 mx-auto" fill="none" viewBox="0 0 20 20">
              <path d={item.icon} fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

// Staff List Component
function StaffList({ 
  deepaTaskCount, 
  selectedStaffId, 
  onStaffSelect 
}: { 
  deepaTaskCount: number;
  selectedStaffId: string;
  onStaffSelect: (staffId: string) => void;
}) {
  const staffMembers = [
    { 
      id: "deepa-varma",
      name: "Deepa Varma", 
      role: "Senior Accountant", 
      avatar: "DV", 
      active: selectedStaffId === "deepa-varma", 
      taskCount: selectedStaffId === "deepa-varma" ? deepaTaskCount : 0,
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
      taskCount: selectedStaffId === "rekha-singhal" ? deepaTaskCount : 0,
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
      taskCount: selectedStaffId === "amrit-dutta" ? deepaTaskCount : 3,
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
      taskCount: selectedStaffId === "kasturba-kamdar" ? deepaTaskCount : 0,
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
      taskCount: selectedStaffId === "krishna-chauhan" ? deepaTaskCount : 0,
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
      taskCount: selectedStaffId === "madan-kumar" ? deepaTaskCount : 0,
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
      taskCount: selectedStaffId === "sonali-sharma" ? deepaTaskCount : 0,
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

  return (
    <div className="bg-white rounded-lg border border-[#eaecf0] overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="bg-[#f2f4f7] p-4 border-b border-[#f2f2f2]">
        <h3 className="font-semibold text-[#344054] mb-1">Search Staff</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Staff"
            className="w-full px-4 py-2 border border-[#eaecf0] rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute right-3 top-2.5 size-5" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1783a7f0} fill="#5D667B" />
          </svg>
        </div>
      </div>

      {/* Staff List */}
      <div className="flex-1 p-3 space-y-3 overflow-y-auto scrollbar-hide">
        {staffMembers.map((member, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-3 rounded-md cursor-pointer transition-colors ${
              member.active 
                ? 'bg-[#ebeefd] border border-[#758af4]' 
                : 'hover:bg-gray-50'
            }`}
            title={`${member.name} - ${member.role} | Status: ${member.status} | Experience: ${member.experience} | Location: ${member.location} | Certification: ${member.certification} | Last Active: ${member.lastActive}`}
          >
            <div className={`size-8 rounded-full flex items-center justify-center text-xs font-medium ${
              member.active 
                ? 'bg-[#314bd0] text-white' 
                : 'bg-[#f2f4f7] text-[#344054]'
            }`}>
              {member.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm text-[#1d2939] truncate">{member.name}</div>
              <div className="text-xs text-[#5d667b] truncate">{member.role}</div>
            </div>
            {member.taskCount > 0 && (
              <div className="bg-[#1d2939] text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {member.taskCount}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Task Repository Component with proper Figma styling and assignment logic
function TaskRepository({ onAssignClick, assignedTasks, onUnassignTask, onAssignTask, selectedStaff }: { 
  onAssignClick: () => void; 
  assignedTasks: { id: string; name: string }[];
  onUnassignTask: (taskId: string) => void;
  onAssignTask: (taskId: string, taskName: string) => void;
  selectedStaff: {
    id: string;
    name: string;
    role: string;
    avatar: string;
    experience: string;
    certification: string;
    location: string;
    department: string;
    status: string;
    lastActive: string;
    skills: string[];
    phone: string;
    email: string;
  };
}) {
  // Define task sets for each staff member based on their expertise
  const staffTaskSets: { [key: string]: { id: string; name: string }[] } = {
    "deepa-varma": [
      { id: "financial-reporting", name: "Monthly financial statement preparation" },
      { id: "cam-expense", name: "CAM expense allocation" },
      { id: "capital-project", name: "Capital project cost tracking" },
      { id: "budget-variance", name: "Budget vs actual variance analysis" }
    ],
    "rekha-singhal": [
      { id: "financial-modeling", name: "Financial forecasting and modeling" },
      { id: "investment-analysis", name: "Investment performance analysis" },
      { id: "risk-assessment", name: "Financial risk assessment reporting" }
    ],
    "amrit-dutta": [
      { id: "income-tax", name: "Corporate income tax preparation" },
      { id: "gst-compliance", name: "GST return filing and compliance" },
      { id: "tax-planning", name: "Strategic tax planning and optimization" },
      { id: "sales-tax", name: "Multi-state sales tax compliance" },
      { id: "tax-audit", name: "Tax audit support and documentation" }
    ],
    "kasturba-kamdar": [
      { id: "internal-audit", name: "Internal control audit procedures" },
      { id: "sox-testing", name: "SOX compliance testing and documentation" },
      { id: "risk-management", name: "Enterprise risk management assessment" }
    ],
    "krishna-chauhan": [
      { id: "vendor-payments", name: "Vendor payment processing" },
      { id: "invoice-processing", name: "Invoice processing and approval workflow" },
      { id: "vendor-management", name: "Vendor master data management" },
      { id: "purchase-accruals", name: "Purchase order accruals and matching" }
    ],
    "madan-kumar": [
      { id: "customer-invoicing", name: "Customer invoicing and billing" },
      { id: "collections", name: "Accounts receivable collections" },
      { id: "customer-statements", name: "Customer account statements" },
      { id: "credit-management", name: "Customer credit limit management" }
    ],
    "sonali-sharma": [
      { id: "journal-entries", name: "General journal entries" },
      { id: "month-end", name: "Month-end closing procedures" }
    ]
  };

  // Get standard tasks for the selected staff member
  const staffStandardTasks = staffTaskSets[selectedStaff.id] || staffTaskSets["deepa-varma"];
  const assignedTaskIds = assignedTasks.map(task => task.id);
  
  // Find uncommon tasks (assigned tasks that are not in their standard skill set)
  const uncommonTasks = assignedTasks.filter(task => 
    !staffStandardTasks.some(standardTask => standardTask.id === task.id)
  );
  
  // Only show standard tasks in "can perform" section
  const canPerformTasks = staffStandardTasks.slice(0, selectedStaff.id === "amrit-dutta" ? 5 : 4);

  const taskCount = assignedTasks.length;
  const hasAssignedTasks = taskCount > 0;
  const hasUncommonTasks = uncommonTasks.length > 0;

  return (
    <div className="bg-white relative rounded-lg border border-[#eaecf0] h-full">
      <div className="content-stretch flex flex-col items-center overflow-hidden relative h-full rounded-lg">
        {/* Header */}
        <div className="bg-[#f2f4f7] relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex gap-1 items-center p-4 relative w-full">
              <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-px min-w-px relative shrink-0">
                <p className="font-semibold leading-6 min-w-full not-italic relative shrink-0 text-[#344054] text-base" style={{ width: "min-content" }}>
                  List of things/task you want {selectedStaff.name.split(' ')[0]} to perform
                </p>
                <div className="content-stretch flex gap-2 items-start relative shrink-0">
                  {hasAssignedTasks ? (
                    <p className="font-normal leading-[18px] not-italic relative shrink-0 text-[#5d667b] text-xs text-nowrap whitespace-pre">
                      {taskCount} task{taskCount > 1 ? 's' : ''} assigned
                    </p>
                  ) : (
                    <p className="font-normal leading-[18px] not-italic relative shrink-0 text-[#344054] text-xs text-nowrap whitespace-pre">
                      <span className="font-semibold">No task</span>
                      <span>{` has been assigned yet, but you can see what ${selectedStaff.name.split(' ')[0]} can perform.`}</span>
                    </p>
                  )}
                </div>
              </div>
              <button 
                onClick={onAssignClick}
                className="bg-[#3a58ef] box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-4 py-2.5 relative rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 hover:bg-[#2947df] transition-colors"
              >
                <svg className="size-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPathsTask.p316b4e00} fill="white" />
                </svg>
                <p className="font-semibold leading-5 not-italic relative shrink-0 text-sm text-nowrap text-white whitespace-pre">Assign Additional Task</p>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
          <div className="flex flex-col items-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-3 items-center p-3 relative size-full overflow-y-auto scrollbar-hide rounded-[0px] bg-[rgba(0,0,0,0)]">
              
              {/* Uncommon Assigned Tasks Section - Tasks not in their skill set */}
              {hasUncommonTasks && (
                <div className="w-full space-y-3">
                  {uncommonTasks.map((task) => (
                    <div key={task.id} className="bg-white box-border content-stretch flex gap-2 items-center overflow-clip pl-4 pr-2.5 py-2 relative rounded-md shrink-0 w-full hover:bg-[#f8fafc] hover:shadow-sm transition-all duration-200 cursor-pointer">
                      <p className="basis-0 font-normal grow leading-5 min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-sm">{task.name}</p>
                      <button
                        onClick={() => onUnassignTask(task.id)}
                        className="bg-gray-50 relative rounded-full shrink-0 hover:bg-gray-100 transition-colors"
                      >
                        <div className="box-border content-stretch flex gap-1 items-center justify-center overflow-clip pl-1 pr-2 py-1 relative">
                          <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                            <path d={svgPathsUnassign.p21812100} fill="#344054" />
                          </svg>
                          <p className="font-normal leading-[18px] not-italic relative shrink-0 text-[#344054] text-xs text-nowrap whitespace-pre">Unassign</p>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#344054] border-solid inset-0 pointer-events-none rounded-full" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Can Perform Tasks Section - Only standard skill set tasks */}
              {canPerformTasks.length > 0 && (
                <div className="relative rounded-lg shrink-0 w-full">
                  <div className="content-stretch flex flex-col items-start overflow-hidden relative w-full">
                    {/* Section Header */}
                    <div className="bg-[#ebeefd] relative shrink-0 w-full">
                      <div className="overflow-hidden relative size-full">
                        <div className="box-border content-stretch flex flex-col gap-3 items-start p-3 relative w-full rounded-t-[8px] rounded-b-[0px]">
                          <div className="flex items-center justify-between w-full">
                            <p className="font-medium h-6 leading-6 not-italic relative shrink-0 text-[#101828] text-base">
                              List of things/task {selectedStaff.name.split(' ')[0]} can perform
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tasks List - Only standard tasks with appropriate buttons */}
                    <div className="bg-white relative shrink-0 w-full">
                      <div className="overflow-hidden relative size-full">
                        <div className="box-border content-stretch flex flex-col gap-3 items-start p-2 relative w-full rounded-t-[0px] rounded-b-[8px]">
                          {canPerformTasks.map((task) => {
                            return (
                              <div key={task.id} className="bg-white relative rounded-md shrink-0 w-full hover:bg-[#f8fafc] hover:shadow-sm transition-all duration-200">
                                <div className="flex flex-row items-center overflow-hidden relative size-full">
                                  <div className="box-border content-stretch flex gap-2 items-center pl-4 pr-2.5 py-2 relative w-full">
                                    <p className="basis-0 font-normal grow leading-5 min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-sm">{task.name}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#ebeefd] border-solid inset-0 pointer-events-none rounded-lg" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Breadcrumb Component
function Breadcrumb() {
  return (
    <div className="flex items-center gap-1 text-xs">
      <span className="text-[#98a2b3] font-medium">Human Resources</span>
      <svg className="size-4" fill="none" viewBox="0 0 16 16">
        <path d={svgPaths.p16897c00} fill="#1D2939" />
      </svg>
      <span className="text-[#344054] font-medium">Task Repository</span>
    </div>
  );
}

// Main Component - Optimized for 1440x1024
export default function ResponsiveTaskRepository({ onNavigationChange }: { onNavigationChange?: (view: string) => void }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [assignedTasksByStaff, setAssignedTasksByStaff] = useState<{ [staffId: string]: { id: string; name: string }[] }>({});
  const [selectedStaffId, setSelectedStaffId] = useState("deepa-varma");

  // Staff data
  const allStaffMembers = [
    { 
      id: "deepa-varma",
      name: "Deepa Varma", 
      role: "Senior Accountant", 
      avatar: "DV", 
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

  // Get selected staff member
  const selectedStaff = allStaffMembers.find(staff => staff.id === selectedStaffId) || allStaffMembers[0];
  
  // Calculate can perform tasks for the selected staff (same logic as in TaskRepository component)
  const staffTaskSets: { [key: string]: { id: string; name: string }[] } = {
    "deepa-varma": [
      { id: "financial-reporting", name: "Monthly financial statement preparation" },
      { id: "cam-expense", name: "CAM expense allocation" },
      { id: "capital-project", name: "Capital project cost tracking" },
      { id: "budget-variance", name: "Budget vs actual variance analysis" }
    ],
    "rekha-singhal": [
      { id: "financial-modeling", name: "Financial forecasting and modeling" },
      { id: "investment-analysis", name: "Investment performance analysis" },
      { id: "risk-assessment", name: "Financial risk assessment reporting" }
    ],
    "amrit-dutta": [
      { id: "income-tax", name: "Corporate income tax preparation" },
      { id: "gst-compliance", name: "GST return filing and compliance" },
      { id: "tax-planning", name: "Strategic tax planning and optimization" },
      { id: "sales-tax", name: "Multi-state sales tax compliance" },
      { id: "tax-audit", name: "Tax audit support and documentation" }
    ],
    "kasturba-kamdar": [
      { id: "internal-audit", name: "Internal control audit procedures" },
      { id: "sox-testing", name: "SOX compliance testing and documentation" },
      { id: "risk-management", name: "Enterprise risk management assessment" }
    ],
    "krishna-chauhan": [
      { id: "vendor-payments", name: "Vendor payment processing" },
      { id: "invoice-processing", name: "Invoice processing and approval workflow" },
      { id: "vendor-management", name: "Vendor master data management" },
      { id: "purchase-accruals", name: "Purchase order accruals and matching" }
    ],
    "madan-kumar": [
      { id: "customer-invoicing", name: "Customer invoicing and billing" },
      { id: "collections", name: "Accounts receivable collections" },
      { id: "customer-statements", name: "Customer account statements" },
      { id: "credit-management", name: "Customer credit limit management" }
    ],
    "sonali-sharma": [
      { id: "journal-entries", name: "General journal entries" },
      { id: "month-end", name: "Month-end closing procedures" }
    ]
  };
  
  const staffStandardTasks = staffTaskSets[selectedStaff.id] || staffTaskSets["deepa-varma"];
  const canPerformTasks = staffStandardTasks.slice(0, selectedStaff.id === "amrit-dutta" ? 5 : 4);
  
  // Get assigned tasks for currently selected staff
  const currentAssignedTasks = assignedTasksByStaff[selectedStaffId] || [];

  // Debug log for task state changes (can be removed in production)
  useEffect(() => {
    console.log('Task assignments updated:', {
      selectedStaff: selectedStaff.name,
      assignedTasksCount: currentAssignedTasks.length,
      assignedTasks: currentAssignedTasks.map(t => t.name)
    });
  }, [selectedStaff.name, currentAssignedTasks]);

  // Handle staff selection
  const handleStaffSelect = (staffId: string) => {
    const newStaff = allStaffMembers.find(staff => staff.id === staffId);
    if (newStaff) {
      setSelectedStaffId(staffId);
      
      // Show success toast
      toast.success(`Switched to ${newStaff.name}`, {
        description: `Now viewing tasks for ${newStaff.role} in ${newStaff.department}`,
        duration: 3000,
      });
    }
  };

  const handleAssignClick = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    // Force a re-render to ensure tasks are properly updated
  };

  const handleTasksAssigned = (data: { tasks: string[]; staffIds: string[] } | string[]) => {
    // Handle backward compatibility - if it's just an array of tasks, assign to current staff
    const tasks = Array.isArray(data) ? data : data.tasks;
    const staffIds = Array.isArray(data) ? [selectedStaffId] : data.staffIds;
    // Convert task names to task objects with IDs
    const taskMap: { [key: string]: string } = {
      // Deepa Varma tasks
      "Monthly financial statement preparation": "financial-reporting",
      "CAM expense allocation": "cam-expense",
      "Capital project cost tracking": "capital-project",
      "Budget vs actual variance analysis": "budget-variance",
      "Product cost accounting and analysis": "cost-accounting",
      "Management dashboard reporting": "management-reporting",
      "Complex accrual and prepayment entries": "accrual-prepayment",
      "Multi-currency bank reconciliation": "bank-reconciliation",
      "Deduct allowable business expenses: fuel, maintenance, labor, lease/rental of fleet, insurance, tolls, permits, depreciation, & General": "business-expenses",
      "HOA/Condo financial management and dues tracking": "hoa-condo-mgmt",
      "Intercompany rent allocations (for owners with multiple entities)": "intercompany-rent",
      "Reserve fund accounting (capital reserves, replacement reserves)": "reserve-fund",
      
      // Rekha Singhal tasks
      "Financial forecasting and modeling": "financial-modeling",
      "Investment performance analysis": "investment-analysis",
      "Financial risk assessment reporting": "risk-assessment",
      "Cash flow projection and analysis": "cash-flow",
      "KPI dashboard creation and monitoring": "kpi-dashboard",
      "Market trend analysis and reporting": "market-analysis",
      "Scenario planning and sensitivity analysis": "scenario-planning",
      "Occupancy rate and NOI (Net Operating Income) analysis": "occupancy-noi",
      "Loan interest & amortization schedules": "loan-interest",
      "Revenue recognition for rent concessions or deferred rents": "revenue-recognition",
      
      // Amrit Dutta tasks
      "Corporate income tax preparation": "income-tax",
      "GST return filing and compliance": "gst-compliance",
      "Strategic tax planning and optimization": "tax-planning",
      "Medical billing tax considerations & compliance": "medical-billing",
      "Tax law research and interpretation": "tax-research",
      "Multi-state sales tax compliance": "sales-tax",
      "Payroll tax calculations and filings": "payroll-tax",
      "Tax audit support and documentation": "tax-audit",
      "Deduct & Remit payroll taxes accurately, federal, state, local taxes, Social Security, Medicare, unemployment insurance": "payroll-taxes-remit",
      "Tax support (REITs, 1099s, depreciation schedules)": "tax-support-reit",
      
      // Kasturba Kamdar tasks
      "Internal control audit procedures": "internal-audit",
      "SOX compliance testing and documentation": "sox-testing",
      "Bank loan covenant compliance reporting": "bank-loan",
      "Enterprise risk management assessment": "risk-management",
      "Business process review and optimization": "process-review",
      "Regulatory compliance monitoring": "compliance-monitoring",
      "Fraud detection and prevention procedures": "fraud-detection",
      "Audit workpaper preparation and review": "audit-documentation",
      "Walkthrough internal controls: procurement, payroll, cash, grants; note deficiencies": "walkthrough-controls",
      
      // Krishna Chauhan tasks
      "Vendor payment processing": "vendor-payments",
      "Invoice processing and approval workflow": "invoice-processing",
      "Vendor master data management": "vendor-management",
      "Purchase order accruals and matching": "purchase-accruals",
      "Employee expense report processing": "expense-reports",
      "Accounts payable reconciliation": "ap-reconciliation",
      "Vendor payment terms optimization": "payment-terms",
      "Utility billing & tenant chargebacks": "utility-billing",
      
      // Madan Kumar tasks
      "Customer invoicing and billing": "customer-invoicing",
      "Accounts receivable collections": "collections",
      "Customer account statements": "customer-statements",
      "Customer credit limit management": "credit-management",
      "AR aging analysis and reporting": "ar-aging",
      "Cash receipts and application": "cash-application",
      "Bad debt analysis and write-offs": "bad-debt",
      "Rent invoicing and reconciliation": "rent-invoicing",
      "Security deposit tracking & reconciliations": "security-deposit",
      
      // Sonali Sharma tasks
      "General journal entries": "journal-entries",
      "Month-end closing procedures": "month-end",
      "Escrow & trust accounting": "escrow-trust",
      "Basic account reconciliations": "basic-reconciliation",
      "Fixed asset accounting": "fixed-assets",
      "General ledger maintenance": "general-ledger",
      "Trial balance preparation and review": "trial-balance",
      "Warranty claim accounting for boat repairs and replacements": "warranty-claim"
    };

    const newAssignedTasks = tasks.map(taskName => ({
      id: taskMap[taskName] || taskName.toLowerCase().replace(/\s+/g, '-'),
      name: taskName
    }));

    // Update tasks for all selected staff members
    setAssignedTasksByStaff(prev => {
      const updated = { ...prev };
      staffIds.forEach(staffId => {
        const existingTasks = updated[staffId] || [];
        const existingTaskIds = existingTasks.map(task => task.id);
        
        // Only add tasks that aren't already assigned
        const tasksToAdd = newAssignedTasks.filter(task => !existingTaskIds.includes(task.id));
        updated[staffId] = [...existingTasks, ...tasksToAdd];
      });
      return updated;
    });
    
    setIsDrawerOpen(false);
    
    // Show success toast with assigned staff info
    const allStaffMembers = [
      { id: "deepa-varma", name: "Deepa Varma", role: "Senior Accountant", department: "Finance", avatar: "DV" },
      { id: "rekha-singhal", name: "Rekha Singhal", role: "Financial Analyst", department: "Finance", avatar: "RS" },
      { id: "amrit-dutta", name: "Amrit Dutta", role: "Tax Specialist", department: "Tax", avatar: "AD" },
      { id: "kasturba-kamdar", name: "Kasturba Kamdar", role: "Audit Manager", department: "Audit", avatar: "KK" },
      { id: "krishna-chauhan", name: "Krishna Chauhan", role: "Accountant", department: "Accounts Payable", avatar: "KC" },
      { id: "madan-kumar", name: "Madan Kumar", role: "Accountant", department: "Accounts Receivable", avatar: "MK" },
      { id: "sonali-sharma", name: "Sonali Sharma", role: "Accountant", department: "General Accounting", avatar: "SS" },
    ];
    
    const assignedStaffNames = staffIds.map(id => 
      allStaffMembers.find(staff => staff.id === id)?.name || id
    ).join(', ');
    
    toast.success(`Tasks assigned successfully!`, {
      description: `${tasks.length} task${tasks.length > 1 ? 's' : ''} assigned to ${assignedStaffNames}`,
      duration: 4000,
    });
  };

  const handleUnassignTask = (taskId: string) => {
    // Find the task being unassigned for toast message
    const taskBeingUnassigned = (assignedTasksByStaff[selectedStaffId] || []).find(task => task.id === taskId);
    
    setAssignedTasksByStaff(prev => ({
      ...prev,
      [selectedStaffId]: (prev[selectedStaffId] || []).filter(task => task.id !== taskId)
    }));
    
    // Show success toast
    if (taskBeingUnassigned) {
      toast.success(`Task unassigned successfully!`, {
        description: `"${taskBeingUnassigned.name}" has been removed from ${selectedStaff.name}'s assignments`,
        duration: 3000,
      });
    }
  };

  const handleAssignTask = (taskId: string, taskName: string) => {
    const newTask = { id: taskId, name: taskName };
    setAssignedTasksByStaff(prev => ({
      ...prev,
      [selectedStaffId]: [...(prev[selectedStaffId] || []), newTask]
    }));
    
    // Show success toast
    toast.success(`Task assigned successfully!`, {
      description: `"${taskName}" has been assigned to ${selectedStaff.name}`,
      duration: 3000,
    });
  };

  return (
    <div className="h-full relative">
      <div className="bg-white rounded-lg shadow-sm h-full flex flex-col py-[24px] p-[24px]">
        {/* Breadcrumb */}
        <div className="mb-1 flex-shrink-0">
          <Breadcrumb />
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-[#101828] mb-6 flex-shrink-0">Task Repository</h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-[320px_1fr] gap-6 flex-1 min-h-0">
          {/* Staff List */}
          <div className="min-h-0">
            <StaffListEnhanced 
              assignedTasksByStaff={assignedTasksByStaff}
              selectedStaffId={selectedStaffId}
              onStaffSelect={handleStaffSelect}
            />
          </div>

          {/* Task Repository */}
          <div className="min-h-0">
            <TaskRepository 
              key={`${selectedStaffId}-${currentAssignedTasks.length}`}
              onAssignClick={handleAssignClick} 
              assignedTasks={currentAssignedTasks}
              onUnassignTask={handleUnassignTask}
              onAssignTask={handleAssignTask}
              selectedStaff={selectedStaff}
            />
          </div>
        </div>
      </div>

      {/* Right Drawer Overlay */}
      {isDrawerOpen && (
        <>
          {/* Black Backdrop with 50% opacity */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={handleCloseDrawer}
          />
          
          {/* Drawer Container */}
          <div className="fixed top-0 right-0 h-screen w-[670px] z-50">
            <div 
              className={`h-full w-full bg-transparent shadow-2xl transform transition-transform duration-300 ease-out ${
                isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <FigmaAssignTask 
                onClose={handleCloseDrawer} 
                onTasksAssigned={handleTasksAssigned}
                currentlyAssignedTasks={currentAssignedTasks}
                selectedStaff={selectedStaff}
                canPerformTasks={canPerformTasks}
              />
            </div>
          </div>
        </>
      )}
      <Toaster />
    </div>
  );
}