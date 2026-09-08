import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, MapPin, Edit3, UploadCloud, Link as LinkIcon, Book } from 'lucide-react';
import { studentData } from '../../data/studentMockData';

const StudentProfile = () => {
  const { profile, skills } = studentData;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header Profile Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
      >
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 w-full relative">
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
        </div>
        
        <div className="px-6 sm:px-10 pb-10 relative">
          {/* Avatar */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 -mt-16 sm:-mt-20 mb-6">
            <div className="relative">
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg object-cover bg-white"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-indigo-600 transition-colors border border-gray-100">
                <Edit3 size={16} />
              </button>
            </div>
            
            <div className="flex gap-3 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                <UploadCloud size={18} /> Resume
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">{profile.name}</h1>
            <p className="text-lg text-gray-500 font-medium mb-4">{profile.branch} Student</p>
            
            <p className="text-gray-600 leading-relaxed max-w-3xl mb-6">
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-gray-400" />
                <span>{profile.college} (Class of {profile.graduationYear})</span>
              </div>
              <div className="flex items-center gap-2">
                <Book size={16} className="text-gray-400" />
                <span>{profile.degree}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="p-2 bg-gray-50 rounded-lg"><Mail size={16} /></div>
                <span className="text-sm font-medium">{profile.name.toLowerCase().replace(' ', '.')}@university.edu</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="p-2 bg-gray-50 rounded-lg"><LinkIcon size={16} /></div>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:underline">github.com/{profile.name.toLowerCase().replace(' ', '')}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="p-2 bg-gray-50 rounded-lg"><LinkIcon size={16} /></div>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:underline">linkedin.com/in/{profile.name.toLowerCase().replace(' ', '')}</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900">Top Skills</h3>
              <button className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-lg transition-colors">
                <Edit3 size={16} />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-700 font-semibold text-sm">
                  {skill.name}
                </div>
              ))}
              <button className="px-4 py-2 bg-gray-50 border border-gray-200 border-dashed rounded-xl text-gray-500 font-semibold text-sm hover:bg-gray-100 transition-colors">
                + Add Skill
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
