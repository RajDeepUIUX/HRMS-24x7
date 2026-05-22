import React, { useState, useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-h57sxby476";

interface AddHolidayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (holiday: {
    name: string;
    date: string;
    type: string;
    description: string;
    recurring?: boolean;
  }) => void;
  prefilledDate?: string;
}

function IconsIconsCancel({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="block cursor-pointer relative shrink-0 size-[24px]" 
      data-name="Icons/Icons/Cancel"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons/Icons/Cancel">
          <path d={svgPaths.p2f400} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Frame1000002499({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[20px]">Add Holiday</p>
      <IconsIconsCancel onClick={onClose} />
    </div>
  );
}

function CalendarBlank({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative shrink-0 size-[20px] cursor-pointer hover:bg-gray-100 rounded transition-colors p-[4px]" 
      data-name="CalendarBlank"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CalendarBlank">
          <path d={svgPaths.p2dec1100} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="CaretDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="CaretDown">
          <path d={svgPaths.p2b0a9a80} fill="var(--fill-0, #98A2B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

// Simple Calendar Dropdown Component
function CalendarDropdown({ 
  isOpen, 
  onClose, 
  onDateSelect, 
  selectedDate 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onDateSelect: (date: string) => void;
  selectedDate: string;
}) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    if (selectedDate) {
      return new Date(selectedDate);
    }
    return new Date();
  });

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  
  // Get days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  // Get previous month info for leading days
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
  
  // Create calendar grid
  const calendarDays = [];
  
  // Previous month's trailing days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
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
  
  // Next month's leading days to fill 42 cells (6 rows x 7 columns)
  const remainingCells = 42 - calendarDays.length;
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

  const handleDateClick = (date: Date) => {
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    onDateSelect(formattedDate);
    onClose();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const isSelectedDate = (date: Date) => {
    if (!selectedDate) return false;
    const selected = new Date(selectedDate);
    return date.toDateString() === selected.toDateString();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-[#d0d5dd] rounded-[6px] shadow-lg z-20 mt-1 p-4">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h3 className="font-semibold text-[#1d2939]">
          {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h3>
        
        <button
          type="button"
          onClick={handleNextMonth}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-[12px] font-medium text-[#98a2b3] py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((dayInfo, index) => {
          const isSelected = isSelectedDate(dayInfo.date);
          const isTodayDate = isToday(dayInfo.date);
          
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleDateClick(dayInfo.date)}
              className={`
                p-2 text-center rounded text-[14px] transition-colors
                ${dayInfo.isCurrentMonth ? 'text-[#344054]' : 'text-[#98a2b3]'}
                ${isSelected ? 'bg-[#3a58ef] text-white font-semibold' : 'hover:bg-[#f2f4f7]'}
                ${isTodayDate && !isSelected ? 'border border-[#3a58ef]' : ''}
              `}
            >
              {dayInfo.day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function AddHolidayModal({ isOpen, onClose, onAdd, prefilledDate }: AddHolidayModalProps) {
  const [name, setName] = useState('');
  const [date, setDate] = useState(prefilledDate || '');
  const [type, setType] = useState('Public');
  const [description, setDescription] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const typeDropdownRef = useRef<HTMLDivElement>(null);

  // Update date when prefilledDate changes
  useEffect(() => {
    if (prefilledDate) {
      setDate(prefilledDate);
    }
  }, [prefilledDate]);

  // Handle clicks outside dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
      if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target as Node)) {
        setIsTypeDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && date && type && description) {
      onAdd({ name, date, type, description, recurring });
      // Reset form
      setName('');
      setDate('');
      setType('Public');
      setDescription('');
      setRecurring(false);
      onClose();
    }
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  };

  const typeOptions = ['Public', 'Regional', 'Company Specific'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        ref={modalRef}
        className="bg-white rounded-[12px] w-[600px] max-h-[90vh] overflow-y-auto shadow-xl"
      >
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <div className="box-border content-stretch flex gap-[24px] items-start px-[24px] py-[20px] relative shrink-0 w-full border-b border-[#eaecf0]">
            <Frame1000002499 onClose={onClose} />
          </div>

          {/* Content */}
          <div className="box-border content-stretch flex flex-col gap-[20px] items-start px-[24px] py-[24px] relative shrink-0 w-full">
            {/* Name Input */}
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#344054] text-[14px] text-left">
                Name *
              </p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter holiday name"
                required
                className="box-border content-stretch bg-white border-[#d0d5dd] border border-solid flex gap-[8px] h-[44px] items-center px-[14px] py-[10px] relative shrink-0 w-full rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-[16px] text-[#101828] placeholder:text-[#98a2b3] outline-none focus:border-[#3a58ef] focus:ring-1 focus:ring-[#3a58ef]"
              />
            </div>

            {/* Date Input with Calendar */}
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#344054] text-[14px] text-left">
                Date *
              </p>
              <div className="relative w-full" ref={calendarRef}>
                <div className="box-border content-stretch bg-white border-[#d0d5dd] border border-solid flex gap-[8px] h-[44px] items-center px-[14px] py-[10px] relative shrink-0 w-full rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                  <input
                    type="text"
                    value={formatDisplayDate(date)}
                    readOnly
                    placeholder="Select date"
                    required
                    className="basis-0 grow min-h-px min-w-px text-[16px] text-[#101828] placeholder:text-[#98a2b3] outline-none bg-transparent cursor-pointer"
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  />
                  <CalendarBlank onClick={() => setIsCalendarOpen(!isCalendarOpen)} />
                </div>
                <CalendarDropdown 
                  isOpen={isCalendarOpen} 
                  onClose={() => setIsCalendarOpen(false)} 
                  onDateSelect={(selectedDate) => {
                    setDate(selectedDate);
                    setIsCalendarOpen(false);
                  }}
                  selectedDate={date}
                />
              </div>
            </div>

            {/* Type Dropdown */}
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#344054] text-[14px] text-left">
                Type *
              </p>
              <div className="relative w-full" ref={typeDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                  className="box-border content-stretch bg-white border-[#d0d5dd] border border-solid flex gap-[8px] h-[44px] items-center justify-between px-[14px] py-[10px] relative shrink-0 w-full rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-left outline-none focus:border-[#3a58ef] focus:ring-1 focus:ring-[#3a58ef]"
                >
                  <span className="text-[16px] text-[#101828]">{type}</span>
                  <CaretDown />
                </button>
                {isTypeDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-[#d0d5dd] rounded-[6px] shadow-lg z-10 mt-1 max-h-[200px] overflow-y-auto">
                    {typeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setType(option);
                          setIsTypeDropdownOpen(false);
                        }}
                        className="w-full px-[14px] py-[10px] text-left hover:bg-[#f2f4f7] text-[14px] text-[#344054] transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Description Input */}
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#344054] text-[14px] text-left">
                Description *
              </p>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                required
                rows={4}
                className="box-border content-stretch bg-white border-[#d0d5dd] border border-solid flex gap-[8px] items-start px-[14px] py-[10px] relative shrink-0 w-full rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] text-[16px] text-[#101828] placeholder:text-[#98a2b3] outline-none focus:border-[#3a58ef] focus:ring-1 focus:ring-[#3a58ef] resize-none"
              />
            </div>

            {/* Recurring Checkbox */}
            <div className="content-stretch flex items-center gap-[8px] relative shrink-0 w-full">
              <input
                type="checkbox"
                id="recurring"
                checked={recurring}
                onChange={(e) => setRecurring(e.target.checked)}
                className="w-[16px] h-[16px] rounded border-[#d0d5dd] text-[#3a58ef] focus:ring-[#3a58ef] cursor-pointer"
              />
              <label 
                htmlFor="recurring" 
                className="font-['Inter:Regular',_sans-serif] leading-[20px] text-[#344054] text-[14px] cursor-pointer select-none"
              >
                Recurring (Apply to all upcoming years)
              </label>
            </div>
          </div>

          {/* Footer */}
          <div className="box-border content-stretch flex gap-[12px] items-start justify-end px-[24px] py-[20px] relative shrink-0 w-full border-t border-[#eaecf0]">
            <button
              type="button"
              onClick={onClose}
              className="box-border content-stretch bg-white border-[#d0d5dd] border border-solid flex gap-[8px] h-[44px] items-center justify-center px-[18px] py-[10px] relative shrink-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] cursor-pointer hover:bg-[#f9fafb] transition-colors"
            >
              <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#344054] text-[16px]">
                Cancel
              </p>
            </button>
            <button
              type="submit"
              className="box-border content-stretch bg-[#3a58ef] border-[#3a58ef] border border-solid flex gap-[8px] h-[44px] items-center justify-center px-[18px] py-[10px] relative shrink-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] cursor-pointer hover:bg-[#2d47d4] transition-colors"
            >
              <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-white text-[16px]">
                Add Holiday
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
