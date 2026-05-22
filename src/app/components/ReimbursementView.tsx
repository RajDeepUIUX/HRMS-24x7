import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Wallet, FileText, Building2, Briefcase, X, ChevronDown,
  Trash2, Download, Upload, Check, AlertCircle, Search, Filter,
} from 'lucide-react';

// ── Constants ─────────────────────────────────────────────────────────────────

const CLIENTS = ['Acme Global Ltd', 'TechCorp Inc', 'Global Finance LLC', 'InnovateCo', 'Summit Partners', 'Vertex Holdings', 'BlueRidge Capital'];
const CATEGORIES = ['Travel & Lodging', 'Meals', 'Office Supplies', 'Internet', 'Software', 'Training', 'Miscellaneous'];
const CURRENCIES = [
  { value: 'USD', label: 'USD ($)', symbol: '$' },
  { value: 'INR', label: 'INR (₹)', symbol: '₹' },
  { value: 'EUR', label: 'EUR (€)', symbol: '€' },
  { value: 'GBP', label: 'GBP (£)', symbol: '£' },
];
const STATUS_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  Pending:   { bg: '#fef0c7', text: '#b54708', dot: '#f79009' },
  Approved:  { bg: '#d1fadf', text: '#027a48', dot: '#12b76a' },
  Rejected:  { bg: '#fee4e2', text: '#b42318', dot: '#f04438' },
  Disbursed: { bg: '#ebeefd', text: '#3a58ef', dot: '#3a58ef' },
};

// ── Types ─────────────────────────────────────────────────────────────────────

type ReimbType = 'mycpe' | 'client';
type Status = 'Pending' | 'Approved' | 'Rejected' | 'Disbursed';

interface ReimbRequest {
  id: string;
  trackingNo: string;
  date: string;
  type: ReimbType;
  client: string;
  category: string;
  currency: string;
  amount: number;
  quantity: number;
  description: string;
  status: Status;
  submittedOn: string;
  fileNames: string[];
}

interface FormState {
  client: string;
  category: string;
  date: string;
  currency: string;
  quantity: string;
  amount: string;
  description: string;
}

// ── Shared form field components (module-level to avoid remount on re-render) ──

function FormSelect({
  label, value, options, onChange, error, disabled = false, placeholder = 'Select', required = true,
}: {
  label: string; value: string; options: { value: string; label: string }[];
  onChange: (v: string) => void; error?: string; disabled?: boolean; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[4px]">
      <label className="font-normal text-[12px] text-[#667085] leading-[18px]">
        {label}{required && <span className="text-[#f04438] ml-[2px]">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`w-full font-normal text-[14px] border rounded-[6px] px-[12px] py-[8px] focus:outline-none appearance-none pr-[36px] leading-[24px] transition-colors ${
            disabled
              ? 'bg-[#f9fafb] text-[#98a2b3] cursor-not-allowed border-[#d0d5dd]'
              : error
              ? 'bg-white text-[#101828] cursor-pointer border-[#f04438] focus:border-[#f04438]'
              : 'bg-white text-[#101828] cursor-pointer border-[#d0d5dd] focus:border-[#3a58ef]'
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <ChevronDown className={`absolute right-[12px] top-1/2 -translate-y-1/2 size-[16px] pointer-events-none ${disabled ? 'text-[#c5cae0]' : 'text-[#667085]'}`} />
      </div>
      {error && (
        <p className="text-[12px] text-[#f04438] flex items-center gap-[4px] mt-[2px]">
          <AlertCircle className="size-[12px] shrink-0" />{error}
        </p>
      )}
    </div>
  );
}

function FormInput({
  label, value, onChange, error, type = 'text', min, placeholder, prefix,
}: {
  label: string; value: string; onChange: (v: string) => void;
  error?: string; type?: string; min?: string; placeholder?: string; prefix?: string;
}) {
  return (
    <div className="flex flex-col gap-[4px]">
      <label className="font-normal text-[12px] text-[#667085] leading-[18px]">
        {label}<span className="text-[#f04438] ml-[2px]">*</span>
      </label>
      <div className={`flex items-center border rounded-[6px] bg-white transition-colors ${error ? 'border-[#f04438]' : 'border-[#d0d5dd] focus-within:border-[#3a58ef]'}`}>
        {prefix && (
          <span className="pl-[12px] text-[14px] font-medium text-[#667085] leading-[24px] select-none shrink-0">{prefix}</span>
        )}
        <input
          type={type} min={min} value={value} placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full font-normal text-[14px] text-[#101828] bg-transparent focus:outline-none leading-[24px] py-[8px] ${prefix ? 'pl-[6px] pr-[12px]' : 'px-[12px]'}`}
        />
      </div>
      {error && (
        <p className="text-[12px] text-[#f04438] flex items-center gap-[4px] mt-[2px]">
          <AlertCircle className="size-[12px] shrink-0" />{error}
        </p>
      )}
    </div>
  );
}

function AmountInput({ value, onChange, error, prefix, currency }: {
  value: string; onChange: (v: string) => void;
  error?: string; prefix?: string; currency: string;
}) {
  const [focused, setFocused] = useState(false);
  const locale = currency === 'INR' ? 'en-IN' : 'en-US';

  const formatted = (() => {
    if (!value) return '';
    const num = parseFloat(value);
    if (isNaN(num)) return value;
    return new Intl.NumberFormat(locale, { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(num);
  })();

  return (
    <div className="flex flex-col gap-[4px]">
      <label className="font-normal text-[12px] text-[#667085] leading-[18px]">
        Amount<span className="text-[#f04438] ml-[2px]">*</span>
      </label>
      <div className={`flex items-center border rounded-[6px] bg-white transition-colors ${error ? 'border-[#f04438]' : 'border-[#d0d5dd] focus-within:border-[#3a58ef]'}`}>
        {prefix && (
          <span className="pl-[12px] text-[14px] font-medium text-[#667085] leading-[24px] select-none shrink-0">{prefix}</span>
        )}
        <input
          type="text"
          value={focused ? value : formatted}
          placeholder="0.00"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ''))}
          className={`w-full font-normal text-[14px] text-[#101828] bg-transparent focus:outline-none leading-[24px] py-[8px] ${prefix ? 'pl-[6px] pr-[12px]' : 'px-[12px]'}`}
        />
      </div>
      {error && (
        <p className="text-[12px] text-[#f04438] flex items-center gap-[4px] mt-[2px]">
          <AlertCircle className="size-[12px] shrink-0" />{error}
        </p>
      )}
    </div>
  );
}

// ── Toast ─────────────────────────────────────────────────────────────────────

function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 5000);
    return () => clearTimeout(t);
  }, [onDone]);

  return createPortal(
    <div className="fixed top-[20px] right-[20px] z-[400] bg-white border border-[#eaecf0] rounded-[8px] shadow-[0px_4px_16px_rgba(16,24,40,0.12)] px-[16px] py-[12px] flex items-center gap-[10px] max-w-[420px]">
      <div className="size-[32px] rounded-full bg-[#d1fadf] flex items-center justify-center shrink-0">
        <Check className="size-[16px] text-[#12b76a]" />
      </div>
      <p className="text-[14px] text-[#344054] font-medium leading-[20px] flex-1">{message}</p>
      <button onClick={onDone} className="text-[#98a2b3] hover:text-[#667085] shrink-0">
        <X className="size-[16px]" />
      </button>
    </div>,
    document.body
  );
}

// ── Type Selection Modal ──────────────────────────────────────────────────────

function TypeModal({ onSelect, onClose }: { onSelect: (t: ReimbType) => void; onClose: () => void }) {
  const OPTIONS = [
    {
      type: 'mycpe' as ReimbType,
      Icon: Building2,
      title: 'Through MYCPE One',
      desc: 'Internal company expenses — office supplies, internal events, admin purchases.',
    },
    {
      type: 'client' as ReimbType,
      Icon: Briefcase,
      title: 'Through Client',
      desc: 'Client-billable expenses — travel, client meetings, lodging for site visits.',
    },
  ];

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/30 z-[200]" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-[201] pointer-events-none">
        <div className="bg-white rounded-[12px] shadow-[0px_20px_60px_rgba(16,24,40,0.18)] w-[480px] pointer-events-auto" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#eaecf0]">
            <p className="font-bold text-[18px] text-[#101828] leading-[28px]">Reimbursement Type</p>
            <button onClick={onClose} className="text-[#667085] hover:text-[#344054] transition-colors">
              <X className="size-[20px]" />
            </button>
          </div>

          <div className="p-[24px] flex flex-col gap-[12px]">
            <p className="text-[13px] text-[#667085] mb-[4px]">Select the type of expense to continue.</p>
            {OPTIONS.map(({ type, Icon, title, desc }) => (
              <button
                key={type}
                onClick={() => onSelect(type)}
                className="w-full flex items-start gap-[14px] p-[16px] border border-[#eaecf0] rounded-[8px] hover:border-[#3a58ef] hover:bg-[#f5f8ff] transition-all text-left group"
              >
                <div className="size-[40px] rounded-[8px] bg-[#ebeefd] group-hover:bg-[#3a58ef] flex items-center justify-center shrink-0 transition-colors">
                  <Icon className="size-[20px] text-[#3a58ef] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-semibold text-[14px] text-[#101828] leading-[20px]">{title}</p>
                  <p className="text-[13px] text-[#667085] leading-[20px] mt-[2px]">{desc}</p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </>,
    document.body
  );
}

// ── Request Form Drawer ───────────────────────────────────────────────────────

function RequestFormDrawer({
  reimbType, initialForm, isEditing, onClose, onSubmit,
}: {
  reimbType: ReimbType; initialForm: FormState; isEditing: boolean;
  onClose: () => void; onSubmit: (form: FormState, files: File[]) => void;
}) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [fileErrors, setFileErrors] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const isMYCPE = reimbType === 'mycpe';
  const today = new Date().toISOString().split('T')[0];

  const set = (key: keyof FormState, val: string) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => { const n = { ...p }; delete n[key]; return n; });
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const errs: string[] = [];
    const valid: File[] = [];
    Array.from(e.target.files || []).forEach((f) => {
      const ext = f.name.split('.').pop()?.toLowerCase() || '';
      if (!['pdf', 'jpg', 'jpeg', 'png'].includes(ext)) errs.push(`${f.name}: unsupported format`);
      else if (f.size > 5 * 1024 * 1024) errs.push(`${f.name}: exceeds 5MB limit`);
      else valid.push(f);
    });
    setFiles((p) => [...p, ...valid]);
    setFileErrors(errs);
    if (fileRef.current) fileRef.current.value = '';
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (reimbType === 'client' && !form.client) e.client = 'Please select a client.';
    if (!form.category) e.category = 'Expense category is required.';
    if (!form.date) e.date = 'Date is required.';
    if (!form.currency) e.currency = 'Currency is required.';
    if (!form.quantity || Number(form.quantity) < 1) e.quantity = 'Quantity must be at least 1.';
    if (!form.amount || Number(form.amount) <= 0) e.amount = 'Please enter a valid amount greater than 0.';
    if (!form.description.trim()) e.description = 'Description is required.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/20 z-[200]" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-[500px] bg-white z-[201] flex flex-col shadow-[-8px_0_32px_rgba(16,24,40,0.12)]">

        {/* Header */}
        <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#eaecf0] shrink-0">
          <div>
            <p className="font-semibold text-[16px] text-[#101828] leading-[24px]">
              Request Reimbursement – {isMYCPE ? 'Through MYCPE One' : 'Through Client'}
            </p>
            {isEditing && <p className="text-[12px] text-[#667085] mt-[2px]">Editing existing request</p>}
          </div>
          <button onClick={onClose} className="text-[#667085] hover:text-[#344054] transition-colors">
            <X className="size-[20px]" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-[24px] py-[20px]">
          <div className="flex flex-col gap-[16px]">

            {/* Client */}
            {isMYCPE ? (
              <div className="flex flex-col gap-[4px]">
                <label className="font-normal text-[12px] text-[#667085] leading-[18px]">Select Client</label>
                <input
                  value="NA / Internal" disabled
                  className="w-full font-normal text-[14px] border border-[#d0d5dd] rounded-[6px] px-[12px] py-[8px] bg-[#f9fafb] text-[#98a2b3] cursor-not-allowed leading-[24px]"
                />
              </div>
            ) : (
              <FormSelect
                label="Select Client"
                value={form.client}
                options={CLIENTS.map((c) => ({ value: c, label: c }))}
                onChange={(v) => set('client', v)}
                error={errors.client}
                placeholder="Select client"
              />
            )}

            {/* Category */}
            <FormSelect
              label="Expense Category"
              value={form.category}
              options={CATEGORIES.map((c) => ({ value: c, label: c }))}
              onChange={(v) => set('category', v)}
              error={errors.category}
              placeholder="Select category"
            />

            {/* Date & Quantity */}
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[4px]">
                <label className="font-normal text-[12px] text-[#667085] leading-[18px]">
                  Date<span className="text-[#f04438] ml-[2px]">*</span>
                </label>
                <input
                  type="date" value={form.date} max={today}
                  onChange={(e) => set('date', e.target.value)}
                  className={`w-full font-normal text-[14px] text-[#101828] border rounded-[6px] px-[12px] py-[8px] bg-white focus:outline-none leading-[24px] transition-colors ${errors.date ? 'border-[#f04438]' : 'border-[#d0d5dd] focus:border-[#3a58ef]'}`}
                />
                {errors.date && <p className="text-[12px] text-[#f04438] flex items-center gap-[4px] mt-[2px]"><AlertCircle className="size-[12px]" />{errors.date}</p>}
              </div>
              <FormInput label="Quantity" value={form.quantity} onChange={(v) => set('quantity', v)} error={errors.quantity} type="number" min="1" />
            </div>

            {/* Currency & Amount */}
            <div className="grid grid-cols-2 gap-[12px]">
              <FormSelect
                label="Currency"
                value={form.currency}
                options={CURRENCIES.map((c) => ({ value: c.value, label: c.label }))}
                onChange={(v) => set('currency', v)}
                error={errors.currency}
                placeholder="Select"
              />
              <AmountInput
                value={form.amount}
                onChange={(v) => set('amount', v)}
                error={errors.amount}
                prefix={CURRENCIES.find((c) => c.value === form.currency)?.symbol}
                currency={form.currency}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-[4px]">
              <label className="font-normal text-[12px] text-[#667085] leading-[18px]">
                Description<span className="text-[#f04438] ml-[2px]">*</span>
              </label>
              <textarea
                rows={3}
                value={form.description}
                onChange={(e) => set('description', e.target.value)}
                placeholder="Enter reason or details for the reimbursement..."
                className={`w-full font-normal text-[14px] text-[#101828] border rounded-[6px] px-[12px] py-[8px] bg-white focus:outline-none leading-[24px] resize-none transition-colors placeholder:text-[#98a2b3] ${errors.description ? 'border-[#f04438]' : 'border-[#d0d5dd] focus:border-[#3a58ef]'}`}
              />
              {errors.description && <p className="text-[12px] text-[#f04438] flex items-center gap-[4px] mt-[2px]"><AlertCircle className="size-[12px]" />{errors.description}</p>}
            </div>

            {/* Attachments */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-normal text-[12px] text-[#667085] leading-[18px]">
                Attachments <span className="text-[#98a2b3]">(optional)</span>
              </label>
              <div
                onClick={() => fileRef.current?.click()}
                className="border-2 border-dashed border-[#eaecf0] rounded-[8px] p-[20px] flex flex-col items-center gap-[6px] cursor-pointer hover:border-[#3a58ef] hover:bg-[#f5f8ff] transition-all"
              >
                <Upload className="size-[20px] text-[#98a2b3]" />
                <p className="text-[13px] font-medium text-[#344054]">Click to upload</p>
                <p className="text-[12px] text-[#98a2b3]">PDF, JPG, PNG · Max 5MB per file</p>
              </div>
              <input ref={fileRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={handleFiles} className="hidden" />

              {fileErrors.length > 0 && fileErrors.map((e, i) => (
                <p key={i} className="text-[12px] text-[#f04438]">{e}</p>
              ))}

              {files.length > 0 && (
                <div className="flex flex-col gap-[6px]">
                  {files.map((f, i) => (
                    <div key={i} className="flex items-center justify-between px-[12px] py-[8px] bg-[#f9fafb] border border-[#eaecf0] rounded-[6px]">
                      <div className="flex items-center gap-[8px] min-w-0">
                        <FileText className="size-[14px] text-[#667085] shrink-0" />
                        <span className="text-[13px] text-[#344054] truncate">{f.name}</span>
                        <span className="text-[11px] text-[#98a2b3] shrink-0">{(f.size / 1024 / 1024).toFixed(1)}MB</span>
                      </div>
                      <button onClick={() => setFiles((p) => p.filter((_, j) => j !== i))} className="text-[#98a2b3] hover:text-[#f04438] transition-colors shrink-0 ml-[8px]">
                        <X className="size-[14px]" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-[12px] text-[#667085]">
                Attach receipts or invoices if available. This may help speed up approval.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-[24px] py-[16px] border-t border-[#eaecf0] shrink-0 flex items-center justify-between bg-white">
          <button onClick={onClose} className="px-[16px] py-[9px] border border-[#d0d5dd] rounded-[6px] text-[14px] font-semibold text-[#344054] hover:bg-[#f9fafb] transition-colors">
            Cancel
          </button>
          <button
            onClick={() => { if (validate()) onSubmit(form, files); }}
            className="bg-[#3a58ef] px-[20px] py-[9px] rounded-[6px] text-[14px] font-semibold text-white hover:bg-[#2d47d1] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
          >
            {isEditing ? 'Update Request' : 'Submit Request'}
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}

// ── Status Badge ──────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const s = STATUS_STYLES[status] || { bg: '#f9fafb', text: '#667085', dot: '#98a2b3' };
  return (
    <span className="inline-flex items-center gap-[5px] px-[8px] py-[3px] rounded-[16px] text-[12px] font-medium whitespace-nowrap" style={{ backgroundColor: s.bg, color: s.text }}>
      <span className="size-[6px] rounded-full shrink-0" style={{ backgroundColor: s.dot }} />
      {status}
    </span>
  );
}

// ── Main View ─────────────────────────────────────────────────────────────────

export default function ReimbursementView({ onNavigationChange: _ }: { onNavigationChange?: (view: string, data?: unknown) => void }) {
  const [requests, setRequests] = useState<ReimbRequest[]>([]);
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [reimbType, setReimbType] = useState<ReimbType | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormState>({ client: '', category: '', date: new Date().toISOString().split('T')[0], currency: 'USD', quantity: '1', amount: '', description: '' });
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const openTypeModal = () => setShowTypeModal(true);

  const handleTypeSelect = (type: ReimbType) => {
    setReimbType(type);
    setFormData({ client: '', category: '', date: new Date().toISOString().split('T')[0], currency: 'USD', quantity: '1', amount: '', description: '' });
    setEditingId(null);
    setShowTypeModal(false);
    setDrawerOpen(true);
  };

  const handleEdit = (id: string) => {
    const req = requests.find((r) => r.id === id);
    if (!req) return;
    setReimbType(req.type);
    setFormData({ client: req.client === 'NA / Internal' ? '' : req.client, category: req.category, date: req.date, currency: req.currency, quantity: String(req.quantity), amount: String(req.amount), description: req.description });
    setEditingId(id);
    setDrawerOpen(true);
  };

  const handleSubmit = (form: FormState, files: File[]) => {
    const submittedOn = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    if (editingId) {
      setRequests((prev) => prev.map((r) => r.id !== editingId ? r : {
        ...r,
        client: reimbType === 'mycpe' ? 'NA / Internal' : form.client,
        category: form.category, date: form.date, currency: form.currency,
        amount: Number(form.amount), quantity: Number(form.quantity), description: form.description,
        fileNames: [...r.fileNames, ...files.map((f) => f.name)],
      }));
      setToast('Reimbursement request updated successfully.');
    } else {
      const newReq: ReimbRequest = {
        id: `req-${Date.now()}`,
        trackingNo: `TRK-${String(requests.length + 1).padStart(3, '0')}`,
        date: form.date, type: reimbType!,
        client: reimbType === 'mycpe' ? 'NA / Internal' : form.client,
        category: form.category, currency: form.currency,
        amount: Number(form.amount), quantity: Number(form.quantity),
        description: form.description, status: 'Pending',
        submittedOn, fileNames: files.map((f) => f.name),
      };
      setRequests((prev) => [newReq, ...prev]);
      setToast(`Request submitted successfully. Tracking No: ${newReq.trackingNo}`);
    }
    setDrawerOpen(false);
    setEditingId(null);
  };

  const handleDelete = () => {
    if (!deleteConfirmId) return;
    setRequests((prev) => prev.filter((r) => r.id !== deleteConfirmId));
    setDeleteConfirmId(null);
    setToast('Request deleted.');
  };

  const fmtDate = (d: string) => { try { return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }); } catch { return d; } };
  const sym = (code: string) => CURRENCIES.find((c) => c.value === code)?.symbol || '';

  const filteredRequests = requests.filter((r) => {
    const q = searchTerm.toLowerCase();
    return !q || r.trackingNo.toLowerCase().includes(q) || r.category.toLowerCase().includes(q) || r.client.toLowerCase().includes(q) || r.status.toLowerCase().includes(q);
  });
  const totalPages = Math.max(1, Math.ceil(filteredRequests.length / itemsPerPage));
  const pagedRequests = filteredRequests.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex flex-col gap-[16px] h-full w-full overflow-auto">

      {requests.length === 0 ? (
        /* ── Empty state: header + full-screen service cards ── */
        <>
          <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] px-[24px] py-[20px] shrink-0">
            <p className="font-bold text-[20px] text-[#101828] leading-[30px]">Reimbursement Services</p>
            <p className="font-normal text-[13px] text-[#667085] leading-[20px] mt-[2px]">Select a request type to begin processing your professional expenses.</p>
          </div>

          <div className="grid grid-cols-2 gap-[16px] flex-1 min-h-0">
            {/* Advance card */}
            <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] flex flex-col items-center justify-center gap-[24px] p-[48px]">
              <div className="size-[140px] rounded-full bg-[#f0effe] flex items-center justify-center shrink-0">
                <Wallet className="size-[56px] text-[#7f56d9]" />
              </div>
              <div className="text-center">
                <p className="font-bold text-[22px] text-[#101828] leading-[32px]">Request for Advance?</p>
                <p className="font-normal text-[14px] text-[#667085] leading-[22px] mt-[10px] max-w-[300px]">
                  Offering advance payment for employee expenses. Simplify reimbursement process and support your team effortlessly.
                </p>
              </div>
              <button disabled className="px-[28px] py-[10px] border border-[#eaecf0] rounded-[8px] text-[14px] font-semibold text-[#98a2b3] bg-[#f9fafb] cursor-not-allowed flex items-center gap-[8px]">
                <span>₹</span> Req. Advance
                <span className="text-[11px] font-semibold bg-[#eaecf0] text-[#667085] px-[6px] py-[1px] rounded-[4px]">Coming Soon</span>
              </button>
            </div>

            {/* Reimbursement card */}
            <div className="bg-white rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] flex flex-col items-center justify-center gap-[24px] p-[48px]">
              <div className="size-[140px] rounded-full bg-[#f0effe] flex items-center justify-center shrink-0">
                <FileText className="size-[56px] text-[#7f56d9]" />
              </div>
              <div className="text-center">
                <p className="font-bold text-[22px] text-[#101828] leading-[32px]">Request for Reimbursement?</p>
                <p className="font-normal text-[14px] text-[#667085] leading-[22px] mt-[10px] max-w-[300px]">
                  Streamline reimbursement. Submit requests effortlessly and get reimbursed promptly. Simplify your process.
                </p>
              </div>
              <button onClick={openTypeModal} className="px-[28px] py-[10px] bg-[#3a58ef] rounded-[8px] text-[14px] font-semibold text-white hover:bg-[#2d47d1] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)] flex items-center gap-[8px]">
                <span>+</span> Req. Reimbursement
              </button>
            </div>
          </div>
        </>
      ) : (
        /* ── Has requests: matches Compensation design system ── */
        <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[8px] shadow-[0px_0px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] w-full flex-1 min-h-0">

          {/* Header */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[6px]">
                <p className="font-medium leading-[18px] not-italic text-[#98a2b3] text-[12px] whitespace-nowrap">Payroll</p>
                <svg className="shrink-0 size-[16px]" fill="none" viewBox="0 0 16 16"><path d="M6 12L10 8L6 4" stroke="#1D2939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <p className="font-medium leading-[18px] not-italic text-[#344054] text-[12px] whitespace-nowrap">Reimbursement</p>
              </div>
              <p className="font-semibold leading-[32px] text-[#101828] text-[24px]">Reimbursement</p>
              <p className="font-medium leading-[18px] text-[#98a2b3] text-[12px]">Request and track your professional expense reimbursements.</p>
            </div>
            <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
              <div className="bg-gray-50 relative rounded-[4px] shrink-0 w-[298px]">
                <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[16px] py-[10px] relative rounded-[inherit] w-[298px]">
                  <input
                    type="text"
                    placeholder="Search here"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                    className="font-normal leading-[20px] not-italic flex-1 bg-transparent outline-none text-[#5d667b] text-[14px]"
                  />
                  <Search className="relative shrink-0 size-[20px] text-[#5d667b]" strokeWidth={2} />
                </div>
                <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
              </div>
              <div
                className="bg-[#3a58ef] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[10px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0 cursor-pointer hover:bg-[#2d47d9] transition-colors"
                onClick={openTypeModal}
                title="New Request"
              >
                <Filter className="relative shrink-0 size-[20px] text-white" strokeWidth={2} />
              </div>
              <button
                onClick={openTypeModal}
                className="bg-[#3a58ef] px-[16px] py-[9px] rounded-[6px] text-[14px] font-semibold text-white hover:bg-[#2d47d1] transition-colors shadow-[0px_1px_2px_rgba(16,24,40,0.05)] whitespace-nowrap"
              >
                + New Request
              </button>
            </div>
          </div>

          {/* Table — flex-1 so it fills remaining height, pagination stays at bottom */}
          <div className="flex-1 min-h-0 overflow-auto w-full">
            <table className="border-collapse w-full" style={{ minWidth: '1060px' }}>
              <thead>
                <tr className="bg-[#ebeefd] h-[42px]">
                  <th className="text-left px-[16px] py-[8px] font-semibold text-[#101828] text-[12px] leading-[18px] sticky left-0 z-[2] bg-[#ebeefd] border-r border-[#d0d5dd] whitespace-nowrap">Tracking No.</th>
                  <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] whitespace-nowrap">Date</th>
                  <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[140px]">Reimb. Type</th>
                  <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[140px]">Client</th>
                  <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[150px]">Expense Category</th>
                  <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px]">Currency</th>
                  <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px]">Amount</th>
                  <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px]">Status</th>
                  <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] min-w-[120px]">Submitted On</th>
                  <th className="text-left px-[16px] py-[8px] font-semibold text-[#1d2939] text-[12px] leading-[18px] sticky right-0 z-[2] bg-[#ebeefd] border-l border-[#d0d5dd]" style={{ width: '100px' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {pagedRequests.map((req) => (
                  <tr key={req.id} className="group border-b border-[#f2f2f2] hover:bg-[#f9fafb] transition-colors">
                    <td className="px-[16px] py-[12px] sticky left-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-r border-[#d0d5dd] transition-colors">
                      <p className="font-semibold leading-[20px] not-italic text-[#3a58ef] text-[14px] whitespace-nowrap">{req.trackingNo}</p>
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] whitespace-nowrap">{fmtDate(req.date)}</p>
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <div className="flex items-center gap-[6px]">
                        {req.type === 'mycpe' ? <Building2 className="size-[14px] text-[#5d667b] shrink-0" /> : <Briefcase className="size-[14px] text-[#5d667b] shrink-0" />}
                        <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] whitespace-nowrap">{req.type === 'mycpe' ? 'MYCPE One' : 'Client'}</p>
                      </div>
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{req.client}</p>
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{req.category}</p>
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px]">{req.currency}</p>
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] whitespace-nowrap">
                        {sym(req.currency)}{new Intl.NumberFormat(req.currency === 'INR' ? 'en-IN' : 'en-US').format(req.amount)}
                      </p>
                    </td>
                    <td className="px-[16px] py-[12px]"><StatusBadge status={req.status} /></td>
                    <td className="px-[16px] py-[12px]">
                      <p className="font-normal leading-[20px] not-italic text-[#344054] text-[14px] whitespace-nowrap">{req.submittedOn}</p>
                    </td>
                    <td className="px-[16px] py-[12px] sticky right-0 z-[1] bg-white group-hover:bg-[#f9fafb] border-l border-[#d0d5dd] transition-colors" style={{ width: '100px' }}>
                      <div className="flex items-center gap-[12px]">
                        <Trash2
                          className={`relative shrink-0 size-[20px] transition-colors ${req.status === 'Pending' ? 'text-[#5d667b] cursor-pointer hover:text-[#f04438]' : 'text-[#d0d5dd] cursor-not-allowed'}`}
                          strokeWidth={2}
                          onClick={() => req.status === 'Pending' && setDeleteConfirmId(req.id)}
                        />
                        <Download className="relative shrink-0 size-[20px] text-[#5d667b] cursor-pointer hover:text-[#344054] transition-colors" strokeWidth={2} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="content-stretch flex gap-[12px] items-center justify-between relative shrink-0 w-full pt-[4px]">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] whitespace-nowrap">Showing</p>
              <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 border border-[#eaecf0]">
                <select value={itemsPerPage} onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }} className="font-semibold leading-[24px] not-italic text-[#1d2939] text-[16px] bg-transparent outline-none cursor-pointer">
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>
              <p className="font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d2939] text-[16px] whitespace-nowrap">of {filteredRequests.length}</p>
              <p className="font-normal leading-[24px] not-italic relative shrink-0 text-[#5d667b] text-[16px] whitespace-nowrap">Events</p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className="bg-white box-border flex items-center justify-center p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20"><path d="M15.8337 10H4.16699M4.16699 10L10.0003 15.8333M4.16699 10L10.0003 4.16667" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" /></svg>
              </button>
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="bg-white box-border flex items-center justify-center p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20"><path d="M12.5 15L7.5 10L12.5 5" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" /></svg>
              </button>
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <input type="number" value={currentPage} onChange={(e) => setCurrentPage(Math.max(1, Math.min(totalPages, Number(e.target.value))))} className="bg-white box-border overflow-clip px-[12px] py-[6px] relative rounded-[8px] shrink-0 w-[60px] font-semibold text-[#1d2939] text-[16px] text-center outline-none border border-[#d0d5dd]" />
                <p className="font-normal leading-[1.25] not-italic relative shrink-0 text-[#5d667b] text-[16px] whitespace-nowrap">of {totalPages} pages</p>
              </div>
              <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="bg-white box-border flex items-center justify-center p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20"><path d="M7.5 15L12.5 10L7.5 5" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" /></svg>
              </button>
              <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} className="bg-white box-border flex items-center justify-center p-[8px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] size-[40px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20"><path d="M4.16699 10H15.8337M15.8337 10L10.0003 4.16667M15.8337 10L10.0003 15.8333" stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" /></svg>
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Modals */}
      {showTypeModal && <TypeModal onSelect={handleTypeSelect} onClose={() => setShowTypeModal(false)} />}

      {drawerOpen && reimbType && (
        <RequestFormDrawer
          reimbType={reimbType} initialForm={formData} isEditing={!!editingId}
          onClose={() => { setDrawerOpen(false); setEditingId(null); }}
          onSubmit={handleSubmit}
        />
      )}

      {deleteConfirmId && createPortal(
        <>
          <div className="fixed inset-0 bg-black/20 z-[300]" onClick={() => setDeleteConfirmId(null)} />
          <div className="fixed inset-0 flex items-center justify-center z-[301] pointer-events-none">
            <div className="bg-white rounded-[8px] shadow-[0px_8px_24px_rgba(16,24,40,0.12)] p-[24px] w-[380px] pointer-events-auto">
              <p className="font-semibold text-[16px] text-[#101828] mb-[8px]">Delete Request?</p>
              <p className="text-[14px] text-[#667085] mb-[24px]">This will permanently remove the reimbursement request. This cannot be undone.</p>
              <div className="flex items-center justify-end gap-[8px]">
                <button onClick={() => setDeleteConfirmId(null)} className="px-[16px] py-[9px] border border-[#d0d5dd] rounded-[6px] text-[14px] font-medium text-[#344054] hover:bg-[#f9fafb] transition-colors">Cancel</button>
                <button onClick={handleDelete} className="px-[16px] py-[9px] bg-[#f04438] rounded-[6px] text-[14px] font-semibold text-white hover:bg-[#d92d20] transition-colors">Delete</button>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}

      {toast && <Toast message={toast} onDone={() => setToast(null)} />}
    </div>
  );
}
