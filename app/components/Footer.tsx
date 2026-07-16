// app/components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaArrowRight,
  FaCode,
  FaMobile,
  FaFileExcel,
  FaRocket,
  FaClock,
  FaShieldAlt,
  FaAward,
  FaTelegram,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== MAIN FOOTER ===== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="py-16 lg:py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-10"
        >
          {/* Brand */}
          <motion.div variants={fadeIn} className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">V</span>
              </div>
              <div>
                <span className="text-xl lg:text-2xl font-bold text-gray-900 leading-none">Vexa</span>
                <span className="block text-[10px] lg:text-[11px] font-medium text-gray-400 tracking-wider uppercase">Tech Solutions</span>
              </div>
            </div>
            <p className="text-base text-gray-500 leading-relaxed max-w-xs">
              ارائه راهکارهای دیجیتال حرفه‌ای در حوزه طراحی وب‌سایت، اپلیکیشن موبایل و اتوماسیون اکسل.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaTelegram, FaYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeIn}>
            <h4 className="text-base font-bold text-gray-900 mb-4">خدمات</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-2">
                  <FaCode className="text-sm text-indigo-400" />
                  طراحی وب‌سایت
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-2">
                  <FaMobile className="text-sm text-indigo-400" />
                  اپلیکیشن موبایل
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-2">
                  <FaFileExcel className="text-sm text-indigo-400" />
                  اتوماسیون اکسل
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-2">
                  <FaRocket className="text-sm text-indigo-400" />
                  مشاوره دیجیتال
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeIn}>
            <h4 className="text-base font-bold text-gray-900 mb-4">شرکت</h4>
            <ul className="space-y-2.5">
              {['درباره ما', 'تماس با ما', 'نمونه‌کارها', 'وبلاگ', 'تیم ما'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={fadeIn}>
            <h4 className="text-base font-bold text-gray-900 mb-4">پشتیبانی</h4>
            <ul className="space-y-2.5">
              {['راهنما', 'قوانین و مقررات', 'حریم خصوصی', 'پرسش‌های متداول', 'گزارش اشکال'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeIn} className="col-span-2 md:col-span-1">
            <h4 className="text-base font-bold text-gray-900 mb-4">تماس با ما</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-base text-gray-500">
                <FaMapMarkerAlt className="text-indigo-500 text-base mt-1 flex-shrink-0" />
                <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
              </li>
              <li className="flex items-center gap-3 text-base text-gray-500">
                <FaPhone className="text-indigo-500 text-base flex-shrink-0" />
                <a href="tel:+982112345678" className="hover:text-indigo-600 transition-colors duration-200">
                  +۹۸ ۲۱ ۱۲۳۴ ۵۶۷۸
                </a>
              </li>
              <li className="flex items-center gap-3 text-base text-gray-500">
                <FaEnvelope className="text-indigo-500 text-base flex-shrink-0" />
                <a href="mailto:info@vexatech.ir" className="hover:text-indigo-600 transition-colors duration-200">
                  info@vexatech.ir
                </a>
              </li>
              <li className="flex items-center gap-3 text-base text-gray-500">
                <FaClock className="text-indigo-500 text-base flex-shrink-0" />
                <span>شنبه تا پنجشنبه ۹:۰۰ - ۱۸:۰۰</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ===== FEATURES BAR ===== */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="border-t border-gray-100 py-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: FaShieldAlt, label: 'تضمین کیفیت', desc: 'ضمانت ۱۰۰٪ رضایت' },
            { icon: FaClock, label: 'پشتیبانی ۲۴/۷', desc: 'همیشه در دسترس' },
            { icon: FaAward, label: '۵ سال تجربه', desc: 'پروژه‌های موفق' },
            { icon: FaRocket, label: 'تحویل سریع', desc: 'پروژه‌ها در زمان' }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <item.icon className="text-indigo-500 text-lg flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-gray-900">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ===== BOTTOM BAR ===== */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="border-t border-gray-100 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-400 text-center md:text-right">
            © {currentYear} Vexa. تمامی حقوق محفوظ است.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-indigo-600 transition-colors duration-200">قوانین استفاده</a>
            <span className="w-px h-4 bg-gray-200"></span>
            <a href="#" className="hover:text-indigo-600 transition-colors duration-200">حریم خصوصی</a>
            <span className="w-px h-4 bg-gray-200"></span>
            <a href="#" className="hover:text-indigo-600 transition-colors duration-200">سیاست کوکی‌ها</a>
            <span className="w-px h-4 bg-gray-200"></span>
            <a href="#" className="hover:text-indigo-600 transition-colors duration-200">قراردادها</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;