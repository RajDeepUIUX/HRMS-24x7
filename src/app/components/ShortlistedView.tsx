import { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Filter,
  Eye,
  Check,
  XCircle,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  CheckCircle2,
  Info,
  Hourglass,
  ClipboardList,
} from 'lucide-react';
import { StaffCandidate } from './UnifiedHRApplication';

export default function ShortlistedView({
  onNavigationChange,
  candidates,
  initialData,
}: {
  onNavigationChange?: (view: string, data?: unknown) => void;
  candidates: StaffCandidate[];
  initialData?: { showSuccessToast?: boolean };
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCandidateIds, setSelectedCandidateIds] = useState<string[]>([]);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState<{ show: boolean; title: string; message: string }>({ show: false, title: '', message: '' });

  useEffect(() => {
    if (initialData?.showSuccessToast) {
      setSelectedCandidateIds([]);
      const timer = setTimeout(() => {
        setShowToast({ show: true, title: 'Success', message: 'Technical assessments requested successfully.' });
      }, 0);
      const hideTimer = setTimeout(() => setShowToast({ show: false, title: '', message: '' }), 5000);
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [initialData]);

  const selectedCandidatesForPanel = useMemo(() => {
    return candidates
      .filter(c => selectedCandidateIds.includes(c.id))
      .map(c => ({
        id: c.id,
        name: c.name,
        profile: c.profile,
        domain: c.domain,
        resumeId: c.resumeId,
        alreadyAssignedCount: c.assessments.count,
        alreadyAssignedIds: c.assessments.ids,
      }));
  }, [candidates, selectedCandidateIds]);

  const selectedCandidateForView = useMemo(() => {
    if (selectedCandidateIds.length === 1 && isDetailsModalOpen) {
      return candidates.find(c => c.id === selectedCandidateIds[0]);
    }
    return null;
  }, [candidates, selectedCandidateIds, isDetailsModalOpen]);

  const handleBulkRequest = () => {
    if (selectedCandidateIds.length > 0 && onNavigationChange) {
      onNavigationChange('request-technical-assessment', selectedCandidatesForPanel);
    }
  };

  const handleSingleAssign = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const candidate = candidates.find(c => c.id === id);
    if (candidate && onNavigationChange) {
      onNavigationChange('request-technical-assessment', [{
        id: candidate.id,
        name: candidate.name,
        profile: candidate.profile,
        domain: candidate.domain,
        resumeId: candidate.resumeId,
        alreadyAssignedCount: candidate.assessments.count,
        alreadyAssignedIds: candidate.assessments.ids,
      }]);
    }
  };

  const handleViewAssessment = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCandidateIds([id]);
    setIsDetailsModalOpen(true);
  };

  const stats = [
    { label: 'Shortlisted', count: '02', icon: <Check className="text-[#667085]" />, active: false },
    { label: 'Scheduled', count: '01', icon: <Hourglass className="text-[#667085]" />, active: false },
    { label: 'Hired', count: '03', icon: <CheckCircle2 className="text-[#667085]" />, active: false },
    { label: 'Not Selected', count: '01', icon: <XCircle className="text-[#667085]" />, active: false },
  ];

  const toggleSelectAll = () => {
    if (selectedCandidateIds.length === candidates.length) {
      setSelectedCandidateIds([]);
    } else {
      setSelectedCandidateIds(candidates.map(c => c.id));
    }
  };

  const toggleSelectCandidate = (id: string) => {
    if (selectedCandidateIds.includes(id)) {
      setSelectedCandidateIds(selectedCandidateIds.filter(cId => cId !== id));
    } else {
      setSelectedCandidateIds([...selectedCandidateIds, id]);
    }
  };

  return (
    <div className="bg-white box-border flex flex-col gap-[24px] h-full items-stretch overflow-auto p-[16px] md:p-[24px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] w-full font-sans">
      {/* Toast */}
      {showToast.show && (
        <div className="fixed top-[24px] right-[24px] z-[200] animate-in slide-in-from-right-full duration-300">
          <div className="bg-white rounded-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.1)] border-l-[4px] border-[#079455] p-[16px] flex items-start gap-[12px] min-w-[320px]">
            <CheckCircle2 size={24} className="text-[#079455]" />
            <div className="flex-1">
              <h5 className="text-[14px] font-bold text-[#101828]">{showToast.title}</h5>
              <p className="text-[13px] text-[#475467]">{showToast.message}</p>
            </div>
            <button onClick={() => setShowToast({ ...showToast, show: false })}>
              <XCircle size={18} className="text-[#98a2b3] hover:text-[#475467]" />
            </button>
          </div>
        </div>
      )}

      {/* Assessment Progress Drawer */}
      {isDetailsModalOpen && (
        <div className="fixed inset-0 z-[300] flex justify-end">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={() => setIsDetailsModalOpen(false)} />
          <div className="relative w-full max-w-[800px] bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-[24px] border-b border-[#eaecf0] flex items-center justify-between">
              <div>
                <h3 className="text-[20px] font-bold text-[#101828]">Assessment Progress Details</h3>
                <p className="text-[14px] text-[#667085]">Check the real-time status of candidate assessments.</p>
              </div>
              <button onClick={() => setIsDetailsModalOpen(false)} className="p-[8px] hover:bg-gray-100 rounded-full transition-colors">
                <XCircle size={24} className="text-[#667085]" />
              </button>
            </div>
            <div className="px-[24px] py-[16px] bg-white border-b border-[#eaecf0] grid grid-cols-1 md:grid-cols-3 gap-[16px]">
              <div>
                <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block mb-[2px]">Candidate</span>
                <span className="text-[14px] font-bold text-[#101828]">{selectedCandidateForView?.name || 'Albert Flores'}</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block mb-[2px]">Resume ID</span>
                <span className="text-[14px] font-bold text-[#101828]">{selectedCandidateForView?.resumeId || 'R-05649'}</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block mb-[2px]">Profile</span>
                <span className="text-[14px] font-bold text-[#101828]">{selectedCandidateForView?.profile || 'Sr. Associate - Tax Accountant'}</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-[24px]">
              <div className="border border-[#eaecf0] rounded-[12px] overflow-hidden">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#f8faff] border-b border-[#eaecf0]">
                      <th className="px-[16px] py-[12px] text-left text-[11px] font-bold text-[#475467] uppercase tracking-wider">Assessment Name</th>
                      <th className="px-[16px] py-[12px] text-left text-[11px] font-bold text-[#475467] uppercase tracking-wider">Assessed On</th>
                      <th className="px-[16px] py-[12px] text-[11px] font-bold text-[#475467] uppercase tracking-wider text-center">Score (%)</th>
                      <th className="px-[16px] py-[12px] text-[11px] font-bold text-[#475467] uppercase tracking-wider text-center">Status</th>
                      <th className="px-[16px] py-[12px] text-[11px] font-bold text-[#475467] uppercase tracking-wider text-center">Result</th>
                      <th className="px-[16px] py-[12px] text-[11px] font-bold text-[#475467] uppercase tracking-wider text-center">Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#eaecf0] hover:bg-[#f8faff] transition-colors">
                      <td className="px-[16px] py-[16px]">
                        <span className="text-[14px] text-[#101828] font-bold block">Accounting Principles</span>
                        <span className="text-[12px] text-[#667085]">Basic Level</span>
                      </td>
                      <td className="px-[16px] py-[16px] text-[14px] text-[#475467]">Jan 01, 2024</td>
                      <td className="px-[16px] py-[16px] text-[14px] text-[#101828] font-bold text-center">85</td>
                      <td className="px-[16px] py-[16px] text-center">
                        <span className="bg-[#ecfdf3] text-[#027a48] px-[10px] py-[4px] rounded-full text-[12px] font-bold">Completed</span>
                      </td>
                      <td className="px-[16px] py-[16px] text-center">
                        <span className="bg-[#fef2f2] text-[#b1720d] px-[10px] py-[4px] rounded-full text-[12px] font-bold">Fail</span>
                      </td>
                      <td className="px-[16px] py-[16px] text-center">
                        <button className="text-[#3a58ef] text-[14px] font-bold hover:underline">View</button>
                      </td>
                    </tr>
                    <tr className="border-b border-[#eaecf0] hover:bg-[#f8faff] transition-colors">
                      <td className="px-[16px] py-[16px]">
                        <span className="text-[14px] text-[#101828] font-bold block">Advanced Excel</span>
                        <span className="text-[12px] text-[#667085]">Intermediate Level</span>
                      </td>
                      <td className="px-[16px] py-[16px] text-[14px] text-[#475467]">Apr 02, 2025</td>
                      <td className="px-[16px] py-[16px] text-[14px] text-[#101828] font-bold text-center">79</td>
                      <td className="px-[16px] py-[16px] text-center">
                        <span className="bg-[#fffbeb] text-[#b45309] px-[10px] py-[4px] rounded-full text-[12px] font-bold">Pending</span>
                      </td>
                      <td className="px-[16px] py-[16px] text-[14px] text-[#667085] text-center">-</td>
                      <td className="px-[16px] py-[16px] text-center">
                        <button className="text-[#3a58ef] text-[14px] font-bold hover:underline">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-[24px] bg-white border-t border-[#eaecf0] flex justify-end">
              <button
                onClick={() => setIsDetailsModalOpen(false)}
                className="bg-white border border-[#d0d5dd] text-[#344054] px-[20px] py-[10px] rounded-[8px] font-bold hover:bg-gray-50 transition-colors"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumbs */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full gap-[4px]">
        <div className="flex items-center gap-[4px]">
          <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#98a2b3] text-[12px] whitespace-nowrap">Hire New Staff</p>
          <svg className="size-[12px]" fill="none" viewBox="0 0 16 16">
            <path d="M6 4L10 8L6 12" stroke="#98a2b3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-medium leading-[18px] not-italic relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Shortlisted Candidates</p>
        </div>
        <p className="font-bold leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] w-full">Shortlisted Candidates</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-[16px]">
        <div className="flex flex-wrap items-center gap-[12px]">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#667085]" size={18} />
            <input
              type="text"
              placeholder="Search by Job ID"
              className="w-full pl-[40px] pr-[12px] py-[10px] border border-[#eaecf0] rounded-[8px] text-[14px] focus:outline-none focus:ring-1 focus:ring-[#3a58ef]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={handleBulkRequest}
            disabled={selectedCandidateIds.length === 0}
            className={`px-[16px] py-[10px] rounded-[8px] text-[14px] font-medium border flex items-center gap-[8px] transition-all whitespace-nowrap ${
              selectedCandidateIds.length > 0
                ? 'bg-[#3a58ef] text-white border-[#3a58ef] hover:bg-[#2d46ca]'
                : 'bg-[#f2f4f7] text-[#667085] border-[#eaecf0] opacity-50 cursor-not-allowed'
            }`}
          >
            <ClipboardList size={18} />
            <span>Request Assessment</span>
            {selectedCandidateIds.length > 0 && <span>({selectedCandidateIds.length})</span>}
          </button>
          <button className="p-[10px] bg-[#3a58ef] text-white rounded-[8px] hover:bg-[#2d46ca] transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center justify-between p-[20px] rounded-[12px] border border-[#eaecf0] bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-[4px]">
              <span className="text-[#101828] text-[16px] font-semibold">{stat.label}</span>
              <span className="text-[#101828] text-[28px] font-bold leading-tight">{stat.count}</span>
            </div>
            <div className="size-[48px] flex items-center justify-center rounded-[8px] border border-[#eaecf0] bg-transparent">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="flex-1 border border-[#eaecf0] rounded-[12px] flex flex-col">
        <div className="overflow-x-auto">
        <table className="border-collapse w-full" style={{ minWidth: '1050px' }}>
          <thead>
            <tr className="bg-[#f8faff] border-b border-[#eaecf0]">
              <th className="p-[12px] text-left w-[48px] sticky left-0 z-[2] bg-[#f8faff] border-r border-[#d0d5dd]">
                <input
                  type="checkbox"
                  className="size-[16px] rounded border-[#d0d5dd] text-[#3a58ef] focus:ring-[#3a58ef] cursor-pointer"
                  checked={selectedCandidateIds.length === candidates.length && candidates.length > 0}
                  onChange={toggleSelectAll}
                />
              </th>
              <th className="p-[12px] text-left text-[12px] font-semibold text-[#475467] uppercase tracking-wider min-w-[150px]">Candidate Name</th>
              <th className="p-[12px] text-left text-[12px] font-semibold text-[#475467] uppercase tracking-wider min-w-[110px]">Resume ID</th>
              <th className="p-[12px] text-left text-[12px] font-semibold text-[#475467] uppercase tracking-wider min-w-[110px]">Domain</th>
              <th className="p-[12px] text-left text-[12px] font-semibold text-[#475467] uppercase tracking-wider min-w-[160px]">Profile</th>
              <th className="p-[12px] text-left text-[12px] font-semibold text-[#475467] uppercase tracking-wider min-w-[110px]">Assessments</th>
              <th className="p-[12px] text-left text-[12px] font-semibold text-[#475467] uppercase tracking-wider min-w-[180px]">Interview Date Time (EST)</th>
              <th className="p-[12px] text-left text-[12px] font-semibold text-[#475467] uppercase tracking-wider sticky right-0 z-[2] bg-[#f8faff] border-l border-[#d0d5dd]">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => {
              const isHired = candidate.status === 'Hired';
              const assessmentData = candidate.assessments;

              return (
                <tr key={candidate.id} className="group border-b border-[#eaecf0] hover:bg-[#f8faff] transition-colors">
                  <td className="p-[12px] sticky left-0 z-[1] bg-white group-hover:bg-[#f8faff] border-r border-[#d0d5dd] transition-colors">
                    <input
                      type="checkbox"
                      className={`size-[16px] rounded border-[#d0d5dd] text-[#3a58ef] focus:ring-[#3a58ef] ${isHired ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                      checked={selectedCandidateIds.includes(candidate.id)}
                      onChange={() => !isHired && toggleSelectCandidate(candidate.id)}
                      disabled={isHired}
                    />
                  </td>
                  <td className="p-[12px] text-[14px] text-[#101828] font-bold">{candidate.name}</td>
                  <td className="p-[12px] text-[14px] text-[#667085]">{candidate.resumeId}</td>
                  <td className="p-[12px] text-[14px] text-[#101828]">{candidate.domain}</td>
                  <td className="p-[12px] text-[14px] text-[#101828] font-medium">{candidate.profile}</td>
                  <td className="p-[12px] text-[14px]">
                    <div className="flex flex-col gap-[4px] relative group/assess">
                      {isHired && (
                        <div className="absolute bottom-full left-0 mb-2 hidden group-hover/assess:block z-[50]">
                          <div className="bg-[#1d2939] text-white text-[11px] px-[8px] py-[4px] rounded-[4px] whitespace-nowrap flex items-center gap-[6px]">
                            <Info size={12} />
                            Assessment cannot be requested after candidate is hired.
                          </div>
                        </div>
                      )}
                      {!isHired ? (
                        <div className="flex items-center gap-[8px]">
                          {assessmentData.status === 'Not Assigned' ? (
                            <button
                              onClick={(e) => handleSingleAssign(candidate.id, e)}
                              className="text-[#3a58ef] font-normal hover:underline"
                            >
                              Assign
                            </button>
                          ) : (
                            <button
                              onClick={(e) => handleViewAssessment(candidate.id, e)}
                              className="text-[#3a58ef] font-normal hover:underline"
                            >
                              View
                            </button>
                          )}
                        </div>
                      ) : (
                        <span className="text-[#98a2b3] font-medium italic">Assignment Locked</span>
                      )}
                    </div>
                  </td>
                  <td className="p-[12px] text-[14px]">
                    {candidate.interviewDateTime !== '-' ? (
                      <div className="flex flex-col">
                        <span className="text-[#101828] font-bold">
                          {candidate.interviewDateTime.split(' ').slice(0, 3).join(' ')}
                        </span>
                        <span className="text-[#667085] text-[12px]">
                          {candidate.interviewDateTime.split(' ').slice(3).join(' ')}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#667085] font-medium">-</span>
                    )}
                  </td>
                  <td className="p-[12px] sticky right-0 z-[1] bg-white group-hover:bg-[#f8faff] border-l border-[#d0d5dd] transition-colors">
                    <div className="flex items-center gap-[12px]">
                      <button className="text-[#667085] hover:text-[#3a58ef] transition-colors relative p-[6px] hover:bg-gray-100 rounded-full" title="Quick View">
                        <Eye size={20} />
                        {(candidate.id === '3' || candidate.assessments.status === 'Not Assigned') && (
                          <span className="absolute top-[6px] right-[6px] size-[8px] bg-orange-500 rounded-full border border-white" />
                        )}
                      </button>
                      {candidate.status === 'Hired' ? (
                        <div className="bg-[#ecfdf3] text-[#027a48] px-[12px] py-[6px] rounded-[4px] text-[12px] font-bold flex items-center gap-[4px]">
                          <Check size={14} /> Hired
                        </div>
                      ) : (
                        <button
                          className={`${candidate.status === 'Shortlisted' ? 'bg-[#3a58ef] text-white hover:bg-[#2d46ca]' : 'bg-[#eff8ff] text-[#3a58ef] hover:bg-[#e0effe]'} px-[12px] py-[6px] rounded-[4px] text-[12px] font-bold transition-all flex items-center gap-[4px] whitespace-nowrap active:scale-[0.98] shadow-sm hover:shadow-md`}
                        >
                          {candidate.status === 'Shortlisted' ? 'Request Interview' : 'Feedback'}
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-[16px] p-[20px] border-t border-[#eaecf0] mt-auto">
          <div className="flex items-center gap-[12px]">
            <span className="text-[14px] text-[#475467]">Showing</span>
            <div className="relative">
              <select className="appearance-none bg-white border border-[#eaecf0] rounded-[8px] pl-[12px] pr-[32px] py-[8px] text-[14px] text-[#101828] focus:outline-none focus:ring-1 focus:ring-[#3a58ef] min-w-[70px]">
                <option>20</option>
                <option>50</option>
                <option>100</option>
              </select>
              <ChevronLeft size={16} className="absolute right-[8px] top-1/2 -translate-y-1/2 rotate-[270deg] text-[#667085] pointer-events-none" />
            </div>
            <span className="text-[14px] text-[#475467]">of <span className="font-semibold text-[#101828]">500</span> Events</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <button className="size-[36px] border border-[#eaecf0] rounded-[8px] text-[#667085] hover:bg-gray-50 flex items-center justify-center">
              <ChevronsLeft size={18} />
            </button>
            <button className="size-[36px] border border-[#eaecf0] rounded-[8px] text-[#667085] hover:bg-gray-50 flex items-center justify-center">
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-[12px]">
              <div className="size-[36px] flex items-center justify-center rounded-[8px] border border-[#eaecf0] text-[#101828] text-[14px] font-medium bg-white">1</div>
              <span className="text-[14px] text-[#667085]">of 25 pages</span>
            </div>
            <button className="size-[36px] border border-[#eaecf0] rounded-[8px] text-[#667085] hover:bg-gray-50 flex items-center justify-center">
              <ChevronRight size={18} />
            </button>
            <button className="size-[36px] border border-[#eaecf0] rounded-[8px] text-[#667085] hover:bg-gray-50 flex items-center justify-center">
              <ChevronsRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
