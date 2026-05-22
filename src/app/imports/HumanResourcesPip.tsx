import svgPaths from "./svg-se0mjk1hsp";
import imgFrame1149 from "figma:asset/9d24cedab8344e96204e73d7b051c8e8b97069f2.png";
import { imgG16, imgG32, imgG48 } from "./svg-5ted7";

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
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap whitespace-pre">Staff</p>
      <CaretRight />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">PIP</p>
    </div>
  );
}

function HeadingSubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading & Sub Heading">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Performance Improvement Program</p>
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

function Button() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-[4px] shrink-0 w-[298px]" data-name="Button">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[298px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">Search here</p>
        <MagnifyingGlass />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
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
      <Button />
      <IconButton />
    </div>
  );
}

function BodyHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[5]" data-name="Body Header">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">PIP ID</p>
        </div>
      </div>
    </div>
  );
}

function TableBody() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">PIP-1001</p>
        </div>
      </div>
    </div>
  );
}

function TableBody1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">PIP-1002</p>
        </div>
      </div>
    </div>
  );
}

function TableBody2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">PIP-1003</p>
        </div>
      </div>
    </div>
  );
}

function TableBody3() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">PIP-1004</p>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[93px]">
      <TableHeader />
      <TableBody />
      <TableBody1 />
      <TableBody2 />
      <TableBody3 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Staff Name</p>
        </div>
      </div>
    </div>
  );
}

function TableBody4() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Aarav Mehta</p>
        </div>
      </div>
    </div>
  );
}

function TableBody5() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Nisha Patel</p>
        </div>
      </div>
    </div>
  );
}

function TableBody6() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Karan Singh</p>
        </div>
      </div>
    </div>
  );
}

function TableBody7() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Anaya Gupta</p>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader1 />
      <TableBody4 />
      <TableBody5 />
      <TableBody6 />
      <TableBody7 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">PIP Duration</p>
        </div>
      </div>
    </div>
  );
}

function TableBody8() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">90 Days</p>
        </div>
      </div>
    </div>
  );
}

function TableBody9() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">30 Days</p>
        </div>
      </div>
    </div>
  );
}

function TableBody10() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">60 Days</p>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[111px]">
      <TableHeader2 />
      <TableBody8 />
      <TableBody9 />
      <TableBody10 />
      <TableBody9 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Start Date</p>
        </div>
      </div>
    </div>
  );
}

function TableBody11() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Jan 05, 2025</p>
        </div>
      </div>
    </div>
  );
}

function TableBody12() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Jan 04, 2025</p>
        </div>
      </div>
    </div>
  );
}

function TableBody13() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Jan 01, 2025</p>
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader3 />
      <TableBody11 />
      {[...Array(2).keys()].map((_, i) => (
        <TableBody12 key={i} />
      ))}
      <TableBody13 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">End’s On</p>
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] w-full">Apr 05, 2025</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#98a2b3] text-[10px] w-full">62 Days Remaining</p>
    </div>
  );
}

function TableBody14() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] w-full">Feb 03, 2025</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#98a2b3] text-[10px] w-full">1 Day Remaining</p>
    </div>
  );
}

function TableBody15() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Frame51 />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Apr 04, 2025</p>
    </div>
  );
}

function TableBody16() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] w-full">Jan 31, 2025</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#98a2b3] text-[10px] w-full">Ended 3 Days Ago</p>
    </div>
  );
}

function TableBody17() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Frame53 />
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader4 />
      <TableBody14 />
      <TableBody15 />
      <TableBody16 />
      <TableBody17 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Status</p>
        </div>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="bg-[#ecfdf3] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#12b76a] text-[12px] text-center text-nowrap whitespace-pre">Completed</p>
    </div>
  );
}

function TableBody18() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <Status />
        </div>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="bg-[#fdf9eb] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#d6a921] text-[12px] text-center text-nowrap whitespace-pre">In Progress</p>
    </div>
  );
}

function TableBody19() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <Status1 />
        </div>
      </div>
    </div>
  );
}

function Status2() {
  return (
    <div className="bg-[#fef3f2] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#d92d20] text-[12px] text-center text-nowrap whitespace-pre">Not Cleared</p>
    </div>
  );
}

function TableBody20() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <Status2 />
        </div>
      </div>
    </div>
  );
}

function Status3() {
  return (
    <div className="bg-[#fffaeb] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#f79009] text-[12px] text-center text-nowrap whitespace-pre">Extended</p>
    </div>
  );
}

function TableBody21() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <Status3 />
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]">
      <TableHeader5 />
      <TableBody18 />
      <TableBody19 />
      <TableBody20 />
      <TableBody21 />
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Goal Status</p>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Info">
          <path d={svgPaths.p2103a000} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableBody22() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">3/8</p>
          <Info />
        </div>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Info">
          <path d={svgPaths.p2103a000} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableBody23() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">6/15</p>
          <Info1 />
        </div>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Info">
          <path d={svgPaths.p2103a000} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableBody24() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">8/8</p>
          <Info2 />
        </div>
      </div>
    </div>
  );
}

function Info3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Info">
          <path d={svgPaths.p2103a000} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableBody25() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">4/5</p>
          <Info3 />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[86px]">
      <TableHeader6 />
      <TableBody22 />
      <TableBody23 />
      <TableBody24 />
      <TableBody25 />
    </div>
  );
}

function TableHeader7() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Supported Documents</p>
        </div>
      </div>
    </div>
  );
}

function TableBody26() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre">View (4)</p>
        </div>
      </div>
    </div>
  );
}

function TableBody27() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre">View (2)</p>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[99px]">
      <TableHeader7 />
      <TableBody26 />
      <TableBody27 />
      <TableBody26 />
      <TableBody27 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[960px]">
      <Frame57 />
      <Frame64 />
      <Frame61 />
      <Frame59 />
      <Frame62 />
      <Frame63 />
      <Frame58 />
      <Frame60 />
    </div>
  );
}

function TableHeader8() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] not-italic relative shrink-0 text-[#1d2939] text-[12px] text-nowrap whitespace-pre">Action</p>
        </div>
      </div>
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Eye">
      <div className="absolute bottom-[-30%] left-0 right-[-55%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 26">
          <g id="Eye">
            <path d={svgPaths.p3fd67900} fill="var(--fill-0, #5D667B)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChatCircleDots() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChatCircleDots">
      <div className="absolute bottom-[-45.01%] left-0 right-[-45%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <g id="ChatCircleDots">
            <path d={svgPaths.p99e4cc0} fill="var(--fill-0, #5D667B)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TableBody28() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Eye />
      <ChatCircleDots />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_0px_1px] border-solid bottom-0 left-[-1px] pointer-events-none right-0 top-0" />
      <TableHeader8 />
      {[...Array(4).keys()].map((_, i) => (
        <TableBody28 key={i} />
      ))}
    </div>
  );
}

function Frame54() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
      <Frame71 />
      <Frame56 />
    </div>
  );
}

function IconNavigationChevronDown() {
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

function Component1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Component 214">
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="[white-space-collapse:collapse] font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d2939] text-[16px] text-nowrap w-[26px]">10</p>
        <IconNavigationChevronDown />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[400px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Showing</p>
      <Component1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap whitespace-pre">of 07</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Events</p>
    </div>
  );
}

function IconNavigationDoubleChevronLeft() {
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

function MenuItem() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="menu item">
      <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconNavigationDoubleChevronLeft />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconNavigationChevronLeft() {
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

function MenuItem1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="menu item">
      <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconNavigationChevronLeft />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="menu item">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <p className="[white-space-collapse:collapse] font-['Inter:Medium',sans-serif] font-medium leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d2939] text-[16px] text-center text-nowrap w-[25px]">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#98a2b3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="menu item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5d667b] text-[16px] text-center text-nowrap whitespace-pre">of 01 pages</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-[8px] py-0 relative shrink-0">
      <MenuItem2 />
      <MenuItem3 />
    </div>
  );
}

function IconNavigationChevronRight() {
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

function MenuItem4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="menu item">
      <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconNavigationChevronRight />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconNavigationDoubleChevronRight() {
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

function MenuItem5() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="menu item">
      <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconNavigationDoubleChevronRight />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Pagination">
      <MenuItem />
      <MenuItem1 />
      <Frame3 />
      <MenuItem4 />
      <MenuItem5 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white h-[60px] relative rounded-bl-[12px] rounded-br-[12px] shadow-[0px_-4px_21px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame48 />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <Frame54 />
        <Frame49 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full z-[1]">
      <Frame65 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[872px] isolate items-center left-[332px] p-[24px] rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] top-[86px] w-[1092px]" data-name="Main">
      <BodyHeader />
      <Frame55 />
    </div>
  );
}

function NewApp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="New App">
      <div className="absolute bg-[#d0d5dd] left-[2px] size-[4px] top-[2px]" />
      <div className="absolute bg-[#d0d5dd] left-[2px] size-[4px] top-[10px]" />
      <div className="absolute bg-[#d0d5dd] left-[2px] size-[4px] top-[18px]" />
      <div className="absolute bg-[#d0d5dd] left-[10px] size-[4px] top-[10px]" />
      <div className="absolute bg-[#d0d5dd] left-[10px] size-[4px] top-[2px]" />
      <div className="absolute bg-[#d0d5dd] left-[18px] size-[4px] top-[10px]" />
      <div className="absolute bg-[#d0d5dd] left-[10px] size-[4px] top-[18px]" />
      <div className="absolute bg-[#d0d5dd] left-[18px] size-[4px] top-[2px]" />
      <div className="absolute bg-[#d0d5dd] left-[18px] size-[4px] top-[18px]" />
    </div>
  );
}

function G1() {
  return (
    <div className="[grid-area:1_/_1] h-[27.331px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[32.294px_27.331px] ml-0 mt-0 relative w-[32.294px]" data-name="g16" style={{ maskImage: `url('${imgG16}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 28">
        <g id="g16">
          <path d={svgPaths.p26efd0f0} fill="url(#paint0_linear_156_11185)" id="path28" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_156_11185" x1="32.4191" x2="-1.67222" y1="19.2382" y2="8.94202">
            <stop stopColor="#9E8EF7" />
            <stop offset="1" stopColor="#2C2CB0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <G1 />
    </div>
  );
}

function G() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.03%] mt-[28.37%] place-items-start relative" data-name="g14">
      <ClipPathGroup />
    </div>
  );
}

function G3() {
  return (
    <div className="[grid-area:1_/_1] h-[38.152px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[13.636px_38.152px] ml-0 mt-0 relative w-[13.636px]" data-name="g32" style={{ maskImage: `url('${imgG32}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 39">
        <g id="g32">
          <path d={svgPaths.p32bb12b0} fill="url(#paint0_linear_156_11204)" id="path44" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_156_11204" x1="6.81258" x2="6.81258" y1="1.50236" y2="34.7341">
            <stop stopColor="#3A58EF" />
            <stop offset="0.4731" stopColor="#2597F4" />
            <stop offset="0.8198" stopColor="#18BEF7" />
            <stop offset="1" stopColor="#13CDF8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <G3 />
    </div>
  );
}

function G2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="g30">
      <ClipPathGroup1 />
    </div>
  );
}

function G5() {
  return (
    <div className="[grid-area:1_/_1] h-[19.153px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[24.003px_19.153px] ml-0 mt-0 relative w-[24.003px]" data-name="g48" style={{ maskImage: `url('${imgG48}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
        <g id="g48">
          <path d={svgPaths.p3d163200} fill="url(#paint0_linear_156_11213)" id="path60" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_156_11213" x1="21.6397" x2="1.64322" y1="12.3639" y2="6.32096">
            <stop stopColor="#6B35C5" />
            <stop offset="1" stopColor="#B188F3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative" data-name="Clip path group">
      <G5 />
    </div>
  );
}

function G4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="g46">
      <ClipPathGroup2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative">
      <G />
      <G2 />
      <G4 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[14.731px] relative shrink-0 w-[124.928px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 15">
        <g id="Group">
          <path d={svgPaths.p31190b00} fill="var(--fill-0, #26244A)" id="Vector" />
          <path d={svgPaths.pe7e7a00} fill="var(--fill-0, #26244A)" id="Vector_2" />
          <path d={svgPaths.p2da6b400} fill="var(--fill-0, #26244A)" id="Vector_3" />
          <path d={svgPaths.p81e2c00} fill="var(--fill-0, #26244A)" id="Vector_4" />
          <path d={svgPaths.p3c993c00} fill="var(--fill-0, #26244A)" id="Vector_5" />
          <path d={svgPaths.p32c72580} fill="url(#paint0_linear_156_11194)" id="Vector_6" />
          <path d={svgPaths.p1e4e6800} fill="url(#paint1_linear_156_11194)" id="Vector_7" />
          <path d={svgPaths.p9324500} fill="url(#paint2_linear_156_11194)" id="Vector_8" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_156_11194" x1="88.0772" x2="88.0772" y1="0.101715" y2="14.6143">
            <stop stopColor="#13CDF8" />
            <stop offset="1" stopColor="#3A58EF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_156_11194" x1="112.367" x2="98.0295" y1="5.86546" y2="8.77102">
            <stop stopColor="#6B35C5" />
            <stop offset="1" stopColor="#B188F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_156_11194" x1="126.58" x2="113.127" y1="9.49823" y2="5.03857">
            <stop stopColor="#9E8EF7" />
            <stop offset="1" stopColor="#2C2CB0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <div className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "26.375", "--transform-inner-height": "3.578125" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg] size-full">
            <div className="relative size-full">
              <div className="absolute inset-[-1.7%_-0.45px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 28">
                  <path d="M0.448665 0.448665V26.7977" id="Vector 1" stroke="url(#paint0_linear_166_11192)" strokeLinecap="round" strokeWidth="0.89733" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_166_11192" x1="0.948665" x2="0.948665" y1="0.44505" y2="26.8013">
                      <stop stopColor="#8A75FE" />
                      <stop offset="1" stopColor="#3A58EF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 size-[3.589px]" style={{ "--transform-inner-width": "3.578125", "--transform-inner-height": "3.578125" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[3.589px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="1.79466" cy="1.79466" fill="url(#paint0_linear_166_11256)" id="Ellipse 1" r="1.79466" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_166_11256" x1="1.79466" x2="1.79466" y1="-0.000492359" y2="3.58981">
                  <stop stopColor="#8A75FE" />
                  <stop offset="1" stopColor="#3A58EF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkle() {
  return (
    <div className="relative shrink-0 size-[14.357px]" data-name="Sparkle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Sparkle">
          <path d={svgPaths.p220bd600} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p237c7580} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame66() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#8a75fe] gap-[2.692px] items-center justify-center px-[7.179px] py-[2.692px] relative rounded-[2.692px] shrink-0 to-[#3a58ef] to-[100.01%]">
      <Sparkle />
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10.768px] text-nowrap text-white whitespace-pre">HRMS 24x7</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[5.384px] items-center relative shrink-0 w-[124.729px]">
      <Frame67 />
      <Frame66 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[5.384px] items-end relative shrink-0">
      <Group />
      <Frame68 />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[10.768px] items-center relative shrink-0" data-name="Logo">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Group1 />
        </div>
      </div>
      <Frame69 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative shrink-0" data-name="Component 4">
      <NewApp />
      <Logo />
    </div>
  );
}

function Handshake() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Handshake">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Handshake">
          <path d={svgPaths.p47a5400} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Sidebar Main Item">
      <Handshake />
    </div>
  );
}

function PhoneCall() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="PhoneCall">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="PhoneCall">
          <path d={svgPaths.p1df9b700} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem1() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Sidebar Main Item">
      <PhoneCall />
    </div>
  );
}

function PuzzlePiece() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="PuzzlePiece">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="PuzzlePiece">
          <path d={svgPaths.p328446f0} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem2() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Sidebar Main Item">
      <PuzzlePiece />
    </div>
  );
}

function Question() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Question">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Question">
          <path d={svgPaths.p28d41b80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem3() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Sidebar Main Item">
      <Question />
    </div>
  );
}

function BellRinging() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="BellRinging">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="BellRinging">
          <path d={svgPaths.p1a646700} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem4() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Sidebar Main Item">
      <BellRinging />
    </div>
  );
}

function Gear() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Gear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Gear">
          <path d={svgPaths.p3b6f3900} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem5() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 size-[36px]" data-name="Sidebar Main Item">
      <Gear />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <SidebarMainItem />
      <SidebarMainItem1 />
      <SidebarMainItem2 />
      <SidebarMainItem3 />
      <SidebarMainItem4 />
      <SidebarMainItem5 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f2f4f7] box-border content-stretch flex h-[70px] items-center justify-between left-0 px-[16px] py-[20px] top-0 w-[1440px]" data-name="Header">
      <Component />
      <Frame70 />
    </div>
  );
}

function Frame() {
  return (
    <div className="pointer-events-none relative rounded-[50px] shrink-0 size-[44px]">
      <div className="absolute inset-0 overflow-hidden rounded-[50px]">
        <img alt="" className="absolute h-[273.46%] left-[-49.39%] max-w-none top-[-31.38%] w-[182.5%]" src={imgFrame1149} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[50px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[12px]">shelby@gytap.com</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#1d2939] text-[16px] w-[min-content]">Shelby</p>
      <Frame5 />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="user info">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center px-[16px] py-[8px] relative w-full">
          <UserInfo />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function SquaresFour() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SquaresFour">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SquaresFour">
          <path d={svgPaths.pbcf2100} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <SquaresFour />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Dashboard</p>
    </div>
  );
}

function SidebarMainItem6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 7">
      <SidebarMainItem6 />
    </div>
  );
}

function Buildings() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Buildings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Buildings">
          <path d={svgPaths.p3048fe00} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Buildings />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Company Profile</p>
    </div>
  );
}

function SidebarMainItem7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 20">
      <SidebarMainItem7 />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="User">
          <path d={svgPaths.p1312d880} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <User />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">{`Client's Feed`}</p>
    </div>
  );
}

function SidebarMainItem8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 5">
      <SidebarMainItem8 />
    </div>
  );
}

function UsersThree() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="UsersThree">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="UsersThree">
          <path d={svgPaths.p1b594280} fill="var(--fill-0, #3A58EF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <UsersThree />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">Human Resources</p>
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretDown">
          <path d={svgPaths.p3c55300} fill="var(--fill-0, #1D2939)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame11 />
          <CaretDown />
        </div>
      </div>
    </div>
  );
}

function Rectangle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">My Staff</p>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle />
      <SidebarSubItem />
    </div>
  );
}

function Rectangle1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Compensation</p>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle1 />
      <SidebarSubItem1 />
    </div>
  );
}

function Rectangle2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Attendance Management</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle2 />
      <SidebarSubItem2 />
    </div>
  );
}

function Rectangle3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Holidays</p>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3 />
      <SidebarSubItem3 />
    </div>
  );
}

function Rectangle4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem4() {
  return (
    <div className="basis-0 bg-[#d8defc] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[16px]">PIP</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle4 />
      <SidebarSubItem4 />
    </div>
  );
}

function Rectangle5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Leave Management</p>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle5 />
      <SidebarSubItem5 />
    </div>
  );
}

function Rectangle6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Staff Resignation</p>
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle6 />
      <SidebarSubItem6 />
    </div>
  );
}

function Rectangle7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">{`Policies & Guidelines`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle7 />
      <SidebarSubItem7 />
    </div>
  );
}

function Rectangle8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Client Referral</p>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle8 />
      <SidebarSubItem8 />
    </div>
  );
}

function Rectangle9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Onboarding</p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle9 />
      <SidebarSubItem9 />
    </div>
  );
}

function Rectangle10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Employee Loan</p>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle10 />
      <SidebarSubItem10 />
    </div>
  );
}

function Rectangle11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Appraisals</p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle11 />
      <SidebarSubItem11 />
    </div>
  );
}

function Rectangle12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Leave Utilisation Report</p>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle12 />
      <SidebarSubItem12 />
    </div>
  );
}

function Rectangle13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Task Repository</p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle13 />
      <SidebarSubItem13 />
    </div>
  );
}

function Rectangle14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Management Fee Chart</p>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle14 />
      <SidebarSubItem14 />
    </div>
  );
}

function Rectangle15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Meetings</p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle15 />
      <SidebarSubItem15 />
    </div>
  );
}

function Rectangle16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 rounded-bl-[6px]" />
    </div>
  );
}

function SidebarSubItem16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Activity Logs</p>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle16 />
      <SidebarSubItem16 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame27 />
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame41 />
      <Frame33 />
      <Frame44 />
      <Frame34 />
      <Frame35 />
      <Frame40 />
      <Frame46 />
      <Frame37 />
      <Frame47 />
      <Frame39 />
      <Frame36 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-0 w-[2px]">
      <div className="basis-0 bg-[#eaecf0] grow min-h-px min-w-px shrink-0 w-full" />
      <div className="bg-[rgba(234,236,240,0)] h-[24px] shrink-0 w-full" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start justify-between min-h-px min-w-px mr-[-2px] relative shrink-0">
      <Frame38 />
      <Frame42 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[16px] pr-[2px] py-0 relative w-full">
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="sidebar Item 6">
      <SidebarMainItem9 />
      <Frame45 />
    </div>
  );
}

function UserPlus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="UserPlus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="UserPlus">
          <path d={svgPaths.p25edc380} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <UserPlus />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Hire New Staff</p>
    </div>
  );
}

function CaretRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretRight">
          <path d={svgPaths.p1f32cb80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem10() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame13 />
          <CaretRight1 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 9">
      <SidebarMainItem10 />
    </div>
  );
}

function Book() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Book">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Book">
          <path d={svgPaths.p11bef680} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Book />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">{`Learning & Development`}</p>
    </div>
  );
}

function CaretRight2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretRight">
          <path d={svgPaths.p1f32cb80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem11() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame14 />
          <CaretRight2 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 10">
      <SidebarMainItem11 />
    </div>
  );
}

function ChartLineUp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChartLineUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChartLineUp">
          <path d={svgPaths.p2a2bd600} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <ChartLineUp />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">Performance Management</p>
    </div>
  );
}

function CaretRight3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretRight">
          <path d={svgPaths.p1f32cb80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem12() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <Frame15 />
          <CaretRight3 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 11">
      <SidebarMainItem12 />
    </div>
  );
}

function Monitor() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Monitor">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Monitor">
          <path d={svgPaths.p1f4ad080} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Monitor />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Employee Monitoring</p>
    </div>
  );
}

function CaretRight4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretRight">
          <path d={svgPaths.p1f32cb80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem13() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame16 />
          <CaretRight4 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 12">
      <SidebarMainItem13 />
    </div>
  );
}

function ThumbsUp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ThumbsUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ThumbsUp">
          <path d={svgPaths.p1d152780} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <ThumbsUp />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">{`Feedback & Evaluation`}</p>
    </div>
  );
}

function CaretRight5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretRight">
          <path d={svgPaths.p1f32cb80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem14() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame17 />
          <CaretRight5 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 13">
      <SidebarMainItem14 />
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FileText">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="FileText">
          <path d={svgPaths.p20bd1f00} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <FileText />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Invoices</p>
    </div>
  );
}

function SidebarMainItem15() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 15">
      <SidebarMainItem15 />
    </div>
  );
}

function Package() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Package">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Package">
          <path d={svgPaths.p3431df80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Package />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Resources</p>
    </div>
  );
}

function SidebarMainItem16() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem14() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 21">
      <SidebarMainItem16 />
    </div>
  );
}

function Files() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Files">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Files">
          <path d={svgPaths.p2623d200} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Files />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">HBR Report</p>
    </div>
  );
}

function SidebarMainItem17() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 22">
      <SidebarMainItem17 />
    </div>
  );
}

function ChartBar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ChartBar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ChartBar">
          <path d={svgPaths.p15aae080} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <ChartBar />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Reports</p>
    </div>
  );
}

function CaretRight6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretRight">
          <path d={svgPaths.p1f32cb80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem18() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame21 />
          <CaretRight6 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 16">
      <SidebarMainItem18 />
    </div>
  );
}

function ReadCvLogo() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ReadCvLogo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ReadCvLogo">
          <path d={svgPaths.p24125f00} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <ReadCvLogo />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Hire Local Talent</p>
    </div>
  );
}

function CaretRight7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretRight">
          <path d={svgPaths.p1f32cb80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem19() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame22 />
          <CaretRight7 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 17">
      <SidebarMainItem19 />
    </div>
  );
}

function UserFocus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="UserFocus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="UserFocus">
          <path d={svgPaths.p16d63e80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <UserFocus />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Become an Advisor</p>
    </div>
  );
}

function CaretRight8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretRight">
          <path d={svgPaths.p1f32cb80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem20() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame23 />
          <CaretRight8 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 18">
      <SidebarMainItem20 />
    </div>
  );
}

function Polygon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Polygon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Polygon">
          <path d={svgPaths.p3f94b600} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Polygon />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">PAIR</p>
    </div>
  );
}

function SidebarMainItem21() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem12() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 19">
      <SidebarMainItem21 />
    </div>
  );
}

function Headphones() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Headphones">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Headphones">
          <path d={svgPaths.p2b4b7980} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Headphones />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Support</p>
    </div>
  );
}

function CaretRight9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretRight">
          <path d={svgPaths.p1f32cb80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarMainItem22() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame25 />
          <CaretRight9 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 23">
      <SidebarMainItem22 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0">
      <SidebarItem2 />
      <SidebarItem13 />
      <SidebarItem />
      <SidebarItem1 />
      <SidebarItem3 />
      <SidebarItem4 />
      <SidebarItem5 />
      <SidebarItem6 />
      <SidebarItem7 />
      <SidebarItem8 />
      <SidebarItem14 />
      <SidebarItem15 />
      <SidebarItem9 />
      <SidebarItem10 />
      <SidebarItem11 />
      <SidebarItem12 />
      <SidebarItem16 />
    </div>
  );
}

function ScrollBar() {
  return (
    <div className="bg-[#f2f4f7] h-full overflow-clip relative rounded-[6px] shrink-0 w-[2px]" data-name="Scroll Bar">
      <div className="absolute bg-[#d0d5dd] h-[89px] left-0 rounded-[4px] top-0 w-[2px]" />
    </div>
  );
}

function AllModuleFeatures() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0 w-full" data-name="All Module Features">
      <Frame10 />
      <ScrollBar />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[8px] relative size-full">
          <Frame26 />
          <AllModuleFeatures />
        </div>
      </div>
    </div>
  );
}

function IconNavigationChevronLeft1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Navigation / Chevron--left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Navigation / Chevron--left">
          <path d={svgPaths.p2ed28900} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] right-[-14px] rounded-[31px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] size-[28px] top-[24px]">
      <IconNavigationChevronLeft1 />
    </div>
  );
}

function MyCpeAdminSidebarBase() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[872px] items-start relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] shrink-0 w-[300px]" data-name="my-CPE Admin Sidebar Base">
      <Frame12 />
      <Frame7 />
    </div>
  );
}

function MyCpeAdminSidebarWithLinks() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[86px]" data-name="my-CPE Admin Sidebar - With Links">
      <MyCpeAdminSidebarBase />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[699px] left-[calc(50%+692px)] top-[calc(50%+26.5px)] translate-x-[-50%] translate-y-[-50%] w-[8px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 699">
        <g clipPath="url(#clip0_166_22576)" id="Frame 1686561816">
          <path d={svgPaths.pbc82830} fill="var(--fill-0, #EAECF0)" id="Rectangle 3468284" />
          <path d={svgPaths.p16d772e0} fill="var(--fill-0, #EAECF0)" id="Rectangle 3468286" />
          <rect fill="var(--fill-0, #98A2B3)" height="172" id="Rectangle 3468285" rx="4" width="8" />
        </g>
        <defs>
          <clipPath id="clip0_166_22576">
            <rect fill="white" height="699" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BaseFooter() {
  return (
    <div className="absolute bg-white bottom-0 box-border content-stretch flex items-end left-1/2 px-[24px] py-[16px] translate-x-[-50%] w-[1440px]" data-name="Base Footer">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#101828] text-[0px] text-[14px] text-nowrap whitespace-pre">
        <span>{`©2024 - `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium">www.my-cpe</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium">.com</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium">&nbsp;</span>All rights reserved
      </p>
    </div>
  );
}

export default function HumanResourcesPip() {
  return (
    <div className="bg-[#f2f4f7] relative size-full" data-name="Human Resources > PIP">
      <Main />
      <Header />
      <MyCpeAdminSidebarWithLinks />
      <Frame4 />
      <BaseFooter />
    </div>
  );
}