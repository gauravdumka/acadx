import { ShieldCheck, TrendingUp, Briefcase } from 'lucide-react';

const ProductPreview = () => {
  return (
    <section className="py-24 bg-indigo-900 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            See Where You Stand
          </h2>
          <p className="text-indigo-200 text-lg">A visual breakdown of an ACADEX student's skill profile.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Mock Window Header */}
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="ml-4 text-xs font-medium text-gray-400 flex-1 text-center pr-10">
              Student Skill Profile
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Left Column: Overall Readiness */}
              <div className="md:col-span-1 space-y-6">
                <div className="p-6 bg-indigo-50 rounded-2xl text-center border border-indigo-100">
                  <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide mb-2">Overall Readiness</p>
                  <div className="text-5xl font-black text-indigo-600 mb-2">78%</div>
                  <p className="text-xs text-indigo-600/70 font-medium">Industry Ready Score</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-gray-700">Technical Skills</span>
                      <span className="text-blue-600">85%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-gray-700">Soft Skills</span>
                      <span className="text-purple-600">72%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Skills Breakdown */}
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                {/* Top Skills */}
                <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    <h4 className="font-bold text-gray-900">Top Skills</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'JavaScript', 'Git', 'Communication'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-green-50 text-green-700 text-sm font-semibold rounded-lg border border-green-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skill Gaps */}
                <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-amber-500" />
                    <h4 className="font-bold text-gray-900">Skill Gaps</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'Testing', 'System Design'].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-amber-50 text-amber-700 text-sm font-semibold rounded-lg border border-amber-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Match */}
                <div className="sm:col-span-2 border border-indigo-100 rounded-2xl p-6 bg-gradient-to-r from-indigo-50 to-blue-50 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-indigo-600">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-500 mb-1">Top Career Match</p>
                      <h4 className="text-lg font-bold text-gray-900">Frontend Developer</h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold">
                      92% Match
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
