import svgPaths from "./svg-7n26vovbq1";

function Trash() {
  return (
    <button className="block cursor-pointer relative shrink-0 size-[50px]" data-name="Trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Trash">
          <path d={svgPaths.p5c9d900} fill="var(--fill-0, #B42318)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p3418df00} fill="var(--fill-0, #B42318)" id="Vector_2" />
        </g>
      </svg>
    </button>
  );
}

function Frame2095585810() {
  return (
    <div className="bg-gray-50 content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[100px]">
      <Trash />
    </div>
  );
}

function Frame2095585615() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame2095585810 />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[30px] min-w-full not-italic relative shrink-0 text-[#1d2939] text-[20px] text-center" style={{ width: "min-content" }}>
        Delete Holiday
      </p>
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#475467] text-[16px] text-center" style={{ width: "min-content" }}>
        Are you sure you want to delete this holiday? Deleting it will remove it from the calendar, but you can add it back at any time. Please confirm your action.
      </p>
    </div>
  );
}

function Button() {
  return (
    <button className="h-[36px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center overflow-clip px-[14px] py-[8px] relative">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#b42318] text-[14px] text-nowrap whitespace-pre">Cancel</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b42318] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </button>
  );
}

function Button1() {
  return (
    <button className="bg-[#b42318] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Delete</p>
    </button>
  );
}

function Frame2095585302() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[6px] items-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame2095585186() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-full">
      <Frame2095585302 />
    </div>
  );
}

export default function DeleteConfirmationPopup() {
  return (
    <div className="bg-white relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] size-full" data-name="Delete Confirmation - Popup">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
          <Frame2095585615 />
          <Frame2095585186 />
        </div>
      </div>
    </div>
  );
}