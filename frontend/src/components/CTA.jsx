const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-indigo-600"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700 opacity-90"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] bg-white transform rotate-12 blur-3xl rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[100%] bg-blue-300 transform -rotate-12 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Your Skills Can Take You Further.
        </h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover where your skills can lead and connect with opportunities that match your potential. Join ACADEX today.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl font-bold text-lg shadow-xl shadow-indigo-900/20 transition-all hover:-translate-y-1">
            Get Started
          </button>
          <button className="px-8 py-4 bg-indigo-500/30 hover:bg-indigo-500/50 text-white border border-indigo-400/50 rounded-xl font-bold text-lg backdrop-blur-sm transition-all hover:-translate-y-1">
            Explore Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
