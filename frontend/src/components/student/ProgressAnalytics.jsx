import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, TrendingUp, CheckCircle, Briefcase } from 'lucide-react';

const ProgressAnalytics = ({ analytics }) => {
  const stats = [
    { label: "Assessments Completed", value: analytics.stats.assessmentsCompleted, icon: Target, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Skills Improved", value: analytics.stats.skillsImproved, icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
    { label: "Applications Sent", value: analytics.stats.applicationsSent, icon: CheckCircle, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Opportunities Matched", value: analytics.stats.opportunitiesMatched, icon: Briefcase, color: "text-amber-600", bg: "bg-amber-50" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
    >
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Your Progress</h3>
        <p className="text-sm text-gray-500">Skill growth and platform activity over time.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analytics.history} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                cursor={{ stroke: '#e5e7eb', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="score" 
                name="Skill Score"
                stroke="#4f46e5" 
                strokeWidth={3}
                dot={{ fill: '#4f46e5', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#4f46e5', stroke: '#fff', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 h-max">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between">
              <div className={`w-8 h-8 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon size={16} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs font-medium text-gray-500 leading-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressAnalytics;
