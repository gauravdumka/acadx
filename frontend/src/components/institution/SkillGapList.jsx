import React from 'react';
import { AlertCircle } from 'lucide-react';

const SkillGapList = ({ gaps }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Skill Gaps</h3>
          <p className="text-sm text-gray-500">Most common missing skills among students</p>
        </div>
        <div className="bg-orange-50 text-orange-600 p-2 rounded-lg">
          <AlertCircle size={20} />
        </div>
      </div>
      
      <div className="flex-1 space-y-5">
        {gaps.map((gap, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-800">{gap.name}</span>
                {gap.priority === 'High' && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-700">Critical</span>
                )}
              </div>
              <span className="text-sm font-bold text-gray-900">{gap.gapPercentage}% Gap</span>
            </div>
            
            <div className="w-full bg-gray-100 rounded-full h-2 mb-1 overflow-hidden">
              <div 
                className={`h-2 rounded-full ${gap.priority === 'High' ? 'bg-red-500' : 'bg-orange-400'}`} 
                style={{ width: `${gap.gapPercentage}%` }}
              ></div>
            </div>
            
            <p className="text-xs text-gray-500">{gap.description}</p>
          </div>
        ))}
      </div>
      
      <button className="mt-6 w-full py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
        View All Skill Gaps
      </button>
    </div>
  );
};

export default SkillGapList;
