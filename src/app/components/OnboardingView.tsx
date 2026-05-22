import { useState } from 'react';
import svgPaths from "../imports/svg-42tyuejh1u";

interface OnboardingViewProps {
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
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">Onboarding</p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left Side">
      <Breadcrums />
    </div>
  );
}

function BodyHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[6]" data-name="Body Header">
      <LeftSide />
    </div>
  );
}

function TabItem({ active = false, label }: { active?: boolean; label: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Tab Item">
      <div className="box-border content-stretch flex gap-[10px] items-start px-[16px] py-[8px] relative shrink-0">
        <p className={`font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${active ? 'text-[#3a58ef]' : 'text-[#5d667b]'}`}>{label}</p>
      </div>
      <div className={`h-px shrink-0 w-full ${active ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'}`} />
    </div>
  );
}

function TabNavigation() {
  return (
    <div className="box-border content-stretch flex flex-col isolate items-start pb-[2px] pt-0 px-0 relative shrink-0 w-full z-[4]">
      <div className="box-border content-stretch flex items-start mb-[-2px] relative shrink-0 z-[2]">
        <TabItem active={true} label="All Resources" />
        <TabItem active={false} label="Track Employee" />
      </div>
      <div className="bg-[#eaecf0] h-[2px] mb-[-2px] shrink-0 w-full z-[1]" />
    </div>
  );
}

function HeadingSubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading & Sub Heading">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">All Resources</p>
    </div>
  );
}

function LeftSide1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left Side">
      <HeadingSubHeading />
    </div>
  );
}

function MagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="MagnifyingGlass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="MagnifyingGlass">
          <path d={svgPaths.p1783a7f0} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SearchButton() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-[4px] shrink-0 w-[298px]" data-name="Button">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[298px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">Search here</p>
        <MagnifyingGlass />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function PlusCircle1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="PlusCircle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="PlusCircle">
          <path d={svgPaths.p316b4e00} fill="var(--fill-0, #3A58EF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AddResourceButton() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <PlusCircle1 />
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre">Add Resource</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#3a58ef] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function FilterButton() {
  return (
    <div className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Icon Button">
      <Funnel />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right Side">
      <SearchButton />
      <AddResourceButton />
      <FilterButton />
    </div>
  );
}

function BodyHeader1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[2]" data-name="Body Header">
      <LeftSide1 />
      <RightSide />
    </div>
  );
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">{children}</p>
        </div>
      </div>
    </div>
  );
}

function TableBody({ children, isLink = false }: { children: React.ReactNode; isLink?: boolean }) {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className={`[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap ${isLink ? 'text-[#3a58ef]' : 'text-[#344054]'}`}>
            {children}
          </p>
        </div>
      </div>
    </div>
  );
}

function PencilSimpleLine() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="PencilSimpleLine">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="PencilSimpleLine">
          <path d={svgPaths.pca3b000} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Trash">
          <path d={svgPaths.p1c0c5900} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <PencilSimpleLine />
      <Trash />
    </div>
  );
}

function DataTable() {
  const data = [
    { category: 'IT Training', assignedStaff: '12', lastUpdated: 'Dec 25,2024', resources: 'View (4)' },
    { category: 'Onboarding', assignedStaff: '34', lastUpdated: 'Dec 26,2024', resources: 'View (2)' },
    { category: 'SOPs', assignedStaff: '16', lastUpdated: 'Dec 27,2024', resources: 'View (8)' },
  ];

  return (
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
      {/* Category Column */}
      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
        <TableHeader>Category</TableHeader>
        {data.map((item, index) => (
          <TableBody key={index}>{item.category}</TableBody>
        ))}
      </div>

      {/* Assigned Staff Column */}
      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
        <TableHeader>Assigned Staff</TableHeader>
        {data.map((item, index) => (
          <TableBody key={index}>{item.assignedStaff}</TableBody>
        ))}
      </div>

      {/* Last Updated On Column */}
      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
        <TableHeader>Last Updated On</TableHeader>
        {data.map((item, index) => (
          <TableBody key={index}>{item.lastUpdated}</TableBody>
        ))}
      </div>

      {/* Resources Column */}
      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
        <div className="bg-[#ebeefd] h-[42px] shrink-0 sticky top-0 w-full" data-name="Component 220">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
              <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Resources</p>
            </div>
          </div>
        </div>
        {data.map((item, index) => (
          <TableBody key={index} isLink={true}>{item.resources}</TableBody>
        ))}
      </div>

      {/* Action Column */}
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_0px_1px] border-solid bottom-0 left-[-1px] pointer-events-none right-0 top-0" />
        <TableHeader>Action</TableHeader>
        {data.map((_, index) => (
          <ActionButtons key={index} />
        ))}
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon / Navigation / Chevron--down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon / Navigation / Chevron--down">
          <path d={svgPaths.pab79800} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ShowingDropdown() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Component 214">
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="[white-space-collapse:collapse] font-['Inter:Medium',_sans-serif] font-medium leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d2939] text-[16px] text-nowrap w-[26px]">20</p>
        <ChevronDown />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function PaginationInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[400px]">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Showing</p>
      <ShowingDropdown />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap whitespace-pre">of 500</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Events</p>
    </div>
  );
}

function DoubleChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Navigation / DoubleChevron--left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Navigation / DoubleChevron--left">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <g id="Vector">
            <path d={svgPaths.p32b9a560} fill="var(--fill-0, #5D667B)" />
            <path d={svgPaths.p20dc1080} fill="#5D667B" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Navigation / Chevron--left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Navigation / Chevron--left">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p2ed28900} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Navigation / Chevron--right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Navigation / Chevron--right">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p112ebf00} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DoubleChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Navigation / DoubleChevron--right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Navigation / DoubleChevron--right">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <g id="Vector">
            <path d={svgPaths.p1823e600} fill="var(--fill-0, #5D667B)" />
            <path d={svgPaths.p18139cb0} fill="#5D667B" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PaginationButton({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="menu item">
      <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        {children}
      </div>
      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${active ? 'border-[#98a2b3]' : 'border-[#eaecf0]'}`} />
    </div>
  );
}

function PaginationControls() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Pagination">
      <PaginationButton><DoubleChevronLeft /></PaginationButton>
      <PaginationButton><ChevronLeft /></PaginationButton>
      <div className="box-border content-stretch flex gap-[12px] items-center px-[8px] py-0 relative shrink-0">
        <div className="bg-white relative rounded-[8px] shrink-0" data-name="menu item">
          <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
            <p className="[white-space-collapse:collapse] font-['Inter:Medium',_sans-serif] font-medium leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d2939] text-[16px] text-center text-nowrap w-[25px]">1</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#98a2b3] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="menu item">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5d667b] text-[16px] text-center text-nowrap whitespace-pre">of 25 pages</p>
        </div>
      </div>
      <PaginationButton><ChevronRight /></PaginationButton>
      <PaginationButton><DoubleChevronRight /></PaginationButton>
    </div>
  );
}

function Pagination() {
  return (
    <div className="bg-white h-[60px] relative rounded-bl-[12px] rounded-br-[12px] shadow-[0px_-4px_21px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Pagination">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between px-[24px] py-[16px] relative w-full">
          <PaginationInfo />
          <PaginationControls />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <DataTable />
        <Pagination />
      </div>
    </div>
  );
}

export default function OnboardingView({ onNavigationChange }: OnboardingViewProps) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-full isolate items-center p-[24px] rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-full overflow-auto scrollbar-hide" data-name="Main">
      <BodyHeader />
      <TabNavigation />
      <BodyHeader1 />
      <MainContent />
    </div>
  );
}