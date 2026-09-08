import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, Loader2 } from 'lucide-react';

const OTPForm = ({ selectedRole, onSwitchToPassword, onChangeRole }) => {
  const [identifier, setIdentifier] = useState('');
  const [step, setStep] = useState('request'); // 'request' or 'verify'
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (step === 'verify' && countdown > 0) {
      timer = setInterval(() => setCountdown((c) => c - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [step, countdown]);

  const handleSendOTP = (e) => {
    e.preventDefault();
    setError('');
    if (!identifier) {
      setError('Please enter your email or mobile number.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('verify');
      setCountdown(30);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }, 1200);
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setError('');
    const otpString = otp.join('');
    if (otpString.length < 6) {
      setError('Please enter the full 6-digit OTP.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/student');
    }, 1500);
  };

  const handleResend = () => {
    if (countdown > 0) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCountdown(30);
    }, 1000);
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
        onClick={step === 'verify' ? () => setStep('request') : onChangeRole}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        {step === 'verify' ? 'Back to login' : 'Change account type'}
      </button>

      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Login with OTP</h2>
        <p className="text-gray-500">
          {step === 'request' 
            ? 'We will send a one-time password to your registered email or mobile number.' 
            : `Enter the 6-digit code sent to ${identifier}`}
        </p>
      </div>

      {step === 'request' ? (
        <form onSubmit={handleSendOTP} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mobile Number / Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Phone size={20} />
              </div>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                placeholder="Enter email or mobile"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3.5 mt-4 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Send OTP'}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOTP} className="space-y-6">
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={el => inputRefs.current[index] = el}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-center text-2xl font-bold bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 outline-none transition-all"
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3.5 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Verify OTP'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={handleResend}
              disabled={countdown > 0 || isLoading}
              className={`text-sm font-semibold transition-colors ${
                countdown > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-indigo-600 hover:text-indigo-700'
              }`}
            >
              {countdown > 0 ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
            </button>
          </div>
        </form>
      )}

      {step === 'request' && (
        <>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute w-full border-t border-gray-200"></div>
              <span className="relative bg-white px-4 text-sm text-gray-400">Or</span>
            </div>

            <button 
              onClick={onSwitchToPassword}
              className="w-full py-3 rounded-xl text-gray-700 font-semibold bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm active:scale-[0.98]"
            >
              Login with Password
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default OTPForm;
