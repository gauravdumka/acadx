import React from 'react';

const InstitutionKpiCard = ({ title, value, subtitle, icon: Icon, colorClass }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-1">{title}</h3>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-xl ${colorClass}`}>
          <Icon size={24} />
        </div>
      </div>
      <p className="text-sm text-gray-600 font-medium">{subtitle}</p>
    </div>
  );
};

export default InstitutionKpiCard;
