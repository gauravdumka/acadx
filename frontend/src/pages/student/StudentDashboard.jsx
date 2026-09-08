import React from 'react';
import WelcomeCard from '../../components/student/WelcomeCard';
import ReadinessCard from '../../components/student/ReadinessCard';
import SkillProfile from '../../components/student/SkillProfile';
import SkillGap from '../../components/student/SkillGap';
import CareerRecommendations from '../../components/student/CareerRecommendations';
import { OpportunitiesList } from '../../components/student/OpportunitiesList';
import LearningRecommendations from '../../components/student/LearningRecommendations';
import ApplicationTracker from '../../components/student/ApplicationTracker';
import ProgressAnalytics from '../../components/student/ProgressAnalytics';
import QuickActions from '../../components/student/QuickActions';
import ProfileCompletion from '../../components/student/ProfileCompletion';
import { studentData } from '../../data/studentMockData';

const StudentDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* Top Section */}
      <section>
        <WelcomeCard 
          name={studentData.profile.name} 
          completionPercentage={studentData.profile.completionPercentage} 
        />
      </section>

      {/* Overview Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ReadinessCard readiness={studentData.readiness} />
        </div>
        <div className="lg:col-span-2">
          <ProgressAnalytics analytics={studentData.progressAnalytics} />
        </div>
      </section>

      {/* Skills & Action Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <SkillProfile skills={studentData.skills} />
          <ProfileCompletion percentage={studentData.profile.completionPercentage} />
        </div>
        <div className="lg:col-span-2 flex flex-col gap-6">
          <SkillGap gaps={studentData.skillGaps} />
          <QuickActions />
        </div>
      </section>

      {/* Career & Opportunities */}
      <section className="space-y-6">
        <CareerRecommendations careers={studentData.careers} />
        <OpportunitiesList opportunities={studentData.opportunities} />
      </section>

      {/* Learning & Applications Grid */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <LearningRecommendations learning={studentData.learningRecommendations} />
        <ApplicationTracker applications={studentData.applications} />
      </section>
    </div>
  );
};

export default StudentDashboard;
