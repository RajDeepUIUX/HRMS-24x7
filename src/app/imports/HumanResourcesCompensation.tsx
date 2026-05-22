import svgPaths from "./svg-wg2ym9cw3u";
import imgFrame1149 from "figma:asset/9d24cedab8344e96204e73d7b051c8e8b97069f2.png";
import { imgG16, imgG32, imgG48 } from "./svg-u77hx";

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
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">Compensation</p>
    </div>
  );
}

function HeadingSubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Heading & Sub Heading">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full">Compensation</p>
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] relative shrink-0 text-[#98a2b3] text-[12px] w-full">Manage and view detailed compensation data for your staff.</p>
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

function TableHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] shrink-0 sticky top-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">{`Staff Name `}</p>
        </div>
      </div>
    </div>
  );
}

function AvatarFemale01() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Female 01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Female 01">
          <path d={svgPaths.p55df800} fill="var(--fill-0, #F2F4F7)" id="path538" />
          <path d={svgPaths.p3eabd80} fill="var(--fill-0, #101828)" id="path540" />
          <path d={svgPaths.p3480f300} fill="var(--fill-0, #DC6803)" id="path542" />
          <path d={svgPaths.p27d15180} fill="var(--fill-0, #F97066)" id="path544" />
          <path d={svgPaths.p11590200} fill="var(--fill-0, #101828)" id="path546" />
          <path d={svgPaths.p3b5bfb00} fill="var(--fill-0, #F97066)" id="path548" />
          <path d={svgPaths.p2dbb5700} fill="var(--fill-0, #F97066)" id="path550" />
          <path d={svgPaths.p2586080} fill="var(--fill-0, #101828)" id="path552" />
          <path d={svgPaths.p3863f880} fill="var(--fill-0, #101828)" id="path554" />
          <path d={svgPaths.p18ed5f00} fill="var(--fill-0, #101828)" id="path556" />
          <path d={svgPaths.p20f7bc00} fill="var(--fill-0, #101828)" id="path558" />
          <path d={svgPaths.p1bb10900} fill="var(--fill-0, #101828)" id="path560" />
          <path d={svgPaths.p3528e280} fill="var(--fill-0, #101828)" id="path562" />
          <path d={svgPaths.p35205280} fill="var(--fill-0, #101828)" id="path564" />
          <path d={svgPaths.p28cc7c80} fill="var(--fill-0, #101828)" id="path566" />
          <path d={svgPaths.p24c3dd00} fill="var(--fill-0, #101828)" id="path568" />
          <path d={svgPaths.p2138dc00} fill="var(--fill-0, #475467)" id="path570" />
          <path d={svgPaths.p20338640} fill="var(--fill-0, #101828)" id="path572" />
          <path d={svgPaths.p3f582af0} fill="var(--fill-0, #101828)" id="path574" />
          <path d={svgPaths.p15024f80} fill="var(--fill-0, #101828)" id="path576" />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarFemale01 />
    </div>
  );
}

function Frame2095584718() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Deepa Varma</p>
    </div>
  );
}

function TableBody() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar />
          <Frame2095584718 />
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

function AvatarFemale08() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Female 08">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Female 08">
          <path d={svgPaths.p23580300} fill="var(--fill-0, #F2F4F7)" id="path94" />
          <path d={svgPaths.p221a6200} fill="var(--fill-0, #101828)" id="path96" />
          <path d={svgPaths.p31f96080} fill="url(#paint0_linear_41_17287)" id="path98" />
          <path d={svgPaths.p1f1dde20} fill="url(#paint1_linear_41_17287)" id="path100" />
          <path d={svgPaths.p2374a800} fill="var(--fill-0, #F97066)" id="path102" />
          <path d={svgPaths.p210e0500} fill="var(--fill-0, #101828)" id="path104" />
          <path d={svgPaths.p35ce3c00} fill="var(--fill-0, #F97066)" id="path106" />
          <path d={svgPaths.p2547f580} fill="var(--fill-0, #101828)" id="path108" />
          <path d={svgPaths.p34b20d00} fill="var(--fill-0, #101828)" id="path110" />
          <path d={svgPaths.p111e4880} fill="var(--fill-0, #101828)" id="path112" />
          <path d={svgPaths.p7677d80} fill="var(--fill-0, #101828)" id="path114" />
          <path d={svgPaths.p1e734e00} fill="var(--fill-0, #101828)" id="path116" />
          <path d={svgPaths.p9c78400} fill="var(--fill-0, #101828)" id="path118" />
          <path d={svgPaths.p26f24100} fill="var(--fill-0, #101828)" id="path120" />
          <path d={svgPaths.p14e8d400} fill="var(--fill-0, #101828)" id="path122" />
          <path d={svgPaths.p29c23480} fill="url(#paint2_linear_41_17287)" id="path124" />
          <path d={svgPaths.p2c61c1f0} fill="var(--fill-0, #F5D575)" id="path126" />
          <path d={svgPaths.p25a87180} fill="var(--fill-0, #F5D575)" id="path128" />
          <path d={svgPaths.p16df0c40} fill="var(--fill-0, #D0D5DD)" id="path130" />
          <path d={svgPaths.p15a05500} fill="var(--fill-0, #101828)" id="path132" />
          <path d={svgPaths.p1f0a72c0} fill="var(--fill-0, #101828)" id="path134" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_41_17287" x1="4.03254" x2="29.6906" y1="32" y2="19.9978">
            <stop stopColor="#13CDF8" />
            <stop offset="1" stopColor="#3A58EF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_41_17287" x1="6.65429" x2="26.625" y1="31.9993" y2="24.7782">
            <stop stopColor="#13CDF8" />
            <stop offset="1" stopColor="#3A58EF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_41_17287" x1="11.7096" x2="16.6159" y1="31.8998" y2="31.5154">
            <stop stopColor="#13CDF8" />
            <stop offset="1" stopColor="#3A58EF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarFemale08 />
    </div>
  );
}

function Frame2095584719() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Rakhi Dhaliwal</p>
    </div>
  );
}

function TableBody1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar1 />
          <Frame2095584719 />
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

function Avatar2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarMale06 />
    </div>
  );
}

function Frame2095584720() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Amrit Dutta</p>
    </div>
  );
}

function TableBody2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar2 />
          <Frame2095584720 />
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

function AvatarFemale02() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Female 02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Female 02">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #F2F4F7)" id="path492" />
          <path d={svgPaths.p38880700} fill="var(--fill-0, #101828)" id="path494" />
          <path d={svgPaths.p1d77e700} fill="var(--fill-0, #DC6803)" id="path496" />
          <path d={svgPaths.p224748f0} fill="var(--fill-0, #B54708)" id="path498" />
          <path d={svgPaths.p24a7ea80} fill="var(--fill-0, #101828)" id="path500" />
          <path d={svgPaths.p349f4380} fill="var(--fill-0, #F97066)" id="path502" />
          <path d={svgPaths.p697c000} fill="var(--fill-0, #101828)" id="path504" />
          <path d={svgPaths.p1e2985c0} fill="var(--fill-0, #F97066)" id="path506" />
          <path d={svgPaths.pf956700} fill="var(--fill-0, #101828)" id="path508" />
          <path d={svgPaths.p3cfcf800} fill="var(--fill-0, #101828)" id="path510" />
          <path d={svgPaths.p1d80fc40} fill="var(--fill-0, #101828)" id="path512" />
          <path d={svgPaths.p1eed7400} fill="var(--fill-0, #101828)" id="path514" />
          <path d={svgPaths.p45ee500} fill="var(--fill-0, #101828)" id="path516" />
          <path d={svgPaths.p3566c400} fill="var(--fill-0, #101828)" id="path518" />
          <path d={svgPaths.p35c39800} fill="var(--fill-0, #101828)" id="path520" />
          <path d={svgPaths.p1cbdb1f0} fill="var(--fill-0, #101828)" id="path522" />
          <path d={svgPaths.p92aad00} fill="var(--fill-0, white)" id="path524" />
          <path d={svgPaths.p2cb306f0} fill="var(--fill-0, #B54708)" id="path526" />
          <path d={svgPaths.p27f75c00} fill="var(--fill-0, #B54708)" id="path528" />
          <path d={svgPaths.p1bbece00} fill="var(--fill-0, #B54708)" id="path530" />
          <path d={svgPaths.pb853d00} fill="var(--fill-0, #B54708)" id="path532" />
          <path d={svgPaths.p27af1200} fill="var(--fill-0, #DC6803)" id="path534" />
          <path d={svgPaths.p242ebb00} fill="var(--fill-0, #101828)" id="path536" />
        </g>
      </svg>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarFemale02 />
    </div>
  );
}

function Frame2095584721() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Kasturba Kam</p>
    </div>
  );
}

function TableBody3() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar3 />
          <Frame2095584721 />
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

function Avatar4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarMale07 />
    </div>
  );
}

function Frame2095584722() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Krishna Chau</p>
    </div>
  );
}

function TableBody4() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar4 />
          <Frame2095584722 />
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

function AvatarMale01() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Male 01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Male 01">
          <path d={svgPaths.p76aa800} fill="var(--fill-0, #F2F4F7)" id="path578" />
          <path d={svgPaths.p2109ed80} fill="var(--fill-0, #D8DEFC)" id="path580" />
          <path d={svgPaths.p26c76600} fill="var(--fill-0, #9CABF7)" id="path582" />
          <path d={svgPaths.p27682c00} fill="var(--fill-0, #101828)" id="path584" />
          <path d={svgPaths.p2c5192f0} fill="var(--fill-0, #F97066)" id="path586" />
          <path d={svgPaths.p269f9200} fill="var(--fill-0, #101828)" id="path588" />
          <path d={svgPaths.p428a300} fill="var(--fill-0, #F97066)" id="path590" />
          <path d={svgPaths.p28416c00} fill="var(--fill-0, #101828)" id="path592" />
          <path d={svgPaths.p1247f100} fill="var(--fill-0, #101828)" id="path594" />
          <path d={svgPaths.p19e480c0} fill="var(--fill-0, #101828)" id="path596" />
          <path d={svgPaths.p24056800} fill="var(--fill-0, #101828)" id="path598" />
          <path d={svgPaths.p15a72972} fill="var(--fill-0, #101828)" id="path600" />
          <path d={svgPaths.pc2ecc00} fill="var(--fill-0, #101828)" id="path602" />
          <path d={svgPaths.p252b9b00} fill="var(--fill-0, #101828)" id="path604" />
          <path d={svgPaths.p2335e100} fill="var(--fill-0, #101828)" id="path606" />
          <path d={svgPaths.p1e14d0f0} fill="var(--fill-0, #101828)" id="path608" />
          <path d={svgPaths.p14b4d00} fill="var(--fill-0, #101828)" id="path610" />
          <path d={svgPaths.p16bef900} fill="var(--fill-0, #101828)" id="path612" />
          <path d={svgPaths.p26aadf0} fill="var(--fill-0, #F5D575)" id="path614" />
          <path d={svgPaths.p3e3e1800} fill="var(--fill-0, #F04438)" id="path616" />
        </g>
      </svg>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarMale01 />
    </div>
  );
}

function Frame2095584723() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Srinivasan Ana</p>
    </div>
  );
}

function TableBody5() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar5 />
          <Frame2095584723 />
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

function AvatarMale04() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Male 04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Male 04">
          <path d={svgPaths.p2a2b7500} fill="var(--fill-0, #F2F4F7)" id="path174" />
          <path d={svgPaths.p2431b680} fill="var(--fill-0, #475467)" id="path176" />
          <path d={svgPaths.p26920a00} fill="var(--fill-0, #475467)" id="path178" />
          <path d={svgPaths.p4dd1b80} fill="var(--fill-0, #101828)" id="path180" />
          <path d={svgPaths.p26510e00} fill="var(--fill-0, #F97066)" id="path182" />
          <path d={svgPaths.p27fd9f70} fill="var(--fill-0, #101828)" id="path184" />
          <path d={svgPaths.p35418880} fill="var(--fill-0, #F97066)" id="path186" />
          <path d={svgPaths.p1a724800} fill="var(--fill-0, #101828)" id="path188" />
          <path d={svgPaths.p2b18e200} fill="var(--fill-0, #101828)" id="path190" />
          <path d={svgPaths.p21ffe00} fill="var(--fill-0, #101828)" id="path192" />
          <path d={svgPaths.p1e806980} fill="var(--fill-0, #101828)" id="path194" />
          <path d={svgPaths.pe0aa800} fill="var(--fill-0, #101828)" id="path196" />
          <path d={svgPaths.p19b5a900} fill="var(--fill-0, #101828)" id="path198" />
          <path d={svgPaths.pcb55f40} fill="var(--fill-0, #101828)" id="path200" />
          <path d={svgPaths.p3e6f6600} fill="var(--fill-0, #101828)" id="path202" />
          <path d={svgPaths.p2edc7800} fill="var(--fill-0, #101828)" id="path204" />
          <path d={svgPaths.p2296a880} fill="var(--fill-0, white)" id="path206" />
          <path d={svgPaths.p2007fc30} fill="var(--fill-0, #475467)" id="path208" />
        </g>
      </svg>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarMale04 />
    </div>
  );
}

function Frame2095584724() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Darlene Robet</p>
    </div>
  );
}

function TableBody6() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar6 />
          <Frame2095584724 />
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

function AvatarFemale05() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Female 05">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Female 05">
          <path d={svgPaths.p1eab1e00} fill="var(--fill-0, #F2F4F7)" id="path334" />
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

function Avatar7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarFemale05 />
    </div>
  );
}

function Frame2095584725() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Pushpa Ray</p>
    </div>
  );
}

function TableBody7() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar7 />
          <Frame2095584725 />
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

function AvatarFemale07() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Female 07">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Female 07">
          <path d={svgPaths.p372f3200} fill="var(--fill-0, #F2F4F7)" id="path210" />
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

function Avatar8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarFemale07 />
    </div>
  );
}

function Frame2095584726() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Urmi Kale</p>
    </div>
  );
}

function TableBody8() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar8 />
          <Frame2095584726 />
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

function AvatarFemale9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Female 08">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Female 08">
          <path d={svgPaths.p23580300} fill="var(--fill-0, #F2F4F7)" id="path94" />
          <path d={svgPaths.p221a6200} fill="var(--fill-0, #101828)" id="path96" />
          <path d={svgPaths.p31f96080} fill="url(#paint0_linear_41_17287)" id="path98" />
          <path d={svgPaths.p1f1dde20} fill="url(#paint1_linear_41_17287)" id="path100" />
          <path d={svgPaths.p2374a800} fill="var(--fill-0, #F97066)" id="path102" />
          <path d={svgPaths.p210e0500} fill="var(--fill-0, #101828)" id="path104" />
          <path d={svgPaths.p35ce3c00} fill="var(--fill-0, #F97066)" id="path106" />
          <path d={svgPaths.p2547f580} fill="var(--fill-0, #101828)" id="path108" />
          <path d={svgPaths.p34b20d00} fill="var(--fill-0, #101828)" id="path110" />
          <path d={svgPaths.p111e4880} fill="var(--fill-0, #101828)" id="path112" />
          <path d={svgPaths.p7677d80} fill="var(--fill-0, #101828)" id="path114" />
          <path d={svgPaths.p1e734e00} fill="var(--fill-0, #101828)" id="path116" />
          <path d={svgPaths.p9c78400} fill="var(--fill-0, #101828)" id="path118" />
          <path d={svgPaths.p26f24100} fill="var(--fill-0, #101828)" id="path120" />
          <path d={svgPaths.p14e8d400} fill="var(--fill-0, #101828)" id="path122" />
          <path d={svgPaths.p29c23480} fill="url(#paint2_linear_41_17287)" id="path124" />
          <path d={svgPaths.p2c61c1f0} fill="var(--fill-0, #F5D575)" id="path126" />
          <path d={svgPaths.p25a87180} fill="var(--fill-0, #F5D575)" id="path128" />
          <path d={svgPaths.p16df0c40} fill="var(--fill-0, #D0D5DD)" id="path130" />
          <path d={svgPaths.p15a05500} fill="var(--fill-0, #101828)" id="path132" />
          <path d={svgPaths.p1f0a72c0} fill="var(--fill-0, #101828)" id="path134" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_41_17287" x1="4.03254" x2="29.6906" y1="32" y2="19.9978">
            <stop stopColor="#13CDF8" />
            <stop offset="1" stopColor="#3A58EF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_41_17287" x1="6.65429" x2="26.625" y1="31.9993" y2="24.7782">
            <stop stopColor="#13CDF8" />
            <stop offset="1" stopColor="#3A58EF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_41_17287" x1="11.7096" x2="16.6159" y1="31.8998" y2="31.5154">
            <stop stopColor="#13CDF8" />
            <stop offset="1" stopColor="#3A58EF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Avatar9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarFemale9 />
    </div>
  );
}

function Frame2095584727() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Falguni Hans</p>
    </div>
  );
}

function TableBody9() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar9 />
          <Frame2095584727 />
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

function AvatarMale03() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Male 03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Male 03">
          <path d={svgPaths.p8b7d2f1} fill="var(--fill-0, #F2F4F7)" id="path254" />
          <path d={svgPaths.p625a1f0} fill="var(--fill-0, #101828)" id="path256" />
          <path d={svgPaths.p18e20e00} fill="var(--fill-0, #4E69F1)" id="path258" />
          <path d={svgPaths.p2753f700} fill="var(--fill-0, #F97066)" id="path260" />
          <path d={svgPaths.p14170b80} fill="var(--fill-0, #101828)" id="path262" />
          <path d={svgPaths.p227ac2f0} fill="var(--fill-0, #F97066)" id="path264" />
          <path d={svgPaths.p119de900} fill="var(--fill-0, #101828)" id="path266" />
          <path d={svgPaths.p8d1bb00} fill="var(--fill-0, #101828)" id="path268" />
          <path d={svgPaths.p8c97080} fill="var(--fill-0, #101828)" id="path270" />
          <path d={svgPaths.p34b8b00} fill="var(--fill-0, #101828)" id="path272" />
          <path d={svgPaths.p188b0080} fill="var(--fill-0, #101828)" id="path274" />
          <path d={svgPaths.pdf77600} fill="var(--fill-0, #101828)" id="path276" />
          <path d={svgPaths.pefa780} fill="var(--fill-0, #101828)" id="path278" />
          <path d={svgPaths.p436ba00} fill="var(--fill-0, #101828)" id="path280" />
          <path d={svgPaths.p2d030400} fill="var(--fill-0, #101828)" id="path282" />
          <path d={svgPaths.p36ac3e00} fill="var(--fill-0, #F5D575)" id="path284" />
          <path d={svgPaths.p307a9fc0} fill="var(--fill-0, #4E69F1)" id="path286" />
          <path d={svgPaths.pc488d00} fill="var(--fill-0, #4E69F1)" id="path288" />
          <path d={svgPaths.p196fc180} fill="var(--fill-0, #F5D575)" id="path290" />
        </g>
      </svg>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarMale03 />
    </div>
  );
}

function Frame2095584728() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Ramesh Kumar</p>
    </div>
  );
}

function TableBody10() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar10 />
          <Frame2095584728 />
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

function AvatarMale2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Male 01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Male 01">
          <path d={svgPaths.p76aa800} fill="var(--fill-0, #F2F4F7)" id="path578" />
          <path d={svgPaths.p2109ed80} fill="var(--fill-0, #D8DEFC)" id="path580" />
          <path d={svgPaths.p26c76600} fill="var(--fill-0, #9CABF7)" id="path582" />
          <path d={svgPaths.p27682c00} fill="var(--fill-0, #101828)" id="path584" />
          <path d={svgPaths.p2c5192f0} fill="var(--fill-0, #F97066)" id="path586" />
          <path d={svgPaths.p269f9200} fill="var(--fill-0, #101828)" id="path588" />
          <path d={svgPaths.p428a300} fill="var(--fill-0, #F97066)" id="path590" />
          <path d={svgPaths.p28416c00} fill="var(--fill-0, #101828)" id="path592" />
          <path d={svgPaths.p1247f100} fill="var(--fill-0, #101828)" id="path594" />
          <path d={svgPaths.p19e480c0} fill="var(--fill-0, #101828)" id="path596" />
          <path d={svgPaths.p24056800} fill="var(--fill-0, #101828)" id="path598" />
          <path d={svgPaths.p15a72972} fill="var(--fill-0, #101828)" id="path600" />
          <path d={svgPaths.pc2ecc00} fill="var(--fill-0, #101828)" id="path602" />
          <path d={svgPaths.p252b9b00} fill="var(--fill-0, #101828)" id="path604" />
          <path d={svgPaths.p2335e100} fill="var(--fill-0, #101828)" id="path606" />
          <path d={svgPaths.p1e14d0f0} fill="var(--fill-0, #101828)" id="path608" />
          <path d={svgPaths.p14b4d00} fill="var(--fill-0, #101828)" id="path610" />
          <path d={svgPaths.p16bef900} fill="var(--fill-0, #101828)" id="path612" />
          <path d={svgPaths.p26aadf0} fill="var(--fill-0, #F5D575)" id="path614" />
          <path d={svgPaths.p3e3e1800} fill="var(--fill-0, #F04438)" id="path616" />
        </g>
      </svg>
    </div>
  );
}

function Avatar11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarMale2 />
    </div>
  );
}

function Frame2095584729() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Sameer Shetty</p>
    </div>
  );
}

function TableBody11() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar11 />
          <Frame2095584729 />
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

function AvatarMale02() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar/Male 02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar/Male 02">
          <path d={svgPaths.p28a65e00} fill="var(--fill-0, #F2F4F7)" id="path450" />
          <path d={svgPaths.p4907340} fill="var(--fill-0, #D8DEFC)" id="path452" />
          <path d={svgPaths.p158b940} fill="var(--fill-0, #101828)" id="path454" />
          <path d={svgPaths.p17350c00} fill="var(--fill-0, #F97066)" id="path456" />
          <path d={svgPaths.p3bee6180} fill="var(--fill-0, #101828)" id="path458" />
          <path d={svgPaths.pdd0cf80} fill="var(--fill-0, #F97066)" id="path460" />
          <path d={svgPaths.p29ad7500} fill="var(--fill-0, #101828)" id="path462" />
          <path d={svgPaths.p28e0e1c0} fill="var(--fill-0, #101828)" id="path464" />
          <path d={svgPaths.p5d66480} fill="var(--fill-0, #101828)" id="path466" />
          <path d={svgPaths.p5c9e0f0} fill="var(--fill-0, #101828)" id="path468" />
          <path d={svgPaths.p2e0ea1b0} fill="var(--fill-0, #101828)" id="path470" />
          <path d={svgPaths.p93c7d80} fill="var(--fill-0, #101828)" id="path472" />
          <path d={svgPaths.p36329700} fill="var(--fill-0, #101828)" id="path474" />
          <path d={svgPaths.p11c63f00} fill="var(--fill-0, #101828)" id="path476" />
          <path d={svgPaths.p22c04780} fill="var(--fill-0, #9CABF7)" id="path478" />
          <path d={svgPaths.p21a3cf00} fill="var(--fill-0, white)" id="path480" />
          <path d={svgPaths.p3667d480} fill="var(--fill-0, #101828)" id="path482" />
          <path d={svgPaths.p392bd240} fill="var(--fill-0, #5D667B)" id="path484" />
          <path d={svgPaths.p2d7f1a00} fill="var(--fill-0, #5D667B)" id="path486" />
          <path d={svgPaths.p3d00fd80} fill="var(--fill-0, #5D667B)" id="path488" />
          <path d={svgPaths.p6af0ed0} fill="var(--fill-0, #5D667B)" id="path490" />
        </g>
      </svg>
    </div>
  );
}

function Avatar12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarMale02 />
    </div>
  );
}

function Frame2095584730() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Rohit Shetty</p>
    </div>
  );
}

function TableBody12() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar12 />
          <Frame2095584730 />
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

function Frame2095584661() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
      <TableHeader />
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
      <TableBody10 />
      <TableBody11 />
      <TableBody12 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">{`Designation `}</p>
        </div>
      </div>
    </div>
  );
}

function TableBody13() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Sr. Tax Manager</p>
        </div>
      </div>
    </div>
  );
}

function TableBody14() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Audit Associate</p>
        </div>
      </div>
    </div>
  );
}

function TableBody15() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Sr. Accountant</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584912() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody13 />
      <TableBody14 />
      <TableBody15 />
      <TableBody14 />
      <TableBody15 />
      <TableBody14 />
      <TableBody15 />
      <TableBody14 />
      <TableBody13 />
      <TableBody14 />
      <TableBody14 />
      <TableBody13 />
      <TableBody13 />
    </div>
  );
}

function Frame2095584914() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px]">
      <TableHeader1 />
      <Frame2095584912 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">
            Current Net Salary (<span className="font-['Inter:Regular',_sans-serif] font-normal">₹</span>)
          </p>
        </div>
      </div>
    </div>
  );
}

function TableBody26() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">70,000</p>
        </div>
      </div>
    </div>
  );
}

function TableBody27() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">50,000</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584920() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody26 />
      {[...Array(12).keys()].map((_, i) => (
        <TableBody27 key={i} />
      ))}
    </div>
  );
}

function Frame2095584916() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[159px]">
      <TableHeader2 />
      <Frame2095584920 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">
            Yearly Compensation (<span className="font-['Inter:Regular',_sans-serif] font-normal">₹</span>)
          </p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">8,40,000</p>
        </div>
      </div>
    </div>
  );
}

function TableBody40() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">6,00,000</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584921() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody39 />
      {[...Array(12).keys()].map((_, i) => (
        <TableBody40 key={i} />
      ))}
    </div>
  );
}

function Frame2095585229() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[175px]">
      <TableHeader3 />
      <Frame2095584921 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Gross Remuneration ($)</p>
        </div>
      </div>
    </div>
  );
}

function TableBody52() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">9,660</p>
        </div>
      </div>
    </div>
  );
}

function TableBody53() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">6,900</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584913() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody52 />
      {[...Array(12).keys()].map((_, i) => (
        <TableBody53 key={i} />
      ))}
    </div>
  );
}

function Frame2095584923() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[171px]">
      <TableHeader4 />
      <Frame2095584913 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">{`Last Revision Date `}</p>
        </div>
      </div>
    </div>
  );
}

function TableBody65() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Jan 01, 2025</p>
        </div>
      </div>
    </div>
  );
}

function TableBody66() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Nov 12, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584922() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody65 />
      {[...Array(12).keys()].map((_, i) => (
        <TableBody66 key={i} />
      ))}
    </div>
  );
}

function Frame2095584915() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[142px]">
      <TableHeader5 />
      <Frame2095584922 />
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Pay Frequency</p>
        </div>
      </div>
    </div>
  );
}

function TableBody78() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Monthly</p>
        </div>
      </div>
    </div>
  );
}

function TableBody80() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Weekly</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584924() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody78 />
      <TableBody78 />
      <TableBody80 />
      <TableBody78 />
      <TableBody78 />
      <TableBody78 />
      <TableBody80 />
      <TableBody78 />
      <TableBody78 />
      <TableBody78 />
      <TableBody80 />
      <TableBody78 />
      <TableBody78 />
    </div>
  );
}

function Frame2095584917() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[118px]">
      <TableHeader6 />
      <Frame2095584924 />
    </div>
  );
}

function TableHeader7() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Department</p>
        </div>
      </div>
    </div>
  );
}

function TableBody91() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Accounting</p>
        </div>
      </div>
    </div>
  );
}

function TableBody92() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{`Tax & Audit`}</p>
        </div>
      </div>
    </div>
  );
}

function TableBody93() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Finance</p>
        </div>
      </div>
    </div>
  );
}

function TableBody94() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Product Development</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584925() {
  return (
    <div className="content-stretch flex flex-col h-[650px] items-start relative shrink-0 w-full">
      <TableBody91 />
      <TableBody92 />
      <TableBody93 />
      <TableBody94 />
      <TableBody91 />
      <TableBody92 />
      <TableBody94 />
      <TableBody92 />
      <TableBody91 />
      <TableBody92 />
      <TableBody91 />
      <TableBody94 />
      <TableBody91 />
    </div>
  );
}

function Frame2095585228() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[176px]">
      <TableHeader7 />
      <Frame2095584925 />
    </div>
  );
}

function TableHeader8() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Status</p>
        </div>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="bg-[#ecfdf3] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#12b76a] text-[12px] text-center text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function TableBody104() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <Status />
        </div>
      </div>
    </div>
  );
}

function Status4() {
  return (
    <div className="bg-[#fffaeb] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#f79009] text-[12px] text-center text-nowrap whitespace-pre">In Process</p>
    </div>
  );
}

function TableBody108() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <Status4 />
        </div>
      </div>
    </div>
  );
}

function Status9() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#5d667b] text-[12px] text-center text-nowrap whitespace-pre">Inactive</p>
    </div>
  );
}

function TableBody113() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <Status9 />
        </div>
      </div>
    </div>
  );
}

function Frame2095584926() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableBody104 />
      <TableBody104 />
      <TableBody104 />
      <TableBody104 />
      <TableBody108 />
      <TableBody104 />
      <TableBody104 />
      <TableBody108 />
      <TableBody108 />
      <TableBody113 />
      <TableBody113 />
      <TableBody108 />
      <TableBody113 />
    </div>
  );
}

function Frame2095584918() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeader8 />
      <Frame2095584926 />
    </div>
  );
}

function Frame2095585309() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative shrink-0">
      <Frame2095584914 />
      <Frame2095584916 />
      <Frame2095585229 />
      <Frame2095584923 />
      <Frame2095584915 />
      <Frame2095584917 />
      <Frame2095585228 />
      <Frame2095584918 />
    </div>
  );
}

function TableHeader9() {
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

function UserCircle() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="UserCircle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="UserCircle">
          <path d={svgPaths.p72bac00} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FileArrowDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="FileArrowDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="FileArrowDown">
          <path d={svgPaths.p350bcd80} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ClockCounterClockwise() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ClockCounterClockwise">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ClockCounterClockwise">
          <path d={svgPaths.p24927c00} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableBody117() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <UserCircle />
      <FileArrowDown />
      <ClockCounterClockwise />
    </div>
  );
}

function Frame2095584648() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableHeader9 />
      {[...Array(13).keys()].map((_, i) => (
        <TableBody117 key={i} />
      ))}
    </div>
  );
}

function Frame2095584919() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full">
      <Frame2095584661 />
      <Frame2095585309 />
      <Frame2095584648 />
    </div>
  );
}

function Frame2095584738() {
  return (
    <div className="bg-[#eaecf0] h-[1044px] overflow-clip relative rounded-[100px] w-full">
      <div className="absolute bg-[#98a2b3] h-[510px] left-0 rounded-[4px] top-0 w-[8px]" />
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

function Component214() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0" data-name="Component 214">
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[12px] py-[8px] relative">
        <p className="[white-space-collapse:collapse] font-['Inter:Medium',_sans-serif] font-medium leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d2939] text-[16px] text-nowrap w-[26px]">20</p>
        <IconNavigationChevronDown />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame1686562110() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[400px]">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Showing</p>
      <Component214 />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap whitespace-pre">of 500</p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Events</p>
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
      <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative">
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
      <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative">
        <IconNavigationChevronLeft />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="menu item">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative">
        <p className="[white-space-collapse:collapse] font-['Inter:Medium',_sans-serif] font-medium leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d2939] text-[16px] text-center text-nowrap w-[25px]">1</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#98a2b3] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0" data-name="menu item">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5d667b] text-[16px] text-center text-nowrap whitespace-pre">of 25 pages</p>
    </div>
  );
}

function Frame1686561151() {
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
      <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative">
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
      <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative">
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
      <Frame1686561151 />
      <MenuItem4 />
      <MenuItem5 />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="bg-white h-[60px] relative rounded-bl-[12px] rounded-br-[12px] shadow-[0px_-4px_21px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Pagination">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame1686562110 />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

function Frame2095585311() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1044", "--transform-inner-height": "1044", height: "calc(1px * ((var(--transform-inner-width) * 1) + (var(--transform-inner-height) * 0)))" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] w-full">
          <Frame2095584738 />
        </div>
      </div>
      <Pagination1 />
    </div>
  );
}

function Frame2095585317() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative rounded-[8px] shrink-0 w-full z-[1]">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <Frame2095584919 />
      <Frame2095585311 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[872px] isolate items-center left-[332px] p-[24px] rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] top-[86px] w-[1092px]" data-name="Main">
      <TimeAttendance />
      <Frame2095585317 />
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
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[0.032%] mt-[28.373%] place-items-start relative" data-name="g14">
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
          <path d={svgPaths.p19cb1300} fill="url(#paint0_linear_40_20831)" id="Vector_6" />
          <path d={svgPaths.p26c79570} fill="url(#paint1_linear_40_20831)" id="Vector_7" />
          <path d={svgPaths.p26828f70} fill="url(#paint2_linear_40_20831)" id="Vector_8" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_40_20831" x1="88.0771" x2="88.0771" y1="0.101701" y2="14.6143">
            <stop stopColor="#13CDF8" />
            <stop offset="1" stopColor="#3A58EF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_40_20831" x1="112.367" x2="98.0294" y1="5.86544" y2="8.77101">
            <stop stopColor="#6B35C5" />
            <stop offset="1" stopColor="#B188F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_40_20831" x1="126.58" x2="113.127" y1="9.49822" y2="5.03855">
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
                  <path d="M1 1V27.349" id="Vector 1" stroke="url(#paint0_linear_41_17357)" strokeLinecap="round" strokeWidth="0.89733" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_41_17357" x1="1.5" x2="1.5" y1="0.996386" y2="27.3526">
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
              <circle cx="1.79466" cy="1.79466" fill="url(#paint0_linear_41_17076)" id="Ellipse 1" r="1.79466" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_41_17076" x1="1.79466" x2="1.79466" y1="-0.000492359" y2="3.58981">
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
          <path d={svgPaths.p4661700} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
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
    <div className="basis-0 bg-[#d8defc] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[16px]">Compensation</p>
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
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Holidays</p>
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

function Frame1686561882() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] right-[-14px] rounded-[31px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] size-[28px] top-[24px]">
      <IconNavigationChevronLeft1 />
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
        <g clipPath="url(#clip0_41_16924)" id="Frame 1686561816">
          <path d={svgPaths.pbc82830} fill="var(--fill-0, #EAECF0)" id="Rectangle 3468284" />
          <path d={svgPaths.p16d772e0} fill="var(--fill-0, #EAECF0)" id="Rectangle 3468286" />
          <rect fill="var(--fill-0, #98A2B3)" height="172" id="Rectangle 3468285" rx="4" width="8" />
        </g>
        <defs>
          <clipPath id="clip0_41_16924">
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

export default function HumanResourcesCompensation() {
  return (
    <div className="bg-[#f2f4f7] relative size-full" data-name="Human Resources > Compensation">
      <Main />
      <Header />
      <MyCpeAdminSidebarWithLinks />
      <Frame1686561816 />
      <Footer />
    </div>
  );
}