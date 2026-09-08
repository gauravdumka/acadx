import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SkillProfile = ({ skills }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900">My Skill Profile</h3>
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
          View All <ArrowRight size={16} />
        </button>
      </div>

      <div className="space-y-5 flex-1">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-gray-700 font-medium">{skill.name}</span>
              <span className="text-gray-500 font-medium">{skill.progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.progress}%` }}
                transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full group-hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillProfile;
