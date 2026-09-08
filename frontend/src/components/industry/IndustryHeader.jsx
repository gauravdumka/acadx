import React, { useState } from 'react';
import { Menu, Bell, Search, ChevronDown, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const IndustryHeader = ({ companyName, companyAvatar, role, onMenuClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30 shadow-sm shadow-gray-50/50">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
        >
          <Menu size={20} />
        </button>
        
        <div className="hidden sm:flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 transition-all w-64 lg:w-80">
          <Search size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search candidates, jobs..." 
            className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-700"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <button className="relative p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        
        <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 p-1 pr-2 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
          >
            <img 
              src={companyAvatar} 
              alt={companyName} 
              className="w-8 h-8 rounded-lg object-cover border border-gray-200 bg-white"
            />
            <div className="hidden sm:block text-left">
              <p className="text-sm font-bold text-gray-900 leading-tight">{companyName}</p>
              <p className="text-xs font-medium text-gray-500 flex items-center gap-1">
                <Building size={10} /> {role}
              </p>
            </div>
            <ChevronDown size={14} className="text-gray-400 hidden sm:block" />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 origin-top-right"
                >
                  <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 font-medium">Company Profile</a>
                  <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 font-medium">Settings</a>
                  <div className="h-px bg-gray-100 my-1"></div>
                  <a href="/login" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium">Sign Out</a>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default IndustryHeader;
