import { Bell, Calendar, CheckCircle, Clock, FileText, Sparkles, TrendingUp, Users, X, ChevronRight, User } from 'lucide-react';
import { Button } from './ui/button';

interface DashboardViewProps {
  onNavigationChange?: (view: string) => void;
}

export default function DashboardView({ onNavigationChange }: DashboardViewProps) {
  return (
    <div className="h-full bg-[#f9fafb] rounded-xl shadow-sm border border-[#eaecf0] overflow-auto">
      <div className="p-6">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-[#101828] text-[24px] font-semibold mb-1">Dashboard</h1>
          <p className="text-[#667085] text-[14px]">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Top Section: Stats Cards Only */}
        <div className="mb-6">
          <div className="flex gap-3">
            {/* In Office */}
            <div className="bg-white border border-[#eaecf0] rounded-lg px-6 py-4 text-center flex-1">
              <div className="text-[#3a58ef] text-[28px] font-semibold mb-1">8</div>
              <div className="text-[#667085] text-[11px] uppercase tracking-wide">In Office</div>
            </div>

            {/* WFH */}
            <div className="bg-white border border-[#eaecf0] rounded-lg px-6 py-4 text-center flex-1">
              <div className="text-[#3a58ef] text-[28px] font-semibold mb-1">2</div>
              <div className="text-[#667085] text-[11px] uppercase tracking-wide">WFH</div>
            </div>

            {/* Hybrid */}
            <div className="bg-white border border-[#eaecf0] rounded-lg px-6 py-4 text-center flex-1">
              <div className="text-[#3a58ef] text-[28px] font-semibold mb-1">4</div>
              <div className="text-[#667085] text-[11px] uppercase tracking-wide">Hybrid</div>
            </div>

            {/* On Leave */}
            <div className="bg-white border border-[#eaecf0] rounded-lg px-6 py-4 text-center flex-1">
              <div className="text-[#fb923c] text-[28px] font-semibold mb-1">1</div>
              <div className="text-[#667085] text-[11px] uppercase tracking-wide">On Leave</div>
            </div>

            {/* Absent */}
            <div className="bg-white border border-[#eaecf0] rounded-lg px-6 py-4 text-center flex-1">
              <div className="text-[#667085] text-[28px] font-semibold mb-1">0</div>
              <div className="text-[#667085] text-[11px] uppercase tracking-wide">Absent</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1.5fr_1fr] gap-6">
          {/* Left Column - Tasks & Approvals */}
          <div className="space-y-6">
            {/* My Tasks */}
            <div className="bg-white border border-[#eaecf0] rounded-lg p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#3a58ef]" />
                  <h2 className="text-[#101828] text-[16px] font-semibold">My Tasks</h2>
                </div>
                <button className="text-[#3a58ef] text-[13px] font-medium hover:underline">
                  VIEW ALL
                </button>
              </div>
              <div className="space-y-3">
                {/* Task 1 */}
                <div className="flex items-start justify-between p-3 bg-[#f9fafb] rounded-lg border border-[#eaecf0]">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-[#f04438]"></div>
                      <h3 className="text-[#101828] text-[14px] font-medium">Timesheet Shortfall: Phillip G. Sinclair</h3>
                    </div>
                    <p className="text-[#667085] text-[12px]">12-01-25-457 • 4.5H SHORTFALL</p>
                  </div>
                  <Button className="bg-[#3a58ef] hover:bg-[#2a48df] h-8 px-4 text-[12px]">
                    ACTION
                  </Button>
                </div>

                {/* Task 2 */}
                <div className="flex items-start justify-between p-3 bg-[#f9fafb] rounded-lg border border-[#eaecf0]">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-[#3a58ef]"></div>
                      <h3 className="text-[#101828] text-[14px] font-medium">Resume Mapping Nominated</h3>
                    </div>
                    <p className="text-[#667085] text-[12px]">SK TAX PREFERRED LIST</p>
                  </div>
                  <Button className="bg-[#3a58ef] hover:bg-[#2a48df] h-8 px-4 text-[12px]">
                    ACTION
                  </Button>
                </div>

                {/* Task 3 */}
                <div className="flex items-start justify-between p-3 bg-[#f9fafb] rounded-lg border border-[#eaecf0]">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-[#3a58ef]"></div>
                      <h3 className="text-[#101828] text-[14px] font-medium">New Hiring Interview</h3>
                    </div>
                    <p className="text-[#667085] text-[12px]">CANDIDATE: RAFAEL S. • 4:00 PM</p>
                  </div>
                  <Button className="bg-[#3a58ef] hover:bg-[#2a48df] h-8 px-4 text-[12px]">
                    ACTION
                  </Button>
                </div>
              </div>
            </div>

            {/* Approvals Hub */}
            <div className="bg-white border border-[#eaecf0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-[#3a58ef]" />
                <h2 className="text-[#101828] text-[16px] font-semibold">Approvals Hub</h2>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                <button className="bg-[#3a58ef] text-white px-4 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap">
                  LEAVES
                </button>
                <button className="bg-white text-[#667085] px-4 py-2 rounded-lg text-[13px] font-medium border border-[#d0d5dd] hover:bg-[#f9fafb] whitespace-nowrap">
                  ATTENDANCE
                </button>
                <button className="bg-white text-[#667085] px-4 py-2 rounded-lg text-[13px] font-medium border border-[#d0d5dd] hover:bg-[#f9fafb] whitespace-nowrap">
                  OT
                </button>
                <button className="bg-white text-[#667085] px-4 py-2 rounded-lg text-[13px] font-medium border border-[#d0d5dd] hover:bg-[#f9fafb] whitespace-nowrap">
                  NIGHT ALLOW
                </button>
                <button className="bg-white text-[#667085] px-4 py-2 rounded-lg text-[13px] font-medium border border-[#d0d5dd] hover:bg-[#f9fafb] whitespace-nowrap">
                  ADVANCE
                </button>
                <button className="bg-white text-[#667085] px-4 py-2 rounded-lg text-[13px] font-medium border border-[#d0d5dd] hover:bg-[#f9fafb] whitespace-nowrap">
                  SDPS
                </button>
              </div>

              {/* Approval Items */}
              <div className="space-y-3">
                {/* Approval 1 */}
                <div className="flex items-center justify-between p-3 border-b border-[#eaecf0]">
                  <div className="flex items-center gap-3">
                    <User className="h-8 w-8 text-[#98a2b3]" />
                    <div>
                      <h3 className="text-[#101828] text-[14px] font-medium">Staff Member 1</h3>
                      <p className="text-[#667085] text-[12px]">SICK LEAVE • 2 DAYS</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-[#f04438] hover:bg-[#fef3f2] p-2 rounded transition-colors">
                      <X className="h-5 w-5" />
                    </button>
                    <button className="text-[#12b76a] hover:bg-[#ecfdf3] p-2 rounded transition-colors">
                      <CheckCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Approval 2 */}
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-3">
                    <User className="h-8 w-8 text-[#98a2b3]" />
                    <div>
                      <h3 className="text-[#101828] text-[14px] font-medium">Staff Member 2</h3>
                      <p className="text-[#667085] text-[12px]">SICK LEAVE • 2 DAYS</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-[#f04438] hover:bg-[#fef3f2] p-2 rounded transition-colors">
                      <X className="h-5 w-5" />
                    </button>
                    <button className="text-[#12b76a] hover:bg-[#ecfdf3] p-2 rounded transition-colors">
                      <CheckCircle className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Logged Activity Feed */}
            <div className="bg-white border border-[#eaecf0] rounded-lg p-5">
              <h2 className="text-[#101828] text-[16px] font-semibold mb-4">Logged Activity Feed</h2>
              <div className="space-y-3">
                {/* Activity 1 */}
                <div className="p-3 bg-[#f9fafb] rounded-lg border border-[#eaecf0]">
                  <h3 className="text-[#101828] text-[14px] font-medium mb-1">New Timesheet Event Logged</h3>
                  <p className="text-[#667085] text-[12px]">
                    Staff Member 1 submitted a timesheet for client "Verma & Sharma LLP" for 8.5 billable hours.
                  </p>
                  <p className="text-[#98a2b3] text-[11px] mt-2">12:34 PM TODAY</p>
                </div>

                {/* Activity 2 */}
                <div className="p-3 bg-[#f9fafb] rounded-lg border border-[#eaecf0]">
                  <h3 className="text-[#101828] text-[14px] font-medium mb-1">New Timesheet Event Logged</h3>
                  <p className="text-[#667085] text-[12px]">
                    Staff Member 2 submitted a timesheet for client "Verma & Sharma LLP" for 8.5 billable hours.
                  </p>
                  <p className="text-[#98a2b3] text-[11px] mt-2">11:22 AM TODAY</p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Upcoming Events & Info Cards */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white border border-[#eaecf0] rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-[#3a58ef]" />
                <h2 className="text-[#101828] text-[16px] font-semibold">Upcoming</h2>
              </div>
              <div className="space-y-3">
                {/* Event 1 */}
                <div className="flex items-start gap-3 p-3 bg-[#f9fafb] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#fef3f2] flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-[#f04438]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#101828] text-[14px] font-medium mb-1">Aman's Birthday</h3>
                    <p className="text-[#667085] text-[12px]">TODAY</p>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="flex items-start gap-3 p-3 bg-[#f9fafb] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#eff8ff] flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-[#3a58ef]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#101828] text-[14px] font-medium mb-1">Client Interview: Tetra Advisory</h3>
                    <p className="text-[#667085] text-[12px]">TOMORROW</p>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="flex items-start gap-3 p-3 bg-[#f9fafb] rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#fef7e7] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-[#fb923c]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#101828] text-[14px] font-medium mb-1">PR Bonus Guidelines Due</h3>
                    <p className="text-[#667085] text-[12px]">FRIDAY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Center */}
            <div className="bg-gradient-to-br from-[#3a58ef] to-[#6366f1] rounded-lg p-5 text-white">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5" />
                <h2 className="text-[16px] font-semibold">Review Center</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-[13px]">Open Tickets</span>
                  <span className="text-[20px] font-semibold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[13px]">Open Appraisals</span>
                  <span className="text-[20px] font-semibold">03</span>
                </div>
              </div>
              <p className="text-[11px] opacity-80 mt-3">
                Staff: Bella (1), Scott (4), Aman (3)
              </p>
            </div>

            {/* What's New */}
            <div className="bg-gradient-to-br from-[#059669] to-[#10b981] rounded-lg p-5 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5" />
                <h2 className="text-[16px] font-semibold">What's New?</h2>
              </div>
              <h3 className="text-[14px] font-semibold mb-2">Team Hub Updates 2.4</h3>
              <p className="text-[12px] opacity-90 mb-4">
                Integrated summary filters and extended timesheet labeling
              </p>
              <Button className="w-full bg-white text-[#059669] hover:bg-gray-100 h-9 text-[12px] font-medium flex items-center justify-center gap-2">
                TAKE A TOUR
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* My Personal Summary Link */}
            <div className="text-center">
              <button className="text-[#667085] text-[13px] hover:text-[#3a58ef] flex items-center justify-center gap-2 mx-auto">
                MY PERSONAL SUMMARY
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Next Big Event & Attendance */}
          <div className="space-y-6">
            {/* Next Big Event Card */}
            <div className="bg-gradient-to-br from-[#3a58ef] to-[#6366f1] rounded-lg p-5 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Bell className="h-4 w-4" />
                <span className="text-[11px] uppercase tracking-wide font-medium">Next Big Event</span>
              </div>
              <h3 className="text-[16px] font-semibold mb-4">Annual Q&A Night 2025</h3>
              <div className="flex gap-6 mb-4">
                <div className="text-center">
                  <div className="text-[32px] font-bold">14</div>
                  <div className="text-[11px] opacity-90">DAYS</div>
                </div>
                <div className="text-center">
                  <div className="text-[32px] font-bold">05</div>
                  <div className="text-[11px] opacity-90">HRS</div>
                </div>
              </div>
              <Button className="w-full bg-white text-[#3a58ef] hover:bg-gray-100 h-9 text-[13px] font-medium">
                ENROL NOW
              </Button>
            </div>

            {/* Attendance Widget */}
            <div className="bg-white border border-[#eaecf0] rounded-lg p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[#101828] text-[16px] font-semibold">Attendance</h2>
                <button className="text-[#3a58ef] text-[12px] font-medium hover:underline">
                  View Log
                </button>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#f9fafb] rounded-lg">
                <div>
                  <p className="text-[#667085] text-[12px] mb-1">09 Dec</p>
                  <p className="text-[#101828] text-[14px] font-medium">11:38</p>
                </div>
                <div className="bg-[#ecfdf3] text-[#12b76a] px-3 py-1 rounded-full text-[12px] font-medium">
                  Present
                </div>
              </div>
            </div>

            {/* Upcoming Holidays */}
            <div className="bg-white border border-[#eaecf0] rounded-lg p-5">
              <h2 className="text-[#101828] text-[16px] font-semibold mb-4">Upcoming Holidays</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#667085] text-[13px]">Dec 25, 2025</span>
                  <span className="text-[#101828] text-[13px] font-medium">Christmas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#667085] text-[13px]">Jan 01, 2026</span>
                  <span className="text-[#101828] text-[13px] font-medium">New Year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}