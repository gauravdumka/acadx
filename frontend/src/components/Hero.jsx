import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8 shadow-sm">
              <span className="text-sm font-semibold text-indigo-600">Verified Skill Intelligence</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Bridging the gap between <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                Academia and Industry
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
              We connect students, educational institutions, and industries seamlessly using verifiable skill intelligence. Turn your self-declared skills into hired reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/login" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-center shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5">
                Join as Student
              </a>
              <a href="/login" className="px-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold text-center shadow-lg transition-all hover:-translate-y-0.5">
                Join as Company
              </a>
              <a href="/login" className="px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-xl font-semibold text-center shadow-sm transition-all hover:-translate-y-0.5">
                Join as Institution
              </a>
            </div>
          </motion.div>

          {/* Right Dashboard UI */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            {/* Main Floating Dashboard Card */}
            <div className="relative z-10 glass-card rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Skill Profile</h3>
                  <p className="text-sm text-gray-500">Verified Skills</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-blue-50 flex items-center justify-center border border-indigo-100">
                  <span className="text-indigo-600 font-bold">JD</span>
                </div>
              </div>

              <div className="space-y-5">
                {/* Skill 1 */}
                <div>
                  <div className="flex justify-between text-sm font-medium mb-1.5">
                    <span className="text-gray-700">JavaScript</span>
                    <span className="text-indigo-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                {/* Skill 2 */}
                <div>
                  <div className="flex justify-between text-sm font-medium mb-1.5">
                    <span className="text-gray-700">React</span>
                    <span className="text-indigo-600">88%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                {/* Skill 3 */}
                <div>
                  <div className="flex justify-between text-sm font-medium mb-1.5">
                    <span className="text-gray-700">Communication</span>
                    <span className="text-blue-500">76%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 1: Career Match */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-12 bottom-12 z-20 glass-card p-4 rounded-xl shadow-xl border-l-4 border-l-green-500 w-64"
            >
              <p className="text-xs text-gray-500 font-medium mb-1">Career Match</p>
              <h4 className="font-semibold text-gray-900 mb-2">Frontend Developer</h4>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md">92% Match</span>
              </div>
            </motion.div>

            {/* Floating Card 2: Opportunity Match */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 top-20 z-20 glass-card p-4 rounded-xl shadow-xl border-l-4 border-l-indigo-500 w-56"
            >
              <p className="text-xs text-gray-500 font-medium mb-1">Opportunity Match</p>
              <h4 className="font-semibold text-gray-900">Internship</h4>
              <p className="text-sm text-indigo-600 font-medium">Frontend Developer</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
