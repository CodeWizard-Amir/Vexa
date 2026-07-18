// app/about/page.tsx - صفحه درباره ما (طراحی مدرن با رنگ‌های ملایم و هدر شفاف)
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { 
  FaArrowRight, 
  FaRocket, 
  FaUsers, 
  FaCode, 
  FaMobileAlt,
  FaFileExcel,
  FaChartLine,
  FaRobot,
  FaLightbulb,
  FaHeart,
  FaHandshake,
  FaMedal,
  FaClock,
  FaProjectDiagram,
  FaSmile,
  FaAward,
  FaTrophy,
  FaCrown,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return null;
}

function AnimatedCounter({ target, label, icon }: { target: number; label: string; icon: any }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-light text-gray-900">{count}+</div>
      <div className="text-sm text-gray-400 mt-1 flex items-center justify-center gap-1.5">
        {icon && <span className="w-4 h-4 text-indigo-500"> </span>}
        {label}
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const team = [
    {
      name: "احم",
      role: "توسعه‌دهنده ارشد",
      icon: FaCode,
      color: "from-indigo-100 to-blue-100",
      textColor: "text-indigo-600",
      bio: "۵ سال تجربه در توسعه وب و معماری سیستم‌های پیچیده",
      rating: 4.9,
    },
    {
      name: "مریم کریمی",
      role: "متخصص دیتا و تحلیل",
      icon: FaChartLine,
      color: "from-emerald-100 to-teal-100",
      textColor: "text-emerald-600",
      bio: "متخصص تحلیل داده، اکسل و هوش مصنوعی",
      rating: 4.8,
    },
    {
      name: "سعید محمدی",
      role: "توسعه‌دهنده موبایل",
      icon: FaMobileAlt,
      color: "from-purple-100 to-pink-100",
      textColor: "text-purple-600",
      bio: "توسعه اپلیکیشن‌های کراس پلتفرم با React Native",
      rating: 4.9,
    },
    {
      name: "مونس حسنپور",
      role: "طراح UI/UX",
      icon: FaLightbulb,
      color: "from-amber-100 to-orange-100",
      textColor: "text-amber-600",
      bio: "طراحی تجربه کاربری بی‌نظیر برای وب و موبایل",
      rating: 4.7,
    },
  ];

  const values = [
    {
      icon: FaHandshake,
      title: "اعتماد و شفافیت",
      desc: "ما با شفافیت کامل در تمام مراحل کار با شما هستیم",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaRocket,
      title: "نوآوری و خلاقیت",
      desc: "با استفاده از جدیدترین تکنولوژی‌ها، ایده‌های شما را به واقعیت تبدیل می‌کنیم",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: FaMedal,
      title: "کیفیت و تعهد",
      desc: "کیفیت کار ما تضمین شده و به تعهدات خود پایبندیم",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: FaUsers,
      title: "همکاری تیمی",
      desc: "با تیمی حرفه‌ای و متخصص، بهترین نتایج را برای شما رقم می‌زنیم",
      color: "from-rose-500 to-orange-500"
    },
  ];

  const milestones = [
    { year: "۱۳۹۸", title: "آغاز فعالیت", desc: "شروع کار با تیمی کوچک اما مصمم" },
    { year: "۱۳۹۹", title: "اولین پروژه بزرگ", desc: "اجرای موفق سامانه فروشگاهی" },
    { year: "۱۴۰۰", title: "توسعه تیم", desc: "افزایش اعضای تیم به ۱۰ نفر" },
    { year: "۱۴۰۱", title: "گسترش خدمات", desc: "اضافه شدن خدمات موبایل و هوش مصنوعی" },
    { year: "۱۴۰۲", title: "۵۰ پروژه موفق", desc: "تکمیل ۵۰ پروژه با رضایت ۹۸ درصدی" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white" ref={containerRef}>
        {/* Hero Section - با طراحی شفاف و بدون پس‌زمینه رنگی سنگین */}
        <div className="relative bg-white border-b border-gray-100 overflow-hidden">
          {/* افکت ملایم پس‌زمینه */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-white/50 to-white pointer-events-none"></div>
          
          <motion.div 
            style={{ y, opacity }}
            className="relative max-w-7xl mx-auto px-4 py-20 md:py-28"
          >
            <div className="flex items-center gap-4 mb-8">
              <Link
                href="/"
                className="p-2 -ml-2 text-gray-400 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50"
              >
                <FaArrowRight className="w-5 h-5" />
              </Link>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-light text-gray-900">
                  درباره ما
                </h1>
                <p className="text-gray-400 text-lg mt-2">داستان تیم حرفه‌ای ما</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-gray-600 text-xl leading-relaxed">
                ما تیمی از متخصصان با تجربه هستیم که با عشق به تکنولوژی و 
                تعهد به کیفیت، بهترین خدمات را به مشتریان خود ارائه می‌دهیم.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-6 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-all"
              >
                <span>آشنایی با تیم ما</span>
                <FaArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* آمار */}
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-light text-gray-900">دستاوردهای ما</h2>
              <p className="text-sm text-gray-400 mt-1">ارقامی که نشان از اعتماد شماست</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter target={5} label="سال تجربه" icon={FaClock} />
              <AnimatedCounter target={45} label="پروژه موفق" icon={FaProjectDiagram} />
              <AnimatedCounter target={38} label="مشتری راضی" icon={FaSmile} />
              <AnimatedCounter target={98} label="درصد رضایت" icon={FaHeart} />
            </div>
          </div>
        </div>

        {/* تیم ما */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              تیم حرفه‌ای
            </span>
            <h2 className="text-3xl font-light text-gray-900">اعضای تیم ما</h2>
            <p className="text-sm text-gray-400 mt-2">متخصصانی که عاشق کارشان هستند</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <member.icon className={`w-8 h-8 ${member.textColor}`} />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className={`text-sm font-medium ${member.textColor} mb-2`}>{member.role}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{member.bio}</p>
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`w-3.5 h-3.5 ${i < Math.floor(member.rating) ? 'text-yellow-400' : 'text-gray-200'}`} />
                  ))}
                  <span className="text-xs text-gray-400 mr-1">{member.rating}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ارزش‌های ما */}
        <div className="bg-gray-50/50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-indigo-600 bg-white px-4 py-1.5 rounded-full mb-4 border border-indigo-100">
                ارزش‌های ما
              </span>
              <h2 className="text-3xl font-light text-gray-900">چیزی که به آن باور داریم</h2>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 text-white`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* تایم‌لاین */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full mb-4">
              مسیر رشد
            </span>
            <h2 className="text-3xl font-light text-gray-900">نقشه راه ما</h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute right-1/2 translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-200 via-purple-200 to-indigo-200"></div>
            
            <div className="space-y-12">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl font-light text-indigo-600">{item.year}</span>
                        <span className="text-sm text-gray-300">|</span>
                        <span className="text-sm font-medium text-gray-900">{item.title}</span>
                      </div>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-light text-gray-900 mb-3">
                آماده همکاری هستید؟
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                با ما تماس بگیرید تا پروژه‌تان را شروع کنیم
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/programming"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all"
                >
                  شروع پروژه
                  <FaArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 hover:border-indigo-200 hover:text-indigo-600 rounded-lg transition-all"
                >
                  تماس با ما
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}