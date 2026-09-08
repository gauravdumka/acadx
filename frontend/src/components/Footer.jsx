import { Globe, Mail, MessageCircle, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-[#0a0a0a] px-4 py-2.5 rounded-xl shadow-lg shadow-black/5 border border-white/10 inline-block">
                <svg width="120" height="22" viewBox="0 0 165 40" fill="none" stroke="#C4ED75" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(196,237,117,0.3)]">
                  <path d="M10,32 L20,10 L30,32" />
                  <path d="M55,10 L40,21 L55,32" />
                  <path d="M65,32 L75,10 L85,32" />
                  <path d="M95,10 L95,32 M95,10 L105,10 C114,10 114,32 105,32 L95,32" />
                  <path d="M122,10 L137,10 M122,21 L134,21 M122,32 L137,32" />
                  <path d="M149,10 L157,21 L149,32 M165,10 L157,21 L165,32" />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
              Connecting students, colleges and industries through verified skills and real-world opportunities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-gray-900 mb-5">PLATFORM</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">How It Works</a></li>
              <li><a href="#opportunities" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Opportunities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-5">FOR STUDENTS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Skill Assessment</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Career Discovery</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Internships</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-5">FOR INDUSTRIES</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Find Talent</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Post Opportunities</a></li>
              <li><a href="#" className="text-gray-500 hover:text-indigo-600 font-medium transition-colors">Industry Projects</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">
            © 2026 ACADEX. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
