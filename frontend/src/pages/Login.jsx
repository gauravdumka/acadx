import React, { useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import LoginBranding from '../components/login/LoginBranding';
import RoleSelector from '../components/login/RoleSelector';
import LoginForm from '../components/login/LoginForm';
import OTPForm from '../components/login/OTPForm';
import { Link } from 'react-router-dom';

const Login = () => {
  const [currentStep, setCurrentStep] = useState('role-selection'); // 'role-selection' | 'login-form'
  const [selectedRole, setSelectedRole] = useState(null);
  const [hoveredRole, setHoveredRole] = useState(null);
  const [authMethod, setAuthMethod] = useState('password'); // 'password' | 'otp'

  // Parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    // Only track on desktop
    if (window.innerWidth >= 1024) {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized position (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleContinue = () => {
    if (selectedRole) {
      setCurrentStep('login-form');
    }
  };

  const handleChangeRole = () => {
    setCurrentStep('role-selection');
  };

  return (
    <div 
      className="min-h-screen flex flex-col lg:flex-row w-full bg-white font-sans overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Mobile Branding Header (Only visible on small screens) */}
      <div className="lg:hidden w-full bg-indigo-900 p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[30vh]">
        <div className="absolute inset-0 opacity-40">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/50 to-purple-500/50 mix-blend-multiply"></div>
        </div>
        <Link to="/" className="relative z-10 mb-4">
          <div className="bg-[#0a0a0a] px-3 py-2 rounded-lg shadow-lg">
            <svg width="90" height="18" viewBox="0 0 165 40" fill="none" stroke="#C4ED75" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10,32 L20,10 L30,32" />
              <path d="M55,10 L40,21 L55,32" />
              <path d="M65,32 L75,10 L85,32" />
              <path d="M95,10 L95,32 M95,10 L105,10 C114,10 114,32 105,32 L95,32" />
              <path d="M122,10 L137,10 M122,21 L134,21 M122,32 L137,32" />
              <path d="M149,10 L157,21 L149,32 M165,10 L157,21 L165,32" />
            </svg>
          </div>
        </Link>
        <h2 className="text-white text-xl font-bold text-center relative z-10">
          Bridging Skills, Students & Industry
        </h2>
      </div>

      {/* Left Branding Side (Desktop Only) */}
      <div className="hidden lg:block lg:w-5/12 xl:w-2/5 h-screen sticky top-0 z-10">
        <LoginBranding 
          selectedRole={selectedRole}
          hoveredRole={hoveredRole}
          parallaxX={smoothX}
          parallaxY={smoothY}
        />
      </div>

      {/* Right Form Side */}
      <motion.div 
        className="w-full lg:w-7/12 xl:w-3/5 flex flex-col items-center justify-center relative px-6 py-8 sm:py-12 sm:px-12 flex-1 z-20 bg-white shadow-[-20px_0_40px_-10px_rgba(0,0,0,0.05)]"
        style={{
          x: useSpring(useMotionValue(0), { damping: 20, stiffness: 100 }) // To accept parallax later if wanted, but left side parallax is better
        }}
      >
        <div className="w-full max-w-md relative h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {currentStep === 'role-selection' && (
              <RoleSelector 
                key="role-selector"
                selectedRole={selectedRole} 
                setSelectedRole={setSelectedRole} 
                setHoveredRole={setHoveredRole}
                onContinue={handleContinue} 
              />
            )}

            {currentStep === 'login-form' && authMethod === 'password' && (
              <motion.div
                key="login-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full"
              >
                <LoginForm 
                  selectedRole={selectedRole} 
                  onChangeRole={handleChangeRole} 
                  onSwitchToOTP={() => setAuthMethod('otp')}
                />
              </motion.div>
            )}

            {currentStep === 'login-form' && authMethod === 'otp' && (
              <motion.div
                key="otp-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full"
              >
                <OTPForm 
                  selectedRole={selectedRole} 
                  onChangeRole={handleChangeRole} 
                  onSwitchToPassword={() => setAuthMethod('password')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
