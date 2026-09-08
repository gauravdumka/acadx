import React from 'react';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const ComingSoon = ({ title = "Page" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-600"
      >
        <Construction size={40} />
      </motion.div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title} Coming Soon</h2>
      <p className="text-gray-500 max-w-md">
        We are actively working on the {title} feature. It will be available in the next major update!
      </p>
    </div>
  );
};

export default ComingSoon;
