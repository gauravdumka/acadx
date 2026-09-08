import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

const CareerRecommendations = ({ careers }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Recommended Career Paths</h3>
          <p className="text-sm text-gray-500">Based on your current skill profile and industry demand.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {careers.map((career, index) => (
          <motion.div 
            whileHover={{ y: -4 }}
            key={index}
            className="flex flex-col p-5 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold text-gray-900">{career.match}%</span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-1">Match</span>
              </div>
            </div>

            <h4 className="text-lg font-bold text-gray-900 mb-2">{career.title}</h4>
            <p className="text-sm text-gray-500 mb-5 flex-1 line-clamp-3 leading-relaxed">
              {career.description}
            </p>

            <div className="mb-6">
              <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Required Skills</h5>
              <div className="flex flex-wrap gap-2">
                {career.requiredSkills.slice(0, 3).map((skill, i) => (
                  <span key={i} className="flex items-center gap-1 text-xs font-medium text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md">
                    <CheckCircle2 size={12} className="text-indigo-500" /> {skill}
                  </span>
                ))}
                {career.requiredSkills.length > 3 && (
                  <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-200">
                    +{career.requiredSkills.length - 3} more
                  </span>
                )}
              </div>
            </div>

            <button className="w-full py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all duration-300 flex justify-center items-center gap-2 mt-auto">
              Explore Career <ArrowRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CareerRecommendations;
