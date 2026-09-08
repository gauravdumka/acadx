import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, Lock, Mail, Building2, BriefcaseBusiness, Loader2 } from 'lucide-react';

const roleConfig = {
  student: {
    title: 'Student Login',
    emailLabel: 'Student Email',
    emailPlaceholder: 'Enter your email',
    buttonText: 'Login as Student',
    icon: Mail,
    footerText: "Don't have an account?",
    footerLink: 'Create Account'
  },
  institution: {
    title: 'Institution Login',
    emailLabel: 'Institution Email',
    emailPlaceholder: 'Enter institution email',
    buttonText: 'Login as Institution',
    icon: Building2,
    footerText: "New institution?",
    footerLink: 'Register your institution'
  },
  industry: {
    title: 'Industry Login',
    emailLabel: 'Business / Work Email',
    emailPlaceholder: 'Enter your work email',
    buttonText: 'Login as Industry',
    icon: BriefcaseBusiness,
    footerText: "New company?",
    footerLink: 'Register your company'
  }
};

const LoginForm = ({ selectedRole, onChangeRole, onSwitchToOTP }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const config = roleConfig[selectedRole];
  const EmailIcon = config.icon;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    // Mock loading state
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (selectedRole === 'industry') navigate('/industry');
      else if (selectedRole === 'institution') navigate('/institution');
      else navigate('/student');
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md mx-auto"
    >
      <button 
        onClick={onChangeRole}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Change account type
      </button>

      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{config.title}</h2>
        <p className="text-gray-500">Enter your credentials to securely access your account.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {config.emailLabel} <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <EmailIcon size={20} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
              placeholder={config.emailPlaceholder}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Lock size={20} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {error && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-sm font-medium">
            {error}
          </motion.div>
        )}

        <div className="flex items-center justify-between pt-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500/20 checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer" />
              <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none">
                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Remember me</span>
          </label>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center py-3.5 mt-4 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
        >
          {isLoading ? <Loader2 className="animate-spin" size={20} /> : config.buttonText}
        </button>
      </form>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="relative w-full flex items-center justify-center">
          <div className="absolute w-full border-t border-gray-200"></div>
          <span className="relative bg-white px-4 text-sm text-gray-400">Or continue with</span>
        </div>

        <button 
          onClick={onSwitchToOTP}
          className="w-full py-3 rounded-xl text-gray-700 font-semibold bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-[0.98]"
        >
          Login with OTP
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-gray-600">
        {config.footerText} 
        <button 
          onClick={() => {
            if (selectedRole === 'industry') navigate('/industry');
            else if (selectedRole === 'institution') navigate('/institution');
            else navigate('/student');
          }} 
          className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          {config.footerLink}
        </button>
      </p>
    </motion.div>
  );
};

export default LoginForm;
