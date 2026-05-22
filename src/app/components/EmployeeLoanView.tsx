import React from 'react';
import svgPaths from "../imports/svg-5yw0lk7c7l";

interface EmployeeLoanViewProps {
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

function SearchButton() {
  return (
    <div className="bg-gray-50 relative rounded-[4px] shrink-0 w-full max-w-[298px] min-w-[200px]" data-name="Button">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[12px] py-[10px] relative rounded-[inherit] w-full">
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

function FilterButton() {
  return (
    <div className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Icon Button">
      <Funnel />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 flex-1 min-w-0" data-name="Right Side">
      <SearchButton />
      <FilterButton />
    </div>
  );
}

function BodyHeader() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 relative shrink-0 w-full z-[6]" data-name="Body Header">
      <LeftSide />
      <RightSide />
    </div>
  );
}

function DashboardCard({ title, value, color = "#e3e0fb" }: { title: string; value: string; color?: string }) {
  return (
    <div className="bg-gray-50 h-[92px] relative rounded-[6px] w-full" data-name="Dashboard Cards">
      <div aria-hidden="true" className="absolute border border-[#e3e0fb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[92px] items-start p-[16px] relative w-full">
          <div className="content-stretch flex isolate items-start justify-between relative shrink-0 w-full">
            <div className="content-stretch flex flex-col w-full h-[60px] items-start justify-between relative shrink-0 z-[2]">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <p className="capitalize font-['Inter:Medium',_sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#5d667b] text-[18px] text-nowrap whitespace-pre">{title}</p>
              </div>
              <div className="flex flex-col font-['Inter:Bold',_sans-serif] font-bold justify-end leading-[0] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap">
                <p className="leading-[32px] whitespace-pre">{value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCards() {
  return (
    <div className="content-stretch relative shrink-0 w-full z-[5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
      <DashboardCard title="Outstanding Balance" value="₹1,15,000" />
      <DashboardCard title="Total Ongoing EMI" value="₹15,000/mo" />
      <DashboardCard title="Active Loans" value="03" />
      <DashboardCard title="Amount Issued" value="₹3,00,000" />
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

function Status({ type }: { type: 'progress' | 'paid' }) {
  if (type === 'progress') {
    return (
      <div className="bg-[#fffaeb] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
        <div aria-hidden="true" className="absolute border-[#ecfdf3] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#f79009] text-[12px] text-center text-nowrap whitespace-pre">In Progress</p>
      </div>
    );
  }
  
  return (
    <div className="bg-[#ecfdf3] box-border content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#ecfdf3] border-[0.817px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#12b76a] text-[12px] text-center text-nowrap whitespace-pre">Paid</p>
    </div>
  );
}

function DataTable() {
  const loanData = [
    {
      id: 1,
      name: "Kasturba Kamdar",
      avatar: <AvatarFemale02 />,
      loanType: "Personal Loan",
      requestedAmount: "5,00,000",
      approvedAmount: "3,00,000",
      startDate: "Mar 25, 2023",
      endDate: "Mar 2, 2025",
      tenure: "24 Months",
      status: "progress" as const
    },
    {
      id: 2,
      name: "Krishna Chauhan",
      avatar: <AvatarMale07 />,
      loanType: "Emergency Loan",
      requestedAmount: "1,00,000",
      approvedAmount: "70,000",
      startDate: "Jan 10, 2023",
      endDate: "Dec 10, 2024",
      tenure: "12 Months",
      status: "paid" as const
    },
    {
      id: 3,
      name: "Srinivasan Anand",
      avatar: <AvatarMale01 />,
      loanType: "Education Loan",
      requestedAmount: "80,000",
      approvedAmount: "50,000",
      startDate: "Jul 26, 2020",
      endDate: "Jul 26, 2022",
      tenure: "12 Months",
      status: "paid" as const
    }
  ];

  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <div className="basis-0 content-stretch overflow-x-auto grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
          <div className="min-w-[1200px] flex items-start justify-between">
          {/* Staff Name Column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px]">
            <div className="bg-[#ebeefd] h-[42px] shrink-0 sticky top-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                  <p className="basis-0 font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Staff Name</p>
                </div>
              </div>
            </div>
            {loanData.map((loan) => (
              <div key={loan.id} className="h-[50px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center pl-[16px] pr-[8px] py-[12px] relative w-full">
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                      {loan.avatar}
                    </div>
                    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                      <p className="font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">{loan.name}</p>
                    </div>
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
            ))}
          </div>

          {/* Other Columns */}
          <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-x-auto relative shrink-0">
            {/* Loan Type */}
            <div className="content-stretch flex flex-col items-start relative flex-1 min-w-[120px]">
              <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="font-semibold leading-[18px] not-italic relative text-[#1d2939] text-[12px] truncate">Loan Type</p>
                  </div>
                </div>
              </div>
              {loanData.map((loan) => (
                <div key={loan.id} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <p className="font-normal leading-[20px] not-italic overflow-ellipsis overflow-hidden relative text-[#344054] text-[14px] truncate">{loan.loanType}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Requested Amount */}
            <div className="content-stretch flex flex-col items-start relative flex-1 min-w-[140px]">
              <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="font-semibold leading-[18px] not-italic relative text-[#1d2939] text-[12px] truncate">Requested Amount (₹)</p>
                  </div>
                </div>
              </div>
              {loanData.map((loan) => (
                <div key={loan.id} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <p className="font-normal leading-[20px] not-italic overflow-ellipsis overflow-hidden relative text-[#344054] text-[14px] truncate">{loan.requestedAmount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Approved Amount */}
            <div className="content-stretch flex flex-col items-start relative flex-1 min-w-[140px]">
              <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="font-semibold leading-[18px] not-italic relative text-[#1d2939] text-[12px] truncate">Approved Amount (₹)</p>
                  </div>
                </div>
              </div>
              {loanData.map((loan) => (
                <div key={loan.id} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <p className="font-normal leading-[20px] not-italic overflow-ellipsis overflow-hidden relative text-[#344054] text-[14px] truncate">{loan.approvedAmount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Loan Start Date */}
            <div className="content-stretch flex flex-col items-start relative flex-1 min-w-[120px]">
              <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="font-semibold leading-[18px] not-italic relative text-[#1d2939] text-[12px] truncate">Loan Start Date</p>
                  </div>
                </div>
              </div>
              {loanData.map((loan) => (
                <div key={loan.id} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <p className="font-normal leading-[20px] not-italic overflow-ellipsis overflow-hidden relative text-[#344054] text-[14px] truncate">{loan.startDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Loan End Date */}
            <div className="content-stretch flex flex-col items-start relative flex-1 min-w-[120px]">
              <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="font-semibold leading-[18px] not-italic relative text-[#1d2939] text-[12px] truncate">Loan End Date</p>
                  </div>
                </div>
              </div>
              {loanData.map((loan) => (
                <div key={loan.id} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <p className="font-normal leading-[20px] not-italic overflow-ellipsis overflow-hidden relative text-[#344054] text-[14px] truncate">{loan.endDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tenure */}
            <div className="content-stretch flex flex-col items-start relative flex-1 min-w-[100px]">
              <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="font-semibold leading-[18px] not-italic relative text-[#1d2939] text-[12px] truncate">Tenure</p>
                  </div>
                </div>
              </div>
              {loanData.map((loan) => (
                <div key={loan.id} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <p className="font-normal leading-[20px] not-italic overflow-ellipsis overflow-hidden relative text-[#344054] text-[14px] truncate">{loan.tenure}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Repayment Status */}
            <div className="content-stretch flex flex-col items-start relative flex-1 min-w-[140px]">
              <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="font-semibold leading-[18px] not-italic relative text-[#1d2939] text-[12px] truncate">Repayment Status</p>
                  </div>
                </div>
              </div>
              {loanData.map((loan) => (
                <div key={loan.id} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <Status type={loan.status} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Column */}
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]">
            <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_0px_1px] border-solid bottom-0 left-[-1px] pointer-events-none right-0 top-0" />
            <div className="bg-[#ebeefd] box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative shrink-0 w-full">
              <p className="basis-0 font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Action</p>
            </div>
            {[...Array(3).keys()].map((i) => (
              <div key={i} className="h-[50px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                    <Eye />
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="bg-white h-[60px] relative rounded-bl-[12px] rounded-br-[12px] shadow-[0px_-4px_21px_0px_rgba(0,0,0,0.04)] shrink-0 w-full">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex h-[60px] items-center justify-between px-[24px] py-[16px] relative w-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[400px]">
                <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Showing</p>
                <div className="bg-white relative rounded-[4px] shrink-0">
                  <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
                    <p className="font-medium leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d2939] text-[16px] text-nowrap w-[26px]">20</p>
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g id="Icon / Navigation / Chevron--down">
                          <path d={svgPaths.pab79800} fill="var(--fill-0, #5D667B)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
                <p className="font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap whitespace-pre">of 500</p>
                <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Events</p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0">
                <div className="bg-white relative rounded-[8px] shrink-0">
                  <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                    <div className="relative shrink-0 size-[20px]">
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
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <div className="bg-white relative rounded-[8px] shrink-0">
                  <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="Icon / Navigation / Chevron--left">
                          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
                          <path d={svgPaths.p2ed28900} fill="var(--fill-0, #5D667B)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <div className="box-border content-stretch flex gap-[8px] items-center px-[8px] py-0 relative shrink-0">
                  <div className="bg-white relative rounded-[8px] shrink-0">
                    <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
                      <p className="font-medium leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#1d2939] text-[16px] text-center text-nowrap w-[25px]">1</p>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#98a2b3] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0">
                    <p className="font-normal leading-[1.25] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5d667b] text-[16px] text-center text-nowrap whitespace-pre">of 25 pages</p>
                  </div>
                </div>
                <div className="bg-white relative rounded-[8px] shrink-0">
                  <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g id="Icon / Navigation / Chevron--right">
                          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
                          <path d={svgPaths.p112ebf00} fill="var(--fill-0, #5D667B)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <div className="bg-white relative rounded-[8px] shrink-0">
                  <div className="box-border content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                    <div className="relative shrink-0 size-[20px]">
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
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function EmployeeLoanView({ onNavigationChange }: EmployeeLoanViewProps) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-full isolate items-center p-[24px] rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-full overflow-auto scrollbar-hide">
      <BodyHeader />
      <DashboardCards />
      <DataTable />
    </div>
  );
}