import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Building, ArrowRight } from 'lucide-react';

export const OpportunityCard = ({ opp }) => {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="p-5 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300 bg-white group flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-gray-900 text-lg group-hover:text-indigo-700 transition-colors line-clamp-1">{opp.title}</h4>
          <div className="flex items-center gap-2 text-gray-600 text-sm mt-1.5">
            <Building size={14} className="text-gray-400" />
            <span className="font-medium">{opp.company}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="bg-green-50 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full border border-green-100 shadow-sm">
            {opp.match}% Match
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-5 text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} className="text-gray-400" />
          <span>{opp.location}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-gray-400" />
          <span>{opp.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          <span className="font-medium text-gray-700">{opp.type}</span>
        </div>
      </div>

      <div className="mb-6 flex-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Matched Skills</p>
        <div className="flex flex-wrap gap-1.5">
          {opp.skills.map((skill, i) => (
            <span key={i} className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button className="w-full py-2.5 bg-gray-50 text-indigo-700 font-semibold rounded-xl group-hover:bg-indigo-50 transition-colors flex justify-center items-center gap-2 mt-auto">
        View Opportunity
      </button>
    </motion.div>
  );
};

export const OpportunitiesList = ({ opportunities }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Recommended Opportunities</h3>
          <p className="text-sm text-gray-500">Internships and projects matching your skills.</p>
        </div>
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
          View All <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {opportunities.map((opp) => (
          <OpportunityCard key={opp.id} opp={opp} />
        ))}
      </div>
    </motion.div>
  );
};
