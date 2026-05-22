import React from 'react';
import svgPaths from '../imports/svg-yn2sf0d64a';

interface FeeStructureData {
  level: string;
  usExperience: string;
  teamSize15_25: string;
  teamSize26_35: string;
  teamSize36_50: string;
  teamSize51_75: string;
  teamSize75Plus: string;
}

const feeStructureData: FeeStructureData[] = [
  {
    level: 'Level 1',
    usExperience: 'Fresh Talent',
    teamSize15_25: '$850',
    teamSize26_35: '$800',
    teamSize36_50: '$700',
    teamSize51_75: '$600',
    teamSize75Plus: '$500'
  },
  {
    level: 'Level 2',
    usExperience: 'Fresh Talent',
    teamSize15_25: '$850',
    teamSize26_35: '$800',
    teamSize36_50: '$700',
    teamSize51_75: '$600',
    teamSize75Plus: '$500'
  },
  {
    level: 'Level 3',
    usExperience: '1-2 Years',
    teamSize15_25: '$1,050',
    teamSize26_35: '$950',
    teamSize36_50: '$850',
    teamSize51_75: '$800',
    teamSize75Plus: '$700'
  },
  {
    level: 'Level 4',
    usExperience: '2-3 Years',
    teamSize15_25: '$1,050',
    teamSize26_35: '$950',
    teamSize36_50: '$850',
    teamSize51_75: '$800',
    teamSize75Plus: '$750'
  },
  {
    level: 'Level 5',
    usExperience: '3-5 Years',
    teamSize15_25: '$1,200',
    teamSize26_35: '$1,150',
    teamSize36_50: '$1,050',
    teamSize51_75: '$950',
    teamSize75Plus: '$850'
  },
  {
    level: 'Level 6',
    usExperience: '5-8 Years',
    teamSize15_25: '$1,200',
    teamSize26_35: '$1,150',
    teamSize36_50: '$1,050',
    teamSize51_75: '$950',
    teamSize75Plus: '$850'
  },
  {
    level: 'Level 7',
    usExperience: '8-10 Years',
    teamSize15_25: '$1,400',
    teamSize26_35: '$1,300',
    teamSize36_50: '$1,200',
    teamSize51_75: '$1,150',
    teamSize75Plus: '$1,050'
  },
  {
    level: 'Level 8',
    usExperience: '10+ Years',
    teamSize15_25: '$1,400',
    teamSize26_35: '$1,300',
    teamSize36_50: '$1,200',
    teamSize51_75: '$1,150',
    teamSize75Plus: '$1,050'
  }
];

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p16897c00} fill="#1D2939" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="flex gap-1 items-center">
      <span className="text-xs text-gray-500">Human Resources</span>
      <CaretRight />
      <span className="text-xs text-gray-700">Management Fees Structure</span>
    </div>
  );
}



interface ManagementFeeChartViewProps {
  onNavigationChange?: (view: string) => void;
}

export default function ManagementFeeChartView({ onNavigationChange }: ManagementFeeChartViewProps) {
  return (
    <div className="flex flex-col gap-4 h-full p-6 bg-white">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <Breadcrumbs />
        <h1 className="text-2xl font-semibold text-[#101828]">Management Fee Chart (Trout CPA)</h1>
      </div>

      {/* Fee Structure Table - Desktop */}
      <div className="hidden lg:block flex-1 overflow-auto scrollbar-hide">
        <div className="border border-[#d0d5dd] rounded-lg overflow-hidden">
          <div className="min-w-full">
            {/* Main Headers */}
            <div className="flex">
              <div className="w-[116px] bg-[#ebeefd] flex items-center justify-center px-4 py-6 border-r border-gray-200">
                <span className="text-xs font-semibold text-[#1d2939]">Level</span>
              </div>
              <div className="w-[156px] bg-[#ebeefd] flex items-center justify-center px-4 py-6 border-r border-gray-200">
                <span className="text-xs font-semibold text-[#1d2939]">US Experience</span>
              </div>
              <div className="flex-1 bg-[#ebeefd] flex items-center justify-center px-4 py-3 border-b border-gray-200">
                <span className="text-xs font-semibold text-[#1d2939] text-center">Staff Member As Per Team Size</span>
              </div>
            </div>
            
            {/* Sub Headers for Team Sizes */}
            <div className="flex">
              <div className="w-[116px] bg-[rgb(235,238,253)]"></div>
              <div className="w-[156px] bg-[rgb(235,238,253)]"></div>
              <div className="flex-1 flex">
                <div className="flex-1 bg-[#d8defc] flex items-center justify-center px-4 py-3 border-r border-gray-200">
                  <span className="text-xs font-semibold text-[#1d2939]">15-25</span>
                </div>
                <div className="flex-1 bg-[#d8defc] flex items-center justify-center px-4 py-3 border-r border-gray-200">
                  <span className="text-xs font-semibold text-[#1d2939]">26-35</span>
                </div>
                <div className="flex-1 bg-[#d8defc] flex items-center justify-center px-4 py-3 border-r border-gray-200">
                  <span className="text-xs font-semibold text-[#1d2939]">36-50</span>
                </div>
                <div className="flex-1 bg-[#d8defc] flex items-center justify-center px-4 py-3 border-r border-gray-200">
                  <span className="text-xs font-semibold text-[#1d2939]">51-75</span>
                </div>
                <div className="flex-1 bg-[#d8defc] flex items-center justify-center px-4 py-3">
                  <span className="text-xs font-semibold text-[#1d2939]">75+</span>
                </div>
              </div>
            </div>

            {/* Data Rows */}
            {feeStructureData.map((row, index) => (
              <div key={row.level} className="flex">
                <div className={`w-[116px] h-[50px] flex items-center px-4 py-3 border-r border-gray-200 border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                  <span className="text-sm text-[#344054]">{row.level}</span>
                </div>
                <div className={`w-[156px] h-[50px] flex items-center px-4 py-3 border-r border-gray-200 border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                  <span className="text-sm text-[#344054]">{row.usExperience}</span>
                </div>
                <div className="flex-1 flex">
                  <div className={`flex-1 h-[50px] flex items-center px-4 py-3 border-r border-gray-200 border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="text-sm text-[#344054]">{row.teamSize15_25}</span>
                  </div>
                  <div className={`flex-1 h-[50px] flex items-center px-4 py-3 border-r border-gray-200 border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="text-sm text-[#344054]">{row.teamSize26_35}</span>
                  </div>
                  <div className={`flex-1 h-[50px] flex items-center px-4 py-3 border-r border-gray-200 border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="text-sm text-[#344054]">{row.teamSize36_50}</span>
                  </div>
                  <div className={`flex-1 h-[50px] flex items-center px-4 py-3 border-r border-gray-200 border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="text-sm text-[#344054]">{row.teamSize51_75}</span>
                  </div>
                  <div className={`flex-1 h-[50px] flex items-center px-4 py-3 border-b border-gray-200 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="text-sm text-[#344054]">{row.teamSize75Plus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - Responsive Cards */}
      <div className="lg:hidden flex-1 overflow-auto scrollbar-hide">
        <div className="space-y-4">
          {feeStructureData.map((row, index) => (
            <div key={row.level} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg text-[#101828]">{row.level}</h3>
                <span className="text-sm text-gray-600">{row.usExperience}</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">15-25 team:</span>
                  <span className="font-medium text-[#344054]">{row.teamSize15_25}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">26-35 team:</span>
                  <span className="font-medium text-[#344054]">{row.teamSize26_35}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">36-50 team:</span>
                  <span className="font-medium text-[#344054]">{row.teamSize36_50}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">51-75 team:</span>
                  <span className="font-medium text-[#344054]">{row.teamSize51_75}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">75+ team:</span>
                  <span className="font-medium text-[#344054]">{row.teamSize75Plus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}