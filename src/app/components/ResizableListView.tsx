import React, { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import EditHolidayModal from './EditHolidayModalEnhanced';

interface Holiday {
  name: string;
  date: string;
  displayDate: string;
  type: string;
  description: string;
  recurring?: boolean;
}

interface ResizableListViewProps {
  holidays: Holiday[];
  onDeleteHoliday?: (holidayIndex: number) => void;
  onEditHoliday?: (holidayIndex: number, updatedHoliday: Omit<Holiday, 'displayDate'>) => void;
}

type SortDirection = 'asc' | 'desc' | null;
type SortColumn = 'name' | 'date' | 'type' | 'description' | null;

function PencilSimpleLine({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="relative shrink-0 size-[20px] hover:bg-blue-50 rounded transition-colors cursor-pointer p-[0px]" 
      data-name="PencilSimpleLine"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="PencilSimpleLine">
          <path d="M17.7594 5.73203L14.268 2.24141C14.1519 2.1253 14.0141 2.0332 13.8624 1.97037C13.7107 1.90753 13.5482 1.87519 13.384 1.87519C13.2198 1.87519 13.0572 1.90753 12.9056 1.97037C12.7539 2.0332 12.6161 2.1253 12.5 2.24141L2.86641 11.875C2.74983 11.9907 2.6574 12.1283 2.5945 12.28C2.5316 12.4317 2.49948 12.5944 2.5 12.7586V16.25C2.5 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41848 17.5 3.75 17.5H16.875C17.0408 17.5 17.1997 17.4342 17.3169 17.3169C17.4342 17.1997 17.5 17.0408 17.5 16.875C17.5 16.7092 17.4342 16.5503 17.3169 16.4331C17.1997 16.3158 17.0408 16.25 16.875 16.25H9.00937L17.7594 7.5C17.8755 7.38392 17.9676 7.24611 18.0304 7.09444C18.0932 6.94276 18.1256 6.78019 18.1256 6.61602C18.1256 6.45184 18.0932 6.28927 18.0304 6.1376C17.9676 5.98592 17.8755 5.84811 17.7594 5.73203ZM7.24141 16.25H3.75V12.7586L10.625 5.88359L14.1164 9.375L7.24141 16.25ZM15 8.49141L11.5094 5L13.3844 3.125L16.875 6.61641L15 8.49141Z" fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Trash({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="relative shrink-0 size-[20px] hover:bg-red-50 rounded transition-colors cursor-pointer text-[16px] p-[0px] text-[rgba(0,0,0,1)]" 
      data-name="Trash"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Trash">
          <path d="M16.875 3.75H13.75V3.125C13.75 2.62772 13.5525 2.15081 13.2008 1.79917C12.8492 1.44754 12.3723 1.25 11.875 1.25H8.125C7.62772 1.25 7.15081 1.44754 6.79917 1.79917C6.44754 2.15081 6.25 2.62772 6.25 3.125V3.75H3.125C2.95924 3.75 2.80027 3.81585 2.68306 3.93306C2.56585 4.05027 2.5 4.20924 2.5 4.375C2.5 4.54076 2.56585 4.69973 2.68306 4.81694C2.80027 4.93415 2.95924 5 3.125 5H3.75V16.25C3.75 16.5815 3.8817 16.8995 4.11612 17.1339C4.35054 17.3683 4.66848 17.5 5 17.5H15C15.3315 17.5 15.6495 17.3683 15.8839 17.1339C16.1183 16.8995 16.25 16.5815 16.25 16.25V5H16.875C17.0408 5 17.1997 4.93415 17.3169 4.81694C17.4342 4.69973 17.5 4.54076 17.5 4.375C17.5 4.20924 17.4342 4.05027 17.3169 3.93306C17.1997 3.81585 17.0408 3.75 16.875 3.75ZM7.5 3.125C7.5 2.95924 7.56585 2.80027 7.68306 2.68306C7.80027 2.56585 7.95924 2.5 8.125 2.5H11.875C12.0408 2.5 12.1997 2.56585 12.3169 2.68306C12.4342 2.80027 12.5 2.95924 12.5 3.125V3.75H7.5V3.125ZM15 16.25H5V5H15V16.25ZM8.75 8.125V13.125C8.75 13.2908 8.68415 13.4497 8.56694 13.5669C8.44973 13.6842 8.29076 13.75 8.125 13.75C7.95924 13.75 7.80027 13.6842 7.68306 13.5669C7.56585 13.4497 7.5 13.2908 7.5 13.125V8.125C7.5 7.95924 7.56585 7.80027 7.68306 7.68306C7.80027 7.56585 7.95924 7.5 8.125 7.5C8.29076 7.5 8.44973 7.56585 8.56694 7.68306C8.68415 7.80027 8.75 7.95924 8.75 8.125ZM12.5 8.125V13.125C12.5 13.2908 12.4342 13.4497 12.3169 13.5669C12.1997 13.6842 12.0408 13.75 11.875 13.75C11.7092 13.75 11.5503 13.6842 11.4331 13.5669C11.3158 13.4497 11.25 13.2908 11.25 13.125V8.125C11.25 7.95924 11.3158 7.80027 11.4331 7.68306C11.5503 7.56585 11.7092 7.5 11.875 7.5C12.0408 7.5 12.1997 7.56585 12.3169 7.68306C12.4342 7.80027 12.5 7.95924 12.5 8.125Z" fill="var(--fill-0, #5D667B)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

interface ResizeHandleProps {
  onMouseDown: (e: React.MouseEvent) => void;
}

function ResizeHandle({ onMouseDown }: ResizeHandleProps) {
  return (
    <div
      className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize bg-transparent hover:bg-blue-300 transition-colors group"
      onMouseDown={onMouseDown}
    >
      <div className="absolute top-0 right-[-2px] bottom-0 w-[4px] bg-transparent group-hover:bg-blue-400"></div>
    </div>
  );
}

function SortIcon({ direction }: { direction: SortDirection }) {
  if (direction === 'asc') {
    return (
      <svg className="w-3 h-3 text-[#3a58ef]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
    );
  } else if (direction === 'desc') {
    return (
      <svg className="w-3 h-3 text-[#3a58ef]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
  } else {
    return (
      <svg className="w-3 h-3 text-[#9ca3af] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
  }
}

export default function ResizableListView({ holidays, onDeleteHoliday, onEditHoliday }: ResizableListViewProps) {
  // Column widths as percentages of available space (excluding action column)
  const [columnWidths, setColumnWidths] = useState({
    name: 35,    // 35%
    date: 15,    // 15%
    type: 15,    // 15%
    description: 35 // 35%
  });

  const actionColumnWidth = 120; // Fixed width in pixels
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState<string | null>(null);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartWidth, setDragStartWidth] = useState(0);
  
  // Sorting state
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  
  // Delete modal state
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [holidayToDelete, setHolidayToDelete] = useState<{ index: number; holiday: Holiday } | null>(null);
  
  // Edit modal state
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [holidayToEdit, setHolidayToEdit] = useState<{ index: number; holiday: Holiday } | null>(null);

  const handleMouseDown = useCallback((column: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(column);
    setDragStartX(e.clientX);
    setDragStartWidth(columnWidths[column as keyof typeof columnWidths]);
  }, [columnWidths]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isResizing || !containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.offsetWidth - actionColumnWidth; // Available width for resizable columns
    const deltaX = e.clientX - dragStartX;
    const deltaPercentage = (deltaX / containerWidth) * 100;
    
    const newWidth = Math.max(10, Math.min(60, dragStartWidth + deltaPercentage)); // Min 10%, Max 60%
    const widthChange = newWidth - columnWidths[isResizing as keyof typeof columnWidths];
    
    // Adjust other columns proportionally
    const otherColumns = Object.keys(columnWidths).filter(col => col !== isResizing);
    const totalOtherWidth = otherColumns.reduce((sum, col) => sum + columnWidths[col as keyof typeof columnWidths], 0);
    
    if (totalOtherWidth > 0) {
      const adjustmentRatio = (100 - newWidth) / totalOtherWidth;
      
      setColumnWidths(prev => {
        const newWidths = { ...prev };
        newWidths[isResizing as keyof typeof columnWidths] = newWidth;
        
        otherColumns.forEach(col => {
          newWidths[col as keyof typeof columnWidths] = prev[col as keyof typeof columnWidths] * adjustmentRatio;
        });
        
        return newWidths;
      });
    }
  }, [isResizing, dragStartX, dragStartWidth, columnWidths, actionColumnWidth]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(null);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

  // Sorting function
  const handleSort = useCallback((column: SortColumn) => {
    if (sortColumn === column) {
      // If clicking the same column, cycle through: asc -> desc -> null
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortColumn(null);
        setSortDirection(null);
      } else {
        setSortDirection('asc');
      }
    } else {
      // If clicking a new column, start with asc
      setSortColumn(column);
      setSortDirection('asc');
    }
  }, [sortColumn, sortDirection]);

  // Sorted holidays
  const sortedHolidays = useMemo(() => {
    if (!sortColumn || !sortDirection) {
      return holidays;
    }

    return [...holidays].sort((a, b) => {
      let aValue: string | Date;
      let bValue: string | Date;

      switch (sortColumn) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case 'type':
          aValue = a.type.toLowerCase();
          bValue = b.type.toLowerCase();
          break;
        case 'description':
          aValue = a.description.toLowerCase();
          bValue = b.description.toLowerCase();
          break;
        default:
          return 0;
      }

      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [holidays, sortColumn, sortDirection]);

  // Delete handlers
  const handleDeleteClick = useCallback((index: number, holiday: Holiday) => {
    setHolidayToDelete({ index, holiday });
    setDeleteModalOpen(true);
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    if (holidayToDelete && onDeleteHoliday) {
      // Find the original index in the unsorted array
      const originalIndex = holidays.findIndex(h => 
        h.name === holidayToDelete.holiday.name && 
        h.date === holidayToDelete.holiday.date &&
        h.type === holidayToDelete.holiday.type
      );
      if (originalIndex !== -1) {
        onDeleteHoliday(originalIndex);
      }
    }
    setDeleteModalOpen(false);
    setHolidayToDelete(null);
  }, [holidayToDelete, onDeleteHoliday, holidays]);

  const handleDeleteCancel = useCallback(() => {
    setDeleteModalOpen(false);
    setHolidayToDelete(null);
  }, []);

  // Edit handlers
  const handleEditClick = useCallback((index: number, holiday: Holiday) => {
    setHolidayToEdit({ index, holiday });
    setEditModalOpen(true);
  }, []);

  const handleEditSave = useCallback((updatedHoliday: Omit<Holiday, 'displayDate'>) => {
    if (holidayToEdit && onEditHoliday) {
      // Find the original index in the unsorted array
      const originalIndex = holidays.findIndex(h => 
        h.name === holidayToEdit.holiday.name && 
        h.date === holidayToEdit.holiday.date &&
        h.type === holidayToEdit.holiday.type
      );
      if (originalIndex !== -1) {
        onEditHoliday(originalIndex, updatedHoliday);
      }
    }
    setEditModalOpen(false);
    setHolidayToEdit(null);
  }, [holidayToEdit, onEditHoliday, holidays]);

  const handleEditCancel = useCallback(() => {
    setEditModalOpen(false);
    setHolidayToEdit(null);
  }, []);

  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full z-[1]">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative size-full border border-[#f2f2f2] rounded-[8px]">
        <div 
          ref={containerRef}
          className="content-stretch flex items-start relative w-full overflow-x-auto"
        >
          
          {/* Name Column */}
          <div 
            className="content-stretch flex flex-col items-start relative border-r border-[#f2f2f2] bg-white"
            style={{ width: `${columnWidths.name}%` }}
          >
            <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
              <div className="flex flex-row items-center relative size-full">
                <button 
                  className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full hover:bg-[#dde4fc] transition-colors group cursor-pointer"
                  onClick={() => handleSort('name')}
                >
                  <p className="basis-0 font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px] text-left">Name</p>
                  <SortIcon direction={sortColumn === 'name' ? sortDirection : null} />
                </button>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {sortedHolidays.map((holiday, index) => (
                <div key={index} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <p 
                        className="basis-0 font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" 
                        title={holiday.name}
                      >
                        {holiday.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ResizeHandle onMouseDown={(e) => handleMouseDown('name', e)} />
          </div>

          {/* Date Column */}
          <div 
            className="content-stretch flex flex-col items-start relative border-r border-[#f2f2f2] bg-white"
            style={{ width: `${columnWidths.date}%` }}
          >
            <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
              <div className="flex flex-row items-center relative size-full">
                <button 
                  className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full hover:bg-[#dde4fc] transition-colors group cursor-pointer"
                  onClick={() => handleSort('date')}
                >
                  <p className="basis-0 font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px] text-left">Date</p>
                  <SortIcon direction={sortColumn === 'date' ? sortDirection : null} />
                </button>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {sortedHolidays.map((holiday, index) => (
                <div key={index} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <p className="basis-0 font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">{holiday.displayDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ResizeHandle onMouseDown={(e) => handleMouseDown('date', e)} />
          </div>

          {/* Type Column */}
          <div 
            className="content-stretch flex flex-col items-start relative border-r border-[#f2f2f2] bg-white"
            style={{ width: `${columnWidths.type}%` }}
          >
            <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
              <div className="flex flex-row items-center relative size-full">
                <button 
                  className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full hover:bg-[#dde4fc] transition-colors group cursor-pointer"
                  onClick={() => handleSort('type')}
                >
                  <p className="basis-0 font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px] text-left">Type</p>
                  <SortIcon direction={sortColumn === 'type' ? sortDirection : null} />
                </button>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {sortedHolidays.map((holiday, index) => (
                <div key={index} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <p className="basis-0 font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">{holiday.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ResizeHandle onMouseDown={(e) => handleMouseDown('type', e)} />
          </div>

          {/* Description Column */}
          <div 
            className="content-stretch flex flex-col items-start relative border-r border-[#f2f2f2] bg-white"
            style={{ width: `${columnWidths.description}%` }}
          >
            <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
              <div className="flex flex-row items-center relative size-full">
                <button 
                  className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full hover:bg-[#dde4fc] transition-colors group cursor-pointer"
                  onClick={() => handleSort('description')}
                >
                  <p className="basis-0 font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px] text-left">Description</p>
                  <SortIcon direction={sortColumn === 'description' ? sortDirection : null} />
                </button>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {sortedHolidays.map((holiday, index) => (
                <div key={index} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                      <p 
                        className="basis-0 font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" 
                        title={holiday.description}
                      >
                        {holiday.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ResizeHandle onMouseDown={(e) => handleMouseDown('description', e)} />
          </div>

          {/* Action Column - Fixed Width on Right */}
          <div 
            className="content-stretch flex flex-col items-start relative bg-white flex-shrink-0"
            style={{ width: `${actionColumnWidth}px` }}
          >
            <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                  <p className="basis-0 font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Action</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              {sortedHolidays.map((holiday, index) => (
                <div key={index} className="h-[50px] relative shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative w-full justify-start">
                      <PencilSimpleLine onClick={() => handleEditClick(index, holiday)} />
                      <Trash onClick={() => handleDeleteClick(index, holiday)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      <DeleteConfirmationModal
        isOpen={deleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        holidayName={holidayToDelete?.holiday.name || ''}
      />
      
      <EditHolidayModal
        isOpen={editModalOpen}
        onClose={handleEditCancel}
        onSave={handleEditSave}
        holiday={holidayToEdit?.holiday || null}
      />
    </div>
  );
}