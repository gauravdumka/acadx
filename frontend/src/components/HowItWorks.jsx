const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Assess",
      description: "Build your skill profile through a structured assessment."
    },
    {
      number: "02",
      title: "Analyze",
      description: "Identify your strengths and skill gaps."
    },
    {
      number: "03",
      title: "Match",
      description: "Get personalized career and opportunity recommendations."
    },
    {
      number: "04",
      title: "Grow",
      description: "Develop relevant skills and become industry ready."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Your Journey from Skills to Career
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 opacity-20"></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Number Badge */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center mb-6 relative z-10 group hover:scale-105 transition-transform">
                  <div className="absolute inset-0 rounded-full bg-indigo-50"></div>
                  <span className="relative text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-blue-600">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 max-w-[250px] mx-auto lg:mx-0">
                  {step.description}
                </p>

                {/* Connecting line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-gray-100 my-4 mx-auto"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
