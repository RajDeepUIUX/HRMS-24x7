import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, Search, X, Filter } from 'lucide-react';

type ExpenseStatus = 'Pending' | 'Pending Review' | 'Approved' | 'Rejected' | 'Disbursed';

interface HistoryEntry {
  user: string;
  action: string;
  timestamp: string;
}

interface Attachment {
  name: string;
  size: string;
}

interface ExpenseRequest {
  id: string;
  trackingNo: string;
  staffName: string;
  staffId: string;
  designation: string;
  department: string;
  category: string;
  description: string;
  submittedOn: string;
  expenseDate: string;
  amount: number;
  currency: string;
  currencySymbol: string;
  status: ExpenseStatus;
  reimbType: 'mycpe' | 'client';
  client: string;
  quantity: number;
  attachments: Attachment[];
  financeNotes: string;
  history: HistoryEntry[];
  rejectionReason: string;
  country: string;
}

interface ClientExpensesViewProps {
  onNavigationChange?: (view: string) => void;
}

const AVATAR_COLORS = [
  '#3A58EF', '#7C3AED', '#059669', '#DC2626', '#D97706',
  '#0891B2', '#DB2777', '#65A30D', '#EA580C', '#6366F1',
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name: string): string {
  return name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2);
}

function Avatar({ name, size = 36 }: { name: string; size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full font-semibold text-white flex-shrink-0"
      style={{ width: size, height: size, backgroundColor: getAvatarColor(name), fontSize: Math.round(size * 0.38) }}
    >
      {getInitials(name)}
    </div>
  );
}

const STATUS_STYLES: Record<ExpenseStatus, { bg: string; text: string; dot: string }> = {
  'Pending':        { bg: '#FEF9C3', text: '#A16207', dot: '#CA8A04' },
  'Pending Review': { bg: '#FEF3C7', text: '#B45309', dot: '#D97706' },
  'Approved':       { bg: '#DCFCE7', text: '#166534', dot: '#16A34A' },
  'Rejected':       { bg: '#FEE2E2', text: '#991B1B', dot: '#DC2626' },
  'Disbursed':      { bg: '#DBEAFE', text: '#1E40AF', dot: '#2563EB' },
};

function StatusBadge({ status }: { status: ExpenseStatus }) {
  const s = STATUS_STYLES[status];
  return (
    <span
      className="inline-flex items-center gap-[6px] px-[10px] py-[4px] rounded-full text-[12px] font-medium whitespace-nowrap"
      style={{ backgroundColor: s.bg, color: s.text }}
    >
      <span className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ backgroundColor: s.dot }} />
      {status}
    </span>
  );
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  'Travel':                  { bg: '#EFF6FF', text: '#1D4ED8' },
  'Software Subscription':   { bg: '#F3E8FF', text: '#7C3AED' },
  'Office Supplies':         { bg: '#F0FDF4', text: '#166534' },
  'Conference & Training':   { bg: '#FFF7ED', text: '#C2410C' },
  'Meals & Entertainment':   { bg: '#FFF1F2', text: '#BE185D' },
  'Internet & Connectivity': { bg: '#F0F9FF', text: '#0369A1' },
  'Books & Publications':    { bg: '#FEFCE8', text: '#854D0E' },
  'Equipment & Hardware':    { bg: '#F1F5F9', text: '#334155' },
};

function CategoryBadge({ category }: { category: string }) {
  const colors = CATEGORY_COLORS[category] || { bg: '#F3F4F6', text: '#374151' };
  return (
    <span
      className="inline-flex items-center px-[10px] py-[4px] rounded-full text-[12px] font-medium whitespace-nowrap"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {category}
    </span>
  );
}

function DetailField({ label, value, children }: { label: string; value?: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[4px]">
      <p className="text-[12px] font-medium text-[#5d667b] leading-[16px]">{label}</p>
      {children ?? <p className="text-[14px] font-medium text-[#101828] leading-[20px]">{value || '—'}</p>}
    </div>
  );
}

function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed bottom-[24px] right-[24px] z-[9999] flex items-center gap-[12px] px-[16px] py-[14px] rounded-[8px] shadow-lg"
      style={{
        backgroundColor: type === 'success' ? '#DCFCE7' : '#FEE2E2',
        border: `1px solid ${type === 'success' ? '#86EFAC' : '#FECACA'}`,
      }}
    >
      <span className="text-[14px] font-medium" style={{ color: type === 'success' ? '#166534' : '#991B1B' }}>
        {message}
      </span>
      <button onClick={onClose} className="cursor-pointer opacity-60 hover:opacity-100 flex-shrink-0">
        <X size={14} color={type === 'success' ? '#166534' : '#991B1B'} />
      </button>
    </div>,
    document.body
  );
}

function ReviewDrawer({
  request,
  onClose,
  onApprove,
  onReject,
}: {
  request: ExpenseRequest;
  onClose: () => void;
  onApprove: (id: string) => void;
  onReject: (id: string, reason: string) => void;
}) {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [rejectError, setRejectError] = useState('');

  const canAction = request.status === 'Pending' || request.status === 'Pending Review';
  const formattedAmount = new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(request.amount);

  return createPortal(
    <>
      {/* Drawer */}
      <div className="fixed inset-0 z-[1000] flex justify-end">
        <div className="absolute inset-0 bg-black/30" onClick={onClose} />

        <div className="relative w-[540px] h-full bg-white shadow-2xl flex flex-col overflow-hidden">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-[24px] py-[16px] border-b border-[#eaecf0] flex-shrink-0">
            <div className="flex items-center gap-[12px]">
              <Avatar name={request.staffName} size={40} />
              <div>
                <p className="text-[16px] font-semibold text-[#101828] leading-[24px]">{request.staffName}</p>
                <p className="text-[12px] text-[#5d667b] leading-[18px]">{request.designation} · {request.department}</p>
              </div>
            </div>
            <div className="flex items-center gap-[12px]">
              <StatusBadge status={request.status} />
              <button onClick={onClose} className="cursor-pointer p-[4px] hover:bg-[#f2f4f7] rounded-[4px] transition-colors">
                <X size={18} color="#5d667b" />
              </button>
            </div>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto px-[24px] py-[20px] flex flex-col gap-[24px]">
            {/* Amount */}
            <div className="flex justify-end">
              <div className="text-right">
                <p className="text-[12px] font-medium text-[#5d667b]">Amount</p>
                <p className="text-[18px] font-bold text-[#101828]">{request.currencySymbol}{formattedAmount}</p>
              </div>
            </div>

            {/* Expense Details */}
            <div className="flex flex-col gap-[16px]">
              <p className="text-[14px] font-semibold text-[#101828]">Expense Details</p>
              <div className="grid grid-cols-2 gap-[16px]">
                <DetailField label="Category">
                  <CategoryBadge category={request.category} />
                </DetailField>
                <DetailField label="Expense Date" value={request.expenseDate} />
                <DetailField label="Submitted On" value={request.submittedOn} />
                <DetailField label="Quantity" value={String(request.quantity)} />
              </div>
              <DetailField label="Description" value={request.description} />
            </div>

            {/* Attached Receipts */}
            {request.attachments.length > 0 && (
              <div className="flex flex-col gap-[12px]">
                <p className="text-[14px] font-semibold text-[#101828]">Attached Receipts</p>
                <div className="flex flex-col gap-[8px]">
                  {request.attachments.map((att, idx) => (
                    <div key={idx} className="flex items-center justify-between px-[12px] py-[10px] border border-[#eaecf0] rounded-[8px] bg-[#f9fafb]">
                      <div className="flex items-center gap-[10px]">
                        <div className="w-[32px] h-[32px] bg-[#ebeefd] rounded-[6px] flex items-center justify-center flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M9.33333 1.33334H4C3.64638 1.33334 3.30724 1.47381 3.05719 1.72386C2.80714 1.97391 2.66667 2.31305 2.66667 2.66668V13.3333C2.66667 13.687 2.80714 14.0261 3.05719 14.2762C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V5.33334L9.33333 1.33334Z" stroke="#3a58ef" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.33333 1.33334V5.33334H13.3333" stroke="#3a58ef" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-[#101828]">{att.name}</p>
                          <p className="text-[11px] text-[#5d667b]">{att.size}</p>
                        </div>
                      </div>
                      <button className="cursor-pointer p-[6px] hover:bg-[#f2f4f7] rounded-[4px] transition-colors">
                        <Download size={14} color="#5d667b" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Finance Review Notes */}
            {request.financeNotes && (
              <div className="flex flex-col gap-[8px]">
                <p className="text-[14px] font-semibold text-[#101828]">Finance Review Notes</p>
                <p className="text-[13px] text-[#5d667b] leading-[20px] bg-[#f9fafb] rounded-[8px] px-[12px] py-[10px] border border-[#eaecf0]">
                  {request.financeNotes}
                </p>
              </div>
            )}

            {/* Rejection Reason */}
            {request.status === 'Rejected' && request.rejectionReason && (
              <div className="flex flex-col gap-[8px]">
                <p className="text-[14px] font-semibold text-[#991B1B]">Rejection Reason</p>
                <p className="text-[13px] text-[#5d667b] leading-[20px] bg-[#FEF2F2] rounded-[8px] px-[12px] py-[10px] border border-[#FECACA]">
                  {request.rejectionReason}
                </p>
              </div>
            )}

            {/* Comments & History */}
            {request.history.length > 0 && (
              <div className="flex flex-col gap-[12px]">
                <p className="text-[14px] font-semibold text-[#101828]">Comments & History</p>
                <div className="flex flex-col gap-0 relative">
                  {request.history.map((entry, idx) => (
                    <div key={idx} className="flex gap-[12px] relative pb-[16px]">
                      {idx < request.history.length - 1 && (
                        <div className="absolute left-[15px] top-[32px] bottom-0 w-[2px] bg-[#eaecf0]" />
                      )}
                      <div className="w-[32px] h-[32px] bg-[#ebeefd] rounded-full flex items-center justify-center flex-shrink-0 relative z-[1]">
                        <span className="text-[11px] font-semibold text-[#3a58ef]">{getInitials(entry.user)}</span>
                      </div>
                      <div className="flex-1 pt-[4px]">
                        <p className="text-[13px] font-medium text-[#101828]">{entry.user}</p>
                        <p className="text-[12px] text-[#5d667b]">{entry.action}</p>
                        <p className="text-[11px] text-[#98a2b3] mt-[2px]">{entry.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {canAction && (
            <div className="flex items-center gap-[12px] px-[24px] py-[16px] border-t border-[#eaecf0] flex-shrink-0">
              <button
                onClick={() => setShowRejectModal(true)}
                className="flex-1 flex items-center justify-center px-[16px] py-[10px] border border-[#d0d5dd] rounded-[4px] text-[14px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors cursor-pointer"
              >
                Reject
              </button>
              <button
                onClick={() => setShowApproveModal(true)}
                className="flex-1 flex items-center justify-center px-[16px] py-[10px] bg-[#3a58ef] rounded-[4px] text-[14px] font-semibold text-white hover:bg-[#2d47d1] transition-colors cursor-pointer"
              >
                Approve
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Approve Modal — fixed full-screen, above the drawer */}
      {showApproveModal && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-[12px] shadow-xl w-[400px] p-[24px] flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-[16px] font-semibold text-[#101828]">Approve Expense Request?</p>
              <p className="text-[14px] text-[#5d667b]">
                You're approving <span className="font-semibold text-[#101828]">{request.staffName}</span>'s expense of{' '}
                <span className="font-semibold text-[#101828]">{request.currencySymbol}{formattedAmount}</span>. This action cannot be undone.
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <button
                onClick={() => setShowApproveModal(false)}
                className="flex-1 px-[16px] py-[10px] border border-[#d0d5dd] rounded-[4px] text-[14px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => { setShowApproveModal(false); onApprove(request.id); }}
                className="flex-1 px-[16px] py-[10px] bg-[#3a58ef] rounded-[4px] text-[14px] font-semibold text-white hover:bg-[#2d47d1] transition-colors cursor-pointer"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal — fixed full-screen, above the drawer */}
      {showRejectModal && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-[12px] shadow-xl w-[440px] p-[24px] flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[8px]">
              <p className="text-[16px] font-semibold text-[#101828]">Reject Expense Request?</p>
              <p className="text-[14px] text-[#5d667b]">Please provide a reason for rejecting this request.</p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="text-[13px] font-medium text-[#344054]">
                Reason for Rejection <span className="text-[#DC2626]">*</span>
              </label>
              <textarea
                value={rejectReason}
                onChange={(e) => { setRejectReason(e.target.value); setRejectError(''); }}
                placeholder="Enter rejection reason..."
                rows={4}
                className="w-full px-[12px] py-[10px] border rounded-[8px] text-[14px] text-[#101828] resize-none outline-none focus:border-[#3a58ef] focus:ring-1 focus:ring-[#3a58ef] transition-colors"
                style={{ borderColor: rejectError ? '#DC2626' : '#d0d5dd' }}
              />
              {rejectError && <p className="text-[12px] text-[#DC2626]">{rejectError}</p>}
            </div>
            <div className="flex items-center gap-[12px]">
              <button
                onClick={() => { setShowRejectModal(false); setRejectReason(''); setRejectError(''); }}
                className="flex-1 px-[16px] py-[10px] border border-[#d0d5dd] rounded-[4px] text-[14px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (!rejectReason.trim()) { setRejectError('Rejection reason is required.'); return; }
                  setShowRejectModal(false);
                  onReject(request.id, rejectReason.trim());
                  setRejectReason('');
                  setRejectError('');
                }}
                className="flex-1 px-[16px] py-[10px] bg-[#DC2626] rounded-[4px] text-[14px] font-semibold text-white hover:bg-[#B91C1C] transition-colors cursor-pointer"
              >
                Reject Request
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

const INITIAL_REQUESTS: ExpenseRequest[] = [
  {
    id: 'exp-001', trackingNo: 'EXP-2025-0001',
    staffName: 'Priya Sharma', staffId: 'EMP-1045',
    designation: 'Senior Tax Associate', department: 'Tax Accounting',
    category: 'Travel',
    description: 'Client site visit — Fair & Company CPAs PLLC, round trip cab fare and meals',
    submittedOn: 'Apr 15, 2025', expenseDate: 'Apr 14, 2025',
    amount: 12500, currency: 'INR', currencySymbol: '₹',
    status: 'Pending', reimbType: 'client', client: 'Fair & Company CPAs PLLC', quantity: 1,
    attachments: [{ name: 'cab_receipt_apr14.pdf', size: '128 KB' }, { name: 'meal_receipt_apr14.jpg', size: '84 KB' }],
    financeNotes: '', rejectionReason: '', country: 'India',
    history: [{ user: 'Priya Sharma', action: 'Submitted expense request', timestamp: 'Apr 15, 2025 · 09:32 AM' }],
  },
  {
    id: 'exp-002', trackingNo: 'EXP-2025-0002',
    staffName: 'Rajesh Kumar', staffId: 'EMP-1012',
    designation: 'Audit Manager', department: 'Audit',
    category: 'Software Subscription',
    description: 'Annual subscription for CCH ProSystem fx Engagement audit software',
    submittedOn: 'Apr 18, 2025', expenseDate: 'Apr 18, 2025',
    amount: 8999, currency: 'INR', currencySymbol: '₹',
    status: 'Pending Review', reimbType: 'mycpe', client: '', quantity: 1,
    attachments: [{ name: 'invoice_cch_apr2025.pdf', size: '215 KB' }],
    financeNotes: 'Pending approval from department head before finance can process.', rejectionReason: '', country: 'India',
    history: [
      { user: 'Rajesh Kumar', action: 'Submitted expense request', timestamp: 'Apr 18, 2025 · 11:05 AM' },
      { user: 'Finance Team', action: 'Moved to Pending Review — awaiting dept. head sign-off', timestamp: 'Apr 19, 2025 · 02:15 PM' },
    ],
  },
  {
    id: 'exp-003', trackingNo: 'EXP-2025-0003',
    staffName: 'Sneha Patel', staffId: 'EMP-1031',
    designation: 'Bookkeeper', department: 'Bookkeeping',
    category: 'Office Supplies',
    description: 'Purchase of stationery and printer cartridges for Q1 reporting',
    submittedOn: 'Mar 28, 2025', expenseDate: 'Mar 27, 2025',
    amount: 3450, currency: 'INR', currencySymbol: '₹',
    status: 'Approved', reimbType: 'mycpe', client: '', quantity: 3,
    attachments: [{ name: 'office_supplies_receipt.jpg', size: '67 KB' }],
    financeNotes: 'Approved. Will be processed in the next payroll cycle.', rejectionReason: '', country: 'India',
    history: [
      { user: 'Sneha Patel', action: 'Submitted expense request', timestamp: 'Mar 28, 2025 · 10:00 AM' },
      { user: 'Finance Team', action: 'Approved expense request', timestamp: 'Mar 30, 2025 · 04:00 PM' },
    ],
  },
  {
    id: 'exp-004', trackingNo: 'EXP-2025-0004',
    staffName: 'Amit Verma', staffId: 'EMP-1078',
    designation: 'Tax Manager', department: 'Tax Accounting',
    category: 'Conference & Training',
    description: 'Registration fee for AICPA ENGAGE 2025 conference, Las Vegas',
    submittedOn: 'Mar 10, 2025', expenseDate: 'Mar 08, 2025',
    amount: 15000, currency: 'INR', currencySymbol: '₹',
    status: 'Rejected', reimbType: 'mycpe', client: '', quantity: 1,
    attachments: [{ name: 'conference_registration.pdf', size: '178 KB' }],
    financeNotes: 'Budget exceeded for this quarter. Conference registration must be pre-approved.',
    rejectionReason: 'Conference expenses above ₹10,000 require pre-approval via the Training Request form. Please resubmit after obtaining HOD sign-off.', country: 'USA',
    history: [
      { user: 'Amit Verma', action: 'Submitted expense request', timestamp: 'Mar 10, 2025 · 09:15 AM' },
      { user: 'Finance Team', action: 'Rejected — requires pre-approval for conferences above ₹10,000', timestamp: 'Mar 12, 2025 · 11:30 AM' },
    ],
  },
  {
    id: 'exp-005', trackingNo: 'EXP-2025-0005',
    staffName: 'Deepa Nair', staffId: 'EMP-1055',
    designation: 'Specialist - Tax Accounting', department: 'Tax Accounting',
    category: 'Meals & Entertainment',
    description: 'Team dinner for Q4 close milestone — 6 team members at The Grand',
    submittedOn: 'Feb 22, 2025', expenseDate: 'Feb 21, 2025',
    amount: 6800, currency: 'INR', currencySymbol: '₹',
    status: 'Disbursed', reimbType: 'client', client: 'White & Company PSC', quantity: 6,
    attachments: [{ name: 'dinner_receipt_feb21.pdf', size: '95 KB' }],
    financeNotes: 'Reimbursed via March payroll.', rejectionReason: '', country: 'India',
    history: [
      { user: 'Deepa Nair', action: 'Submitted expense request', timestamp: 'Feb 22, 2025 · 08:45 AM' },
      { user: 'Finance Team', action: 'Approved expense request', timestamp: 'Feb 24, 2025 · 03:00 PM' },
      { user: 'Finance Team', action: 'Disbursed via March payroll', timestamp: 'Mar 31, 2025 · 12:00 PM' },
    ],
  },
  {
    id: 'exp-006', trackingNo: 'EXP-2025-0006',
    staffName: 'Vikram Singh', staffId: 'EMP-1019',
    designation: 'Asst. Manager - Tax Accounting', department: 'Tax Accounting',
    category: 'Internet & Connectivity',
    description: 'Home broadband upgrade for faster remote access during tax season',
    submittedOn: 'Apr 20, 2025', expenseDate: 'Apr 20, 2025',
    amount: 2400, currency: 'INR', currencySymbol: '₹',
    status: 'Pending', reimbType: 'mycpe', client: '', quantity: 1,
    attachments: [{ name: 'broadband_bill_apr2025.pdf', size: '55 KB' }],
    financeNotes: '', rejectionReason: '', country: 'United Kingdom',
    history: [{ user: 'Vikram Singh', action: 'Submitted expense request', timestamp: 'Apr 20, 2025 · 01:10 PM' }],
  },
  {
    id: 'exp-007', trackingNo: 'EXP-2025-0007',
    staffName: 'Lakshmi Rao', staffId: 'EMP-1067',
    designation: 'Specialist - Tax Accounting', department: 'Tax Accounting',
    category: 'Books & Publications',
    description: 'Purchase of US Tax Guide 2025 and IFRS Standards handbook',
    submittedOn: 'Mar 05, 2025', expenseDate: 'Mar 04, 2025',
    amount: 1750, currency: 'INR', currencySymbol: '₹',
    status: 'Approved', reimbType: 'mycpe', client: '', quantity: 2,
    attachments: [{ name: 'book_purchase_receipt.jpg', size: '43 KB' }],
    financeNotes: 'Approved. Processing in April payroll.', rejectionReason: '', country: 'India',
    history: [
      { user: 'Lakshmi Rao', action: 'Submitted expense request', timestamp: 'Mar 05, 2025 · 10:30 AM' },
      { user: 'Finance Team', action: 'Approved expense request', timestamp: 'Mar 07, 2025 · 02:45 PM' },
    ],
  },
  {
    id: 'exp-008', trackingNo: 'EXP-2025-0008',
    staffName: 'Arjun Mehta', staffId: 'EMP-1088',
    designation: 'Audit Associate', department: 'Audit',
    category: 'Equipment & Hardware',
    description: 'Laptop keyboard replacement and external monitor for work-from-home setup',
    submittedOn: 'Apr 22, 2025', expenseDate: 'Apr 21, 2025',
    amount: 22500, currency: 'INR', currencySymbol: '₹',
    status: 'Pending Review', reimbType: 'mycpe', client: '', quantity: 2,
    attachments: [{ name: 'hardware_invoice_apr21.pdf', size: '312 KB' }, { name: 'product_photos.jpg', size: '1.2 MB' }],
    financeNotes: 'High-value hardware request — needs CFO approval.', rejectionReason: '', country: 'India',
    history: [
      { user: 'Arjun Mehta', action: 'Submitted expense request', timestamp: 'Apr 22, 2025 · 09:00 AM' },
      { user: 'Finance Team', action: 'Moved to Pending Review — CFO approval required for items above ₹20,000', timestamp: 'Apr 22, 2025 · 04:30 PM' },
    ],
  },
];

const ALL_CATEGORIES = Object.keys(CATEGORY_COLORS);
const ALL_COUNTRIES = ['India', 'USA', 'United Kingdom'];
const ALL_STATUSES: ExpenseStatus[] = ['Pending', 'Pending Review', 'Approved', 'Rejected', 'Disbursed'];

interface ActiveFilters {
  dateFrom: string;
  dateTo: string;
  category: string;
  country: string;
  status: string;
}

const EMPTY_FILTERS: ActiveFilters = { dateFrom: '', dateTo: '', category: '', country: '', status: '' };

function parseSubmittedDate(s: string): number {
  return new Date(s).getTime();
}

export default function ClientExpensesView({ onNavigationChange: _onNavigationChange }: ClientExpensesViewProps) {
  const [requests, setRequests] = useState<ExpenseRequest[]>(INITIAL_REQUESTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [draftFilters, setDraftFilters] = useState<ActiveFilters>(EMPTY_FILTERS);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters>(EMPTY_FILTERS);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedRequest, setSelectedRequest] = useState<ExpenseRequest | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const activeFilterCount = Object.values(activeFilters).filter(v => v !== '').length;

  const filtered = requests.filter(r => {
    const search = searchTerm.toLowerCase();
    if (search && !r.staffName.toLowerCase().includes(search) && !r.trackingNo.toLowerCase().includes(search) && !r.category.toLowerCase().includes(search) && !r.staffId.toLowerCase().includes(search)) return false;
    if (activeFilters.category && r.category !== activeFilters.category) return false;
    if (activeFilters.country && r.country !== activeFilters.country) return false;
    if (activeFilters.status && r.status !== activeFilters.status) return false;
    if (activeFilters.dateFrom) {
      const from = new Date(activeFilters.dateFrom).getTime();
      if (parseSubmittedDate(r.submittedOn) < from) return false;
    }
    if (activeFilters.dateTo) {
      const to = new Date(activeFilters.dateTo).getTime();
      if (parseSubmittedDate(r.submittedOn) > to) return false;
    }
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const paged = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => { setCurrentPage(1); }, [searchTerm, activeFilters]);

  const totalSpent    = requests.filter(r => r.status === 'Approved' || r.status === 'Disbursed').reduce((s, r) => s + r.amount, 0);
  const totalPending  = requests.filter(r => r.status === 'Pending' || r.status === 'Pending Review').reduce((s, r) => s + r.amount, 0);
  const totalApproved = requests.filter(r => r.status === 'Approved').reduce((s, r) => s + r.amount, 0);
  const totalDisbursed = requests.filter(r => r.status === 'Disbursed').reduce((s, r) => s + r.amount, 0);

  const fmt = (n: number) => '₹' + new Intl.NumberFormat('en-IN').format(n);

  const handleApprove = (id: string) => {
    const now = new Date().toLocaleString('en-IN', { day: 'short', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    setRequests(prev => prev.map(r =>
      r.id !== id ? r : { ...r, status: 'Approved' as ExpenseStatus, history: [...r.history, { user: 'You', action: 'Approved expense request', timestamp: now }] }
    ));
    setSelectedRequest(null);
    setToast({ message: 'Expense request approved successfully.', type: 'success' });
  };

  const handleReject = (id: string, reason: string) => {
    const now = new Date().toLocaleString('en-IN', { day: 'short', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    setRequests(prev => prev.map(r =>
      r.id !== id ? r : { ...r, status: 'Rejected' as ExpenseStatus, rejectionReason: reason, history: [...r.history, { user: 'You', action: `Rejected — ${reason}`, timestamp: now }] }
    ));
    setSelectedRequest(null);
    setToast({ message: 'Expense request rejected successfully.', type: 'success' });
  };

  const handleExport = () => {
    const rows = [
      ['Tracking No', 'Staff Name', 'Staff ID', 'Department', 'Category', 'Country', 'Description', 'Submitted On', 'Amount', 'Status'],
      ...filtered.map(r => [r.trackingNo, r.staffName, r.staffId, r.department, r.category, r.country, r.description, r.submittedOn, `${r.currencySymbol}${r.amount}`, r.status]),
    ];
    const csv = rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'expense-reimbursements.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const applyFilters = () => {
    setActiveFilters({ ...draftFilters });
    setShowFilter(false);
  };

  const clearFilters = () => {
    setDraftFilters(EMPTY_FILTERS);
    setActiveFilters(EMPTY_FILTERS);
  };

  const selectClass = "w-full px-[10px] py-[8px] border border-[#d0d5dd] rounded-[8px] text-[13px] text-[#101828] bg-white outline-none focus:border-[#3a58ef] transition-colors cursor-pointer appearance-none";
  const inputClass  = "w-full px-[10px] py-[8px] border border-[#d0d5dd] rounded-[8px] text-[13px] text-[#101828] bg-white outline-none focus:border-[#3a58ef] transition-colors";

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] h-full items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full">

      {/* Header */}
      <div className="flex flex-col gap-[4px] w-full flex-shrink-0">
        <div className="flex items-center gap-[6px]">
          <p className="text-[12px] font-medium text-[#5d667b] leading-[18px]">Finance</p>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 9L7.5 6L4.5 3" stroke="#5d667b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <p className="text-[12px] font-medium text-[#3a58ef] leading-[18px]">Expenses and Reimbursement</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-[24px] font-semibold text-[#101828] leading-[32px]">Expense Reimbursement</p>
            <p className="text-[14px] text-[#5d667b] leading-[20px]">Expense Reimbursement Module</p>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="relative">
              <div className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                <Search size={16} color="#98a2b3" />
              </div>
              <input
                type="text"
                placeholder="Search staff, ID or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-[38px] pr-[12px] py-[8px] border border-[#d0d5dd] rounded-[8px] text-[14px] text-[#101828] placeholder-[#98a2b3] outline-none focus:border-[#3a58ef] transition-colors w-[260px]"
              />
            </div>
            <button
              onClick={() => { setShowFilter(v => !v); if (!showFilter) setDraftFilters({ ...activeFilters }); }}
              className={`relative flex items-center gap-[8px] px-[14px] py-[8px] border rounded-[4px] text-[14px] font-medium transition-colors cursor-pointer ${showFilter || activeFilterCount > 0 ? 'bg-[#ebeefd] border-[#3a58ef] text-[#3a58ef]' : 'border-[#d0d5dd] text-[#344054] hover:bg-[#f9fafb]'}`}
            >
              <Filter size={16} color={showFilter || activeFilterCount > 0 ? '#3a58ef' : '#344054'} />
              Filter
              {activeFilterCount > 0 && (
                <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3a58ef] text-white text-[10px] font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <button
              onClick={handleExport}
              className="flex items-center gap-[8px] px-[14px] py-[8px] border border-[#d0d5dd] rounded-[4px] text-[14px] font-medium text-[#344054] hover:bg-[#f9fafb] transition-colors cursor-pointer"
            >
              <Download size={16} color="#344054" />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilter && (
        <div className="w-full flex-shrink-0 border border-[#eaecf0] rounded-[8px] bg-[#f9fafb] p-[16px] flex flex-col gap-[16px]">
          <div className="grid grid-cols-5 gap-[12px]">
            {/* Submitted On — From */}
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-medium text-[#344054]">Submitted On (From)</label>
              <input
                type="date"
                value={draftFilters.dateFrom}
                onChange={(e) => setDraftFilters(f => ({ ...f, dateFrom: e.target.value }))}
                className={inputClass}
              />
            </div>
            {/* Submitted On — To */}
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-medium text-[#344054]">Submitted On (To)</label>
              <input
                type="date"
                value={draftFilters.dateTo}
                onChange={(e) => setDraftFilters(f => ({ ...f, dateTo: e.target.value }))}
                className={inputClass}
              />
            </div>
            {/* Category */}
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-medium text-[#344054]">Category</label>
              <select
                value={draftFilters.category}
                onChange={(e) => setDraftFilters(f => ({ ...f, category: e.target.value }))}
                className={selectClass}
              >
                <option value="">All Categories</option>
                {ALL_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            {/* Country */}
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-medium text-[#344054]">Country</label>
              <select
                value={draftFilters.country}
                onChange={(e) => setDraftFilters(f => ({ ...f, country: e.target.value }))}
                className={selectClass}
              >
                <option value="">All Countries</option>
                {ALL_COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            {/* Status */}
            <div className="flex flex-col gap-[4px]">
              <label className="text-[12px] font-medium text-[#344054]">Status</label>
              <select
                value={draftFilters.status}
                onChange={(e) => setDraftFilters(f => ({ ...f, status: e.target.value }))}
                className={selectClass}
              >
                <option value="">All Statuses</option>
                {ALL_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end gap-[10px]">
            <button
              onClick={clearFilters}
              className="px-[14px] py-[7px] border border-[#d0d5dd] rounded-[4px] text-[13px] font-medium text-[#344054] hover:bg-white transition-colors cursor-pointer"
            >
              Clear All
            </button>
            <button
              onClick={applyFilters}
              className="px-[14px] py-[7px] bg-[#3a58ef] rounded-[4px] text-[13px] font-semibold text-white hover:bg-[#2d47d1] transition-colors cursor-pointer"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-[16px] w-full flex-shrink-0">
        {[
          { label: 'Total Amount Spent', value: fmt(totalSpent),    color: '#3a58ef' },
          { label: 'Pending Amount',     value: fmt(totalPending),   color: '#D97706' },
          { label: 'Approved Amount',    value: fmt(totalApproved),  color: '#16A34A' },
          { label: 'Reimbursed Amount',  value: fmt(totalDisbursed), color: '#2563EB' },
        ].map((card) => (
          <div key={card.label} className="flex flex-col gap-[4px] px-[16px] py-[14px] border border-[#eaecf0] rounded-[8px] bg-white">
            <p className="text-[12px] font-medium text-[#5d667b] leading-[18px]">{card.label}</p>
            <p className="text-[20px] font-bold leading-[28px]" style={{ color: card.color }}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto w-full">
        <table className="border-collapse w-full" style={{ minWidth: '1000px' }}>
          <thead>
            <tr className="bg-[#ebeefd]">
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] whitespace-nowrap">Staff Name</th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] whitespace-nowrap">Category</th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] min-w-[200px]">Description</th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] whitespace-nowrap">Submitted On</th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] whitespace-nowrap">Country</th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] whitespace-nowrap">Amount</th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] whitespace-nowrap">Status</th>
              <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-[16px] py-[40px] text-center">
                  <p className="text-[14px] text-[#5d667b]">
                    {searchTerm || activeFilterCount > 0 ? 'No results match your search or filters.' : 'No expense requests found.'}
                  </p>
                </td>
              </tr>
            ) : (
              paged.map((req) => (
                <tr key={req.id} className="border-b border-[#f2f2f2] hover:bg-[#f9fafb] transition-colors">
                  <td className="px-[16px] py-[12px]">
                    <div className="flex items-center gap-[10px]">
                      <Avatar name={req.staffName} size={32} />
                      <div>
                        <p className="text-[14px] font-medium text-[#101828] leading-[20px] whitespace-nowrap">{req.staffName}</p>
                        <p className="text-[12px] text-[#5d667b] leading-[18px] whitespace-nowrap">{req.department}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <CategoryBadge category={req.category} />
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <p className="text-[14px] text-[#5d667b] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap max-w-[220px]">{req.description}</p>
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <p className="text-[14px] text-[#5d667b] leading-[20px] whitespace-nowrap">{req.submittedOn}</p>
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <p className="text-[14px] text-[#5d667b] leading-[20px] whitespace-nowrap">{req.country}</p>
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <p className="text-[14px] font-medium text-[#101828] leading-[20px] whitespace-nowrap">
                      {'₹' + new Intl.NumberFormat('en-IN').format(req.amount)}
                    </p>
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <StatusBadge status={req.status} />
                  </td>
                  <td className="px-[16px] py-[12px]">
                    <button
                      onClick={() => setSelectedRequest(req)}
                      className="px-[12px] py-[6px] text-[13px] font-medium text-[#3a58ef] border border-[#3a58ef] rounded-[4px] hover:bg-[#ebeefd] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="content-stretch flex gap-[12px] items-center justify-between relative shrink-0 w-full pt-[4px]">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Showing</p>
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 border border-[#d0d5dd]">
            <select
              value={itemsPerPage}
              onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
              className="font-semibold leading-[24px] not-italic text-[#1d2939] text-[16px] bg-transparent outline-none cursor-pointer"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <p className="font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d2939] text-[16px] text-nowrap whitespace-pre">of {filtered.length}</p>
          <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">Records</p>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg className="relative shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M15.8337 10H4.16699M4.16699 10L10.0003 15.8333M4.16699 10L10.0003 4.16667" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg className="relative shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </button>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <input
              type="number"
              value={currentPage}
              onChange={(e) => {
                const page = Math.max(1, Math.min(totalPages, Number(e.target.value)));
                setCurrentPage(page);
              }}
              className="bg-white box-border overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 w-[60px] font-semibold text-[#1d2939] text-[16px] text-center outline-none border border-[#d0d5dd]"
            />
            <p className="font-normal leading-[1.25] not-italic relative shrink-0 text-[#5d667b] text-[16px] text-nowrap whitespace-pre">of {totalPages} pages</p>
          </div>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg className="relative shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg className="relative shrink-0 size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
            </svg>
          </button>
        </div>
      </div>

      {/* Review Drawer */}
      {selectedRequest && (
        <ReviewDrawer
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      )}

      {/* Toast */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </div>
  );
}
