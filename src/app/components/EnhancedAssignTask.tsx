import { useState } from 'react';
import svgPaths from "../imports/svg-oo7nc3rddd";

// Task data with categories
const taskData = [
  {
    category: "Accounting",
    tasks: [
      { id: 1, name: "General Ledger Management", assigned: false },
      { id: 2, name: "Accounts Payable Processing", assigned: false },
      { id: 3, name: "Accounts Receivable Management", assigned: false },
      { id: 4, name: "Bank Reconciliation", assigned: false },
      { id: 5, name: "Financial Reporting", assigned: false },
      { id: 6, name: "Budget Preparation", assigned: false },
      { id: 7, name: "Cost Accounting", assigned: false },
      { id: 8, name: "Inventory Accounting", assigned: false },
      { id: 9, name: "Payroll Processing", assigned: false },
      { id: 10, name: "Tax Compliance", assigned: false },
      { id: 11, name: "Audit Support", assigned: false },
      { id: 12, name: "Financial Analysis", assigned: false }
    ]
  },
  {
    category: "Finance",
    tasks: [
      { id: 13, name: "Cash Flow Management", assigned: false },
      { id: 14, name: "Investment Analysis", assigned: false },
      { id: 15, name: "Risk Assessment", assigned: false },
      { id: 16, name: "Treasury Management", assigned: false }
    ]
  },
  {
    category: "Compliance",
    tasks: [
      { id: 17, name: "Regulatory Reporting", assigned: false },
      { id: 18, name: "Policy Documentation", assigned: false },
      { id: 19, name: "Internal Controls", assigned: false }
    ]
  }
];

function TaskItem({ task, onToggle }: { task: any; onToggle: (id: number) => void }) {
  return (
    <div 
      className={`bg-white relative rounded-md shrink-0 w-full transition-colors cursor-pointer hover:bg-gray-50 ${
        task.assigned ? 'bg-[#f0f9ff] border border-[#3a58ef]' : 'border border-transparent'
      }`}
      onClick={() => onToggle(task.id)}
    >
      <div className="flex flex-row items-center overflow-hidden relative size-full">
        <div className="box-border content-stretch flex gap-3 items-center pl-4 pr-4 py-3 relative w-full">
          {/* Checkbox */}
          <div 
            className={`size-5 rounded border-2 flex items-center justify-center transition-colors ${
              task.assigned 
                ? 'bg-[#3a58ef] border-[#3a58ef]' 
                : 'border-[#d0d5dd] hover:border-[#3a58ef]'
            }`}
          >
            {task.assigned && (
              <svg className="size-3" fill="none" viewBox="0 0 12 12">
                <path 
                  d="M10 3L4.5 8.5L2 6" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          
          {/* Task Name */}
          <p className={`basis-0 font-normal grow leading-5 min-h-px min-w-px not-italic relative shrink-0 text-sm ${
            task.assigned ? 'text-[#3a58ef] font-medium' : 'text-[#1d2939]'
          }`}>
            {task.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EnhancedAssignTask({ onClose, onTasksAssigned }: { 
  onClose: () => void; 
  onTasksAssigned: (tasks: string[]) => void; 
}) {
  const [tasks, setTasks] = useState(taskData);
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleTask = (taskId: number) => {
    setTasks(prevTasks => 
      prevTasks.map(category => ({
        ...category,
        tasks: category.tasks.map(task => 
          task.id === taskId ? { ...task, assigned: !task.assigned } : task
        )
      }))
    );
  };

  const assignedCount = tasks.reduce((total, category) => 
    total + category.tasks.filter(task => task.assigned).length, 0
  );

  const handleAssignTasks = () => {
    const assignedTaskNames = tasks.flatMap(category => 
      category.tasks.filter(task => task.assigned).map(task => task.name)
    );
    onTasksAssigned(assignedTaskNames);
  };

  return (
    <div className="bg-white relative size-full">
      <div className="content-stretch flex flex-col items-start overflow-hidden relative size-full">
        {/* Header */}
        <div className="bg-[#3a58ef] relative shrink-0 w-full">
          <div className="overflow-hidden relative size-full">
            <div className="box-border content-stretch flex flex-col gap-2 items-start p-5 relative w-full">
              <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-semibold leading-7 min-w-full not-italic relative shrink-0 text-white text-lg">
                    Assign Task to Deepa Varma
                  </p>
                  <p className="font-normal leading-5 not-italic relative shrink-0 text-[#e0e7ff] text-sm">
                    {assignedCount} task{assignedCount !== 1 ? 's' : ''} selected
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-[#ebeefd] box-border content-stretch cursor-pointer flex gap-2 items-center justify-center overflow-hidden p-2.5 rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-[#d8defc] transition-colors"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 20 20">
                    <path d="M16.0672 15.1828C16.1253 15.2409 16.1713 15.3098 16.2027 15.3857C16.2342 15.4616 16.2503 15.5429 16.2503 15.625C16.2503 15.7071 16.2342 15.7884 16.2027 15.8643C16.1713 15.9402 16.1253 16.0091 16.0672 16.0672C16.0091 16.1253 15.9402 16.1713 15.8643 16.2027C15.7884 16.2342 15.7071 16.2503 15.625 16.2503C15.5429 16.2503 15.4616 16.2342 15.3857 16.2027C15.3098 16.1713 15.2409 16.1253 15.1828 16.0672L10 10.8836L4.81719 16.0672C4.69991 16.1845 4.54085 16.2503 4.375 16.2503C4.20915 16.2503 4.05009 16.1845 3.93281 16.0672C3.81554 15.9499 3.74965 15.7909 3.74965 15.625C3.74965 15.4591 3.81554 15.3001 3.93281 15.1828L9.11641 10L3.93281 4.81719C3.81554 4.69991 3.74965 4.54085 3.74965 4.375C3.74965 4.20915 3.81554 4.05009 3.93281 3.93281C4.05009 3.81554 4.20915 3.74965 4.375 3.74965C4.54085 3.74965 4.69991 3.81554 4.81719 3.93281L10 9.11641L15.1828 3.93281C3.3001 3.81554 15.4591 3.74965 15.625 3.74965C15.7909 3.74965 15.9499 3.81554 16.0672 3.93281C16.1845 4.05009 16.2503 4.20915 16.2503 4.375C16.2503 4.54085 16.1845 4.69991 16.0672 4.81719L10.8836 10L16.0672 15.1828Z" fill="#3A58EF" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#f9fafb] relative shrink-0 w-full">
          <div className="overflow-hidden relative size-full">
            <div className="box-border content-stretch flex gap-4 items-end px-4 py-5 relative w-full">
              {/* Domain Filter */}
              <div className="content-stretch flex flex-col gap-1.5 items-start relative shrink-0">
                <p className="font-medium leading-5 not-italic relative shrink-0 text-[#344054] text-sm">Domain</p>
                <div className="bg-white h-10 relative rounded w-[150px]">
                  <div className="flex flex-row items-center overflow-hidden relative size-full">
                    <div className="box-border content-stretch flex h-10 items-center justify-between px-3 py-2.5 relative w-full">
                      <select 
                        value={selectedDomain}
                        onChange={(e) => setSelectedDomain(e.target.value)}
                        className="font-normal leading-5 not-italic bg-transparent border-none outline-none relative shrink-0 text-[#1d2939] text-sm text-nowrap whitespace-pre w-full appearance-none cursor-pointer"
                      >
                        <option value="All">All Domains</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Finance">Finance</option>
                      </select>
                      <svg className="size-5 pointer-events-none" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p2b0a9a80} fill="#5D667B" />
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                </div>
              </div>

              {/* Industry Filter */}
              <div className="content-stretch flex flex-col gap-1.5 items-start relative shrink-0">
                <p className="font-medium leading-5 not-italic relative shrink-0 text-[#344054] text-sm">Industry</p>
                <div className="bg-white h-10 relative rounded w-[150px]">
                  <div className="flex flex-row items-center overflow-hidden relative size-full">
                    <div className="box-border content-stretch flex h-10 items-center justify-between px-3 py-2.5 relative w-full">
                      <select 
                        value={selectedIndustry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                        className="font-normal leading-5 not-italic bg-transparent border-none outline-none relative shrink-0 text-[#1d2939] text-sm text-nowrap whitespace-pre w-full appearance-none cursor-pointer"
                      >
                        <option value="All">All Industries</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Construction">Construction</option>
                        <option value="Healthcare">Healthcare</option>
                      </select>
                      <svg className="size-5 pointer-events-none" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p2b0a9a80} fill="#5D667B" />
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="content-stretch flex flex-col gap-1.5 items-start relative shrink-0">
                <p className="font-medium leading-5 not-italic relative shrink-0 text-[#344054] text-sm">Category</p>
                <div className="bg-white h-10 relative rounded w-[150px]">
                  <div className="flex flex-row items-center overflow-hidden relative size-full">
                    <div className="box-border content-stretch flex h-10 items-center justify-between px-3 py-2.5 relative w-full">
                      <select 
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="font-normal leading-5 not-italic bg-transparent border-none outline-none relative shrink-0 text-[#1d2939] text-sm text-nowrap whitespace-pre w-full appearance-none cursor-pointer"
                      >
                        <option value="All">All Categories</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Finance">Finance</option>
                        <option value="Compliance">Compliance</option>
                      </select>
                      <svg className="size-5 pointer-events-none" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p2b0a9a80} fill="#5D667B" />
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Lists */}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
          <div className="overflow-auto relative size-full scrollbar-hide">
            <div className="box-border content-stretch flex flex-col gap-6 items-start p-4 relative w-full">
              {tasks.map((category, categoryIndex) => (
                <div key={categoryIndex} className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full">
                  {/* Category Header */}
                  <div className="content-stretch flex gap-2 items-center relative shrink-0">
                    <p className="font-semibold leading-6 not-italic relative shrink-0 text-[#101828] text-base">
                      {category.category}
                    </p>
                    <div className="bg-[#f2f4f7] rounded-full px-2 py-1">
                      <p className="font-medium leading-4 not-italic text-[#344054] text-xs">
                        {category.tasks.filter(task => task.assigned).length}/{category.tasks.length}
                      </p>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                    {category.tasks.map((task) => (
                      <TaskItem key={task.id} task={task} onToggle={toggleTask} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f9fafb] relative shrink-0 w-full">
          <div className="overflow-hidden relative size-full">
            <div className="box-border content-stretch flex gap-3 items-center justify-end p-4 relative w-full">
              <button
                onClick={onClose}
                className="bg-white box-border content-stretch flex gap-2 items-center justify-center overflow-hidden px-4 py-2 relative rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#d0d5dd] text-[#344054] hover:bg-gray-50 transition-colors"
              >
                <p className="font-semibold leading-5 not-italic relative shrink-0 text-sm">Cancel</p>
              </button>
              <button 
                onClick={handleAssignTasks}
                disabled={assignedCount === 0}
                className={`box-border content-stretch flex gap-2 items-center justify-center overflow-hidden px-4 py-2 relative rounded shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-colors ${
                  assignedCount > 0 
                    ? 'bg-[#3a58ef] text-white hover:bg-[#2947df]' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <p className="font-semibold leading-5 not-italic relative shrink-0 text-sm">
                  Assign {assignedCount} Task{assignedCount !== 1 ? 's' : ''}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}