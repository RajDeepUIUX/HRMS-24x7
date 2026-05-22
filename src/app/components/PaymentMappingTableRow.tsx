import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Trash2, CheckCircle2 } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface StaffMember {
  id: string;
  name: string;
  date: string;
  role: string;
}

interface PaymentMethod {
  id: string;
  type: 'bank' | 'card' | 'direct-pay';
  label: string;
}

interface DraftMapping {
  id: string;
  selectedStaff: string[];
  paymentMethodId: string;
  showStaffSearch: boolean;
  staffSearchTerm: string;
  isDefault?: boolean;
}

interface PaymentMappingTableRowProps {
  draft: DraftMapping;
  allStaff: StaffMember[];
  availableStaff: StaffMember[];
  filteredStaff: StaffMember[];
  availablePaymentMethods: PaymentMethod[];
  dropdownRef: React.RefObject<HTMLDivElement>;
  onToggleDropdown: () => void;
  onSearchChange: (value: string) => void;
  onToggleStaff: (staffId: string) => void;
  onSelectAllStaff: () => void;
  onRemoveStaff: (staffId: string) => void;
  onPaymentMethodChange: (methodId: string) => void;
  onRemoveRow: () => void;
  disabled?: boolean;
  totalRows: number;
}

export function PaymentMappingTableRow({
  draft,
  allStaff,
  availableStaff,
  filteredStaff,
  availablePaymentMethods,
  dropdownRef,
  onToggleDropdown,
  onSearchChange,
  onToggleStaff,
  onSelectAllStaff,
  onRemoveStaff,
  onPaymentMethodChange,
  onRemoveRow,
  disabled = false,
  totalRows,
}: PaymentMappingTableRowProps) {
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number; width: number } | null>(null);
  const internalRef = useRef<HTMLDivElement>(null);

  // Calculate dropdown position when it opens
  useEffect(() => {
    if (draft.showStaffSearch && internalRef.current) {
      const rect = internalRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 4, // 4px gap (mt-1)
        left: rect.left,
        width: rect.width,
      });
    } else {
      setDropdownPosition(null);
    }
  }, [draft.showStaffSearch]);

  // Combined ref handler
  const setRefs = (el: HTMLDivElement | null) => {
    internalRef.current = el;
    if (typeof dropdownRef === 'function') {
      dropdownRef(el);
    }
  };

  return (
    <tr className="border-b border-[#eaecf0] hover:bg-[#f9fafb] transition-colors">
      {/* Select Timesheets Column */}
      <td className="p-4">
        <div className="relative" ref={setRefs}>
          <div 
            className="min-h-[44px] border border-[#d0d5dd] rounded-lg px-3 py-2 flex flex-wrap items-center gap-2 cursor-pointer"
            onClick={onToggleDropdown}
          >
            {draft.selectedStaff.length === 0 ? (
              <span className="text-[#98a2b3] text-[14px]">Select Timesheets</span>
            ) : (
              draft.selectedStaff.map(staffId => {
                const staff = allStaff.find(s => s.id === staffId);
                return (
                  <div key={staffId} className="bg-[#eff4ff] text-[#3a58ef] px-2 py-1 rounded-md text-[13px] font-medium flex items-center gap-1">
                    {staff?.name.toUpperCase()}
                    <X 
                      className="h-3 w-3 cursor-pointer" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveStaff(staffId);
                      }}
                    />
                  </div>
                );
              })
            )}
          </div>
          
          {draft.showStaffSearch && dropdownPosition && createPortal(
            <div 
              className="staff-dropdown-portal fixed z-[9999] bg-white border border-[#d0d5dd] rounded-lg shadow-lg overflow-hidden"
              style={{
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`,
                width: `${dropdownPosition.width}px`,
              }}
            >
              <div className="p-2 border-b border-[#eaecf0]">
                <Input
                  placeholder="Search by name..."
                  value={draft.staffSearchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="h-9"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="max-h-[240px] overflow-y-auto p-1 scrollbar-hide">
                {filteredStaff.length > 0 ? (
                  <>
                    {/* Select All Option */}
                    <div
                      className="px-3 py-2.5 cursor-pointer rounded flex items-center justify-between gap-3 bg-[#eff8ff] hover:bg-[#e0f2fe] border-b border-[#b2ddff] mb-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectAllStaff();
                      }}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-[#101828] text-[14px] font-semibold">Select All</p>
                        <p className="text-[#667085] text-[12px]">{filteredStaff.length} timesheet{filteredStaff.length !== 1 ? 's' : ''} available</p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          filteredStaff.every(s => draft.selectedStaff.includes(s.id))
                            ? 'bg-[#3a58ef] border-[#3a58ef]' 
                            : 'border-[#d0d5dd] bg-white'
                        }`}>
                          {filteredStaff.every(s => draft.selectedStaff.includes(s.id)) && (
                            <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Individual Staff Members */}
                    {filteredStaff.map((staff) => {
                      const isSelected = draft.selectedStaff.includes(staff.id);
                      return (
                        <div
                          key={staff.id}
                          className={`px-3 py-2.5 cursor-pointer rounded flex items-center justify-between gap-3 ${
                            isSelected ? 'bg-[#f9fafb]' : 'hover:bg-[#f9fafb]'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleStaff(staff.id);
                          }}
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-[#101828] text-[14px] font-medium">{staff.name}</p>
                            <p className="text-[#667085] text-[12px]">{staff.date} • {staff.role}</p>
                          </div>
                          <div className="flex-shrink-0">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              isSelected 
                                ? 'bg-[#3a58ef] border-[#3a58ef]' 
                                : 'border-[#d0d5dd] bg-white'
                            }`}>
                              {isSelected && (
                                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <div className="px-3 py-4 text-center text-[#667085] text-[13px]">
                    {availableStaff.length === 0 
                      ? 'All staff members have been assigned' 
                      : 'No staff members found'}
                  </div>
                )}
              </div>
            </div>,
            document.body
          )}
        </div>
      </td>

      {/* Mapped Payment Method Column */}
      <td className="p-4">
        <Select 
          value={draft.paymentMethodId} 
          onValueChange={onPaymentMethodChange}
          disabled={disabled}
        >
          <SelectTrigger className="h-11">
            <SelectValue placeholder="Please Select" />
          </SelectTrigger>
          <SelectContent>
            {availablePaymentMethods.length > 0 ? (
              availablePaymentMethods.map((method) => (
                <SelectItem key={method.id} value={method.id}>
                  {method.type === 'card' ? `💳 ${method.label}` : 
                   method.type === 'direct-pay' ? `⚡ ${method.label}` :
                   `🏦 ${method.label}`}
                </SelectItem>
              ))
            ) : (
              <div className="px-3 py-2 text-center text-[#667085] text-[13px]">
                No payment methods available
              </div>
            )}
          </SelectContent>
        </Select>
      </td>

      {/* Action Column */}
      <td className="p-4 text-center">
        {totalRows > 1 ? (
          <button
            onClick={onRemoveRow}
            disabled={disabled || totalRows <= 1}
            className="text-[#98a2b3] hover:text-[#f04438] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Remove row"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        ) : (
          <span className="text-[#d0d5dd]">-</span>
        )}
      </td>
    </tr>
  );
}