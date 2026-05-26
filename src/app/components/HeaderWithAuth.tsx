import { useState, useRef, useEffect } from 'react';
import { LogOut, ChevronDown, Check } from 'lucide-react';
import { useAuth } from './AuthContext';
import type { UserRole } from './AuthContext';
import OriginalHeader from '../imports/Header';

function SparkleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z" fill="white" />
    </svg>
  );
}

const roles: { id: UserRole; label: string; description: string }[] = [
  { id: 'client', label: 'Client', description: 'Full HR & billing access' },
  { id: 'manager', label: 'Manager', description: 'Team management access' },
  { id: 'staff', label: 'User', description: 'Personal portal access' },
];

export default function HeaderWithAuth({ onOpenAI }: { onOpenAI?: () => void }) {
  const { logout, user, login } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen]);

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  const currentRole = user?.role || 'client';
  const currentRoleLabel = roles.find(r => r.id === currentRole)?.label || 'Client';

  return (
    <div className="relative w-full h-full overflow-visible">
      <OriginalHeader />

      <div className="absolute right-[20px] top-1/2 -translate-y-1/2 z-50 flex items-center gap-[12px]">

        {/* AI Agent CTAs */}
        <button
          onClick={onOpenAI}
          className="flex items-center gap-[7px] px-[14px] py-[7px] bg-[#3a58ef] hover:bg-[#2d47d1] rounded-[6px] transition-colors shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
        >
          <SparkleIcon />
          <span className="text-[13px] font-semibold text-white leading-[18px]">AI Agent</span>
        </button>
        {/* Role Switcher */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-white rounded-[6px] px-[12px] py-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#d0d5dd] hover:bg-[#f9fafb] hover:border-[#98a2b3] transition-all flex items-center gap-[6px]"
          >
            <span className="text-[13px] font-medium leading-[18px] text-[#1d2939]">
              {currentRoleLabel}
            </span>
            <ChevronDown
              className={`size-[14px] text-[#667085] transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-[calc(100%+6px)] bg-white rounded-[8px] shadow-[0px_8px_24px_0px_rgba(16,24,40,0.12),0px_2px_8px_0px_rgba(16,24,40,0.06)] border border-[#eaecf0] z-[200] w-[220px] overflow-hidden py-[4px]">
              <p className="px-[14px] pt-[8px] pb-[6px] text-[11px] font-semibold text-[#98a2b3] uppercase tracking-wider">
                Switch Module
              </p>
              {roles.map((r) => {
                const isActive = currentRole === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => {
                      login(r.id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-[10px] px-[14px] py-[10px] text-left transition-colors ${isActive ? 'bg-[#f5f8ff]' : 'hover:bg-[#f9fafb]'}`}
                  >
                    <div className="flex-1 min-w-0">
                      <p className={`text-[14px] font-medium leading-[20px] ${isActive ? 'text-[#3a58ef]' : 'text-[#344054]'}`}>
                        {r.label}
                      </p>
                      <p className="text-[12px] font-normal leading-[18px] text-[#667085]">
                        {r.description}
                      </p>
                    </div>
                    {isActive && (
                      <Check className="size-[14px] text-[#3a58ef] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-white rounded-[6px] px-[12px] py-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#d0d5dd] hover:bg-[#f9fafb] hover:border-[#98a2b3] transition-all flex items-center gap-[8px]"
          title="Logout"
        >
          <LogOut className="size-[16px] text-[#667085]" />
          <span className="text-[13px] font-medium leading-[18px] text-[#667085]">
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
