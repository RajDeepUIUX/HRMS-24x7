import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-99neywx44h";
import svgPathsCollapsed from "../imports/svg-qxiaos2ly5";
import imgFrame1149 from "figma:asset/9d24cedab8344e96204e73d7b051c8e8b97069f2.png";
import { useAuth } from './AuthContext';

// Add missing SVG paths
const leftChevron = "M6.25 10L12.5 3.75L13.375 4.625L8 10L13.375 15.375L12.5 16.25L6.25 10Z";
const rightChevron = "M13.75 10L7.50002 16.25L6.62502 15.375L12 10L6.62502 4.625L7.50002 3.75L13.75 10Z";

interface CollapsibleSidebarProps {
  isExpanded?: boolean;
  onToggle?: () => void;
  onNavigationChange?: (view: string) => void;
  currentView?: string;
}

function ProfileImage() {
  return (
    <div className="pointer-events-none relative rounded-[50px] shrink-0 size-[44px]">
      <div className="absolute inset-0 overflow-hidden rounded-[50px]">
        <img alt="" className="absolute h-[273.46%] left-[-49.39%] max-w-none top-[-31.38%] w-[182.5%]" src={imgFrame1149} />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-[50px]" />
    </div>
  );
}

function ExpandedSidebar({ onToggle, onNavigationChange, currentView }: { onToggle: () => void; onNavigationChange?: (view: string) => void; currentView?: string }) {
  const { user } = useAuth();
  
  const getSectionForView = (view?: string): string => {
    if (!view) return '';
    if (view === 'reimbursement') return 'payroll';
    if (view === 'staff-benefits') return 'staff-module';
    if (view === 'client-expenses') return 'finance';
    if (view === 'timesheets' || view === 'staff-profiling' || view === 'resignation' || view === 'tickets' || view === 'dinner' || view === 'relevant-contacts' || view === 'asset' || view === 'tutorials' || view === 'voip-directory' || view === 'cab-request') return 'support';
    if (view === 'shortlisted') return 'hire-staff';
    if (view === 'my-staff' || view === 'compensation' || view === 'attendance-management' || view === 'holidays' || view === 'pip' || view === 'leave' || view === 'staff-resignation' || view === 'policies-guidelines' || view === 'client-referral' || view === 'staff-agreements' || view === 'onboarding' || view === 'employee-loan' || view === 'task-repository' || view === 'management-fee-chart' || view === 'activity-logs' || view === 'benefits') return 'human-resources';
    return '';
  };

  const [expandedSection, setExpandedSection] = useState<string>(getSectionForView(currentView));

  useEffect(() => {
    const section = getSectionForView(currentView);
    if (section) setExpandedSection(section);
  }, [currentView]);

  // Define menu items based on user role
  const getMenuItems = () => {
    if (user?.role === 'manager') {
      return [
        { id: 'dashboard', icon: svgPaths.pbcf2100, label: 'Dashboard', active: currentView === 'dashboard' },
        {
          id: 'human-resources',
          icon: svgPaths.p3a3fe080,
          label: 'Human Resources',
          active: currentView === 'my-staff' || currentView === 'compensation' || currentView === 'attendance-management' || currentView === 'holidays' || currentView === 'pip' || currentView === 'leave' || currentView === 'staff-resignation' || currentView === 'policies-guidelines' || currentView === 'benefits',
          hasSubmenu: true,
          submenu: [
            { id: 'my-staff', label: 'My Staff', active: currentView === 'my-staff' },
            { id: 'compensation', label: 'Compensation', active: currentView === 'compensation' },
            { id: 'attendance-management', label: 'Attendance Management', active: currentView === 'attendance-management' },
            { id: 'holidays', label: 'Holidays', active: currentView === 'holidays' },
            { id: 'pip', label: 'PIP', active: currentView === 'pip' },
            { id: 'leave', label: 'Leave Management', active: currentView === 'leave' },
            { id: 'staff-resignation', label: 'Staff Resignation', active: currentView === 'staff-resignation' },
            { id: 'policies-guidelines', label: 'Policies & Guidelines', active: currentView === 'policies-guidelines' },
            { id: 'benefits', label: 'Benefits', active: currentView === 'benefits' },
          ]
        },
        {
          id: 'hire-staff',
          icon: svgPaths.p25edc380,
          label: 'Hire New Staff',
          active: currentView === 'shortlisted',
          hasSubmenu: true,
          submenu: [
            { id: 'shortlisted', label: 'Shortlisted', active: currentView === 'shortlisted' },
          ]
        },
        { id: 'task-repository', icon: svgPaths.p20bd1f00, label: 'Task Repository', active: currentView === 'task-repository' },
        { id: 'activity-logs', icon: svgPaths.p1f4ad080, label: 'Activity Logs', active: currentView === 'activity-logs' },
        { id: 'performance', icon: svgPaths.p2a2bd600, label: 'Performance Management', active: false, hasSubmenu: true },
        { id: 'reports', icon: svgPaths.p15aae080, label: 'Reports', active: false, hasSubmenu: true },
        { id: 'support', icon: svgPaths.p2b4b7980, label: 'Support', active: false, hasSubmenu: true },
      ];
    }
    if (user?.role === 'staff') {
      // Staff menu items
      return [
        { id: 'user-profile', icon: svgPaths.p3048fe00, label: 'My Profile', active: currentView === 'user-profile' },
        { id: 'dashboard', icon: svgPaths.pbcf2100, label: 'Dashboard', active: currentView === 'dashboard' },
        { id: 'onboarding', icon: svgPaths.p3a3fe080, label: 'Onboarding', active: currentView === 'onboarding' },
        { id: 'staff-module', icon: svgPaths.p3a3fe080, label: 'Staff', active: currentView === 'staff-benefits', hasSubmenu: true, submenu: [
            { id: 'staff-benefits', label: 'Benefits', active: currentView === 'staff-benefits' },
          ]
        },
        { id: 'projects', icon: svgPaths.p20bd1f00, label: 'Projects', active: false, hasSubmenu: true },
        { id: 'tasks', icon: svgPaths.p20bd1f00, label: 'Tasks', active: false, hasSubmenu: true },
        { id: 'career', icon: svgPaths.p20bd1f00, label: 'Career', active: false, hasSubmenu: true },
        { id: 'learning-dev', icon: svgPaths.p11bef680, label: 'L & D', active: false, hasSubmenu: true },
        { id: 'attendance-leave', icon: svgPaths.p20bd1f00, label: 'Attendance & Leave', active: false, hasSubmenu: true },
        {
          id: 'payroll',
          icon: svgPaths.p20bd1f00,
          label: 'Payroll',
          active: currentView === 'reimbursement',
          hasSubmenu: true,
          submenu: [
            { id: 'reimbursement', label: 'Reimbursement', active: currentView === 'reimbursement' },
          ]
        },
        { id: 'mycpe-updates', icon: svgPaths.p20bd1f00, label: 'MyCPE One Updates', active: false, hasSubmenu: true },
        { id: 'recruitment', icon: svgPaths.p25edc380, label: 'Recruitment', active: false, hasSubmenu: true },
        { 
          id: 'support', 
          icon: svgPaths.p2b4b7980, 
          label: 'Support', 
          active: currentView === 'resignation' || currentView === 'tickets' || currentView === 'dinner' || currentView === 'timesheets' || currentView === 'staff-profiling' || currentView === 'relevant-contacts' || currentView === 'asset' || currentView === 'tutorials' || currentView === 'voip-directory' || currentView === 'cab-request',
          hasSubmenu: true,
          submenu: [
            { id: 'resignation', label: 'Resignation', active: currentView === 'resignation' },
            { id: 'tickets', label: 'Tickets', active: currentView === 'tickets' },
            { id: 'dinner', label: 'Dinner', active: currentView === 'dinner' },
            { id: 'timesheets', label: 'Timesheets', active: currentView === 'timesheets' },
            { id: 'staff-profiling', label: 'Staff Profiling', active: currentView === 'staff-profiling' },
            { id: 'relevant-contacts', label: 'Relevant Contacts', active: currentView === 'relevant-contacts' },
            { id: 'asset', label: 'Asset', active: currentView === 'asset' },
            { id: 'tutorials', label: 'Tutorials', active: currentView === 'tutorials' },
            { id: 'voip-directory', label: 'VOIP Directory', active: currentView === 'voip-directory' },
            { id: 'cab-request', label: 'Cab Request', active: currentView === 'cab-request' }
          ]
        },
      ];
    } else {
      // Client/Manager menu items (existing)
      return [
        { id: 'dashboard', icon: svgPaths.pbcf2100, label: 'Dashboard', active: currentView === 'dashboard' },
        { id: 'company', icon: svgPaths.p3048fe00, label: 'Company Profile', active: false },
        { id: 'clients', icon: svgPaths.p1312d880, label: "Client's Feed", active: false },
        {
          id: 'billing-details',
          icon: svgPaths.p20bd1f00,
          label: 'Billing Details',
          active: currentView === 'billing-details'
        },
        {
          id: 'finance',
          icon: svgPaths.p20bd1f00,
          label: 'Finance',
          active: currentView === 'client-expenses',
          hasSubmenu: true,
          submenu: [
            { id: 'client-expenses', label: 'Expenses and Reimbursement', active: currentView === 'client-expenses' },
          ]
        },
        {
          id: 'human-resources', 
          icon: svgPaths.p3a3fe080, 
          label: 'Human Resources', 
          active: currentView === 'my-staff' || currentView === 'compensation' || currentView === 'attendance-management' || currentView === 'holidays' || currentView === 'pip' || currentView === 'leave' || currentView === 'staff-resignation' || currentView === 'policies-guidelines' || currentView === 'client-referral' || currentView === 'staff-agreements' || currentView === 'onboarding' || currentView === 'employee-loan' || currentView === 'appraisals' || currentView === 'task-repository' || currentView === 'management-fee-chart' || currentView === 'activity-logs' || currentView === 'timesheets' || currentView === 'staff-profiling' || currentView === 'benefits',
          hasSubmenu: true,
          submenu: [
            { id: 'my-staff', label: 'My Staff', active: currentView === 'my-staff' },
            { id: 'compensation', label: 'Compensation', active: currentView === 'compensation' },
            { id: 'attendance-management', label: 'Attendance Management', active: currentView === 'attendance-management' },
            { id: 'holidays', label: 'Holidays', active: currentView === 'holidays' },
            { id: 'pip', label: 'PIP', active: currentView === 'pip' },
            { id: 'leave', label: 'Leave Management', active: currentView === 'leave' },
            { id: 'staff-resignation', label: 'Staff Resignation', active: currentView === 'staff-resignation' },
            { id: 'policies-guidelines', label: 'Policies & Guidelines', active: currentView === 'policies-guidelines' },
            { id: 'client-referral', label: 'Client Referral', active: currentView === 'client-referral' },
            { id: 'staff-agreements', label: 'Staff Agreements', active: currentView === 'staff-agreements' },
            { id: 'onboarding', label: 'Onboarding', active: currentView === 'onboarding' },
            { id: 'employee-loan', label: 'Employee Loan', active: currentView === 'employee-loan' },
            { id: 'appraisals', label: 'Appraisals', active: currentView === 'appraisals' },
            { id: 'task-repository', label: 'Task Repository', active: currentView === 'task-repository' },
            { id: 'management-fee-chart', label: 'Management Fee Chart', active: currentView === 'management-fee-chart' },
            { id: 'activity-logs', label: 'Activity Logs', active: currentView === 'activity-logs' },
            { id: 'benefits', label: 'Benefits', active: currentView === 'benefits' }
          ]
        },
        {
          id: 'hire-staff',
          icon: svgPaths.p25edc380,
          label: 'Hire New Staff',
          active: currentView === 'shortlisted',
          hasSubmenu: true,
          submenu: [
            { id: 'shortlisted', label: 'Shortlisted', active: currentView === 'shortlisted' },
          ]
        },
        { id: 'learning', icon: svgPaths.p11bef680, label: 'Learning & Development', active: false, hasSubmenu: true },
        { id: 'performance', icon: svgPaths.p2a2bd600, label: 'Performance Management', active: false, hasSubmenu: true },
        { id: 'monitoring', icon: svgPaths.p1f4ad080, label: 'Employee Monitoring', active: false, hasSubmenu: true },
        { id: 'feedback', icon: svgPaths.p1d152780, label: 'Feedback & Evaluation', active: false, hasSubmenu: true },
        { id: 'invoices', icon: svgPaths.p20bd1f00, label: 'Invoices', active: false },
        { id: 'resources', icon: svgPaths.p36b06100, label: 'Resources', active: false },
        { id: 'hbr-report', icon: svgPaths.p2623d200, label: 'HBR Report', active: false },
        { id: 'reports', icon: svgPaths.p15aae080, label: 'Reports', active: false, hasSubmenu: true },
        { id: 'hire-local', icon: svgPaths.p24125f00, label: 'Hire Local Talent', active: false, hasSubmenu: true },
        { id: 'advisor', icon: svgPaths.p16d63e80, label: 'Become an Advisor', active: false, hasSubmenu: true },
        { id: 'pair', icon: svgPaths.p79fd680, label: 'PAIR', active: false },
        { id: 'support', icon: svgPaths.p2b4b7980, label: 'Support', active: false, hasSubmenu: true },
      ];
    }
  };

  const mainMenuItems = getMenuItems();

  return (
    <motion.div 
      initial={{ width: 76 }}
      animate={{ width: 300 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white box-border content-stretch flex flex-col gap-[8px] h-full items-start relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] shrink-0"
    >
      {/* Content */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="overflow-x-clip overflow-y-auto relative size-full scrollbar-hide">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[8px] relative size-full rounded-[8px]">
            
            {/* User Profile */}
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="bg-[#f2f4f7] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex gap-[6px] items-center px-[16px] py-[8px] relative w-full">
                    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0">
                      <ProfileImage />
                      <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                        <p className="font-semibold leading-[24px] min-w-full not-italic relative shrink-0 text-[#1d2939] text-[16px]" style={{ width: "min-content" }}>
                          {user?.name || 'Shelby'}
                        </p>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
                          <p className="basis-0 font-normal grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#5d667b] text-[12px]">{user?.email || 'shelby@gytap.com'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px overflow-x-clip overflow-y-auto scrollbar-hide relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow h-full items-start min-h-px min-w-px relative shrink-0">
                {mainMenuItems.map((item) => (
                  <div key={item.id} className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    {/* Main Item */}
                    <div 
                      className={`relative rounded-[8px] shrink-0 w-full cursor-pointer ${item.active ? 'bg-[#d8defc]' : 'hover:bg-gray-50'}`}
                      onClick={() => {
                        if (item.hasSubmenu) {
                          setExpandedSection(expandedSection === item.id ? '' : item.id);
                        } else if (item.id === 'billing-details' || item.id === 'dashboard' || item.id === 'onboarding' || item.id === 'user-profile') {
                          onNavigationChange?.(item.id);
                        }
                      }}
                    >
                      <div className="flex flex-row items-center overflow-clip relative size-full">
                        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
                          <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="relative shrink-0 size-[20px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <path d={item.icon} fill={item.active ? "#3A58EF" : "#5D667B"} />
                              </svg>
                            </div>
                            <p className={`basis-0 font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] ${item.active ? 'text-[#1d2939]' : 'text-[#5d667b]'}`}>
                              {item.label}
                            </p>
                          </div>
                          {item.hasSubmenu && (
                            <div className="relative shrink-0 size-[20px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <path d={expandedSection === item.id ? svgPaths.p3c55300 : svgPaths.p1f32cb80} fill="#1D2939" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Submenu */}
                    {item.hasSubmenu && expandedSection === item.id && item.submenu && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative shrink-0 w-full overflow-hidden"
                      >
                        <div className="relative size-full">
                          <div className="box-border content-stretch flex items-start pl-[16px] pr-[2px] py-0 relative w-full">
                            <div className="basis-0 box-border content-stretch flex grow items-start justify-between min-h-px min-w-px mr-[-2px] relative shrink-0">
                              <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                                {item.submenu.map((subItem) => (
                                  <div key={subItem.id} className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                                    <div className="h-[20px] relative shrink-0 w-[16px]">
                                      <div className="absolute inset-0 rounded-bl-[6px]">
                                        <div aria-hidden="true" className="absolute border-[#eaecf0] border-[0px_0px_2px_2px] border-solid inset-0 pointer-events-none rounded-bl-[6px]" />
                                      </div>
                                    </div>
                                    <div className={`basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 cursor-pointer ${subItem.active ? 'bg-[#d8defc]' : 'hover:bg-gray-50'}`}
                                       onClick={() => {
                                         if (subItem.id === 'my-staff' || subItem.id === 'holidays' || subItem.id === 'task-repository' || subItem.id === 'employee-loan' || subItem.id === 'onboarding' || subItem.id === 'activity-logs' || subItem.id === 'management-fee-chart' || subItem.id === 'policies-guidelines' || subItem.id === 'compensation' || subItem.id === 'attendance-management' || subItem.id === 'pip' || subItem.id === 'leave' || subItem.id === 'staff-resignation' || subItem.id === 'client-referral' || subItem.id === 'staff-agreements' || subItem.id === 'timesheets' || subItem.id === 'staff-profiling' || subItem.id === 'shortlisted' || subItem.id === 'benefits' || subItem.id === 'reimbursement' || subItem.id === 'client-expenses' || subItem.id === 'staff-benefits') {
                                           onNavigationChange?.(subItem.id);
                                         }
                                       }}>
                                      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
                                        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative w-full">
                                          <p className={`basis-0 font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[16px] ${subItem.active ? 'text-[#1d2939]' : 'text-[#5d667b]'}`}>
                                            {subItem.label}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-0 w-[2px]">
                                <div className="basis-0 bg-[#eaecf0] grow min-h-px min-w-px shrink-0 w-full" />
                                <div className="bg-[rgba(234,236,240,0)] h-[24px] shrink-0 w-full" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div 
        className="absolute bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] right-[-14px] rounded-[31px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] size-[28px] top-[24px] cursor-pointer hover:shadow-md transition-shadow"
        onClick={onToggle}
      >
        <div className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={leftChevron} fill="#5D667B" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function CollapsedSidebar({ onToggle }: { onToggle: () => void }) {
  const iconMenuItems = [
    { id: 'dashboard', icon: svgPathsCollapsed.pbcf2100, active: false },
    { id: 'company', icon: svgPathsCollapsed.p3048fe00, active: false },
    { id: 'clients', icon: svgPathsCollapsed.p1312d880, active: false },
    { id: 'human-resources', icon: svgPathsCollapsed.p3a3fe080, active: true },
    { id: 'hire-staff', icon: svgPathsCollapsed.p25edc380, active: false },
    { id: 'learning', icon: svgPathsCollapsed.p11bef680, active: false },
    { id: 'performance', icon: svgPathsCollapsed.p2a2bd600, active: false },
    { id: 'monitoring', icon: svgPathsCollapsed.p1f4ad080, active: false },
    { id: 'feedback', icon: svgPathsCollapsed.p1d152780, active: false },
    { id: 'invoices', icon: svgPathsCollapsed.p20bd1f00, active: false },
    { id: 'resources', icon: svgPathsCollapsed.p36b06100, active: false },
    { id: 'hbr-report', icon: svgPathsCollapsed.p2623d200, active: false },
    { id: 'reports', icon: svgPathsCollapsed.p15aae080, active: false },
    { id: 'hire-local', icon: svgPathsCollapsed.p24125f00, active: false },
    { id: 'advisor', icon: svgPathsCollapsed.p16d63e80, active: false },
    { id: 'pair', icon: svgPathsCollapsed.p79fd680, active: false },
    { id: 'support', icon: svgPathsCollapsed.p2b4b7980, active: false },
  ];

  return (
    <motion.div 
      initial={{ width: 300 }}
      animate={{ width: 76 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white box-border content-stretch flex flex-col gap-[8px] h-full items-start relative rounded-[8px] shadow-[0px_0px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] shrink-0"
    >
      {/* Content */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="overflow-x-clip overflow-y-auto relative size-full scrollbar-hide">
          <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[8px] relative size-full">
            
            {/* User Profile - Collapsed */}
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
              <div className="bg-[#f2f4f7] relative rounded-bl-[8px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip relative size-full">
                  <div className="box-border content-stretch flex gap-[6px] items-center p-[8px] relative w-full justify-center">
                    <ProfileImage />
                  </div>
                </div>
              </div>
            </div>

            {/* Icon Menu Items */}
            <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full">
              <div className="basis-0 content-stretch flex flex-col gap-[8px] grow h-full items-center min-h-px min-w-px relative shrink-0">
                {iconMenuItems.map((item) => (
                  <div
                    key={item.id}
                    className={`box-border content-stretch flex gap-[16px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 cursor-pointer transition-colors ${
                      item.active 
                        ? 'bg-[#d8defc] text-[#3A58EF]' 
                        : 'hover:bg-gray-100 text-[#5D667B]'
                    }`}
                  >
                    <div className="relative shrink-0 size-[20px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={item.icon} fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div 
        className="absolute bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] right-[-14px] rounded-[31px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] size-[28px] top-[24px] cursor-pointer hover:shadow-md transition-shadow"
        onClick={onToggle}
      >
        <div className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={rightChevron} fill="#5D667B" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function CollapsibleSidebar({ isExpanded = true, onToggle, onNavigationChange, currentView }: CollapsibleSidebarProps) {
  const [expanded, setExpanded] = useState(isExpanded);

  const handleToggle = () => {
    setExpanded(!expanded);
    onToggle?.();
  };

  return expanded ? (
    <ExpandedSidebar onToggle={handleToggle} onNavigationChange={onNavigationChange} currentView={currentView} />
  ) : (
    <CollapsedSidebar onToggle={handleToggle} />
  );
}