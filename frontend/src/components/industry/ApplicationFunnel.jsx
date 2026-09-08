import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Target, ArrowRight } from 'lucide-react';

const ApplicationFunnel = ({ analytics }) => {
  const colors = ['#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Recruitment Funnel</h3>
          <p className="text-sm text-gray-500">Pipeline health across all active listings.</p>
        </div>
        <button className="p-2 text-gray-400 hover:text-indigo-600 bg-gray-50 rounded-lg transition-colors">
          <Target size={18} />
        </button>
      </div>

      <div className="flex-1 h-[250px] min-h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={analytics} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f3f4f6" />
            <XAxis 
              type="number" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
            />
            <YAxis 
              dataKey="name" 
              type="category" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#4b5563', fontSize: 13, fontWeight: 500 }} 
              width={90}
            />
            <Tooltip 
              cursor={{ fill: '#f3f4f6' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={24}>
              {analytics.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <button className="w-full mt-4 py-2.5 bg-indigo-50 text-indigo-700 font-semibold rounded-xl hover:bg-indigo-100 transition-colors flex justify-center items-center gap-2">
        View Detailed Analytics <ArrowRight size={16} />
      </button>
    </motion.div>
  );
};

export default ApplicationFunnel;
