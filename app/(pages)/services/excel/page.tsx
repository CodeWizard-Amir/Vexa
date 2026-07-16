// app/excel/page.tsx - صفحه اکسل (طراحی حرفه‌ای)
"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaFileExcel, 
  FaArrowRight, 
  FaCheck, 
  FaChartLine, 
  FaTable, 
  FaRobot,
  FaCogs,
  FaFileAlt,
  FaClipboardList,
  FaChartPie,
  FaCalculator
} from "react-icons/fa";

const validationSchema = Yup.object({
  name: Yup.string().required("نام الزامی است"),
  email: Yup.string().email("ایمیل نامعتبر").required("ایمیل الزامی است"),
  phone: Yup.string().required("شماره تماس الزامی است").matches(/^[0-9]{11}$/, "شماره تماس ۱۱ رقمی وارد کنید"),
  serviceType: Yup.string().required("نوع خدمات را انتخاب کنید"),
  description: Yup.string().required("توضیحات الزامی است").min(20, "حداقل ۲۰ کاراکتر"),
});

export default function ExcelPage() {
  const services = [
    { 
      icon: FaRobot, 
      title: "ماکرو نویسی VBA", 
      desc: "اتوماسیون و ماکروهای حرفه‌ای", 
      color: "emerald" 
    },
    { 
      icon: FaChartLine, 
      title: "داشبورد حرفه‌ای", 
      desc: "تصویرسازی داده‌ها و گزارشات", 
      color: "blue" 
    },
    { 
      icon: FaCalculator, 
      title: "فرمول‌نویسی", 
      desc: "فرمول‌های پیچیده و توابع", 
      color: "indigo" 
    },
    { 
      icon: FaCogs, 
      title: "اتوماسیون", 
      desc: "سیستم‌های خودکار و هوشمند", 
      color: "purple" 
    },
  ];

  const features = [
    "کاهش زمان کار تا ۸۰٪",
    "گزارشات حرفه‌ای و اتوماتیک",
    "داشبوردهای تعاملی",
    "یکپارچگی با دیتابیس",
    "حفظ امنیت اطلاعات",
    "قابلیت اشتراک‌گذاری"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen mt-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-emerald-50/80 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 -ml-2 text-gray-400 hover:text-emerald-600 transition-colors rounded-lg hover:bg-emerald-50"
            >
              <FaArrowRight className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md">
                  <FaFileExcel className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">اکسل پیشرفته</h1>
                  <p className="text-gray-500 text-sm mt-0.5">ماکرو، فرمول‌نویسی و داشبوردهای حرفه‌ای</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* بخش اصلی */}
          <div className="lg:col-span-8 space-y-8">
            {/* کارت خدمات */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">خدمات تخصصی اکسل</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                    className={`p-5 rounded-xl border border-${service.color}-100 bg-${service.color}-50/50 hover:shadow-md transition-all`}
                  >
                    <service.icon className={`w-6 h-6 text-${service.color}-600 mb-3`} />
                    <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* مزایا */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">مزایای همکاری با ما</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-100"
                  >
                    <FaCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* نمونه کارها */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></div>
                <h2 className="text-xl font-bold text-gray-900">نمونه پروژه‌ها</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: FaChartPie, title: "داشبورد مدیریت فروش", desc: "تحلیل داده‌های فروش و پیش‌بینی" },
                  { icon: FaClipboardList, title: "سیستم مدیریت پروژه", desc: "پیگیری و کنترل پروژه‌ها" },
                  { icon: FaFileAlt, title: "گزارشات اتوماتیک", desc: "تولید گزارشات هفتگی و ماهانه" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-emerald-50/50 transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-emerald-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* سایدبار فرم */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-8"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900">درخواست خدمات</h2>
                </div>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    serviceType: "",
                    description: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    console.log("Form submitted:", values);
                    setTimeout(() => {
                      alert("✅ درخواست شما با موفقیت ثبت شد!");
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
                          } focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors outline-none text-gray-900 bg-white`}
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
                          } focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors outline-none text-gray-900 bg-white`}
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
                          } focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors outline-none text-gray-900 bg-white`}
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        />
                        <ErrorMessage name="phone" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          نوع خدمات <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="select"
                          name="serviceType"
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.serviceType && touched.serviceType ? "border-red-300" : "border-gray-300"
                          } focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors outline-none text-gray-900 bg-white`}
                        >
                          <option value="">انتخاب کنید</option>
                          <option value="vba">ماکرو نویسی VBA</option>
                          <option value="dashboard">داشبورد حرفه‌ای</option>
                          <option value="formula">فرمول‌نویسی پیشرفته</option>
                          <option value="automation">اتوماسیون سیستم‌ها</option>
                          <option value="training">آموزش تخصصی</option>
                          <option value="other">سایر</option>
                        </Field>
                        <ErrorMessage name="serviceType" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          توضیحات <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="textarea"
                          name="description"
                          rows={4}
                          className={`w-full px-4 py-2.5 rounded-lg border ${
                            errors.description && touched.description ? "border-red-300" : "border-gray-300"
                          } focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors outline-none text-gray-900 bg-white resize-none`}
                          placeholder="توضیحات کامل درخواست خود را بنویسید"
                        />
                        <ErrorMessage name="description" component="p" className="mt-1 text-sm text-red-500" />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "در حال ارسال..." : "ارسال درخواست"}
                      </motion.button>
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