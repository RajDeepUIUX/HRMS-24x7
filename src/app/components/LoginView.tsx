import { useState } from 'react';
import { useAuth, UserRole } from './AuthContext';
import imgFrame1149 from "figma:asset/9d24cedab8344e96204e73d7b051c8e8b97069f2.png";

export default function LoginView() {
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  const roles = [
    {
      id: 'client' as UserRole,
      title: 'Client',
      description: 'HRMS 24x7',
      name: 'Shelby',
      email: 'shelby@gytap.com',
      color: '#3A58EF'
    },
    {
      id: 'staff' as UserRole,
      title: 'User',
      description: 'Personal portal access',
      name: 'John Smith',
      email: 'john.smith@gytap.com',
      color: '#12B76A'
    },
    {
      id: 'manager' as UserRole,
      title: 'Manager',
      description: 'Department Manager',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@gytap.com',
      color: '#F04438'
    }
  ];

  const handleLogin = () => {
    if (selectedRole) {
      login(selectedRole);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#f2f4f7] flex items-center justify-center">
      <div className="bg-white rounded-[12px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] p-[48px] max-w-[560px] w-full">
        {/* Logo/Header */}
        <div className="flex flex-col items-center mb-[40px]">
          <div className="w-[64px] h-[64px] rounded-full bg-[#3A58EF] flex items-center justify-center mb-[16px]">
            <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="white"/>
            </svg>
          </div>
          <h1 className="text-[30px] font-semibold leading-[38px] text-[#1d2939] mb-[8px]">
            Welcome to HRMS 24x7
          </h1>
          <p className="text-[14px] leading-[20px] text-[#667085]">
            Select your role to continue
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="flex flex-col gap-[16px] mb-[32px]">
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`relative rounded-[8px] border cursor-pointer transition-all ${
                selectedRole === role.id
                  ? 'border-[#3A58EF] bg-[#f5f7fe] shadow-[0px_0px_0px_4px_rgba(58,88,239,0.12)]'
                  : 'border-[#d0d5dd] bg-white hover:border-[#98a2b3] hover:bg-[#f9fafb]'
              }`}
            >
              <div className="p-[20px] flex items-center gap-[16px]">
                {/* Avatar */}
                <div className="relative rounded-full shrink-0 size-[48px]">
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <img 
                      alt={role.name} 
                      className="absolute h-[273.46%] left-[-49.39%] max-w-none top-[-31.38%] w-[182.5%]" 
                      src={imgFrame1149} 
                    />
                  </div>
                  <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 rounded-full" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-[8px] mb-[4px]">
                    <h3 className="text-[16px] font-semibold leading-[24px] text-[#1d2939]">
                      {role.title}
                    </h3>
                    <span 
                      className="text-[12px] font-medium leading-[18px] px-[8px] py-[2px] rounded-full"
                      style={{ 
                        backgroundColor: `${role.color}10`, 
                        color: role.color 
                      }}
                    >
                      {role.description}
                    </span>
                  </div>
                  <p className="text-[14px] leading-[20px] text-[#1d2939] mb-[2px]">
                    {role.name}
                  </p>
                  <p className="text-[13px] leading-[18px] text-[#667085]">
                    {role.email}
                  </p>
                </div>

                {/* Checkbox */}
                <div className="shrink-0">
                  <div 
                    className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center ${
                      selectedRole === role.id
                        ? 'border-[#3A58EF] bg-[#3A58EF]'
                        : 'border-[#d0d5dd] bg-white'
                    }`}
                  >
                    {selectedRole === role.id && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={!selectedRole}
          className={`w-full rounded-[8px] px-[18px] py-[10px] text-[14px] font-semibold leading-[20px] transition-all ${
            selectedRole
              ? 'bg-[#3A58EF] text-white hover:bg-[#2d47d1] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]'
              : 'bg-[#d0d5dd] text-[#98a2b3] cursor-not-allowed'
          }`}
        >
          Continue
        </button>

        {/* Footer */}
        <div className="mt-[24px] text-center">
          <p className="text-[13px] leading-[18px] text-[#667085]">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
