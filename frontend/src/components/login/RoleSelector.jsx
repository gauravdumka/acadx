import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BriefcaseBusiness, ArrowRight } from 'lucide-react';
import RoleCard from './RoleCard';

const roles = [
  {
    id: "student",
    title: "I'm a Student",
    description: "Access your skill profile, career recommendations, internships and opportunities.",
    icon: GraduationCap
  },
  {
    id: "institution",
    title: "I'm an Institution",
    description: "Manage students, track skill development and monitor industry readiness.",
    icon: School
  },
  {
    id: "industry",
    title: "I'm an Industry",
    description: "Discover skilled talent and connect with students through internships, projects and jobs.",
    icon: BriefcaseBusiness
  }
];

const RoleSelector = ({ selectedRole, setSelectedRole, onContinue }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back to AcadX</h2>
        <p className="text-gray-500 text-lg">Choose how you want to continue</p>
      </div>

      <div className="space-y-4 mb-10">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            isSelected={selectedRole === role.id}
            onClick={setSelectedRole}
          />
        ))}
      </div>

      <button
        onClick={onContinue}
        disabled={!selectedRole}
        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
          selectedRole 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 active:scale-[0.98]' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        Continue as {selectedRole ? roles.find(r => r.id === selectedRole)?.title.replace("I'm an ", "").replace("I'm a ", "") : '...'}
        <ArrowRight size={20} />
      </button>
    </motion.div>
  );
};

export default RoleSelector;
