import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebar from '../components/student/StudentSidebar';
import StudentHeader from '../components/student/StudentHeader';
import { studentData } from '../data/studentMockData';

const StudentLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex font-sans">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 fixed inset-y-0 z-50">
        <StudentSidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <StudentSidebar onMobileClose={() => setIsMobileMenuOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen lg:pl-64 transition-all duration-300">
        <StudentHeader 
          studentName={studentData.profile.name}
          studentAvatar={studentData.profile.avatar}
          studentRole={studentData.profile.role}
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />
        
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;
