import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Opportunities', href: '#opportunities' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-100/50 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <motion.a 
              href="#home"
              onClick={() => setActiveLink('Home')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center z-50"
            >
              <div className="bg-[#0a0a0a] px-4 py-2.5 rounded-xl shadow-lg shadow-black/5 border border-white/10 transition-transform duration-300">
                <svg width="120" height="22" viewBox="0 0 165 40" fill="none" stroke="#C4ED75" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(196,237,117,0.3)]">
                  <path d="M10,32 L20,10 L30,32" />
                  <path d="M55,10 L40,21 L55,32" />
                  <path d="M65,32 L75,10 L85,32" />
                  <path d="M95,10 L95,32 M95,10 L105,10 C114,10 114,32 105,32 L95,32" />
                  <path d="M122,10 L137,10 M122,21 L134,21 M122,32 L137,32" />
                  <path d="M149,10 L157,21 L149,32 M165,10 L157,21 L165,32" />
                </svg>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex gap-2 relative">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 z-10 ${
                      activeLink === link.name ? 'text-indigo-700' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Hover Pill Indicator */}
                    {hoveredLink === link.name && (
                      <motion.div
                        layoutId="nav-hover"
                        className="absolute inset-0 bg-gray-100/80 rounded-full z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    {/* Active Underline Indicator */}
                    {activeLink === link.name && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-indigo-600 rounded-full z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4 pl-6 border-l border-gray-200">
                <motion.button 
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-gray-600 hover:text-indigo-600 font-semibold text-sm transition-colors duration-200"
                >
                  Login
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden bg-indigo-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/40 group"
                >
                  <span className="relative z-10">Get Started</span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0" />
                </motion.button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center z-50">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 bg-gray-50/50 rounded-full backdrop-blur-sm"
                aria-label="Toggle navigation menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40"
              aria-hidden="true"
            />
            
            {/* Floating Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl z-50 overflow-hidden"
            >
              <motion.div 
                className="px-4 py-6 space-y-1"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
                }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -10 }
                    }}
                    onClick={() => {
                       setActiveLink(link.name);
                       setIsMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-3.5 text-base font-semibold rounded-2xl transition-colors ${
                      activeLink === link.name ? 'bg-indigo-50/80 text-indigo-700' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <motion.div 
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 10 }
                  }}
                  className="pt-6 mt-4 border-t border-gray-100 flex flex-col gap-3"
                >
                  <button className="w-full text-center px-4 py-3.5 text-base font-semibold text-gray-700 border border-gray-200 rounded-2xl hover:bg-gray-50 hover:text-indigo-600 transition-colors active:scale-[0.98]">
                    Login
                  </button>
                  <button className="w-full text-center px-4 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-md shadow-indigo-600/20 transition-colors active:scale-[0.98]">
                    Get Started
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
