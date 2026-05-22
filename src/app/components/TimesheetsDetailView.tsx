import { useState } from 'react';
import { ChevronLeft, Edit2, Save, X } from 'lucide-react';

interface TimesheetsDetailViewProps {
  clientName: string;
  onBack?: () => void;
}

type TabType = 'client-info' | 'offshoring' | 'business-info' | 'others' | 'partner-info' | 'financial' | 'ma';

// Field component for displaying fields
interface FieldProps {
  label: string;
  value: string;
  isEditMode: boolean;
  onChange: (value: string) => void;
}

function Field({ label, value, isEditMode, onChange }: FieldProps) {
  return (
    <div className="flex flex-col gap-[6px]">
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

export default function TimesheetsDetailView({ clientName, onBack }: TimesheetsDetailViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('client-info');
  const [isEditMode, setIsEditMode] = useState(false);
  
  const [formData, setFormData] = useState({
    // Client Information
    nameOfFirm: 'Fair & Company CPAs PLLC',
    subCategory: 'CPA Firm',
    firstName: 'John',
    lastName: 'Fair',
    email: 'john.fair@faircompany.com',
    yearOfEstablishment: '2010',
    influencers: 'John Fair, Sarah Fair',
    noOfOnshoreStaff: '25',
    noOfEmployees: '45',
    country: 'United States',
    state: 'California',
    city: 'San Francisco',
    // Offices
    noOfOffices: '2',
    address1: '123 Market Street',
    address2: 'Suite 500',
    zipCode: '94102',
    officeCountry: 'United States',
    officeState: 'California',
    officeCity: 'San Francisco',
    timezone: 'PST',
    pointOfContacts: 'John Fair, Sarah Fair',
    onshoreAnchor: 'John Fair',
    // Social Media
    website: 'www.faircompanycpas.com',
    // Alliances
    alliances: 'AICPA, CalCPA',
    // Industry Served
    industryClientType: 'Technology, Healthcare, Real Estate',
    // Services
    services: 'Tax, Audit, Advisory',
    // Offshoring
    serviceAreas: 'Tax Preparation, Bookkeeping, Payroll',
    // Business Information
    noOfClient2026: '150',
    midLargeSizeBusiness: '20',
    smallMidSizeBusiness: '80',
    ultraSmallBusiness: '50',
    walkIn: '10',
    avgRevenuePerClient2026: '$15,000',
    avgRevenuePerStaff2026: '$120,000',
    noOfSeasonalStaff2026: '10',
    // Assignments/Clients
    individualTaxReturns: '300',
    businessTaxReturns: '150',
    annualWriteUps: '75',
    monthlyAccounting: '40',
    quarterlyAccounting: '30',
    cloudOutsourcedAccounting: '25',
    financialAudits: '15',
    payrollClients: '50',
    stateLocalTaxClients: '60',
    reviewsCompilations: '20',
    trustEstate1041: '25',
    giftEstate709706: '10',
    nonProfit990: '15',
    lrpAudits: '5',
    socReports: '3',
    sox: '2',
    nonProfitAudits: '8',
    businessValuation: '10',
    rdTaxCredits: '12',
    costSegregation: '8',
    wfh: 'Yes',
    hybrid: 'Yes',
    earlyFriday: 'Yes',
    // Others
    fourDaysWorkWeek: 'No',
    noBonusPolicy: 'No',
    crossReviewTraining: 'Yes',
    geoDiversification: 'Yes',
    overtimeWorkingOtherClients: 'Yes',
    roundYearOvertimeWorking: 'Yes',
    seasonalOvertimeWorking: 'Yes',
    softwaresUsed: 'QuickBooks, Xero, CCH, Lacerte',
    offshoreLocationPreference: 'India, Philippines',
    // Partner Info
    partnerFirstName: 'John',
    partnerLastName: 'Fair',
    partnerType: 'Managing Partner',
    partnerAge: '45',
    partnerDepartment: 'Tax',
    partnerExpertise: 'Tax Planning, Business Advisory',
    partnerEmail: 'john.fair@faircompany.com',
    baseCompensation: '$250,000',
    // Financial
    noOfStaffOnshore: '25',
    noOfStaffOffshore: '20',
    totalNoOfStaff: '45',
    noOfClientsServed: '150',
    // M & A
    anyMergersAcquisition: 'Yes - Acquired Small CPA Firm in 2024',
    noOfMergersAcquisition: '1',
    numberOfPartners: '3',
    otherServices: 'Advisory Services, CFO Services'
  });

  const handleEdit = () => setIsEditMode(true);
  const handleSave = () => setIsEditMode(false);
  const handleCancel = () => setIsEditMode(false);

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const tabs = [
    { id: 'client-info' as TabType, label: 'Client Information' },
    { id: 'offshoring' as TabType, label: 'Offshoring' },
    { id: 'business-info' as TabType, label: 'Business Information' },
    { id: 'others' as TabType, label: 'Others' },
    { id: 'partner-info' as TabType, label: 'Partner Info' },
    { id: 'financial' as TabType, label: 'Financial' },
    { id: 'ma' as TabType, label: 'M & A' }
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
          {clientName}
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
        <div className="bg-[#f9fafb] content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[24px] relative rounded-[8px] shrink-0 w-[250px] border border-[#eaecf0]">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`h-[40px] relative rounded-[4px] shrink-0 w-full cursor-pointer transition-colors ${
                activeTab === tab.id ? 'bg-[#314bd0]' : 'hover:bg-[#e8ecf5]'
              }`}
            >
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
                  <p className={`flex-[1_0_0] font-medium leading-[20px] min-h-px min-w-px not-italic relative text-[14px] whitespace-pre-wrap ${
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
          {/* CLIENT INFORMATION TAB */}
          {activeTab === 'client-info' && (
            <div className="flex flex-col gap-[32px]">
              {/* Firm Details */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Firm Details</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Name of the Firm" value={formData.nameOfFirm} isEditMode={isEditMode} onChange={(v) => updateField('nameOfFirm', v)} />
                  <Field label="Sub-Category" value={formData.subCategory} isEditMode={isEditMode} onChange={(v) => updateField('subCategory', v)} />
                  <Field label="First Name" value={formData.firstName} isEditMode={isEditMode} onChange={(v) => updateField('firstName', v)} />
                  <Field label="Last Name" value={formData.lastName} isEditMode={isEditMode} onChange={(v) => updateField('lastName', v)} />
                  <Field label="Email" value={formData.email} isEditMode={isEditMode} onChange={(v) => updateField('email', v)} />
                  <Field label="Year of Establishment" value={formData.yearOfEstablishment} isEditMode={isEditMode} onChange={(v) => updateField('yearOfEstablishment', v)} />
                  <Field label="Influencers" value={formData.influencers} isEditMode={isEditMode} onChange={(v) => updateField('influencers', v)} />
                  <Field label="No. of Onshore Staff" value={formData.noOfOnshoreStaff} isEditMode={isEditMode} onChange={(v) => updateField('noOfOnshoreStaff', v)} />
                  <Field label="No. of Employees" value={formData.noOfEmployees} isEditMode={isEditMode} onChange={(v) => updateField('noOfEmployees', v)} />
                  <Field label="Country" value={formData.country} isEditMode={isEditMode} onChange={(v) => updateField('country', v)} />
                  <Field label="State" value={formData.state} isEditMode={isEditMode} onChange={(v) => updateField('state', v)} />
                  <Field label="City" value={formData.city} isEditMode={isEditMode} onChange={(v) => updateField('city', v)} />
                </div>
              </div>

              {/* Offices */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Offices</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="No. of Offices" value={formData.noOfOffices} isEditMode={isEditMode} onChange={(v) => updateField('noOfOffices', v)} />
                  <Field label="Address 1" value={formData.address1} isEditMode={isEditMode} onChange={(v) => updateField('address1', v)} />
                  <Field label="Address 2" value={formData.address2} isEditMode={isEditMode} onChange={(v) => updateField('address2', v)} />
                  <Field label="Zip Code" value={formData.zipCode} isEditMode={isEditMode} onChange={(v) => updateField('zipCode', v)} />
                  <Field label="Country" value={formData.officeCountry} isEditMode={isEditMode} onChange={(v) => updateField('officeCountry', v)} />
                  <Field label="State" value={formData.officeState} isEditMode={isEditMode} onChange={(v) => updateField('officeState', v)} />
                  <Field label="City" value={formData.officeCity} isEditMode={isEditMode} onChange={(v) => updateField('officeCity', v)} />
                  <Field label="Timezone" value={formData.timezone} isEditMode={isEditMode} onChange={(v) => updateField('timezone', v)} />
                  <Field label="Point of Contacts" value={formData.pointOfContacts} isEditMode={isEditMode} onChange={(v) => updateField('pointOfContacts', v)} />
                  <Field label="Onshore Anchor" value={formData.onshoreAnchor} isEditMode={isEditMode} onChange={(v) => updateField('onshoreAnchor', v)} />
                </div>
              </div>

              {/* Social Media Details */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Social Media Details</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Website" value={formData.website} isEditMode={isEditMode} onChange={(v) => updateField('website', v)} />
                </div>
              </div>

              {/* Alliances */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Alliances</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Alliances" value={formData.alliances} isEditMode={isEditMode} onChange={(v) => updateField('alliances', v)} />
                </div>
              </div>

              {/* Industry Served */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Industry Served</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Industry / Client Type" value={formData.industryClientType} isEditMode={isEditMode} onChange={(v) => updateField('industryClientType', v)} />
                </div>
              </div>

              {/* Services Provided */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Services Provided</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Services" value={formData.services} isEditMode={isEditMode} onChange={(v) => updateField('services', v)} />
                </div>
              </div>
            </div>
          )}

          {/* OFFSHORING TAB */}
          {activeTab === 'offshoring' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Offshore Staff Details (Year-wise)</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Service Areas" value={formData.serviceAreas} isEditMode={isEditMode} onChange={(v) => updateField('serviceAreas', v)} />
                </div>
              </div>
            </div>
          )}

          {/* BUSINESS INFORMATION TAB */}
          {activeTab === 'business-info' && (
            <div className="flex flex-col gap-[32px]">
              {/* Client Served year wise */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Client Served year wise</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="No. of Client (2026)" value={formData.noOfClient2026} isEditMode={isEditMode} onChange={(v) => updateField('noOfClient2026', v)} />
                </div>
              </div>

              {/* Client Served - Businesses */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Client Served - Businesses</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Mid-Large Size Business (Greater than 10 Million)" value={formData.midLargeSizeBusiness} isEditMode={isEditMode} onChange={(v) => updateField('midLargeSizeBusiness', v)} />
                  <Field label="Small & Mid Size Business (1 Million to 10 Million)" value={formData.smallMidSizeBusiness} isEditMode={isEditMode} onChange={(v) => updateField('smallMidSizeBusiness', v)} />
                  <Field label="Ultra Small Business (Less than 1 Million)" value={formData.ultraSmallBusiness} isEditMode={isEditMode} onChange={(v) => updateField('ultraSmallBusiness', v)} />
                  <Field label="Walk-In (Low Ticket Size Clients - Businesses)" value={formData.walkIn} isEditMode={isEditMode} onChange={(v) => updateField('walkIn', v)} />
                  <Field label="Average Revenue per Client - 2026" value={formData.avgRevenuePerClient2026} isEditMode={isEditMode} onChange={(v) => updateField('avgRevenuePerClient2026', v)} />
                  <Field label="Average Revenue per Staff - 2026" value={formData.avgRevenuePerStaff2026} isEditMode={isEditMode} onChange={(v) => updateField('avgRevenuePerStaff2026', v)} />
                  <Field label="No. of Seasonal Staff Hired - 2026" value={formData.noOfSeasonalStaff2026} isEditMode={isEditMode} onChange={(v) => updateField('noOfSeasonalStaff2026', v)} />
                </div>
              </div>

              {/* No. of Assignments / Clients */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">No. of Assignments / Clients</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Individual Tax Returns" value={formData.individualTaxReturns} isEditMode={isEditMode} onChange={(v) => updateField('individualTaxReturns', v)} />
                  <Field label="Business Tax Returns" value={formData.businessTaxReturns} isEditMode={isEditMode} onChange={(v) => updateField('businessTaxReturns', v)} />
                  <Field label="Annual Write-Ups" value={formData.annualWriteUps} isEditMode={isEditMode} onChange={(v) => updateField('annualWriteUps', v)} />
                  <Field label="Monthly Accounting" value={formData.monthlyAccounting} isEditMode={isEditMode} onChange={(v) => updateField('monthlyAccounting', v)} />
                  <Field label="Quarterly Accounting" value={formData.quarterlyAccounting} isEditMode={isEditMode} onChange={(v) => updateField('quarterlyAccounting', v)} />
                  <Field label="Cloud / Outsourced Accounting" value={formData.cloudOutsourcedAccounting} isEditMode={isEditMode} onChange={(v) => updateField('cloudOutsourcedAccounting', v)} />
                  <Field label="Financial Audits" value={formData.financialAudits} isEditMode={isEditMode} onChange={(v) => updateField('financialAudits', v)} />
                  <Field label="Payroll Clients" value={formData.payrollClients} isEditMode={isEditMode} onChange={(v) => updateField('payrollClients', v)} />
                  <Field label="State & Local Tax Clients" value={formData.stateLocalTaxClients} isEditMode={isEditMode} onChange={(v) => updateField('stateLocalTaxClients', v)} />
                  <Field label="Reviews & Compilations" value={formData.reviewsCompilations} isEditMode={isEditMode} onChange={(v) => updateField('reviewsCompilations', v)} />
                  <Field label="1041 (Trust & Estate)" value={formData.trustEstate1041} isEditMode={isEditMode} onChange={(v) => updateField('trustEstate1041', v)} />
                  <Field label="709/706 Gift / Estate)" value={formData.giftEstate709706} isEditMode={isEditMode} onChange={(v) => updateField('giftEstate709706', v)} />
                  <Field label="990 (Non-Profit)" value={formData.nonProfit990} isEditMode={isEditMode} onChange={(v) => updateField('nonProfit990', v)} />
                  <Field label="LRP Audits" value={formData.lrpAudits} isEditMode={isEditMode} onChange={(v) => updateField('lrpAudits', v)} />
                  <Field label="SOC Reports" value={formData.socReports} isEditMode={isEditMode} onChange={(v) => updateField('socReports', v)} />
                  <Field label="SOX" value={formData.sox} isEditMode={isEditMode} onChange={(v) => updateField('sox', v)} />
                  <Field label="Non-Profit Audits" value={formData.nonProfitAudits} isEditMode={isEditMode} onChange={(v) => updateField('nonProfitAudits', v)} />
                  <Field label="Business Valuation" value={formData.businessValuation} isEditMode={isEditMode} onChange={(v) => updateField('businessValuation', v)} />
                  <Field label="R&D Tax Credits" value={formData.rdTaxCredits} isEditMode={isEditMode} onChange={(v) => updateField('rdTaxCredits', v)} />
                  <Field label="Cost Segregation" value={formData.costSegregation} isEditMode={isEditMode} onChange={(v) => updateField('costSegregation', v)} />
                  <Field label="WFH" value={formData.wfh} isEditMode={isEditMode} onChange={(v) => updateField('wfh', v)} />
                  <Field label="Hybrid" value={formData.hybrid} isEditMode={isEditMode} onChange={(v) => updateField('hybrid', v)} />
                  <Field label="Early Friday (coming early & Leaving Early)" value={formData.earlyFriday} isEditMode={isEditMode} onChange={(v) => updateField('earlyFriday', v)} />
                </div>
              </div>
            </div>
          )}

          {/* OTHERS TAB */}
          {activeTab === 'others' && (
            <div className="flex flex-col gap-[32px]">
              {/* Leaves & Policies */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Leaves & Policies</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Four days work week" value={formData.fourDaysWorkWeek} isEditMode={isEditMode} onChange={(v) => updateField('fourDaysWorkWeek', v)} />
                  <Field label="No Bonus Policy" value={formData.noBonusPolicy} isEditMode={isEditMode} onChange={(v) => updateField('noBonusPolicy', v)} />
                  <Field label="Cross Review / Training" value={formData.crossReviewTraining} isEditMode={isEditMode} onChange={(v) => updateField('crossReviewTraining', v)} />
                  <Field label="Geo-Diversification Flexibility" value={formData.geoDiversification} isEditMode={isEditMode} onChange={(v) => updateField('geoDiversification', v)} />
                  <Field label="Overtime Working (With Other Clients)" value={formData.overtimeWorkingOtherClients} isEditMode={isEditMode} onChange={(v) => updateField('overtimeWorkingOtherClients', v)} />
                  <Field label="Round the Year Overtime Working (E Available)" value={formData.roundYearOvertimeWorking} isEditMode={isEditMode} onChange={(v) => updateField('roundYearOvertimeWorking', v)} />
                  <Field label="Seasonal Overtime Working (Existing Clients)" value={formData.seasonalOvertimeWorking} isEditMode={isEditMode} onChange={(v) => updateField('seasonalOvertimeWorking', v)} />
                </div>
              </div>

              {/* Softwares */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Softwares</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Softwares Used" value={formData.softwaresUsed} isEditMode={isEditMode} onChange={(v) => updateField('softwaresUsed', v)} />
                </div>
              </div>

              {/* Offshore Location Preference */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Offshore Location Preference</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Offshore Location Preference (Cities)" value={formData.offshoreLocationPreference} isEditMode={isEditMode} onChange={(v) => updateField('offshoreLocationPreference', v)} />
                </div>
              </div>
            </div>
          )}

          {/* PARTNER INFO TAB */}
          {activeTab === 'partner-info' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Partner Information</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="First Name" value={formData.partnerFirstName} isEditMode={isEditMode} onChange={(v) => updateField('partnerFirstName', v)} />
                  <Field label="Last Name" value={formData.partnerLastName} isEditMode={isEditMode} onChange={(v) => updateField('partnerLastName', v)} />
                  <Field label="Type" value={formData.partnerType} isEditMode={isEditMode} onChange={(v) => updateField('partnerType', v)} />
                  <Field label="Age" value={formData.partnerAge} isEditMode={isEditMode} onChange={(v) => updateField('partnerAge', v)} />
                  <Field label="Department" value={formData.partnerDepartment} isEditMode={isEditMode} onChange={(v) => updateField('partnerDepartment', v)} />
                  <Field label="Expertise" value={formData.partnerExpertise} isEditMode={isEditMode} onChange={(v) => updateField('partnerExpertise', v)} />
                  <Field label="Email" value={formData.partnerEmail} isEditMode={isEditMode} onChange={(v) => updateField('partnerEmail', v)} />
                  <Field label="Base Compensation (If Any)" value={formData.baseCompensation} isEditMode={isEditMode} onChange={(v) => updateField('baseCompensation', v)} />
                </div>
              </div>
            </div>
          )}

          {/* FINANCIAL TAB */}
          {activeTab === 'financial' && (
            <div className="flex flex-col gap-[32px]">
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Business Information - Financial Details</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="No. of Staff (Onshore)" value={formData.noOfStaffOnshore} isEditMode={isEditMode} onChange={(v) => updateField('noOfStaffOnshore', v)} />
                  <Field label="No. of Staff (Offshore)" value={formData.noOfStaffOffshore} isEditMode={isEditMode} onChange={(v) => updateField('noOfStaffOffshore', v)} />
                  <Field label="Total No. of Staff" value={formData.totalNoOfStaff} isEditMode={isEditMode} onChange={(v) => updateField('totalNoOfStaff', v)} />
                  <Field label="No. of Clients Served" value={formData.noOfClientsServed} isEditMode={isEditMode} onChange={(v) => updateField('noOfClientsServed', v)} />
                </div>
              </div>
            </div>
          )}

          {/* M & A TAB */}
          {activeTab === 'ma' && (
            <div className="flex flex-col gap-[32px]">
              {/* Mergers & Acquisition */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Mergers & Acquisition</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <div className="col-span-3">
                    <Field label="Any Mergers & Acquisition Done in Last 3 Years" value={formData.anyMergersAcquisition} isEditMode={isEditMode} onChange={(v) => updateField('anyMergersAcquisition', v)} />
                  </div>
                  <Field label="No. of Mergers & Acquisition" value={formData.noOfMergersAcquisition} isEditMode={isEditMode} onChange={(v) => updateField('noOfMergersAcquisition', v)} />
                </div>
              </div>

              {/* Number of Partners */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Number of Partners</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Number of Partners" value={formData.numberOfPartners} isEditMode={isEditMode} onChange={(v) => updateField('numberOfPartners', v)} />
                </div>
              </div>

              {/* Using our other services */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-semibold leading-[24px] text-[#101828] text-[16px]">Using our other services</p>
                <div className="grid grid-cols-3 gap-x-[24px] gap-y-[16px]">
                  <Field label="Dropdown of our services" value={formData.otherServices} isEditMode={isEditMode} onChange={(v) => updateField('otherServices', v)} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
