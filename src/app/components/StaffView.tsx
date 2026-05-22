import { useState } from 'react';
import svgPaths from "../imports/svg-tmjjl4g43g";
import imgFrame1149 from "figma:asset/9d24cedab8344e96204e73d7b051c8e8b97069f2.png";
import { imgG16, imgG32, imgG48 } from "../imports/svg-lk81k";

type ViewType = 'task-repository' | 'compensation' | 'holidays' | 'staff';

interface StaffViewProps {
  onNavigationChange?: (view: ViewType) => void;
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
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">My Staff</p>
    </div>
  );
}

function HeadingSubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Heading & Sub Heading">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full">My Staff</p>
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] relative shrink-0 text-[#98a2b3] text-[12px] w-full">Manage and view in depth data for your staff.</p>
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

function SearchButton() {
  return (
    <div className="bg-gray-50 relative rounded-[4px] shrink-0 w-[298px]" data-name="Button">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[298px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">Search here</p>
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
      <FilterButton />
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

function TimeAttendance() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1044px] z-[3]" data-name="Time & Attendance">
      <BodyHeader />
    </div>
  );
}

// Avatar components for different staff members
function AvatarFemale07() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Female 07">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Female 07">
          <path d={svgPaths.p372f3200} fill="var(--fill-0, #D8DEFC)" id="path210" />
          <path d={svgPaths.p18590b00} fill="var(--fill-0, #475467)" id="path212" />
          <path d={svgPaths.p16cf0780} fill="var(--fill-0, #101828)" id="path214" />
          <path d={svgPaths.p2c65b280} fill="var(--fill-0, #475467)" id="path216" />
          <path d={svgPaths.p55ff9f0} fill="var(--fill-0, #D0D5DD)" id="path218" />
          <path d={svgPaths.pff01180} fill="var(--fill-0, #475467)" id="path220" />
          <path d={svgPaths.p868e800} fill="var(--fill-0, #101828)" id="path222" />
          <path d={svgPaths.p3da0db00} fill="var(--fill-0, #F97066)" id="path224" />
          <path d={svgPaths.pc888d80} fill="var(--fill-0, #101828)" id="path226" />
          <path d={svgPaths.p1156640} fill="var(--fill-0, #F97066)" id="path228" />
          <path d={svgPaths.p38d086f0} fill="var(--fill-0, #101828)" id="path230" />
          <path d={svgPaths.pe2c2100} fill="var(--fill-0, #101828)" id="path232" />
          <path d={svgPaths.p32aaf880} fill="var(--fill-0, #101828)" id="path234" />
          <path d={svgPaths.p2ec04680} fill="var(--fill-0, #101828)" id="path236" />
          <path d={svgPaths.p544a580} fill="var(--fill-0, #101828)" id="path238" />
          <path d={svgPaths.p160c7380} fill="var(--fill-0, #101828)" id="path240" />
          <path d={svgPaths.p9b4b5f0} fill="var(--fill-0, #101828)" id="path242" />
          <path d={svgPaths.p34cb8d00} fill="var(--fill-0, #101828)" id="path244" />
          <path d={svgPaths.p3dcc6100} fill="var(--fill-0, #101828)" id="path246" />
          <path d={svgPaths.p3f521c70} fill="var(--fill-0, #F97066)" id="path248" />
          <path d={svgPaths.p30bc3900} fill="var(--fill-0, #D0D5DD)" id="path250" />
          <path d={svgPaths.p20860500} fill="var(--fill-0, #D0D5DD)" id="path252" />
        </g>
      </svg>
    </div>
  );
}

function AvatarFemale05() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Female 05">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Female 05">
          <path d={svgPaths.p1eab1e00} fill="var(--fill-0, #D8DEFC)" id="path334" />
          <path d={svgPaths.p13c3e570} fill="var(--fill-0, #101828)" id="path336" />
          <path d={svgPaths.p1c9f4c80} fill="var(--fill-0, #DC6803)" id="path338" />
          <path d={svgPaths.p3efeb500} fill="var(--fill-0, #DC6803)" id="path340" />
          <path d={svgPaths.p19d0ca00} fill="var(--fill-0, #DC6803)" id="path342" />
          <path d={svgPaths.p17f4e5c0} fill="var(--fill-0, #D0D5DD)" id="path344" />
          <path d={svgPaths.p35afa480} fill="var(--fill-0, #F97066)" id="path346" />
          <path d={svgPaths.pd066400} fill="var(--fill-0, #101828)" id="path348" />
          <path d={svgPaths.p33379000} fill="var(--fill-0, #F97066)" id="path350" />
          <path d={svgPaths.p2c74bb80} fill="var(--fill-0, #101828)" id="path352" />
          <path d={svgPaths.p17e5fec0} fill="var(--fill-0, #101828)" id="path354" />
          <path d={svgPaths.p1ec45900} fill="var(--fill-0, #101828)" id="path356" />
          <path d={svgPaths.p3ca72700} fill="var(--fill-0, #101828)" id="path358" />
          <path d={svgPaths.p172be00} fill="var(--fill-0, #101828)" id="path360" />
          <path d={svgPaths.p31cf9e00} fill="var(--fill-0, #101828)" id="path362" />
          <path d={svgPaths.p2760ff00} fill="var(--fill-0, #101828)" id="path364" />
          <path d={svgPaths.p3d8ecb00} fill="var(--fill-0, #101828)" id="path366" />
          <path d={svgPaths.p33be6b00} fill="var(--fill-0, white)" id="path368" />
          <path d={svgPaths.p1093c600} fill="var(--fill-0, white)" id="path370" />
          <path d={svgPaths.p11026b00} fill="var(--fill-0, #101828)" id="path372" />
        </g>
      </svg>
    </div>
  );
}

function AvatarMale06() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Male 06">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Male 06">
          <path d={svgPaths.p268a1180} fill="var(--fill-0, #F2F4F7)" id="path58" />
          <path d={svgPaths.p3b8ff3c0} fill="var(--fill-0, #D8DEFC)" id="path60" />
          <path d={svgPaths.p20dca8c0} fill="var(--fill-0, #101828)" id="path62" />
          <path d={svgPaths.p1cfc0200} fill="var(--fill-0, #F97066)" id="path64" />
          <path d={svgPaths.p327a3b00} fill="var(--fill-0, #101828)" id="path66" />
          <path d={svgPaths.p17cb0200} fill="var(--fill-0, #F97066)" id="path68" />
          <path d={svgPaths.p15e27070} fill="var(--fill-0, #101828)" id="path70" />
          <path d={svgPaths.p35785500} fill="var(--fill-0, #475467)" id="path72" />
          <path d={svgPaths.p3843e500} fill="var(--fill-0, #D0D5DD)" id="path74" />
          <path d={svgPaths.p2d4ca500} fill="var(--fill-0, #475467)" id="path76" />
          <path d={svgPaths.p3ce92280} fill="var(--fill-0, #101828)" id="path78" />
          <path d={svgPaths.p3bcd4f00} fill="var(--fill-0, #101828)" id="path80" />
          <path d={svgPaths.p91fcf20} fill="var(--fill-0, #101828)" id="path82" />
          <path d={svgPaths.p381fca80} fill="var(--fill-0, #101828)" id="path84" />
          <path d={svgPaths.p31273f80} fill="var(--fill-0, #101828)" id="path86" />
          <path d={svgPaths.p3dd3c700} fill="var(--fill-0, #101828)" id="path88" />
          <path d={svgPaths.pb47c380} fill="var(--fill-0, #101828)" id="path90" />
          <path d={svgPaths.p1ebe0d00} fill="var(--fill-0, #101828)" id="path92" />
        </g>
      </svg>
    </div>
  );
}

function AvatarMale07() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Male 07">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Male 07">
          <path d={svgPaths.p128cb800} fill="var(--fill-0, #F2F4F7)" id="path16" />
          <path d={svgPaths.p268a1e00} fill="var(--fill-0, #05603A)" id="path18" />
          <path d={svgPaths.p11ade480} fill="var(--fill-0, #039855)" id="path20" />
          <path d={svgPaths.p18bded80} fill="var(--fill-0, #101828)" id="path22" />
          <path d={svgPaths.p3c1dc1f0} fill="var(--fill-0, #F97066)" id="path24" />
          <path d={svgPaths.p18fbcff1} fill="var(--fill-0, #101828)" id="path26" />
          <path d={svgPaths.p16583200} fill="var(--fill-0, #F97066)" id="path28" />
          <path d={svgPaths.p3ff54a00} fill="var(--fill-0, #101828)" id="path30" />
          <path d={svgPaths.p1ebb5a00} fill="var(--fill-0, #101828)" id="path32" />
          <path d={svgPaths.p3055eb00} fill="var(--fill-0, #101828)" id="path34" />
          <path d={svgPaths.pebf6280} fill="var(--fill-0, #101828)" id="path36" />
          <path d={svgPaths.p1d7f9700} fill="var(--fill-0, #101828)" id="path38" />
          <path d={svgPaths.paa14000} fill="var(--fill-0, #101828)" id="path40" />
          <path d={svgPaths.p15633a60} fill="var(--fill-0, #101828)" id="path42" />
          <path d={svgPaths.p33f30c00} fill="var(--fill-0, #101828)" id="path44" />
          <path d={svgPaths.p4d46900} fill="var(--fill-0, white)" id="path46" />
          <path d={svgPaths.p124fa400} fill="var(--fill-0, white)" id="path48" />
          <path d={svgPaths.p12d10400} fill="var(--fill-0, white)" id="path50" />
          <path d={svgPaths.p30ba1200} fill="var(--fill-0, white)" id="path52" />
          <path d={svgPaths.p1b56b580} fill="var(--fill-0, white)" id="path54" />
          <path d={svgPaths.p196a9500} fill="var(--fill-0, #101828)" id="path56" />
        </g>
      </svg>
    </div>
  );
}

// Additional avatar components would go here (AvatarFemale02, AvatarMale01, etc.)
// For brevity, I'll create a generic Avatar component that can use different SVG data

function Avatar({ children, name }: { children: React.ReactNode; name: string }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      {children}
    </div>
  );
}

function StaffNameCell({ avatar, name }: { avatar: React.ReactNode; name: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">{name}</p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[12px]">Staff Name</p>
        </div>
      </div>
    </div>
  );
}

function LevelHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[12px]">Level</p>
        </div>
      </div>
    </div>
  );
}

function DesignationHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Designation</p>
        </div>
      </div>
    </div>
  );
}

function JoiningDateHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[12px]">Joining Date</p>
        </div>
      </div>
    </div>
  );
}

function EngagementTypeHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[12px]">Engagement Type</p>
        </div>
      </div>
    </div>
  );
}

function LocationHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[12px]">Location</p>
        </div>
      </div>
    </div>
  );
}

function StatusHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Status</p>
        </div>
      </div>
    </div>
  );
}

function ActionHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Action</p>
        </div>
      </div>
    </div>
  );
}

function TableRow({ 
  avatar, 
  name, 
  level, 
  designation, 
  joiningDate = "Nov 12, 2024", 
  engagementType, 
  location, 
  status 
}: {
  avatar: React.ReactNode;
  name: string;
  level: string;
  designation: string;
  joiningDate?: string;
  engagementType: string;
  location: string;
  status: 'active' | 'inactive';
}) {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar name={name}>
            {avatar}
          </Avatar>
          <StaffNameCell avatar={avatar} name={name} />
          <div className="h-[36.5px] relative shrink-0 w-0">
            <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 37">
                <path d="M1 0V36.5" id="Vector 1" stroke="var(--stroke-0, #D0D5DD)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: 'active' | 'inactive' }) {
  if (status === 'active') {
    return (
      <div className="bg-[#ecfdf3] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#12b76a] text-[12px] text-center text-nowrap whitespace-pre">Active</p>
      </div>
    );
  }
  
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#5d667b] text-[12px] text-center text-nowrap whitespace-pre">Inactive</p>
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Eye">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Eye">
          <path d={svgPaths.p2a65c400} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
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

function ActionButtons() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Eye />
      <FileText />
    </div>
  );
}

// Mock data for the staff table
const staffData = [
  { name: "Deepa Varma", level: "Level 1", designation: "Sr. Tax Manager", engagementType: "Regular Staffing", location: "Ahmedabad", status: "active" as const, avatar: <AvatarFemale07 /> },
  { name: "Rekha Singhal", level: "Level 3", designation: "Audit Associate", engagementType: "Temporary Staffing", location: "Ahmedabad", status: "inactive" as const, avatar: <AvatarFemale05 /> },
  { name: "Amrit Dutta", level: "Level 3", designation: "Sr. Accountant", engagementType: "Regular Staffing", location: "Kolkata", status: "active" as const, avatar: <AvatarMale06 /> },
  { name: "Krishna Chauhan", level: "Level 4", designation: "Audit Associate", engagementType: "Regular Staffing", location: "Ahmedabad", status: "active" as const, avatar: <AvatarMale07 /> },
  { name: "Kasturba Kamdar", level: "Level 2", designation: "Sr. Accountant", engagementType: "Regular Staffing", location: "Delhi", status: "active" as const, avatar: <AvatarFemale05 /> },
];

function StaffTable() {
  return (
    <div className="content-stretch flex h-[677px] items-start justify-between overflow-clip relative rounded-[8px] shrink-0 w-full">
      {/* Staff Name Column */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
        <TableHeader />
        {staffData.map((staff, index) => (
          <TableRow key={index} {...staff} />
        ))}
      </div>

      {/* Level Column */}
      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
        <LevelHeader />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {staffData.map((staff, index) => (
            <div key={index} className="h-[50px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                  <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{staff.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Designation Column */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]">
        <DesignationHeader />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {staffData.map((staff, index) => (
            <div key={index} className="h-[50px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                  <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{staff.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Joining Date Column */}
      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
        <JoiningDateHeader />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {staffData.map((staff, index) => (
            <div key={index} className="h-[50px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                  <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{staff.joiningDate || "Nov 12, 2024"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Type Column */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
        <EngagementTypeHeader />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {staffData.map((staff, index) => (
            <div key={index} className="h-[50px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                  <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{staff.engagementType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Column */}
      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
        <LocationHeader />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {staffData.map((staff, index) => (
            <div key={index} className="h-[50px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                  <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{staff.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Column */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[94px]">
        <StatusHeader />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          {staffData.map((staff, index) => (
            <div key={index} className="h-[50px] relative shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                  <StatusBadge status={staff.status} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Column */}
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_0px_1px] border-solid bottom-0 left-[-1px] pointer-events-none right-0 top-0" />
        <ActionHeader />
        {staffData.map((_, index) => (
          <ActionButtons key={index} />
        ))}
      </div>
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

function Pagination() {
  return (
    <div className="bg-white h-[60px] relative rounded-bl-[12px] rounded-br-[12px] shadow-[0px_-4px_21px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between px-[24px] py-[16px] relative w-full">
          {/* Left side - Showing info */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[400px]">
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Showing</p>
            <div className="bg-white relative rounded-[4px] shrink-0">
              <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
                <p className="[white-space-collapse:collapse] font-['Inter:Medium',_sans-serif] font-medium leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d2939] text-[16px] text-nowrap w-[26px]">20</p>
                <IconNavigationChevronDown />
              </div>
              <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
            </div>
            <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap whitespace-pre">of 500</p>
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Events</p>
          </div>

          {/* Right side - Pagination controls */}
          <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
            {/* Pagination buttons would go here */}
            <div className="box-border content-stretch flex gap-[12px] items-center px-[8px] py-0 relative shrink-0">
              <div className="bg-white relative rounded-[8px] shrink-0">
                <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
                  <p className="[white-space-collapse:collapse] font-['Inter:Medium',_sans-serif] font-medium leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d2939] text-[16px] text-center text-nowrap w-[25px]">1</p>
                </div>
                <div aria-hidden="true" className="absolute border border-[#98a2b3] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5d667b] text-[16px] text-center text-nowrap whitespace-pre">of 25 pages</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StaffTableContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <StaffTable />
        <Pagination />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[872px] isolate items-center left-[332px] p-[24px] rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] top-[86px] w-[1092px]">
      <TimeAttendance />
      <StaffTableContainer />
    </div>
  );
}

// Header, Sidebar, and Footer components (simplified versions of the Figma import)
function NewApp() {
  return (
    <div className="relative shrink-0 size-[24px]">
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

function Logo() {
  return (
    <div className="content-stretch flex gap-[10.768px] items-center relative shrink-0">
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          {/* Logo content */}
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[5.384px] items-end relative shrink-0">
        <div className="h-[14.731px] relative shrink-0 w-[124.928px]">
          <p className="font-['Poppins:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[10.768px] text-nowrap text-white whitespace-pre">HRMS 24x7</p>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f2f4f7] box-border content-stretch flex h-[70px] items-center justify-between px-[16px] py-[20px] right-0 top-0 w-[1440px]">
      <div className="content-stretch flex gap-[17px] items-center relative shrink-0">
        <NewApp />
        <Logo />
      </div>
      <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
        {/* Header icons would go here */}
      </div>
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[872px] items-start relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] shrink-0 w-[300px]">
      {/* Sidebar content would go here */}
      <div className="p-[24px] text-[14px] text-[#344054]">
        <p>Sidebar Navigation</p>
        <div className="mt-[16px] space-y-[8px]">
          <button className="text-left w-full p-[8px] rounded-[4px] hover:bg-[#f9fafb] text-[#3A58EF]">
            Human Resources > My Staff
          </button>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[86px]">
      <SidebarContent />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white bottom-0 box-border content-stretch flex items-end left-1/2 px-[24px] py-[16px] translate-x-[-50%] w-[1440px]">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#101828] text-[14px] text-nowrap whitespace-pre">
        ©2024 - www.my-cpe.com All rights reserved
      </p>
    </div>
  );
}

export default function StaffView({ onNavigationChange }: StaffViewProps) {
  return (
    <div className="bg-[#f2f4f7] relative size-full" data-name="Human Resources > My Staff">
      <MainContent />
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}