import React from 'react';
import { motion } from 'framer-motion';

const WelcomeCard = ({ name, completionPercentage }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-indigo-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6"
    >
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-12 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>

      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Good morning, {name.split(' ')[0]} 👋</h2>
        <p className="text-indigo-200 text-sm sm:text-base max-w-lg">
          Let's continue building your career and becoming industry ready.
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Profile Completion</span>
            <span className="text-sm font-bold text-[#C4ED75]">{completionPercentage}%</span>
          </div>
          <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-[#C4ED75] rounded-full"
            />
          </div>
        </div>
        <button className="px-4 py-2 bg-white text-indigo-900 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
          Complete Profile
        </button>
      </div>
    </motion.div>
  );
};

export default WelcomeCard;
