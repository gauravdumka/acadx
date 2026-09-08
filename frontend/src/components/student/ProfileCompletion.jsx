import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

const ProfileCompletion = ({ percentage }) => {
  const checklist = [
    { label: "Basic Information", completed: true },
    { label: "Education Details", completed: true },
    { label: "Add Skills", completed: true },
    { label: "Upload Resume", completed: false },
    { label: "Add Projects", completed: false },
    { label: "Add Certifications", completed: false },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900">Complete Profile</h3>
        <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-full">
          {percentage}%
        </span>
      </div>

      <div className="space-y-3 mb-6 flex-1">
        {checklist.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            {item.completed ? (
              <CheckCircle2 size={18} className="text-green-500 shrink-0" />
            ) : (
              <Circle size={18} className="text-gray-300 shrink-0" />
            )}
            <span className={`text-sm font-medium ${item.completed ? 'text-gray-900' : 'text-gray-500'}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 bg-indigo-50 text-indigo-700 font-semibold rounded-xl hover:bg-indigo-100 transition-colors mt-auto">
        Update Profile
      </button>
    </motion.div>
  );
};

export default ProfileCompletion;
