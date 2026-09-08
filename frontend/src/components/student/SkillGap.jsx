import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, AlertCircle } from 'lucide-react';

const SkillGap = ({ gaps }) => {
  const getPriorityColor = (priority) => {
    switch(priority.toLowerCase()) {
      case 'high': return 'bg-red-50 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-blue-50 text-blue-700 border-blue-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Your Skill Gaps</h3>
        <p className="text-sm text-gray-500">These skills can improve your chances of getting your target role.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {gaps.map((gap, index) => {
          const gapPercentage = gap.required - gap.current;
          
          return (
            <motion.div 
              whileHover={{ y: -2 }}
              key={index} 
              className="p-4 rounded-xl border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300 bg-gray-50/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-gray-900">{gap.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${getPriorityColor(gap.priority)}`}>
                      {gap.priority} Priority
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-indigo-600">
                  <Target size={18} />
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Current Level</span>
                    <span className="font-semibold text-gray-700">{gap.current}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 rounded-full" style={{ width: `${gap.current}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Required Level</span>
                    <span className="font-semibold text-indigo-700">{gap.required}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${gap.required}%` }} />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200/60">
                <div className="flex items-center gap-1.5 text-xs font-medium text-gray-600">
                  <AlertCircle size={14} className="text-orange-500" />
                  <span>Gap: {gapPercentage}%</span>
                </div>
                <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                  Improve Skill <TrendingUp size={14} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SkillGap;
