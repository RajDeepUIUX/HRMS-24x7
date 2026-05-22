import { useState } from 'react';
import StaffProfilingListView from './StaffProfilingListView';
import StaffProfilingDetailView from './StaffProfilingDetailView';

interface StaffProfilingViewProps {
  onNavigationChange?: (view: string) => void;
}

type ViewType = 'list' | 'detail';

export default function StaffProfilingView({ onNavigationChange }: StaffProfilingViewProps) {
  const [currentView, setCurrentView] = useState<ViewType>('list');
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);

  const handleSelectStaff = (staffName: string) => {
    setSelectedStaff(staffName);
    setCurrentView('detail');
  };

  const handleBack = () => {
    setCurrentView('list');
    setSelectedStaff(null);
  };

  return (
    <>
      {currentView === 'list' && (
        <StaffProfilingListView 
          onNavigationChange={onNavigationChange}
          onSelectStaff={handleSelectStaff}
        />
      )}
      {currentView === 'detail' && selectedStaff && (
        <StaffProfilingDetailView 
          staffName={selectedStaff} 
          onBack={handleBack}
        />
      )}
    </>
  );
}