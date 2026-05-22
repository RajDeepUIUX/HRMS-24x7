import React, { useState, useRef } from 'react';
import svgPaths from "../imports/svg-9n296oxqx0";

interface ImportHolidaysModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (holidays: any[]) => void;
}

function IconsIconsCancel({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="block cursor-pointer relative shrink-0 size-[24px] hover:bg-gray-100 rounded transition-colors" 
      data-name="Icons/Icons/Cancel"
      onClick={onClick}
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
      <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[20px]">Import Holidays</p>
      <IconsIconsCancel onClick={onClose} />
    </div>
  );
}

function Frame2095585485() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[12px] text-center">.csv</p>
    </div>
  );
}

function Frame2095585545() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame2095585485 />
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#1d2939] text-[14px]">Company_holiday_format.csv</p>
    </div>
  );
}

function DownloadSimple() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DownloadSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DownloadSimple">
          <path d={svgPaths.pfad330} fill="var(--fill-0, #314BD0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2095585601({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="bg-gray-50 relative rounded-[6px] shrink-0 w-full hover:bg-gray-100 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
          <Frame2095585545 />
          <DownloadSimple />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

function Frame2095585602({ onDownloadTemplate }: { onDownloadTemplate: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] text-nowrap whitespace-pre">Download the .csv template</p>
      <Frame2095585601 onClick={onDownloadTemplate} />
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g clipPath="url(#clip0_54_2391)" id="upload">
          <path d={svgPaths.p17907400} fill="var(--fill-0, #CED9F9)" id="Vector" />
          <path d={svgPaths.p35280000} fill="var(--fill-0, #1640C1)" id="Vector_2" />
          <path d={svgPaths.p14edb300} fill="var(--fill-0, #2354E6)" id="Vector_3" />
          <path d={svgPaths.p1517e480} fill="var(--fill-0, #1849D6)" id="Vector_4" />
          <path d={svgPaths.p236bcc80} fill="var(--fill-0, #E7ECFC)" id="Vector_5" />
          <path d={svgPaths.p2dec1a00} fill="var(--fill-0, #CED9F9)" id="Vector_6" />
          <path d={svgPaths.p237cd4c2} fill="var(--fill-0, #6C8DEF)" id="Vector_7" />
          <path d={svgPaths.p2410b500} fill="var(--fill-0, #3B67E9)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_54_2391">
            <rect fill="white" height="42" width="42" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text({ isDragOver }: { isDragOver: boolean }) {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="text">
      <p className={`font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${isDragOver ? 'text-[#3a58ef]' : 'text-[#5d667b]'}`}>
        {isDragOver ? 'Drop your file here' : 'Drag your file(s) to start uploading'}
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[201px]" data-name="Divider">
      <div className="basis-0 bg-[#e7e7e7] grow h-[0.971px] min-h-px min-w-px shrink-0" data-name="line 1" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#6d6d6d] text-[12px] text-center text-nowrap whitespace-pre">OR</p>
      <div className="basis-0 bg-[#e7e7e7] grow h-[0.971px] min-h-px min-w-px shrink-0" data-name="line 2" />
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 hover:bg-[#2c47d1] transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Choose File</p>
    </button>
  );
}

function Frame2({ isDragOver, onChooseFile }: { isDragOver: boolean; onChooseFile: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
      <Text isDragOver={isDragOver} />
      <Divider />
      <Button onClick={onChooseFile} />
    </div>
  );
}

function UploadDragUpload({ 
  isDragOver, 
  onDragOver, 
  onDragLeave, 
  onDrop, 
  onChooseFile,
  selectedFile 
}: { 
  isDragOver: boolean; 
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onChooseFile: () => void;
  selectedFile: File | null;
}) {
  return (
    <div 
      className={`bg-white relative rounded-[8px] shrink-0 w-full transition-all ${isDragOver ? 'border-[#3a58ef] bg-blue-50' : ''}`} 
      data-name="upload: drag upload"
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div aria-hidden="true" className={`absolute border ${isDragOver ? 'border-[#3a58ef]' : 'border-[#1849d6]'} border-dashed inset-0 pointer-events-none rounded-[8px]`} />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-center justify-center p-[24px] relative w-full">
          <Upload />
          {selectedFile ? (
            <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] text-center">
                Selected: {selectedFile.name}
              </p>
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#5d667b] text-[12px] text-center">
                {(selectedFile.size / 1024).toFixed(1)} KB
              </p>
            </div>
          ) : (
            <Frame2 isDragOver={isDragOver} onChooseFile={onChooseFile} />
          )}
        </div>
      </div>
    </div>
  );
}

function Frame34({ 
  isDragOver, 
  onDragOver, 
  onDragLeave, 
  onDrop, 
  onChooseFile,
  selectedFile 
}: { 
  isDragOver: boolean; 
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onChooseFile: () => void;
  selectedFile: File | null;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] w-full">Upload Holiday File</p>
      <UploadDragUpload 
        isDragOver={isDragOver}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onChooseFile={onChooseFile}
        selectedFile={selectedFile}
      />
    </div>
  );
}

function Frame2095585618({ 
  isDragOver, 
  onDragOver, 
  onDragLeave, 
  onDrop, 
  onChooseFile,
  selectedFile,
  uploadError 
}: { 
  isDragOver: boolean; 
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onChooseFile: () => void;
  selectedFile: File | null;
  uploadError: string | null;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame34 
        isDragOver={isDragOver}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onChooseFile={onChooseFile}
        selectedFile={selectedFile}
      />
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5d667b] text-[14px] w-full">Max file size: 10MB. Allowed formats: .csv, .xls, .xlsx</p>
        {uploadError && (
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-red-500 text-[14px] w-full">{uploadError}</p>
        )}
      </div>
    </div>
  );
}

function Frame2095585619({ 
  onDownloadTemplate,
  isDragOver, 
  onDragOver, 
  onDragLeave, 
  onDrop, 
  onChooseFile,
  selectedFile,
  uploadError 
}: { 
  onDownloadTemplate: () => void;
  isDragOver: boolean; 
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onChooseFile: () => void;
  selectedFile: File | null;
  uploadError: string | null;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2095585602 onDownloadTemplate={onDownloadTemplate} />
      <Frame2095585618 
        isDragOver={isDragOver}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onChooseFile={onChooseFile}
        selectedFile={selectedFile}
        uploadError={uploadError}
      />
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="relative rounded-[4px] shrink-0 hover:bg-gray-50 transition-colors" 
      data-name="Button"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#3a58ef] text-[14px] text-nowrap whitespace-pre">Cancel</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#3a58ef] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </button>
  );
}

function Button2({ onClick, disabled, isUploading }: { onClick: () => void; disabled: boolean; isUploading: boolean }) {
  return (
    <button 
      className={`box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 transition-colors ${
        disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#3a58ef] hover:bg-[#2c47d1]'
      }`} 
      data-name="Button"
      onClick={onClick}
      disabled={disabled}
    >
      <p className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap whitespace-pre ${
        disabled ? 'text-gray-500' : 'text-white'
      }`}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </p>
    </button>
  );
}

function Frame2095585302({ onCancel, onUpload, canUpload, isUploading }: { 
  onCancel: () => void; 
  onUpload: () => void; 
  canUpload: boolean;
  isUploading: boolean;
}) {
  return (
    <div className="content-stretch cursor-pointer flex gap-[6px] items-center relative shrink-0">
      <Button1 onClick={onCancel} />
      <Button2 onClick={onUpload} disabled={!canUpload || isUploading} isUploading={isUploading} />
    </div>
  );
}

function Frame2095584876({ onCancel, onUpload, canUpload, isUploading }: { 
  onCancel: () => void; 
  onUpload: () => void; 
  canUpload: boolean;
  isUploading: boolean;
}) {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-full">
      <Frame2095585302 onCancel={onCancel} onUpload={onUpload} canUpload={canUpload} isUploading={isUploading} />
    </div>
  );
}

export default function ImportHolidaysModal({ isOpen, onClose, onImport }: ImportHolidaysModalProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const downloadTemplate = () => {
    const csvContent = 'Name,Date,Type,Description\n"Sample Holiday","2025-01-01","Public","This is a sample holiday description"';
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Company_holiday_format.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const validateFile = (file: File): boolean => {
    setUploadError(null);

    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('File size exceeds 10MB limit');
      return false;
    }

    // Check file type
    const allowedTypes = ['.csv', '.xls', '.xlsx'];
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!allowedTypes.includes(fileExtension)) {
      setUploadError('Only .csv, .xls, .xlsx files are allowed');
      return false;
    }

    return true;
  };

  const handleFileSelect = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const parseCSV = (text: string) => {
    const lines = text.split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    
    const holidays = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
        if (values.length >= 4) {
          const holiday = {
            name: values[0],
            date: values[1],
            displayDate: new Date(values[1]).toLocaleDateString('en-US', { 
              month: 'short', 
              day: '2-digit', 
              year: 'numeric' 
            }),
            type: values[2],
            description: values[3]
          };
          holidays.push(holiday);
        }
      }
    }
    return holidays;
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadError(null);

    try {
      const text = await selectedFile.text();
      const holidays = parseCSV(text);
      
      if (holidays.length === 0) {
        setUploadError('No valid holiday data found in the file');
        setIsUploading(false);
        return;
      }

      onImport(holidays);
      onClose();
      setSelectedFile(null);
    } catch (error) {
      setUploadError('Error parsing CSV file. Please check the format.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setUploadError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white relative rounded-[6px] w-[600px] max-h-[90vh] overflow-auto" data-name="Import Holidays">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
            <Frame1000002499 onClose={handleCancel} />
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 552 1">
                  <line id="Line 43" stroke="var(--stroke-0, #EAECF0)" x2="552" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            <Frame2095585619 
              onDownloadTemplate={downloadTemplate}
              isDragOver={isDragOver}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onChooseFile={handleChooseFile}
              selectedFile={selectedFile}
              uploadError={uploadError}
            />
            <Frame2095584876 
              onCancel={handleCancel} 
              onUpload={handleUpload} 
              canUpload={!!selectedFile && !uploadError}
              isUploading={isUploading}
            />
          </div>
        </div>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,.xls,.xlsx"
        onChange={handleFileInputChange}
        className="hidden"
      />
    </div>
  );
}