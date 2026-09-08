import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const SkillDistributionChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900">Skill Intelligence</h3>
        <p className="text-sm text-gray-500">Self-declared vs Verified skills across the institution</p>
      </div>
      
      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
            <Tooltip 
              cursor={{ fill: '#f9fafb' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
            <Bar dataKey="selfDeclared" name="Self-Declared" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
            <Bar dataKey="verified" name="Verified" fill="#C4ED75" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SkillDistributionChart;
