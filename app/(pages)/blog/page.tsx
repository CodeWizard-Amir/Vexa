// app/blog/page.tsx - صفحه اصلی وبلاگ
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { 
  FaArrowRight, 
  FaSearch, 
  FaClock, 
  FaUser, 
  FaTag,
  FaCalendar,
  FaFire,
  FaNewspaper,
  FaCode,
  FaMobileAlt,
  FaFileExcel,
  FaChartLine,
  FaRobot,
  FaLightbulb,
  FaUsers,
  FaBookOpen,
  FaVideo,
  FaPodcast,
  FaGraduationCap,
  FaRocket,
  FaComments
} from "react-icons/fa";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  icon: React.ReactNode;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
  color: string;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "همه مطالب", icon: FaNewspaper },
    { id: "programming", label: "برنامه‌نویسی", icon: FaCode },
    { id: "mobile", label: "موبایل", icon: FaMobileAlt },
    { id: "excel", label: "اکسل", icon: FaFileExcel },
    { id: "design", label: "طراحی", icon: FaLightbulb },
    { id: "business", label: "کسب‌وکار", icon: FaChartLine },
  ];

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "معرفی Next.js 15 و قابلیت‌های جدید آن",
      excerpt: "آخرین نسخه Next.js با ویژگی‌های شگفت‌انگیز مانند سرور کامپوننت‌های پیشرفته و بهینه‌سازی‌های جدید منتشر شد.",
      category: "programming",
      author: "احمد رضایی",
      date: "۲۵ دی ۱۴۰۴",
      readTime: "۵ دقیقه",
      image: "/api/placeholder/800/400",
      icon: <FaCode className="text-indigo-600" />,
      tags: ["Next.js", "React", "TypeScript"],
      featured: true,
      trending: true,
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 2,
      title: "۱۰ ترفند طلایی در اکسل که باید بدانید",
      excerpt: "با این ترفندهای حرفه‌ای، کار با اکسل را متحول کنید و سرعت خود را چندین برابر افزایش دهید.",
      category: "excel",
      author: "مریم کریمی",
      date: "۲۲ دی ۱۴۰۴",
      readTime: "۴ دقیقه",
      image: "/api/placeholder/800/400",
      icon: <FaFileExcel className="text-emerald-600" />,
      tags: ["Excel", "VBA", "Formula"],
      trending: true,
      color: "from-emerald-500 to-green-500"
    },
    {
      id: 3,
      title: "آینده توسعه اپلیکیشن‌های موبایل با React Native",
      excerpt: "چرا React Native همچنان بهترین انتخاب برای توسعه اپلیکیشن‌های کراس پلتفرم است؟ بررسی مزایا و چالش‌ها.",
      category: "mobile",
      author: "سعید محمدی",
      date: "۲۰ دی ۱۴۰۴",
      readTime: "۶ دقیقه",
      image: "/api/placeholder/800/400",
      icon: <FaMobileAlt className="text-purple-600" />,
      tags: ["React Native", "Mobile", "iOS", "Android"],
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "اصول طراحی UI/UX برای وب‌سایت‌های مدرن",
      excerpt: "راهنمای کامل طراحی رابط کاربری و تجربه کاربری برای وب‌سایت‌های موفق و جذاب.",
      category: "design",
      author: "نازنین حسینی",
      date: "۱۸ دی ۱۴۰۴",
      readTime: "۷ دقیقه",
      image: "/api/placeholder/800/400",
      icon: <FaLightbulb className="text-yellow-600" />,
      tags: ["UI/UX", "Design", "Figma"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      title: "استراتژی‌های موفقیت در کسب‌وکار دیجیتال",
      excerpt: "چگونه با استفاده از ابزارهای دیجیتال، کسب‌وکار خود را متحول کنید و به رشد پایدار دست یابید.",
      category: "business",
      author: "محمد علوی",
      date: "۱۵ دی ۱۴۰۴",
      readTime: "۸ دقیقه",
      image: "/api/placeholder/800/400",
      icon: <FaChartLine className="text-blue-600" />,
      tags: ["Business", "Digital", "Strategy"],
      trending: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 6,
      title: "آموزش گام‌به‌گام TypeScript برای مبتدیان",
      excerpt: "از صفر تا صد TypeScript را یاد بگیرید و کدهای مقاوم‌تر و قابل‌نگهداری‌تری بنویسید.",
      category: "programming",
      author: "احمد رضایی",
      date: "۱۲ دی ۱۴۰۴",
      readTime: "۱۰ دقیقه",
      image: "/api/placeholder/800/400",
      icon: <FaCode className="text-blue-600" />,
      tags: ["TypeScript", "JavaScript", "Programming"],
      color: "from-blue-500 to-indigo-500"
    },
  ];

  const filteredPosts = posts
    .filter(post => selectedCategory === "all" || post.category === selectedCategory)
    .filter(post => 
      post.title.includes(searchTerm) || 
      post.excerpt.includes(searchTerm) ||
      post.tags.some(tag => tag.includes(searchTerm))
    );

  const featuredPosts = posts.filter(p => p.featured);
  const trendingPosts = posts.filter(p => p.trending);

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
      {/* Header با طراحی مدرن */}
      <div className="relative bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/30 border-b border-gray-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 relative">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <Link
              href="/"
              className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-white"
            >
              <FaArrowRight className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-4xl font-light text-gray-900">مجله تخصصی</h1>
              <p className="text-sm text-gray-400 mt-0.5">آخرین مطالب آموزشی و تخصصی</p>
            </div>
          </motion.div>

          {/* جستجو */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="جستجو در مقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-14 bg-white border border-gray-200 rounded-2xl focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-gray-900"
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </motion.div>

          {/* دسته‌بندی‌ها */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2 justify-center mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gray-900 text-white shadow-md"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* مطالب ویژه */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaFire className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-medium text-gray-900">مطالب ویژه</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  whileHover={{ y: -4 }}
                  className={`group bg-gradient-to-br ${post.color} rounded-2xl p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                        {post.icon}
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <span className="flex items-center gap-1">
                        <FaUser className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm transition-all"
                    >
                      مطالعه بیشتر
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* لیست مطالب */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">آخرین مطالب</h2>
            <span className="text-sm text-gray-400">{filteredPosts.length} مطلب</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                // variants={itemVariants}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
                className="group bg-white border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* هدر */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-${post.color.split('-')[1]}-50`}>
                      {post.icon}
                    </div>
                    <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                      {post.readTime}
                    </span>
                  </div>

                  {/* عنوان */}
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-base font-medium text-gray-900 mb-2 hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  {/* توضیحات */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* تگ‌ها */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* فوتر */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaUser className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    
                    {post.trending && (
                      <span className="flex items-center gap-1 text-xs text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                        <FaFire className="w-3 h-3" />
                        داغ
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400">مطلبی با این مشخصات یافت نشد</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}