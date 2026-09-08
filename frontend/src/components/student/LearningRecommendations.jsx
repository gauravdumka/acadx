import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Lightbulb, PlayCircle } from 'lucide-react';

const LearningRecommendations = ({ learning }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Recommended Skill Development</h3>
          <p className="text-sm text-gray-500">Courses and tracks to close your skill gaps.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {learning.map((item, index) => (
          <motion.div 
            whileHover={{ y: -4 }}
            key={index}
            className="flex flex-col p-5 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 bg-gray-50/30 group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white shadow-sm border border-gray-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 leading-tight mb-1">{item.title}</h4>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1 font-medium bg-gray-100 px-2 py-0.5 rounded-md">
                    {item.difficulty}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {item.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-5 flex-1 bg-white p-3 rounded-xl border border-indigo-50 flex gap-2">
              <Lightbulb size={16} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">{item.reason}</p>
            </div>

            <button className="w-full py-2.5 bg-white border-2 border-indigo-100 text-indigo-600 font-bold rounded-xl group-hover:bg-indigo-50 transition-colors flex justify-center items-center gap-2 mt-auto">
              <PlayCircle size={18} /> Start Learning
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LearningRecommendations;
