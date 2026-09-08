import React from 'react';
import { motion } from 'framer-motion';
import { Circle, CheckCircle2 } from 'lucide-react';

const RoleCard = ({ role, isSelected, onClick }) => {
  const Icon = role.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(role.id)}
      className={`relative cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
        isSelected 
          ? 'border-indigo-600 bg-indigo-50/50 shadow-md shadow-indigo-600/10' 
          : 'border-gray-200 bg-white hover:border-indigo-200 hover:shadow-sm'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl transition-colors duration-300 ${
          isSelected ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'
        }`}>
          <Icon size={24} />
        </div>
        
        <div className="flex-1 pr-6">
          <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
            isSelected ? 'text-indigo-900' : 'text-gray-900'
          }`}>
            {role.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {role.description}
          </p>
        </div>

        <div className="absolute top-6 right-6">
          {isSelected ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <CheckCircle2 className="text-indigo-600" size={24} />
            </motion.div>
          ) : (
            <Circle className="text-gray-300" size={24} />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RoleCard;
