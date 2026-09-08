import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Building, Target, Briefcase, 
  GraduationCap, Users, FileText, BookOpen, 
  Handshake, LineChart, Bell, Settings, LogOut, X
} from 'lucide-react';

const IndustrySidebar = ({ onMobileClose }) => {
  const location = useLocation();

  const navGroups = [
    {
      title: "OVERVIEW",
      links: [
        { path: "/industry", icon: LayoutDashboard, label: "Dashboard" },
        { path: "/industry/profile", icon: Building, label: "Company Profile" },
      ]
    },
    {
      title: "RECRUITMENT",
      links: [
        { path: "/industry/demand", icon: Target, label: "Skill Demand" },
        { path: "/industry/jobs", icon: Briefcase, label: "Jobs" },
        { path: "/industry/internships", icon: GraduationCap, label: "Internships" },
        { path: "/industry/candidates", icon: Users, label: "Candidates" },
        { path: "/industry/applications", icon: FileText, label: "Applications" },
      ]
    },
    {
      title: "COLLABORATION",
      links: [
        { path: "/industry/learning", icon: BookOpen, label: "Learning Programs" },
        { path: "/industry/collaboration", icon: Handshake, label: "Academia Connect" },
      ]
    },
    {
      title: "MANAGEMENT",
      links: [
        { path: "/industry/analytics", icon: LineChart, label: "Analytics" },
        { path: "/industry/notifications", icon: Bell, label: "Notifications" },
        { path: "/industry/settings", icon: Settings, label: "Settings" },
      ]
    }
  ];

  return (
    <div className="h-full bg-white border-r border-gray-100 flex flex-col w-64 shadow-sm">
      {/* Brand & Mobile Close */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Λ</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">ACADEX</span>
        </div>
        <button 
          onClick={onMobileClose}
          className="lg:hidden p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4 px-3 custom-scrollbar">
        {navGroups.map((group, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              {group.title}
            </h3>
            <ul className="space-y-1">
              {group.links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                
                return (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      onClick={onMobileClose}
                      className={`
                        flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
                        ${isActive 
                          ? 'bg-indigo-50 text-indigo-700 shadow-sm shadow-indigo-100/50' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                      `}
                    >
                      <Icon size={18} className={isActive ? 'text-indigo-600' : 'text-gray-400'} />
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Logout Footer */}
      <div className="p-4 border-t border-gray-50">
        <NavLink 
          to="/login"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors w-full"
        >
          <LogOut size={18} className="text-gray-400 group-hover:text-red-500" />
          Sign Out
        </NavLink>
      </div>
    </div>
  );
};

export default IndustrySidebar;
