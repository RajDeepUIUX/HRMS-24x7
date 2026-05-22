import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

interface StaffProfilingDetailViewProps {
  staffName: string;
  onBack: () => void;
}

type TabType = 
  | 'personal-details'
  | 'professional-details'
  | 'skill-set'
  | 'learning-growth'
  | 'interview-availability'
  | 'timesheet-summary';

export default function StaffProfilingDetailView({ staffName, onBack }: StaffProfilingDetailViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('personal-details');
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState(getStaffData(staffName));

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    // Save logic here
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setFormData(getStaffData(staffName));
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const tabs = [
    { id: 'personal-details', label: 'Personal Details' },
    { id: 'professional-details', label: 'Professional Details' },
    { id: 'skill-set', label: 'Skill Set' },
    { id: 'learning-growth', label: 'Learning & Growth' },
    { id: 'interview-availability', label: 'Interview Availability' },
    { id: 'timesheet-summary', label: 'Timesheet Summary' }
  ];

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full">
      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <div className="flex items-center gap-[16px]">
          <div 
            className="cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors"
            onClick={onBack}
          >
            <ChevronLeft className="w-[20px] h-[20px] text-[#5d667b]" />
          </div>
          <div className="content-stretch flex flex-col items-start">
            <p className="font-semibold leading-[32px] not-italic text-[#101828] text-[24px]">
              {staffName}
            </p>
            <div className="flex items-center gap-[8px]">
              <p className="font-normal leading-[20px] not-italic text-[#5d667b] text-[14px] cursor-pointer hover:underline" onClick={onBack}>
                Staff Profiling
              </p>
              <p className="font-normal leading-[20px] not-italic text-[#5d667b] text-[14px]">/</p>
              <p className="font-normal leading-[20px] not-italic text-[#101828] text-[14px]">
                {staffName}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[12px] items-center">
          {!isEditMode ? (
            <div 
              className="bg-[#3a58ef] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#2d47d1] transition-colors"
              onClick={handleEdit}
            >
              <p className="font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white">
                Edit
              </p>
            </div>
          ) : (
            <>
              <div 
                className="bg-white border border-[#d0d5dd] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#f9fafb] transition-colors"
                onClick={handleCancel}
              >
                <p className="font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-[#344054]">
                  Cancel
                </p>
              </div>
              <div 
                className="bg-[#3a58ef] content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#2d47d1] transition-colors"
                onClick={handleSave}
              >
                <p className="font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-white">
                  Save
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Content Area with Sidebar and Main Content */}
      <div className="flex gap-[24px] w-full flex-1 overflow-hidden">
        {/* Left Sidebar - Tabs */}
        <div className="w-[250px] flex-shrink-0 border-r border-[#eaecf0] pr-[16px] overflow-y-auto">
          <div className="flex flex-col gap-[4px]">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`px-[12px] py-[8px] rounded-[6px] cursor-pointer transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#d8defc] text-[#3a58ef]'
                    : 'text-[#5d667b] hover:bg-[#f9fafb]'
                }`}
                onClick={() => setActiveTab(tab.id as TabType)}
              >
                <p className="font-medium leading-[20px] not-italic text-[14px]">
                  {tab.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'personal-details' && (
            <PersonalDetailsTab formData={formData} isEditMode={isEditMode} onInputChange={handleInputChange} />
          )}
          {activeTab === 'professional-details' && (
            <ProfessionalDetailsTab formData={formData} isEditMode={isEditMode} onInputChange={handleInputChange} />
          )}
          {activeTab === 'skill-set' && (
            <SkillSetTab formData={formData} isEditMode={isEditMode} onInputChange={handleInputChange} />
          )}
          {activeTab === 'learning-growth' && (
            <LearningGrowthTab formData={formData} isEditMode={isEditMode} onInputChange={handleInputChange} />
          )}
          {activeTab === 'interview-availability' && (
            <InterviewAvailabilityTab formData={formData} isEditMode={isEditMode} onInputChange={handleInputChange} />
          )}
          {activeTab === 'timesheet-summary' && (
            <TimesheetSummaryTab formData={formData} isEditMode={isEditMode} onInputChange={handleInputChange} />
          )}
        </div>
      </div>
    </div>
  );
}

// Field Component
function Field({ label, value, isEditMode, onChange, type = 'text', options = [] }: { 
  label: string; 
  value: string; 
  isEditMode: boolean; 
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'number' | 'date' | 'dropdown' | 'textarea';
  options?: string[];
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <p className="font-medium leading-[20px] not-italic text-[14px] text-[#344054]">
        {label}
      </p>
      {isEditMode ? (
        <>
          {type === 'dropdown' ? (
            <select
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="px-[14px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3a58ef] focus:border-transparent bg-white"
            >
              <option value="">Select...</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : type === 'textarea' ? (
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              rows={3}
              className="px-[14px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3a58ef] focus:border-transparent resize-none"
            />
          ) : type === 'date' ? (
            <input
              type="date"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="px-[14px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3a58ef] focus:border-transparent"
            />
          ) : (
            <input
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="px-[14px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3a58ef] focus:border-transparent"
            />
          )}
        </>
      ) : (
        <p className="font-normal leading-[24px] not-italic text-[14px] text-[#101828] px-[14px] py-[10px] bg-[#f9fafb] rounded-[8px]">
          {value || 'N/A'}
        </p>
      )}
    </div>
  );
}

// Section Header Component
function SectionHeader({ title }: { title: string }) {
  return (
    <p className="font-semibold leading-[24px] not-italic text-[16px] text-[#101828] mt-[16px] mb-[12px]">
      {title}
    </p>
  );
}

// File Upload Field Component
function FileUploadField({ label, isEditMode }: { label: string; isEditMode: boolean }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <p className="font-medium leading-[20px] not-italic text-[14px] text-[#344054]">
        {label}
      </p>
      {isEditMode ? (
        <div className="px-[14px] py-[10px] border border-[#d0d5dd] border-dashed rounded-[8px] text-[14px] text-[#667085] bg-[#f9fafb] cursor-pointer hover:bg-[#f2f4f7] transition-colors flex items-center justify-center">
          <p className="font-normal leading-[20px] text-[14px] text-[#667085]">
            Click to upload or drag and drop
          </p>
        </div>
      ) : (
        <p className="font-normal leading-[24px] not-italic text-[14px] text-[#101828] px-[14px] py-[10px] bg-[#f9fafb] rounded-[8px]">
          No file uploaded
        </p>
      )}
    </div>
  );
}

// Table Header for attachment tables
function AttachmentTable({ title, isEditMode }: { title: string; isEditMode: boolean }) {
  return (
    <div className="flex flex-col gap-[12px] col-span-3">
      <p className="font-medium leading-[20px] not-italic text-[14px] text-[#344054]">
        {title}
      </p>
      <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#f9fafb]">
            <tr>
              <th className="px-[16px] py-[12px] text-left border-b border-[#eaecf0]">
                <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                  File Name
                </p>
              </th>
              <th className="px-[16px] py-[12px] text-left border-b border-[#eaecf0]">
                <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                  Upload Date
                </p>
              </th>
              <th className="px-[16px] py-[12px] text-left border-b border-[#eaecf0]">
                <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                  Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#eaecf0]">
              <td className="px-[16px] py-[12px] text-center" colSpan={3}>
                <p className="font-normal leading-[20px] text-[14px] text-[#667085]">
                  {isEditMode ? 'Click "Add Attachment" to upload files' : 'No attachments uploaded'}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        {isEditMode && (
          <div className="px-[16px] py-[12px] bg-[#f9fafb] border-t border-[#eaecf0]">
            <button className="px-[12px] py-[8px] bg-[#3a58ef] text-white rounded-[4px] text-[14px] font-medium hover:bg-[#2d47d1] transition-colors">
              + Add Attachment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Skill Rating Component
function SkillRatingField({ 
  label, 
  skills, 
  isEditMode, 
  onChange,
  availableOptions 
}: { 
  label: string; 
  skills: Array<{name: string; rating: string}>; 
  isEditMode: boolean; 
  onChange: (skills: Array<{name: string; rating: string}>) => void;
  availableOptions: string[];
}) {
  const [selectedSkill, setSelectedSkill] = useState('');
  
  const ratingOptions = ['Basic', 'Average', 'Intermediate', 'Advanced', 'Expert'];
  
  const handleAddSkill = () => {
    if (selectedSkill && !skills.find(s => s.name === selectedSkill)) {
      onChange([...skills, { name: selectedSkill, rating: '' }]);
      setSelectedSkill('');
    }
  };
  
  const handleRemoveSkill = (skillName: string) => {
    onChange(skills.filter(s => s.name !== skillName));
  };
  
  const handleRatingChange = (skillName: string, newRating: string) => {
    onChange(skills.map(s => s.name === skillName ? { ...s, rating: newRating } : s));
  };
  
  return (
    <div className="flex flex-col gap-[6px] col-span-3">
      <p className="font-medium leading-[20px] not-italic text-[14px] text-[#344054]">
        {label}
      </p>
      
      {isEditMode && (
        <div className="flex gap-[8px] mb-[8px]">
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="flex-1 px-[14px] py-[10px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3a58ef] focus:border-transparent bg-white"
          >
            <option value="">Select {label}...</option>
            {availableOptions.filter(opt => !skills.find(s => s.name === opt)).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <button
            onClick={handleAddSkill}
            disabled={!selectedSkill}
            className="px-[16px] py-[10px] bg-[#3a58ef] text-white rounded-[8px] text-[14px] font-medium hover:bg-[#2d47d1] transition-colors disabled:bg-[#d0d5dd] disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      )}
      
      {skills.length > 0 ? (
        <div className="border border-[#eaecf0] rounded-[8px] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#f9fafb]">
              <tr>
                <th className="px-[16px] py-[12px] text-left border-b border-[#eaecf0] w-1/2">
                  <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                    {label}
                  </p>
                </th>
                <th className="px-[16px] py-[12px] text-left border-b border-[#eaecf0] w-1/3">
                  <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                    Proficiency Level
                  </p>
                </th>
                {isEditMode && (
                  <th className="px-[16px] py-[12px] text-left border-b border-[#eaecf0] w-[100px]">
                    <p className="font-medium leading-[18px] not-italic text-[12px] text-[#5d667b] uppercase">
                      Actions
                    </p>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index} className="border-b border-[#eaecf0] last:border-b-0">
                  <td className="px-[16px] py-[12px]">
                    <p className="font-normal leading-[20px] text-[14px] text-[#101828]">
                      {skill.name}
                    </p>
                  </td>
                  <td className="px-[16px] py-[12px]">
                    {isEditMode ? (
                      <select
                        value={skill.rating}
                        onChange={(e) => handleRatingChange(skill.name, e.target.value)}
                        className="w-full px-[14px] py-[8px] border border-[#d0d5dd] rounded-[6px] text-[14px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#3a58ef] focus:border-transparent bg-white"
                      >
                        <option value="">Select proficiency</option>
                        {ratingOptions.map((rating) => (
                          <option key={rating} value={rating}>
                            {rating}
                          </option>
                        ))}
                      </select>
                    ) : (
                      skill.rating ? (
                        <span className={`inline-flex px-[10px] py-[4px] rounded-[6px] text-[12px] font-medium ${
                          skill.rating === 'Expert' ? 'bg-[#eff8ff] text-[#175cd3]' :
                          skill.rating === 'Advanced' ? 'bg-[#f9f5ff] text-[#6941c6]' :
                          skill.rating === 'Intermediate' ? 'bg-[#fef3f2] text-[#b42318]' :
                          skill.rating === 'Average' ? 'bg-[#eef2ff] text-[#3730a3]' :
                          skill.rating === 'Basic' ? 'bg-[#f2f4f7] text-[#344054]' :
                          'bg-[#f2f4f7] text-[#344054]'
                        }`}>
                          {skill.rating}
                        </span>
                      ) : (
                        <span className="inline-flex px-[10px] py-[4px] rounded-[6px] text-[12px] font-medium text-[#667085] bg-[#f9fafb]">
                          Not set
                        </span>
                      )
                    )}
                  </td>
                  {isEditMode && (
                    <td className="px-[16px] py-[12px]">
                      <button
                        onClick={() => handleRemoveSkill(skill.name)}
                        className="text-[#b42318] hover:text-[#912018] text-[14px] font-medium"
                      >
                        Remove
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="px-[14px] py-[10px] bg-[#f9fafb] rounded-[8px] border border-[#eaecf0]">
          <p className="font-normal leading-[20px] text-[14px] text-[#667085]">
            {isEditMode ? 'Select and add skills from the dropdown above' : 'No skills added'}
          </p>
        </div>
      )}
    </div>
  );
}

// Personal Details Tab
function PersonalDetailsTab({ formData, isEditMode, onInputChange }: any) {
  return (
    <div className="flex flex-col gap-[20px]">
      <p className="font-semibold leading-[28px] not-italic text-[20px] text-[#101828]">
        Personal Details
      </p>
      
      {/* My Information Section */}
      <SectionHeader title="My Information" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Employee ID" value={formData.employeeId} isEditMode={isEditMode} onChange={(v) => onInputChange('employeeId', v)} type="text" />
        <Field label="Full Name" value={formData.fullName} isEditMode={isEditMode} onChange={(v) => onInputChange('fullName', v)} type="text" />
        <Field label="Official Email ID" value={formData.officialEmail} isEditMode={isEditMode} onChange={(v) => onInputChange('officialEmail', v)} type="email" />
        <Field label="Personal Email ID" value={formData.personalEmail} isEditMode={isEditMode} onChange={(v) => onInputChange('personalEmail', v)} type="email" />
        <Field label="Location" value={formData.location} isEditMode={isEditMode} onChange={(v) => onInputChange('location', v)} type="dropdown" options={['Hyderabad, India', 'Bangalore, India', 'Mumbai, India', 'Delhi, India', 'Chennai, India', 'Pune, India', 'Kolkata, India']} />
        <Field label="Workmode Preference" value={formData.workmodePreference} isEditMode={isEditMode} onChange={(v) => onInputChange('workmodePreference', v)} type="dropdown" options={['Remote', 'Hybrid', 'Office', 'Remote / Hybrid / Office - followup questions']} />
        <Field label="Shift Timing" value={formData.shiftTiming} isEditMode={isEditMode} onChange={(v) => onInputChange('shiftTiming', v)} type="text" />
      </div>

      {/* Family Details Section */}
      <SectionHeader title="Family Details" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Father Name" value={formData.fatherName} isEditMode={isEditMode} onChange={(v) => onInputChange('fatherName', v)} type="text" />
        <Field label="Father's Date Of Birth" value={formData.fatherDOB} isEditMode={isEditMode} onChange={(v) => onInputChange('fatherDOB', v)} type="date" />
        <Field label="Father's Phone Number" value={formData.fatherPhone} isEditMode={isEditMode} onChange={(v) => onInputChange('fatherPhone', v)} type="text" />
        <Field label="Mother Name" value={formData.motherName} isEditMode={isEditMode} onChange={(v) => onInputChange('motherName', v)} type="text" />
        <Field label="Mother's Date Of Birth" value={formData.motherDOB} isEditMode={isEditMode} onChange={(v) => onInputChange('motherDOB', v)} type="date" />
        <Field label="Mother's Phone Number" value={formData.motherPhone} isEditMode={isEditMode} onChange={(v) => onInputChange('motherPhone', v)} type="text" />
        <Field label="Marital Status" value={formData.maritalStatus} isEditMode={isEditMode} onChange={(v) => onInputChange('maritalStatus', v)} type="dropdown" options={['Single', 'Married', 'Divorced', 'Widowed']} />
      </div>
    </div>
  );
}

// Professional Details Tab
function ProfessionalDetailsTab({ formData, isEditMode, onInputChange }: any) {
  return (
    <div className="flex flex-col gap-[20px]">
      <p className="font-semibold leading-[28px] not-italic text-[20px] text-[#101828]">
        Professional Details
      </p>
      
      {/* Organization Details Section */}
      <SectionHeader title="Organization Details" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Role / Designation" value={formData.role} isEditMode={isEditMode} onChange={(v) => onInputChange('role', v)} type="dropdown" options={['Tax Accountant', 'Senior Tax Accountant', 'Tax Specialist', 'Tax Manager', 'Audit Associate', 'Audit Senior', 'Bookkeeper', 'Accounting Manager']} />
        <Field label="Level" value={formData.level} isEditMode={isEditMode} onChange={(v) => onInputChange('level', v)} type="dropdown" options={['L1', 'L2', 'L3', 'L4', 'L5', 'L6']} />
        <Field label="Department" value={formData.department} isEditMode={isEditMode} onChange={(v) => onInputChange('department', v)} type="dropdown" options={['Tax Department', 'Audit Department', 'Accounting Department', 'Compliance Department', 'HR Department', 'IT Department']} />
        <Field label="Reporting Manager" value={formData.reportingManager} isEditMode={isEditMode} onChange={(v) => onInputChange('reportingManager', v)} type="text" />
        <Field label="Number of Team Members in Team" value={formData.teamMembers} isEditMode={isEditMode} onChange={(v) => onInputChange('teamMembers', v)} type="number" />
        <Field label="Employment Type (Full-time / Intern)" value={formData.employmentType} isEditMode={isEditMode} onChange={(v) => onInputChange('employmentType', v)} type="dropdown" options={['Full-time', 'Part-time', 'Contract', 'Intern', 'Consultant']} />
        <Field label="Date of Joining" value={formData.dateOfJoining} isEditMode={isEditMode} onChange={(v) => onInputChange('dateOfJoining', v)} type="date" />
        <Field label="Years of Experience at MYCPE" value={formData.yearsAtMYCPE} isEditMode={isEditMode} onChange={(v) => onInputChange('yearsAtMYCPE', v)} type="text" />
      </div>

      {/* Academic Qualification Section */}
      <SectionHeader title="Academic Qualification" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Education" value={formData.educationLevel} isEditMode={isEditMode} onChange={(v) => onInputChange('educationLevel', v)} type="dropdown" options={['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'Doctorate', 'Diploma', 'Certificate']} />
        <Field label="School/College Name" value={formData.schoolCollegeName} isEditMode={isEditMode} onChange={(v) => onInputChange('schoolCollegeName', v)} type="text" />
        <Field label="City" value={formData.educationCity} isEditMode={isEditMode} onChange={(v) => onInputChange('educationCity', v)} type="text" />
        <Field label="University Board" value={formData.universityBoard} isEditMode={isEditMode} onChange={(v) => onInputChange('universityBoard', v)} type="text" />
        <Field label="Country" value={formData.educationCountry} isEditMode={isEditMode} onChange={(v) => onInputChange('educationCountry', v)} type="dropdown" options={['India', 'USA', 'UK', 'Canada', 'Australia', 'Other']} />
        <Field label="State" value={formData.educationState} isEditMode={isEditMode} onChange={(v) => onInputChange('educationState', v)} type="text" />
        <Field label="Years of completion" value={formData.yearsOfCompletion} isEditMode={isEditMode} onChange={(v) => onInputChange('yearsOfCompletion', v)} type="text" />
        
        <AttachmentTable title="Education Certificates" isEditMode={isEditMode} />
        <AttachmentTable title="Qualification" isEditMode={isEditMode} />
      </div>

      {/* Professional Qualification Section */}
      <SectionHeader title="Professional Qualification" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="EA/CPA/CMA" value={formData.professionalCertification} isEditMode={isEditMode} onChange={(v) => onInputChange('professionalCertification', v)} type="dropdown" options={['EA', 'CPA', 'CMA', 'EA + CPA', 'CPA + CMA', 'None', 'In Progress']} />
      </div>

      {/* Experience Section */}
      <SectionHeader title="Experience" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Type of Company" value={formData.typeOfCompany} isEditMode={isEditMode} onChange={(v) => onInputChange('typeOfCompany', v)} type="dropdown" options={['Firm', 'KPO', 'Firm / KPO', 'Startup', 'Corporate', 'Public Sector', 'Consulting']} />
        <Field label="Country" value={formData.experienceCountry} isEditMode={isEditMode} onChange={(v) => onInputChange('experienceCountry', v)} type="dropdown" options={['India', 'USA', 'UK', 'Canada', 'Australia', 'Other']} />
        <Field label="Name of the Company" value={formData.companyName} isEditMode={isEditMode} onChange={(v) => onInputChange('companyName', v)} type="text" />
        <Field label="Designation" value={formData.designation} isEditMode={isEditMode} onChange={(v) => onInputChange('designation', v)} type="text" />
        <Field label="Current Organization" value={formData.currentOrganization} isEditMode={isEditMode} onChange={(v) => onInputChange('currentOrganization', v)} type="dropdown" options={['Yes', 'No']} />
        <Field label="Other Designation" value={formData.otherDesignation} isEditMode={isEditMode} onChange={(v) => onInputChange('otherDesignation', v)} type="text" />
        <Field label="Joining Date" value={formData.experienceJoiningDate} isEditMode={isEditMode} onChange={(v) => onInputChange('experienceJoiningDate', v)} type="date" />
        <Field label="Last Working Date" value={formData.lastWorkingDate} isEditMode={isEditMode} onChange={(v) => onInputChange('lastWorkingDate', v)} type="date" />
        <Field label="Experience" value={formData.totalExperience} isEditMode={isEditMode} onChange={(v) => onInputChange('totalExperience', v)} type="text" />
        <Field label="Type of Work Done" value={formData.typeOfWorkDone} isEditMode={isEditMode} onChange={(v) => onInputChange('typeOfWorkDone', v)} type="textarea" />
        <Field label="Roles and Responsibility" value={formData.rolesAndResponsibility} isEditMode={isEditMode} onChange={(v) => onInputChange('rolesAndResponsibility', v)} type="textarea" />
        
        <div className="col-span-3">
          <SectionHeader title="3 Month's pay slip / Bank statement" />
          <div className="grid grid-cols-3 gap-[16px]">
            <FileUploadField label="Month 1 Pay Slip" isEditMode={isEditMode} />
            <FileUploadField label="Month 2 Pay Slip" isEditMode={isEditMode} />
            <FileUploadField label="Month 3 Pay Slip" isEditMode={isEditMode} />
          </div>
        </div>

        <FileUploadField label="Reliving Letter/Experience Letter" isEditMode={isEditMode} />
      </div>

      {/* Background Verification Section */}
      <SectionHeader title="Background Verification" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Credit Check" value={formData.creditCheck} isEditMode={isEditMode} onChange={(v) => onInputChange('creditCheck', v)} type="dropdown" options={['Completed', 'Pending', 'Not Required', 'In Progress']} />
        <Field label="Criminal Check" value={formData.criminalCheck} isEditMode={isEditMode} onChange={(v) => onInputChange('criminalCheck', v)} type="dropdown" options={['Completed', 'Pending', 'Not Required', 'In Progress']} />
        <Field label="Employer Check" value={formData.employerCheck} isEditMode={isEditMode} onChange={(v) => onInputChange('employerCheck', v)} type="dropdown" options={['Completed', 'Pending', 'Not Required', 'In Progress']} />
      </div>
    </div>
  );
}

// Skill Set Tab
function SkillSetTab({ formData, isEditMode, onInputChange }: any) {
  return (
    <div className="flex flex-col gap-[20px]">
      <p className="font-semibold leading-[28px] not-italic text-[20px] text-[#101828]">
        Skill Set
      </p>
      
      <SectionHeader title="Domain Expertise" />
      <p className="text-[14px] leading-[20px] text-[#667085]">
        Define the candidate's primary and secondary domain expertise, and select the main type of work they do.
      </p>
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Primary Domain" value={formData.primaryDomain} isEditMode={isEditMode} onChange={(v) => onInputChange('primaryDomain', v)} type="dropdown" options={['Accounting', 'Audit', 'Tax', 'Bookkeeping', 'Payroll', 'Financial Reporting', 'Compliance', 'Advisory', 'Consulting', 'Other']} />
        <Field label="Secondary Domain" value={formData.secondaryDomain} isEditMode={isEditMode} onChange={(v) => onInputChange('secondaryDomain', v)} type="dropdown" options={['None', 'Accounting', 'Audit', 'Tax', 'Bookkeeping', 'Payroll', 'Financial Reporting', 'Compliance', 'Advisory', 'Consulting', 'Other']} />
        <Field label="Type of Work Done" value={formData.typeOfWork} isEditMode={isEditMode} onChange={(v) => onInputChange('typeOfWork', v)} type="dropdown" options={['Execution', 'Review', 'Client Coordination', 'Advisory', 'Compliance', 'Reporting', 'Bookkeeping', 'Tax Preparation', 'Audit Support', 'Other']} />
      </div>

      <SectionHeader title="Software / Skill Mapping" />
      <p className="text-[14px] leading-[20px] text-[#667085]">
        Pick relevant software or technical skills for each category, then set proficiency. You can leave proficiency unset if needed.
      </p>

      <div className="grid grid-cols-1 gap-[20px]">
        <SkillRatingField 
          label="Accounting Software" 
          skills={formData.accountingSoftwareSkills || []} 
          isEditMode={isEditMode} 
          onChange={(v) => onInputChange('accountingSoftwareSkills', v)}
          availableOptions={['QuickBooks', 'Xero', 'Sage', 'FreshBooks', 'NetSuite', 'Zoho Books', 'Wave', 'Tally', 'SAP', 'Oracle Financials', 'Microsoft Dynamics', 'Odoo']}
        />
        <SkillRatingField 
          label="Audit Software" 
          skills={formData.auditSoftwareSkills || []} 
          isEditMode={isEditMode} 
          onChange={(v) => onInputChange('auditSoftwareSkills', v)}
          availableOptions={['CaseWare', 'IDEA', 'AuditFile', 'TeamMate', 'ACL Analytics', 'Wolters Kluwer', 'Refinitiv', 'AuditBoard', 'HighBond']}
        />
        <SkillRatingField 
          label="Tax Software" 
          skills={formData.taxSoftwareSkills || []} 
          isEditMode={isEditMode} 
          onChange={(v) => onInputChange('taxSoftwareSkills', v)}
          availableOptions={['ProSystem fx', 'Lacerte', 'Drake', 'UltraTax', 'CCH Axcess', 'TaxAct', 'TurboTax', 'ProConnect', 'TaxSlayer Pro', 'GoSystem Tax', 'Thomson Reuters', 'Vertex']}
        />
        <SkillRatingField 
          label="Other Software" 
          skills={formData.otherSoftwareSkills || []} 
          isEditMode={isEditMode} 
          onChange={(v) => onInputChange('otherSoftwareSkills', v)}
          availableOptions={['Microsoft Excel', 'Adobe Acrobat', 'Google Workspace', 'Microsoft Office Suite', 'SharePoint', 'OneDrive', 'Dropbox', 'Slack', 'Zoom', 'Microsoft Teams', 'Asana', 'Trello']}
        />
        <SkillRatingField 
          label="Technical Skills" 
          skills={formData.technicalSkillsRatings || []} 
          isEditMode={isEditMode} 
          onChange={(v) => onInputChange('technicalSkillsRatings', v)}
          availableOptions={['US Tax (Individual)', 'US Tax (Business)', 'S-Corp', 'Partnership', 'C-Corp', 'Financial Reporting', 'Data Analysis', 'IFRS', 'GAAP', 'Internal Controls', 'Risk Assessment', 'Payroll Processing', 'Multi-state Tax', 'International Tax', 'Tax Planning', 'Tax Research', 'Financial Statement Preparation', 'Reconciliation']}
        />
      </div>

      <SectionHeader title="Capacity & Availability" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Parallel FTE Handling Capacity" value={formData.parallelFTE} isEditMode={isEditMode} onChange={(v) => onInputChange('parallelFTE', v)} type="text" />
        <Field label="Overtime Availability (Seasonal)" value={formData.overtimeSeasonal} isEditMode={isEditMode} onChange={(v) => onInputChange('overtimeSeasonal', v)} type="text" />
        <Field label="Overtime Availability (Round the Year)" value={formData.overtimeRoundYear} isEditMode={isEditMode} onChange={(v) => onInputChange('overtimeRoundYear', v)} type="text" />
        <Field label="Up to which level timesheet he/she can handle" value={formData.timesheetLevel} isEditMode={isEditMode} onChange={(v) => onInputChange('timesheetLevel', v)} type="dropdown" options={['Up to Associate level', 'Up to Senior level', 'Up to Manager level', 'Up to Director level']} />
        <Field label="Availability for meetings - followup questions" value={formData.meetingAvailability} isEditMode={isEditMode} onChange={(v) => onInputChange('meetingAvailability', v)} type="text" />
        <Field label="Additional Responsibility" value={formData.additionalResponsibility} isEditMode={isEditMode} onChange={(v) => onInputChange('additionalResponsibility', v)} type="text" />
      </div>

      {/* Quality, Risk & Performance Signals Section */}
      <SectionHeader title="Quality, Risk & Performance Signals" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Suitable to Mentor Juniors" value={formData.mentorJuniors} isEditMode={isEditMode} onChange={(v) => onInputChange('mentorJuniors', v)} type="dropdown" options={['Yes', 'No', 'With Guidance']} />
        <Field label="No. of Escalations" value={formData.escalations} isEditMode={isEditMode} onChange={(v) => onInputChange('escalations', v)} type="number" />
        <Field label="No. of Appreciations" value={formData.appreciations} isEditMode={isEditMode} onChange={(v) => onInputChange('appreciations', v)} type="number" />
        <Field label="Replacements" value={formData.replacements} isEditMode={isEditMode} onChange={(v) => onInputChange('replacements', v)} type="number" />
        <Field label="Timesheet Terminations" value={formData.timesheetTerminations} isEditMode={isEditMode} onChange={(v) => onInputChange('timesheetTerminations', v)} type="number" />
      </div>
    </div>
  );
}

// Learning, Growth & Knowledge Contribution Tab
function LearningGrowthTab({ formData, isEditMode, onInputChange }: any) {
  return (
    <div className="flex flex-col gap-[20px]">
      <p className="font-semibold leading-[28px] not-italic text-[20px] text-[#101828]">
        Learning, Growth & Knowledge Contribution
      </p>
      
      <SectionHeader title="Certification" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Uploaded Certificates, Certificate whole section" value={formData.certification} isEditMode={isEditMode} onChange={(v) => onInputChange('certification', v)} type="textarea" />
      </div>

      <SectionHeader title="Learning Hours Completed" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Completed" value={formData.learningHours} isEditMode={isEditMode} onChange={(v) => onInputChange('learningHours', v)} type="text" />
      </div>

      <SectionHeader title="Areas of Interest for Growth" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Areas of Interest" value={formData.areasOfInterest} isEditMode={isEditMode} onChange={(v) => onInputChange('areasOfInterest', v)} type="textarea" />
      </div>

      <SectionHeader title="Topics of Interest" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Topics" value={formData.topicsOfInterest} isEditMode={isEditMode} onChange={(v) => onInputChange('topicsOfInterest', v)} type="text" />
      </div>

      <SectionHeader title="Training Material Contribution" />
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Training Contributions" value={formData.trainingContribution} isEditMode={isEditMode} onChange={(v) => onInputChange('trainingContribution', v)} type="text" />
      </div>
    </div>
  );
}

// Interview Availability Tab
function InterviewAvailabilityTab({ formData, isEditMode, onInputChange }: any) {
  return (
    <div className="flex flex-col gap-[20px]">
      <p className="font-semibold leading-[28px] not-italic text-[20px] text-[#101828]">
        Interview Availability
      </p>
      
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Interview Availability" value={formData.interviewAvailability} isEditMode={isEditMode} onChange={(v) => onInputChange('interviewAvailability', v)} type="text" />
      </div>
    </div>
  );
}

// Timesheet Summary Tab
function TimesheetSummaryTab({ formData, isEditMode, onInputChange }: any) {
  return (
    <div className="flex flex-col gap-[20px]">
      <p className="font-semibold leading-[28px] not-italic text-[20px] text-[#101828]">
        Timesheet Summary
      </p>
      
      <div className="grid grid-cols-3 gap-[16px]">
        <Field label="Face" value={formData.face} isEditMode={isEditMode} onChange={(v) => onInputChange('face', v)} type="text" />
        <Field label="Associate" value={formData.associate} isEditMode={isEditMode} onChange={(v) => onInputChange('associate', v)} type="text" />
        <Field label="Reviewer" value={formData.reviewer} isEditMode={isEditMode} onChange={(v) => onInputChange('reviewer', v)} type="text" />
        <Field label="Replacement" value={formData.replacement} isEditMode={isEditMode} onChange={(v) => onInputChange('replacement', v)} type="text" />
        <Field label="Change of Hands" value={formData.changeOfHands} isEditMode={isEditMode} onChange={(v) => onInputChange('changeOfHands', v)} type="text" />
        <Field label="SOPs Created" value={formData.sopsCreated} isEditMode={isEditMode} onChange={(v) => onInputChange('sopsCreated', v)} type="text" />
        <Field label="Staff Improvement Survey" value={formData.staffImprovementSurvey} isEditMode={isEditMode} onChange={(v) => onInputChange('staffImprovementSurvey', v)} type="text" />
      </div>
    </div>
  );
}

// Mock data function
function getStaffData(staffName: string) {
  const staffDataMap: { [key: string]: any } = {
    'Yaswanth Kumar': {
      // Personal Details - My Information
      employeeId: 'EMP-2023-001',
      fullName: 'Yaswanth Kumar',
      officialEmail: 'yaswanth.kumar@mycpe.com',
      personalEmail: 'yaswanth.personal@gmail.com',
      location: 'Hyderabad, India',
      workmodePreference: 'Remote / Hybrid / Office - followup questions',
      shiftTiming: '9:00 AM - 6:00 PM IST (Seasonal, Round the year)',
      
      // Personal Details - Family Details
      fatherName: 'Ramesh Kumar',
      fatherDOB: '1965-05-15',
      fatherPhone: '+91-9876543210',
      motherName: 'Lakshmi Kumar',
      motherDOB: '1968-08-20',
      motherPhone: '+91-9876543211',
      maritalStatus: 'Married',
      
      // Professional Details - Organization Details
      role: 'Senior Tax Accountant',
      level: 'L3',
      department: 'Tax Department',
      reportingManager: 'Rajesh Sharma',
      teamMembers: '5',
      employmentType: 'Full-time',
      dateOfJoining: '2023-01-15',
      yearsAtMYCPE: '2 years',
      
      // Professional Details - Academic Qualification
      educationLevel: 'Master\'s Degree',
      schoolCollegeName: 'Osmania University',
      educationCity: 'Hyderabad',
      universityBoard: 'Osmania University',
      educationCountry: 'India',
      educationState: 'Telangana',
      yearsOfCompletion: '2020',
      
      // Professional Details - Professional Qualification
      professionalCertification: 'EA',
      
      // Professional Details - Experience
      typeOfCompany: 'Firm',
      experienceCountry: 'India',
      companyName: 'Deloitte',
      designation: 'Senior Associate',
      currentOrganization: 'Yes',
      otherDesignation: 'Tax Preparation and Review',
      experienceJoiningDate: '2020-01-01',
      lastWorkingDate: '2022-12-31',
      totalExperience: '5 years (India: 5 years)',
      typeOfWorkDone: 'Tax Preparation and Review',
      rolesAndResponsibility: 'Tax preparation, review, and client coordination for individual and business tax returns. Handled complex S-Corp and Partnership returns.',
      
      // Professional Details - Background Verification
      creditCheck: 'Completed',
      criminalCheck: 'Completed',
      employerCheck: 'Completed',
      
      // Skill Set - Domain Expertise
      primaryDomain: 'Tax Accounting',
      secondaryDomain: 'Audit Support',
      industryServed: 'Technology, Healthcare, Real Estate',
      
      // Skill Set - Software & Technical Skills
      typeOfWork: 'Execution, Review, Client coordination, Advisory support',
      accountingSoftware: 'QuickBooks, Xero, Sage',
      accountingSoftwareSkills: [
        { name: 'QuickBooks', rating: 'Expert' },
        { name: 'Xero', rating: 'Advanced' },
        { name: 'Sage', rating: 'Intermediate' }
      ],
      auditSoftware: 'CaseWare, IDEA',
      auditSoftwareSkills: [
        { name: 'CaseWare', rating: 'Advanced' },
        { name: 'IDEA', rating: 'Intermediate' }
      ],
      taxSoftware: 'ProSystem fx, Lacerte, Drake',
      taxSoftwareSkills: [
        { name: 'ProSystem fx', rating: 'Professional' },
        { name: 'Lacerte', rating: 'Expert' },
        { name: 'Drake', rating: 'Advanced' }
      ],
      otherSoftware: 'Excel, CCH Axcess, Adobe Acrobat',
      otherSoftwareSkills: [
        { name: 'Microsoft Excel', rating: 'Expert' },
        { name: 'Adobe Acrobat', rating: 'Advanced' }
      ],
      technicalSkills: 'US Tax (Individual & Business), S-Corp, Partnership, Financial Reporting, Data Analysis',
      technicalSkillsRatings: [
        { name: 'US Tax (Individual)', rating: 'Professional' },
        { name: 'US Tax (Business)', rating: 'Expert' },
        { name: 'S-Corp', rating: 'Expert' },
        { name: 'Partnership', rating: 'Advanced' },
        { name: 'Financial Reporting', rating: 'Advanced' },
        { name: 'Data Analysis', rating: 'Intermediate' }
      ],
      
      // Skill Set - Client Exposure & Communication Readiness
      clientTypes: 'Business / Firm',
      workedAs: 'Both (Face & EA)',
      clientCommunicationLevel: 'Regular client calls and emails, can handle complex queries',
      communicationSkills: 'Excellent written and verbal',
      readyForClient: 'Yes',
      readyForEndClient: 'Yes',
      clientRejections: '0',
      
      // Skill Set - Capacity & Availability
      parallelFTE: '2',
      overtimeSeasonal: 'Yes (10-15 hours/week)',
      overtimeRoundYear: 'Limited (5 hours/week)',
      timesheetLevel: 'Up to Manager level',
      meetingAvailability: 'Available for ad-hoc meetings, prefers scheduled meetings with 24-hour notice',
      additionalResponsibility: 'Team lead for onboarding new team members',
      
      // Skill Set - Quality, Risk & Performance Signals
      mentorJuniors: 'Yes',
      escalations: '1',
      appreciations: '8',
      replacements: '0',
      timesheetTerminations: '0',
      
      // Learning, Growth & Knowledge Contribution
      certification: 'EA (Enrolled Agent) - Certified 2022; Currently pursuing CPA',
      learningHours: '120 hours',
      areasOfInterest: 'Advanced Tax Planning, International Tax, Multi-state Tax',
      topicsOfInterest: 'S-Corp taxation, Partnership returns, Tax credits and incentives',
      trainingContribution: '3 training sessions conducted on S-Corp basics and Partnership tax fundamentals',
      
      // Interview Availability
      interviewAvailability: 'Weekdays 2:00 PM - 5:00 PM IST',
      
      // Timesheet Summary
      face: '15 clients',
      associate: '8 clients',
      reviewer: '5 clients',
      replacement: '2 instances',
      changeOfHands: '3 instances',
      sopsCreated: 'Created SOPs for 5 clients covering tax preparation workflows',
      staffImprovementSurvey: 'Participated in Q4 2024 survey, provided feedback on training needs'
    },
    'Surya Prakash': {
      // Personal Details - My Information
      employeeId: 'EMP-2022-045',
      fullName: 'Surya Prakash',
      officialEmail: 'surya.prakash@mycpe.com',
      personalEmail: 'surya.personal@gmail.com',
      location: 'Bangalore, India',
      workmodePreference: 'Hybrid',
      shiftTiming: '10:00 AM - 7:00 PM IST',
      
      // Personal Details - Family Details
      fatherName: 'Prakash Reddy',
      fatherDOB: '1970-03-10',
      fatherPhone: '+91-9876543220',
      motherName: 'Sita Reddy',
      motherDOB: '1972-06-25',
      motherPhone: '+91-9876543221',
      maritalStatus: 'Single',
      
      // Professional Details - Organization Details
      role: 'Tax Specialist',
      level: 'L2',
      department: 'Tax Department',
      reportingManager: 'Priya Menon',
      teamMembers: '3',
      employmentType: 'Full-time',
      dateOfJoining: '2022-08-20',
      yearsAtMYCPE: '2.5 years',
      
      // Professional Details - Academic Qualification
      educationLevel: 'Bachelor\'s Degree',
      schoolCollegeName: 'Christ University',
      educationCity: 'Bangalore',
      universityBoard: 'Christ University',
      educationCountry: 'India',
      educationState: 'Karnataka',
      yearsOfCompletion: '2020',
      
      // Professional Details - Professional Qualification
      professionalCertification: 'CPA (in progress)',
      
      // Professional Details - Experience
      typeOfCompany: 'Firm',
      experienceCountry: 'India',
      companyName: 'EY',
      designation: 'Tax Associate',
      currentOrganization: 'Yes',
      otherDesignation: 'Individual Tax Returns',
      experienceJoiningDate: '2020-01-01',
      lastWorkingDate: '2022-12-31',
      totalExperience: '4 years (India: 4 years)',
      typeOfWorkDone: 'Individual tax return preparation, primarily Form 1040',
      rolesAndResponsibility: 'Individual tax return preparation, primarily Form 1040',
      
      // Professional Details - Background Verification
      creditCheck: 'Completed',
      criminalCheck: 'Completed',
      employerCheck: 'Completed',
      
      // Skill Set - Domain Expertise
      primaryDomain: 'Individual Tax',
      secondaryDomain: 'Business Tax',
      industryServed: 'Individual Clients, Small Business',
      
      // Skill Set - Software & Technical Skills
      typeOfWork: 'Execution, Review',
      accountingSoftware: 'QuickBooks',
      accountingSoftwareSkills: [
        { name: 'QuickBooks', rating: 'Advanced' }
      ],
      auditSoftware: 'N/A',
      auditSoftwareSkills: [],
      taxSoftware: 'ProSystem fx, UltraTax',
      taxSoftwareSkills: [
        { name: 'ProSystem fx', rating: 'Advanced' },
        { name: 'UltraTax', rating: 'Intermediate' }
      ],
      otherSoftware: 'Excel, Adobe Acrobat',
      otherSoftwareSkills: [
        { name: 'Microsoft Excel', rating: 'Advanced' },
        { name: 'Adobe Acrobat', rating: 'Intermediate' }
      ],
      technicalSkills: 'US Individual Tax, Form 1040, Schedule C',
      technicalSkillsRatings: [
        { name: 'US Tax (Individual)', rating: 'Advanced' },
        { name: 'Data Analysis', rating: 'Basic' }
      ],
      
      // Skill Set - Client Exposure & Communication Readiness
      clientTypes: 'Individual / Business',
      workedAs: 'EA',
      clientCommunicationLevel: 'Email communication primarily',
      communicationSkills: 'Good written communication',
      readyForClient: 'Yes',
      readyForEndClient: 'No',
      clientRejections: '1',
      
      // Skill Set - Capacity & Availability
      parallelFTE: '1.5',
      overtimeSeasonal: 'Yes (8-12 hours/week)',
      overtimeRoundYear: 'No',
      timesheetLevel: 'Up to Senior level',
      meetingAvailability: 'Limited availability, prefers async communication',
      additionalResponsibility: 'N/A',
      
      // Skill Set - Quality, Risk & Performance Signals
      mentorJuniors: 'No',
      escalations: '2',
      appreciations: '5',
      replacements: '1',
      timesheetTerminations: '0',
      
      // Learning, Growth & Knowledge Contribution
      certification: 'CPA in progress - passed 2 out of 4 sections',
      learningHours: '80 hours',
      areasOfInterest: 'Corporate Tax, Business Tax',
      topicsOfInterest: 'Tax credits, Deductions, Schedule C',
      trainingContribution: '1 training session on Form 1040 basics',
      
      // Interview Availability
      interviewAvailability: 'Weekdays 3:00 PM - 6:00 PM IST',
      
      // Timesheet Summary
      face: '0 clients',
      associate: '12 clients',
      reviewer: '0 clients',
      replacement: '1 instance',
      changeOfHands: '2 instances',
      sopsCreated: 'N/A',
      staffImprovementSurvey: 'Participated in Q4 2024 survey'
    },
    'Dev Anand': {
      // Personal Details - My Information
      employeeId: 'EMP-2024-012',
      fullName: 'Dev Anand',
      officialEmail: 'dev.anand@mycpe.com',
      personalEmail: 'dev.personal@gmail.com',
      location: 'Mumbai, India',
      workmodePreference: 'Office',
      shiftTiming: '9:00 AM - 6:00 PM IST',
      
      // Personal Details - Family Details
      fatherName: 'Anand Sharma',
      fatherDOB: '1972-11-05',
      fatherPhone: '+91-9876543230',
      motherName: 'Priya Sharma',
      motherDOB: '1975-02-18',
      motherPhone: '+91-9876543231',
      maritalStatus: 'Single',
      
      // Professional Details - Organization Details
      role: 'Junior Tax Accountant',
      level: 'L1',
      department: 'Tax Department',
      reportingManager: 'Yaswanth Kumar',
      teamMembers: '0',
      employmentType: 'Full-time',
      dateOfJoining: '2024-03-10',
      yearsAtMYCPE: '11 months',
      
      // Professional Details - Academic Qualification
      educationLevel: 'Bachelor\'s Degree',
      schoolCollegeName: 'Mumbai University',
      educationCity: 'Mumbai',
      universityBoard: 'Mumbai University',
      educationCountry: 'India',
      educationState: 'Maharashtra',
      yearsOfCompletion: '2023',
      
      // Professional Details - Professional Qualification
      professionalCertification: 'None',
      
      // Professional Details - Experience
      typeOfCompany: 'Firm',
      experienceCountry: 'India',
      companyName: 'Fresher - First job',
      designation: 'N/A',
      currentOrganization: 'No',
      otherDesignation: 'N/A',
      experienceJoiningDate: '2024-03-10',
      lastWorkingDate: 'N/A',
      totalExperience: '11 months (India: 11 months)',
      typeOfWorkDone: 'N/A',
      rolesAndResponsibility: 'N/A',
      
      // Professional Details - Background Verification
      creditCheck: 'Completed',
      criminalCheck: 'Completed',
      employerCheck: 'Not Required',
      
      // Skill Set - Domain Expertise
      primaryDomain: 'Tax Accounting',
      secondaryDomain: 'None',
      industryServed: 'Individual Clients',
      
      // Skill Set - Software & Technical Skills
      typeOfWork: 'Execution',
      accountingSoftware: 'QuickBooks (Learning)',
      accountingSoftwareSkills: [
        { name: 'QuickBooks', rating: 'Basic' }
      ],
      auditSoftware: 'N/A',
      auditSoftwareSkills: [],
      taxSoftware: 'Lacerte (Learning)',
      taxSoftwareSkills: [
        { name: 'Lacerte', rating: 'Basic' }
      ],
      otherSoftware: 'Excel',
      otherSoftwareSkills: [
        { name: 'Microsoft Excel', rating: 'Intermediate' }
      ],
      technicalSkills: 'Basic Tax Preparation, Data Entry',
      technicalSkillsRatings: [
        { name: 'US Tax (Individual)', rating: 'Basic' },
        { name: 'Data Analysis', rating: 'Basic' }
      ],
      
      // Skill Set - Client Exposure & Communication Readiness
      clientTypes: 'Individual',
      workedAs: 'EA',
      clientCommunicationLevel: 'Email communication under supervision',
      communicationSkills: 'Average',
      readyForClient: 'With Training',
      readyForEndClient: 'No',
      clientRejections: '0',
      
      // Skill Set - Capacity & Availability
      parallelFTE: '1',
      overtimeSeasonal: 'Yes (5-8 hours/week)',
      overtimeRoundYear: 'No',
      timesheetLevel: 'Up to Associate level',
      meetingAvailability: 'Available as needed',
      additionalResponsibility: 'N/A',
      
      // Skill Set - Quality, Risk & Performance Signals
      mentorJuniors: 'No',
      escalations: '0',
      appreciations: '2',
      replacements: '0',
      timesheetTerminations: '0',
      
      // Learning, Growth & Knowledge Contribution
      certification: 'N/A',
      learningHours: '45 hours',
      areasOfInterest: 'Tax Preparation, US Tax Fundamentals',
      topicsOfInterest: 'Form 1040, Basic tax concepts',
      trainingContribution: 'N/A',
      
      // Interview Availability
      interviewAvailability: 'Not applicable',
      
      // Timesheet Summary
      face: '0 clients',
      associate: '3 clients',
      reviewer: '0 clients',
      replacement: '0 instances',
      changeOfHands: '0 instances',
      sopsCreated: 'N/A',
      staffImprovementSurvey: 'Not yet participated'
    },
    'Priya Sharma': {
      // Personal Details - My Information
      employeeId: 'EMP-2023-056',
      fullName: 'Priya Sharma',
      officialEmail: 'priya.sharma@mycpe.com',
      personalEmail: 'priya.personal@gmail.com',
      location: 'Delhi, India',
      workmodePreference: 'Hybrid',
      shiftTiming: '8:00 AM - 5:00 PM IST',
      
      // Personal Details - Family Details
      fatherName: 'Rajiv Sharma',
      fatherDOB: '1968-07-12',
      fatherPhone: '+91-9876543240',
      motherName: 'Meena Sharma',
      motherDOB: '1970-09-28',
      motherPhone: '+91-9876543241',
      maritalStatus: 'Married',
      
      // Professional Details - Organization Details
      role: 'Audit Associate',
      level: 'L2',
      department: 'Audit Department',
      reportingManager: 'Anil Kumar',
      teamMembers: '2',
      employmentType: 'Full-time',
      dateOfJoining: '2023-06-01',
      yearsAtMYCPE: '1.8 years',
      
      // Professional Details - Academic Qualification
      educationLevel: 'Bachelor\'s Degree',
      schoolCollegeName: 'Delhi University',
      educationCity: 'Delhi',
      universityBoard: 'Delhi University',
      educationCountry: 'India',
      educationState: 'Delhi',
      yearsOfCompletion: '2021',
      
      // Professional Details - Professional Qualification
      professionalCertification: 'None',
      
      // Professional Details - Experience
      typeOfCompany: 'Firm',
      experienceCountry: 'India',
      companyName: 'KPMG',
      designation: 'Audit Trainee',
      currentOrganization: 'Yes',
      otherDesignation: 'Financial Audit Support',
      experienceJoiningDate: '2021-01-01',
      lastWorkingDate: '2023-12-31',
      totalExperience: '3.8 years (India: 3.8 years)',
      typeOfWorkDone: 'Audit support, financial statement review, documentation',
      rolesAndResponsibility: 'Audit support, financial statement review, documentation',
      
      // Professional Details - Background Verification
      creditCheck: 'Completed',
      criminalCheck: 'Completed',
      employerCheck: 'Completed',
      
      // Skill Set - Domain Expertise
      primaryDomain: 'Audit Support',
      secondaryDomain: 'Financial Reporting',
      industryServed: 'Manufacturing, Services, Retail',
      
      // Skill Set - Software & Technical Skills
      typeOfWork: 'Execution, Review',
      accountingSoftware: 'Tally, SAP',
      accountingSoftwareSkills: [
        { name: 'Tally', rating: 'Advanced' },
        { name: 'SAP', rating: 'Intermediate' }
      ],
      auditSoftware: 'CaseWare, AuditFile',
      auditSoftwareSkills: [
        { name: 'CaseWare', rating: 'Advanced' },
        { name: 'AuditFile', rating: 'Intermediate' }
      ],
      taxSoftware: 'N/A',
      taxSoftwareSkills: [],
      otherSoftware: 'Excel, PowerPoint',
      otherSoftwareSkills: [
        { name: 'Microsoft Excel', rating: 'Expert' },
        { name: 'Microsoft Office Suite', rating: 'Advanced' }
      ],
      technicalSkills: 'Financial Analysis, Audit Procedures, Internal Controls',
      technicalSkillsRatings: [
        { name: 'Financial Reporting', rating: 'Advanced' },
        { name: 'Internal Controls', rating: 'Advanced' },
        { name: 'Risk Assessment', rating: 'Intermediate' }
      ],
      
      // Skill Set - Client Exposure & Communication Readiness
      clientTypes: 'Business / Firm',
      workedAs: 'EA',
      clientCommunicationLevel: 'Email and calls for information requests',
      communicationSkills: 'Good written and verbal',
      readyForClient: 'Yes',
      readyForEndClient: 'With Supervision',
      clientRejections: '0',
      
      // Skill Set - Capacity & Availability
      parallelFTE: '1.5',
      overtimeSeasonal: 'Yes (10-12 hours/week)',
      overtimeRoundYear: 'Limited (3 hours/week)',
      timesheetLevel: 'Up to Senior level',
      meetingAvailability: 'Flexible, prefers morning meetings',
      additionalResponsibility: 'Documentation quality reviewer',
      
      // Skill Set - Quality, Risk & Performance Signals
      mentorJuniors: 'With Guidance',
      escalations: '0',
      appreciations: '6',
      replacements: '0',
      timesheetTerminations: '0',
      
      // Learning, Growth & Knowledge Contribution
      certification: 'CA Inter pursuing, expected completion 2025',
      learningHours: '95 hours',
      areasOfInterest: 'Advanced Audit Techniques, IFRS',
      topicsOfInterest: 'Internal controls, Risk assessment, IFRS standards',
      trainingContribution: '2 training sessions on audit documentation',
      
      // Interview Availability
      interviewAvailability: 'Weekdays 1:00 PM - 4:00 PM IST',
      
      // Timesheet Summary
      face: '0 clients',
      associate: '6 clients',
      reviewer: '2 clients',
      replacement: '0 instances',
      changeOfHands: '1 instance',
      sopsCreated: 'Created 2 SOPs for audit documentation',
      staffImprovementSurvey: 'Participated in Q3 2024 survey'
    },
    'Rahul Verma': {
      // Personal Details - My Information
      employeeId: 'EMP-2021-089',
      fullName: 'Rahul Verma',
      officialEmail: 'rahul.verma@mycpe.com',
      personalEmail: 'rahul.personal@gmail.com',
      location: 'Pune, India',
      workmodePreference: 'Remote',
      shiftTiming: '7:00 AM - 4:00 PM IST',
      
      // Personal Details - Family Details
      fatherName: 'Suresh Verma',
      fatherDOB: '1965-01-20',
      fatherPhone: '+91-9876543250',
      motherName: 'Sunita Verma',
      motherDOB: '1967-04-15',
      motherPhone: '+91-9876543251',
      maritalStatus: 'Married',
      
      // Professional Details - Organization Details
      role: 'Payroll Specialist',
      level: 'L3',
      department: 'HR Department',
      reportingManager: 'HR Manager',
      teamMembers: '2',
      employmentType: 'Full-time',
      dateOfJoining: '2021-12-15',
      yearsAtMYCPE: '3.2 years',
      
      // Professional Details - Academic Qualification
      educationLevel: 'Master\'s Degree',
      schoolCollegeName: 'Symbiosis',
      educationCity: 'Pune',
      universityBoard: 'Symbiosis',
      educationCountry: 'India',
      educationState: 'Maharashtra',
      yearsOfCompletion: '2020',
      
      // Professional Details - Professional Qualification
      professionalCertification: 'None',
      
      // Professional Details - Experience
      typeOfCompany: 'Firm',
      experienceCountry: 'India',
      companyName: 'Infosys',
      designation: 'Payroll Associate',
      currentOrganization: 'Yes',
      otherDesignation: 'Payroll Processing',
      experienceJoiningDate: '2020-01-01',
      lastWorkingDate: '2021-12-31',
      totalExperience: '5 years (India: 5 years)',
      typeOfWorkDone: 'Payroll processing, compliance, employee queries',
      rolesAndResponsibility: 'Payroll processing, compliance, employee queries',
      
      // Professional Details - Background Verification
      creditCheck: 'Completed',
      criminalCheck: 'Completed',
      employerCheck: 'Completed',
      
      // Skill Set - Domain Expertise
      primaryDomain: 'Payroll',
      secondaryDomain: 'None',
      industryServed: 'IT Services, Consulting',
      
      // Skill Set - Software & Technical Skills
      typeOfWork: 'Payroll Processing, Compliance, Reporting',
      accountingSoftware: 'SAP, Greytip',
      accountingSoftwareSkills: [
        { name: 'SAP', rating: 'Expert' }
      ],
      auditSoftware: 'N/A',
      auditSoftwareSkills: [],
      taxSoftware: 'N/A',
      taxSoftwareSkills: [],
      otherSoftware: 'Excel, HRIS Systems',
      otherSoftwareSkills: [
        { name: 'Microsoft Excel', rating: 'Professional' }
      ],
      technicalSkills: 'Payroll Management, Tax Compliance, Benefits Administration',
      technicalSkillsRatings: [
        { name: 'Payroll Processing', rating: 'Professional' }
      ],
      
      // Skill Set - Client Exposure & Communication Readiness
      clientTypes: 'Internal (Employees)',
      workedAs: 'N/A',
      clientCommunicationLevel: 'Regular employee communication',
      communicationSkills: 'Good written and verbal',
      readyForClient: 'N/A',
      readyForEndClient: 'N/A',
      clientRejections: '0',
      
      // Skill Set - Capacity & Availability
      parallelFTE: 'N/A',
      overtimeSeasonal: 'Yes (during month-end)',
      overtimeRoundYear: 'Occasional',
      timesheetLevel: 'N/A',
      meetingAvailability: 'Flexible',
      additionalResponsibility: 'Payroll system admin',
      
      // Skill Set - Quality, Risk & Performance Signals
      mentorJuniors: 'Yes',
      escalations: '0',
      appreciations: '10',
      replacements: '0',
      timesheetTerminations: '0',
      
      // Learning, Growth & Knowledge Contribution
      certification: 'Certified Payroll Professional (CPP) - 2020',
      learningHours: '65 hours',
      areasOfInterest: 'HR Technology, Compensation & Benefits',
      topicsOfInterest: 'Payroll automation, Tax updates, Benefits design',
      trainingContribution: '4 training sessions on payroll compliance',
      
      // Interview Availability
      interviewAvailability: 'N/A',
      
      // Timesheet Summary
      face: 'N/A',
      associate: 'N/A',
      reviewer: 'N/A',
      replacement: 'N/A',
      changeOfHands: 'N/A',
      sopsCreated: 'Created comprehensive payroll processing SOP',
      staffImprovementSurvey: 'Participated in all quarterly surveys'
    }
  };

  return staffDataMap[staffName] || staffDataMap['Yaswanth Kumar'];
}