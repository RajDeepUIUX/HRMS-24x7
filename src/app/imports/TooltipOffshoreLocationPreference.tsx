import svgPaths from "./svg-3672531vf3";

function Content() {
  return (
    <div className="bg-white box-border content-start flex flex-wrap gap-[8px] items-start p-[12px] relative rounded-[8px] shrink-0" data-name="Content">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap whitespace-pre">3 Task Assigned</p>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="h-[6px] relative w-[16px]" data-name="Tooltip">
      <div className="absolute bottom-[-24.76%] left-0 right-0 top-[-9.76%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9">
          <g id="Tooltip">
            <path d={svgPaths.p3404cb00} fill="var(--fill-0, white)" id="bottom-center" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function TooltipOffshoreLocationPreference() {
  return (
    <div className="box-border content-stretch flex flex-col items-center relative rounded-[8px] shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1),0px_2px_4px_-2px_rgba(16,24,40,0.06)] size-full" data-name="Tooltip - Offshore Location Preference">
      <Content />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Tooltip />
        </div>
      </div>
    </div>
  );
}