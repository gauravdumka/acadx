import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

// Student Portal
import StudentLayout from './layouts/StudentLayout';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProfile from './pages/student/StudentProfile';
import ComingSoon from './components/student/ComingSoon';

// Industry Portal
import IndustryLayout from './layouts/IndustryLayout';
import IndustryDashboard from './pages/industry/IndustryDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      {/* Student Portal Routes */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="profile" element={<StudentProfile />} />
        
        {/* Placeholder Routes */}
        <Route path="assessment" element={<ComingSoon title="Skill Assessment" />} />
        <Route path="skills" element={<ComingSoon title="My Skills" />} />
        <Route path="gaps" element={<ComingSoon title="Skill Gaps" />} />
        <Route path="careers" element={<ComingSoon title="Career Explorer" />} />
        <Route path="opportunities" element={<ComingSoon title="Opportunities" />} />
        <Route path="learning" element={<ComingSoon title="Learning & Dev" />} />
        <Route path="applications" element={<ComingSoon title="Applications" />} />
        <Route path="settings" element={<ComingSoon title="Settings" />} />
      </Route>

      {/* Industry Portal Routes */}
      <Route path="/industry" element={<IndustryLayout />}>
        <Route index element={<IndustryDashboard />} />
        
        {/* Placeholder Routes */}
        <Route path="profile" element={<ComingSoon title="Company Profile" />} />
        <Route path="demand" element={<ComingSoon title="Skill Demand" />} />
        <Route path="jobs" element={<ComingSoon title="Jobs" />} />
        <Route path="internships" element={<ComingSoon title="Internships" />} />
        <Route path="candidates" element={<ComingSoon title="Talent Discovery" />} />
        <Route path="applications" element={<ComingSoon title="Application Management" />} />
        <Route path="learning" element={<ComingSoon title="Industry Learning Programs" />} />
        <Route path="collaboration" element={<ComingSoon title="Academia Collaboration" />} />
        <Route path="analytics" element={<ComingSoon title="Analytics" />} />
        <Route path="notifications" element={<ComingSoon title="Notifications" />} />
        <Route path="settings" element={<ComingSoon title="Settings" />} />
      </Route>
    </Routes>
  );
}

export default App;
