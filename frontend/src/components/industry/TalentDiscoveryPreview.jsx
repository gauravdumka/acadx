import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, GraduationCap, XCircle } from 'lucide-react';

const TalentDiscoveryPreview = ({ candidates }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Top Talent Matches</h3>
          <p className="text-sm text-gray-500">Students matching your highly demanded skills.</p>
        </div>
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
          Open Discovery <ArrowRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {candidates.map((candidate) => (
          <motion.div 
            whileHover={{ y: -4 }}
            key={candidate.id}
            className="flex flex-col p-5 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 bg-white group relative overflow-hidden"
          >
            {/* Top match score badge */}
            <div className="absolute top-4 right-4 bg-green-50 border border-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
              {candidate.matchScore}% Match
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img 
                src={candidate.avatar} 
                alt={candidate.name} 
                className="w-12 h-12 rounded-xl object-cover border border-gray-200"
              />
              <div>
                <h4 className="font-bold text-gray-900 group-hover:text-indigo-700 transition-colors leading-tight">{candidate.name}</h4>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 font-medium">
                  <GraduationCap size={12} className="text-gray-400" />
                  <span>Class of {candidate.year}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 font-medium mb-5 truncate">
              {candidate.branch} • {candidate.college}
            </p>

            <div className="space-y-4 mb-6 flex-1">
              <div>
                <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Required Skills (Matched)</h5>
                <div className="flex flex-wrap gap-1.5">
                  {candidate.matchedSkills.map((skill, idx) => (
                    <span key={idx} className="flex items-center gap-1 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md">
                      <CheckCircle2 size={12} className="text-green-500" /> {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {candidate.missingSkills.length > 0 && (
                <div>
                  <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Preferred Skills (Gap)</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {candidate.missingSkills.map((skill, idx) => (
                      <span key={idx} className="flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-50 border border-gray-100 border-dashed px-2 py-0.5 rounded-md opacity-70">
                        <XCircle size={12} className="text-gray-400" /> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="w-full py-2.5 bg-gray-50 text-indigo-700 font-semibold rounded-xl group-hover:bg-indigo-50 transition-colors flex justify-center items-center gap-2 mt-auto">
              View Profile
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TalentDiscoveryPreview;
