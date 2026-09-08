import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle2, UserCircle2 } from 'lucide-react';

const ApplicationTracker = ({ applications }) => {
  const getStatusStyle = (status) => {
    switch(status.toLowerCase()) {
      case 'under review': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'interview': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'completed': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch(status.toLowerCase()) {
      case 'under review': return <Clock size={14} />;
      case 'interview': return <UserCircle2 size={14} />;
      case 'completed': return <CheckCircle2 size={14} />;
      default: return <Clock size={14} />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">My Applications</h3>
          <p className="text-sm text-gray-500">Track your current application statuses.</p>
        </div>
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors">
          View All <ArrowRight size={16} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-100 text-sm text-gray-500">
              <th className="pb-3 font-semibold pr-4">Role</th>
              <th className="pb-3 font-semibold px-4">Company</th>
              <th className="pb-3 font-semibold px-4">Date Applied</th>
              <th className="pb-3 font-semibold pl-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {applications.map((app) => (
              <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group cursor-pointer">
                <td className="py-4 pr-4">
                  <span className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{app.role}</span>
                </td>
                <td className="py-4 px-4 font-medium text-gray-600">{app.company}</td>
                <td className="py-4 px-4 text-gray-500">{app.dateApplied}</td>
                <td className="py-4 pl-4">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-semibold ${getStatusStyle(app.status)}`}>
                    {getStatusIcon(app.status)}
                    {app.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ApplicationTracker;
