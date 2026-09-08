import React from 'react';
import { motion } from 'framer-motion';

const ReadinessCard = ({ readiness }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
    >
      <h3 className="text-lg font-bold text-gray-900 mb-6">Career Readiness</h3>
      
      <div className="flex flex-col items-center mb-8 relative">
        <svg viewBox="0 0 36 36" className="w-32 h-32 transform -rotate-90">
          <path
            className="text-gray-100"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <motion.path
            className="text-indigo-600"
            strokeWidth="3"
            strokeDasharray={`${readiness.overall}, 100`}
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            initial={{ strokeDasharray: "0, 100" }}
            animate={{ strokeDasharray: `${readiness.overall}, 100` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{readiness.overall}%</span>
          <span className="text-xs text-gray-500 font-medium">Overall</span>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        {readiness.breakdown.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600 font-medium">{item.category}</span>
              <span className="text-gray-900 font-semibold">{item.score}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${item.score}%` }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                className="h-full bg-indigo-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <h4 className="text-sm font-semibold text-gray-900">{readiness.statusText}</h4>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">
          {readiness.explanation}
        </p>
      </div>
    </motion.div>
  );
};

export default ReadinessCard;
