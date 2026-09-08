import React from 'react';

const LoginBranding = () => {
  return (
    <div className="hidden lg:flex flex-col justify-between w-full h-full bg-indigo-900 relative overflow-hidden p-12 text-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50 z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Logo */}
        <div className="flex items-center mb-16">
          <div className="bg-[#0a0a0a] px-4 py-2.5 rounded-xl shadow-lg border border-white/10">
            <svg width="120" height="22" viewBox="0 0 165 40" fill="none" stroke="#C4ED75" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10,32 L20,10 L30,32" />
              <path d="M55,10 L40,21 L55,32" />
              <path d="M65,32 L75,10 L85,32" />
              <path d="M95,10 L95,32 M95,10 L105,10 C114,10 114,32 105,32 L95,32" />
              <path d="M122,10 L137,10 M122,21 L134,21 M122,32 L137,32" />
              <path d="M149,10 L157,21 L149,32 M165,10 L157,21 L165,32" />
            </svg>
          </div>
        </div>

        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Bridging Skills, Students & Industry
          </h1>
          <p className="text-indigo-200 text-lg max-w-md leading-relaxed">
            One platform connecting students, educational institutions, and industries seamlessly.
          </p>
        </div>
      </div>

      {/* Abstract Ecosystem Visual */}
      <div className="relative z-10 w-full max-w-md mx-auto mt-12 mb-8">
        <div className="relative h-64 flex items-center justify-center">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <path d="M 80 128 Q 200 50 320 128" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M 80 128 Q 200 200 320 128" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="6 6" />
            <path d="M 200 40 L 200 216" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="6 6" />
          </svg>

          {/* Nodes */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 rounded-full bg-indigo-400/50"></div>
            </div>
            <span className="text-sm font-medium mt-3 text-indigo-100">Student</span>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-4 flex flex-col items-center">
            <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg rotate-12 hover:rotate-0 transition-transform duration-500">
              <div className="w-10 h-10 rounded-lg bg-[#C4ED75]/70"></div>
            </div>
            <span className="text-sm font-medium mt-3 text-indigo-100">Institution</span>
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg -rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="w-12 h-12 rounded-xl bg-blue-400/50"></div>
            </div>
            <span className="text-sm font-medium mt-3 text-indigo-100">Industry</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 text-indigo-300 text-sm font-medium">
        © {new Date().getFullYear()} ACADEX. All rights reserved.
      </div>
    </div>
  );
};

export default LoginBranding;
