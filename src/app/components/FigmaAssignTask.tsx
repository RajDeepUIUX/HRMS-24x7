import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-yskqur1oeh";
import MultiStaffAssignModal from "./MultiStaffAssignModal";

// Task data - simplified to just a flat list
// Dynamic task data based on staff expertise
const getTasksForStaff = (staffId: string) => {
  const staffTaskSets: { [key: string]: { id: number; name: string; assigned: boolean }[] } = {
    "deepa-varma": [
      { id: 1, name: "Monthly financial statement preparation", assigned: false },
      { id: 2, name: "CAM expense allocation", assigned: false },
      { id: 3, name: "Capital project cost tracking", assigned: false },
      { id: 4, name: "Budget vs actual variance analysis", assigned: false },
      { id: 5, name: "Product cost accounting and analysis", assigned: false },
      { id: 6, name: "Management dashboard reporting", assigned: false },
      { id: 7, name: "Complex accrual and prepayment entries", assigned: false },
      { id: 8, name: "Multi-currency bank reconciliation", assigned: false },
      { id: 9, name: "Deduct allowable business expenses: fuel, maintenance, labor, lease/rental of fleet, insurance, tolls, permits, depreciation, & General", assigned: false },
      { id: 10, name: "HOA/Condo financial management and dues tracking", assigned: false },
      { id: 11, name: "Intercompany rent allocations (for owners with multiple entities)", assigned: false },
      { id: 12, name: "Reserve fund accounting (capital reserves, replacement reserves)", assigned: false }
    ],
    "rekha-singhal": [
      { id: 1, name: "Financial forecasting and modeling", assigned: false },
      { id: 2, name: "Investment performance analysis", assigned: false },
      { id: 3, name: "Financial risk assessment reporting", assigned: false },
      { id: 4, name: "Cash flow projection and analysis", assigned: false },
      { id: 5, name: "KPI dashboard creation and monitoring", assigned: false },
      { id: 6, name: "Market trend analysis and reporting", assigned: false },
      { id: 7, name: "Scenario planning and sensitivity analysis", assigned: false },
      { id: 8, name: "Occupancy rate and NOI (Net Operating Income) analysis", assigned: false },
      { id: 9, name: "Loan interest & amortization schedules", assigned: false },
      { id: 10, name: "Revenue recognition for rent concessions or deferred rents", assigned: false }
    ],
    "amrit-dutta": [
      { id: 1, name: "Corporate income tax preparation", assigned: false },
      { id: 2, name: "GST return filing and compliance", assigned: false },
      { id: 3, name: "Strategic tax planning and optimization", assigned: false },
      { id: 4, name: "Medical billing tax considerations & compliance", assigned: false },
      { id: 5, name: "Tax law research and interpretation", assigned: false },
      { id: 6, name: "Multi-state sales tax compliance", assigned: false },
      { id: 7, name: "Payroll tax calculations and filings", assigned: false },
      { id: 8, name: "Tax audit support and documentation", assigned: false },
      { id: 9, name: "Deduct & Remit payroll taxes accurately, federal, state, local taxes, Social Security, Medicare, unemployment insurance", assigned: false },
      { id: 10, name: "Tax support (REITs, 1099s, depreciation schedules)", assigned: false }
    ],
    "kasturba-kamdar": [
      { id: 1, name: "Internal control audit procedures", assigned: false },
      { id: 2, name: "SOX compliance testing and documentation", assigned: false },
      { id: 3, name: "Bank loan covenant compliance reporting", assigned: false },
      { id: 4, name: "Enterprise risk management assessment", assigned: false },
      { id: 5, name: "Business process review and optimization", assigned: false },
      { id: 6, name: "Regulatory compliance monitoring", assigned: false },
      { id: 7, name: "Fraud detection and prevention procedures", assigned: false },
      { id: 8, name: "Audit workpaper preparation and review", assigned: false },
      { id: 9, name: "Walkthrough internal controls: procurement, payroll, cash, grants; note deficiencies", assigned: false }
    ],
    "krishna-chauhan": [
      { id: 1, name: "Vendor payment processing", assigned: false },
      { id: 2, name: "Invoice processing and approval workflow", assigned: false },
      { id: 3, name: "Vendor master data management", assigned: false },
      { id: 4, name: "Purchase order accruals and matching", assigned: false },
      { id: 5, name: "Employee expense report processing", assigned: false },
      { id: 6, name: "Accounts payable reconciliation", assigned: false },
      { id: 7, name: "Vendor payment terms optimization", assigned: false },
      { id: 8, name: "Utility billing & tenant chargebacks", assigned: false }
    ],
    "madan-kumar": [
      { id: 1, name: "Customer invoicing and billing", assigned: false },
      { id: 2, name: "Accounts receivable collections", assigned: false },
      { id: 3, name: "Customer account statements", assigned: false },
      { id: 4, name: "Customer credit limit management", assigned: false },
      { id: 5, name: "AR aging analysis and reporting", assigned: false },
      { id: 6, name: "Cash receipts and application", assigned: false },
      { id: 7, name: "Bad debt analysis and write-offs", assigned: false },
      { id: 8, name: "Rent invoicing and reconciliation", assigned: false },
      { id: 9, name: "Security deposit tracking & reconciliations", assigned: false }
    ],
    "sonali-sharma": [
      { id: 1, name: "General journal entries", assigned: false },
      { id: 2, name: "Month-end closing procedures", assigned: false },
      { id: 3, name: "Escrow & trust accounting", assigned: false },
      { id: 4, name: "Basic account reconciliations", assigned: false },
      { id: 5, name: "Fixed asset accounting", assigned: false },
      { id: 6, name: "General ledger maintenance", assigned: false },
      { id: 7, name: "Trial balance preparation and review", assigned: false },
      { id: 8, name: "Warranty claim accounting for boat repairs and replacements", assigned: false }
    ]
  };

  return staffTaskSets[staffId] || staffTaskSets["deepa-varma"];
};

const allTasks = [
  { id: 1, name: "Accrual and prepayment journal entries", assigned: false },
  { id: 2, name: "Address & Apply special tax considerations for medical billing, managed care contracts, & Government payer reimbursements.", assigned: false },
  { id: 3, name: "Bank loan covenant compliance reporting", assigned: false },
  { id: 4, name: "CAM expense allocation", assigned: false },
  { id: 5, name: "Capital project cost tracking", assigned: false },
  { id: 6, name: "Deduct allowable business expenses: fuel, maintenance, labor, lease/rental of fleet, insurance, tolls, permits, depreciation, & General.", assigned: false },
  { id: 7, name: "Deduct & Remit payroll taxes accurately, federal, state, local taxes, Social Security, Medicare, unemployment insurance.", assigned: false },
  { id: 8, name: "Escrow & trust accounting", assigned: false },
  { id: 9, name: "HOA/Condo financial management and dues tracking", assigned: false },
  { id: 10, name: "Intercompany rent allocations (for owners with multiple entities)", assigned: false },
  { id: 11, name: "Loan interest & amortization schedules", assigned: false },
  { id: 12, name: "Occupancy rate and NOI (Net Operating Income) analysis", assigned: false },
  { id: 13, name: "Rent invoicing and reconciliation", assigned: false },
  { id: 14, name: "Reserve fund accounting (capital reserves, replacement reserves)", assigned: false },
  { id: 15, name: "Revenue recognition for rent concessions or deferred rents", assigned: false },
  { id: 16, name: "Security deposit tracking & reconciliations", assigned: false },
  { id: 17, name: "Tax support (REITs, 1099s, depreciation schedules)", assigned: false },
  { id: 18, name: "Utility billing & tenant chargebacks", assigned: false },
  { id: 19, name: "Walkthrough internal controls: procurement, payroll, cash, grants; note deficiencies", assigned: false },
  { id: 20, name: "Warranty claim accounting for boat repairs and replacements", assigned: false }
];

function Square() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Square">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Square">
          <path d={svgPaths.p34cb6700} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2095586340() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-normal leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Click on</p>
      <Square />
      <p className="[white-space-collapse:collapse] basis-0 font-normal grow leading-[18px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap text-white">to assign tasks to the selected staff member</p>
    </div>
  );
}

function Frame2095586352() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-semibold leading-[32px] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Assign Additional Task</p>
      <Frame2095586340 />
    </div>
  );
}

function X({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="X">
      <svg className="block size-full cursor-pointer" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20" onClick={onClick}>
        <g id="X">
          <path d={svgPaths.p36cfcf00} fill="#3A58EF" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[rgba(255,255,255,1)] box-border content-stretch cursor-pointer flex gap-[8px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" 
      data-name="Icon Button"
    >
      <X onClick={onClick} />
    </button>
  );
}

function Frame2095585229({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#3a58ef] h-[80px] relative shrink-0 w-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[80px] items-center px-[16px] py-[20px] relative w-full">
          <Frame2095586352 />
          <IconButton onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[20px] flex items-center justify-center overflow-hidden" data-name="CaretDown">
      <svg className="block w-4 h-4" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
        <g id="CaretDown">
          <path d={svgPaths.p2b0a9a80} fill="#5D667B" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button({ value, onChange, options }: { value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between relative w-full py-[10px] px-[12px] pt-[10px] pr-[26px] pb-[10px] pl-[12px]">
          <select 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="font-normal leading-[20px] not-italic bg-transparent border-none outline-none relative shrink-0 text-[#1d2939] text-[14px] text-nowrap whitespace-pre w-full appearance-none cursor-pointer"
          >
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <CaretDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Frame2095586360({ selectedDomain, setSelectedDomain }: { selectedDomain: string; setSelectedDomain: (value: string) => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[13px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[19px] overflow-ellipsis overflow-hidden">Domain</p>
      </div>
      <Button 
        value={selectedDomain}
        onChange={setSelectedDomain}
        options={["Accounting", "Finance", "Operations"]}
      />
    </div>
  );
}

function Frame2095586362({ selectedIndustry, setSelectedIndustry }: { selectedIndustry: string; setSelectedIndustry: (value: string) => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[13px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[19px] overflow-ellipsis overflow-hidden">Industry</p>
      </div>
      <Button 
        value={selectedIndustry}
        onChange={setSelectedIndustry}
        options={["Hospitality", "Real Estate", "Healthcare", "Manufacturing"]}
      />
    </div>
  );
}

function Frame2095586361({ selectedCategory, setSelectedCategory }: { selectedCategory: string; setSelectedCategory: (value: string) => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[13px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[19px] overflow-ellipsis overflow-hidden">Category</p>
      </div>
      <Button 
        value={selectedCategory}
        onChange={setSelectedCategory}
        options={["Accounting Services", "Tax Services", "Compliance", "Financial Analysis"]}
      />
    </div>
  );
}

function Frame2095586363({ selectedDomain, setSelectedDomain, selectedIndustry, setSelectedIndustry, selectedCategory, setSelectedCategory }: {
  selectedDomain: string;
  setSelectedDomain: (value: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[622px]">
      <Frame2095586360 selectedDomain={selectedDomain} setSelectedDomain={setSelectedDomain} />
      <Frame2095586362 selectedIndustry={selectedIndustry} setSelectedIndustry={setSelectedIndustry} />
      <Frame2095586361 selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  );
}

function Frame2095586334({ selectedDomain, setSelectedDomain, selectedIndustry, setSelectedIndustry, selectedCategory, setSelectedCategory }: {
  selectedDomain: string;
  setSelectedDomain: (value: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}) {
  return (
    <div className="bg-[#ebeefd] relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[12px] relative w-full">
          <Frame2095586363 
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            selectedIndustry={selectedIndustry}
            setSelectedIndustry={setSelectedIndustry}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="absolute inset-[15%]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path d={svgPaths.p392c8400} id="Icon" stroke="#3A58EF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CheckboxBase({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <div className="bg-[#ebeefd] relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
        <div className="overflow-clip relative size-[20px]">
          <Check />
        </div>
        <div aria-hidden="true" className="absolute border border-[#3a58ef] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
    );
  }
  
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Checkbox({ checked }: { checked: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
      <CheckboxBase checked={checked} />
    </div>
  );
}

function TableBody({ checked }: { checked: boolean }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Checkbox checked={checked} />
    </div>
  );
}

function NormalTask({ task, onToggle }: { task: any; onToggle: (id: number) => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all duration-200 ${
        task.assigned 
          ? 'bg-[#f8f8f8] hover:bg-[#f0f0f0] hover:shadow-md' 
          : 'bg-white hover:bg-[#f8fafc] hover:shadow-sm'
      }`} 
      data-name="Normal Task"
      onClick={() => onToggle(task.id)}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <TableBody checked={task.assigned} />
          <p className="basis-0 font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">
            {task.name}
          </p>
        </div>
      </div>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[6px] ${
        task.assigned ? 'border-[#eaecf0]' : 'border-[#f2f4f7]'
      }`} />
    </div>
  );
}

function Frame2095584912({ tasks, onToggle }: { tasks: any[]; onToggle: (id: number) => void }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow h-full items-center min-h-px min-w-px overflow-x-clip overflow-y-scroll relative shrink-0 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
      {tasks.map((task) => (
        <NormalTask key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
}

function Frame2095586346({ tasks, onToggle }: { tasks: any[]; onToggle: (id: number) => void }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start justify-center px-[24px] py-[12px] relative size-full">
          <Frame2095584912 tasks={tasks} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
}

function Button3({ onReset }: { onReset: () => void }) {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative">
        <button 
          onClick={onReset}
          className="font-semibold leading-[20px] not-italic relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre"
        >
          Reset
        </button>
      </div>
      <div aria-hidden="true" className="absolute border border-[#3a58ef] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button4({ onAssign, assignedCount }: { onAssign: () => void; assignedCount: number }) {
  return (
    <div className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Button">
      <button 
        onClick={onAssign}
        className="font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre"
      >
        Assign Task
      </button>
    </div>
  );
}

function Frame2095585302({ onReset, onAssign, assignedCount }: { onReset: () => void; onAssign: () => void; assignedCount: number }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Button3 onReset={onReset} />
      <Button4 onAssign={onAssign} assignedCount={assignedCount} />
    </div>
  );
}

function Frame2095584876({ onReset, onAssign, assignedCount }: { onReset: () => void; onAssign: () => void; assignedCount: number }) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-[24px] items-center justify-end p-[24px] relative w-full">
          <Frame2095585302 onReset={onReset} onAssign={onAssign} assignedCount={assignedCount} />
        </div>
      </div>
    </div>
  );
}

export default function FigmaAssignTask({ onClose, onTasksAssigned, currentlyAssignedTasks = [], selectedStaff, canPerformTasks = [] }: { 
  onClose: () => void; 
  onTasksAssigned: (assignedTasks: { tasks: string[]; staffIds: string[] }) => void;
  currentlyAssignedTasks?: { id: string; name: string }[];
  canPerformTasks?: { id: string; name: string }[];
  selectedStaff?: {
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
  // Initialize tasks with current assignment state - FILTER OUT already assigned tasks AND can perform tasks
  const [tasks, setTasks] = useState(() => {
    // Create a set of currently assigned task names for quick lookup
    const assignedTaskNames = new Set(currentlyAssignedTasks.map(task => task.name));
    // Create a set of can perform task names to exclude them from additional tasks
    const canPerformTaskNames = new Set(canPerformTasks.map(task => task.name));
    
    // Filter out already assigned tasks AND can perform tasks completely and reset assigned state for remaining tasks
    return allTasks
      .filter(task => !assignedTaskNames.has(task.name) && !canPerformTaskNames.has(task.name))
      .map(task => ({
        ...task,
        assigned: false
      }));
  });

  // Update tasks when currentlyAssignedTasks or canPerformTasks changes
  useEffect(() => {
    const assignedTaskNames = new Set(currentlyAssignedTasks.map(task => task.name));
    const canPerformTaskNames = new Set(canPerformTasks.map(task => task.name));
    
    // Filter out already assigned tasks AND can perform tasks completely and reset assigned state for remaining tasks
    setTasks(allTasks
      .filter(task => !assignedTaskNames.has(task.name) && !canPerformTaskNames.has(task.name))
      .map(task => ({
        ...task,
        assigned: false
      })));
  }, [currentlyAssignedTasks, canPerformTasks]);
  
  const [selectedDomain, setSelectedDomain] = useState("Accounting");
  const [selectedIndustry, setSelectedIndustry] = useState("Hospitality");
  const [selectedCategory, setSelectedCategory] = useState("Accounting Services");
  const [isMultiStaffModalOpen, setIsMultiStaffModalOpen] = useState(false);
  const [selectedTasksForAssignment, setSelectedTasksForAssignment] = useState<string[]>([]);

  const toggleTask = (taskId: number) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, assigned: !task.assigned } : task
      )
    );
  };

  const handleReset = () => {
    setTasks(prevTasks => 
      prevTasks.map(task => ({ ...task, assigned: false }))
    );
  };

  const handleAssign = () => {
    const assignedTaskNames = tasks.filter(task => task.assigned).map(task => task.name);
    if (assignedTaskNames.length > 0) {
      setSelectedTasksForAssignment(assignedTaskNames);
      setIsMultiStaffModalOpen(true);
    }
  };

  const handleMultiStaffAssignment = (selectedStaffIds: string[]) => {
    onTasksAssigned({
      tasks: selectedTasksForAssignment,
      staffIds: selectedStaffIds
    });
    setIsMultiStaffModalOpen(false);
    setSelectedTasksForAssignment([]);
  };

  const assignedCount = tasks.filter(task => task.assigned).length;

  return (
    <div className="box-border content-stretch flex flex-col items-end overflow-clip px-0 py-[24px] relative rounded-[8px] size-full mx-[0px] my-[16px] pt-[0px] pr-[0px] pb-[32px] pl-[0px]" data-name="Assign Task">
      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-full">
        <Frame2095585229 onClose={onClose} />
        <Frame2095586334 
          selectedDomain={selectedDomain}
          setSelectedDomain={setSelectedDomain}
          selectedIndustry={selectedIndustry}
          setSelectedIndustry={setSelectedIndustry}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Frame2095586346 tasks={tasks} onToggle={toggleTask} />
        <Frame2095584876 onReset={handleReset} onAssign={handleAssign} assignedCount={assignedCount} />
      </div>
      
      {/* Multi-Staff Assignment Modal */}
      <MultiStaffAssignModal
        isOpen={isMultiStaffModalOpen}
        onClose={() => setIsMultiStaffModalOpen(false)}
        onSubmit={handleMultiStaffAssignment}
        currentStaffId={selectedStaff?.id || "deepa-varma"}
        taskName={selectedTasksForAssignment.length === 1 ? selectedTasksForAssignment[0] : `${selectedTasksForAssignment.length} tasks`}
      />
    </div>
  );
}