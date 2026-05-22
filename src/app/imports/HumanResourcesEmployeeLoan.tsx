import svgPaths from "./svg-5yw0lk7c7l";
import imgFrame1149 from "figma:asset/9d24cedab8344e96204e73d7b051c8e8b97069f2.png";
import { imgG16, imgG32, imgG48 } from "./svg-l6f14";

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
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-nowrap whitespace-pre">Employee Loan</p>
    </div>
  );
}

function HeadingSubHeading() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-full" data-name="Heading & Sub Heading">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#101828] text-[24px] w-full">Employee Loan</p>
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] relative shrink-0 text-[#98a2b3] text-[12px] w-full">Access and stay updated on company policies.</p>
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
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[12px] py-[10px] relative rounded-[inherit] w-[298px]">
        <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5d667b] text-[14px] text-nowrap">Search here</p>
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
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[6]" data-name="Body Header">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function Frame2095584717() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#5d667b] text-[18px] text-nowrap whitespace-pre">Outstanding Balance</p>
    </div>
  );
}

function Frame2095584706() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[60px] items-start justify-between min-h-px min-w-px relative shrink-0 z-[2]">
      <Frame2095584717 />
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap">
        <p className="leading-[32px] whitespace-pre">₹1,15,000</p>
      </div>
    </div>
  );
}

function Frame2095584710() {
  return (
    <div className="content-stretch flex isolate items-start justify-between relative shrink-0 w-full">
      <Frame2095584706 />
    </div>
  );
}

function DashboardCards() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[92px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Dashboard Cards">
      <div aria-hidden="true" className="absolute border border-[#e3e0fb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[92px] items-start p-[16px] relative w-full">
          <Frame2095584710 />
        </div>
      </div>
    </div>
  );
}

function Frame2095584719() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#5d667b] text-[18px] text-nowrap whitespace-pre">Total Ongoing EMI</p>
    </div>
  );
}

function Frame2095584707() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[60px] items-start justify-between min-h-px min-w-px relative shrink-0">
      <Frame2095584719 />
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[#101828] text-[0px] text-nowrap">
        <p className="whitespace-pre">
          <span className="leading-[32px] text-[24px]">{` ₹15,000`}</span>
          <span className="font-['Inter:Medium',_sans-serif] font-medium leading-[19px] not-italic text-[#5d667b] text-[13px]">/mo</span>
        </p>
      </div>
    </div>
  );
}

function Frame2095584711() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame2095584707 />
    </div>
  );
}

function DashboardCards1() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[92px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Dashboard Cards">
      <div aria-hidden="true" className="absolute border border-[#e3e0fb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[92px] items-start p-[16px] relative w-full">
          <Frame2095584711 />
        </div>
      </div>
    </div>
  );
}

function Frame2095584720() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#5d667b] text-[18px] text-nowrap whitespace-pre">Active Loans</p>
    </div>
  );
}

function Frame2095584708() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[60px] items-start justify-between min-h-px min-w-px relative shrink-0">
      <Frame2095584720 />
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap">
        <p className="leading-[32px] whitespace-pre">03</p>
      </div>
    </div>
  );
}

function Frame2095584712() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame2095584708 />
    </div>
  );
}

function DashboardCards2() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[92px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Dashboard Cards">
      <div aria-hidden="true" className="absolute border border-[#e3e0fb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[92px] items-start p-[16px] relative w-full">
          <Frame2095584712 />
        </div>
      </div>
    </div>
  );
}

function Frame2095584721() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#5d667b] text-[18px] text-nowrap whitespace-pre">Amount Issued</p>
    </div>
  );
}

function Frame2095584709() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[60px] items-start justify-between min-h-px min-w-px relative shrink-0">
      <Frame2095584721 />
      <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap">
        <p className="leading-[32px] whitespace-pre">₹3,00,000</p>
      </div>
    </div>
  );
}

function Frame2095584713() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame2095584709 />
    </div>
  );
}

function DashboardCards3() {
  return (
    <div className="basis-0 bg-gray-50 grow h-[92px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Dashboard Cards">
      <div aria-hidden="true" className="absolute border border-[#e3e0fb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[92px] items-start p-[16px] relative w-full">
          <Frame2095584713 />
        </div>
      </div>
    </div>
  );
}

function Frame2095584667() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[1044px] z-[5]">
      <DashboardCards />
      <DashboardCards1 />
      <DashboardCards2 />
      <DashboardCards3 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#ebeefd] h-[42px] shrink-0 sticky top-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Staff Name</p>
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

function Avatar() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarFemale02 />
    </div>
  );
}

function Frame2095584718() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Kasturba Kamdar</p>
    </div>
  );
}

function TableBody() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
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

function Avatar1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarMale07 />
    </div>
  );
}

function Frame2095584722() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Krishna Chauhan</p>
    </div>
  );
}

function TableBody1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar1 />
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

function Avatar2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Avatar">
      <AvatarMale01 />
    </div>
  );
}

function Frame2095584723() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Srinivasan Anand</p>
    </div>
  );
}

function TableBody2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
          <Avatar2 />
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

function Frame2095584661() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]">
      <TableHeader />
      <TableBody />
      <TableBody1 />
      <TableBody2 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Loan Type</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Personal Loan</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Emergency Loan</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Education Loan</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584912() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody3 />
      <TableBody4 />
      <TableBody5 />
    </div>
  );
}

function Frame2095585230() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[142.857px]">
      <TableHeader1 />
      <Frame2095584912 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Requested Amount (₹)</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">5,00,000</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">1,00,000</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">80,000</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584914() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody6 />
      <TableBody7 />
      <TableBody8 />
    </div>
  );
}

function Frame2095584922() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170px]">
      <TableHeader2 />
      <Frame2095584914 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Approved Amount (₹)</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">3,00,000</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">70,000</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">50,000</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584913() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody9 />
      <TableBody10 />
      <TableBody11 />
    </div>
  );
}

function Frame2095584924() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]">
      <TableHeader3 />
      <Frame2095584913 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Loan Start Date</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Mar 25, 2023</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Jan 10, 2023</p>
        </div>
      </div>
    </div>
  );
}

function TableBody14() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Jul 26, 2020</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584915() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody12 />
      <TableBody13 />
      <TableBody14 />
    </div>
  );
}

function Frame2095585228() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[130px]">
      <TableHeader4 />
      <Frame2095584915 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Loan End Date</p>
        </div>
      </div>
    </div>
  );
}

function TableBody15() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Mar 2, 2025</p>
        </div>
      </div>
    </div>
  );
}

function TableBody16() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Dec 10, 2024</p>
        </div>
      </div>
    </div>
  );
}

function TableBody17() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Jul 26, 2022</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584916() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody15 />
      <TableBody16 />
      <TableBody17 />
    </div>
  );
}

function Frame2095585229() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]">
      <TableHeader5 />
      <Frame2095584916 />
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Tenure</p>
        </div>
      </div>
    </div>
  );
}

function TableBody18() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">24 Months</p>
        </div>
      </div>
    </div>
  );
}

function TableBody19() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">12 Months</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584917() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody18 />
      {[...Array(2).keys()].map((_, i) => (
        <TableBody19 key={i} />
      ))}
    </div>
  );
}

function Frame2095585231() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[120px]">
      <TableHeader6 />
      <Frame2095584917 />
    </div>
  );
}

function TableHeader7() {
  return (
    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full" data-name="Table Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Repayment Status</p>
        </div>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="bg-[#fffaeb] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#ecfdf3] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#f79009] text-[12px] text-center text-nowrap whitespace-pre">In Progress</p>
    </div>
  );
}

function TableBody21() {
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
    <div className="bg-[#ecfdf3] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#ecfdf3] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#12b76a] text-[12px] text-center text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function TableBody22() {
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

function Frame2095584920() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody21 />
      {[...Array(2).keys()].map((_, i) => (
        <TableBody22 key={i} />
      ))}
    </div>
  );
}

function Frame2095584918() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]">
      <TableHeader7 />
      <Frame2095584920 />
    </div>
  );
}

function Frame2095585606() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-clip relative shrink-0">
      <Frame2095585230 />
      <Frame2095584922 />
      <Frame2095584924 />
      <Frame2095585228 />
      <Frame2095585229 />
      <Frame2095585231 />
      <Frame2095584918 />
    </div>
  );
}

function TableHeader8() {
  return (
    <div className="bg-[#ebeefd] box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative shrink-0 w-[71px]" data-name="Table Header">
      <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Action</p>
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

function TableBody24() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <Eye />
        </div>
      </div>
    </div>
  );
}

function Frame2095585227() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_0px_1px] border-solid bottom-0 left-[-1px] pointer-events-none right-0 top-0" />
      <TableHeader8 />
      {[...Array(3).keys()].map((_, i) => (
        <TableBody24 key={i} />
      ))}
    </div>
  );
}

function Frame2095584919() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
      <Frame2095584661 />
      <Frame2095585606 />
      <Frame2095585227 />
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
      <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
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
      <Frame1686561151 />
      <MenuItem4 />
      <MenuItem5 />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="bg-white h-[60px] relative rounded-bl-[12px] rounded-br-[12px] shadow-[0px_-4px_21px_0px_rgba(0,0,0,0.04)] shrink-0 w-full" data-name="Pagination">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[60px] items-center justify-between px-[24px] py-[16px] relative w-full">
          <Frame1686562110 />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

function Frame2095585326() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <Frame2095584919 />
        <Pagination1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame2095585211() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full z-[1]">
      <Frame2095585326 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[872px] isolate items-center left-[332px] p-[24px] rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] top-[86px] w-[1092px]" data-name="Main">
      <BodyHeader />
      <Frame2095584667 />
      <Frame2095585211 />
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
          <path d={svgPaths.p26efd0f0} fill="url(#paint0_linear_105_18102)" id="path28" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_105_18102" x1="32.4191" x2="-1.67222" y1="19.2382" y2="8.94202">
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
    <div className="[grid-area:1_/_1] h-[38.152px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.001px] mask-size-[13.636px_38.152px] ml-0 mt-0 relative w-[13.636px]" data-name="g32" style={{ maskImage: `url('${imgG32}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 39">
        <g id="g32">
          <path d={svgPaths.p32bb12b0} fill="url(#paint0_linear_105_18105)" id="path44" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_105_18105" x1="6.81258" x2="6.81258" y1="1.50236" y2="34.7341">
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
          <path d={svgPaths.p3d163200} fill="url(#paint0_linear_105_18108)" id="path60" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_105_18108" x1="21.6397" x2="1.64322" y1="12.3639" y2="6.32096">
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
          <path d={svgPaths.p19cb1300} fill="url(#paint0_linear_105_18123)" id="Vector_6" />
          <path d={svgPaths.p26c79570} fill="url(#paint1_linear_105_18123)" id="Vector_7" />
          <path d={svgPaths.p26828f70} fill="url(#paint2_linear_105_18123)" id="Vector_8" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_105_18123" x1="88.0771" x2="88.0771" y1="0.101701" y2="14.6143">
            <stop stopColor="#13CDF8" />
            <stop offset="1" stopColor="#3A58EF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_105_18123" x1="112.367" x2="98.0294" y1="5.86544" y2="8.77101">
            <stop stopColor="#6B35C5" />
            <stop offset="1" stopColor="#B188F3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_105_18123" x1="126.58" x2="113.127" y1="9.49822" y2="5.03855">
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
                  <path d="M1 1V27.349" id="Vector 1" stroke="url(#paint0_linear_105_17746)" strokeLinecap="round" strokeWidth="0.89733" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_105_17746" x1="1.5" x2="1.5" y1="0.996386" y2="27.3526">
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
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "3.578125", "--transform-inner-height": "3.578125" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[3.589px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
              <circle cx="1.79466" cy="1.79466" fill="url(#paint0_linear_105_17738)" id="Ellipse 1" r="1.79466" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_105_17738" x1="1.79466" x2="1.79466" y1="-0.000492359" y2="3.58981">
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
          <path d={svgPaths.p10a0f780} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
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
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#1d2939] text-[16px] w-[min-content]">Shelby</p>
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[16px]">Staff Resignation</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561945() {
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
    <div className="basis-0 bg-[#d8defc] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[16px]">Employee Loan</p>
        </div>
      </div>
    </div>
  );
}

function Frame1686561939() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[8px] items-start overflow-visible p-0 relative shrink-0 w-full">
      <Rectangle3468304 />
      <SidebarSubItem9 />
    </button>
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <Rectangle3468308 />
      <SidebarSubItem13 />
    </div>
  );
}

function Rectangle3468309() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]">
      <div className="absolute inset-0 rounded-bl-[6px]">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
      </div>
    </div>
  );
}

function SidebarSubItem14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Sidebar Sub Item">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
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
      <Rectangle3468309 />
      <SidebarSubItem14 />
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
      <Frame1686561945 />
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

function Frame1686561946() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-0 w-[2px]">
      <div className="basis-0 bg-[#eaecf0] grow min-h-px min-w-px shrink-0 w-full" />
      <div className="bg-[rgba(234,236,240,0)] h-[24px] shrink-0 w-full" />
    </div>
  );
}

function Frame1686561947() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-start justify-between min-h-px min-w-px mr-[-2px] relative shrink-0">
      <Frame1686561942 />
      <Frame1686561946 />
    </div>
  );
}

function Frame1686561948() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-[16px] pr-[2px] py-0 relative w-full">
          <Frame1686561947 />
        </div>
      </div>
    </div>
  );
}

function SidebarItem6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="sidebar Item 6">
      <SidebarMainItem9 />
      <Frame1686561948 />
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
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
      <div className="overflow-x-clip overflow-y-auto size-full">
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
    <div className="absolute h-[699px] left-[calc(50%+692px)] top-[calc(50%+26.5px)] translate-x-[-50%] translate-y-[-50%] w-[8px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 699">
        <g clipPath="url(#clip0_105_17640)" id="Frame 1686561816">
          <path d={svgPaths.pbc82830} fill="var(--fill-0, #EAECF0)" id="Rectangle 3468284" />
          <path d={svgPaths.p16d772e0} fill="var(--fill-0, #EAECF0)" id="Rectangle 3468286" />
          <rect fill="var(--fill-0, #98A2B3)" height="172" id="Rectangle 3468285" rx="4" width="8" />
        </g>
        <defs>
          <clipPath id="clip0_105_17640">
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

export default function HumanResourcesEmployeeLoan() {
  return (
    <div className="bg-[#f2f4f7] relative size-full" data-name="Human Resources > Employee Loan">
      <Main />
      <Header />
      <MyCpeAdminSidebarWithLinks />
      <Frame1686561816 />
      <Footer />
    </div>
  );
}