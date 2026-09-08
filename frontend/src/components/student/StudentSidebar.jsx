import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Target, 
  BrainCircuit, 
  TrendingUp, 
  Compass, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  User, 
  Settings, 
  LogOut,
  X
} from 'lucide-react';

const StudentSidebar = ({ onMobileClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const mainNav = [
    { name: 'Dashboard', path: '/student', icon: LayoutDashboard },
    { name: 'Skill Assessment', path: '/student/assessment', icon: Target },
    { name: 'My Skills', path: '/student/skills', icon: BrainCircuit },
    { name: 'Skill Gaps', path: '/student/gaps', icon: TrendingUp },
    { name: 'Career Explorer', path: '/student/careers', icon: Compass },
    { name: 'Opportunities', path: '/student/opportunities', icon: Briefcase },
    { name: 'Learning & Dev', path: '/student/learning', icon: GraduationCap },
    { name: 'Applications', path: '/student/applications', icon: FileText },
    { name: 'Profile', path: '/student/profile', icon: User },
  ];

  const bottomNav = [
    { name: 'Settings', path: '/student/settings', icon: Settings },
    { name: 'Logout', path: '/', icon: LogOut },
  ];

  const NavItem = ({ item }) => {
    const isActive = currentPath === item.path || (item.path !== '/student' && currentPath.startsWith(item.path));
    
    return (
      <Link
        to={item.path}
        onClick={onMobileClose}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
          isActive 
            ? 'bg-indigo-50 text-indigo-700' 
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
      >
        <item.icon 
          size={20} 
          className={isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'} 
        />
        {item.name}
      </Link>
    );
  };

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200 shadow-sm">
      {/* Brand & Mobile Close */}
      <div className="h-20 flex items-center justify-between px-6 border-b border-gray-100">
        <Link to="/student" onClick={onMobileClose}>
          <div className="bg-[#0a0a0a] px-3 py-1.5 rounded-lg shadow-sm border border-white/10 flex items-center justify-center">
            <span className="font-bold text-[#C4ED75] tracking-wider text-lg">ACADEX</span>
          </div>
        </Link>
        {onMobileClose && (
          <button onClick={onMobileClose} className="lg:hidden text-gray-500 hover:text-gray-800 p-2">
            <X size={20} />
          </button>
        )}
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Menu</p>
        {mainNav.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-gray-100 space-y-1">
        {bottomNav.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default StudentSidebar;
