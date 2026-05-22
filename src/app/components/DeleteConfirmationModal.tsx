import React from 'react';
import svgPaths from "../imports/svg-7n26vovbq1";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  holidayName: string;
}

function Trash() {
  return (
    <div className="block cursor-pointer relative shrink-0 size-[50px]" data-name="Trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Trash">
          <path d={svgPaths.p5c9d900} fill="var(--fill-0, #B42318)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p3418df00} fill="var(--fill-0, #B42318)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2095585810() {
  return (
    <div className="bg-gray-50 content-stretch flex gap-[10px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[100px]">
      <Trash />
    </div>
  );
}

function Frame2095585615({ holidayName }: { holidayName: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame2095585810 />
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[30px] min-w-full not-italic relative shrink-0 text-[#1d2939] text-[20px] text-center" style={{ width: "min-content" }}>
        Delete Holiday
      </p>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#475467] text-[16px] text-center max-w-[400px]">
          Are you sure you want to delete <span className="font-semibold text-[#1d2939]">"{holidayName}"</span>? Deleting it will remove it from the calendar, but you can add it back at any time. Please confirm your action.
        </p>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="h-[36px] relative rounded-[4px] shrink-0 hover:bg-red-50 transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center overflow-clip px-[14px] py-[8px] relative">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#b42318] text-[14px] text-nowrap whitespace-pre">Cancel</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#b42318] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </button>
  );
}

function Button1({ onClick, isDeleting }: { onClick: () => void; isDeleting: boolean }) {
  return (
    <button 
      className={`box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 transition-colors ${
        isDeleting ? 'bg-red-700 cursor-not-allowed' : 'bg-[#b42318] hover:bg-red-700'
      }`} 
      data-name="Button"
      onClick={onClick}
      disabled={isDeleting}
    >
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
        {isDeleting ? 'Deleting...' : 'Delete'}
      </p>
    </button>
  );
}

function Frame2095585302({ onCancel, onConfirm, isDeleting }: { 
  onCancel: () => void; 
  onConfirm: () => void; 
  isDeleting: boolean;
}) {
  return (
    <div className="content-stretch cursor-pointer flex gap-[6px] items-center relative shrink-0">
      <Button onClick={onCancel} />
      <Button1 onClick={onConfirm} isDeleting={isDeleting} />
    </div>
  );
}

function Frame2095585186({ onCancel, onConfirm, isDeleting }: { 
  onCancel: () => void; 
  onConfirm: () => void; 
  isDeleting: boolean;
}) {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-full">
      <Frame2095585302 onCancel={onCancel} onConfirm={onConfirm} isDeleting={isDeleting} />
    </div>
  );
}

export default function DeleteConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  holidayName 
}: DeleteConfirmationModalProps) {
  const [isDeleting, setIsDeleting] = React.useState(false);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setIsDeleting(true);
    try {
      await onConfirm();
      onClose();
    } catch (error) {
      console.error('Error deleting holiday:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancel = () => {
    if (!isDeleting) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white relative rounded-[6px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-[500px]" data-name="Delete Confirmation - Popup">
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[24px] relative size-full">
            <Frame2095585615 holidayName={holidayName} />
            <Frame2095585186 
              onCancel={handleCancel} 
              onConfirm={handleConfirm} 
              isDeleting={isDeleting}
            />
          </div>
        </div>
      </div>
    </div>
  );
}