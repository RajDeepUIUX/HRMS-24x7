import { useState } from 'react';
import { ChevronLeft, Edit2, Save, X } from 'lucide-react';

interface StaffDetailViewProps {
  staffName: string;
  onBack?: () => void;
}

type TabType = 'personal' | 'organization' | 'professional' | 'domain-expertise' | 'tools-software' | 'client-exposure' | 'capacity' | 'quality-performance' | 'learning-growth' | 'compliance' | 'timesheet';

// Field component for displaying fields
interface FieldProps {
  label: string;
  value: string;
  isEditMode: boolean;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

function Field({ label, value, isEditMode, onChange, fullWidth = false }: FieldProps) {
  return (
    <div className={`flex flex-col gap-[6px] ${fullWidth ? 'col-span-3' : ''}`}>
      <p className="font-normal leading-[20px] text-[#5d667b] text-[14px]">{label}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`font-medium leading-[20px] text-[#101828] text-[14px] ${
          isEditMode ? 'border-b border-[#3a58ef] focus:outline-none p-1' : 'p-1'
        }`}
        readOnly={!isEditMode}
      />
    </div>
  );
}

export default function StaffDetailView({ staffName, onBack }: StaffDetailViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('personal');
  const [isEditMode, setIsEditMode] = useState(false);
  
  const [formData, setFormData] = useState({
    // Personal Details
    employeeId: 'EMP-2025-001',
    fullName: 'Yaswanth Kumar',
    officialEmailId: 'yaswanth.kumar@mycpe.com',
    personalEmailId: 'yaswanth.personal@gmail.com',
    location: 'Hyderabad, India',
    workmodePreference: 'Hybrid',
    shiftTiming: 'Round the Year',
    interviewAvailability: 'Available',
    
    // Organization Details
    roleDesignation: 'Senior Tax Accountant',
    level: 'L3',
    department: 'Tax',
    reportingManager: 'Surya Prakash',
    numberOfTeamMembers: '5',
    employmentType: 'Full-time',
    dateOfJoining: '15 Jan 2023',
    yearsOfExperienceAtMYCPE: '2 years',
    
    // Professional Details
    totalYearsOfExperience: '5 years (India - 5 years)',
    previousOrganizations: 'Deloitte - Tax Consultant, EY - Tax Associate',
    typeOfCompany: 'Firm',
    industryServed: 'Technology, Healthcare, Manufacturing',
    natureOfRoleInPreviousExperience: 'Tax Preparation, Tax Planning, Compliance',
    
    // Domain Expertise - Technical Skillset
    primaryDomain: 'Tax Accounting',
    secondaryDomain: 'Audit Support',
    typeOfWorkDone: 'Execution, Review, Client coordination',
    
    // Tools, Software & Technical Skills
    accountingSoftware: 'QuickBooks, Xero, Sage',
    auditSoftware: 'CaseWare, IDEA',
    taxSoftware: 'Lacerte, ProSeries, UltraTax',
    otherSoftware: 'Excel (Advanced), SAP',
    technicalSkills: 'Tax Compliance, Financial Analysis, Data Analytics',
    levelOfProficiency: 'Expert in Tax Software, Advanced in Accounting Software',
    
    // Client Exposure & Communication Readiness
    typeOfClientsWorkedWith: 'Business',
    workedAsFaceEABoth: 'Both',
    levelOfClientCommunications: 'High',
    communicationSkills: 'Excellent',
    readyForClientFacingWork: 'Yes',
    readyForEndClientAllocation: 'Yes',
    rejectionsInClientInterview: '0',
    
    // Capacity & Availability
    parallelFTEHandlingCapacity: '1.5 FTE',
    overtimeAvailabilitySeasonal: 'Available',
    overtimeAvailabilityRoundTheYear: 'Available',
    upToWhichLevelTimesheetHandle: 'Senior Level',
    availabilityForMeetings: 'Flexible - Available during EST business hours',
    
    // Quality, Risk & Performance Signals
    noOfEscalations: '0',
    noOfAppreciations: '8',
    replacements: '0',
    timesheetTerminations: '0',
    suitableToMentorJuniors: 'Yes',
    
    // Learning, Growth & Knowledge Contribution
    certification: 'CPA (In Progress), EA',
    qualification: 'Bachelor of Commerce',
    learningHoursCompleted: '120 hours',
    areasOfInterestForGrowth: 'International Tax, M&A Tax',
    topicsOfInterest: 'Transfer Pricing, Tax Treaties',
    trainingMaterialContribution: 'Created 3 training modules on Tax Compliance',
    
    // Compliance & Verification
    backgroundVerification: 'Completed',
    
    // Timesheet Details
    levelDomainAsAFace: 'L3 - Tax',
    hbrReport: 'Available'
  });

  const handleEdit = () => setIsEditMode(true);
  const handleSave = () => setIsEditMode(false);
  const handleCancel = () => setIsEditMode(false);

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const tabs = [
    { id: 'personal' as TabType, label: 'Personal Details' },
    { id: 'organization' as TabType, label: 'Organization Details' },
    { id: 'professional' as TabType, label: 'Professional Details' },
    { id: 'domain-expertise' as TabType, label: 'Domain Expertise - Technical Skillset' },
    { id: 'tools-software' as TabType, label: 'Tools, Software & Technical Skills' },
    { id: 'client-exposure' as TabType, label: 'Client Exposure & Communication' },
    { id: 'capacity' as TabType, label: 'Capacity & Availability' },
    { id: 'quality-performance' as TabType, label: 'Quality, Risk & Performance' },
    { id: 'learning-growth' as TabType, label: 'Learning, Growth & Knowledge' },
    { id: 'compliance' as TabType, label: 'Compliance & Verification' },
    { id: 'timesheet' as TabType, label: 'Timesheet Details' }
  ];

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full">
      {/* Breadcrumb */}
      <div className="content-stretch flex items-center gap-[8px] relative shrink-0 w-full">
        <button
          onClick={onBack}
          className="flex items-center gap-[4px] text-[#5d667b] hover:text-[#3a58ef] transition-colors cursor-pointer"
        >
          <ChevronLeft className="size-[16px]" />
          <p className="font-normal leading-[20px] text-[14px]">Support</p>
        </button>
        <p className="font-normal leading-[20px] text-[#5d667b] text-[14px]">&gt;</p>
        <p className="font-normal leading-[20px] text-[#5d667b] text-[14px]">Timesheets</p>
      </div>

      {/* Header */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        <p className="font-semibold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] whitespace-pre-wrap">
          {staffName}
        </p>
        {isEditMode ? (
          <div className="flex gap-[8px]">
            <button
              onClick={handleSave}
              className="bg-[#3a58ef] flex items-center gap-[8px] px-[16px] py-[8px] rounded-[4px] text-white hover:bg-[#2c42d3] transition-colors"
            >
              <Save className="size-[16px]" />
              <span className="font-medium text-[14px]">Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="bg-white border border-[#eaecf0] flex items-center gap-[8px] px-[16px] py-[8px] rounded-[4px] text-[#5d667b] hover:bg-gray-50 transition-colors"
            >
              <X className="size-[16px]" />
              <span className="font-medium text-[14px]">Cancel</span>
            </button>
          </div>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-[#3a58ef] flex items-center gap-[8px] px-[16px] py-[8px] rounded-[4px] text-white hover:bg-[#2c42d3] transition-colors"
          >
            <Edit2 className="size-[16px]" />
            <span className="font-medium text-[14px]">Edit</span>
          </button>
        )}
      </div>

      {/* Main Content */}
      <div className="flex gap-[24px] w-full flex-1 min-h-0">
        {/* Sidebar Tabs */}
        <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[24px] relative rounded-[8px] shrink-0 w-[280px] border border-[#eaecf0] overflow-y-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[40px] relative rounded-[4px] shrink-0 w-full cursor-pointer transition-colors ${
                activeTab === tab.id ? 'bg-[#314bd0]' : 'hover:bg-[#e8ecf5]'
              }`}
            >
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
                  <p className={`flex-[1_0_0] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[14px] ${
                    activeTab === tab.id ? 'text-white' : 'text-[#5d667b]'
                  }`}>
                    {tab.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto pr-4">
          {/* PERSONAL DETAILS TAB */}
          {activeTab === 'personal' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Staff Information</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Employee ID" value={formData.employeeId} isEditMode={isEditMode} onChange={(v) => updateField('employeeId', v)} />
                  <Field label="Full Name" value={formData.fullName} isEditMode={isEditMode} onChange={(v) => updateField('fullName', v)} />
                  <Field label="Official Email ID" value={formData.officialEmailId} isEditMode={isEditMode} onChange={(v) => updateField('officialEmailId', v)} />
                  <Field label="Personal Email ID" value={formData.personalEmailId} isEditMode={isEditMode} onChange={(v) => updateField('personalEmailId', v)} />
                  <Field label="Location" value={formData.location} isEditMode={isEditMode} onChange={(v) => updateField('location', v)} />
                  <Field label="Workmode Preference (Remote / Hybrid / Office)" value={formData.workmodePreference} isEditMode={isEditMode} onChange={(v) => updateField('workmodePreference', v)} />
                  <Field label="Shift Timing (seasonal, round the year)" value={formData.shiftTiming} isEditMode={isEditMode} onChange={(v) => updateField('shiftTiming', v)} />
                  <Field label="Interview Availability" value={formData.interviewAvailability} isEditMode={isEditMode} onChange={(v) => updateField('interviewAvailability', v)} />
                </div>
              </div>
            </div>
          )}

          {/* ORGANIZATION DETAILS TAB */}
          {activeTab === 'organization' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Organization Information</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Role / Designation" value={formData.roleDesignation} isEditMode={isEditMode} onChange={(v) => updateField('roleDesignation', v)} />
                  <Field label="Level" value={formData.level} isEditMode={isEditMode} onChange={(v) => updateField('level', v)} />
                  <Field label="Department" value={formData.department} isEditMode={isEditMode} onChange={(v) => updateField('department', v)} />
                  <Field label="Reporting Manager" value={formData.reportingManager} isEditMode={isEditMode} onChange={(v) => updateField('reportingManager', v)} />
                  <Field label="Number of Team Members in Team" value={formData.numberOfTeamMembers} isEditMode={isEditMode} onChange={(v) => updateField('numberOfTeamMembers', v)} />
                  <Field label="Employment Type (Full-time / Intern)" value={formData.employmentType} isEditMode={isEditMode} onChange={(v) => updateField('employmentType', v)} />
                  <Field label="Date of Joining" value={formData.dateOfJoining} isEditMode={isEditMode} onChange={(v) => updateField('dateOfJoining', v)} />
                  <Field label="Years of Experience at MYCPE" value={formData.yearsOfExperienceAtMYCPE} isEditMode={isEditMode} onChange={(v) => updateField('yearsOfExperienceAtMYCPE', v)} />
                </div>
              </div>
            </div>
          )}

          {/* PROFESSIONAL DETAILS TAB */}
          {activeTab === 'professional' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Professional Background</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Total Years of Experience (Overall + Country-wise)" value={formData.totalYearsOfExperience} isEditMode={isEditMode} onChange={(v) => updateField('totalYearsOfExperience', v)} fullWidth />
                  <Field label="Previous Organizations (Name + Role)" value={formData.previousOrganizations} isEditMode={isEditMode} onChange={(v) => updateField('previousOrganizations', v)} fullWidth />
                  <Field label="Type of Company (Firm / KPO Etc)" value={formData.typeOfCompany} isEditMode={isEditMode} onChange={(v) => updateField('typeOfCompany', v)} />
                  <Field label="Industry Served" value={formData.industryServed} isEditMode={isEditMode} onChange={(v) => updateField('industryServed', v)} />
                  <Field label="Nature of Role in Previous Experience" value={formData.natureOfRoleInPreviousExperience} isEditMode={isEditMode} onChange={(v) => updateField('natureOfRoleInPreviousExperience', v)} fullWidth />
                </div>
              </div>
            </div>
          )}

          {/* DOMAIN EXPERTISE TAB */}
          {activeTab === 'domain-expertise' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Domain Expertise & Technical Skillset</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Primary Domain" value={formData.primaryDomain} isEditMode={isEditMode} onChange={(v) => updateField('primaryDomain', v)} />
                  <Field label="Secondary Domain" value={formData.secondaryDomain} isEditMode={isEditMode} onChange={(v) => updateField('secondaryDomain', v)} />
                  <Field label="Type of Work Done (Execution, Review, Client coordination, Advisory support)" value={formData.typeOfWorkDone} isEditMode={isEditMode} onChange={(v) => updateField('typeOfWorkDone', v)} fullWidth />
                </div>
              </div>
            </div>
          )}

          {/* TOOLS & SOFTWARE TAB */}
          {activeTab === 'tools-software' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Tools, Software & Technical Skills along with levels</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Accounting Software" value={formData.accountingSoftware} isEditMode={isEditMode} onChange={(v) => updateField('accountingSoftware', v)} />
                  <Field label="Audit Software" value={formData.auditSoftware} isEditMode={isEditMode} onChange={(v) => updateField('auditSoftware', v)} />
                  <Field label="Tax Software" value={formData.taxSoftware} isEditMode={isEditMode} onChange={(v) => updateField('taxSoftware', v)} />
                  <Field label="Other Software" value={formData.otherSoftware} isEditMode={isEditMode} onChange={(v) => updateField('otherSoftware', v)} />
                  <Field label="Technical Skills" value={formData.technicalSkills} isEditMode={isEditMode} onChange={(v) => updateField('technicalSkills', v)} />
                  <Field label="Level of Proficiency in Technical Skills & Software" value={formData.levelOfProficiency} isEditMode={isEditMode} onChange={(v) => updateField('levelOfProficiency', v)} fullWidth />
                </div>
              </div>
            </div>
          )}

          {/* CLIENT EXPOSURE TAB */}
          {activeTab === 'client-exposure' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Client Exposure & Communication Readiness</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Type of Clients Worked With (Business / Firm)" value={formData.typeOfClientsWorkedWith} isEditMode={isEditMode} onChange={(v) => updateField('typeOfClientsWorkedWith', v)} />
                  <Field label="Worked as Face / EA / Both" value={formData.workedAsFaceEABoth} isEditMode={isEditMode} onChange={(v) => updateField('workedAsFaceEABoth', v)} />
                  <Field label="Level of Client Communications" value={formData.levelOfClientCommunications} isEditMode={isEditMode} onChange={(v) => updateField('levelOfClientCommunications', v)} />
                  <Field label="Communication Skills" value={formData.communicationSkills} isEditMode={isEditMode} onChange={(v) => updateField('communicationSkills', v)} />
                  <Field label="Ready for Client-facing Work" value={formData.readyForClientFacingWork} isEditMode={isEditMode} onChange={(v) => updateField('readyForClientFacingWork', v)} />
                  <Field label="Ready for End-client Allocation" value={formData.readyForEndClientAllocation} isEditMode={isEditMode} onChange={(v) => updateField('readyForEndClientAllocation', v)} />
                  <Field label="Rejections in Client Interview" value={formData.rejectionsInClientInterview} isEditMode={isEditMode} onChange={(v) => updateField('rejectionsInClientInterview', v)} />
                </div>
              </div>
            </div>
          )}

          {/* CAPACITY & AVAILABILITY TAB */}
          {activeTab === 'capacity' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Capacity & Availability</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Parallel FTE Handling Capacity" value={formData.parallelFTEHandlingCapacity} isEditMode={isEditMode} onChange={(v) => updateField('parallelFTEHandlingCapacity', v)} />
                  <Field label="Overtime Availability (Seasonal)" value={formData.overtimeAvailabilitySeasonal} isEditMode={isEditMode} onChange={(v) => updateField('overtimeAvailabilitySeasonal', v)} />
                  <Field label="Overtime Availability (Round the Year)" value={formData.overtimeAvailabilityRoundTheYear} isEditMode={isEditMode} onChange={(v) => updateField('overtimeAvailabilityRoundTheYear', v)} />
                  <Field label="Up to which level timesheet he/she can handle" value={formData.upToWhichLevelTimesheetHandle} isEditMode={isEditMode} onChange={(v) => updateField('upToWhichLevelTimesheetHandle', v)} />
                  <Field label="Availability for meetings - followup questions" value={formData.availabilityForMeetings} isEditMode={isEditMode} onChange={(v) => updateField('availabilityForMeetings', v)} fullWidth />
                </div>
              </div>
            </div>
          )}

          {/* QUALITY & PERFORMANCE TAB */}
          {activeTab === 'quality-performance' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Quality, Risk & Performance Signals</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="No. of Escalations" value={formData.noOfEscalations} isEditMode={isEditMode} onChange={(v) => updateField('noOfEscalations', v)} />
                  <Field label="No. of Appreciations" value={formData.noOfAppreciations} isEditMode={isEditMode} onChange={(v) => updateField('noOfAppreciations', v)} />
                  <Field label="Replacements" value={formData.replacements} isEditMode={isEditMode} onChange={(v) => updateField('replacements', v)} />
                  <Field label="Timesheet Terminations" value={formData.timesheetTerminations} isEditMode={isEditMode} onChange={(v) => updateField('timesheetTerminations', v)} />
                  <Field label="Suitable to Mentor Juniors" value={formData.suitableToMentorJuniors} isEditMode={isEditMode} onChange={(v) => updateField('suitableToMentorJuniors', v)} />
                </div>
              </div>
            </div>
          )}

          {/* LEARNING & GROWTH TAB */}
          {activeTab === 'learning-growth' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Learning, Growth & Knowledge Contribution</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Certification" value={formData.certification} isEditMode={isEditMode} onChange={(v) => updateField('certification', v)} />
                  <Field label="Qualification" value={formData.qualification} isEditMode={isEditMode} onChange={(v) => updateField('qualification', v)} />
                  <Field label="Learning Hours Completed" value={formData.learningHoursCompleted} isEditMode={isEditMode} onChange={(v) => updateField('learningHoursCompleted', v)} />
                  <Field label="Areas of Interest for Growth" value={formData.areasOfInterestForGrowth} isEditMode={isEditMode} onChange={(v) => updateField('areasOfInterestForGrowth', v)} />
                  <Field label="Topics of Interest" value={formData.topicsOfInterest} isEditMode={isEditMode} onChange={(v) => updateField('topicsOfInterest', v)} />
                  <Field label="Training Material Contribution" value={formData.trainingMaterialContribution} isEditMode={isEditMode} onChange={(v) => updateField('trainingMaterialContribution', v)} fullWidth />
                </div>
              </div>
            </div>
          )}

          {/* COMPLIANCE & VERIFICATION TAB */}
          {activeTab === 'compliance' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Compliance & Verification</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Background Verification" value={formData.backgroundVerification} isEditMode={isEditMode} onChange={(v) => updateField('backgroundVerification', v)} />
                </div>
              </div>
            </div>
          )}

          {/* TIMESHEET DETAILS TAB */}
          {activeTab === 'timesheet' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Timesheet Details</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Level, Domain as a Face" value={formData.levelDomainAsAFace} isEditMode={isEditMode} onChange={(v) => updateField('levelDomainAsAFace', v)} />
                  <Field label="HBR Report" value={formData.hbrReport} isEditMode={isEditMode} onChange={(v) => updateField('hbrReport', v)} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
