import React from 'react';
import { Outlet } from 'react-router-dom';

const AcademicianLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-12 rounded-3xl shadow-xl max-w-2xl w-full text-center border border-gray-100">
        <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">👨‍🏫</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Academician Dashboard</h1>
        <p className="text-gray-500 mb-8 text-lg">
          Personal faculty profile and student mentorship overview. Student tracking and Faculty Opportunities (FDPs) coming soon.
        </p>
        <button className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-colors">
          Return Home
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default AcademicianLayout;
