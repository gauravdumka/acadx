import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginBranding from '../components/login/LoginBranding';
import RoleSelector from '../components/login/RoleSelector';
import LoginForm from '../components/login/LoginForm';
import OTPForm from '../components/login/OTPForm';
import { Link } from 'react-router-dom';

const Login = () => {
  const [currentStep, setCurrentStep] = useState('role-selection'); // 'role-selection' | 'login-form'
  const [selectedRole, setSelectedRole] = useState(null);
  const [authMethod, setAuthMethod] = useState('password'); // 'password' | 'otp'

  const handleContinue = () => {
    if (selectedRole) {
      setCurrentStep('login-form');
    }
  };

  const handleChangeRole = () => {
    setCurrentStep('role-selection');
  };

  return (
    <div className="min-h-screen flex w-full bg-white font-sans">
      {/* Left Branding Side (Hidden on Mobile) */}
      <div className="hidden lg:block lg:w-5/12 xl:w-2/5">
        <LoginBranding />
      </div>

      {/* Right Form Side */}
      <div className="w-full lg:w-7/12 xl:w-3/5 flex flex-col items-center justify-center relative px-6 py-12 sm:px-12">
        {/* Mobile Logo */}
        <div className="lg:hidden absolute top-8 left-6">
          <Link to="/">
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
        </div>

        <div className="w-full max-w-md mt-16 lg:mt-0 relative h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {currentStep === 'role-selection' && (
              <RoleSelector 
                key="role-selector"
                selectedRole={selectedRole} 
                setSelectedRole={setSelectedRole} 
                onContinue={handleContinue} 
              />
            )}

            {currentStep === 'login-form' && authMethod === 'password' && (
              <LoginForm 
                key="login-form"
                selectedRole={selectedRole} 
                onChangeRole={handleChangeRole} 
                onSwitchToOTP={() => setAuthMethod('otp')}
              />
            )}

            {currentStep === 'login-form' && authMethod === 'otp' && (
              <OTPForm 
                key="otp-form"
                selectedRole={selectedRole} 
                onChangeRole={handleChangeRole} 
                onSwitchToPassword={() => setAuthMethod('password')}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Login;
