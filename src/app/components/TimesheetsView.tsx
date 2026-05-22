import { useState } from 'react';
import TimesheetsListView from './TimesheetsListView';
import TimesheetsDetailView from './TimesheetsDetailView';
import StaffDetailView from './StaffDetailView';

interface TimesheetsViewProps {
  onNavigationChange?: (view: string) => void;
}

type ViewType = 'list' | 'client-detail' | 'staff-detail';

export default function TimesheetsView({ onNavigationChange }: TimesheetsViewProps) {
  const [currentView, setCurrentView] = useState<ViewType>('list');
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);

  const handleSelectClient = (clientName: string) => {
    setSelectedClient(clientName);
    setCurrentView('client-detail');
  };

  const handleSelectStaff = (staffName: string) => {
    setSelectedStaff(staffName);
    setCurrentView('staff-detail');
  };

  const handleBack = () => {
    setCurrentView('list');
    setSelectedClient(null);
    setSelectedStaff(null);
  };

  return (
    <>
      {currentView === 'list' && (
        <TimesheetsListView 
          onNavigationChange={onNavigationChange}
          onSelectClient={handleSelectClient}
          onSelectStaff={handleSelectStaff}
        />
      )}
      {currentView === 'client-detail' && selectedClient && (
        <TimesheetsDetailView 
          clientName={selectedClient} 
          onBack={handleBack}
        />
      )}
      {currentView === 'staff-detail' && selectedStaff && (
        <StaffDetailView 
          staffName={selectedStaff} 
          onBack={handleBack}
        />
      )}
    </>
  );
}
