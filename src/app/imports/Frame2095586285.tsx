import svgPaths from "./svg-lnnj227774";

function Frame2095586347() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#344054] text-[0px] text-[12px] text-nowrap whitespace-pre">
        <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold">No task</span>
        <span>{` has been assigned yet, but you can see what Deepa can perform.`}</span>
      </p>
    </div>
  );
}

function Frame2095586353() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#344054] text-[16px]" style={{ width: "min-content" }}>
        Deepa’s Repository
      </p>
      <Frame2095586347 />
    </div>
  );
}

function PlusCircle() {
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

function Button() {
  return (
    <div className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Button">
      <PlusCircle />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Assign Additional Task</p>
    </div>
  );
}

function StaffRepository() {
  return (
    <div className="bg-[#f2f4f7] relative shrink-0 w-full" data-name="Staff Repository">
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[16px] relative w-full">
          <Frame2095586353 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Frame2095585207() {
  return (
    <div className="bg-[#ebeefd] relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium h-[24px] leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] w-[904px]">Deepa can perform:</p>
        </div>
      </div>
    </div>
  );
}

function PlusCircle1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="PlusCircle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="PlusCircle">
          <path d={svgPaths.p3b1cc880} fill="var(--fill-0, #027A48)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Assign() {
  return (
    <div className="bg-[#ecfdf3] relative rounded-[100px] shrink-0" data-name="Assign">
      <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative">
        <PlusCircle1 />
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#027a48] text-[12px] text-nowrap whitespace-pre">Assign</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#027a48] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function NormalTask() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Normal Task">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[10px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">CAM expense allocation</p>
          <Assign />
        </div>
      </div>
    </div>
  );
}

function PlusCircle2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="PlusCircle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="PlusCircle">
          <path d={svgPaths.p3b1cc880} fill="var(--fill-0, #027A48)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Assign1() {
  return (
    <div className="bg-[#ecfdf3] relative rounded-[100px] shrink-0" data-name="Assign">
      <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative">
        <PlusCircle2 />
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#027a48] text-[12px] text-nowrap whitespace-pre">Assign</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#027a48] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function NormalTask1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Normal Task">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[10px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">Capital project cost tracking</p>
          <Assign1 />
        </div>
      </div>
    </div>
  );
}

function PlusCircle3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="PlusCircle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="PlusCircle">
          <path d={svgPaths.p3b1cc880} fill="var(--fill-0, #027A48)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Assign2() {
  return (
    <div className="bg-[#ecfdf3] relative rounded-[100px] shrink-0" data-name="Assign">
      <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip pl-[4px] pr-[8px] py-[4px] relative">
        <PlusCircle3 />
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#027a48] text-[12px] text-nowrap whitespace-pre">Assign</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#027a48] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function NormalTask2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Normal Task">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[10px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">{`Escrow & trust accounting`}</p>
          <Assign2 />
        </div>
      </div>
    </div>
  );
}

function Frame2095585208() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[8px] relative w-full">
          <NormalTask />
          <NormalTask1 />
          <NormalTask2 />
        </div>
      </div>
    </div>
  );
}

function CanPerform() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Can Perform">
      <div className="content-stretch flex flex-col items-start overflow-clip relative w-full">
        <Frame2095585207 />
        <Frame2095585208 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ebeefd] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame2095586334() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center p-[12px] relative size-full">
          <CanPerform />
        </div>
      </div>
    </div>
  );
}

export default function Frame2095586285() {
  return (
    <div className="bg-white relative rounded-[8px] size-full">
      <div className="content-stretch flex flex-col items-center overflow-clip relative size-full">
        <StaffRepository />
        <Frame2095586334 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}