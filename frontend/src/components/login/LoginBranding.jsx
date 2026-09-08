import React from 'react';
import { motion, AnimatePresence, useTransform } from 'framer-motion';
import { GraduationCap, School, BriefcaseBusiness, Activity, CheckCircle2, TrendingUp, Users, BookOpen } from 'lucide-react';

const LoginBranding = ({ selectedRole, hoveredRole, parallaxX, parallaxY }) => {
  const activeRole = hoveredRole || selectedRole;

  // Parallax multipliers
  const bgX = useTransform(parallaxX, value => value * -20);
  const bgY = useTransform(parallaxY, value => value * -20);
  
  const nodesX = useTransform(parallaxX, value => value * 15);
  const nodesY = useTransform(parallaxY, value => value * 15);

  const textX = useTransform(parallaxX, value => value * 5);
  const textY = useTransform(parallaxY, value => value * 5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 0.3, transition: { duration: 1.5, ease: "easeInOut" } }
  };

  return (
    <div className="hidden lg:flex flex-col w-full h-full bg-[#0a0f1c] relative overflow-hidden text-white">
      {/* Background Gradients & Parallax */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px]" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[80px]"></div>
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 p-12 lg:p-16 flex flex-col h-full justify-between">
        {/* Logo & Headline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ x: textX, y: textY }}
        >
          <motion.div variants={textVariants} className="mb-16">
            <div className="inline-block bg-[#0a0a0a]/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-2xl">
              <svg width="120" height="22" viewBox="0 0 165 40" fill="none" stroke="#C4ED75" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10,32 L20,10 L30,32" />
                <path d="M55,10 L40,21 L55,32" />
                <path d="M65,32 L75,10 L85,32" />
                <path d="M95,10 L95,32 M95,10 L105,10 C114,10 114,32 105,32 L95,32" />
                <path d="M122,10 L137,10 M122,21 L134,21 M122,32 L137,32" />
                <path d="M149,10 L157,21 L149,32 M165,10 L157,21 L165,32" />
              </svg>
            </div>
          </motion.div>

          <div>
            <motion.h1 variants={textVariants} className="text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">
              Bridging <span className="text-indigo-400">Skills</span>,<br />
              Students & <span className="text-purple-400">Industry</span>
            </motion.h1>
            <motion.p variants={textVariants} className="text-indigo-200/80 text-lg max-w-md leading-relaxed font-light">
              One platform connecting the entire educational ecosystem seamlessly.
            </motion.p>
          </div>
        </motion.div>

        {/* Abstract Ecosystem Visual */}
        <motion.div 
          initial="hidden"
          animate="visible"
          style={{ x: nodesX, y: nodesY }}
          className="relative w-full max-w-lg mx-auto flex-1 flex items-center justify-center mt-12 mb-8"
        >
          {/* Central Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Student to Institution */}
            <motion.path 
              variants={lineVariants}
              d="M 120 180 Q 250 140 380 180" 
              fill="none" 
              stroke={activeRole === 'student' || activeRole === 'institution' ? '#818cf8' : 'rgba(255,255,255,0.1)'} 
              strokeWidth={activeRole === 'student' || activeRole === 'institution' ? 2 : 1} 
              strokeDasharray="4 4" 
              className="transition-colors duration-500"
            />
            {/* Institution to Industry */}
            <motion.path 
              variants={lineVariants}
              d="M 380 180 Q 250 280 250 350" 
              fill="none" 
              stroke={activeRole === 'institution' || activeRole === 'industry' ? '#c084fc' : 'rgba(255,255,255,0.1)'} 
              strokeWidth={activeRole === 'institution' || activeRole === 'industry' ? 2 : 1} 
              strokeDasharray="4 4"
              className="transition-colors duration-500" 
            />
            {/* Student to Industry */}
            <motion.path 
              variants={lineVariants}
              d="M 120 180 Q 200 280 250 350" 
              fill="none" 
              stroke={activeRole === 'student' || activeRole === 'industry' ? '#60a5fa' : 'rgba(255,255,255,0.1)'} 
              strokeWidth={activeRole === 'student' || activeRole === 'industry' ? 2 : 1} 
              strokeDasharray="4 4" 
              className="transition-colors duration-500"
            />
            {/* Academician Connections */}
            <motion.path 
              variants={lineVariants}
              d="M 120 180 Q 250 80 250 100" 
              fill="none" 
              stroke={activeRole === 'student' || activeRole === 'academician' ? '#fbbf24' : 'rgba(255,255,255,0.1)'} 
              strokeWidth={activeRole === 'student' || activeRole === 'academician' ? 2 : 1} 
              strokeDasharray="4 4" 
              className="transition-colors duration-500"
            />
            <motion.path 
              variants={lineVariants}
              d="M 380 180 Q 250 80 250 100" 
              fill="none" 
              stroke={activeRole === 'institution' || activeRole === 'academician' ? '#fbbf24' : 'rgba(255,255,255,0.1)'} 
              strokeWidth={activeRole === 'institution' || activeRole === 'academician' ? 2 : 1} 
              strokeDasharray="4 4" 
              className="transition-colors duration-500"
            />
          </svg>

          {/* Ecosystem Nodes */}
          
          {/* STUDENT NODE */}
          <motion.div 
            animate={{ 
              scale: activeRole === 'student' ? 1.15 : activeRole ? 0.9 : 1,
              opacity: activeRole === 'student' ? 1 : activeRole ? 0.5 : 1,
              y: activeRole === 'student' ? -10 : 0
            }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute left-[10%] top-[30%] flex flex-col items-center z-10"
          >
            <div className={`w-16 h-16 rounded-2xl backdrop-blur-xl border flex items-center justify-center shadow-2xl transition-all duration-500 ${activeRole === 'student' ? 'bg-indigo-500/20 border-indigo-400/50 shadow-indigo-500/20' : 'bg-white/5 border-white/10'}`}>
              <GraduationCap className={activeRole === 'student' ? 'text-indigo-300' : 'text-white/50'} size={28} />
            </div>
            <span className={`text-xs font-semibold tracking-wider uppercase mt-4 transition-colors duration-500 ${activeRole === 'student' ? 'text-indigo-300' : 'text-white/40'}`}>Student</span>
          </motion.div>

          {/* ACADEMICIAN NODE */}
          <motion.div 
            animate={{ 
              scale: activeRole === 'academician' ? 1.15 : activeRole ? 0.9 : 1,
              opacity: activeRole === 'academician' ? 1 : activeRole ? 0.5 : 1,
              y: activeRole === 'academician' ? -10 : 0
            }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute left-1/2 -translate-x-1/2 top-[5%] flex flex-col items-center z-10"
          >
            <div className={`w-14 h-14 rounded-2xl backdrop-blur-xl border flex items-center justify-center shadow-2xl transition-all duration-500 ${activeRole === 'academician' ? 'bg-amber-500/20 border-amber-400/50 shadow-amber-500/20' : 'bg-white/5 border-white/10'}`}>
              <BookOpen className={activeRole === 'academician' ? 'text-amber-300' : 'text-white/50'} size={24} />
            </div>
            <span className={`text-xs font-semibold tracking-wider uppercase mt-3 transition-colors duration-500 ${activeRole === 'academician' ? 'text-amber-300' : 'text-white/40'}`}>Faculty</span>
          </motion.div>

          {/* INSTITUTION NODE */}
          <motion.div 
            animate={{ 
              scale: activeRole === 'institution' ? 1.15 : activeRole ? 0.9 : 1,
              opacity: activeRole === 'institution' ? 1 : activeRole ? 0.5 : 1,
              y: activeRole === 'institution' ? -10 : 0
            }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute right-[10%] top-[30%] flex flex-col items-center z-10"
          >
            <div className={`w-16 h-16 rounded-2xl backdrop-blur-xl border flex items-center justify-center shadow-2xl transition-all duration-500 ${activeRole === 'institution' ? 'bg-[#C4ED75]/20 border-[#C4ED75]/50 shadow-[#C4ED75]/20' : 'bg-white/5 border-white/10'}`}>
              <School className={activeRole === 'institution' ? 'text-[#C4ED75]' : 'text-white/50'} size={28} />
            </div>
            <span className={`text-xs font-semibold tracking-wider uppercase mt-4 transition-colors duration-500 ${activeRole === 'institution' ? 'text-[#C4ED75]' : 'text-white/40'}`}>Institution</span>
          </motion.div>

          {/* INDUSTRY NODE */}
          <motion.div 
            animate={{ 
              scale: activeRole === 'industry' ? 1.15 : activeRole ? 0.9 : 1,
              opacity: activeRole === 'industry' ? 1 : activeRole ? 0.5 : 1,
              y: activeRole === 'industry' ? -10 : 0
            }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute left-1/2 -translate-x-1/2 bottom-[10%] flex flex-col items-center z-10"
          >
            <div className={`w-20 h-20 rounded-2xl backdrop-blur-xl border flex items-center justify-center shadow-2xl transition-all duration-500 ${activeRole === 'industry' ? 'bg-purple-500/20 border-purple-400/50 shadow-purple-500/20' : 'bg-white/5 border-white/10'}`}>
              <BriefcaseBusiness className={activeRole === 'industry' ? 'text-purple-300' : 'text-white/50'} size={32} />
            </div>
            <span className={`text-xs font-semibold tracking-wider uppercase mt-4 transition-colors duration-500 ${activeRole === 'industry' ? 'text-purple-300' : 'text-white/40'}`}>Industry</span>
          </motion.div>

          {/* DYNAMIC DATA VISUALIZATIONS */}
          <AnimatePresence mode="wait">
            {activeRole === 'student' && (
              <motion.div
                key="student-data"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute left-[30%] top-[55%] w-48 bg-white/5 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 shadow-2xl z-20 pointer-events-none"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Activity size={14} className="text-indigo-400" />
                  <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-bold">Skill Match</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ delay: 0.2, duration: 1 }} className="h-full bg-indigo-400 rounded-full"></motion.div>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '92%' }} transition={{ delay: 0.4, duration: 1 }} className="h-full bg-green-400 rounded-full"></motion.div>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '70%' }} transition={{ delay: 0.6, duration: 1 }} className="h-full bg-purple-400 rounded-full"></motion.div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-white/50">Frontend Dev</span>
                  <span className="text-xs font-bold text-green-400 flex items-center gap-1"><CheckCircle2 size={12} /> 92%</span>
                </div>
              </motion.div>
            )}

            {activeRole === 'institution' && (
              <motion.div
                key="institution-data"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute left-[25%] top-[55%] w-56 bg-white/5 backdrop-blur-xl border border-[#C4ED75]/30 rounded-xl p-4 shadow-2xl z-20 pointer-events-none"
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={14} className="text-[#C4ED75]" />
                  <span className="text-[10px] uppercase tracking-wider text-[#C4ED75] font-bold">Cohort Readiness</span>
                </div>
                <div className="flex items-end gap-2 h-16 mt-2 border-b border-white/10 pb-1">
                  {[40, 65, 45, 80, 95].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="flex-1 bg-gradient-to-t from-[#C4ED75]/20 to-[#C4ED75] rounded-t-sm"
                    />
                  ))}
                </div>
                <div className="mt-2 text-[10px] text-white/60 text-center">Industry Demand Alignment</div>
              </motion.div>
            )}

            {activeRole === 'industry' && (
              <motion.div
                key="industry-data"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute left-[30%] top-[40%] w-48 bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-xl p-4 shadow-2xl z-20 pointer-events-none"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Users size={14} className="text-purple-400" />
                  <span className="text-[10px] uppercase tracking-wider text-purple-300 font-bold">Talent Pipeline</span>
                </div>
                <div className="flex -space-x-2 overflow-hidden mb-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0f1c] bg-purple-500/50"
                    />
                  ))}
                </div>
                <div className="text-xs text-white/80"><span className="font-bold text-white">24</span> Candidates Match</div>
                <div className="text-[10px] text-purple-300 mt-1">High Demand Skills Required</div>
              </motion.div>
            )}
            {activeRole === 'academician' && (
              <motion.div
                key="academician-data"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute left-[20%] top-[40%] w-56 bg-white/5 backdrop-blur-xl border border-amber-500/30 rounded-xl p-4 shadow-2xl z-20 pointer-events-none"
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={14} className="text-amber-400" />
                  <span className="text-[10px] uppercase tracking-wider text-amber-300 font-bold">Faculty Mentorship</span>
                </div>
                <div className="space-y-3 mb-2">
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/5">
                    <span className="text-xs text-white/80">Active Mentees</span>
                    <span className="text-xs font-bold text-amber-400">42</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg border border-white/5">
                    <span className="text-xs text-white/80">FDPs Completed</span>
                    <span className="text-xs font-bold text-amber-400">3</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        <div className="relative z-10 flex justify-between items-center text-white/40 text-xs font-medium tracking-wide">
          <span>© {new Date().getFullYear()} ACADEX</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> SYSTEM ONLINE</span>
        </div>
      </div>
    </div>
  );
};

export default LoginBranding;
