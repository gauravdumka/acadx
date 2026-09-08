import { ArrowRight, MapPin, Building } from 'lucide-react';

const OpportunitiesPreview = () => {
  const opportunities = [
    {
      type: "Internship",
      role: "Frontend Developer Intern",
      company: "TechNova",
      location: "Remote",
      skills: ["React", "JavaScript", "Git"]
    },
    {
      type: "Internship",
      role: "UI/UX Design Intern",
      company: "CreativeStudio",
      location: "Bangalore",
      skills: ["Figma", "UI Design", "Prototyping"]
    },
    {
      type: "Internship",
      role: "Software Developer Intern",
      company: "EnterpriseSystems",
      location: "Pune",
      skills: ["Java", "SQL", "Git"]
    }
  ];

  return (
    <section id="opportunities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Opportunities Matched to Your Skills
            </h2>
            <p className="text-lg text-gray-600">
              Get matched with verified companies actively looking for your exact skill set.
            </p>
          </div>
          <button className="mt-6 md:mt-0 text-indigo-600 font-semibold hover:text-indigo-700 flex items-center group">
            View All Opportunities 
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opp, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-indigo-900/5 hover:border-indigo-100 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-4 flex justify-between items-start">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-md uppercase tracking-wider">
                  {opp.type}
                </span>
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 font-bold">
                  {opp.company.charAt(0)}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{opp.role}</h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium mb-6">
                <div className="flex items-center gap-1">
                  <Building className="w-4 h-4" /> {opp.company}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {opp.location}
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Required Skills</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {opp.skills.map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-gray-50 text-gray-700 text-sm font-medium rounded-md border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3 bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 rounded-xl font-semibold transition-colors flex justify-center items-center gap-2">
                  View Opportunity
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesPreview;
