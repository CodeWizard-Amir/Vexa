// app/programming/page.tsx - صفحه برنامه‌نویسی (طراحی حرفه‌ای و پرمحتوا)
"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLaptopCode, 
  FaArrowRight, 
  FaCheck, 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaMobile,
  FaDesktop,
  FaServer,
  FaCode,
  FaPalette,
  FaChartLine
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";
import { useState } from "react";

const validationSchema = Yup.object({
  name: Yup.string().required("نام الزامی است").min(3, "حداقل ۳ کاراکتر"),
  email: Yup.string().email("ایمیل نامعتبر").required("ایمیل الزامی است"),
  phone: Yup.string().required("شماره تماس الزامی است").matches(/^[0-9]{11}$/, "شماره تماس ۱۱ رقمی وارد کنید"),
  projectType: Yup.string().required("نوع پروژه را انتخاب کنید"),
  budget: Yup.string().required("بودجه پروژه را مشخص کنید"),
  description: Yup.string().required("توضیحات الزامی است").min(20, "حداقل ۲۰ کاراکتر"),
});

export default function ProgrammingPage() {
  const [activeTab, setActiveTab] = useState("frontend");

  const services = {
    frontend: {
      title: "فرانت‌اند",
      icon: FaDesktop,
      items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "PWA"],
      color: "indigo"
    },
    backend: {
      title: "بک‌اند",
      icon: FaServer,
      items: ["Node.js / Express", "REST API", "GraphQL", "WebSocket", "Microservices"],
      color: "blue"
    },
    database: {
      title: "دیتابیس",
      icon: FaDatabase,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma / TypeORM"],
      color: "emerald"
    },
    devops: {
      title: "DevOps",
      icon: FaCloud,
      items: ["Docker", "Kubernetes", "AWS / GCP", "CI/CD", "Monitoring"],
      color: "purple"
    }
  };

  const techStack = [
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "React", icon: FaReact, color: "text-cyan-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
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
      <div className="bg-gradient-to-b from-indigo-50/80 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 -ml-2 text-gray-400 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50"
            >
              <FaArrowRight className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md">
                  <FaLaptopCode className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">خدمات برنامه‌نویسی</h1>
                  <p className="text-gray-500 text-sm mt-0.5">توسعه حرفه‌ای وب‌سایت و نرم‌افزار</p>
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
            {/* کارت معرفی خدمات */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">خدمات تخصصی ما</h2>
              </div>

              {/* تب‌های خدمات */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(services).map(([key, service]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeTab === key
                        ? `bg-${service.color}-50 text-${service.color}-700 border-2 border-${service.color}-200`
                        : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <service.icon className="w-4 h-4" />
                      {service.title}
                    </div>
                  </button>
                ))}
              </div>

              {/* محتوای تب */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services[activeTab as keyof typeof services].items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-2.5 p-3 rounded-lg bg-gray-50 border border-gray-100"
                      >
                        <FaCheck className={`w-4 h-4 text-${services[activeTab as keyof typeof services].color}-500`} />
                        <span className="text-sm text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* تکنولوژی‌ها */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">تکنولوژی‌های ما</h2>
              </div>

              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all group"
                  >
                    <tech.icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* مزایا */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">چرا ما را انتخاب کنید</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: FaRocket, title: "سرعت بالا", desc: "تحویل پروژه در کوتاه‌ترین زمان" },
                  { icon: FaShieldAlt, title: "کیفیت تضمینی", desc: "کد تمیز و بهینه با استانداردهای روز" },
                  { icon: FaChartLine, title: "پشتیبانی ۲۴/۷", desc: "پشتیبانی کامل پس از تحویل پروژه" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-indigo-50/50 transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-indigo-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
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
                  <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900">درخواست پروژه</h2>
                </div>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    projectType: "",
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
                          } focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none text-gray-900 bg-white`}
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
                          } focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none text-gray-900 bg-white`}
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
                          } focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none text-gray-900 bg-white`}
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        />
                        <ErrorMessage name="phone" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          نوع پروژه <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="select"
                          name="projectType"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.projectType && touched.projectType ? "border-red-300" : "border-gray-300"
                          } focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none text-gray-900 bg-white`}
                        >
                          <option value="">انتخاب کنید</option>
                          <option value="website">وب‌سایت شرکتی</option>
                          <option value="webapp">وب‌اپلیکیشن</option>
                          <option value="ecommerce">فروشگاه اینترنتی</option>
                          <option value="dashboard">داشبورد مدیریتی</option>
                          <option value="api">API و سرویس</option>
                          <option value="landing">صفحه فرود (لندینگ)</option>
                          <option value="other">سایر</option>
                        </Field>
                        <ErrorMessage name="projectType" component="p" className="mt-1 text-sm text-red-500" />
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
                          } focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none text-gray-900 bg-white`}
                        >
                          <option value="">انتخاب کنید</option>
                          <option value="low">کمتر از ۱۰ میلیون تومان</option>
                          <option value="medium">۱۰ تا ۵۰ میلیون تومان</option>
                          <option value="high">۵۰ تا ۲۰۰ میلیون تومان</option>
                          <option value="enterprise">بیش از ۲۰۰ میلیون تومان</option>
                        </Field>
                        <ErrorMessage name="budget" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          توضیحات پروژه <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="textarea"
                          name="description"
                          rows={4}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.description && touched.description ? "border-red-300" : "border-gray-300"
                          } focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none text-gray-900 bg-white resize-none`}
                          placeholder="توضیحات کامل پروژه، نیازمندی‌ها و اهداف"
                        />
                        <ErrorMessage name="description" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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