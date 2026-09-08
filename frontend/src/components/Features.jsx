import { ClipboardCheck, Target, Map, Briefcase, Code, Network, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ClipboardCheck className="w-6 h-6 text-indigo-600" />,
      title: "Skill Assessment",
      description: "Understand your current technical and soft skills."
    },
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Skill Gap Analysis",
      description: "Identify the skills you need to improve for your target career."
    },
    {
      icon: <Map className="w-6 h-6 text-purple-600" />,
      title: "Career Mapping",
      description: "Discover career paths aligned with your skills and interests."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-green-600" />,
      title: "Internship Opportunities",
      description: "Find internships and real-world experiences matched to your profile."
    },
    {
      icon: <Code className="w-6 h-6 text-orange-600" />,
      title: "Industry Projects",
      description: "Work on practical projects and gain industry exposure."
    },
    {
      icon: <Network className="w-6 h-6 text-teal-600" />,
      title: "Job Opportunities",
      description: "Discover entry-level opportunities based on your skills."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Everything You Need to Become Industry Ready
          </h2>
          <p className="text-lg text-gray-600">
            From understanding your skills to finding the right opportunity, ACADEX brings the complete journey together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-indigo-900/5 hover:border-indigo-100 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
