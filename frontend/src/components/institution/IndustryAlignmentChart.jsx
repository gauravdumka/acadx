import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const IndustryAlignmentChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm col-span-full h-full flex flex-col">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-xl font-bold text-gray-900">Industry Demand vs Student Supply</h3>
          <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-md border border-indigo-100">
            FLAGSHIP INTELLIGENCE
          </span>
        </div>
        <p className="text-sm text-gray-500">Comparing required industry skills against verified student proficiencies</p>
      </div>

      <div className="flex-1 w-full min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSupply" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C4ED75" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#C4ED75" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis dataKey="skill" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6b7280' }} unit="%" />
            <Tooltip 
              cursor={{ stroke: '#9ca3af', strokeWidth: 1, strokeDasharray: '4 4' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '13px', paddingTop: '20px' }} />
            <Area 
              type="monotone" 
              dataKey="demand" 
              name="Industry Demand" 
              stroke="#8b5cf6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorDemand)" 
            />
            <Area 
              type="monotone" 
              dataKey="supply" 
              name="Student Supply (Verified)" 
              stroke="#84cc16" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorSupply)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
          <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Largest Gap</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-lg font-bold text-gray-900">Cloud (AWS/Azure)</h4>
            <span className="text-red-600 font-semibold text-sm">31% deficit</span>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
          <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Strongest Alignment</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-lg font-bold text-gray-900">React</h4>
            <span className="text-green-600 font-semibold text-sm">13% deficit</span>
          </div>
        </div>
        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 flex items-center justify-between group cursor-pointer hover:bg-indigo-100 transition-colors">
          <div>
            <p className="text-xs text-indigo-600 font-semibold mb-1 uppercase tracking-wider">Recommended Action</p>
            <h4 className="text-sm font-bold text-indigo-900">Host Cloud Architecture Bootcamp</h4>
          </div>
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
            →
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryAlignmentChart;
