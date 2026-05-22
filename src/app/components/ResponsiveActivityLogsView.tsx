import React, { useState } from 'react';
import svgPaths from "../imports/svg-qtsumq8dfd";
import newSvgPaths from "../imports/svg-r65vul6vtl";

interface ResponsiveActivityLogsViewProps {
  onNavigationChange?: (view: string) => void;
}

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p16897c00} fill="#1D2939" />
      </svg>
    </div>
  );
}

function Breadcrums() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap whitespace-pre">Human Resources</p>
      <CaretRight />
      <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">Activity Logs</p>
    </div>
  );
}

function HeadingSubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Activity Logs</p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <Breadcrums />
      <HeadingSubHeading />
    </div>
  );
}

function Funnel() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.pafff500} fill="white" />
      </svg>
    </div>
  );
}

function IconButton({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#2947d6]"
      onClick={onClick}
    >
      <Funnel />
    </div>
  );
}

function RightSide({ onFilterToggle }: { onFilterToggle: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
      <IconButton onClick={onFilterToggle} />
    </div>
  );
}

function BodyHeader({ onFilterToggle }: { onFilterToggle: () => void }) {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <LeftSide />
      <RightSide onFilterToggle={onFilterToggle} />
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p2b0a9a80} fill="#5D667B" />
      </svg>
    </div>
  );
}

function EmployeeDropdown({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const employees = ['Vaishali Gohil', 'Jerome Bell', 'Ralph Edwards', 'Theresa Webb'];

  return (
    <div className="relative z-50">
      <div className="bg-white relative rounded-[4px] shrink-0 w-full sm:w-[200px]">
        <div 
          className="flex flex-row items-center overflow-clip rounded-[inherit] size-full cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative w-full">
            <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">{value}</p>
            <CaretDown />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border border-[#eaecf0] rounded-[4px] shadow-lg z-[100] mt-1">
            {employees.map((employee) => (
              <div
                key={employee}
                className="px-[12px] py-[8px] hover:bg-gray-50 cursor-pointer text-[14px] text-[#1d2939]"
                onClick={() => {
                  onChange(employee);
                  setIsOpen(false);
                }}
              >
                {employee}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryDropdown({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ['All Categories', 'Review Call', 'Training', 'Quality issues', 'In-person Meeting'];

  return (
    <div className="relative z-50">
      <div className="bg-white relative rounded-[4px] shrink-0 w-full sm:w-[200px]">
        <div 
          className="flex flex-row items-center overflow-clip rounded-[inherit] size-full cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative w-full">
            <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">{value}</p>
            <CaretDown />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border border-[#eaecf0] rounded-[4px] shadow-lg z-[100] mt-1">
            {categories.map((category) => (
              <div
                key={category}
                className="px-[12px] py-[8px] hover:bg-gray-50 cursor-pointer text-[14px] text-[#1d2939]"
                onClick={() => {
                  onChange(category);
                  setIsOpen(false);
                }}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatusDropdown({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const statuses = ['All Status', 'Open', 'Closed'];

  return (
    <div className="relative z-50">
      <div className="bg-white relative rounded-[4px] shrink-0 w-full sm:w-[180px]">
        <div 
          className="flex flex-row items-center overflow-clip rounded-[inherit] size-full cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative w-full">
            <p className="basis-0 font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">{value}</p>
            <CaretDown />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border border-[#eaecf0] rounded-[4px] shadow-lg z-[100] mt-1">
            {statuses.map((status) => (
              <div
                key={status}
                className="px-[12px] py-[8px] hover:bg-gray-50 cursor-pointer text-[14px] text-[#1d2939]"
                onClick={() => {
                  onChange(status);
                  setIsOpen(false);
                }}
              >
                {status}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CalendarBlank() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p2dec1100} fill="#5D667B" />
      </svg>
    </div>
  );
}

function DateRangeDropdown() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full sm:w-[200px]">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit] cursor-pointer hover:bg-gray-50">
        <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">Select Date Range</p>
        <CalendarBlank />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function ClearAllButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="bg-white relative rounded-[4px] shrink-0 cursor-pointer hover:bg-gray-50"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <p className="font-medium leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">Clear All</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="bg-[#3a58ef] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#2947d6]"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <p className="font-medium leading-[20px] not-italic relative shrink-0 text-white text-[14px] text-nowrap whitespace-pre">Search</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#3a58ef] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function FilterControls({ 
  isVisible, 
  employee, 
  setEmployee, 
  category, 
  setCategory, 
  status, 
  setStatus, 
  onClearAll, 
  onSearch 
}: {
  isVisible: boolean;
  employee: string;
  setEmployee: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  onClearAll: () => void;
  onSearch: () => void;
}) {
  return (
    <div className={`w-full transition-all duration-300 ease-in-out overflow-visible ${isVisible ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="content-stretch flex flex-col lg:flex-row gap-[12px] items-stretch lg:items-center justify-between relative shrink-0 w-full bg-[rgba(249,250,251,0)] rounded-[8px] py-[16px] p-[0px] overflow-visible">
        {/* Left Side - Filter Dropdowns */}
        <div className="content-stretch flex flex-col sm:flex-row gap-[12px] items-stretch sm:items-center relative shrink-0 overflow-visible">
          <EmployeeDropdown value={employee} onChange={setEmployee} />
          <CategoryDropdown value={category} onChange={setCategory} />
          <StatusDropdown value={status} onChange={setStatus} />
          <DateRangeDropdown />
        </div>
        
        {/* Right Side - Action Buttons */}
        <div className="content-stretch flex flex-col sm:flex-row gap-[12px] items-stretch sm:items-center justify-end relative shrink-0">
          <ClearAllButton onClick={onClearAll} />
          <SearchButton onClick={onSearch} />
        </div>
      </div>
    </div>
  );
}

function TabinationSidebarSubItem({ label, count, isActive = false, onClick }: { label: string; count: number; isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`box-border content-stretch flex gap-[8px] h-[40px] items-center leading-[20px] not-italic px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-full cursor-pointer ${
        isActive 
          ? 'bg-[#314bd0] font-medium text-[14px] text-white' 
          : 'font-normal text-[#5d667b] text-[14px] hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">{label}</p>
      <p className="relative shrink-0 text-nowrap whitespace-pre">({count})</p>
    </div>
  );
}

function Tabination({ selectedCategory, setSelectedCategory }: { selectedCategory: string; setSelectedCategory: (category: string) => void }) {
  const categories = [
    { name: 'Review Call', count: 4 },
    { name: 'Training', count: 5 },
    { name: 'Quality issues', count: 12 },
    { name: 'In-person Meeting', count: 7 },
    { name: 'Jerome Bell', count: 4 },
    { name: 'Ralph Edwards', count: 5 },
    { name: 'Theresa Webb', count: 12 }
  ];

  return (
    <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[12px] h-full items-start p-[16px] relative rounded-[8px] shrink-0 w-full lg:w-[250px]">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      {categories.map((category) => (
        <TabinationSidebarSubItem
          key={category.name}
          label={category.name}
          count={category.count}
          isActive={selectedCategory === category.name}
          onClick={() => setSelectedCategory(category.name)}
        />
      ))}
    </div>
  );
}

function ActivityLogEntry({ date, status, person, completed, total, feedback }: {
  date: string;
  status: 'Closed' | 'Open';
  person: string;
  completed: number;
  total: number;
  feedback: string;
}) {
  return (
    <div className="bg-gray-50 relative rounded-[6px] shrink-0 w-full">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
          {/* Date Column */}
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-nowrap whitespace-pre">
            <p className="font-normal leading-[14px] relative shrink-0 text-[#475467] text-[10px]">Date</p>
            <p className="font-medium leading-[18px] relative shrink-0 text-[#101828] text-[12px]">{date}</p>
          </div>

          {/* Status Column */}
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
            <p className="font-normal leading-[14px] not-italic relative shrink-0 text-[#475467] text-[10px] text-nowrap whitespace-pre">Status</p>
            <div className="content-stretch flex gap-[6px] items-center relative rounded-[4px] shrink-0">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[6px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill={status === 'Closed' ? '#027A48' : '#F79009'} r="3" />
                  </svg>
                </div>
                <p className={`font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-right whitespace-pre ${status === 'Closed' ? 'text-[#027a48]' : 'text-[#f79009]'}`}>
                  {status}
                </p>
              </div>
            </div>
          </div>

          {/* Responsible Person Column */}
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-nowrap whitespace-pre">
            <p className="font-normal leading-[14px] relative shrink-0 text-[#475467] text-[10px]">Responsible Person</p>
            <p className="font-medium leading-[18px] relative shrink-0 text-[#101828] text-[12px]">{person}</p>
          </div>

          {/* Actionable Items Column */}
          <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-[120px] xl:w-[150px]">
            <p className="font-normal leading-[14px] not-italic relative shrink-0 text-[#475467] text-[10px] text-nowrap whitespace-pre">Actionable</p>
            <div className="content-stretch flex gap-[6px] items-end relative shrink-0">
              <p className="font-medium leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3a58ef] text-[12px] text-nowrap whitespace-pre">
                <span className="leading-[18px] text-[#1d2939]">{completed}</span>
                <span className="leading-[18px] text-[#1d2939]">/</span>
                <span className="leading-[14px] text-[#98a2b3] text-[10px]">{total} Completed</span>
              </p>
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p388ea630} fill="#3A58EF" />
                </svg>
              </div>
            </div>
          </div>

          {/* Recent Feedback Column */}
          <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-[250px] xl:w-[320px] 2xl:w-[386px]">
            <p className="font-normal leading-[14px] not-italic relative shrink-0 text-[#475467] text-[10px] text-nowrap whitespace-pre">Recent Feedback</p>
            <div className="content-stretch flex gap-[6px] items-start leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap w-full">
              <p className="basis-0 font-medium grow min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#101828] line-clamp-1">
                {feedback}
              </p>
              <p className="font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#314bd0] whitespace-pre cursor-pointer">View More</p>
            </div>
          </div>

          {/* Chat Button */}
          <div className="bg-white box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 size-[36px]">
            <div className="relative shrink-0 size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p2a17ea00} fill="#5D667B" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <div className="box-border content-stretch flex flex-col gap-[12px] p-[16px] relative rounded-[inherit] w-full">
          {/* Top Row - Date, Status, Person */}
          <div className="flex flex-col sm:flex-row gap-[8px] sm:gap-[16px]">
            <div className="flex-1 min-w-0">
              <p className="font-normal leading-[14px] relative text-[#475467] text-[10px] mb-1">Date</p>
              <p className="font-medium leading-[18px] relative text-[#101828] text-[12px]">{date}</p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-normal leading-[14px] relative text-[#475467] text-[10px] mb-1">Status</p>
              <div className="flex gap-[6px] items-center">
                <div className="relative size-[6px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill={status === 'Closed' ? '#027A48' : '#F79009'} r="3" />
                  </svg>
                </div>
                <p className={`font-medium leading-[18px] text-[12px] ${status === 'Closed' ? 'text-[#027a48]' : 'text-[#f79009]'}`}>
                  {status}
                </p>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-normal leading-[14px] relative text-[#475467] text-[10px] mb-1">Responsible Person</p>
              <p className="font-medium leading-[18px] relative text-[#101828] text-[12px] truncate">{person}</p>
            </div>
          </div>

          {/* Second Row - Actionable Items */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-normal leading-[14px] relative text-[#475467] text-[10px] mb-1">Actionable</p>
              <div className="flex gap-[6px] items-center">
                <p className="font-medium text-[12px]">
                  <span className="text-[#1d2939]">{completed}</span>
                  <span className="text-[#1d2939]">/</span>
                  <span className="text-[#98a2b3] text-[10px]">{total} Completed</span>
                </p>
                <div className="relative shrink-0 size-[16px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p388ea630} fill="#3A58EF" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white flex items-center justify-center p-[8px] rounded-[8px] size-[32px]">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2a17ea00} fill="#5D667B" />
                </svg>
              </div>
            </div>
          </div>

          {/* Third Row - Recent Feedback */}
          <div>
            <p className="font-normal leading-[14px] relative text-[#475467] text-[10px] mb-1">Recent Feedback</p>
            <div className="flex gap-[6px] items-start">
              <p className="font-medium leading-[18px] text-[#101828] text-[12px] flex-1 line-clamp-2">
                {feedback.length > 120 ? feedback.substring(0, 120) + '...' : feedback}
              </p>
              {feedback.length > 120 && (
                <p className="font-normal text-[#314bd0] text-[12px] cursor-pointer whitespace-nowrap">View More</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ActivityLogsList({ 
  selectedEmployee, 
  selectedCategory, 
  selectedStatus 
}: { 
  selectedEmployee: string; 
  selectedCategory: string; 
  selectedStatus: string; 
}) {
  const activityLogs = [
    {
      date: "Nov 07, 2024",
      status: "Closed" as const,
      person: "Vaishali Gohil",
      completed: 2,
      total: 6,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions.",
      category: "In-person Meeting"
    },
    {
      date: "Nov 07, 2024",
      status: "Closed" as const,
      person: "Vaishali Gohil",
      completed: 1,
      total: 8,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions.",
      category: "In-person Meeting"
    },
    {
      date: "Nov 07, 2024",
      status: "Open" as const,
      person: "Jerome Bell",
      completed: 4,
      total: 7,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions.",
      category: "Training"
    },
    {
      date: "Nov 07, 2024",
      status: "Closed" as const,
      person: "Ralph Edwards",
      completed: 0,
      total: 6,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions.",
      category: "Quality issues"
    },
    {
      date: "Nov 07, 2024",
      status: "Open" as const,
      person: "Theresa Webb",
      completed: 5,
      total: 5,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions.",
      category: "Review Call"
    },
    {
      date: "Nov 07, 2024",
      status: "Open" as const,
      person: "Vaishali Gohil",
      completed: 4,
      total: 8,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions.",
      category: "In-person Meeting"
    },
    {
      date: "Nov 07, 2024",
      status: "Closed" as const,
      person: "Jerome Bell",
      completed: 4,
      total: 4,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions.",
      category: "Training"
    }
  ];

  // Filter logs based on selections
  const filteredLogs = activityLogs.filter(log => {
    const employeeMatch = selectedEmployee === 'Vaishali Gohil' || log.person === selectedEmployee;
    const categoryMatch = selectedCategory === 'All Categories' || log.category === selectedCategory;
    const statusMatch = selectedStatus === 'All Status' || log.status === selectedStatus;
    
    return employeeMatch && categoryMatch && statusMatch;
  });

  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0 overflow-auto scrollbar-hide">
      {filteredLogs.map((log, index) => (
        <ActivityLogEntry
          key={index}
          date={log.date}
          status={log.status}
          person={log.person}
          completed={log.completed}
          total={log.total}
          feedback={log.feedback}
        />
      ))}
    </div>
  );
}

export default function ResponsiveActivityLogsView({ onNavigationChange }: ResponsiveActivityLogsViewProps) {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState('Vaishali Gohil');
  const [selectedCategory, setSelectedCategory] = useState('In-person Meeting');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const handleFilterToggle = () => {
    setFiltersVisible(!filtersVisible);
  };

  const handleClearAll = () => {
    setSelectedEmployee('Vaishali Gohil');
    setSelectedCategory('All Categories');
    setSelectedStatus('All Status');
  };

  const handleSearch = () => {
    // Search functionality can be implemented here
    console.log('Search with filters:', {
      employee: selectedEmployee,
      category: selectedCategory,
      status: selectedStatus
    });
  };

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-full max-h-[872px] items-start p-[16px] lg:p-[24px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] shrink-0 w-full">
      <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px overflow-visible relative shrink-0 w-full">
        <BodyHeader onFilterToggle={handleFilterToggle} />
        
        <FilterControls 
          isVisible={filtersVisible}
          employee={selectedEmployee}
          setEmployee={setSelectedEmployee}
          category={selectedCategory}
          setCategory={setSelectedCategory}
          status={selectedStatus}
          setStatus={setSelectedStatus}
          onClearAll={handleClearAll}
          onSearch={handleSearch}
        />
        
        <div className="basis-0 content-stretch flex flex-col lg:flex-row gap-[16px] lg:gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full overflow-auto scrollbar-hide">
          <Tabination selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <ActivityLogsList 
            selectedEmployee={selectedEmployee}
            selectedCategory={selectedCategory}
            selectedStatus={selectedStatus}
          />
        </div>
      </div>
    </div>
  );
}