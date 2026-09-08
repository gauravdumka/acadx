import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Calendar, Building2, ArrowRight } from 'lucide-react';

const AcademiaCollaboration = ({ collaboration }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Academia Collaboration</h3>
          <p className="text-sm text-gray-500">Active FDPs and institutional partnerships.</p>
        </div>
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
          View All <ArrowRight size={16} />
        </button>
      </div>

      <div className="space-y-4 flex-1">
        {collaboration.map((item) => (
          <div key={item.id} className="p-4 rounded-xl border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300 group flex items-start gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <Handshake size={20} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2 py-0.5 rounded-md">
                  {item.type}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                  item.status === 'Ongoing' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  {item.status}
                </span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 leading-tight">{item.topic}</h4>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <Building2 size={14} className="text-gray-400" />
                  <span>{item.institution}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <Calendar size={14} className="text-gray-400" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AcademiaCollaboration;
