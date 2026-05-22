import React, { useState, useEffect, useRef } from 'react';
import { CreditCard, Building2, Zap, Eye, Plus, CheckCircle2, Info, Trash2, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { toast } from 'sonner@2.0.3';
import { PaymentMappingTableRow } from './PaymentMappingTableRow';

interface BillingDetailsViewProps {
  onNavigationChange?: (view: string) => void;
}

interface BankAccount {
  id: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  accountType: 'checking' | 'saving';
  institutionNumber: string;
  transitNumber: string;
  routingNumber: string;
  sortCode: string;
}

interface CreditCardData {
  id: string;
  cardName: string;
  cardNumber: string;
  cardType: 'VISA' | 'Mastercard' | 'AMEX';
  expiryDate: string;
  cvv: string;
}

interface PaymentMethod {
  id: string;
  type: 'bank' | 'card' | 'direct-pay';
  label: string;
  data?: BankAccount | CreditCardData;
}

interface TimesheetMapping {
  id: string;
  timesheetIds: string[];
  paymentMethodId: string;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  date: string;
}

// Mock staff data
const mockStaffMembers: StaffMember[] = [
  { id: 'SM-001', name: 'Ankur Gupta', role: 'AUDIT SPECIALIST', date: 'DEC 03, 2025' },
  { id: 'SM-002', name: 'Rahul Singh', role: 'TAX PREPARER', date: 'DEC 04, 2025' },
  { id: 'SM-003', name: 'Nirbhay Kothya', role: 'BOOKKEEPER', date: 'DEC 05, 2025' },
  { id: 'SM-004', name: 'Mayank Rani', role: 'AUDIT SPECIALIST', date: 'DEC 03, 2025' },
  { id: 'SM-005', name: 'Hiral Modi', role: 'TAX PREPARER', date: 'DEC 04, 2025' },
  { id: 'SM-006', name: 'Udti Karia', role: 'PAYROLL MANAGER', date: 'DEC 05, 2025' },
  { id: 'SM-007', name: 'Gurudev Prakash', role: 'SR. ACCOUNTANT', date: 'DEC 06, 2025' },
  { id: 'SM-008', name: 'Priya Sharma', role: 'FINANCIAL ANALYST', date: 'DEC 07, 2025' },
  { id: 'SM-009', name: 'Vikram Patel', role: 'CONTROLLER', date: 'DEC 08, 2025' },
  { id: 'SM-010', name: 'Sneha Reddy', role: 'ACCOUNTING CLERK', date: 'DEC 09, 2025' },
  { id: 'SM-011', name: 'Arjun Mehta', role: 'TAX MANAGER', date: 'DEC 10, 2025' },
  { id: 'SM-012', name: 'Kavya Iyer', role: 'AUDIT MANAGER', date: 'DEC 11, 2025' },
];

export default function BillingDetailsView({ onNavigationChange }: BillingDetailsViewProps) {
  const [activeTab, setActiveTab] = useState<'bank' | 'card' | 'direct-pay'>('bank');
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [timesheetMappings, setTimesheetMappings] = useState<TimesheetMapping[]>([]);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showBillingUpdatedModal, setShowBillingUpdatedModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [viewingMethodId, setViewingMethodId] = useState<string | null>(null);
  
  // Bank form state
  const [bankForm, setBankForm] = useState<Omit<BankAccount, 'id'>>({
    accountName: '',
    accountNumber: '',
    bankName: '',
    accountType: 'checking',
    institutionNumber: '',
    transitNumber: '',
    routingNumber: '',
    sortCode: '',
  });

  // Card form state
  const [cardForm, setCardForm] = useState<Omit<CreditCardData, 'id'>>({
    cardName: '',
    cardNumber: '',
    cardType: 'VISA',
    expiryDate: '',
    cvv: '',
  });

  // Direct Pay state
  const [directPayEnabled, setDirectPayEnabled] = useState(false);

  // Form visibility state
  const [showBankForm, setShowBankForm] = useState(true);
  const [showCardForm, setShowCardForm] = useState(true);
  
  // Details visibility state - track which accounts show full details
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);
  
  // Draft mapping rows (before submission)
  interface DraftMapping {
    id: string;
    selectedStaff: string[];
    paymentMethodId: string;
    showStaffSearch: boolean;
    staffSearchTerm: string;
    isDefault?: boolean;
  }
  const [draftMappings, setDraftMappings] = useState<DraftMapping[]>([]);
  
  // Refs for outside click detection (one per row)
  const staffDropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Load data from localStorage
  useEffect(() => {
    const savedMethods = localStorage.getItem('billing-payment-methods');
    const savedMappings = localStorage.getItem('billing-timesheet-mappings');
    const savedDirectPay = localStorage.getItem('billing-direct-pay-enabled');

    if (savedMethods) {
      try {
        setPaymentMethods(JSON.parse(savedMethods));
      } catch (e) {
        console.error('Failed to parse payment methods:', e);
      }
    }

    if (savedMappings) {
      try {
        setTimesheetMappings(JSON.parse(savedMappings));
      } catch (e) {
        console.error('Failed to parse mappings:', e);
      }
    }

    if (savedDirectPay) {
      setDirectPayEnabled(savedDirectPay === 'true');
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem('billing-payment-methods', JSON.stringify(paymentMethods));
  }, [paymentMethods]);

  useEffect(() => {
    localStorage.setItem('billing-timesheet-mappings', JSON.stringify(timesheetMappings));
  }, [timesheetMappings]);

  useEffect(() => {
    localStorage.setItem('billing-direct-pay-enabled', directPayEnabled.toString());
  }, [directPayEnabled]);

  // Initialize with one default row
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    if (!isInitialized) {
      const defaultRow: DraftMapping = {
        id: 'default-row',
        selectedStaff: [],
        paymentMethodId: '',
        showStaffSearch: false,
        staffSearchTerm: '',
        isDefault: true,
      };
      setDraftMappings([defaultRow]);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Handle outside click for staff dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is inside any portaled dropdown
      const portaledDropdown = document.querySelector('.staff-dropdown-portal');
      if (portaledDropdown && portaledDropdown.contains(target)) {
        return; // Don't close if clicking inside the dropdown
      }
      
      setDraftMappings(prev => prev.map(draft => {
        const ref = staffDropdownRefs.current[draft.id];
        if (ref && !ref.contains(target)) {
          return { ...draft, showStaffSearch: false };
        }
        return draft;
      }));
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Validation functions
  const validateRoutingNumber = (value: string) => {
    // Allow 9 digits or empty (optional)
    if (!value) return true;
    return /^\d{9}$/.test(value);
  };

  const validateExpiryDate = (value: string) => {
    return /^(0[1-9]|1[0-2])\/\d{4}$/.test(value);
  };

  const validateCardNumber = (value: string) => {
    return /^\d{13,19}$/.test(value.replace(/\s/g, ''));
  };

  // Handle bank form submission
  const handleBankSubmit = () => {
    const newBankAccount: PaymentMethod = {
      id: `bank-${Date.now()}`,
      type: 'bank',
      label: `${bankForm.bankName || 'Bank'} - ${maskAccountNumber(bankForm.accountNumber || '0000')}`,
      data: { ...bankForm, id: `bank-${Date.now()}` } as BankAccount,
    };

    setPaymentMethods([...paymentMethods, newBankAccount]);
    toast.success('Bank account added successfully!');
    clearBankForm();
    setShowBankForm(false); // Hide form after successful submission
  };

  // Handle card form submission
  const handleCardSubmit = () => {
    const newCard: PaymentMethod = {
      id: `card-${Date.now()}`,
      type: 'card',
      label: `${cardForm.cardType} - ${maskCardNumber(cardForm.cardNumber || '0000')}`,
      data: { ...cardForm, id: `card-${Date.now()}` } as CreditCardData,
    };

    setPaymentMethods([...paymentMethods, newCard]);
    toast.success('Credit card added successfully!');
    clearCardForm();
    setShowCardForm(false); // Hide form after successful submission
  };

  // Handle direct pay enable
  const handleDirectPayEnable = () => {
    if (!directPayEnabled) {
      const directPayMethod: PaymentMethod = {
        id: 'direct-pay-1',
        type: 'direct-pay',
        label: 'Direct Pay',
      };

      setPaymentMethods([...paymentMethods.filter(m => m.type !== 'direct-pay'), directPayMethod]);
      setDirectPayEnabled(true);
      toast.success('Direct Pay enabled successfully!');
    }
  };

  // Handle direct pay disable
  const handleDirectPayDisable = () => {
    setPaymentMethods(paymentMethods.filter(m => m.type !== 'direct-pay'));
    setDirectPayEnabled(false);
    toast.success('Direct Pay disabled successfully!');
  };

  // Clear forms
  const clearBankForm = () => {
    setBankForm({
      accountName: '',
      accountNumber: '',
      bankName: '',
      accountType: 'checking',
      institutionNumber: '',
      transitNumber: '',
      routingNumber: '',
      sortCode: '',
    });
  };

  const clearCardForm = () => {
    setCardForm({
      cardName: '',
      cardNumber: '',
      cardType: 'VISA',
      expiryDate: '',
      cvv: '',
    });
  };

  // Mask sensitive data
  const maskAccountNumber = (accountNumber: string) => {
    if (accountNumber.length <= 4) return accountNumber;
    return `****${accountNumber.slice(-4)}`;
  };

  const maskCardNumber = (cardNumber: string) => {
    const cleaned = cardNumber.replace(/\s/g, '');
    if (cleaned.length <= 4) return cleaned;
    return `**** **** **** ${cleaned.slice(-4)}`;
  };

  // Handle view details (toggle inline visibility)
  const handleViewDetails = (type: 'bank' | 'card') => {
    // If details are already shown, hide them
    if ((type === 'bank' && showBankDetails) || (type === 'card' && showCardDetails)) {
      if (type === 'bank') {
        setShowBankDetails(false);
      } else {
        setShowCardDetails(false);
      }
    } else {
      // Otherwise, show password modal
      setViewingMethodId(type);
      setShowPasswordModal(true);
    }
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === 'password' || passwordInput === 'admin') {
      toast.success('Payment details revealed successfully!');
      // Toggle the appropriate details visibility
      if (viewingMethodId === 'bank') {
        setShowBankDetails(true);
      } else if (viewingMethodId === 'card') {
        setShowCardDetails(true);
      }
      setShowPasswordModal(false);
      setPasswordInput('');
    } else {
      toast.error('Incorrect password. Please try again.');
    }
  };

  // Handle timesheet mapping with draft rows
  const handleAddDraftRow = () => {
    const newDraft: DraftMapping = {
      id: Date.now().toString(),
      selectedStaff: [],
      paymentMethodId: '',
      showStaffSearch: false,
      staffSearchTerm: '',
    };
    setDraftMappings([...draftMappings, newDraft]);
  };

  const handleRemoveDraftRow = (draftId: string) => {
    // Prevent deleting if only one row remains
    if (draftMappings.length <= 1) {
      return;
    }
    setDraftMappings(draftMappings.filter(d => d.id !== draftId));
  };

  const handleToggleStaffDropdown = (draftId: string) => {
    setDraftMappings(prev => prev.map(draft =>
      draft.id === draftId
        ? { ...draft, showStaffSearch: !draft.showStaffSearch }
        : draft
    ));
  };

  const handleStaffSearchChange = (draftId: string, value: string) => {
    setDraftMappings(prev => prev.map(draft =>
      draft.id === draftId
        ? { ...draft, staffSearchTerm: value }
        : draft
    ));
  };

  const handleToggleStaff = (draftId: string, staffId: string) => {
    setDraftMappings(prev => prev.map(draft => {
      if (draft.id === draftId) {
        const isSelected = draft.selectedStaff.includes(staffId);
        return {
          ...draft,
          selectedStaff: isSelected
            ? draft.selectedStaff.filter(id => id !== staffId)
            : [...draft.selectedStaff, staffId]
        };
      }
      return draft;
    }));
  };

  const handleSelectAllStaff = (draftId: string) => {
    setDraftMappings(prev => prev.map(draft => {
      if (draft.id === draftId) {
        const availableStaff = getAvailableStaffForDraft(draftId);
        const filteredStaff = getFilteredStaffForDraft(draftId, draft.staffSearchTerm);
        const allFilteredIds = filteredStaff.map(s => s.id);
        const allSelected = allFilteredIds.every(id => draft.selectedStaff.includes(id));
        
        if (allSelected) {
          // Deselect all filtered staff
          return {
            ...draft,
            selectedStaff: draft.selectedStaff.filter(id => !allFilteredIds.includes(id))
          };
        } else {
          // Select all filtered staff
          const newSelectedStaff = [...new Set([...draft.selectedStaff, ...allFilteredIds])];
          return {
            ...draft,
            selectedStaff: newSelectedStaff
          };
        }
      }
      return draft;
    }));
  };

  const handleRemoveStaffFromDraft = (draftId: string, staffId: string) => {
    setDraftMappings(prev => prev.map(draft =>
      draft.id === draftId
        ? { ...draft, selectedStaff: draft.selectedStaff.filter(id => id !== staffId) }
        : draft
    ));
  };

  const handlePaymentMethodChange = (draftId: string, methodId: string) => {
    setDraftMappings(prev => prev.map(draft =>
      draft.id === draftId
        ? { ...draft, paymentMethodId: methodId }
        : draft
    ));
  };

  const handleRemoveMapping = (mappingId: string) => {
    setTimesheetMappings(timesheetMappings.filter(m => m.id !== mappingId));
    toast.success('Mapping removed successfully!');
  };

  // Handle payment method deletion
  const handleDeletePaymentMethod = (methodId: string) => {
    // Remove the payment method
    setPaymentMethods(prev => prev.filter(m => m.id !== methodId));
    
    // Clean up any mappings that use this payment method
    setTimesheetMappings(prev => prev.filter(m => m.paymentMethodId !== methodId));
    
    // Clean up draft mappings that reference this payment method
    setDraftMappings(prev => prev.map(draft => 
      draft.paymentMethodId === methodId 
        ? { ...draft, paymentMethodId: '' }
        : draft
    ));
    
    toast.success('Payment method deleted successfully!');
  };

  // Handle final submission
  const handleSubmitMapping = () => {
    // Convert valid drafts to saved mappings
    const newMappings = validDrafts.map(draft => ({
      id: `mapping-${Date.now()}-${Math.random()}`,
      timesheetIds: draft.selectedStaff,
      paymentMethodId: draft.paymentMethodId,
    }));
    
    // Add new mappings to existing ones
    if (newMappings.length > 0) {
      setTimesheetMappings([...timesheetMappings, ...newMappings]);
      
      // Reset draft rows to just the default empty row
      const defaultRow: DraftMapping = {
        id: 'default-row',
        selectedStaff: [],
        paymentMethodId: '',
        showStaffSearch: false,
        staffSearchTerm: '',
        isDefault: true,
      };
      setDraftMappings([defaultRow]);
    }
    
    // Show confirmation modal
    setShowConfirmModal(true);
  };

  // Handle confirmed submission
  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    sendEmailNotification();
    setShowBillingUpdatedModal(true);
  };

  // Mock email notification
  const sendEmailNotification = () => {
    const emailData = {
      subject: 'Billing Details Updated – Payment Method & Timesheet Mapping Submitted',
      to: 'finance@company.com',
      cc: 'cta@company.com',
      body: {
        clientName: 'Shelby (shelby@gytap.com)',
        submissionDate: new Date().toLocaleString(),
        actionTaken: 'Payment methods configured and timesheets mapped',
        mappedBy: 'Shelby (Client Admin)',
        paymentMethodsCount: paymentMethods.length,
        mappingsCount: timesheetMappings.length,
      }
    };

    console.log('📧 EMAIL NOTIFICATION SENT:', emailData);
    toast.success('Email notification sent to Finance and CTA teams!');
  };

  const bankCount = paymentMethods.filter(m => m.type === 'bank').length;
  const cardCount = paymentMethods.filter(m => m.type === 'card').length;
  const hasPaymentMethods = paymentMethods.length > 0;
  
  // Helper to check if a draft row is valid (has both staff and payment method)
  const isValidDraft = (draft: DraftMapping) => {
    return draft.selectedStaff.length > 0 && draft.paymentMethodId !== '';
  };
  
  // Get all valid drafts
  const validDrafts = draftMappings.filter(isValidDraft);
  
  // Count staff in saved mappings
  const mappedStaffIds = timesheetMappings.flatMap(m => m.timesheetIds);
  
  // Count staff in valid draft rows
  const draftStaffIds = validDrafts.flatMap(d => d.selectedStaff);
  
  // Total mapped count includes both saved and valid draft entries
  const mappedCount = mappedStaffIds.length + draftStaffIds.length;
  const totalCount = mockStaffMembers.length;
  const allMapped = mappedCount === totalCount;
  
  // Enable submit button if there are any valid drafts or saved mappings
  const hasValidEntries = timesheetMappings.length > 0 || validDrafts.length > 0;

  // Helper to get available staff for a specific draft row
  const getAvailableStaffForDraft = (draftId: string) => {
    const currentDraft = draftMappings.find(d => d.id === draftId);
    const allSelectedInDrafts = draftMappings
      .filter(d => d.id !== draftId)
      .flatMap(d => d.selectedStaff);
    
    return mockStaffMembers.filter(staff => {
      // Include if currently selected in this draft
      if (currentDraft?.selectedStaff.includes(staff.id)) {
        return true;
      }
      // Exclude if already mapped or selected in another draft
      return !mappedStaffIds.includes(staff.id) && !allSelectedInDrafts.includes(staff.id);
    });
  };

  // Helper to filter staff by search term for a draft row
  const getFilteredStaffForDraft = (draftId: string, searchTerm: string) => {
    const available = getAvailableStaffForDraft(draftId);
    return available.filter(staff => 
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Helper to get available payment methods for a draft row
  const getAvailablePaymentMethodsForDraft = (draftId: string) => {
    const currentDraft = draftMappings.find(d => d.id === draftId);
    const usedInMappings = timesheetMappings.map(m => m.paymentMethodId);
    const usedInOtherDrafts = draftMappings
      .filter(d => d.id !== draftId && d.paymentMethodId)
      .map(d => d.paymentMethodId);
    
    return paymentMethods.filter(method => {
      // Include if currently selected in this draft
      if (currentDraft?.paymentMethodId === method.id) {
        return true;
      }
      // Exclude if already used
      return !usedInMappings.includes(method.id) && !usedInOtherDrafts.includes(method.id);
    });
  };

  return (
    <div className="bg-white h-full w-full flex flex-col rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] overflow-auto scrollbar-hide">
      {/* Header */}
      <div className="border-b border-[#eaecf0] px-8 py-6">
        <div className="flex items-center gap-2 text-[14px] text-[#667085] mb-2">
          <span>Invoices</span>
          <span>›</span>
          <span className="text-[#3a58ef]">Billing Details</span>
        </div>
        <h1 className="text-[#101828] text-[30px] font-semibold leading-[38px]">
          Billing Details
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto px-8 py-6 scrollbar-hide">
        {/* Payment Information */}
        <div className="bg-white border border-[#eaecf0] rounded-[12px] p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#101828] text-[18px] font-semibold">Payment Information</h2>
            <div className="flex items-center gap-3">
              <div className={`px-3 py-1.5 rounded-full text-[12px] font-medium ${
                bankCount > 0 ? 'bg-[#d1fadf] text-[#039855]' : 'bg-[#f2f4f7] text-[#667085]'
              }`}>
                {bankCount} BANKS
              </div>
              <div className={`px-3 py-1.5 rounded-full text-[12px] font-medium ${
                cardCount > 0 ? 'bg-[#d1e9ff] text-[#175cd3]' : 'bg-[#f2f4f7] text-[#667085]'
              }`}>
                {cardCount} CARDS
              </div>
            </div>
          </div>

          {/* Step 1 Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3a58ef] text-white font-semibold text-[14px]">
                1
              </div>
              <h3 className="text-[#101828] text-[16px] font-semibold">Payment Setup</h3>
            </div>
            <span className="text-[#667085] text-[12px] font-medium">STEP 1 OF 2</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 border-b border-[#eaecf0] mb-6">
            <button
              onClick={() => setActiveTab('bank')}
              className={`flex items-center gap-2 px-4 py-3 text-[14px] font-medium border-b-2 transition-colors ${
                activeTab === 'bank'
                  ? 'border-[#3a58ef] text-[#3a58ef]'
                  : 'border-transparent text-[#667085] hover:text-[#101828]'
              }`}
            >
              <Building2 className="h-4 w-4" />
              BANK DETAILS
            </button>
            <button
              onClick={() => setActiveTab('card')}
              className={`flex items-center gap-2 px-4 py-3 text-[14px] font-medium border-b-2 transition-colors ${
                activeTab === 'card'
                  ? 'border-[#3a58ef] text-[#3a58ef]'
                  : 'border-transparent text-[#667085] hover:text-[#101828]'
              }`}
            >
              <CreditCard className="h-4 w-4" />
              CREDIT CARD
            </button>
            <button
              onClick={() => setActiveTab('direct-pay')}
              className={`flex items-center gap-2 px-4 py-3 text-[14px] font-medium border-b-2 transition-colors ${
                activeTab === 'direct-pay'
                  ? 'border-[#3a58ef] text-[#3a58ef]'
                  : 'border-transparent text-[#667085] hover:text-[#101828]'
              }`}
            >
              <Zap className="h-4 w-4" />
              DIRECT PAY
            </button>
          </div>

          {/* Bank Tab */}
          {activeTab === 'bank' && (
            <div>
              {/* Show VIEW BANK DETAILS button only if there are saved banks */}
              {paymentMethods.filter(m => m.type === 'bank').length > 0 && (
                <div className="flex items-center justify-end mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#3a58ef] hover:text-[#2a48df] text-[13px] font-medium"
                    onClick={() => handleViewDetails('bank')}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {showBankDetails ? 'HIDE DETAILS' : 'VIEW BANK DETAILS'}
                  </Button>
                </div>
              )}

              {/* Grid with placeholder card always in first position */}
              <div className="grid grid-cols-3 gap-4">
                {/* Placeholder card - always shown */}
                <button
                  onClick={() => setShowBankModal(true)}
                  className="border-2 border-dashed border-[#d0d5dd] rounded-lg p-4 hover:border-[#3a58ef] hover:bg-[#f9fafb] transition-all group flex flex-col items-center justify-center h-[200px]"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="bg-[#eff4ff] group-hover:bg-[#3a58ef] rounded-full p-3 transition-colors">
                      <Plus className="h-5 w-5 text-[#3a58ef] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[13px] font-medium text-[#101828]">Add Bank</p>
                  </div>
                </button>

                {/* Saved bank cards */}
                {paymentMethods.filter(m => m.type === 'bank').map((method) => {
                  const bankData = method.data as BankAccount;
                  return (
                    <div key={method.id} className="bg-[#f9fafb] border border-[#eaecf0] rounded-lg p-4 hover:border-[#d0d5dd] transition-colors relative group min-h-[200px] flex flex-col">
                      <button
                        onClick={() => handleDeletePaymentMethod(method.id)}
                        className="absolute top-3 right-3 text-[#98a2b3] hover:text-[#f04438] transition-colors opacity-0 group-hover:opacity-100"
                        title="Delete bank account"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <p className="text-[#98a2b3] text-[11px] font-medium uppercase tracking-wide mb-1.5">{bankData.bankName}</p>
                      <p className="text-[#101828] text-[20px] font-semibold mb-0.5 leading-none">
                        {showBankDetails ? bankData.accountNumber : bankData.accountNumber.slice(-3)}
                      </p>
                      <p className="text-[#667085] text-[13px] mb-2">
                        No: {showBankDetails ? bankData.accountNumber : `**** ${bankData.accountNumber.slice(-3)}`}
                      </p>
                      <div className="flex-1">
                        {showBankDetails ? (
                          <div className="space-y-1 mb-2">
                            {bankData.institutionNumber && (
                              <div className="flex justify-between items-center">
                                <p className="text-[#98a2b3] text-[10px] font-medium uppercase tracking-wide">Institution No</p>
                                <p className="text-[#101828] text-[11px] font-semibold">{bankData.institutionNumber}</p>
                              </div>
                            )}
                            {bankData.transitNumber && (
                              <div className="flex justify-between items-center">
                                <p className="text-[#98a2b3] text-[10px] font-medium uppercase tracking-wide">Transit No</p>
                                <p className="text-[#101828] text-[11px] font-semibold">{bankData.transitNumber}</p>
                              </div>
                            )}
                            {bankData.routingNumber && (
                              <div className="flex justify-between items-center">
                                <p className="text-[#98a2b3] text-[10px] font-medium uppercase tracking-wide">Routing No</p>
                                <p className="text-[#101828] text-[11px] font-semibold">{bankData.routingNumber}</p>
                              </div>
                            )}
                            {bankData.sortCode && (
                              <div className="flex justify-between items-center">
                                <p className="text-[#98a2b3] text-[10px] font-medium uppercase tracking-wide">Sort Code</p>
                                <p className="text-[#101828] text-[11px] font-semibold">{bankData.sortCode}</p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <div className="inline-flex items-center bg-white border border-[#eaecf0] rounded-md px-3 py-1.5 text-[11px] text-[#667085] font-medium uppercase mt-auto">
                        {bankData.accountType}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Credit Card Tab */}
          {activeTab === 'card' && (
            <div>
              {/* Show VIEW CARD DETAILS button only if there are saved cards */}
              {paymentMethods.filter(m => m.type === 'card').length > 0 && (
                <div className="flex items-center justify-end mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#3a58ef] hover:text-[#2a48df] text-[13px] font-medium"
                    onClick={() => handleViewDetails('card')}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    {showCardDetails ? 'HIDE DETAILS' : 'VIEW CARD DETAILS'}
                  </Button>
                </div>
              )}

              {/* Grid with placeholder card always in first position */}
              <div className="grid grid-cols-3 gap-4">
                {/* Placeholder card - always shown */}
                <button
                  onClick={() => setShowCardModal(true)}
                  className="border-2 border-dashed border-[#d0d5dd] rounded-lg p-4 hover:border-[#3a58ef] hover:bg-[#f9fafb] transition-all group flex flex-col items-center justify-center h-[200px]"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="bg-[#eff4ff] group-hover:bg-[#3a58ef] rounded-full p-3 transition-colors">
                      <Plus className="h-5 w-5 text-[#3a58ef] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-[13px] font-medium text-[#101828]">Add Card</p>
                  </div>
                </button>

                {/* Saved credit cards */}
                {paymentMethods.filter(m => m.type === 'card').map((method) => {
                  const cardData = method.data as CreditCardData;
                  return (
                    <div key={method.id} className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-xl p-5 text-white relative overflow-hidden group h-[200px] flex flex-col">
                      <button
                        onClick={() => handleDeletePaymentMethod(method.id)}
                        className="absolute top-4 right-4 z-10 text-white/60 hover:text-[#f04438] transition-colors opacity-0 group-hover:opacity-100"
                        title="Delete credit card"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <div className="absolute top-4 right-4 opacity-20">
                        <CreditCard className="h-16 w-16" />
                      </div>
                      <p className="text-[11px] font-medium mb-8">{cardData.cardType}</p>
                      <div className="flex-1 overflow-hidden">
                        {showCardDetails && (
                          <div className="mb-3">
                            <p className="text-[10px] mb-1 opacity-60">CARDHOLDER</p>
                            <p className="text-[13px] font-medium">{cardData.cardName}</p>
                          </div>
                        )}
                      </div>
                      <p className="text-[10px] mb-1 opacity-60">EXPIRES</p>
                      <p className="text-[13px] font-medium mb-4">{cardData.expiryDate}</p>
                      <p className="text-[16px] font-medium tracking-wider">
                        {showCardDetails ? cardData.cardNumber : maskCardNumber(cardData.cardNumber)}
                      </p>
                      <div className="absolute bottom-4 right-4">
                        <p className="text-[10px] opacity-60">CVV</p>
                        <p className="text-[13px] font-medium">{showCardDetails ? cardData.cvv : '***'}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Direct Pay Tab */}
          {activeTab === 'direct-pay' && (
            <div className="py-12">
              <div className="flex flex-col items-center justify-center max-w-md mx-auto">
                <div className="bg-[#eff4ff] rounded-full p-6 mb-6">
                  <Zap className="h-12 w-12 text-[#3a58ef]" />
                </div>
                <p className="text-[#667085] text-[13px] font-medium uppercase mb-6 text-center">
                  ENABLE DIRECT PAYMENT METHOD
                </p>
                {!directPayEnabled ? (
                  <Button
                    onClick={handleDirectPayEnable}
                    className="bg-[#3a58ef] hover:bg-[#2a48df] h-12 px-8"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    ENABLE & SAVE DIRECT PAY
                  </Button>
                ) : (
                  <Button
                    onClick={handleDirectPayDisable}
                    className="bg-[#12b76a] hover:bg-[#0f9e5a] h-12 px-8"
                  >
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    DIRECT PAY ACTIVE
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Payment Mapping - Always show with overlay when locked */}
        <div className="bg-white border border-[#eaecf0] rounded-[12px] p-6 relative">
          {/* Locked state overlay */}
          {!hasPaymentMethods && (
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10 flex items-center justify-center rounded-[12px]">
              <div className="bg-white border-2 border-[#eaecf0] rounded-lg px-8 py-4 shadow-lg">
                <p className="text-[#667085] text-[13px] font-semibold uppercase tracking-wide">
                  ADD AT LEAST ONE PAYMENT METHOD TO UNLOCK MAPPING
                </p>
              </div>
            </div>
          )}

          {/* Content with reduced opacity when locked */}
          <div className={hasPaymentMethods ? 'opacity-100' : 'opacity-30'}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-[14px] ${
                  hasPaymentMethods ? 'bg-[#3a58ef] text-white' : 'bg-[#f2f4f7] text-[#98a2b3]'
                }`}>
                  2
                </div>
                <h3 className={`text-[16px] font-semibold ${hasPaymentMethods ? 'text-[#101828]' : 'text-[#98a2b3]'}`}>
                  Payment Mapping
                </h3>
              </div>
              <span className={`text-[12px] font-medium ${hasPaymentMethods ? 'text-[#667085]' : 'text-[#98a2b3]'}`}>
                STEP 2 OF 2
              </span>
            </div>

            <div className="mb-6">
              <h4 className={`text-[13px] font-semibold uppercase mb-2 ${hasPaymentMethods ? 'text-[#101828]' : 'text-[#98a2b3]'}`}>
                ASSIGN SAVED PAYMENT METHODS TO TIMESHEETS
              </h4>
              <p className={`text-[14px] ${hasPaymentMethods ? 'text-[#667085]' : 'text-[#98a2b3]'}`}>
                If you have multiple timesheets and want to setup different payment methods for your timesheets then in step 1 you can add multiple payment methods and map specific timesheets to them below. Group multiple staff timesheet numbers per method.
              </p>
            </div>

            {/* Mapping Table */}
            <div className="border border-[#eaecf0] rounded-lg overflow-hidden mb-6">
              <table className="w-full table-fixed">
                <thead className="bg-[#f9fafb]">
                  <tr>
                    <th className="text-left p-4 text-[11px] font-semibold text-[#667085] uppercase w-[45%]">Select Timesheets</th>
                    <th className="text-left p-4 text-[11px] font-semibold text-[#667085] uppercase w-[45%]">Mapped Payment Method</th>
                    <th className="text-center p-4 text-[11px] font-semibold text-[#667085] uppercase w-[10%]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Saved Mappings */}
                  {timesheetMappings.map((mapping) => {
                    const paymentMethod = paymentMethods.find(m => m.id === mapping.paymentMethodId);
                    return (
                      <tr key={mapping.id} className="border-b border-[#eaecf0] hover:bg-[#f9fafb] transition-colors">
                        <td className="p-4">
                          <div className="flex flex-wrap gap-2">
                            {mapping.timesheetIds.map(staffId => {
                              const staff = mockStaffMembers.find(s => s.id === staffId);
                              return (
                                <div key={staffId} className="bg-[#eff4ff] text-[#3a58ef] px-2 py-1 rounded-md text-[13px] font-medium">
                                  {staff?.name.toUpperCase()}
                                </div>
                              );
                            })}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="text-[14px] text-[#101828]">
                            {paymentMethod?.type === 'card' ? `💳 ${paymentMethod.label}` : 
                             paymentMethod?.type === 'direct-pay' ? `⚡ ${paymentMethod.label}` :
                             `🏦 ${paymentMethod?.label}`}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleRemoveMapping(mapping.id)}
                            className="text-[#98a2b3] hover:text-[#f04438] transition-colors"
                            title="Remove mapping"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}

                  {/* Draft Rows */}
                  {draftMappings.map((draft) => (
                    <PaymentMappingTableRow
                      key={draft.id}
                      draft={draft}
                      allStaff={mockStaffMembers}
                      availableStaff={getAvailableStaffForDraft(draft.id)}
                      filteredStaff={getFilteredStaffForDraft(draft.id, draft.staffSearchTerm)}
                      availablePaymentMethods={getAvailablePaymentMethodsForDraft(draft.id)}
                      dropdownRef={(el) => (staffDropdownRefs.current[draft.id] = el)}
                      onToggleDropdown={() => handleToggleStaffDropdown(draft.id)}
                      onSearchChange={(value) => handleStaffSearchChange(draft.id, value)}
                      onToggleStaff={(staffId) => handleToggleStaff(draft.id, staffId)}
                      onSelectAllStaff={() => handleSelectAllStaff(draft.id)}
                      onRemoveStaff={(staffId) => handleRemoveStaffFromDraft(draft.id, staffId)}
                      onPaymentMethodChange={(methodId) => handlePaymentMethodChange(draft.id, methodId)}
                      onRemoveRow={() => handleRemoveDraftRow(draft.id)}
                      disabled={!hasPaymentMethods}
                      totalRows={draftMappings.length}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Payment Mapping Button */}
            <div className="mb-6">
              <Button
                onClick={handleAddDraftRow}
                disabled={!hasPaymentMethods || draftMappings.length >= paymentMethods.length}
                className="bg-[#3a58ef] hover:bg-[#2a48df] h-11 px-6 disabled:bg-[#f2f4f7] disabled:text-[#98a2b3] disabled:cursor-not-allowed"
              >
                <Plus className="h-4 w-4 mr-2" />
                ADD PAYMENT MAPPING
              </Button>
            </div>

            {hasPaymentMethods && (
              <div className="mt-6 bg-[#eff8ff] border border-[#b2ddff] rounded-lg p-3 flex items-start gap-2">
                <Info className="h-4 w-4 text-[#2e90fa] flex-shrink-0 mt-0.5" />
                <p className="text-[#175cd3] text-[12px]">
                  <strong>Tip:</strong> Add multiple rows to map different payment methods to different timesheets. Already assigned staff won't appear in other dropdowns.
                </p>
              </div>
            )}

            {/* Status Overview */}
            <div className="flex items-center justify-between pt-6 border-t border-[#eaecf0]">
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-[#3a58ef]" />
                <div>
                  <p className="text-[#667085] text-[11px] font-medium uppercase">Status Overview</p>
                  <p className="text-[#101828] text-[14px] font-semibold">
                    {mappedCount} / {totalCount} Timesheets Mapped
                  </p>
                </div>
              </div>
              <Button
                onClick={handleSubmitMapping}
                disabled={!hasValidEntries}
                className={`h-11 px-8 ${
                  hasValidEntries
                    ? 'bg-[#3a58ef] hover:bg-[#2a48df]' 
                    : 'bg-[#f2f4f7] text-[#98a2b3] cursor-not-allowed'
                }`}
              >
                SUBMIT MAPPING
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Password Verification Modal */}
      <Dialog open={showPasswordModal} onOpenChange={setShowPasswordModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Verify Portal Password</DialogTitle>
            <DialogDescription>
              Enter your portal password to view sensitive payment details
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              placeholder="Enter your password"
              className="mt-1.5"
            />
            <p className="text-[#667085] text-[12px] mt-2">
              For demo purposes, use "password" or "admin"
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPasswordModal(false)}>
              Cancel
            </Button>
            <Button onClick={handlePasswordSubmit} className="bg-[#3a58ef] hover:bg-[#2a48df]">
              Verify
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-[#d1fadf] rounded-full p-3">
                <CheckCircle2 className="h-8 w-8 text-[#12b76a]" />
              </div>
            </div>
            <DialogTitle className="text-center text-[24px]">Billing Updated</DialogTitle>
            <DialogDescription className="text-center">
              Your payment sources and timesheet mappings have been updated successfully.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-3">
            <div className="bg-[#f9fafb] p-4 rounded-lg space-y-2 text-[14px]">
              <div className="flex justify-between">
                <span className="text-[#667085]">Payment Methods:</span>
                <span className="font-medium text-[#101828]">{paymentMethods.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667085]">Staff Mapped:</span>
                <span className="font-medium text-[#101828]">{mappedCount} / {totalCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667085]">Submission Date:</span>
                <span className="font-medium text-[#101828]">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
            <div className="bg-[#eff8ff] border border-[#b2ddff] p-3 rounded-lg flex items-start gap-2">
              <Info className="h-4 w-4 text-[#2e90fa] flex-shrink-0 mt-0.5" />
              <p className="text-[#175cd3] text-[13px]">
                Email notifications have been sent to the Finance Team and CTA Team.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-[#3a58ef] hover:bg-[#2a48df]"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-[20px] font-semibold">Confirm Mapping Submission</DialogTitle>
            <DialogDescription>
              Are you sure you want to submit the timesheet mappings? This will finalize the payment method assignments.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-[#f9fafb] p-4 rounded-lg space-y-2 text-[14px]">
              <div className="flex justify-between">
                <span className="text-[#667085]">Payment Methods:</span>
                <span className="font-medium text-[#101828]">{paymentMethods.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667085]">Timesheets Mapped:</span>
                <span className="font-medium text-[#101828]">{mappedCount} / {totalCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667085]">Mappings Created:</span>
                <span className="font-medium text-[#101828]">{timesheetMappings.length}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmSubmit} className="bg-[#3a58ef] hover:bg-[#2a48df]">
              Confirm & Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Billing Updated Modal */}
      <Dialog open={showBillingUpdatedModal} onOpenChange={setShowBillingUpdatedModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="bg-[#d1fadf] rounded-full p-4">
                <CheckCircle2 className="h-12 w-12 text-[#12b76a]" />
              </div>
            </div>
            <DialogTitle className="text-center text-[28px] font-semibold">Billing Updated!</DialogTitle>
            <DialogDescription className="text-center text-[15px]">
              Your timesheet mappings have been successfully submitted and saved.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button 
              onClick={() => setShowBillingUpdatedModal(false)}
              className="w-full bg-[#3a58ef] hover:bg-[#2a48df] h-11"
            >
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Details Modal */}
      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-[20px] font-semibold">
              {viewingMethodId === 'bank' ? 'All Bank Account Details' : 'All Credit Card Details'}
            </DialogTitle>
            <DialogDescription>
              Full details of all saved {viewingMethodId === 'bank' ? 'bank accounts' : 'credit cards'} (unmasked)
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 overflow-y-auto flex-1 scrollbar-hide">
            {viewingMethodId && (() => {
              if (viewingMethodId === 'bank') {
                const banks = paymentMethods.filter(m => m.type === 'bank');
                if (banks.length === 0) return <p className="text-center text-[#667085]">No bank accounts found.</p>;
                return (
                  <div className="space-y-4">
                    {banks.map((method, index) => {
                      const bankData = method.data as BankAccount;
                      return (
                        <div key={method.id} className="bg-[#eff4ff] border border-[#d1e9ff] rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Building2 className="h-5 w-5 text-[#3a58ef]" />
                            <h3 className="text-[16px] font-semibold text-[#101828]">
                              Bank Account #{index + 1} - {bankData.bankName}
                            </h3>
                          </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Account Name</Label>
                          <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                            {bankData.accountName}
                          </p>
                        </div>
                        <div>
                          <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Account Number</Label>
                          <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                            {bankData.accountNumber}
                          </p>
                        </div>
                        <div>
                          <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Bank Name</Label>
                          <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                            {bankData.bankName}
                          </p>
                        </div>
                        <div>
                          <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Account Type</Label>
                          <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0] capitalize">
                            {bankData.accountType}
                          </p>
                        </div>
                        {bankData.institutionNumber && (
                          <div>
                            <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Institution No</Label>
                            <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                              {bankData.institutionNumber}
                            </p>
                          </div>
                        )}
                        {bankData.transitNumber && (
                          <div>
                            <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Transit No</Label>
                            <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                              {bankData.transitNumber}
                            </p>
                          </div>
                        )}
                        {bankData.routingNumber && (
                          <div>
                            <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Routing Number</Label>
                            <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                              {bankData.routingNumber}
                            </p>
                          </div>
                        )}
                        {bankData.sortCode && (
                          <div>
                            <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Sort Code</Label>
                            <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                              {bankData.sortCode}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                      );
                    })}
                    <div className="bg-[#fffaeb] border border-[#fedf89] p-3 rounded-lg flex items-start gap-2">
                      <Info className="h-4 w-4 text-[#f79009] flex-shrink-0 mt-0.5" />
                      <p className="text-[#b54708] text-[13px]">
                        This information is sensitive. Do not share these details with unauthorized personnel.
                      </p>
                    </div>
                  </div>
                );
              } else if (viewingMethodId === 'card') {
                const cards = paymentMethods.filter(m => m.type === 'card');
                if (cards.length === 0) return <p className="text-center text-[#667085]">No credit cards found.</p>;
                return (
                  <div className="space-y-4">
                    {cards.map((method, index) => {
                      const cardData = method.data as CreditCardData;
                      return (
                        <div key={method.id} className="bg-[#eff4ff] border border-[#d1e9ff] rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <CreditCard className="h-5 w-5 text-[#3a58ef]" />
                            <h3 className="text-[16px] font-semibold text-[#101828]">
                              Credit Card #{index + 1} - {cardData.cardType}
                            </h3>
                          </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Cardholder Name</Label>
                          <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                            {cardData.cardName}
                          </p>
                        </div>
                        <div>
                          <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Card Number</Label>
                          <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0] tracking-wider">
                            {cardData.cardNumber}
                          </p>
                        </div>
                        <div>
                          <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Card Type</Label>
                          <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                            {cardData.cardType}
                          </p>
                        </div>
                        <div>
                          <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">Expiry Date</Label>
                          <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                            {cardData.expiryDate}
                          </p>
                        </div>
                        {cardData.cvv && (
                          <div>
                            <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1 block">CVV</Label>
                            <p className="text-[14px] font-medium text-[#101828] bg-white px-3 py-2 rounded border border-[#eaecf0]">
                              {cardData.cvv}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                      );
                    })}
                    <div className="bg-[#fffaeb] border border-[#fedf89] p-3 rounded-lg flex items-start gap-2">
                      <Info className="h-4 w-4 text-[#f79009] flex-shrink-0 mt-0.5" />
                      <p className="text-[#b54708] text-[13px]">
                        This information is highly sensitive. Do not share these details with unauthorized personnel.
                      </p>
                    </div>
                  </div>
                );
              }
              return null;
            })()}
          </div>
          <DialogFooter>
            <Button 
              onClick={() => setShowDetailsModal(false)}
              className="w-full bg-[#3a58ef] hover:bg-[#2a48df]"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bank Account Modal */}
      <Dialog open={showBankModal} onOpenChange={setShowBankModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[20px] font-semibold">Add Bank Account Details</DialogTitle>
            <DialogDescription className="text-[14px]">
              Enter your bank account information to set up payment method
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="modal-accountName" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">Account Name</Label>
                <Input
                  id="modal-accountName"
                  value={bankForm.accountName}
                  onChange={(e) => {
                    // Only allow letters, spaces, and basic punctuation
                    const value = e.target.value.replace(/[^a-zA-Z\s\-'.]/g, '');
                    setBankForm({ ...bankForm, accountName: value });
                  }}
                  placeholder="Enter Account Name"
                  className="h-11"
                />
              </div>
              <div>
                <Label htmlFor="modal-accountNumber" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">Account Number</Label>
                <Input
                  id="modal-accountNumber"
                  value={bankForm.accountNumber}
                  onChange={(e) => {
                    // Only allow numbers
                    const value = e.target.value.replace(/\D/g, '');
                    setBankForm({ ...bankForm, accountNumber: value });
                  }}
                  placeholder="Enter Account Number"
                  className="h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="modal-bankName" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">Bank Name</Label>
                <Select
                  value={bankForm.bankName}
                  onValueChange={(value) => setBankForm({ ...bankForm, bankName: value })}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select Bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Chase Bank">Chase Bank</SelectItem>
                    <SelectItem value="Bank of America">Bank of America</SelectItem>
                    <SelectItem value="Wells Fargo">Wells Fargo</SelectItem>
                    <SelectItem value="Citibank">Citibank</SelectItem>
                    <SelectItem value="US Bank">US Bank</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">Account Type</Label>
                <div className="flex items-center gap-6 h-11">
                  <RadioGroup
                    value={bankForm.accountType}
                    onValueChange={(value: 'checking' | 'saving') => setBankForm({ ...bankForm, accountType: value })}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="checking" id="modal-checking" />
                      <Label htmlFor="modal-checking" className="text-[14px] font-normal cursor-pointer">Checking</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="saving" id="modal-saving" />
                      <Label htmlFor="modal-saving" className="text-[14px] font-normal cursor-pointer">Saving</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="modal-institutionNumber" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">
                  Institution No <span className="text-[#98a2b3] normal-case">(Canadian - 3 digits)</span>
                </Label>
                <Input
                  id="modal-institutionNumber"
                  value={bankForm.institutionNumber}
                  onChange={(e) => {
                    // Only allow numbers, max 3 digits
                    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
                    setBankForm({ ...bankForm, institutionNumber: value });
                  }}
                  placeholder="e.g., 001 (BMO), 003 (RBC), 004 (TD)"
                  maxLength={3}
                  className="h-11"
                />
              </div>
              <div>
                <Label htmlFor="modal-transitNumber" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">
                  Transit No <span className="text-[#98a2b3] normal-case">(Canadian - 5 digits)</span>
                </Label>
                <Input
                  id="modal-transitNumber"
                  value={bankForm.transitNumber}
                  onChange={(e) => {
                    // Only allow numbers, max 5 digits
                    const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                    setBankForm({ ...bankForm, transitNumber: value });
                  }}
                  placeholder="Branch code - 5 digits"
                  maxLength={5}
                  className="h-11"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="modal-routingNumber" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">
                  Routing Number <span className="text-[#98a2b3] normal-case">(U.S. - 9 digits)</span>
                </Label>
                <Input
                  id="modal-routingNumber"
                  value={bankForm.routingNumber}
                  onChange={(e) => {
                    // Only allow numbers, max 9 digits
                    const value = e.target.value.replace(/\D/g, '').slice(0, 9);
                    setBankForm({ ...bankForm, routingNumber: value });
                  }}
                  placeholder="ABA Routing - 9 digits"
                  maxLength={9}
                  className="h-11"
                />
              </div>
              <div>
                <Label htmlFor="modal-sortCode" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">
                  Sort Code <span className="text-[#98a2b3] normal-case">(UK/Irish - 6 digits)</span>
                </Label>
                <Input
                  id="modal-sortCode"
                  value={bankForm.sortCode}
                  onChange={(e) => {
                    // Only allow numbers and hyphens, format as XX-XX-XX
                    let value = e.target.value.replace(/[^0-9-]/g, '');
                    // Auto-format with hyphens
                    if (value.length > 2 && value[2] !== '-') {
                      value = value.slice(0, 2) + '-' + value.slice(2);
                    }
                    if (value.length > 5 && value[5] !== '-') {
                      value = value.slice(0, 5) + '-' + value.slice(5);
                    }
                    setBankForm({ ...bankForm, sortCode: value.slice(0, 8) });
                  }}
                  placeholder="e.g., 12-34-56"
                  maxLength={8}
                  className="h-11"
                />
              </div>
            </div>

            <div className="bg-[#eff8ff] border border-[#b2ddff] p-3 rounded-lg flex items-start gap-2 mb-3">
              <Info className="h-4 w-4 text-[#0086c9] flex-shrink-0 mt-0.5" />
              <div className="text-[#0c111d] text-[13px]">
                <p className="font-medium mb-1">Banking System Guide:</p>
                <p className="text-[12px]">
                  <strong>Canadian:</strong> Institution No (3 digits) + Transit No (5 digits) | 
                  <strong className="ml-2">U.S.:</strong> Routing Number (9 digits) | 
                  <strong className="ml-2">UK/Irish:</strong> Sort Code (6 digits)
                </p>
              </div>
            </div>
            <div className="bg-[#fffaeb] border border-[#fedf89] p-3 rounded-lg flex items-start gap-2">
              <Info className="h-4 w-4 text-[#f79009] flex-shrink-0 mt-0.5" />
              <p className="text-[#b54708] text-[13px]">
                Ensure all information is accurate. This data will be used for payment processing.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setShowBankModal(false);
                clearBankForm();
              }}
              className="h-11 px-6"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleBankSubmit();
                setShowBankModal(false);
              }}
              className="bg-[#3a58ef] hover:bg-[#2a48df] h-11 px-6"
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Credit Card Modal */}
      <Dialog open={showCardModal} onOpenChange={setShowCardModal}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[20px] font-semibold">Add Credit Card Details</DialogTitle>
            <DialogDescription className="text-[14px]">
              Enter your credit card information to set up payment method
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="modal-cardName" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">Card Name</Label>
                <Input
                  id="modal-cardName"
                  value={cardForm.cardName}
                  onChange={(e) => {
                    // Only allow letters, spaces, and basic punctuation
                    const value = e.target.value.replace(/[^a-zA-Z\s\-'.]/g, '');
                    setCardForm({ ...cardForm, cardName: value });
                  }}
                  placeholder="Cardholder Name"
                  className="h-11"
                />
              </div>
              <div>
                <Label htmlFor="modal-cardType" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">Card Type</Label>
                <Select
                  value={cardForm.cardType}
                  onValueChange={(value: 'VISA' | 'Mastercard' | 'AMEX') => setCardForm({ ...cardForm, cardType: value })}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VISA">VISA</SelectItem>
                    <SelectItem value="Mastercard">Mastercard</SelectItem>
                    <SelectItem value="AMEX">American Express</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-4">
              <Label htmlFor="modal-cardNumber" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">
                Card Number <span className="text-[#98a2b3] normal-case">(16 for Visa/MC, 15 for Amex)</span>
              </Label>
              <Input
                id="modal-cardNumber"
                value={cardForm.cardNumber}
                onChange={(e) => {
                  // Only allow numbers, max length depends on card type
                  const maxLength = cardForm.cardType === 'AMEX' ? 15 : 16;
                  const value = e.target.value.replace(/\D/g, '').slice(0, maxLength);
                  setCardForm({ ...cardForm, cardNumber: value });
                }}
                placeholder={cardForm.cardType === 'AMEX' ? 'XXXX XXXXXX XXXXX' : 'XXXX XXXX XXXX XXXX'}
                maxLength={cardForm.cardType === 'AMEX' ? 15 : 16}
                className="h-11"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="modal-expiryDate" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">Expiry</Label>
                <Input
                  id="modal-expiryDate"
                  value={cardForm.expiryDate}
                  onChange={(e) => {
                    // Only allow numbers, auto-format as MM/YYYY
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length >= 2) {
                      value = value.slice(0, 2) + '/' + value.slice(2, 6);
                    }
                    setCardForm({ ...cardForm, expiryDate: value });
                  }}
                  placeholder="MM/YYYY"
                  maxLength={7}
                  className="h-11"
                />
              </div>
              <div>
                <Label htmlFor="modal-cvv" className="text-[11px] font-medium text-[#667085] uppercase mb-1.5 block">
                  CVV <span className="text-[#98a2b3] normal-case">({cardForm.cardType === 'AMEX' ? '4 digits' : '3 digits'})</span>
                </Label>
                <Input
                  id="modal-cvv"
                  type="password"
                  value={cardForm.cvv}
                  onChange={(e) => {
                    // Only allow numbers, max length depends on card type
                    const maxLength = cardForm.cardType === 'AMEX' ? 4 : 3;
                    const value = e.target.value.replace(/\D/g, '').slice(0, maxLength);
                    setCardForm({ ...cardForm, cvv: value });
                  }}
                  placeholder={cardForm.cardType === 'AMEX' ? '4 digits (front)' : '3 digits (back)'}
                  maxLength={cardForm.cardType === 'AMEX' ? 4 : 3}
                  className="h-11"
                />
              </div>
            </div>

            <div className="bg-[#fffaeb] border border-[#fedf89] p-3 rounded-lg flex items-start gap-2">
              <Info className="h-4 w-4 text-[#f79009] flex-shrink-0 mt-0.5" />
              <p className="text-[#b54708] text-[13px]">
                Ensure all information is accurate. This data will be used for payment processing.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setShowCardModal(false);
                clearCardForm();
              }}
              className="h-11 px-6"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleCardSubmit();
                setShowCardModal(false);
              }}
              className="bg-[#3a58ef] hover:bg-[#2a48df] h-11 px-6"
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}