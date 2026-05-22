import svgPaths from "./svg-hk53zzi1vc";

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
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative w-[298px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">Search here</p>
        <MagnifyingGlass />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right Side">
      <Button />
    </div>
  );
}

function Frame1000002499() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[20px]">Assign Task To:</p>
      <RightSide />
    </div>
  );
}

function Minus() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Minus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Minus">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_30_2789">
              <path d={svgPaths.p2bc4a800} />
            </mask>
            <path d={svgPaths.p2bc4a800} fill="var(--fill-0, #3A58EF)" />
            <path d={svgPaths.p2a724d00} fill="var(--stroke-0, #3A58EF)" mask="url(#path-1-inside-1_30_2789)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MasterCheckbox() {
  return (
    <div className="bg-[#d8defc] relative rounded-[3.333px] shrink-0 size-[18.333px]" data-name="Master/Checkbox">
      <div className="box-border content-stretch flex gap-[8.333px] items-center justify-center overflow-clip p-[1.667px] relative size-[18.333px]">
        <Minus />
      </div>
      <div aria-hidden="true" className="absolute border-[#3a58ef] border-[0.833px] border-solid inset-0 pointer-events-none rounded-[3.333px]" />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex gap-[6.667px] items-center justify-center relative shrink-0 size-[20px]" data-name="Checkbox">
      <MasterCheckbox />
    </div>
  );
}

function SelectAll() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Select All">
      <Checkbox />
    </div>
  );
}

function TableBody() {
  return (
    <div className="bg-[#ebeefd] box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-[12px] relative shrink-0" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#ebeefd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <SelectAll />
    </div>
  );
}

function Icon12CheckboxSelected() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon/12/Checkbox Selected">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon/12/Checkbox Selected">
          <path d="M1.25 5L3.75 7.5L8.75 2.5" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function MasterCheckbox1() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-[3.333px] shrink-0 size-[18.333px]" data-name="Master/Checkbox">
      <div className="box-border content-stretch flex gap-[8.333px] items-center justify-center overflow-clip p-[1.667px] relative size-[18.333px]">
        <Icon12CheckboxSelected />
      </div>
      <div aria-hidden="true" className="absolute border-[#98a2b3] border-[0.833px] border-solid inset-0 pointer-events-none rounded-[3.333px]" />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[6.667px] items-center justify-center relative shrink-0 size-[20px]" data-name="Checkbox">
      <MasterCheckbox1 />
    </div>
  );
}

function SelectAll1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Select All">
      <Checkbox1 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <SelectAll1 />
    </div>
  );
}

function MasterCheckbox2() {
  return (
    <div className="bg-white relative rounded-[3.333px] shrink-0 size-[18.333px]" data-name="Master/Checkbox">
      <div aria-hidden="true" className="absolute border-[#98a2b3] border-[0.833px] border-solid inset-0 pointer-events-none rounded-[3.333px]" />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex gap-[6.667px] items-center justify-center relative shrink-0 size-[20px]" data-name="Checkbox">
      <MasterCheckbox2 />
    </div>
  );
}

function SelectAll2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Select All">
      <Checkbox2 />
    </div>
  );
}

function TableBody2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <SelectAll2 />
    </div>
  );
}

function Frame2095584878() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <TableBody />
      <TableBody1 />
      {[...Array(6).keys()].map((_, i) => (
        <TableBody2 key={i} />
      ))}
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

function Avatar() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[6px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatar">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center text-nowrap whitespace-pre">DV</p>
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

function TableBody8() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[8px] py-[12px] relative w-full">
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

function Avatar1() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[6px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatar">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center text-nowrap whitespace-pre">RS</p>
    </div>
  );
}

function Frame2095584719() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Rekha Singhal</p>
    </div>
  );
}

function TableBody9() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[8px] py-[12px] relative w-full">
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

function Avatar2() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[6px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatar">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center text-nowrap whitespace-pre">AD</p>
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

function TableBody10() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[8px] py-[12px] relative w-full">
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

function Avatar3() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[6px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatar">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center text-nowrap whitespace-pre">KG</p>
    </div>
  );
}

function Frame2095584721() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Kasturba Gandhi</p>
    </div>
  );
}

function TableBody11() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[8px] py-[12px] relative w-full">
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

function Avatar4() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[6px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatar">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center text-nowrap whitespace-pre">KC</p>
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

function TableBody12() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[8px] py-[12px] relative w-full">
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

function Avatar5() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[6px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatar">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center text-nowrap whitespace-pre">MK</p>
    </div>
  );
}

function Frame2095584723() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Madan Kumar</p>
    </div>
  );
}

function TableBody13() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[8px] py-[12px] relative w-full">
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

function Avatar6() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[6px] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatar">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center text-nowrap whitespace-pre">SS</p>
    </div>
  );
}

function Frame2095584724() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Sonali Sharma</p>
    </div>
  );
}

function TableBody14() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[8px] py-[12px] relative w-full">
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

function Frame2095584662() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader />
      <TableBody8 />
      <TableBody9 />
      <TableBody10 />
      <TableBody11 />
      <TableBody12 />
      <TableBody13 />
      <TableBody14 />
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

function TableBody15() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Senior Accountant</p>
        </div>
      </div>
    </div>
  );
}

function TableBody16() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Financial Analyst</p>
        </div>
      </div>
    </div>
  );
}

function TableBody17() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Tax Specialist</p>
        </div>
      </div>
    </div>
  );
}

function TableBody18() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Audit Manager</p>
        </div>
      </div>
    </div>
  );
}

function TableBody19() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Table Body">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Accountant</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584912() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody15 />
      <TableBody16 />
      <TableBody17 />
      <TableBody18 />
      {[...Array(3).keys()].map((_, i) => (
        <TableBody19 key={i} />
      ))}
    </div>
  );
}

function Frame2095584914() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
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
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Engagement Type</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Regular Staffing</p>
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
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">Temporary Staffing</p>
        </div>
      </div>
    </div>
  );
}

function Frame2095584913() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TableBody22 />
      <TableBody22 />
      <TableBody22 />
      <TableBody25 />
      <TableBody22 />
      <TableBody22 />
      <TableBody22 />
    </div>
  );
}

function Frame2095584916() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <TableHeader2 />
      <Frame2095584913 />
    </div>
  );
}

function Frame2095585457() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex items-start justify-between overflow-clip relative w-full">
        <Frame2095584878 />
        <Frame2095584662 />
        <Frame2095584914 />
        <Frame2095584916 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Submit</p>
    </div>
  );
}

function Frame2095584876() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[14px] text-right">1 Staff selected</p>
      <Button1 />
    </div>
  );
}

export default function AssignTask() {
  return (
    <div className="bg-white relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] size-full" data-name="Assign Task">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[16px] relative size-full">
          <Frame1000002499 />
          <Frame2095585457 />
          <Frame2095584876 />
        </div>
      </div>
    </div>
  );
}