// app/portfolio/page.tsx - صفحه نمونه کارها (طراحی مینیمال و شیک)
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaGithub, 
  FaExternalLinkAlt,
  FaChartLine,
  FaShoppingCart,
  FaVideo,
  FaRobot,
  FaCloud,
  FaMobileAlt,
  FaDesktop,
  FaStar,
  FaUsers,
  FaClock
} from "react-icons/fa";
import { useState } from "react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "همه" },
    { id: "web", label: "وب‌سایت" },
    { id: "app", label: "موبایل" },
    { id: "dashboard", label: "داشبورد" },
    { id: "ecommerce", label: "فروشگاهی" },
  ];

  const projects = [
    {
      id: 1,
      title: "سامانه مدیریت فروشگاه",
      category: "ecommerce",
      type: "وب‌اپلیکیشن",
      icon: FaShoppingCart,
      description: "سیستم کامل مدیریت فروشگاه با انبارداری، فروش و گزارشات پیشرفته",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
      features: ["مدیریت محصولات", "سیستم تخفیف", "گزارشات تحلیلی"],
      stats: { users: "۱۵۰۰+", rating: "۴.۸", time: "۳ ماه" },
      color: "border-l-indigo-500"
    },
    {
      id: 2,
      title: "اپلیکیشن پزشکی آنلاین",
      category: "app",
      type: "موبایل",
      icon: FaMobileAlt,
      description: "مشاوره پزشکی با ویدئو کنفرانس، نوبت‌دهی و پرونده الکترونیک",
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      features: ["ویدئو کنفرانس", "نوبت‌دهی", "پرونده پزشکی"],
      stats: { users: "۳۵۰۰+", rating: "۴.۹", time: "۶ ماه" },
      color: "border-l-emerald-500"
    },
    {
      id: 3,
      title: "داشبورد مدیریت پروژه",
      category: "dashboard",
      type: "وب‌اپلیکیشن",
      icon: FaChartLine,
      description: "داشبورد جامع با نمودارهای پیشرفته و ابزارهای مدیریت تیم",
      technologies: ["React", "Chart.js", "Firebase"],
      features: ["نمودارها", "مدیریت تیم", "پیگیری تسک‌ها"],
      stats: { users: "۸۰۰+", rating: "۴.۷", time: "۴ ماه" },
      color: "border-l-blue-500"
    },
    {
      id: 4,
      title: "وب‌سایت خبری ورزشی",
      category: "web",
      type: "وب‌سایت",
      icon: FaVideo,
      description: "پلتفرم خبری با پخش زنده، اخبار لحظه‌ای و محتوای ویدیویی",
      technologies: ["Next.js", "GraphQL", "Redis"],
      features: ["پخش زنده", "اخبار لحظه‌ای", "ویدئو محتوا"],
      stats: { users: "۵۰۰۰+", rating: "۴.۶", time: "۲ ماه" },
      color: "border-l-rose-500"
    },
    {
      id: 5,
      title: "سیستم اتوماسیون بازاریابی",
      category: "dashboard",
      type: "وب‌اپلیکیشن",
      icon: FaRobot,
      description: "سیستم هوشمند با اتوماسیون ایمیل، پیامک و تحلیل کمپین‌ها",
      technologies: ["Python", "Django", "React"],
      features: ["اتوماسیون", "تحلیل کمپین", "مدیریت مخاطبان"],
      stats: { users: "۲۰۰۰+", rating: "۴.۵", time: "۵ ماه" },
      color: "border-l-purple-500"
    },
    {
      id: 6,
      title: "پلتفرم آموزش آنلاین",
      category: "web",
      type: "وب‌اپلیکیشن",
      icon: FaCloud,
      description: "پلتفرم آموزش با دوره‌های ویدیویی، آزمون‌ها و گواهینامه",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      features: ["ویدئو محتوا", "آزمون", "گواهینامه"],
      stats: { users: "۴۲۰۰+", rating: "۴.۹", time: "۴ ماه" },
      color: "border-l-cyan-500"
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-white">
      {/* Header - مینیمال */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50"
            >
              <FaArrowRight className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-light text-gray-900">نمونه کارها</h1>
              <p className="text-sm text-gray-400 mt-0.5">پروژه‌های اخیر</p>
            </div>
          </div>
        </div>
      </div>

      {/* آمار - مینیمال */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { label: "پروژه", value: "۴۵+" },
              { label: "مشتری", value: "۳۸+" },
              { label: "تجربه", value: "۵ سال" },
              { label: "رضایت", value: "۹۸%" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-light text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* بخش اصلی */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* فیلترها - مینیمال */}
        <div className="flex flex-wrap gap-1 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-1.5 text-sm transition-all ${
                filter === cat.id
                  ? "text-gray-900 font-medium"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* پروژه‌ها */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group bg-white border border-gray-100 rounded-lg hover:border-gray-200 transition-all duration-300 overflow-hidden ${project.color} border-l-4`}
            >
              {/* محتوای کارت */}
              <div className="p-6">
                {/* آیکون و نوع */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                    {project.type}
                  </span>
                </div>

                {/* عنوان و توضیحات */}
                <h3 className="text-base font-medium text-gray-900 mb-1.5">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* تکنولوژی‌ها */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ویژگی‌ها */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.features.map((feature, i) => (
                    <span key={i} className="text-xs text-gray-400">
                      • {feature}
                    </span>
                  ))}
                </div>

                {/* خط جداکننده */}
                <div className="border-t border-gray-50 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaUsers className="w-3 h-3" />
                        {project.stats.users}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaStar className="w-3 h-3" />
                        {project.stats.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="w-3 h-3" />
                        {project.stats.time}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-300 hover:text-gray-600 transition-colors rounded hover:bg-gray-50">
                        <FaGithub className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 text-gray-300 hover:text-gray-600 transition-colors rounded hover:bg-gray-50">
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm">پروژه‌ای یافت نشد</p>
          </div>
        )}

        {/* CTA - مینیمال */}
        <div className="text-center mt-16">
          <div className="border-t border-gray-100 pt-10">
            <h3 className="text-lg font-light text-gray-900 mb-1">
              آماده شروع پروژه جدید هستید؟
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              با ما تماس بگیرید تا ایده‌هایتان را به واقعیت تبدیل کنیم
            </p>
            <Link
              href="/programming"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              شروع پروژه
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}