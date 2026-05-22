import svgPaths from "./svg-xuqj0le7za";
import imgFrame1149 from "figma:asset/9d24cedab8344e96204e73d7b051c8e8b97069f2.png";
import { imgG16, imgG32, imgG48 } from "./svg-om86g";

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
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">Holidays</p>
    </div>
  );
}

function HeadingSubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Heading & Sub Heading">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full">Holidays</p>
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] relative shrink-0 text-[#98a2b3] text-[12px] w-full">Manage and schedule company-wide holidays with ease.</p>
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
    <div className="bg-gray-50 relative rounded-[4px] shrink-0 w-[298px]" data-name="Button">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative w-[298px]">
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
          <path d={svgPaths.p316b4e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Button">
      <PlusCircle1 />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Add Holiday</p>
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right Side">
      <Button />
      <Button1 />
    </div>
  );
}

function BodyHeader() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[6]" data-name="Body Header">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function UploadSimple() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="UploadSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="UploadSimple">
          <path d={svgPaths.p1605e8f0} fill="var(--fill-0, #3A58EF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button">
      <UploadSimple />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre">Import</p>
    </div>
  );
}

function DownloadSimple() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="DownloadSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="DownloadSimple">
          <path d={svgPaths.p22211200} fill="var(--fill-0, #3A58EF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button">
      <DownloadSimple />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre">Export</p>
    </div>
  );
}

function RightSide1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right Side">
      <Button3 />
      <p className="font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[20px] not-italic relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre">|</p>
      <Button4 />
    </div>
  );
}

function CalendarBlank() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CalendarBlank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CalendarBlank">
          <path d={svgPaths.p2dec1100} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SwitcherItem() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[4px] items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Switcher item">
      <CalendarBlank />
    </div>
  );
}

function ListBullets() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ListBullets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ListBullets">
          <path d={svgPaths.pc471600} fill="var(--fill-0, #1D2939)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SwitcherItem1() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[4px] items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Switcher item">
      <ListBullets />
    </div>
  );
}

function Switcher() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-[4px] shrink-0" data-name="Switcher">
      <div className="content-stretch flex items-start overflow-clip relative">
        <SwitcherItem />
        <SwitcherItem1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame2095585267() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <RightSide1 />
      <Switcher />
    </div>
  );
}

function BodyHeader1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[4]" data-name="Body Header">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-center text-nowrap whitespace-pre">Jan 25 - Dec 25</p>
      <Frame2095585267 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Name</p>
        </div>
      </div>
    </div>
  );
}

function TableBody() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Makar Sankranti/Hazrat Ali Jayanti</p>
        </div>
      </div>
    </div>
  );
}

function TableBody1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Basi Uttarayan/Pongal/Thiruvalluvar Day</p>
        </div>
      </div>
    </div>
  );
}

function TableBody2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Eid al-Adha</p>
        </div>
      </div>
    </div>
  );
}

function TableBody3() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Independence Day</p>
        </div>
      </div>
    </div>
  );
}

function TableBody4() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Dussehra/ Gandhi Jayanti</p>
        </div>
      </div>
    </div>
  );
}

function TableBody5() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Diwali Additional Holiday</p>
        </div>
      </div>
    </div>
  );
}

function TableBody6() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Diwali</p>
        </div>
      </div>
    </div>
  );
}

function TableBody7() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Diwali New Year\ Govardhan Puja</p>
        </div>
      </div>
    </div>
  );
}

function TableBody8() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Christmas</p>
        </div>
      </div>
    </div>
  );
}

function TableBody9() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Boxing Day</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584912() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody />
      <TableBody1 />
      <TableBody2 />
      <TableBody3 />
      <TableBody4 />
      <TableBody5 />
      <TableBody6 />
      <TableBody7 />
      <TableBody8 />
      <TableBody9 />
    </div>
  );
}

function Frame2095584913() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[300px]">
      <TableHeader />
      <Frame2095584912 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Date</p>
        </div>
      </div>
    </div>
  );
}

function TableBody10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Jan 14, 2025</p>
    </div>
  );
}

function TableBody11() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Jan 15, 2025</p>
    </div>
  );
}

function TableBody12() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Jun 06, 2025</p>
    </div>
  );
}

function TableBody13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Aug 15, 2025</p>
    </div>
  );
}

function TableBody14() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Oct 02, 2025</p>
    </div>
  );
}

function TableBody15() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Oct 20, 2025</p>
    </div>
  );
}

function TableBody16() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Oct 21, 2025</p>
    </div>
  );
}

function TableBody17() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Oct 22, 2025</p>
    </div>
  );
}

function TableBody18() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Dec 25, 2025</p>
    </div>
  );
}

function TableBody19() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0 w-[130px]" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Dec 26, 2025</p>
    </div>
  );
}

function Frame2095584917() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody10 />
      <TableBody11 />
      <TableBody12 />
      <TableBody13 />
      <TableBody14 />
      <TableBody15 />
      <TableBody16 />
      <TableBody17 />
      <TableBody18 />
      <TableBody19 />
    </div>
  );
}

function Frame2095584915() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[164px]">
      <TableHeader1 />
      <Frame2095584917 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Type</p>
        </div>
      </div>
    </div>
  );
}

function TableBody20() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Regional</p>
        </div>
      </div>
    </div>
  );
}

function TableBody22() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Public</p>
        </div>
      </div>
    </div>
  );
}

function TableBody25() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Company Specific</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584918() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody20 />
      <TableBody20 />
      <TableBody22 />
      <TableBody22 />
      <TableBody22 />
      <TableBody25 />
      <TableBody22 />
      <TableBody20 />
      <TableBody22 />
      <TableBody25 />
    </div>
  );
}

function Frame2095584914() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[180px]">
      <TableHeader2 />
      <Frame2095584918 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Description</p>
        </div>
      </div>
    </div>
  );
}

function TableBody30() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Celebrates the harvest festival and the birth anniversary of Hazrat Ali.</p>
        </div>
      </div>
    </div>
  );
}

function TableBody31() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{`A festival marking the harvest, gratitude to nature, and Tamil poet Thiruvalluvar's day.`}</p>
        </div>
      </div>
    </div>
  );
}

function TableBody32() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{`Islamic festival of sacrifice commemorating Ibrahim's devotion and faith in Allah.`}</p>
        </div>
      </div>
    </div>
  );
}

function TableBody33() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{`Celebrates the nation's independence from British rule on August 15th.`}</p>
        </div>
      </div>
    </div>
  );
}

function TableBody34() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Marks the victory of good over evil and the birth anniversary of Mahatma Gandhi.</p>
        </div>
      </div>
    </div>
  );
}

function TableBody35() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">An extra day off during the Diwali festival celebrations.</p>
        </div>
      </div>
    </div>
  );
}

function TableBody36() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">The Hindu festival of lights symbolizing the victory of light over darkness.</p>
        </div>
      </div>
    </div>
  );
}

function TableBody37() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Celebrates the Hindu New Year and Govardhan Puja, offering prayers to Lord Krishna.</p>
        </div>
      </div>
    </div>
  );
}

function TableBody38() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Commemorates the birth of Jesus Christ, celebrated on December 25th.</p>
        </div>
      </div>
    </div>
  );
}

function TableBody39() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Celebrated the day after Christmas, traditionally for giving gifts to the needy.</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584920() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody30 />
      <TableBody31 />
      <TableBody32 />
      <TableBody33 />
      <TableBody34 />
      <TableBody35 />
      <TableBody36 />
      <TableBody37 />
      <TableBody38 />
      <TableBody39 />
    </div>
  );
}

function Frame2095584916() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader3 />
      <Frame2095584920 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Action</p>
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

function TableBody40() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <PencilSimpleLine />
      <Trash />
    </div>
  );
}

function Frame2095584648() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeader4 />
      {[...Array(10).keys()].map((_, i) => (
        <TableBody40 key={i} />
      ))}
    </div>
  );
}

function Frame2095584919() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Frame2095584913 />
      <Frame2095584915 />
      <Frame2095584914 />
      <Frame2095584916 />
      <Frame2095584648 />
    </div>
  );
}

function Frame2095585332() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative size-full">
        <Frame2095584919 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[872px] isolate items-center left-[332px] p-[24px] rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] top-[86px] w-[1092px]" data-name="Main">
      <BodyHeader />
      <BodyHeader1 />
      <Frame2095585332 />
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

function G16() {
  return (
    <div className="[grid-area:1_/_1] h-[27.331px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[32.294px_27.331px] ml-0 mt-0 relative w-[32.294px]" data-name="g16" style={{ maskImage: `url('${imgG16}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 28">
        <g id="g16">
          <path d={svgPaths.p26efd0f0} fill="url(#paint0_linear_12_8168)" id="path28" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_12_8168" x1="32.4191" x2="-1.67222" y1="19.2382" y2="8.94202">
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
      <G16 />
    </div>
  );
}

function G14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.032%] mt-[28.374%] place-items-start relative" data-name="g14">
      <ClipPathGroup />
    </div>
  );
}

function G32() {
  return (
    <div className="[grid-area:1_/_1] h-[38.152px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[13.636px_38.152px] ml-0 mt-0 relative w-[13.636px]" data-name="g32" style={{ maskImage: `url('${imgG32}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 39">
        <g id="g32">
          <path d={svgPaths.p32bb12b0} fill="url(#paint0_linear_12_8162)" id="path44" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_12_8162" x1="6.81258" x2="6.81258" y1="1.50236" y2="34.7341">
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
      <G32 />
    </div>
  );
}

function G30() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="g30">
      <ClipPathGroup1 />
    </div>
  );
}

function G48() {
  return (
    <div className="[grid-area:1_/_1] h-[19.153px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[24.003px_19.153px] ml-0 mt-0 relative w-[24.003px]" data-name="g48" style={{ maskImage: `url('${imgG48}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
        <g id="g48">
          <path d={svgPaths.p3d163200} fill="url(#paint0_linear_12_8150)" id="path60" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_12_8150" x1="21.6397" x2="1.64322" y1="12.3639" y2="6.32096">
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
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[0.001%] mt-0 place-items-start relative" data-name="Clip path group">
      <G48 />
    </div>
  );
}

function G46() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.001%] mt-[0.003%] place-items-start relative" data-name="g46">
      <ClipPathGroup2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative">
      <G14 />
      <G30 />
      <G46 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[14.731px] relative shrink-0 w-[124.928px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 15">
        <g id="Group">
          <path d={svgPaths.p2f46ef80} fill="var(--fill-0, #26244A)" id="Vector" />
          <path d={svgPaths.p38d7d500} fill="var(--fill-0, #26244A)" id="Vector_2" />
          <path d={svgPaths.pf7e5180} fill="var(--fill-0, #26244A)" id="Vector_3" />
          <path d={svgPaths.p33947500} fill="var(--fill-0, #26244A)" id="Vector_4" />
          <path d={svgPaths.p2060ec00} fill="var(--fill-0, #26244A)" id="Vector_5" />
          <path d={svgPaths.p19cb1300} fill="url(#paint0_linear_43_27441)" id="Vector_6" />
          <path d={svgPaths.p26c79570} fill="url(#paint1_linear_43_27441)" id="Vector_7" />
          <path d={svgPaths.p26828f70} fill="url(#paint2_linear_43_27441)" id="Vector_8" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_43_27441" x1="88.0771" x2="88.0771" y1="0.101701" y2="14.6143">
            <stop stopColor="#13CDF8" />
            <stop offset="1" stopColor="#3A58EF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_43_27441" x1="112.367" x2="98.0294" y1="5.86544" y2="8.77101">
            <stop stopColor="#6B35C5" />
            <stop offset="1" stopColor="#B188F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_43_27441" x1="126.58" x2="113.127" y1="9.49822" y2="5.03855">
            <stop stopColor="#9E8EF7" />
            <stop offset="1" stopColor="#2C2CB0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame2095585335() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <div className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "26.375", "--transform-inner-height": "3.578125" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg] size-full">
            <div className="relative size-full">
              <div className="absolute inset-[-1.7%_-0.45px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 28">
                  <path d="M1 1V27.349" id="Vector 1" stroke="url(#paint0_linear_43_12231)" strokeLinecap="round" strokeWidth="0.89733" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_43_12231" x1="1.5" x2="1.5" y1="0.996386" y2="27.3526">
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
      <div className="flex h-[3.578px] items-center justify-center relative shrink-0 w-[3.578px]">
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[3.589px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="1.79466" cy="1.79466" fill="url(#paint0_linear_43_12187)" id="Ellipse 1" r="1.79466" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_43_12187" x1="1.79466" x2="1.79466" y1="-0.000492359" y2="3.58981">
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
          <path d={svgPaths.p128f5500} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p20778080} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2095585334() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#8a75fe] gap-[2.692px] items-center justify-center px-[7.179px] py-[2.692px] relative rounded-[2.692px] shrink-0 to-[#3a58ef] to-[100.01%]">
      <Sparkle />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[10.768px] text-nowrap text-white whitespace-pre">HRMS 24x7</p>
    </div>
  );
}

function Frame2095585336() {
  return (
    <div className="content-stretch flex gap-[5.384px] items-center relative shrink-0 w-[124.729px]">
      <Frame2095585335 />
      <Frame2095585334 />
    </div>
  );
}

function Frame2095585337() {
  return (
    <div className="content-stretch flex flex-col gap-[5.384px] items-end relative shrink-0">
      <Group />
      <Frame2095585336 />
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
      <Frame2095585337 />
    </div>
  );
}

function Component4() {
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
          <path d={svgPaths.p2d020c00} fill="var(--fill-0, #5D667B)" id="Vector" />
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
          <path d={svgPaths.p5e1ae80} fill="var(--fill-0, #5D667B)" id="Vector" />
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

function Frame2095585409() {
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
      <Component4 />
      <Frame2095585409 />
    </div>
  );
}

function Frame1149() {
  return (
    <div className="pointer-events-none relative rounded-[50px] shrink-0 size-[44px]">
      <div className="absolute inset-0 overflow-hidden rounded-[50px]">
        <img alt="" className="absolute h-[273.46%] left-[-49.39%] max-w-none top-[-31.38%] w-[182.5%]" src={imgFrame1149} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[50px]" />
    </div>
  );
}

function Frame1686561879() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[12px]">shelby@gytap.com</p>
    </div>
  );
}

function Frame1150() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#1d2939] text-[16px]" style={{ width: "min-content" }}>
        Shelby
      </p>
      <Frame1686561879 />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="user info">
      <Frame1149 />
      <Frame1150 />
    </div>
  );
}

function Frame1000003136() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center px-[16px] py-[8px] relative w-full">
          <UserInfo />
        </div>
      </div>
    </div>
  );
}

function Frame1686561918() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame1000003136 />
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

function Frame1686561880() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <SquaresFour />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Dashboard</p>
    </div>
  );
}

function SidebarMainItem6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561880 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem7() {
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

function Frame1686561883() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Buildings />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Company Profile</p>
    </div>
  );
}

function SidebarMainItem7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561883 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem20() {
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

function Frame1686561884() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <User />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">{`Client's Feed`}</p>
    </div>
  );
}

function SidebarMainItem8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561884 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem5() {
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
          <path d={svgPaths.p3a3fe080} fill="var(--fill-0, #3A58EF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686561886() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <UsersThree />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">Human Resources</p>
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
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561886 />
          <CaretDown />
        </div>
      </div>
    </div>
  );
}

function Rectangle3468295() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">My Staff</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561931() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468295 />
      <SidebarSubItem />
    </div>
  );
}

function Rectangle3468296() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Compensation</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561932() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468296 />
      <SidebarSubItem1 />
    </div>
  );
}

function Rectangle3468297() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Attendance Management</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561933() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468297 />
      <SidebarSubItem2 />
    </div>
  );
}

function Rectangle3468298() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem3() {
  return (
    <div className="basis-0 bg-[#d8defc] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[16px]">Holidays</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561934() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468298 />
      <SidebarSubItem3 />
    </div>
  );
}

function Rectangle3468299() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">PIP</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561935() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468299 />
      <SidebarSubItem4 />
    </div>
  );
}

function Rectangle3468300() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Leave Management</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561936() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468300 />
      <SidebarSubItem5 />
    </div>
  );
}

function Rectangle3468301() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">{`Policies & Guidelines`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561937() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468301 />
      <SidebarSubItem6 />
    </div>
  );
}

function Rectangle3468302() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Onboarding</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561938() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468302 />
      <SidebarSubItem7 />
    </div>
  );
}

function Rectangle3468303() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Employee Loan</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561939() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468303 />
      <SidebarSubItem8 />
    </div>
  );
}

function Rectangle3468304() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Appraisals</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561944() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468304 />
      <SidebarSubItem9 />
    </div>
  );
}

function Rectangle3468305() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Task Repository</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561941() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468305 />
      <SidebarSubItem10 />
    </div>
  );
}

function Rectangle3468306() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Management Fee Chart</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561952() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468306 />
      <SidebarSubItem11 />
    </div>
  );
}

function Rectangle3468307() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Meetings</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561943() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468307 />
      <SidebarSubItem12 />
    </div>
  );
}

function Rectangle3468308() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Activity Logs</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561940() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Rectangle3468308 />
      <SidebarSubItem13 />
    </div>
  );
}

function Frame1686561942() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <Frame1686561931 />
      <Frame1686561932 />
      <Frame1686561933 />
      <Frame1686561934 />
      <Frame1686561935 />
      <Frame1686561936 />
      <Frame1686561937 />
      <Frame1686561938 />
      <Frame1686561939 />
      <Frame1686561944 />
      <Frame1686561941 />
      <Frame1686561952 />
      <Frame1686561943 />
      <Frame1686561940 />
    </div>
  );
}

function Frame1686561945() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-0 w-[2px]">
      <div className="basis-0 bg-[#eaecf0] grow min-h-px min-w-px shrink-0 w-full" />
      <div className="bg-[rgba(234,236,240,0)] h-[24px] shrink-0 w-full" />
    </div>
  );
}

function Frame1686561946() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start justify-between min-h-px min-w-px mr-[-2px] relative shrink-0">
      <Frame1686561942 />
      <Frame1686561945 />
    </div>
  );
}

function Frame1686561947() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex items-start pl-[16px] pr-[2px] py-0 relative w-full">
          <Frame1686561946 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="sidebar Item 6">
      <SidebarMainItem9 />
      <Frame1686561947 />
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

function Frame1686561889() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <UserPlus />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Hire New Staff</p>
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
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561889 />
          <CaretRight1 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem9() {
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

function Frame1686561890() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Book />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">{`Learning & Development`}</p>
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
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561890 />
          <CaretRight2 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem10() {
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

function Frame1686561891() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <ChartLineUp />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">Performance Management</p>
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
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <Frame1686561891 />
          <CaretRight3 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem11() {
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

function Frame1686561892() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Monitor />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Employee Monitoring</p>
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
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561892 />
          <CaretRight4 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem12() {
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

function Frame1686561893() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <ThumbsUp />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">{`Feedback & Evaluation`}</p>
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
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561893 />
          <CaretRight5 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem13() {
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

function Frame1686561894() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <FileText />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Invoices</p>
    </div>
  );
}

function SidebarMainItem15() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561894 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem15() {
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
          <path d={svgPaths.p36b06100} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686561895() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Package />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Resources</p>
    </div>
  );
}

function SidebarMainItem16() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561895 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem21() {
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

function Frame1686561896() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Files />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">HBR Report</p>
    </div>
  );
}

function SidebarMainItem17() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561896 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem22() {
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

function Frame1686561897() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <ChartBar />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Reports</p>
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
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561897 />
          <CaretRight6 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem16() {
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

function Frame1686561898() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <ReadCvLogo />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Hire Local Talent</p>
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
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561898 />
          <CaretRight7 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem17() {
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

function Frame1686561899() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <UserFocus />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Become an Advisor</p>
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
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561899 />
          <CaretRight8 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem18() {
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
          <path d={svgPaths.p79fd680} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1686561900() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Polygon />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">PAIR</p>
    </div>
  );
}

function SidebarMainItem21() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Main Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561900 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem19() {
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

function Frame1686561901() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Headphones />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[14px]">Support</p>
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
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Frame1686561901 />
          <CaretRight9 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem23() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="sidebar Item 23">
      <SidebarMainItem22 />
    </div>
  );
}

function Frame1686561885() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0">
      <SidebarItem7 />
      <SidebarItem20 />
      <SidebarItem5 />
      <SidebarItem6 />
      <SidebarItem9 />
      <SidebarItem10 />
      <SidebarItem11 />
      <SidebarItem12 />
      <SidebarItem13 />
      <SidebarItem15 />
      <SidebarItem21 />
      <SidebarItem22 />
      <SidebarItem16 />
      <SidebarItem17 />
      <SidebarItem18 />
      <SidebarItem19 />
      <SidebarItem23 />
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
      <Frame1686561885 />
      <ScrollBar />
    </div>
  );
}

function Frame1686561888() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="overflow-x-clip overflow-y-auto relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[8px] relative size-full">
          <Frame1686561918 />
          <AllModuleFeatures />
        </div>
      </div>
    </div>
  );
}

function IconNavigationChevronLeft() {
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

function Frame1686561882() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] right-[-14px] rounded-[31px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] size-[28px] top-[24px]">
      <IconNavigationChevronLeft />
    </div>
  );
}

function MyCpeAdminSidebarBase() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[872px] items-start relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] shrink-0 w-[300px]" data-name="my-CPE Admin Sidebar Base">
      <Frame1686561888 />
      <Frame1686561882 />
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

function Frame1686561816() {
  return (
    <div className="absolute h-[699px] translate-x-[-50%] translate-y-[-50%] w-[8px]" style={{ top: "calc(50% + 26.5px)", left: "calc(50% + 692px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 699">
        <g clipPath="url(#clip0_43_12048)" id="Frame 1686561816">
          <path d={svgPaths.pbc82830} fill="var(--fill-0, #EAECF0)" id="Rectangle 3468284" />
          <path d={svgPaths.p16d772e0} fill="var(--fill-0, #EAECF0)" id="Rectangle 3468286" />
          <rect fill="var(--fill-0, #98A2B3)" height="172" id="Rectangle 3468285" rx="4" width="8" />
        </g>
        <defs>
          <clipPath id="clip0_43_12048">
            <rect fill="white" height="699" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white bottom-0 box-border content-stretch flex items-end left-1/2 px-[24px] py-[16px] translate-x-[-50%] w-[1440px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#101828] text-[0px] text-[14px] text-nowrap whitespace-pre">
        <span>{`©2024 - `}</span>
        <span className="font-['Inter:Medium',_sans-serif] font-medium">www.my-cpe</span>
        <span className="font-['Inter:Medium',_sans-serif] font-medium">.com</span>
        <span className="font-['Inter:Medium',_sans-serif] font-medium">&nbsp;</span>All rights reserved
      </p>
    </div>
  );
}

export default function HumanResourcesHolidaysListView() {
  return (
    <div className="bg-[#f2f4f7] relative size-full" data-name="Human Resources > Holidays > List View">
      <Main />
      <Header />
      <MyCpeAdminSidebarWithLinks />
      <Frame1686561816 />
      <Footer />
    </div>
  );
}