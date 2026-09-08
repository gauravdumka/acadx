import React from 'react';
import IndustryWelcomeCard from '../../components/industry/IndustryWelcomeCard';
import ActiveOpportunities from '../../components/industry/ActiveOpportunities';
import ApplicationFunnel from '../../components/industry/ApplicationFunnel';
import TalentDiscoveryPreview from '../../components/industry/TalentDiscoveryPreview';
import AcademiaCollaboration from '../../components/industry/AcademiaCollaboration';
import { industryData } from '../../data/industryMockData';

const IndustryDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* Top Welcome Section */}
      <section>
        <IndustryWelcomeCard 
          companyName={industryData.profile.name} 
          overview={industryData.overview} 
        />
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <ActiveOpportunities opportunities={industryData.activeOpportunities} />
        </div>
        <div className="lg:col-span-1">
          <ApplicationFunnel analytics={industryData.funnelAnalytics} />
        </div>
      </section>

      {/* Talent Discovery Section */}
      <section>
        <TalentDiscoveryPreview candidates={industryData.talentDiscovery} />
      </section>

      {/* Collaboration & Analytics Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AcademiaCollaboration collaboration={industryData.collaboration} />
        
        {/* Placeholder for future Skill Demand Overview */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center items-center h-full min-h-[300px]">
           <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100">
             <span className="text-2xl">📊</span>
           </div>
           <h3 className="text-lg font-bold text-gray-900 mb-2">Skill Demand Analytics</h3>
           <p className="text-sm text-gray-500 text-center max-w-sm">
             Your company's skill gap reports and hiring trends will appear here.
           </p>
           <button className="mt-6 px-4 py-2 bg-indigo-50 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition-colors text-sm">
             Configure Demand Settings
           </button>
        </div>
      </section>
    </div>
  );
};

export default IndustryDashboard;
