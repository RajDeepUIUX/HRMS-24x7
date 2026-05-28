import { useState, useEffect, useRef } from 'react';
import { useAuth } from './AuthContext';
import ResponsiveTaskRepository from './ResponsiveTaskRepository';
import CompensationView from './CompensationView';
import HolidaysView from './HolidaysViewEnhanced';
import EmployeeLoanView from './EmployeeLoanView';
import OnboardingView from './OnboardingView';
import ResponsiveActivityLogsView from './ResponsiveActivityLogsView';
import ManagementFeeChartView from './ManagementFeeChartView';
import PoliciesGuidelinesView from './PoliciesGuidelinesView';
import MyStaffView from './MyStaffView';
import AttendanceManagementView from './AttendanceManagementView';
import PIPView from './PIPView';
import BillingDetailsView from './BillingDetailsView';
import DashboardView from './DashboardView';
import CollapsibleSidebar from './CollapsibleSidebar';
import HeaderWithAuth from './HeaderWithAuth';
import TimesheetsView from './TimesheetsView';
import StaffProfilingView from './StaffProfilingView';
import StaffResignationView from './StaffResignationView';
import ClientReferralView from './ClientReferralView';
import StaffAgreementsView from './StaffAgreementsView';
import ShortlistedView from './ShortlistedView';
import BenefitsView from './BenefitsView';
import AssessmentRequestIt2PageView from './AssessmentRequestIt2PageView';
import UserProfileView from './UserProfileView';
import ReimbursementView from './ReimbursementView';
import ClientExpensesView from './ClientExpensesView';
import StaffBenefitsView from './StaffBenefitsView';
import AIAgentView from './AIAgentView';
import StaffOnboardingView from './StaffOnboardingView';

type ViewType =
  | 'dashboard'
  | 'task-repository'
  | 'compensation'
  | 'holidays'
  | 'employee-loan'
  | 'onboarding'
  | 'activity-logs'
  | 'management-fee-chart'
  | 'policies-guidelines'
  | 'my-staff'
  | 'attendance-management'
  | 'pip'
  | 'leave'
  | 'staff-resignation'
  | 'client-referral'
  | 'staff-agreements'
  | 'billing-details'
  | 'timesheets'
  | 'staff-profiling'
  | 'shortlisted'
  | 'request-technical-assessment'
  | 'benefits'
  | 'user-profile'
  | 'reimbursement'
  | 'client-expenses'
  | 'staff-benefits'
  | 'ai-agent';

export interface StaffCandidate {
  id: string;
  name: string;
  resumeId: string;
  domain: string;
  profile: string;
  assessments: {
    status: 'Not Assigned' | 'Requested' | '1 Assigned' | '2 Assigned' | 'In Progress' | 'Completed';
    count: number;
    ids: string[];
  };
  interviewDateTime: string;
  status: 'Shortlisted' | 'Scheduled' | 'Hired' | 'Not Selected';
}

interface UnifiedHRApplicationProps {
  initialView?: ViewType;
}

function getDefaultView(role?: string): ViewType {
  if (role === 'client') return 'dashboard';
  if (role === 'staff') return 'user-profile';
  return 'task-repository';
}

export default function UnifiedHRApplication({ initialView }: UnifiedHRApplicationProps) {
  const { user } = useAuth();
  const [currentView, setCurrentView] = useState<ViewType>(() => initialView ?? getDefaultView(user?.role));
  const [activeStaffData, setActiveStaffData] = useState<unknown>(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const prevRoleRef = useRef(user?.role);
  useEffect(() => {
    if (prevRoleRef.current !== undefined && prevRoleRef.current !== user?.role) {
      setCurrentView(getDefaultView(user?.role));
      setActiveStaffData(null);
    }
    prevRoleRef.current = user?.role;
  }, [user?.role]);

  const [candidates, setCandidates] = useState<StaffCandidate[]>([
    { id: '1', name: 'Albert Flores', resumeId: 'R-05469', domain: 'Accounting', profile: 'Sr. Accountant', assessments: { status: 'Completed', count: 2, ids: ['a1', 'a2'] }, interviewDateTime: '-', status: 'Shortlisted' },
    { id: '2', name: 'Darlene Robertson', resumeId: 'R-05468', domain: 'Audit', profile: 'Audit Manager', assessments: { status: '1 Assigned', count: 1, ids: ['a3'] }, interviewDateTime: '-', status: 'Shortlisted' },
    { id: '3', name: 'Ronald Richards', resumeId: 'R-05567', domain: 'Accounting', profile: 'Bookkeeper', assessments: { status: 'Not Assigned', count: 0, ids: [] }, interviewDateTime: 'Dec 05, 2024 8:00 - 8:30 AM', status: 'Scheduled' },
    { id: '4', name: 'Floyd Miles', resumeId: 'R-05544', domain: 'Tax', profile: 'Tax Associate', assessments: { status: 'Not Assigned', count: 0, ids: [] }, interviewDateTime: 'Dec 05, 2024 8:00 - 8:30 AM', status: 'Scheduled' },
    { id: '5', name: 'Arlene McCoy', resumeId: 'R-05576', domain: 'Accounting', profile: 'Accountant', assessments: { status: 'Not Assigned', count: 0, ids: [] }, interviewDateTime: 'Dec 05, 2024 8:00 - 8:30 AM', status: 'Scheduled' },
    { id: '6', name: 'Devon Lane', resumeId: 'R-05460', domain: 'Tax', profile: 'Audit Manager', assessments: { status: 'Not Assigned', count: 0, ids: [] }, interviewDateTime: 'Dec 05, 2024 8:00 - 8:30 AM', status: 'Scheduled' },
    { id: '7', name: 'Bessie Cooper', resumeId: 'R-05422', domain: 'Accounting', profile: 'Tax Consultant', assessments: { status: 'Not Assigned', count: 0, ids: [] }, interviewDateTime: 'Dec 05, 2024 8:00 - 8:30 AM', status: 'Hired' },
  ]);

  const handleNavigationChange = (view: ViewType, data?: unknown) => {
    setCurrentView(view);
    if (data !== undefined) {
      setActiveStaffData(data);
    }
  };

  // Save current view to localStorage whenever it changes
  useEffect(() => {
    const viewToSave = currentView === 'request-technical-assessment' ? 'shortlisted' : currentView === 'ai-agent' ? 'task-repository' : currentView;
    localStorage.setItem('hr-current-view', viewToSave);
  }, [currentView]);

  const handleSidebarToggle = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const renderMainContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView onNavigationChange={handleNavigationChange} />;
      case 'billing-details':
        return <BillingDetailsView onNavigationChange={handleNavigationChange} />;
      case 'my-staff':
        return <MyStaffView onNavigationChange={handleNavigationChange} />;
      case 'compensation':
        return <CompensationView onNavigationChange={handleNavigationChange} />;
      case 'holidays':
        return <HolidaysView onNavigationChange={handleNavigationChange} />;
      case 'employee-loan':
        return <EmployeeLoanView onNavigationChange={handleNavigationChange} />;
      case 'onboarding':
        if (user?.role === 'staff') return <StaffOnboardingView />;
        return <OnboardingView onNavigationChange={handleNavigationChange} />;
      case 'activity-logs':
        return <ResponsiveActivityLogsView onNavigationChange={handleNavigationChange} />;
      case 'management-fee-chart':
        return <ManagementFeeChartView onNavigationChange={handleNavigationChange} />;
      case 'policies-guidelines':
        return <PoliciesGuidelinesView onNavigationChange={handleNavigationChange} />;
      case 'attendance-management':
        return <AttendanceManagementView onNavigationChange={handleNavigationChange} />;
      case 'pip':
        return <PIPView onNavigationChange={handleNavigationChange} />;
      case 'leave':
        return <AttendanceManagementView onNavigationChange={handleNavigationChange} />;
      case 'staff-resignation':
        return <StaffResignationView onNavigationChange={handleNavigationChange} />;
      case 'client-referral':
        return <ClientReferralView onNavigationChange={handleNavigationChange} />;
      case 'staff-agreements':
        return <StaffAgreementsView onNavigationChange={handleNavigationChange} sidebarExpanded={sidebarExpanded} />;
      case 'timesheets':
        return <TimesheetsView onNavigationChange={handleNavigationChange} />;
      case 'staff-profiling':
        return <StaffProfilingView onNavigationChange={handleNavigationChange} />;
      case 'shortlisted':
        return (
          <ShortlistedView
            onNavigationChange={handleNavigationChange}
            candidates={candidates}
            initialData={activeStaffData as { showSuccessToast?: boolean } | undefined}
          />
        );
      case 'request-technical-assessment':
        return (
          <AssessmentRequestIt2PageView
            candidates={activeStaffData as StaffCandidate[]}
            onBack={() => handleNavigationChange('shortlisted')}
            onSuccess={(assignments) => {
              if (assignments) {
                setCandidates(prev =>
                  prev.map(c => {
                    const assignment = assignments[c.id];
                    if (assignment) {
                      const newIds = [...c.assessments.ids, ...assignment];
                      const newCount = newIds.length;
                      const newStatus: '1 Assigned' | '2 Assigned' = newCount >= 2 ? '2 Assigned' : '1 Assigned';
                      return { ...c, assessments: { ...c.assessments, ids: newIds, count: newCount, status: newStatus } };
                    }
                    return c;
                  })
                );
              }
              handleNavigationChange('shortlisted', { showSuccessToast: true });
            }}
          />
        );
      case 'reimbursement':
        if (user?.role !== 'staff') return <ResponsiveTaskRepository onNavigationChange={handleNavigationChange} />;
        return <ReimbursementView onNavigationChange={handleNavigationChange} />;
      case 'client-expenses':
        if (user?.role !== 'client') return <ResponsiveTaskRepository onNavigationChange={handleNavigationChange} />;
        return <ClientExpensesView onNavigationChange={handleNavigationChange} />;
      case 'staff-benefits':
        if (user?.role !== 'staff') return <ResponsiveTaskRepository onNavigationChange={handleNavigationChange} />;
        return <StaffBenefitsView />;
      case 'ai-agent':
        return <AIAgentView />;
      case 'benefits':
        return <BenefitsView onNavigationChange={handleNavigationChange} />;
      case 'user-profile':
        return <UserProfileView />;
      case 'task-repository':
      default:
        return <ResponsiveTaskRepository onNavigationChange={handleNavigationChange} />;
    }
  };

  return (
    <div className="w-screen h-screen bg-[#f2f4f7] flex flex-col relative overflow-hidden">
      {/* Persistent Header */}
      <div className="h-16 flex-shrink-0 relative z-50 overflow-visible">
        <HeaderWithAuth
          onOpenAI={() => handleNavigationChange('ai-agent')}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex min-h-0">
        {/* Persistent Sidebar */}
        <div className="flex-shrink-0 overflow-hidden pt-[16px] pr-[16px] pb-[16px] pl-[16px] mb-[16px] relative">
          <CollapsibleSidebar
            isExpanded={sidebarExpanded}
            onToggle={handleSidebarToggle}
            onNavigationChange={handleNavigationChange}
            currentView={currentView === 'request-technical-assessment' ? 'shortlisted' : currentView === 'ai-agent' ? '' : currentView}
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0 pt-[16px] pr-[16px] pb-[16px] pl-[0px]">
          {renderMainContent()}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#eaecf0] h-12 flex items-center px-6 flex-shrink-0">
        <p className="text-sm text-[#101828]">
          ©2024 - <span className="font-medium">www.my-cpe.com</span> All rights reserved
        </p>
      </footer>
    </div>
  );
}
