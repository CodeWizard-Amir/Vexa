// app/blog/[id]/page.tsx - صفحه جزئیات بلاگ
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  FaArrowRight, 
  FaClock, 
  FaUser, 
  FaCalendar,
  FaTag,
  FaShare,
  FaBookmark,
  FaComments,
  FaHeart,
  FaEye
} from "react-icons/fa";

// نمونه داده (در واقعیت از API میاد)
const postData = {
  id: 1,
  title: "معرفی Next.js 15 و قابلیت‌های جدید آن",
  content: `
    <p>نسخه جدید Next.js با قابلیت‌های شگفت‌انگیزی منتشر شده است. در این مقاله به بررسی کامل این قابلیت‌ها می‌پردازیم.</p>
    
    <h2>سرور کامپوننت‌های پیشرفته</h2>
    <p>یکی از مهم‌ترین ویژگی‌های نسخه ۱۵، بهبود چشمگیر سرور کامپوننت‌ها است. این بهبود باعث افزایش سرعت بارگذاری و کاهش حجم باندل می‌شود.</p>
    
    <h2>بهینه‌سازی‌های جدید</h2>
    <p>بهینه‌سازی‌های جدید در این نسخه شامل بهبود عملکرد در رندرینگ، کاهش زمان build و بهینه‌سازی تصاویر است.</p>
    
    <ul>
      <li>کاهش زمان بارگذاری تا ۴۰٪</li>
      <li>بهبود SEO</li>
      <li>پشتیبانی بهتر از تصاویر</li>
    </ul>
    
    <h2>نتیجه‌گیری</h2>
    <p>Next.js 15 یک گام بزرگ به جلو در توسعه وب است و استفاده از آن را به تمام توسعه‌دهندگان توصیه می‌کنیم.</p>
  `,
  author: "احمد رضایی",
  date: "۲۵ دی ۱۴۰۴",
  readTime: "۵ دقیقه",
  category: "برنامه‌نویسی",
  tags: ["Next.js", "React", "TypeScript"],
  views: 1245,
  likes: 89,
  comments: 23,
  relatedPosts: [
    { id: 2, title: "آموزش TypeScript" },
    { id: 3, title: "React Hooks" },
    { id: 4, title: "Tailwind CSS" },
  ]
};

export default function BlogPostPage() {
  const params = useParams();
  const post = postData; // در واقعیت از API با id دریافت میشه

  return (
    <div className="min-h-screen mt-20 bg-white">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <Link
              href="/blog"
              className="p-2 -ml-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50"
            >
              <FaArrowRight className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-light text-gray-900">مطالعه مقاله</h1>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* متا اطلاعات */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <FaUser className="w-3.5 h-3.5" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCalendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <FaEye className="w-3.5 h-3.5" />
                {post.views} بازدید
              </span>
            </div>
          </div>

          {/* محتوای اصلی */}
          <div 
            className="prose prose-gray max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* تگ‌ها */}
          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-100">
            {post.tags.map((tag, i) => (
              <span key={i} className="flex items-center gap-1 text-sm text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                <FaTag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* تعاملات */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                <FaHeart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-indigo-600 transition-colors">
                <FaComments className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50">
                <FaBookmark className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-50">
                <FaShare className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* نویسنده */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{post.author}</h3>
                <p className="text-sm text-gray-400">توسعه‌دهنده و مدرس Next.js</p>
              </div>
            </div>
          </div>

          {/* مطالب مرتبط */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">مطالب مرتبط</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {post.relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.id}`}
                  className="p-4 border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-md transition-all"
                >
                  <h4 className="text-sm font-medium text-gray-900">{related.title}</h4>
                  <span className="text-xs text-gray-400 mt-1">مطالعه بیشتر</span>
                </Link>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}