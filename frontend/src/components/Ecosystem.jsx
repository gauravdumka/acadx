import { Users, Building2, GraduationCap } from 'lucide-react';

const Ecosystem = () => {
  const items = [
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "STUDENTS",
      description: "Discover skills, careers and opportunities."
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "INDUSTRIES",
      description: "Find skilled and relevant talent."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: "COLLEGES",
      description: "Build and track industry-ready students."
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">One platform. Three ecosystems.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4 py-4 md:py-0">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 border border-gray-100">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">{item.title}</h3>
              <p className="text-gray-500 font-medium max-w-[200px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
