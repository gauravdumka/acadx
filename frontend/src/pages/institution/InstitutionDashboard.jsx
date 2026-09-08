import React from 'react';
import { Users, CheckCircle2, Target, Briefcase } from 'lucide-react';
import { institutionData } from '../../data/institutionMockData';
import InstitutionKpiCard from '../../components/institution/InstitutionKpiCard';
import SkillDistributionChart from '../../components/institution/SkillDistributionChart';
import SkillGapList from '../../components/institution/SkillGapList';
import IndustryAlignmentChart from '../../components/institution/IndustryAlignmentChart';

const InstitutionDashboard = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-green-900 via-green-800 to-indigo-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10">
          <p className="text-green-300 font-medium tracking-wide text-sm mb-2 uppercase">Academic Year {currentYear}-{currentYear + 1}</p>
          <h2 className="text-3xl font-bold mb-3">Institutional Skill Intelligence</h2>
          <p className="text-green-100 max-w-2xl text-lg font-light">
            Understand student capability, identify skill gaps, and align your institution's learning with industry demand.
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InstitutionKpiCard 
          title="Total Students" 
          value={institutionData.kpis.totalStudents.toLocaleString()} 
          subtitle="Across 5 departments"
          icon={Users}
          colorClass="bg-blue-50 text-blue-600"
        />
        <InstitutionKpiCard 
          title="Verified Skills" 
          value={`${institutionData.kpis.verifiedSkillsPct}%`} 
          subtitle="Of total declared skills"
          icon={CheckCircle2}
          colorClass="bg-green-50 text-green-600"
        />
        <InstitutionKpiCard 
          title="Placement Readiness" 
          value={`${institutionData.kpis.placementReadiness}%`} 
          subtitle="Average cohort score"
          icon={Target}
          colorClass="bg-purple-50 text-purple-600"
        />
        <InstitutionKpiCard 
          title="Active Internships" 
          value={institutionData.kpis.activeInternships} 
          subtitle="From 45 industry partners"
          icon={Briefcase}
          colorClass="bg-orange-50 text-orange-600"
        />
      </div>

      {/* Skill Intelligence Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SkillDistributionChart data={institutionData.skillDistribution} />
        </div>
        <div>
          <SkillGapList gaps={institutionData.skillGaps} />
        </div>
      </div>

      {/* Flagship Feature Row */}
      <div className="grid grid-cols-1 gap-6 pb-8">
        <IndustryAlignmentChart data={institutionData.industryAlignment} />
      </div>
    </div>
  );
};

export default InstitutionDashboard;
