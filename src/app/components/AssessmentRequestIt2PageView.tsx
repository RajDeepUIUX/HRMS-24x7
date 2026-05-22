import { useState, useEffect, useRef } from 'react';
import {
  X,
  ChevronDown,
  Trash2,
  AlertCircle,
  Check,
  Search,
  Info,
  Loader2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Assessment {
  id: string;
  name: string;
  level: string;
  questions: string;
  duration: string;
  score: string;
  status?: 'Completed' | 'Attempted' | null;
  description?: string;
}

const mockAssessments: Assessment[] = [
  {
    id: 'a1',
    name: 'Accounting Principles',
    level: 'Basic',
    questions: '20 MCQs',
    duration: '60 mins',
    score: '90',
    status: 'Completed',
    description: 'Covers fundamental accounting concepts, including the double-entry system, financial statements, and basic bookkeeping principles.',
  },
  {
    id: 'a2',
    name: 'Advanced Excel',
    level: 'Advance',
    questions: '20 MCQs',
    duration: '60 mins',
    score: '90',
    status: 'Completed',
    description: 'Tests proficiency in advanced Excel functions, pivot tables, data visualization, and complex financial modeling.',
  },
  {
    id: 'a3',
    name: 'Financial Reporting',
    level: 'Basic',
    questions: '20 MCQs',
    duration: '60 mins',
    score: '-',
    description: 'Evaluates the ability to prepare and interpret financial statements according to standard reporting frameworks.',
  },
  {
    id: 'a4',
    name: 'Taxation Basics',
    level: 'Intermediate',
    questions: '20 MCQs',
    duration: '60 mins',
    score: '-',
    description: 'Introduction to personal and corporate taxation, including taxable income calculations and basic compliance requirements.',
  },
  {
    id: 'a5',
    name: 'Advanced Financial Reporting and Compliance Review',
    level: 'Advanced',
    questions: '25 MCQs',
    duration: '90 mins',
    score: '-',
    description: 'In-depth assessment of complex financial reporting scenarios and regulatory compliance across multiple jurisdictions.',
  },
];

interface Candidate {
  id: string;
  name: string;
  resumeId: string;
  domain: string;
  profile: string;
}

interface AssessmentRequestIt2PageViewProps {
  candidates: Candidate[];
  onBack: () => void;
  onSuccess: (assignments: Record<string, string[]>) => void;
}

export default function AssessmentRequestIt2PageView({
  candidates: initialCandidates = [],
  onBack,
  onSuccess,
}: AssessmentRequestIt2PageViewProps) {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [candidateSelections, setCandidateSelections] = useState<Record<string, string[]>>({});
  const [assessmentSearchQueries, setAssessmentSearchQueries] = useState<Record<string, string>>({});
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [isAssigning, setIsAssigning] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [previewAssessment, setPreviewAssessment] = useState<Assessment | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (previewAssessment) {
          setPreviewAssessment(null);
        } else if (openDropdownId) {
          setOpenDropdownId(null);
        } else {
          onBack();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [openDropdownId, previewAssessment, onBack]);

  const toggleAssessment = (candidateId: string, assessmentId: string) => {
    const current = candidateSelections[candidateId] || [];
    setValidationErrors(prev => ({ ...prev, [candidateId]: '' }));
    if (current.includes(assessmentId)) {
      setCandidateSelections(prev => ({ ...prev, [candidateId]: current.filter(id => id !== assessmentId) }));
    } else {
      if (current.length >= 2) {
        setValidationErrors(prev => ({ ...prev, [candidateId]: 'You can assign up to 2 assessments only.' }));
        return;
      }
      setCandidateSelections(prev => ({ ...prev, [candidateId]: [...current, assessmentId] }));
    }
  };

  const removeCandidate = (id: string) => {
    setCandidates(prev => prev.filter(c => c.id !== id));
    setCandidateSelections(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const handleAssign = async () => {
    const errors: Record<string, string> = {};
    candidates.forEach(c => {
      if (!candidateSelections[c.id] || candidateSelections[c.id].length === 0) {
        errors[c.id] = 'Select at least one assessment to continue.';
      }
    });
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      const firstErrorId = Object.keys(errors)[0];
      const element = document.getElementById(`candidate-card-${firstErrorId}`);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setIsAssigning(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsAssigning(false);
    setShowSuccessToast(true);
    setTimeout(() => {
      onSuccess(candidateSelections);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end overflow-hidden">
      {/* Dimmed Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => !isAssigning && onBack()}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      <AnimatePresence>
        {showSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[24px] right-[24px] z-[200] bg-[#079455] text-white px-[20px] py-[12px] rounded-[12px] shadow-xl flex items-center gap-[12px]"
          >
            <div className="bg-white/20 p-1 rounded-full"><Check size={16} strokeWidth={3} /></div>
            <span className="font-semibold">Assessments assigned successfully.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="relative bg-white shadow-2xl w-full max-w-[860px] h-full flex flex-col z-[110]"
      >
        {/* Header */}
        <div className="p-[16px] relative border-b border-[#eaecf0] bg-white z-[20]">
          <h2 className="text-[20px] font-bold text-[#101828] mb-[4px]">Request Technical Assessment</h2>
          <p className="text-[14px] text-[#667085] leading-relaxed pr-[40px]">
            Select and assign specialized technical assessments to evaluate candidate proficiency. You may assign up to two assessments per candidate to ensure a comprehensive skill validation tailored to their specific job profile.
          </p>
          <button
            disabled={isAssigning}
            onClick={() => setShowCancelConfirmation(true)}
            className="absolute top-[16px] right-[16px] p-[8px] text-[#98a2b3] hover:text-[#101828] transition-colors disabled:opacity-50"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-[20px] space-y-[20px] bg-[#fcfcfd]">
          {candidates.length > 0 ? (
            candidates.map((candidate, idx) => {
              const hasSelection = (candidateSelections[candidate.id]?.length || 0) > 0;
              const isFullyAssigned = (candidateSelections[candidate.id]?.length || 0) === 2;

              return (
                <motion.div
                  key={candidate.id}
                  id={`candidate-card-${candidate.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`bg-white border transition-all duration-300 rounded-[16px] p-[24px] relative overflow-visible group ${
                    openDropdownId === candidate.id
                      ? 'border-[#3a58ef] shadow-xl ring-1 ring-[#3a58ef]'
                      : hasSelection
                        ? 'border-[#3a58ef]/30 shadow-md'
                        : 'border-[#eaecf0] shadow-sm hover:shadow-md hover:border-[#d0d5dd]'
                  }`}
                >
                  <div className="flex items-start justify-between mb-[20px]">
                    <div className="flex items-center gap-[16px]">
                      <div className={`size-[48px] rounded-full flex items-center justify-center font-bold text-[18px] transition-colors ${hasSelection ? 'bg-[#3a58ef] text-white' : 'bg-[#f5f8ff] text-[#3a58ef]'}`}>
                        {candidate.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-[18px] font-bold text-[#101828] mb-[2px]">{candidate.name}</h3>
                        <div className="flex items-center gap-[8px]">
                          <span className="text-[14px] text-[#3a58ef] font-semibold">{candidate.profile}</span>
                          <span className="size-[3px] bg-[#d0d5dd] rounded-full" />
                          <span className="text-[14px] text-[#667085]">{candidate.domain}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-[16px]">
                      <div className="text-right">
                        <span className={`text-[11px] font-bold uppercase tracking-widest block mb-[2px] transition-colors ${isFullyAssigned ? 'text-[#079455]' : hasSelection ? 'text-[#3a58ef]' : 'text-[#667085]'}`}>
                          {candidateSelections[candidate.id]?.length || 0}/2 Assessments
                        </span>
                        <div className="flex gap-[4px] justify-end">
                          <div className={`h-[4px] w-[20px] rounded-full transition-colors ${(candidateSelections[candidate.id]?.length || 0) >= 1 ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'}`} />
                          <div className={`h-[4px] w-[20px] rounded-full transition-colors ${(candidateSelections[candidate.id]?.length || 0) >= 2 ? 'bg-[#3a58ef]' : 'bg-[#eaecf0]'}`} />
                        </div>
                      </div>
                      <button
                        disabled={isAssigning}
                        onClick={() => removeCandidate(candidate.id)}
                        className="p-[10px] text-[#98a2b3] hover:text-[#d92d20] hover:bg-red-50 rounded-full transition-all disabled:opacity-50"
                        title="Remove Candidate"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Dropdown */}
                  <div className="relative" ref={openDropdownId === candidate.id ? dropdownRef : null}>
                    <div
                      onClick={() => !isAssigning && setOpenDropdownId(openDropdownId === candidate.id ? null : candidate.id)}
                      className={`min-h-[52px] py-[8px] px-[16px] border rounded-[12px] flex items-center justify-between cursor-pointer transition-all ${
                        openDropdownId === candidate.id
                          ? 'border-[#3a58ef] ring-4 ring-[#3a58ef]/5 bg-white'
                          : hasSelection
                            ? 'border-[#3a58ef]/20 bg-[#f9fafb]'
                            : 'border-[#d0d5dd] bg-white'
                      } ${isAssigning ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      <div className="flex-1 overflow-hidden flex flex-wrap gap-[6px]">
                        {(!candidateSelections[candidate.id] || candidateSelections[candidate.id].length === 0) ? (
                          <span className="text-[#667085] text-[15px]">Select technical assessments...</span>
                        ) : (
                          candidateSelections[candidate.id].map(id => {
                            const assessment = mockAssessments.find(a => a.id === id);
                            return (
                              <div key={id} className="bg-[#eff4ff] text-[#3a58ef] border border-[#d1e0ff] px-[10px] py-[4px] rounded-[6px] text-[13px] font-bold flex items-center gap-[6px] animate-in zoom-in-95">
                                {assessment?.name}
                                <X
                                  size={14}
                                  className="cursor-pointer hover:text-[#2d46ca]"
                                  onClick={(e) => { e.stopPropagation(); toggleAssessment(candidate.id, id); }}
                                />
                              </div>
                            );
                          })
                        )}
                      </div>
                      <div className="flex items-center gap-[12px] ml-[12px]">
                        {hasSelection && (
                          <button
                            onClick={(e) => { e.stopPropagation(); setCandidateSelections(prev => ({ ...prev, [candidate.id]: [] })); }}
                            className="text-[12px] font-bold text-[#667085] hover:text-[#d92d20] transition-colors"
                          >
                            Clear
                          </button>
                        )}
                        <ChevronDown size={20} className={`text-[#667085] transition-transform duration-300 ${openDropdownId === candidate.id ? 'rotate-180' : ''}`} />
                      </div>
                    </div>

                    {validationErrors[candidate.id] && (
                      <div className="mt-[6px] flex items-center gap-[6px] text-[#d92d20] text-[12px] font-medium">
                        <AlertCircle size={14} />
                        {validationErrors[candidate.id]}
                      </div>
                    )}

                    {/* Dropdown Panel */}
                    <AnimatePresence>
                      {openDropdownId === candidate.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 right-0 top-[calc(100%+4px)] z-[30] bg-white border border-[#eaecf0] rounded-[12px] shadow-2xl overflow-hidden min-w-[800px]"
                        >
                          <div className="p-[12px] bg-white border-b border-[#eaecf0] sticky top-0 z-[20]">
                            <div className="relative">
                              <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#98a2b3] size-[18px]" />
                              <input
                                type="text"
                                autoFocus
                                placeholder="Search assessments by name or level..."
                                value={assessmentSearchQueries[candidate.id] || ''}
                                onChange={(e) => setAssessmentSearchQueries(prev => ({ ...prev, [candidate.id]: e.target.value }))}
                                className="w-full pl-[40px] pr-[12px] py-[10px] bg-[#f9fafb] border border-[#d0d5dd] rounded-[8px] text-[14px] focus:outline-none focus:ring-4 focus:ring-[#3a58ef]/5 focus:border-[#3a58ef] transition-all"
                              />
                              {assessmentSearchQueries[candidate.id] && (
                                <button
                                  onClick={() => setAssessmentSearchQueries(prev => ({ ...prev, [candidate.id]: '' }))}
                                  className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#98a2b3] hover:text-[#101828]"
                                >
                                  <X size={16} />
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="overflow-x-auto max-h-[350px] overflow-y-auto">
                            <table className="w-full text-left border-collapse">
                              <thead>
                                <tr className="bg-[#f9fafb] border-b border-[#eaecf0] sticky top-0 z-[10]">
                                  <th className="p-[12px] w-[48px]" />
                                  <th className="p-[12px] text-[12px] font-bold text-[#475467] uppercase tracking-wider">Assessment</th>
                                  <th className="p-[12px] text-[12px] font-bold text-[#475467] uppercase tracking-wider w-[100px]">Level</th>
                                  <th className="p-[12px] text-[12px] font-bold text-[#475467] uppercase tracking-wider w-[100px]">Questions</th>
                                  <th className="p-[12px] text-[12px] font-bold text-[#475467] uppercase tracking-wider w-[100px]">Duration</th>
                                  <th className="p-[12px] text-[12px] font-bold text-[#475467] uppercase tracking-wider w-[100px]">Score (%)</th>
                                </tr>
                              </thead>
                              <tbody>
                                {(() => {
                                  const query = (assessmentSearchQueries[candidate.id] || '').toLowerCase();
                                  const filtered = mockAssessments.filter(a =>
                                    a.name.toLowerCase().includes(query) || a.level.toLowerCase().includes(query)
                                  );
                                  if (filtered.length === 0) {
                                    return (
                                      <tr>
                                        <td colSpan={6} className="py-[60px] text-center">
                                          <div className="flex flex-col items-center gap-[12px]">
                                            <div className="bg-gray-50 p-3 rounded-full">
                                              <Search className="text-[#98a2b3] size-[24px]" />
                                            </div>
                                            <div>
                                              <p className="text-[#101828] font-bold">No assessments found</p>
                                              <p className="text-[14px] text-[#667085]">Try adjusting your search query.</p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    );
                                  }
                                  return filtered.map(assessment => {
                                    const isSelected = !!candidateSelections[candidate.id]?.includes(assessment.id);
                                    const isDisabled = assessment.status === 'Completed' || assessment.status === 'Attempted';
                                    return (
                                      <tr
                                        key={assessment.id}
                                        className={`border-b border-[#eaecf0] last:border-0 hover:bg-[#f9fafb] transition-colors ${isSelected ? 'bg-[#f5f8ff]' : ''} ${isDisabled ? 'bg-gray-50/50' : ''}`}
                                      >
                                        <td className="p-[12px] text-center">
                                          <input
                                            type="checkbox"
                                            checked={isSelected}
                                            disabled={isDisabled}
                                            onChange={() => toggleAssessment(candidate.id, assessment.id)}
                                            className="size-[18px] rounded border-[#d0d5dd] text-[#3a58ef] focus:ring-[#3a58ef] cursor-pointer disabled:cursor-not-allowed"
                                          />
                                        </td>
                                        <td className="p-[12px]">
                                          <div className="flex items-center gap-[8px] flex-wrap">
                                            <span className="text-[14px] font-bold text-[#3a58ef] hover:underline break-words max-w-[420px] leading-tight cursor-default">
                                              {assessment.name}
                                            </span>
                                            {isDisabled && (
                                              <span className="text-[10px] bg-white text-[#344054] px-[8px] py-[2px] rounded-[10px] font-bold border border-[#eaecf0]">
                                                {assessment.status === 'Completed' ? 'Completed' : 'Attempted'}
                                              </span>
                                            )}
                                          </div>
                                        </td>
                                        <td className="p-[12px] text-[14px] text-[#475467]">{assessment.level}</td>
                                        <td className="p-[12px] text-[14px] text-[#475467]">{assessment.questions}</td>
                                        <td className="p-[12px] text-[14px] text-[#475467]">{assessment.duration}</td>
                                        <td className="p-[12px] text-[14px] text-[#475467]">{assessment.score}</td>
                                      </tr>
                                    );
                                  });
                                })()}
                              </tbody>
                            </table>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="py-[100px] flex flex-col items-center justify-center text-center">
              <div className="size-[80px] bg-white rounded-full flex items-center justify-center mb-[24px] border border-[#eaecf0]">
                <Search className="text-[#98a2b3] size-[40px]" />
              </div>
              <p className="text-[#101828] font-bold text-[18px] mb-[8px]">No candidates selected for assessment.</p>
              <p className="text-[14px] text-[#667085] mb-[24px]">Select candidates from the table to continue.</p>
              <button onClick={onBack} className="px-[24px] py-[12px] bg-white border border-[#d0d5dd] text-[#344054] rounded-[10px] font-bold hover:bg-gray-50 transition-colors">
                Close
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-0 bg-white border-t border-[#eaecf0] z-[20]">
          <div className="p-[20px] bg-[#f9fafb] flex items-center justify-end gap-[12px]">
            <button
              disabled={isAssigning}
              onClick={() => setShowCancelConfirmation(true)}
              className="px-[24px] py-[12px] text-[14px] font-bold text-[#344054] border border-[#d0d5dd] rounded-[10px] bg-white hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleAssign}
              disabled={isAssigning || candidates.length === 0}
              className={`px-[28px] py-[12px] text-[14px] font-bold text-white rounded-[10px] transition-all flex items-center gap-[8px] ${
                isAssigning || candidates.length === 0 ? 'bg-[#3a58ef]/50 cursor-not-allowed' : 'bg-[#3a58ef] hover:bg-[#2d46ca]'
              }`}
            >
              {isAssigning ? (
                <><Loader2 className="animate-spin" size={20} /> Assigning...</>
              ) : (
                'Assign Assessments'
              )}
            </button>
          </div>
        </div>

        {/* Cancel Confirmation */}
        {showCancelConfirmation && (
          <div className="fixed inset-0 z-[400] flex items-center justify-center p-[16px] bg-black/50 backdrop-blur-[2px]">
            <div className="bg-white rounded-[16px] shadow-2xl w-full max-w-[400px] overflow-hidden animate-in fade-in zoom-in-95">
              <div className="p-[20px] flex flex-col items-center text-center">
                <div className="size-[48px] bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-[16px]">
                  <AlertCircle size={24} />
                </div>
                <h3 className="text-[18px] font-bold text-[#101828] mb-[8px]">Unsaved Changes</h3>
                <p className="text-[14px] text-[#475467]">Are you sure you want to cancel? Any assessments you've mapped will be lost.</p>
              </div>
              <div className="p-[16px] bg-gray-50 flex gap-[12px]">
                <button onClick={() => setShowCancelConfirmation(false)} className="flex-1 px-[16px] py-[10px] rounded-[8px] border border-[#d0d5dd] bg-white text-[#344054] font-bold text-[14px] hover:bg-gray-50">
                  No, stay
                </button>
                <button onClick={onBack} className="flex-1 px-[16px] py-[10px] rounded-[8px] bg-[#f04438] text-white font-bold text-[14px] hover:bg-[#d92d20] shadow-sm">
                  Yes, cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Assessment Detail Preview (nested drawer) */}
        <AnimatePresence>
          {previewAssessment && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-0 bg-white z-[120] flex flex-col shadow-2xl"
            >
              <div className="p-[24px] border-b border-[#eaecf0] flex items-center justify-between">
                <h3 className="text-[18px] font-bold text-[#101828]">Assessment Detail</h3>
                <button onClick={() => setPreviewAssessment(null)} className="p-[4px] text-[#98a2b3] hover:text-[#101828]">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-[24px] space-y-[24px]">
                <div className="space-y-[8px]">
                  <h4 className="text-[22px] font-bold text-[#101828] leading-tight">{previewAssessment.name}</h4>
                  <div className="flex items-center gap-[12px]">
                    <span className="text-[12px] bg-[#eff4ff] text-[#3a58ef] px-[10px] py-[4px] rounded-full font-bold border border-[#3a58ef]/10">{previewAssessment.level}</span>
                    <span className="text-[14px] font-medium text-[#667085]">{previewAssessment.status || 'Available for Assignment'}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-[16px]">
                  <div className="bg-[#fcfcfd] border border-[#eaecf0] p-[20px] rounded-[16px]">
                    <div className="text-[12px] font-bold text-[#667085] uppercase tracking-wider mb-[6px]">Questions</div>
                    <div className="text-[20px] font-bold text-[#101828]">{previewAssessment.questions}</div>
                  </div>
                  <div className="bg-[#fcfcfd] border border-[#eaecf0] p-[20px] rounded-[16px]">
                    <div className="text-[12px] font-bold text-[#667085] uppercase tracking-wider mb-[6px]">Duration</div>
                    <div className="text-[20px] font-bold text-[#101828]">{previewAssessment.duration}</div>
                  </div>
                  <div className="bg-[#fcfcfd] border border-[#eaecf0] p-[20px] rounded-[16px] col-span-2">
                    <div className="text-[12px] font-bold text-[#667085] uppercase tracking-wider mb-[6px]">Score / Status</div>
                    <div className="text-[20px] font-bold text-[#101828]">
                      {previewAssessment.score === '-' ? 'No prior attempts' : `${previewAssessment.score}%`}
                    </div>
                  </div>
                </div>
                <div className="space-y-[12px]">
                  <h5 className="text-[14px] font-bold text-[#344054] uppercase tracking-wider flex items-center gap-[8px]">
                    <Info size={18} className="text-[#3a58ef]" /> Overview
                  </h5>
                  <p className="text-[16px] text-[#475467] leading-relaxed">{previewAssessment.description}</p>
                </div>
              </div>
              <div className="p-[20px] border-t border-[#eaecf0] bg-[#f9fafb]">
                <button onClick={() => setPreviewAssessment(null)} className="w-full py-[14px] bg-[#3a58ef] text-white rounded-[12px] font-bold hover:bg-[#2d46ca] shadow-md shadow-[#3a58ef]/20">
                  Return to Assignment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
