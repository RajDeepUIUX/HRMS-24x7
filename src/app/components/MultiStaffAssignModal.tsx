import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import svgPaths from "../imports/svg-hk53zzi1vc";

interface Staff {
  id: string;
  name: string;
  designation: string;
  engagementType: string;
  avatar: string;
}

interface MultiStaffAssignModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (selectedStaffIds: string[]) => void;
  currentStaffId: string;
  taskName: string;
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

function SearchButton({ searchTerm, onSearchChange }: { searchTerm: string; onSearchChange: (value: string) => void }) {
  return (
    <div className="bg-[#f2f4f7] relative rounded-[4px] shrink-0 w-[298px]" data-name="Button">
      <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative w-[298px] pt-[10px] pr-[30px] pb-[10px] pl-[16px]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search here"
          className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] bg-transparent border-none outline-none w-full"
        />
        <MagnifyingGlass />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function MinusIcon() {
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

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon/12/Checkbox Selected">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon/12/Checkbox Selected">
          <path d="M1.25 5L3.75 7.5L8.75 2.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

export default function MultiStaffAssignModal({ isOpen, onClose, onSubmit, currentStaffId, taskName }: MultiStaffAssignModalProps) {
  const [selectedStaffIds, setSelectedStaffIds] = useState<string[]>([currentStaffId]);
  const [searchTerm, setSearchTerm] = useState('');

  const allStaff: Staff[] = [
    { id: "deepa-varma", name: "Deepa Varma", designation: "Senior Accountant", engagementType: "Regular Staffing", avatar: "DV" },
    { id: "rekha-singhal", name: "Rekha Singhal", designation: "Financial Analyst", engagementType: "Regular Staffing", avatar: "RS" },
    { id: "amrit-dutta", name: "Amrit Dutta", designation: "Tax Specialist", engagementType: "Regular Staffing", avatar: "AD" },
    { id: "kasturba-kamdar", name: "Kasturba Kamdar", designation: "Audit Manager", engagementType: "Temporary Staffing", avatar: "KK" },
    { id: "krishna-chauhan", name: "Krishna Chauhan", designation: "Accountant", engagementType: "Regular Staffing", avatar: "KC" },
    { id: "madan-kumar", name: "Madan Kumar", designation: "Accountant", engagementType: "Regular Staffing", avatar: "MK" },
    { id: "sonali-sharma", name: "Sonali Sharma", designation: "Accountant", engagementType: "Regular Staffing", avatar: "SS" },
  ];

  const filteredStaff = allStaff.filter(staff => 
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset selection when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedStaffIds([currentStaffId]);
      setSearchTerm('');
    }
  }, [isOpen, currentStaffId]);

  const handleStaffToggle = (staffId: string) => {
    setSelectedStaffIds(prev => 
      prev.includes(staffId) 
        ? prev.filter(id => id !== staffId)
        : [...prev, staffId]
    );
  };

  const handleSelectAll = () => {
    if (selectedStaffIds.length === filteredStaff.length) {
      setSelectedStaffIds([]);
    } else {
      setSelectedStaffIds(filteredStaff.map(staff => staff.id));
    }
  };

  const isAllSelected = selectedStaffIds.length === filteredStaff.length && filteredStaff.length > 0;
  const isPartiallySelected = selectedStaffIds.length > 0 && selectedStaffIds.length < filteredStaff.length;

  const handleSubmit = () => {
    if (selectedStaffIds.length > 0) {
      onSubmit(selectedStaffIds);
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full max-w-4xl max-h-[90vh] overflow-hidden mx-auto" data-name="Assign Task">
          <div className="flex flex-col items-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-[16px] items-center relative size-full p-[16px] mr-[55px]mr-[24px] m-[0px]">
              
              {/* Header */}
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[20px]">
                  Assign "{taskName}" To:
                </p>
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
                  <SearchButton searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                </div>
              </div>

              {/* Table */}
              <div className="relative rounded-[8px] shrink-0 w-full flex-1 min-h-0 overflow-hidden">
                <div className="content-stretch flex items-start justify-between overflow-clip relative w-full h-full">
                  
                  {/* Checkbox Column */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    {/* Header */}
                    <div className="bg-[#ebeefd] box-border content-stretch flex gap-[12px] h-[42px] items-center px-[16px] py-[12px] relative shrink-0">
                      <div aria-hidden="true" className="absolute border-[#ebeefd] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                      <div className="content-stretch flex items-start relative shrink-0">
                        <div className="content-stretch flex gap-[6.667px] items-center justify-center relative shrink-0 size-[20px]">
                          <div 
                            className={`relative rounded-[3.333px] shrink-0 size-[18.333px] cursor-pointer ${
                              isAllSelected ? 'bg-[#d8defc]' : isPartiallySelected ? 'bg-[#d8defc]' : 'bg-[#f2f4f7]'
                            }`}
                            onClick={handleSelectAll}
                          >
                            <div className="box-border content-stretch flex gap-[8.333px] items-center justify-center overflow-clip p-[1.667px] relative size-[18.333px]">
                              {isAllSelected ? <MinusIcon /> : isPartiallySelected ? <MinusIcon /> : null}
                            </div>
                            <div aria-hidden="true" className={`absolute border-[0.833px] border-solid inset-0 pointer-events-none rounded-[3.333px] ${
                              isAllSelected || isPartiallySelected ? 'border-[#3a58ef]' : 'border-[#98a2b3]'
                            }`} />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rows */}
                    <div className="flex-1 overflow-y-auto w-full scrollbar-hide">
                      {filteredStaff.map((staff) => {
                        const isSelected = selectedStaffIds.includes(staff.id);
                        return (
                          <div key={staff.id} className="box-border content-stretch flex gap-[12px] h-[50px] items-center px-[16px] py-[12px] relative shrink-0">
                            <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                            <div className="content-stretch flex items-start relative shrink-0">
                              <div className="content-stretch flex gap-[6.667px] items-center justify-center relative shrink-0 size-[20px]">
                                <div 
                                  className={`relative rounded-[3.333px] shrink-0 size-[18.333px] cursor-pointer ${
                                    isSelected ? 'bg-[#3a58ef]' : 'bg-white'
                                  }`}
                                  onClick={() => handleStaffToggle(staff.id)}
                                >
                                  <div className="box-border content-stretch flex gap-[8.333px] items-center justify-center overflow-clip p-[1.667px] relative size-[18.333px]">
                                    {isSelected && <CheckIcon />}
                                  </div>
                                  <div aria-hidden="true" className={`absolute border-[0.833px] border-solid inset-0 pointer-events-none rounded-[3.333px] ${
                                    isSelected ? 'border-[#3a58ef]' : 'border-[#98a2b3]'
                                  }`} />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Staff Name Column */}
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    {/* Header */}
                    <div className="bg-[#ebeefd] h-[42px] shrink-0 sticky top-0 w-full">
                      <div className="flex flex-row items-center relative size-full">
                        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Staff Name</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Rows */}
                    <div className="flex-1 overflow-y-auto w-full scrollbar-hide">
                      {filteredStaff.map((staff) => (
                        <div key={staff.id} className="h-[50px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[8px] py-[12px] relative w-full">
                              <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[6px] relative rounded-[16px] shrink-0 size-[32px]">
                                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] text-center text-nowrap whitespace-pre">{staff.avatar}</p>
                              </div>
                              <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
                                <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">{staff.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Designation Column */}
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
                      <div className="flex flex-row items-center relative size-full">
                        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Designation</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto w-full scrollbar-hide">
                      {filteredStaff.map((staff) => (
                        <div key={staff.id} className="h-[50px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                              <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{staff.designation}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engagement Type Column */}
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <div className="bg-[#ebeefd] h-[42px] relative shrink-0 w-full">
                      <div className="flex flex-row items-center relative size-full">
                        <div className="box-border content-stretch flex gap-[4px] h-[42px] items-center px-[16px] py-[8px] relative w-full">
                          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px]">Engagement Type</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto w-full">
                      {filteredStaff.map((staff) => (
                        <div key={staff.id} className="h-[50px] relative shrink-0 w-full">
                          <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex gap-[10px] h-[50px] items-center px-[16px] py-[12px] relative w-full">
                              <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#344054] text-[14px] text-nowrap">{staff.engagementType}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
              </div>

              {/* Footer */}
              <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
                <p className="basis-0 font-['Inter:Medium',_sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[14px] text-right">
                  {selectedStaffIds.length} Staff selected
                </p>
                <button
                  onClick={handleSubmit}
                  disabled={selectedStaffIds.length === 0}
                  className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2c47d6] transition-colors"
                >
                  <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Submit</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}