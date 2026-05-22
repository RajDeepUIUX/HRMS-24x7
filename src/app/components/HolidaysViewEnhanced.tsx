import svgPaths from "../imports/svg-n0i8ev5xyz";
import AddHolidayModal from "./AddHolidayModalEnhanced";
import EditHolidayModal from "./EditHolidayModalEnhanced";
import ResizableListView from "./ResizableListView";
import ImportHolidaysModal from "./ImportHolidaysModal";
import { useState, useEffect } from "react";

// Holiday interface with recurring field
interface Holiday {
  name: string;
  date: string;
  displayDate: string;
  type: string;
  description: string;
  recurring?: boolean;
}

// Holiday data structure with recurring field
const holidaysData: Holiday[] = [
  { name: "Makar Sankranti/Hazrat Ali Jayanti", date: "2025-01-14", displayDate: "Jan 14, 2025", type: "Regional", description: "Celebrates the harvest festival and the birth anniversary of Hazrat Ali.", recurring: true },
  { name: "Basi Uttarayan/Pongal/Thiruvalluvar Day", date: "2025-01-15", displayDate: "Jan 15, 2025", type: "Regional", description: "A festival marking the harvest, gratitude to nature, and Tamil poet Thiruvalluvar's day.", recurring: true },
  { name: "Eid al-Adha", date: "2025-06-06", displayDate: "Jun 06, 2025", type: "Public", description: "Islamic festival of sacrifice commemorating Ibrahim's devotion and faith in Allah.", recurring: false },
  { name: "Independence Day", date: "2025-08-15", displayDate: "Aug 15, 2025", type: "Public", description: "Celebrates the nation's independence from British rule on August 15th.", recurring: true },
  { name: "Dussehra/ Gandhi Jayanti", date: "2025-10-02", displayDate: "Oct 02, 2025", type: "Public", description: "Marks the victory of good over evil and the birth anniversary of Mahatma Gandhi.", recurring: true },
  { name: "Diwali Additional Holiday", date: "2025-10-20", displayDate: "Oct 20, 2025", type: "Company Specific", description: "An extra day off during the Diwali festival celebrations.", recurring: false },
  { name: "Diwali", date: "2025-10-21", displayDate: "Oct 21, 2025", type: "Public", description: "The Hindu festival of lights symbolizing the victory of light over darkness.", recurring: true },
  { name: "Diwali New Year\\ Govardhan Puja", date: "2025-10-22", displayDate: "Oct 22, 2025", type: "Regional", description: "Celebrates the Hindu New Year and Govardhan Puja, offering prayers to Lord Krishna.", recurring: true },
  { name: "Christmas", date: "2025-12-25", displayDate: "Dec 25, 2025", type: "Public", description: "Commemorates the birth of Jesus Christ, celebrated on December 25th.", recurring: true },
  { name: "Boxing Day", date: "2025-12-26", displayDate: "Dec 26, 2025", type: "Company Specific", description: "Celebrated the day after Christmas, traditionally for giving gifts to the needy.", recurring: true }
];

// Helper function to get recurring holidays for a specific year
function getRecurringHolidaysForYear(holidays: Holiday[], targetYear: number): Holiday[] {
  const result: Holiday[] = [];
  
  holidays.forEach(holiday => {
    const originalDate = new Date(holiday.date);
    const originalYear = originalDate.getFullYear();
    
    if (holiday.recurring && targetYear !== originalYear) {
      // Create a new holiday for the target year
      const newDate = new Date(originalDate);
      newDate.setFullYear(targetYear);
      
      result.push({
        ...holiday,
        date: newDate.toISOString().split('T')[0],
        displayDate: newDate.toLocaleDateString('en-US', { 
          month: 'short', 
          day: '2-digit', 
          year: 'numeric' 
        })
      });
    } else if (originalYear === targetYear) {
      // Include the original holiday
      result.push(holiday);
    }
  });
  
  return result;
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
    <div className="flex items-center gap-1 text-xs">
      <span className="text-[#98a2b3] font-medium">Human Resources</span>
      <CaretRight />
      <span className="text-[#344054] font-medium">Holidays</span>
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

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#2c47d1] transition-colors" 
      data-name="Button"
    >
      <PlusCircle1 />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Add Holiday</p>
    </button>
  );
}

function RightSide({ onAddHoliday }: { onAddHoliday: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right Side">
      <Button />
      <Button1 onClick={onAddHoliday} />
    </div>
  );
}

function BodyHeader({ onAddHoliday }: { onAddHoliday: () => void }) {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full z-[6]" data-name="Body Header">
      <LeftSide />
      <RightSide onAddHoliday={onAddHoliday} />
    </div>
  );
}

function CaretLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretLeft">
          <path d={svgPaths.p10be5e00} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton({ currentView, onClick }: { currentView?: 'calendar' | 'list'; onClick?: () => void }) {
  if (currentView === 'list') {
    return null;
  }
  
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-gray-100 transition-colors" data-name="Icon Button" onClick={onClick}>
      <CaretLeft />
    </div>
  );
}

function CaretRight1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretRight">
          <path d={svgPaths.p90bba00} fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1({ currentView, onClick }: { currentView?: 'calendar' | 'list'; onClick?: () => void }) {
  if (currentView === 'list') {
    return null;
  }
  
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-gray-100 transition-colors" data-name="Icon Button" onClick={onClick}>
      <CaretRight1 />
    </div>
  );
}

// Year/Month Jump Selector Component
function YearMonthSelector({ currentMonth, onMonthChange }: { currentMonth: Date; onMonthChange: (date: Date) => void }) {
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  
  const currentYear = currentMonth.getFullYear();
  const currentMonthIndex = currentMonth.getMonth();
  
  // Generate year range (10 years before and after current year)
  const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  return (
    <div className="flex gap-2 items-center">
      {/* Month Selector */}
      <div className="relative">
        <button
          onClick={() => setShowMonthDropdown(!showMonthDropdown)}
          className="px-3 py-1 bg-white border border-[#d0d5dd] rounded text-[14px] hover:bg-gray-50 min-w-[100px] text-left"
        >
          {months[currentMonthIndex]}
        </button>
        {showMonthDropdown && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-[#d0d5dd] rounded shadow-lg z-20 max-h-[200px] overflow-y-auto">
            {months.map((month, index) => (
              <button
                key={month}
                onClick={() => {
                  const newDate = new Date(currentYear, index, 1);
                  onMonthChange(newDate);
                  setShowMonthDropdown(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-[#f2f4f7] text-[14px] whitespace-nowrap"
              >
                {month}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Year Selector */}
      <div className="relative">
        <button
          onClick={() => setShowYearDropdown(!showYearDropdown)}
          className="px-3 py-1 bg-white border border-[#d0d5dd] rounded text-[14px] hover:bg-gray-50 min-w-[80px] text-left"
        >
          {currentYear}
        </button>
        {showYearDropdown && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-[#d0d5dd] rounded shadow-lg z-20 max-h-[200px] overflow-y-auto">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => {
                  const newDate = new Date(year, currentMonthIndex, 1);
                  onMonthChange(newDate);
                  setShowYearDropdown(false);
                }}
                className="w-full px-4 py-2 text-left hover:bg-[#f2f4f7] text-[14px]"
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Frame2095585265({ currentView, currentMonth, onPrevMonth, onNextMonth, onMonthChange }: { 
  currentView?: 'calendar' | 'list'; 
  currentMonth?: Date; 
  onPrevMonth?: () => void; 
  onNextMonth?: () => void;
  onMonthChange?: (date: Date) => void;
}) {
  const getDisplayText = () => {
    if (currentView === 'list') {
      return 'All Years';
    }
    if (currentMonth) {
      return currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }
    return 'December 2025';
  };

  if (currentView === 'list') {
    return (
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-center whitespace-nowrap">
          {getDisplayText()}
        </p>
      </div>
    );
  }

  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <IconButton currentView={currentView} onClick={onPrevMonth} />
      <div className="flex items-center gap-3">
        <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-center whitespace-nowrap">
          {getDisplayText()}
        </p>
        {currentMonth && onMonthChange && (
          <YearMonthSelector currentMonth={currentMonth} onMonthChange={onMonthChange} />
        )}
      </div>
      <IconButton1 currentView={currentView} onClick={onNextMonth} />
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

function Button3({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 hover:bg-blue-50 transition-colors cursor-pointer px-2 py-1" 
      data-name="Button"
      onClick={onClick}
    >
      <UploadSimple />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre">Import</p>
    </button>
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

function Button4({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 hover:bg-blue-50 transition-colors cursor-pointer" 
      data-name="Button"
      onClick={onClick}
    >
      <DownloadSimple />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre">Export</p>
    </button>
  );
}

function RightSide1({ onImportClick, onExportClick }: { onImportClick: () => void; onExportClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Right Side">
      <Button3 onClick={onImportClick} />
      <p className="font-['Inter:Extra_Light',_sans-serif] font-extralight leading-[20px] not-italic relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre">|</p>
      <Button4 onClick={onExportClick} />
    </div>
  );
}

function CalendarBlank() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CalendarBlank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CalendarBlank">
          <path d={svgPaths.p2dec1100} fill="var(--fill-0, #1D2939)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SwitcherItem({ onClick, isActive }: { onClick?: () => void; isActive?: boolean }) {
  return (
    <div 
      className={`${isActive ? 'bg-white' : 'bg-[#f2f4f7]'} box-border content-stretch flex gap-[4px] items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-white transition-colors`} 
      data-name="Switcher item"
      onClick={onClick}
    >
      <CalendarBlank />
    </div>
  );
}

function ListBullets() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ListBullets">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ListBullets">
          <path d={svgPaths.pc471600} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SwitcherItem1({ onClick, isActive }: { onClick?: () => void; isActive?: boolean }) {
  return (
    <div 
      className={`${isActive ? 'bg-white' : 'bg-[#f2f4f7]'} box-border content-stretch flex gap-[4px] items-start px-[12px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-white transition-colors`} 
      data-name="Switcher item"
      onClick={onClick}
    >
      <ListBullets />
    </div>
  );
}

function Switcher({ currentView, onViewChange }: { currentView: 'calendar' | 'list'; onViewChange: (view: 'calendar' | 'list') => void }) {
  return (
    <div className="bg-[#f2f4f7] relative rounded-[4px] shrink-0" data-name="Switcher">
      <div className="content-stretch flex items-start overflow-clip relative">
        <SwitcherItem 
          onClick={() => onViewChange('calendar')} 
          isActive={currentView === 'calendar'}
        />
        <SwitcherItem1 
          onClick={() => onViewChange('list')} 
          isActive={currentView === 'list'}
        />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame2095585267({ currentView, onViewChange, onImportClick, onExportClick }: { 
  currentView: 'calendar' | 'list'; 
  onViewChange: (view: 'calendar' | 'list') => void; 
  onImportClick: () => void; 
  onExportClick: () => void 
}) {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <RightSide1 onImportClick={onImportClick} onExportClick={onExportClick} />
      <Switcher currentView={currentView} onViewChange={onViewChange} />
    </div>
  );
}

function BodyHeader1({ currentView, onViewChange, currentMonth, onPrevMonth, onNextMonth, onImportClick, onExportClick, onMonthChange }: { 
  currentView: 'calendar' | 'list'; 
  onViewChange: (view: 'calendar' | 'list') => void;
  currentMonth?: Date;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  onImportClick: () => void;
  onExportClick: () => void;
  onMonthChange?: (date: Date) => void;
}) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full z-[4]" data-name="Body Header">
      <Frame2095585265 currentView={currentView} currentMonth={currentMonth} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} onMonthChange={onMonthChange} />
      <Frame2095585267 currentView={currentView} onViewChange={onViewChange} onImportClick={onImportClick} onExportClick={onExportClick} />
    </div>
  );
}

// Helper functions for calendar
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function getHolidaysForMonth(year: number, month: number, holidays: Holiday[]) {
  // Get holidays for the current month, including recurring ones
  const allHolidays = getRecurringHolidaysForYear(holidays, year);
  
  return allHolidays.filter(holiday => {
    const holidayDate = new Date(holiday.date);
    return holidayDate.getFullYear() === year && holidayDate.getMonth() === month;
  });
}

// Calendar View with recurring holidays support
function CalendarView({ currentMonth, holidays, onEditHoliday, onAddHolidayWithDate }: { 
  currentMonth: Date; 
  holidays: Holiday[]; 
  onEditHoliday?: (holiday: Holiday) => void;
  onAddHolidayWithDate?: (date: string) => void;
}) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const holidaysThisMonth = getHolidaysForMonth(year, month, holidays);
  
  // Get previous month info for leading days
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
  
  // Calculate calendar grid for exactly 5 rows x 7 columns = 35 days
  const calendarDays = [];
  
  // Previous month's trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isNextMonth: false,
      date: new Date(prevYear, prevMonth, daysInPrevMonth - i)
    });
  }
  
  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isNextMonth: false,
      date: new Date(year, month, day)
    });
  }
  
  // Next month's leading days to fill exactly 35 cells (5 rows x 7 columns)
  const remainingCells = 35 - calendarDays.length;
  const nextMonth = month === 11 ? 0 : month + 1;
  const nextYear = month === 11 ? year + 1 : year;
  
  for (let day = 1; day <= remainingCells; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isNextMonth: true,
      date: new Date(nextYear, nextMonth, day)
    });
  }

  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="content-stretch flex flex-col h-full items-start justify-between overflow-clip relative w-full border border-[#eaecf0] rounded-[8px]">
        {/* Calendar Header */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="bg-[#ebeefd] box-border content-stretch flex gap-[4px] h-[42px] items-center justify-center px-[16px] py-[8px] relative shrink-0 flex-1">
              <p className="basis-0 font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px] text-center">{day}</p>
            </div>
          ))}
        </div>
        
        {/* Calendar Body - 5 Rows x 7 Columns Grid */}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full grid grid-cols-7 grid-rows-5 h-full">
          {Array.from({ length: 35 }, (_, index) => {
            const calendarDay = calendarDays[index];
            if (!calendarDay) {
              return (
                <div 
                  key={index}
                  className="box-border content-stretch flex flex-col items-end justify-between px-[16px] py-[12px] relative border-[#eaecf0] border-[0px_1px_1px_0px] border-solid"
                >
                </div>
              );
            }

            const holidayForDay = holidaysThisMonth.find(holiday => {
              const holidayDate = new Date(holiday.date);
              return holidayDate.getDate() === calendarDay.day && calendarDay.isCurrentMonth;
            });

            const isHighlighted = holidayForDay !== undefined;
            
            return (
              <button 
                key={index}
                className={`box-border content-stretch flex flex-col items-end justify-between px-[16px] py-[12px] relative border-[#eaecf0] border-[0px_1px_1px_0px] border-solid overflow-hidden transition-colors cursor-pointer hover:bg-blue-50 ${
                  isHighlighted ? 'bg-[#f2f4f7] hover:bg-blue-100' : ''
                } ${!calendarDay.isCurrentMonth ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => {
                  if (!calendarDay.isCurrentMonth) return;
                  
                  if (holidayForDay && onEditHoliday) {
                    // Edit existing holiday
                    onEditHoliday(holidayForDay);
                  } else if (onAddHolidayWithDate) {
                    // Add new holiday with prefilled date
                    const dateStr = `${calendarDay.date.getFullYear()}-${String(calendarDay.date.getMonth() + 1).padStart(2, '0')}-${String(calendarDay.date.getDate()).padStart(2, '0')}`;
                    onAddHolidayWithDate(dateStr);
                  }
                }}
                disabled={!calendarDay.isCurrentMonth}
              >
                <p className={`text-[14px] text-right w-full ${
                  calendarDay.isCurrentMonth ? 'text-[#344054]' : 'text-[#98a2b3]'
                }`}>
                  {String(calendarDay.day).padStart(2, '0')}
                </p>
                {holidayForDay && (
                  <div className="w-full">
                    <p className="text-[#344054] text-[12px] text-left leading-tight break-words">
                      {holidayForDay.name.length > 20 
                        ? holidayForDay.name.substring(0, 20) + '...'
                        : holidayForDay.name
                      }
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className={`inline-block px-2 py-1 text-[10px] rounded ${
                        holidayForDay.type === 'Public' ? 'bg-blue-100 text-blue-800' :
                        holidayForDay.type === 'Regional' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {holidayForDay.type}
                      </div>
                      {holidayForDay.recurring && (
                        <div className="inline-block px-1.5 py-0.5 text-[9px] rounded bg-purple-100 text-purple-800">
                          ↻
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Main({ currentView, onViewChange }: { currentView: 'calendar' | 'list'; onViewChange: (view: 'calendar' | 'list') => void }) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1)); // Start with January 2025
  const [isAddHolidayModalOpen, setIsAddHolidayModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [holidayToEdit, setHolidayToEdit] = useState<Holiday | null>(null);
  const [prefilledDate, setPrefilledDate] = useState<string>('');
  const [holidays, setHolidays] = useState<Holiday[]>(holidaysData);

  // Load holidays from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('holidays');
    if (stored) {
      try {
        setHolidays(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to load holidays from localStorage', e);
      }
    }
  }, []);

  // Save holidays to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('holidays', JSON.stringify(holidays));
  }, [holidays]);

  const handlePrevMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() - 1);
      return newMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + 1);
      return newMonth;
    });
  };

  const handleMonthChange = (date: Date) => {
    setCurrentMonth(date);
  };

  const handleAddHoliday = (newHoliday: {
    name: string;
    date: string;
    type: string;
    description: string;
    recurring?: boolean;
  }) => {
    const formattedHoliday: Holiday = {
      ...newHoliday,
      displayDate: new Date(newHoliday.date).toLocaleDateString('en-US', { 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric' 
      }),
      recurring: newHoliday.recurring || false
    };
    setHolidays(prev => [...prev, formattedHoliday]);
  };

  const handleImportHolidays = (importedHolidays: any[]) => {
    setHolidays(prev => [...prev, ...importedHolidays]);
  };

  const handleDeleteHoliday = (holidayIndex: number) => {
    setHolidays(prev => prev.filter((_, index) => index !== holidayIndex));
  };

  const handleEditHoliday = (holidayIndex: number, updatedHoliday: {
    name: string;
    date: string;
    type: string;
    description: string;
    recurring?: boolean;
  }) => {
    const formattedHoliday: Holiday = {
      ...updatedHoliday,
      displayDate: new Date(updatedHoliday.date).toLocaleDateString('en-US', { 
        month: 'short', 
        day: '2-digit', 
        year: 'numeric' 
      }),
      recurring: updatedHoliday.recurring || false
    };
    setHolidays(prev => prev.map((holiday, index) => 
      index === holidayIndex ? formattedHoliday : holiday
    ));
  };

  const handleEditCalendarHoliday = (holiday: Holiday) => {
    setHolidayToEdit(holiday);
    setIsEditModalOpen(true);
  };

  const handleAddHolidayWithDate = (date: string) => {
    setPrefilledDate(date);
    setIsAddHolidayModalOpen(true);
  };

  const handleEditModalSave = (updatedHoliday: {
    name: string;
    date: string;
    type: string;
    description: string;
    recurring?: boolean;
  }) => {
    if (holidayToEdit) {
      const holidayIndex = holidays.findIndex(h => 
        h.name === holidayToEdit.name && 
        h.date === holidayToEdit.date &&
        h.type === holidayToEdit.type
      );
      if (holidayIndex !== -1) {
        handleEditHoliday(holidayIndex, updatedHoliday);
      }
    }
    setIsEditModalOpen(false);
    setHolidayToEdit(null);
  };

  const handleExportHolidays = () => {
    // Create CSV content matching the import template format: Name,Date,Type,Description,Recurring
    const csvHeader = 'Name,Date,Type,Description,Recurring';
    const csvRows = holidays.map(holiday => {
      // Escape any commas or quotes in the data by wrapping in quotes
      const escapeCsvField = (field: string) => {
        if (field.includes(',') || field.includes('"') || field.includes('\n')) {
          return `"${field.replace(/"/g, '""')}"`;
        }
        return field;
      };
      
      return [
        escapeCsvField(holiday.name),
        holiday.date, // Date is already in YYYY-MM-DD format
        escapeCsvField(holiday.type),
        escapeCsvField(holiday.description),
        holiday.recurring ? 'Yes' : 'No'
      ].join(',');
    });
    
    const csvContent = [csvHeader, ...csvRows].join('\n');
    
    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    // Generate filename with current date
    const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    a.download = `holidays_export_${currentDate}.csv`;
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm h-full flex flex-col py-[24px] px-[24px]">
      <div className="content-stretch flex flex-col gap-[16px] items-center relative w-full h-full">
        <BodyHeader onAddHoliday={() => setIsAddHolidayModalOpen(true)} />
        <BodyHeader1 
          currentView={currentView} 
          onViewChange={onViewChange}
          currentMonth={currentMonth}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onImportClick={() => setIsImportModalOpen(true)}
          onExportClick={handleExportHolidays}
          onMonthChange={handleMonthChange}
        />
        {currentView === 'calendar' ? (
          <CalendarView 
            currentMonth={currentMonth} 
            holidays={holidays} 
            onEditHoliday={handleEditCalendarHoliday} 
            onAddHolidayWithDate={handleAddHolidayWithDate} 
          />
        ) : (
          <ResizableListView 
            holidays={holidays} 
            onDeleteHoliday={handleDeleteHoliday} 
            onEditHoliday={handleEditHoliday} 
          />
        )}
      </div>
      
      <AddHolidayModal
        isOpen={isAddHolidayModalOpen}
        onClose={() => {
          setIsAddHolidayModalOpen(false);
          setPrefilledDate('');
        }}
        onAdd={handleAddHoliday}
        prefilledDate={prefilledDate}
      />
      
      <ImportHolidaysModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImportHolidays}
      />
      
      <EditHolidayModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleEditModalSave}
        holiday={holidayToEdit}
      />
    </div>
  );
}

export default function HolidaysViewEnhanced({ onNavigationChange }: { onNavigationChange?: (view: string) => void }) {
  const [currentView, setCurrentView] = useState<'calendar' | 'list'>('calendar');

  return (
    <div className="h-full">
      <Main currentView={currentView} onViewChange={setCurrentView} />
    </div>
  );
}
