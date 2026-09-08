import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowRight, Users, ChevronRight } from 'lucide-react';

const ActiveOpportunities = ({ opportunities }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Active Postings</h3>
          <p className="text-sm text-gray-500">Live jobs and internships.</p>
        </div>
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
          View All <ArrowRight size={16} />
        </button>
      </div>

      <div className="space-y-4 flex-1">
        {opportunities.map((opp) => (
          <div key={opp.id} className="group p-4 rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all bg-gray-50/50 cursor-pointer flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${opp.type === 'Internship' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                {opp.type === 'Internship' ? <GraduationCap size={20} /> : <Briefcase size={20} />}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">{opp.title}</h4>
                <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                  </span>
                  <span>•</span>
                  <span>{opp.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/3">
              <div className="flex flex-col sm:items-end">
                <span className="text-lg font-bold text-gray-900 flex items-center gap-1.5">
                  <Users size={16} className="text-gray-400" /> {opp.applicants}
                </span>
                <span className="text-xs text-gray-500 font-medium">Applicants</span>
              </div>
              <ChevronRight size={18} className="text-gray-300 group-hover:text-indigo-500 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ActiveOpportunities;
