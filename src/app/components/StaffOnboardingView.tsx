import { useState } from 'react';
import { Clock, ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Task {
  step: number;
  title: string;
  description: string;
  timing: string | null;
}

const ALL_TASKS: Task[] = [
  { step: 1,  title: 'Interview',                          description: 'Conduct structured interview rounds to assess the candidate\'s technical skills, role fit, and communication abilities.', timing: null },
  { step: 2,  title: 'Documentations',                     description: 'Collect, verify, and securely store all required employee documents, including identity proof, address proof, educational certificates, experience letters, tax forms, and signed company policies.', timing: null },
  { step: 3,  title: 'Letter Sign',                        description: 'Share the official offer letter with the selected candidate for review and signature. Confirm that all required signatures are completed.', timing: null },
  { step: 4,  title: 'Employee Code Generation',           description: 'A unique employee code or employee ID is generated after the candidate\'s onboarding details are confirmed.', timing: null },
  { step: 5,  title: 'Background Verification',            description: 'Background verification to validate the candidate\'s employment history, education details, identity, address, and any other relevant checks is initiated.', timing: null },
  { step: 6,  title: 'Asset allocation and team hub activation', description: 'Verify all assigned assets are working correctly and ensure you have access to the primary team communication channels.', timing: null },
  { step: 7,  title: 'Induction',                          description: 'Group induction session to learn about the company culture, history, and long-term vision from our leadership team.', timing: null },
  { step: 8,  title: 'Team introduction',                  description: 'Meeting with each of your team members. The goal is to understand their roles, how you will collaborate, and build initial rapport.', timing: null },
  { step: 9,  title: 'Complete Compliance courses',        description: 'Standard compliance courses for ethical conduct, and workplace safety.', timing: null },
  { step: 10, title: 'Team Lunch',                         description: 'Team Lunch is a casual onboarding activity designed to help the new joiner connect with their team in a relaxed setting. It provides an opportunity to build rapport, understand team dynamics, and feel more comfortable in the workplace.', timing: '10 days after hire date' },
];

const TOTAL       = ALL_TASKS.length;
const RADIUS      = 36;
const STROKE      = 6;
const SIZE        = (RADIUS + STROKE) * 2 + 4;
const CX          = SIZE / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/* ── Progress Ring ── */
function ProgressRing({ progress }: { progress: number }) {
  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;
  return (
    <div className="relative shrink-0" style={{ width: SIZE, height: SIZE }}>
      <svg
        width={SIZE}
        height={SIZE}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3a58ef" />
            <stop offset="100%" stopColor="#7f56d9" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx={CX} cy={CX} r={RADIUS}
          fill="none"
          stroke="#eaecf0"
          strokeWidth={STROKE}
        />
        {/* Progress */}
        <circle
          cx={CX} cy={CX} r={RADIUS}
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[18px] font-bold text-[#101828] leading-none">{Math.round(progress)}%</span>
        <span className="text-[10px] text-[#667085] mt-[2px] leading-none">complete</span>
      </div>
    </div>
  );
}

export default function StaffOnboardingView() {
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set([1, 2, 3, 4, 5]));
  const [fadingOut, setFadingOut]           = useState<Set<number>>(new Set());
  const [completedOpen, setCompletedOpen]   = useState(false);

  const completedCount = completedSteps.size;
  const progress       = (completedCount / TOTAL) * 100;
  const pendingTasks   = ALL_TASKS.filter(t => !completedSteps.has(t.step));
  const completedTasks = ALL_TASKS.filter(t => completedSteps.has(t.step));

  const handleMarkComplete = (step: number) => {
    setFadingOut(prev => new Set([...prev, step]));
    setTimeout(() => {
      setCompletedSteps(prev => new Set([...prev, step]));
      setFadingOut(prev => { const next = new Set(prev); next.delete(step); return next; });
    }, 280);
  };

  return (
    <div className="bg-white flex flex-col h-full w-full rounded-[8px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)] overflow-auto font-sans">

      {/* ── Page Header ── */}
      <div className="px-[24px] pt-[20px] pb-[16px] shrink-0">
        <div className="flex items-center gap-[4px] mb-[4px]">
          <span className="text-[12px] font-medium text-[#98a2b3]">Human Resources</span>
          <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 16 16">
            <path d="M6 4L10 8L6 12" stroke="#98a2b3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[12px] font-medium text-[#344054]">Onboarding</span>
        </div>
        <h1 className="text-[24px] font-bold text-[#101828] leading-[32px]">Onboarding</h1>
      </div>

      {/* ── Content ── */}
      <div className="flex-1 px-[24px] pb-[24px] flex flex-col gap-[20px]">

        {/* Hero card */}
        <div className="bg-white border border-[#eaecf0] rounded-[12px] px-[24px] py-[20px] flex items-center justify-between shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
          <div>
            <h2 className="text-[22px] font-bold text-[#101828] leading-[30px]">Welcome Onboard!</h2>
            <p className="text-[14px] text-[#667085] mt-[4px] leading-[22px] max-w-[420px]">
              To get the best experience, we recommend you to completing these onboarding steps.
            </p>
          </div>
          <ProgressRing progress={progress} />
        </div>

        {/* Pending section */}
        <div className="flex flex-col gap-[12px]">
          {/* Section label */}
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px] font-bold text-[#101828]">Pending</span>
            {pendingTasks.length > 0 && (
              <span className="inline-flex items-center px-[8px] py-[2px] rounded-full text-[12px] font-medium bg-[#f2f4f7] text-[#667085]">
                {pendingTasks.length} remaining
              </span>
            )}
          </div>

          {/* Pending task cards */}
          {pendingTasks.length === 0 ? (
            <div className="border border-[#eaecf0] rounded-[10px] px-[24px] py-[32px] flex flex-col items-center justify-center text-center">
              <div className="size-[44px] rounded-full bg-[#ecfdf3] flex items-center justify-center mb-[12px]">
                <CheckCircle2 className="size-[22px] text-[#027a48]" />
              </div>
              <p className="text-[15px] font-bold text-[#101828] mb-[4px]">All tasks completed!</p>
              <p className="text-[13px] text-[#667085]">You've completed all your onboarding steps.</p>
            </div>
          ) : (
            pendingTasks.map(task => (
              <div
                key={task.step}
                className="border border-[#eaecf0] rounded-[10px] px-[20px] py-[16px] flex items-start gap-[16px] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] transition-opacity duration-[280ms]"
                style={{ opacity: fadingOut.has(task.step) ? 0 : 1 }}
              >
                {/* Step badge */}
                <div className="shrink-0 size-[32px] rounded-[8px] bg-[#ebeefd] flex items-center justify-center mt-[2px]">
                  <span className="text-[13px] font-bold text-[#3a58ef]">{task.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-bold text-[#101828] leading-[22px]">{task.title}</p>
                  <p className="text-[13px] text-[#667085] leading-[20px] mt-[2px]">{task.description}</p>
                  {task.timing && (
                    <div className="flex items-center gap-[5px] mt-[8px]">
                      <Clock className="size-[13px] text-[#98a2b3] shrink-0" />
                      <span className="text-[12px] text-[#98a2b3]">{task.timing}</span>
                    </div>
                  )}
                </div>

                {/* Action */}
                <button
                  onClick={() => handleMarkComplete(task.step)}
                  className="shrink-0 px-[16px] py-[8px] bg-[#3a58ef] hover:bg-[#2d46d6] text-white text-[13px] font-semibold rounded-[8px] transition-colors shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] whitespace-nowrap"
                >
                  Mark as Complete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Completed section */}
        <div className="flex flex-col gap-[12px]">
          {/* Section toggle */}
          <button
            onClick={() => setCompletedOpen(prev => !prev)}
            className="flex items-center gap-[8px] w-fit"
          >
            {completedOpen
              ? <ChevronDown className="size-[16px] text-[#667085]" />
              : <ChevronRight className="size-[16px] text-[#667085]" />
            }
            <span className="text-[14px] font-bold text-[#101828]">Completed Tasks</span>
            <span className="inline-flex items-center px-[8px] py-[2px] rounded-full text-[12px] font-semibold bg-[#ecfdf3] text-[#027a48]">
              {completedCount} Completed
            </span>
          </button>

          {/* Completed task cards */}
          {completedOpen && completedTasks.map(task => (
            <div
              key={task.step}
              className="border border-[#eaecf0] border-l-[3px] rounded-[10px] px-[20px] py-[14px] flex items-start gap-[16px] bg-white"
              style={{ borderLeftColor: '#12b76a' }}
            >
              {/* Check icon */}
              <div className="shrink-0 mt-[2px]">
                <div className="size-[28px] rounded-full bg-[#ecfdf3] flex items-center justify-center">
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                    <path d="M1.5 5L5 8.5L11.5 1.5" stroke="#027a48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold text-[#98a2b3] line-through leading-[22px]">{task.title}</p>
                <p className="text-[13px] text-[#98a2b3] leading-[20px] mt-[2px]">{task.description}</p>
              </div>

              {/* Badge */}
              <span className="shrink-0 inline-flex items-center px-[10px] py-[3px] rounded-full text-[12px] font-semibold bg-[#ecfdf3] text-[#027a48]">
                Completed
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
