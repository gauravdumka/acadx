import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BriefcaseBusiness, ArrowRight, BookOpen } from 'lucide-react';
import RoleCard from './RoleCard';

const roles = [
  {
    id: "student",
    title: "I'm a Student",
    description: "Access your skill profile, career recommendations, internships and opportunities.",
    icon: GraduationCap
  },
  {
    id: "academician",
    title: "I'm an Academician",
    description: "Monitor student mentorship and browse faculty development programs.",
    icon: BookOpen
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

const RoleSelector = ({ selectedRole, setSelectedRole, setHoveredRole, onContinue }) => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      className="w-full max-w-md mx-auto"
    >
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="mb-10 text-center lg:text-left"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back to AcadX</h2>
        <p className="text-gray-500 text-lg">Choose how you want to continue</p>
      </motion.div>

      <div className="space-y-4 mb-10">
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            role={role}
            isSelected={selectedRole === role.id}
            onClick={setSelectedRole}
            onHover={setHoveredRole}
          />
        ))}
      </div>

      <motion.button
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        whileHover={selectedRole ? { y: -2, scale: 1.01 } : {}}
        whileTap={selectedRole ? { scale: 0.98 } : {}}
        onClick={onContinue}
        disabled={!selectedRole}
        className={`group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 ${
          selectedRole 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        Continue as {selectedRole ? roles.find(r => r.id === selectedRole)?.title.replace("I'm an ", "").replace("I'm a ", "") : '...'}
        <ArrowRight size={20} className={selectedRole ? "group-hover:translate-x-1 transition-transform" : ""} />
      </motion.button>
    </motion.div>
  );
};

export default RoleSelector;
