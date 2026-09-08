import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Activity, 
  Target, 
  TrendingUp, 
  BriefcaseBusiness, 
  GraduationCap, 
  BookOpen,
  PieChart,
  FileText,
  Settings,
  LogOut,
  Building2
} from 'lucide-react';

const InstitutionSidebar = ({ onMobileClose }) => {
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/institution', exact: true },
    { name: 'Students', icon: Users, path: '/institution/students' },
    { name: 'Skill Intelligence', icon: Activity, path: '/institution/skills' },
    { name: 'Skill Gaps', icon: Target, path: '/institution/gaps' },
    { name: 'Industry Demand', icon: TrendingUp, path: '/institution/demand' },
    { name: 'Internships', icon: BriefcaseBusiness, path: '/institution/internships' },
    { name: 'Placements', icon: GraduationCap, path: '/institution/placements' },
    { name: 'Training Programs', icon: BookOpen, path: '/institution/training' },
    { name: 'Industry Partners', icon: Building2, path: '/institution/partners' },
    { name: 'Analytics', icon: PieChart, path: '/institution/analytics' },
    { name: 'Reports', icon: FileText, path: '/institution/reports' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="h-full bg-white border-r border-gray-200 flex flex-col w-64 shadow-sm">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 border-b border-gray-100">
        <div className="bg-[#0a0a0a] px-3 py-2 rounded-lg cursor-pointer" onClick={() => navigate('/')}>
          <svg width="80" height="16" viewBox="0 0 165 40" fill="none" stroke="#C4ED75" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,32 L20,10 L30,32" />
            <path d="M55,10 L40,21 L55,32" />
            <path d="M65,32 L75,10 L85,32" />
            <path d="M95,10 L95,32 M95,10 L105,10 C114,10 114,32 105,32 L95,32" />
            <path d="M122,10 L137,10 M122,21 L134,21 M122,32 L137,32" />
            <path d="M149,10 L157,21 L149,32 M165,10 L157,21 L165,32" />
          </svg>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-6 px-4 custom-scrollbar">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.exact}
              onClick={onMobileClose}
              className={({ isActive }) =>
                `flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              <item.icon 
                size={18} 
                className={`mr-3 transition-colors ${
                  window.location.pathname === item.path || (item.exact && window.location.pathname === '/institution')
                    ? 'text-green-600' 
                    : 'text-gray-400 group-hover:text-gray-600'
                }`} 
              />
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-100">
        <NavLink
          to="/institution/settings"
          onClick={onMobileClose}
          className={({ isActive }) =>
            `flex items-center px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
              isActive
                ? 'bg-green-50 text-green-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`
          }
        >
          <Settings size={18} className="mr-3 text-gray-400 group-hover:text-gray-600" />
          Settings
        </NavLink>
        <button
          onClick={handleLogout}
          className="w-full mt-2 flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut size={18} className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default InstitutionSidebar;
