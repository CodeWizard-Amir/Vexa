// app/mobile/page.tsx - صفحه برنامه موبایل (طراحی حرفه‌ای و کامل)
"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMobileAlt, 
  FaArrowRight, 
  FaCheck, 
  FaAndroid, 
  FaApple, 
  FaReact,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaCode,
  FaPalette,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaUsers,
  FaStore,
  FaCreditCard,
  FaBell,
  FaMapMarkerAlt,
  FaCamera,
  FaMicrophone
} from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift } from "react-icons/si";
import { useState } from "react";

const validationSchema = Yup.object({
  name: Yup.string().required("نام الزامی است").min(3, "حداقل ۳ کاراکتر"),
  email: Yup.string().email("ایمیل نامعتبر").required("ایمیل الزامی است"),
  phone: Yup.string().required("شماره تماس الزامی است").matches(/^[0-9]{11}$/, "شماره تماس ۱۱ رقمی وارد کنید"),
  platform: Yup.string().required("پلتفرم را انتخاب کنید"),
  appType: Yup.string().required("نوع اپلیکیشن را انتخاب کنید"),
  budget: Yup.string().required("بودجه پروژه را مشخص کنید"),
  description: Yup.string().required("توضیحات الزامی است").min(20, "حداقل ۲۰ کاراکتر"),
});

export default function MobilePage() {
  const [activeTab, setActiveTab] = useState("features");

  const platforms = [
    { name: "اندروید", icon: FaAndroid, color: "green", bg: "bg-green-50", text: "text-green-600" },
    { name: "iOS", icon: FaApple, color: "gray", bg: "bg-gray-50", text: "text-gray-700" },
    { name: "React Native", icon: FaReact, color: "cyan", bg: "bg-cyan-50", text: "text-cyan-600" },
    { name: "Flutter", icon: SiFlutter, color: "blue", bg: "bg-blue-50", text: "text-blue-600" },
  ];

  const appTypes = [
    { 
      title: "اپلیکیشن فروشگاهی", 
      desc: "فروشگاه آنلاین با درگاه پرداخت", 
      icon: FaStore,
      features: ["سبد خرید", "پرداخت آنلاین", "پیگیری سفارش", "نظرات کاربران"]
    },
    { 
      title: "اپلیکیشن اجتماعی", 
      desc: "شبکه اجتماعی و پیام‌رسان", 
      icon: FaUsers,
      features: ["چت آنلاین", "اشتراک‌گذاری", "نوتیفیکیشن", "پروفایل کاربری"]
    },
    { 
      title: "اپلیکیشن خدماتی", 
      desc: "درخواست خدمات و رزرو", 
      icon: FaBell,
      features: ["رزرو آنلاین", "موقعیت مکانی", "امتیازدهی", "پشتیبانی"]
    },
    { 
      title: "اپلیکیشن آموزشی", 
      desc: "آموزش آنلاین و دوره‌ها", 
      icon: FaCode,
      features: ["ویدیو محتوا", "آزمون آنلاین", "گواهینامه", "پیشرفت کاربر"]
    },
  ];

  const features = [
    { icon: FaRocket, title: "سرعت بالا", desc: "بهینه‌سازی شده برای بهترین عملکرد" },
    { icon: FaShieldAlt, title: "امنیت کامل", desc: "حفاظت از داده‌های کاربران" },
    { icon: FaChartLine, title: "مقیاس‌پذیری", desc: "قابلیت رشد و توسعه" },
    { icon: FaPalette, title: "طراحی زیبا", desc: "UI/UX حرفه‌ای و جذاب" },
  ];

  const technologies = [
    { name: "React Native", icon: FaReact, color: "text-cyan-500" },
    { name: "Flutter", icon: SiFlutter, color: "text-blue-500" },
    { name: "Kotlin", icon: SiKotlin, color: "text-purple-500" },
    { name: "Swift", icon: SiSwift, color: "text-red-500" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-white">
      {/* Header با گرادیانت ملایم */}
      <div className="bg-gradient-to-b from-purple-50/80 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 -ml-2 text-gray-400 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
            >
              <FaArrowRight className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-md">
                  <FaMobileAlt className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">برنامه موبایل</h1>
                  <p className="text-gray-500 text-sm mt-0.5">توسعه اپلیکیشن‌های اندروید و iOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* بخش اصلی - 8 ستون */}
          <div className="lg:col-span-8 space-y-8">
            {/* کارت پلتفرم‌ها */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">پلتفرم‌های مورد پشتیبانی</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className={`${platform.bg} p-4 rounded-xl border border-gray-200 hover:border-${platform.color}-300 transition-all text-center`}
                  >
                    <platform.icon className={`w-8 h-8 mx-auto ${platform.text} mb-2`} />
                    <span className="text-sm font-medium text-gray-700">{platform.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* تکنولوژی‌ها */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">تکنولوژی‌های ما</h2>
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all group"
                  >
                    <tech.icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* تب‌های انواع اپلیکیشن */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">انواع اپلیکیشن‌ها</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {appTypes.map((app, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all"
                  >
                    <app.icon className="w-6 h-6 text-purple-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{app.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{app.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {app.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* مزایا */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">چرا ما را انتخاب کنید</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-purple-50/50 transition-colors text-center"
                  >
                    <item.icon className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* قابلیت‌های ویژه */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">قابلیت‌های ویژه</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: FaCreditCard, label: "درگاه پرداخت" },
                  { icon: FaBell, label: "نوتیفیکیشن" },
                  { icon: FaMapMarkerAlt, label: "موقعیت مکانی" },
                  { icon: FaCamera, label: "دوربین" },
                  { icon: FaMicrophone, label: "صدا" },
                  { icon: FaDatabase, label: "دیتابیس" },
                  { icon: FaCloud, label: "فضای ابری" },
                  { icon: FaCogs, label: "اتوماسیون" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-1 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-purple-200 transition-all"
                  >
                    <item.icon className="w-5 h-5 text-purple-600" />
                    <span className="text-xs text-gray-700">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* سایدبار فرم - 4 ستون */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-8"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900">درخواست ساخت اپلیکیشن</h2>
                </div>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    platform: "",
                    appType: "",
                    budget: "",
                    description: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log("Form submitted:", values);
                    setTimeout(() => {
                      alert("✅ درخواست شما با موفقیت ثبت شد!\nبه زودی با شما تماس خواهیم گرفت.");
                      setSubmitting(false);
                      resetForm();
                    }, 1000);
                  }}
                >
                  {({ isSubmitting, errors, touched }) => (
                    <Form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          نام و نام خانوادگی <span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="text"
                          name="name"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.name && touched.name ? "border-red-300" : "border-gray-300"
                          } focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors outline-none text-gray-900 bg-white`}
                          placeholder="نام کامل"
                        />
                        <ErrorMessage name="name" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ایمیل <span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="email"
                          name="email"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.email && touched.email ? "border-red-300" : "border-gray-300"
                          } focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors outline-none text-gray-900 bg-white`}
                          placeholder="example@email.com"
                        />
                        <ErrorMessage name="email" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          شماره تماس <span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="text"
                          name="phone"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.phone && touched.phone ? "border-red-300" : "border-gray-300"
                          } focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors outline-none text-gray-900 bg-white`}
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        />
                        <ErrorMessage name="phone" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          پلتفرم <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="select"
                          name="platform"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.platform && touched.platform ? "border-red-300" : "border-gray-300"
                          } focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors outline-none text-gray-900 bg-white`}
                        >
                          <option value="">انتخاب کنید</option>
                          <option value="android">اندروید</option>
                          <option value="ios">iOS</option>
                          <option value="reactnative">React Native</option>
                          <option value="flutter">Flutter</option>
                          <option value="both">هر دو (اندروید و iOS)</option>
                        </Field>
                        <ErrorMessage name="platform" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          نوع اپلیکیشن <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="select"
                          name="appType"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.appType && touched.appType ? "border-red-300" : "border-gray-300"
                          } focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors outline-none text-gray-900 bg-white`}
                        >
                          <option value="">انتخاب کنید</option>
                          <option value="store">فروشگاهی</option>
                          <option value="social">شبکه اجتماعی</option>
                          <option value="service">خدماتی</option>
                          <option value="education">آموزشی</option>
                          <option value="health">سلامت و پزشکی</option>
                          <option value="finance">مالی و بانکی</option>
                          <option value="game">بازی</option>
                          <option value="other">سایر</option>
                        </Field>
                        <ErrorMessage name="appType" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          بودجه تقریبی <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="select"
                          name="budget"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.budget && touched.budget ? "border-red-300" : "border-gray-300"
                          } focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors outline-none text-gray-900 bg-white`}
                        >
                          <option value="">انتخاب کنید</option>
                          <option value="low">کمتر از ۲۰ میلیون تومان</option>
                          <option value="medium">۲۰ تا ۱۰۰ میلیون تومان</option>
                          <option value="high">۱۰۰ تا ۵۰۰ میلیون تومان</option>
                          <option value="enterprise">بیش از ۵۰۰ میلیون تومان</option>
                        </Field>
                        <ErrorMessage name="budget" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          توضیحات اپلیکیشن <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="textarea"
                          name="description"
                          rows={4}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.description && touched.description ? "border-red-300" : "border-gray-300"
                          } focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors outline-none text-gray-900 bg-white resize-none`}
                          placeholder="توضیحات کامل اپلیکیشن، ایده، مخاطب و ویژگی‌های اصلی"
                        />
                        <ErrorMessage name="description" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            در حال ارسال...
                          </span>
                        ) : (
                          "ارسال درخواست"
                        )}
                      </motion.button>

                      <p className="text-xs text-gray-400 text-center mt-2">
                        * تمامی فیلدها الزامی هستند
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}