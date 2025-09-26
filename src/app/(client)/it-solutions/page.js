"use client";

import React from "react";
import Image from "next/image";
import itImage from "../../../../public/images/digitalmarketing/hdf34.webp"; // replace with actual
import {
    Code,
    Smartphone,
    Server,
    BarChart3,
    ClipboardList,
    Bot,
  } from "lucide-react"; // lucide-react must be installed
import Ctasectionbtm from "@/components/cta/landingpage/Ctasectionbtm";
import products from "@/data/products";


  const services = [
    {
      icon: <Code className="w-8 h-8 text-yellow-500" />,
      title: "Web Development",
      desc: "Custom web apps, portals, and CMS using Next.js, React, and Laravel.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
      title: "Mobile App Development",
      desc: "Cross-platform apps with smooth UI & optimized performance.",
    },
    {
      icon: <Server className="w-8 h-8 text-yellow-500" />,
      title: "Cloud & Infrastructure",
      desc: "Deployment, scaling, and DevOps automation across AWS, Vercel, and CPanel.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      title: "Digital Marketing Integration",
      desc: "SEO, SMM, SEM, and content strategies to amplify your presence.",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-yellow-500" />,
      title: "ERP/CRM Solutions",
      desc: "Tailored software systems to manage operations and customer lifecycles.",
    },
    {
      icon: <Bot className="w-8 h-8 text-yellow-500" />,
      title: "AI & Automation",
      desc: "Chatbot integration, smart forms, analytics, and predictive systems.",
    },
  ];


  const techStack = [
    "/images/itsolutions/nextjs.webp",
    "/images/itsolutions/react.png",
    "/images/itsolutions/laravel.jpg",
    "/images/itsolutions/nodejs.svg",
    "/images/itsolutions/mysql.svg",
    "/images/itsolutions/mongodb.webp",
    "/images/itsolutions/aws.png",
    "/images/itsolutions/firebase.png",
    "/images/itsolutions/tailwindcss.svg",
  ];

export default function Page() {
  return (
    <>
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-[#0c0c1d] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Full-Spectrum <span className="text-yellow-400">IT Solutions</span> to Elevate Your Brand
            </h1>
            <p className="text-gray-300">
              From web development to cloud and infrastructure, our tech stack empowers businesses with scalable, innovative, and efficient digital solutions tailored for success.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <Image src={itImage} alt="IT Solutions" className="rounded-md" />
          </div>
        </div>
      </div>
<section className="max-w-6xl mx-auto px-6 py-16">
<h2 className="text-3xl font-bold text-center mb-8">Why Choose Infodazz?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm text-gray-700">
  <div>
    <h4 className="font-semibold text-yellow-500 mb-2">Proven Expertise</h4>
    <p>Years of hands-on experience delivering tailored digital solutions across industries like healthcare, retail, education, and fintech.</p>
  </div>
  <div>
    <h4 className="font-semibold text-yellow-500 mb-2">Client-Centric Approach</h4>
    <p>Every solution is crafted around your unique business goals with flexible engagement models and transparent communication.</p>
  </div>
  <div>
    <h4 className="font-semibold text-yellow-500 mb-2">Agile & Scalable Delivery</h4>
    <p>Using agile methodologies, we adapt quickly to evolving project scopes and ensure timely, cost-effective delivery.</p>
  </div>
</div>
</section>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Offerings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
            <div
  key={idx}
  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 min-h-[220px] flex flex-col items-start justify-start cursor-pointer"
  data-aos="fade-up"
>
  {/* Icon First */}
  <div className="mb-3">
    {service.icon}
  </div>

  {/* Title Second */}
  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

  {/* Paragraph Third */}
  <p className="text-sm text-gray-600">{service.desc}</p>
</div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-yellow-400 text-black py-10 text-center">
        <h3 className="text-2xl font-bold mb-2">Looking for Reliable IT Partners?</h3>
        <p className="mb-4">Let’s collaborate to build your next big idea.</p>
        <a href="/connect-us" className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
          Get in Touch
        </a>
      </div>
    </section>


<section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Technology Stack</h2>
      <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
        We leverage modern frameworks and platforms to build robust, secure, and high-performance digital systems.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {techStack.map((src, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded shadow w-24 h-24 flex items-center justify-center hover:shadow-md transition"
          >
            <Image
              src={src}
              alt={`tech-icon-${idx}`}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>

<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-sm text-gray-700">
    <div className="p-4 bg-gray-50 rounded shadow">Healthcare</div>
    <div className="p-4 bg-gray-50 rounded shadow">Education</div>
    <div className="p-4 bg-gray-50 rounded shadow">Retail & eCommerce</div>
    <div className="p-4 bg-gray-50 rounded shadow">Finance</div>
    <div className="p-4 bg-gray-50 rounded shadow">Entertainment</div>
    <div className="p-4 bg-gray-50 rounded shadow">Real Estate</div>
    <div className="p-4 bg-gray-50 rounded shadow">Logistics</div>
    <div className="p-4 bg-gray-50 rounded shadow">Startups</div>
  </div>
</section>

{/* <section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-10">Real-World Solutions</h2>
  <div className="grid md:grid-cols-2 gap-8 text-gray-700">
    <div className="bg-white shadow p-6 rounded">
      <h4 className="text-xl font-semibold text-yellow-500 mb-2">Custom ERP for Gold Loan Company</h4>
      <p>Automated loan disbursement, collection, and reporting—cutting down manual work by 60% and improving customer service response time by 45%.</p>
    </div>
    <div className="bg-white shadow p-6 rounded">
      <h4 className="text-xl font-semibold text-yellow-500 mb-2">SEO-Driven E-Commerce Growth</h4>
      <p>Increased organic traffic by 3x within 6 months for a D2C brand using on-page SEO, content strategy, and social marketing automation.</p>
    </div>
  </div>
</section> */}

<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-10">Our Specialized Solutions</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
    
    {/* School Management System */}
    <a
      href="/it-solutions/products"
      className="bg-white p-6 shadow hover:shadow-md rounded-lg transition-all group cursor-pointer"
      data-aos="zoom-in"
    >
      <div className="flex flex-col items-center">
        <Image
          src="/images/itsolutions/ERP-automation.png"
          alt="School Management"
          width={64}
          height={64}
          className="mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition">School Management System</h3>
        <p className="text-sm text-gray-600">Complete digital platform for managing academics, attendance, fees, exams, and communication.</p>
      </div>
    </a>

    {/* Food Industry ERP */}
    <a
      href="/it-solutions/products"
      className="bg-white p-6 shadow hover:shadow-md rounded-lg transition-all group cursor-pointer"
      data-aos="zoom-in"
    >
      <div className="flex flex-col items-center">
        <Image
          src="/images/itsolutions/ERP-automation.png"
          alt="Food ERP"
          width={64}
          height={64}
          className="mb-4"
        />
        <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-500 transition">Food Industry ERP</h3>
        <p className="text-sm text-gray-600">Track raw materials, batch production, QA, inventory, and vendor billing in one centralized ERP.</p>
      </div>
    </a>
  </div>
</section>

{/* <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Our Specialized Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, idx) => (
          <a
            key={idx}
            href={product.link}
            className="group bg-white rounded-lg shadow hover:shadow-lg transition border hover:border-yellow-400 overflow-hidden"
            data-aos="fade-up"
          >
            <div className="relative h-52 w-full">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-yellow-500 group-hover:text-yellow-600">
                {product.title}
              </h3>
              <p className="text-gray-700 text-sm">{product.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>


<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-10">Comprehensive ERP Modules</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700">
    
    <div className="bg-white shadow p-5 rounded hover:shadow-md transition" data-aos="fade-up">
      <h4 className="text-lg font-semibold mb-2 text-yellow-500">Staff Management</h4>
      <p>Handle employee records, roles, departments, and hierarchy with biometric attendance integration.</p>
    </div>

    <div className="bg-white shadow p-5 rounded hover:shadow-md transition" data-aos="fade-up">
      <h4 className="text-lg font-semibold mb-2 text-yellow-500">Fingerprint Attendance</h4>
      <p>Integrate biometric fingerprint devices to track real-time employee check-in/out logs and ensure compliance.</p>
    </div>

    <div className="bg-white shadow p-5 rounded hover:shadow-md transition" data-aos="fade-up">
      <h4 className="text-lg font-semibold mb-2 text-yellow-500">Payroll System</h4>
      <p>Automate salary calculation, tax deduction, leave adjustments, and generate payslips with audit logs.</p>
    </div>

    <div className="bg-white shadow p-5 rounded hover:shadow-md transition" data-aos="fade-up">
      <h4 className="text-lg font-semibold mb-2 text-yellow-500">Stock Management</h4>
      <p>Track raw materials, packaging, finished goods, stock levels, expiry, and multi-location inventory.</p>
    </div>

    <div className="bg-white shadow p-5 rounded hover:shadow-md transition" data-aos="fade-up">
      <h4 className="text-lg font-semibold mb-2 text-yellow-500">Procurement Planning</h4>
      <p>Forecast material demand, set reorder points, and generate purchase orders based on production schedules.</p>
    </div>

    <div className="bg-white shadow p-5 rounded hover:shadow-md transition" data-aos="fade-up">
      <h4 className="text-lg font-semibold mb-2 text-yellow-500">Quotation & Invoicing</h4>
      <p>Create custom quotations, convert them into invoices, track payments, and auto-apply tax slabs.</p>
    </div>

    <div className="bg-white shadow p-5 rounded hover:shadow-md transition" data-aos="fade-up">
      <h4 className="text-lg font-semibold mb-2 text-yellow-500">Expense Management</h4>
      <p>Record operational and indirect expenses, attach receipts, and manage monthly budgeting efficiently.</p>
    </div>

    <div className="bg-white shadow p-5 rounded hover:shadow-md transition" data-aos="fade-up">
      <h4 className="text-lg font-semibold mb-2 text-yellow-500">GST Reports (GSTR-1/2/3B)</h4>
      <p>Generate compliant reports for outward, inward, and summary GST filings. Export GSTR in JSON/Excel.</p>
    </div>

  </div>
</section>


<section className="bg-[#f9fafb] py-16 px-6">
  <h2 className="text-3xl font-bold text-center mb-10">Client Feedback</h2>
  <div className="max-w-3xl mx-auto text-center text-gray-700">
    <blockquote>
      "Infodazz delivered our ERP system faster than expected. The process was smooth and transparent — and the result, outstanding!"
    </blockquote>
    <cite className="block mt-4 text-sm font-medium text-gray-500">— CTO, Logistics Startup</cite>
  </div>
</section> */}

<Ctasectionbtm/>

</>
  );
};

