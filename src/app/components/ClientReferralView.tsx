import React from 'react';

interface ClientReferralViewProps {
  onNavigationChange?: (view: string) => void;
}

export default function ClientReferralView({ onNavigationChange }: ClientReferralViewProps) {
  return (
    <div className="min-h-[calc(100vh-192px)] rounded-[20px] bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-[#98a2b3] text-[12px] font-medium uppercase tracking-[0.25em]">Human Resources</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#101828]">Client Referral</h1>
      </div>
      <p className="text-[#475467] text-base leading-7">
        This is the Client Referral page. Add your workflows and content here.
      </p>
    </div>
  );
}
