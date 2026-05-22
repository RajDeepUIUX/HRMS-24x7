import React, { useState } from 'react';
import svgPaths from "../imports/svg-qtsumq8dfd";

interface ActivityLogsViewProps {
  onNavigationChange?: (view: string) => void;
}

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
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap whitespace-pre">Human Resources</p>
      <CaretRight />
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">Activity Logs</p>
    </div>
  );
}

function HeadingSubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading & Sub Heading">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Activity Logs</p>
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

function Funnel() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Funnel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Funnel">
          <path d={svgPaths.pafff500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Icon Button">
      <Funnel />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right Side">
      <IconButton />
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

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretDown">
          <path d={svgPaths.p2b0a9a80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PersonButton() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">Vaishali Gohil</p>
          <CaretDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function CalendarBlank() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CalendarBlank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CalendarBlank">
          <path d={svgPaths.p2dec1100} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DateButton() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[10px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">Select Date Range</p>
        <CalendarBlank />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function FilterControls() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[347px] ml-auto">
      <PersonButton />
      <DateButton />
    </div>
  );
}

function TabinationSidebarSubItem({ label, count, isActive = false, onClick }: { label: string; count: number; isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`box-border content-stretch flex gap-[8px] h-[40px] items-center leading-[20px] not-italic px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[218px] cursor-pointer ${
        isActive 
          ? 'bg-[#314bd0] font-['Inter:Medium',_sans-serif] font-medium text-[14px] text-white' 
          : 'font-['Inter:Regular',_sans-serif] font-normal text-[#5d667b] text-[14px] hover:bg-gray-100'
      }`}
      data-name="Tabination - Sidebar Sub Item"
      onClick={onClick}
    >
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">{label}</p>
      <p className="relative shrink-0 text-nowrap whitespace-pre">({count})</p>
    </div>
  );
}

function Tabination() {
  const [selectedCategory, setSelectedCategory] = useState('In-person Meeting');
  
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
    <div className="bg-gray-50 box-border content-stretch flex flex-col gap-[12px] h-full items-start p-[16px] relative rounded-[8px] shrink-0 w-[250px]" data-name="Tabination">
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
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        {/* Date Column */}
        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-nowrap whitespace-pre">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#475467] text-[10px]">Date</p>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] relative shrink-0 text-[#101828] text-[12px]">{date}</p>
        </div>

        {/* Status Column */}
        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#475467] text-[10px] text-nowrap whitespace-pre">Status</p>
          <div className="content-stretch flex gap-[6px] items-center relative rounded-[4px] shrink-0">
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[6px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                  <circle cx="3" cy="3" fill={status === 'Closed' ? '#027A48' : '#F79009'} id="Ellipse 1" r="3" />
                </svg>
              </div>
              <p className={`font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-right whitespace-pre ${status === 'Closed' ? 'text-[#027a48]' : 'text-[#f79009]'}`}>
                {status}
              </p>
            </div>
          </div>
        </div>

        {/* Responsible Person Column */}
        <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-nowrap whitespace-pre">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[14px] relative shrink-0 text-[#475467] text-[10px]">Responsible Person</p>
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] relative shrink-0 text-[#101828] text-[12px]">{person}</p>
        </div>

        {/* Actionable Items Column */}
        <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-[150px]">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#475467] text-[10px] text-nowrap whitespace-pre">Actionable</p>
          <div className="content-stretch flex gap-[6px] items-end relative shrink-0">
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3a58ef] text-[12px] text-nowrap whitespace-pre">
              <span className="leading-[18px] text-[#1d2939]">{completed}</span>
              <span className="leading-[18px] text-[#1d2939]">/</span>
              <span className="leading-[14px] text-[#98a2b3] text-[10px]">{total} Completed</span>
            </p>
            <div className="relative shrink-0 size-[16px]" data-name="ArrowUpRight">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="ArrowUpRight">
                  <path d={svgPaths.p388ea630} fill="var(--fill-0, #3A58EF)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Recent Feedback Column */}
        <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-[386px]">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#475467] text-[10px] text-nowrap whitespace-pre">Recent Feedback</p>
          <div className="content-stretch flex gap-[6px] items-start leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap w-full">
            <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Medium',_sans-serif] font-medium grow min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#101828]">
              {feedback}
            </p>
            <p className="font-['Inter:Regular',_sans-serif] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[#314bd0] whitespace-pre cursor-pointer">View More</p>
          </div>
        </div>

        {/* Chat Button */}
        <div className="bg-white box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 size-[36px]">
          <div className="relative shrink-0 size-[24px]" data-name="ChatCircleDots">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="ChatCircleDots">
                <path d={svgPaths.p2a17ea00} fill="var(--fill-0, #5D667B)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function ActivityLogsList() {
  const activityLogs = [
    {
      date: "Nov 07, 2024",
      status: "Closed" as const,
      person: "Vaishali Gohil",
      completed: 2,
      total: 6,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions. "
    },
    {
      date: "Nov 07, 2024",
      status: "Closed" as const,
      person: "Vaishali Gohil",
      completed: 1,
      total: 8,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions. "
    },
    {
      date: "Nov 07, 2024",
      status: "Open" as const,
      person: "Vaishali Gohil",
      completed: 4,
      total: 7,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions. "
    },
    {
      date: "Nov 07, 2024",
      status: "Closed" as const,
      person: "Vaishali Gohil",
      completed: 0,
      total: 6,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions. "
    },
    {
      date: "Nov 07, 2024",
      status: "Open" as const,
      person: "Vaishali Gohil",
      completed: 5,
      total: 5,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions. "
    },
    {
      date: "Nov 07, 2024",
      status: "Open" as const,
      person: "Vaishali Gohil",
      completed: 4,
      total: 8,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions. "
    },
    {
      date: "Nov 07, 2024",
      status: "Closed" as const,
      person: "Vaishali Gohil",
      completed: 4,
      total: 4,
      feedback: "Hi Team. While conducting a skip meeting with Yash Jani's team, I received feedback from one of the team members, Manoj Sawansa. He mentioned that in PTC training courses, the questions asked in the quiz are out of the syllabus. He faced this issue with the training on Accounting Overview and Individual Tax Training. He has mentioned that L&D training for Krunal. Kindly look into the feedback and reachout to Manoj if there are any further questions. "
    }
  ];

  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      {activityLogs.map((log, index) => (
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

export default function ActivityLogsView({ onNavigationChange }: ActivityLogsViewProps) {
  return (
    <div className="basis-0 bg-white grow h-[872px] min-h-px min-w-px relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] shrink-0">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[872px] items-start p-[24px] relative w-full">
          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full">
            <BodyHeader />
            <FilterControls />
            <div className="basis-0 content-stretch flex gap-[24px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
              <Tabination />
              <ActivityLogsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}