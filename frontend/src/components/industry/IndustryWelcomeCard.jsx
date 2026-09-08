import React from 'react';
import { motion } from 'framer-motion';

const IndustryWelcomeCard = ({ companyName, overview }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-indigo-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md"
    >
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-12 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="relative z-10 flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, {companyName} 👋</h2>
        <p className="text-indigo-200 text-sm sm:text-base max-w-lg">
          Here is what's happening with your recruitment and academic collaborations today.
        </p>
      </div>

      <div className="relative z-10 flex gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 w-full md:w-auto overflow-x-auto custom-scrollbar">
        <div className="flex-1 min-w-[100px] text-center border-r border-white/20 pr-4">
          <p className="text-3xl font-bold text-white mb-1">{overview.newApplications}</p>
          <p className="text-xs font-medium text-indigo-200">New Applications</p>
        </div>
        <div className="flex-1 min-w-[100px] text-center px-4">
          <p className="text-3xl font-bold text-[#C4ED75] mb-1">{overview.interviewsScheduled}</p>
          <p className="text-xs font-medium text-indigo-200">Interviews</p>
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryWelcomeCard;
