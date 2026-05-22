import { useEffect, useState } from 'react';
import UnifiedHRApplication from './components/UnifiedHRApplication';
import { AuthProvider, useAuth } from './components/AuthContext';
import LoginView from './components/LoginView';

type ViewType = 'dashboard' | 'task-repository' | 'compensation' | 'holidays' | 'employee-loan' | 'onboarding' | 'activity-logs' | 'management-fee-chart' | 'policies-guidelines' | 'my-staff' | 'attendance-management' | 'pip' | 'leave' | 'staff-resignation' | 'client-referral' | 'staff-agreements' | 'billing-details' | 'timesheets' | 'staff-profiling' | 'shortlisted' | 'benefits';

function AppContent() {
  const [initialView, setInitialView] = useState<ViewType>('task-repository');
  const [isReady, setIsReady] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Read saved view from localStorage
    const savedView = localStorage.getItem('hr-current-view');
    
    // Validate saved view is one of our valid types
    const validViews: ViewType[] = ['dashboard', 'task-repository', 'compensation', 'holidays', 'employee-loan', 'onboarding', 'activity-logs', 'management-fee-chart', 'policies-guidelines', 'my-staff', 'attendance-management', 'pip', 'leave', 'staff-resignation', 'client-referral', 'staff-agreements', 'billing-details', 'timesheets', 'staff-profiling', 'shortlisted', 'benefits'];
    
    if (savedView && validViews.includes(savedView as ViewType)) {
      setInitialView(savedView as ViewType);
    }
    
    setIsReady(true);
  }, []);

  // Don't render until we've checked localStorage
  if (!isReady) {
    return null;
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <LoginView />;
  }

  return <UnifiedHRApplication initialView={initialView} />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}