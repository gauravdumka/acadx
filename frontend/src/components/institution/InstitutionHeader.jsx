import React from 'react';
import { Menu, Bell, Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const InstitutionHeader = ({ institutionName, adminName, avatar, onMenuClick, location }) => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <Menu size={24} />
        </button>

        {/* Welcome Text */}
        <div className="hidden sm:block">
          <motion.h1 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold text-gray-900"
          >
            Institution Command Center
          </motion.h1>
          <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-0.5">
            <MapPin size={14} className="text-green-600" />
            {institutionName} • {location}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400 group-hover:text-green-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search students, skills, cohorts..."
            className="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>

        {/* Profile Dropdown */}
        <button className="flex items-center gap-3 hover:opacity-80 transition-opacity text-left">
          <img
            src={avatar}
            alt="Institution Admin"
            className="w-10 h-10 rounded-full object-cover border border-gray-200 bg-green-50"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">{adminName}</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default InstitutionHeader;
