// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaMobile, 
  FaFileExcel, 
  FaArrowRight,
  FaCheckCircle,
  FaUserTie,
  FaClock,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaDatabase,
  FaCrown,
  FaUsers,
  FaBriefcase,
  FaAward,
  FaStar,
  FaQuoteRight,
  FaPlusCircle,
  FaDownload,
  FaCloudUploadAlt,
  FaHeadset
} from 'react-icons/fa';
import { MdDesignServices, MdSupport, MdSecurity } from 'react-icons/md';

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>      <main className="pt-20 lg:pt-24">
        
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-[calc(100vh-6rem)] flex items-center px-4 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
          <div className="max-w-7xl mx-auto py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              
              {/* Left Content */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="space-y-7"
              >
                <motion.div variants={fadeIn}>
                  <span className="inline-flex items-center gap-2.5 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-base font-medium">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    راهکارهای هوشمند دیجیتال
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  </span>
                </motion.div>
                
                <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-gray-900">ساخت اپ، سایت و</span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    اتوماسیون
                  </span>
                  <span className="text-gray-900"> با </span>
                  <span className="text-indigo-600">Vexa</span>
                </motion.h1>
                
                <motion.p variants={fadeIn} className="text-lg lg:text-xl text-gray-500 leading-relaxed max-w-xl">
                  از طراحی وب‌سایت و اپلیکیشن تا داشبوردهای حرفه‌ای اکسل — 
                  همه چیز رو سریع‌تر، ساده‌تر و حرفه‌ای‌تر انجام میدیم.
                </motion.p>
                
                <motion.div variants={fadeIn} className="flex flex-wrap gap-3.5">
                  <button className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl text-base font-medium hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2">
                    شروع پروژه
                    <FaArrowRight className="text-sm" />
                  </button>
                  <button className="border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl text-base font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200">
                    مشاهده نمونه‌ها
                  </button>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex flex-wrap gap-8 pt-3">
                  {[
                    { label: 'تضمین کیفیت', icon: FaCheckCircle },
                    { label: 'پشتیبانی ۲۴/۷', icon: FaShieldAlt },
                    { label: 'تحویل سریع', icon: FaClock },
                    { label: 'مشاوره رایگان', icon: FaHeadset }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-base text-gray-500">
                      <item.icon className="text-indigo-500 text-lg" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Trust Badges */}
                <motion.div variants={fadeIn} className="flex items-center gap-6 pt-3">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <FaStar key={star} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">+۱۵۰ پروژه موفق</span>
                  <span className="w-px h-5 bg-gray-200"></span>
                  <span className="text-sm text-gray-400">رضایت ۹۸٪ مشتریان</span>
                </motion.div>
              </motion.div>
              
              {/* Right - Hero Cards */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <div className="grid grid-cols-2 gap-5">
                    {[
                      { icon: FaCode, label: 'وب‌سایت', tech: 'React / Next', color: 'indigo' },
                      { icon: FaMobile, label: 'اپلیکیشن', tech: 'React Native', color: 'purple' },
                      { icon: FaFileExcel, label: 'اکسل', tech: 'VBA / Power Query', color: 'blue' },
                      { icon: FaDatabase, label: 'داده', tech: 'داشبورد', color: 'indigo' }
                    ].map((item, index) => (
                      <div key={index} className={`bg-${item.color}-50 rounded-xl p-5 border border-${item.color}-100/50`}>
                        <item.icon className={`text-2xl text-${item.color}-600 mb-2.5`} />
                        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">{item.label}</p>
                        <p className="text-base font-bold text-gray-800">{item.tech}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Extra Info */}
                  <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between text-sm text-gray-400">
                    <span>⏱ تحویل ۵-۱۰ روز کاری</span>
                    <span>💰 قیمت منصفانه</span>
                    <span>✅ ضمانت ۳ ماهه</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES SECTION ===== */}
        <section className="py-20 lg:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16 lg:mb-20"
            >
              <motion.span variants={fadeIn} className="text-base font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">
                خدمات ما
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                هر چیزی که برای رشد نیاز داری
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-gray-500 mt-3 max-w-2xl mx-auto">
                از ایده تا اجرا، کنارت هستیم تا کسب‌وکارت رو به سطح بعدی ببریم
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaCode,
                  title: 'طراحی وب‌سایت',
                  desc: 'سایت‌های حرفه‌ای با Next.js، وردپرس یا هر چی که نیاز داری',
                  features: ['ریسپانسیو کامل', 'سئو پیشرفته', 'سرعت بالا'],
                  color: 'indigo'
                },
                {
                  icon: FaMobile,
                  title: 'اپلیکیشن موبایل',
                  desc: 'اپلیکیشن‌های کراس‌پلتفرم با React Native برای iOS و Android',
                  features: ['تجربه کاربری عالی', 'آپدیت خودکار', 'امنیت بالا'],
                  color: 'purple'
                },
                {
                  icon: FaFileExcel,
                  title: 'اتوماسیون اکسل',
                  desc: 'داشبوردهای پیشرفته، VBA، Power Query و گزارش‌گیری خودکار',
                  features: ['کاهش خطا', 'صرفه‌جویی در زمان', 'گزارش‌های حرفه‌ای'],
                  color: 'blue'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-indigo-200 transition-colors duration-200"
                >
                  <div className={`w-14 h-14 bg-${service.color}-50 rounded-xl flex items-center justify-center mb-5`}>
                    <service.icon className={`text-2xl text-${service.color}-600`} />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-indigo-500 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-indigo-600 text-base font-medium flex items-center gap-2 hover:gap-3 transition-all duration-200">
                    اطلاعات بیشتر <FaArrowRight className="text-sm" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STATS SECTION ===== */}
        <section className="py-16 lg:py-20 px-4 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {[
                { number: '۱۵۰+', label: 'پروژه انجام شده', icon: FaRocket },
                { number: '۹۸٪', label: 'رضایت مشتری', icon: FaUsers },
                { number: '۲۴/۷', label: 'پشتیبانی', icon: FaClock },
                { number: '۵+', label: 'سال تجربه', icon: FaAward }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="text-center bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                >
                  <stat.icon className="text-3xl text-indigo-500 mx-auto mb-3" />
                  <p className="text-3xl lg:text-4xl font-bold text-gray-900">{stat.number}</p>
                  <p className="text-base text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURES SECTION ===== */}
        <section className="py-20 lg:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.span variants={fadeIn} className="text-base font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">
                چرا Vexa؟
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
                چرا ما رو انتخاب میکنید؟
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: MdSecurity, 
                  title: 'امنیت بالا', 
                  desc: 'استفاده از پروتکل‌های امنیتی پیشرفته برای حفظ داده‌های شما',
                  color: 'indigo'
                },
                { 
                  icon: FaBriefcase, 
                  title: 'تخصص و تجربه', 
                  desc: 'تیمی مجرب با بیش از ۵ سال سابقه درخشان در حوزه فناوری اطلاعات',
                  color: 'purple'
                },
                { 
                  icon: MdSupport, 
                  title: 'پشتیبانی ۲۴/۷', 
                  desc: 'تیم پشتیبانی ما همیشه در دسترس است تا مشکلات شما را حل کند',
                  color: 'blue'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-100"
                >
                  <div className={`w-14 h-14 bg-${item.color}-50 rounded-xl flex items-center justify-center mb-5`}>
                    <item.icon className={`text-2xl text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-20 lg:py-28 px-4 bg-gradient-to-br from-gray-50 to-indigo-50/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-2xl p-10 lg:p-16 text-center text-white"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                آماده‌ای کسب‌وکارت رو متحول کنی؟
              </h2>
              <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
                همین امروز با ما تماس بگیر و از مشاوره رایگان اولیه استفاده کن
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl text-base font-bold hover:bg-indigo-50 transition-colors duration-200 flex items-center gap-2">
                  شروع پروژه با Vexa
                  <FaArrowRight className="text-sm" />
                </button>
                <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl text-base font-medium hover:bg-white/10 transition-colors duration-200">
                  مشاوره رایگان
                </button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
}