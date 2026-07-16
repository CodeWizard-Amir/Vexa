// app/pricing/page.tsx - صفحه تعرفه‌ها (طراحی مدرن با رنگ‌های ملایم)
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  FaArrowRight, 
  FaCheck, 
  FaTimes, 
  FaRocket, 
  FaStar,
  FaCrown,
  FaUsers,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaHeadset,
  FaCode,
  FaMobileAlt,
  FaDesktop,
  FaChartLine,
  FaShoppingCart,
  FaRobot,
  FaPalette,
  FaServer,
  FaTools,
  FaFileAlt,
  FaClock,
  FaUserCog,
  FaGift,
  FaBell,
  FaMapMarkerAlt,
  FaCamera
} from "react-icons/fa";

interface PricingFeature {
  name: string;
  included: boolean;
  icon?: React.ReactNode;
}

interface PricingPlan {
  id: string;
  name: string;
  icon: React.ReactNode;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  badge?: string;
  recommended?: string;
  borderColor: string;
  bgColor: string;
  iconBg: string;
  textColor: string;
  buttonColor: string;
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [selectedTab, setSelectedTab] = useState("all");
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const tabs = [
    { id: "all", label: "همه خدمات" },
    { id: "web", label: "برنامه‌نویسی" },
    { id: "excel", label: "اکسل" },
    { id: "mobile", label: "موبایل" },
  ];

  const plans: PricingPlan[] = [
    // برنامه‌نویسی
    {
      id: "web-basic",
      name: "وب‌سایت پایه",
      icon: <FaDesktop className="w-5 h-5" />,
      price: "۹,۹۰۰,۰۰۰",
      period: "تومان",
      description: "مناسب برای شروع کار و معرفی برند",
      borderColor: "border-indigo-200",
      bgColor: "bg-indigo-50/30",
      iconBg: "bg-indigo-100",
      textColor: "text-indigo-600",
      buttonColor: "hover:bg-indigo-50",
      features: [
        { name: "وب‌سایت ۵ صفحه", included: true },
        { name: "طراحی واکنش‌گرا", included: true },
        { name: "فرم تماس", included: true },
        { name: "بهینه‌سازی سئو", included: true },
        { name: "پشتیبانی ۱ ماه", included: true },
        { name: "سیستم مدیریت محتوا", included: false },
        { name: "داشبورد مدیریت", included: false },
        { name: "پنل کاربری", included: false },
      ],
      badge: "اقتصادی",
    },
    {
      id: "web-pro",
      name: "وب‌اپلیکیشن حرفه‌ای",
      icon: <FaCode className="w-5 h-5" />,
      price: "۲۹,۹۰۰,۰۰۰",
      period: "تومان",
      description: "مناسب برای کسب‌وکارهای رو به رشد",
      popular: true,
      borderColor: "border-indigo-400",
      bgColor: "bg-indigo-50/50",
      iconBg: "bg-indigo-200",
      textColor: "text-indigo-700",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700 text-white",
      badge: "پرفروش",
      features: [
        { name: "وب‌اپلیکیشن کامل", included: true },
        { name: "طراحی اختصاصی UI/UX", included: true },
        { name: "پنل مدیریت پیشرفته", included: true },
        { name: "سیستم احراز هویت", included: true },
        { name: "API اختصاصی", included: true },
        { name: "داشبورد تحلیلی", included: true },
        { name: "پشتیبانی ۳ ماه", included: true },
        { name: "میزبانی رایگان ۱ سال", included: true },
      ],
      recommended: "پیشنهاد ویژه",
    },
    {
      id: "web-enterprise",
      name: "سامانه سازمانی",
      icon: <FaServer className="w-5 h-5" />,
      price: "۵۹,۹۰۰,۰۰۰",
      period: "تومان",
      description: "مناسب برای سازمان‌های بزرگ و پیچیده",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50/30",
      iconBg: "bg-purple-100",
      textColor: "text-purple-600",
      buttonColor: "hover:bg-purple-50",
      badge: "حرفه‌ای",
      features: [
        { name: "سامانه جامع سازمانی", included: true },
        { name: "معماری میکروسرویس", included: true },
        { name: "داده‌کاوی و هوش مصنوعی", included: true },
        { name: "امنیت پیشرفته", included: true },
        { name: "مقیاس‌پذیری خودکار", included: true },
        { name: "پشتیبانی ۱۲ ماه", included: true },
        { name: "آموزش تخصصی", included: true },
        { name: "گارانتی عملکرد", included: true },
      ],
    },
    // اکسل
    {
      id: "excel-basic",
      name: "اکسل پایه",
      icon: <FaFileAlt className="w-5 h-5" />,
      price: "۳,۹۰۰,۰۰۰",
      period: "تومان",
      description: "فرمول‌نویسی و توابع پیشرفته",
      borderColor: "border-emerald-200",
      bgColor: "bg-emerald-50/30",
      iconBg: "bg-emerald-100",
      textColor: "text-emerald-600",
      buttonColor: "hover:bg-emerald-50",
      badge: "آموزشی",
      features: [
        { name: "فرمول‌نویسی پیشرفته", included: true },
        { name: "فایل‌های نمونه", included: true },
        { name: "آموزش ۱۰ ساعته", included: true },
        { name: "پشتیبانی ۱ ماه", included: true },
        { name: "داشبورد ساده", included: false },
        { name: "ماکرو نویسی", included: false },
      ],
    },
    {
      id: "excel-pro",
      name: "اکسل حرفه‌ای",
      icon: <FaChartLine className="w-5 h-5" />,
      price: "۹,۹۰۰,۰۰۰",
      period: "تومان",
      description: "داشبوردهای مدیریتی و اتوماسیون",
      popular: true,
      borderColor: "border-emerald-400",
      bgColor: "bg-emerald-50/50",
      iconBg: "bg-emerald-200",
      textColor: "text-emerald-700",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700 text-white",
      badge: "پرفروش",
      features: [
        { name: "داشبورد حرفه‌ای", included: true },
        { name: "ماکرو نویسی VBA", included: true },
        { name: "اتوماسیون کامل", included: true },
        { name: "اتصال به دیتابیس", included: true },
        { name: "گزارشات پیشرفته", included: true },
        { name: "پشتیبانی ۳ ماه", included: true },
      ],
    },
    // موبایل
    {
      id: "mobile-basic",
      name: "اپلیکیشن ساده",
      icon: <FaMobileAlt className="w-5 h-5" />,
      price: "۱۹,۹۰۰,۰۰۰",
      period: "تومان",
      description: "اپلیکیشن ساده با قابلیت‌های پایه",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50/30",
      iconBg: "bg-purple-100",
      textColor: "text-purple-600",
      buttonColor: "hover:bg-purple-50",
      badge: "استارتاپی",
      features: [
        { name: "۳ صفحه اصلی", included: true },
        { name: "طراحی ساده", included: true },
        { name: "ورود/ثبت نام", included: true },
        { name: "نمایش اطلاعات", included: true },
        { name: "پشتیبانی ۱ ماه", included: true },
        { name: "پرداخت آنلاین", included: false },
        { name: "نوتیفیکیشن", included: false },
        { name: "موقعیت مکانی", included: false },
      ],
    },
    {
      id: "mobile-pro",
      name: "اپلیکیشن حرفه‌ای",
      icon: <FaCrown className="w-5 h-5" />,
      price: "۴۹,۹۰۰,۰۰۰",
      period: "تومان",
      description: "اپلیکیشن کامل با تمام امکانات",
      popular: true,
      borderColor: "border-violet-400",
      bgColor: "bg-violet-50/50",
      iconBg: "bg-violet-200",
      textColor: "text-violet-700",
      buttonColor: "bg-violet-600 hover:bg-violet-700 text-white",
      badge: "پرفروش",
      features: [
        { name: "طراحی اختصاصی UI/UX", included: true },
        { name: "پرداخت آنلاین", included: true },
        { name: "نوتیفیکیشن پیشرفته", included: true },
        { name: "موقعیت مکانی", included: true },
        { name: "دوربین و گالری", included: true },
        { name: "داده‌های آفلاین", included: true },
        { name: "پشتیبانی ۶ ماه", included: true },
        { name: "منتشر در اپ استور", included: true },
      ],
      recommended: "پیشنهاد ویژه",
    },
    {
      id: "mobile-enterprise",
      name: "اپلیکیشن سازمانی",
      icon: <FaUsers className="w-5 h-5" />,
      price: "۹۹,۹۰۰,۰۰۰",
      period: "تومان",
      description: "اپلیکیشن سازمانی با مقیاس‌پذیری بالا",
      borderColor: "border-indigo-200",
      bgColor: "bg-indigo-50/30",
      iconBg: "bg-indigo-100",
      textColor: "text-indigo-600",
      buttonColor: "hover:bg-indigo-50",
      badge: "سازمانی",
      features: [
        { name: "معماری پیشرفته", included: true },
        { name: "امنیت سطح بالا", included: true },
        { name: "همگام‌سازی لحظه‌ای", included: true },
        { name: "گزارشات تحلیلی", included: true },
        { name: "پشتیبانی ۱۲ ماه", included: true },
        { name: "توسعه سفارشی", included: true },
        { name: "آموزش کارکنان", included: true },
        { name: "گارانتی عملکرد", included: true },
      ],
    },
  ];

  const filteredPlans = selectedTab === "all" 
    ? plans 
    : plans.filter(plan => {
        if (selectedTab === "web") return ["web-basic", "web-pro", "web-enterprise"].includes(plan.id);
        if (selectedTab === "excel") return ["excel-basic", "excel-pro"].includes(plan.id);
        if (selectedTab === "mobile") return ["mobile-basic", "mobile-pro", "mobile-enterprise"].includes(plan.id);
        return true;
      });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-white">
      {/* Header با رنگ ملایم */}
      <div className="bg-gradient-to-r from-indigo-50/30 via-white to-purple-50/30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <Link
              href="/"
              className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-white"
            >
              <FaArrowRight className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-light text-gray-900">تعرفه‌های خدمات</h1>
              <p className="text-sm text-gray-400 mt-0.5">پکیج‌های متناسب با نیاز شما</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* دوره پرداخت */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <span className={`text-sm transition-colors ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>
              ماهانه
            </span>
            <button
              onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-8 bg-gray-200 rounded-full transition-colors duration-300"
            >
              <motion.div 
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                  billingCycle === 'yearly' ? 'right-1' : 'left-1'
                }`}
                layout
              />
            </button>
            <span className={`text-sm transition-colors ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'}`}>
              سالانه
              <span className="text-xs text-emerald-500 mr-1">(۱۰٪ تخفیف)</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* تب‌ها */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-1 justify-center"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-1.5 text-sm transition-all ${
                selectedTab === tab.id
                  ? "text-gray-900 font-medium border-b-2 border-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* پلن‌ها */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                layout
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative group bg-white border rounded-xl transition-all duration-300 ${
                  plan.popular 
                    ? `${plan.borderColor} shadow-lg shadow-${plan.textColor}/5` 
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                } ${plan.bgColor}`}
              >
                {/* برچسب محبوب */}
                {plan.popular && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-1 rounded-full flex items-center gap-1.5"
                  >
                    <FaStar className="w-3 h-3" />
                    محبوب‌ترین
                  </motion.div>
                )}

                {/* برچسب پیشنهاد ویژه */}
                {plan.recommended && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    className="absolute -top-3 right-4 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5"
                  >
                    <FaGift className="w-3 h-3" />
                    {plan.recommended}
                  </motion.div>
                )}

                <div className="p-6">
                  {/* هدر */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${plan.iconBg} ${plan.textColor}`}>
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900">{plan.name}</h3>
                      {plan.badge && (
                        <span className={`text-xs ${plan.textColor}`}>{plan.badge}</span>
                      )}
                    </div>
                  </div>

                  {/* قیمت */}
                  <div className="mb-4">
                    <motion.span 
                      key={billingCycle}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl font-light text-gray-900"
                    >
                      {billingCycle === 'yearly' 
                        ? Math.floor(parseInt(plan.price.replace(/,/g, '')) * 0.9).toLocaleString()
                        : plan.price}
                    </motion.span>
                    <span className="text-sm text-gray-400 mr-1">تومان</span>
                    <span className="text-xs text-gray-400 mr-2">
                      / {billingCycle === 'monthly' ? 'ماه' : 'سال'}
                    </span>
                  </div>

                  {/* توضیحات */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* ویژگی‌ها */}
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        className="flex items-center gap-2.5 text-sm"
                      >
                        {feature.included ? (
                          <FaCheck className={`w-3.5 h-3.5 ${plan.textColor} flex-shrink-0`} />
                        ) : (
                          <FaTimes className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-600' : 'text-gray-300'}>
                          {feature.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* دکمه */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 rounded-lg text-sm font-medium transition-all ${
                      plan.popular
                        ? `${plan.buttonColor} shadow-sm`
                        : `bg-white border border-gray-200 ${plan.buttonColor} text-gray-700`
                    }`}
                  >
                    انتخاب این پکیج
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredPlans.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm">هیچ پکیجی در این دسته‌بندی یافت نشد</p>
          </div>
        )}

        {/* پایین صفحه */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center border-t border-gray-100 pt-10"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-light text-gray-900 mb-2">
              نیاز به پکیج سفارشی دارید؟
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              ما می‌توانیم پکیجی متناسب با نیازهای خاص شما طراحی کنیم
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                تماس با ما
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/programming"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                درخواست مشاوره
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}