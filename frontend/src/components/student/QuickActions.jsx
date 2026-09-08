import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Briefcase, UserCircle, ArrowRight } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: Target, title: "Take Skill Assessment", desc: "Evaluate your current technical skills", color: "text-indigo-600", bg: "bg-indigo-50", border: "hover:border-indigo-200" },
    { icon: Compass, title: "Explore Careers", desc: "Find paths matching your profile", color: "text-purple-600", bg: "bg-purple-50", border: "hover:border-purple-200" },
    { icon: Briefcase, title: "Find Internships", desc: "Apply to matched opportunities", color: "text-blue-600", bg: "bg-blue-50", border: "hover:border-blue-200" },
    { icon: UserCircle, title: "Update Profile", desc: "Keep your resume and details fresh", color: "text-emerald-600", bg: "bg-emerald-50", border: "hover:border-emerald-200" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
      {actions.map((action, i) => (
        <motion.button
          key={i}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`flex flex-col items-start p-5 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 text-left group ${action.border}`}
        >
          <div className="flex w-full justify-between items-start mb-4">
            <div className={`p-3 rounded-xl ${action.bg} ${action.color}`}>
              <action.icon size={20} />
            </div>
            <ArrowRight size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
          </div>
          <h4 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-700 transition-colors">{action.title}</h4>
          <p className="text-xs text-gray-500 font-medium leading-relaxed">{action.desc}</p>
        </motion.button>
      ))}
    </div>
  );
};

export default QuickActions;
