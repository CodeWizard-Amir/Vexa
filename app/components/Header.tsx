// app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaMobile, 
  FaFileExcel, 
  FaChevronDown,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaSearch,
  FaUser
} from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      label: 'خدمات',
      dropdown: [
        { label: 'طراحی وب‌سایت', href : "/services/website", icon: FaCode, desc: 'Next.js, React, وردپرس' },
        { label: 'اپلیکیشن موبایل', href : "/services/application", icon: FaMobile, desc: 'React Native, iOS, Android' },
        { label: 'اتوماسیون اکسل', href : "/services/excel", icon: FaFileExcel, desc: 'VBA, Power Query, داشبورد' },
      ]
    },
    { label: 'نمونه‌کار' , href : "/samples" },
    { label: 'تعرفه‌ها' , href : "/pricing" },
    { label: 'وبلاگ' , href : "/blog" },
    { label: 'درباره ما' , href : "/about" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm border-b border-indigo-100/30 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* ===== LOGO ===== */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl lg:text-2xl">V</span>
              </div>
              <div>
                <span className="text-xl lg:text-2xl font-bold text-gray-900 leading-none">Vexa</span>
              </div>
            </motion.div>

            {/* ===== DESKTOP MENU ===== */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link href={`${item.href}`}
                    className={`px-5 py-2.5 rounded-xl text-base font-medium transition-colors duration-200 flex items-center gap-2 ${
                      activeDropdown === item.label
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50'
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <FaChevronDown className={`text-[10px] transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl border border-gray-100 shadow-lg overflow-hidden"
                      >
                        <div className="py-2">
                          {item.dropdown.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href}
                              className="flex items-center gap-4 px-5 py-3 hover:bg-indigo-50/50 transition-colors duration-150"
                            >
                              <div className="w-9 h-9 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <subItem.icon className="text-indigo-600 text-base" />
                              </div>
                              <div>
                                <p className="text-base font-medium text-gray-900">{subItem.label}</p>
                                <p className="text-xs text-gray-400">{subItem.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* ===== RIGHT ACTIONS ===== */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <button className="hidden md:flex w-9 h-9 lg:w-10 lg:h-10 bg-gray-50 rounded-xl items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                <FaSearch className="text-gray-500 text-sm lg:text-base" />
              </button>
              
              <button className="hidden md:flex w-9 h-9 lg:w-10 lg:h-10 bg-gray-50 rounded-xl items-center justify-center hover:bg-gray-100 transition-colors duration-200">
                <FaUser className="text-gray-500 text-sm lg:text-base" />
              </button>
              
              <Link  href={'https://nouriverse.vercel.app'} className="hidden md:block bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-base font-medium hover:bg-indigo-700 transition-colors duration-200">
                درباره برنامه نویس 
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="text-gray-600 text-xl" />
                ) : (
                  <FaBars className="text-gray-600 text-xl" />
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 lg:top-24 z-40 bg-white border-b border-gray-100 lg:hidden"
          >
            <div className="p-4 space-y-1">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <>
                      <div className="px-4 py-3 text-base font-medium text-gray-600">
                        {item.label}
                      </div>
                      <div className="space-y-1 pr-4">
                        {item.dropdown.map((subItem, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50/50 transition-colors duration-150"
                          >
                            <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <subItem.icon className="text-indigo-600 text-sm" />
                            </div>
                            <div>
                              <p className="text-base font-medium text-gray-900">{subItem.label}</p>
                              <p className="text-xs text-gray-400">{subItem.desc}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <a
                      href="#"
                      className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:bg-indigo-50/50 hover:text-indigo-600 transition-colors duration-150"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-3 border-t border-gray-100 space-y-2">
                <button className="w-full bg-indigo-600 text-white px-4 py-3.5 rounded-xl text-base font-medium hover:bg-indigo-700 transition-colors duration-200">
                  شروع کنید
                </button>
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-50 text-gray-600 px-4 py-3 rounded-xl text-base font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                    <FaSearch className="text-sm" /> جستجو
                  </button>
                  <button className="flex-1 bg-gray-50 text-gray-600 px-4 py-3 rounded-xl text-base font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                    <FaUser className="text-sm" /> ورود
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;