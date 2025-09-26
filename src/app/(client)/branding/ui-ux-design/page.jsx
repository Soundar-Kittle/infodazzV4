"use client";

import React, { useState,useEffect } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Palette, 
  Users, 
  Search, 
  BarChart3, 
  Eye, 
  Heart, 
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Zap,
  Award,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react';

const page = () => {
     const [openFaq, setOpenFaq] = useState(null);
     const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay for UX (optional)
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-300 border-t-slate-800"></div>
      </div>
    );
  }


  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-lime-500" />,
      title: "Web UI/UX Design",
      description: "Create stunning, user-friendly websites that convert visitors into customers with intuitive navigation and beautiful interfaces."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-lime-500" />,
      title: "Mobile App Design",
      description: "Design native and cross-platform mobile applications with focus on usability, performance, and engaging user experiences."
    },
    {
      icon: <Palette className="w-8 h-8 text-lime-500" />,
      title: "Design Systems",
      description: "Build comprehensive design systems and style guides to ensure consistency across all your digital products and touchpoints."
    },
    {
      icon: <Users className="w-8 h-8 text-lime-500" />,
      title: "User Research",
      description: "Conduct in-depth user research, interviews, and usability testing to understand your audience and optimize experiences."
    },
    {
      icon: <Search className="w-8 h-8 text-lime-500" />,
      title: "UX Audits",
      description: "Comprehensive analysis of your existing digital products to identify pain points and opportunities for improvement."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-lime-500" />,
      title: "Conversion Optimization",
      description: "Optimize your user flows and interfaces to increase conversion rates and improve business metrics through data-driven design."
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We start by understanding your business goals, target audience, and market landscape through comprehensive research and stakeholder interviews."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Define user personas, create user journey maps, and establish design principles that align with your business objectives."
    },
    {
      step: "03",
      title: "Wireframing & Prototyping",
      description: "Create low and high-fidelity wireframes and interactive prototypes to visualize the user experience before development."
    },
    {
      step: "04",
      title: "Visual Design",
      description: "Apply your brand identity to create beautiful, accessible interfaces that resonate with your target audience."
    },
    {
      step: "05",
      title: "Testing & Iteration",
      description: "Conduct usability testing, gather feedback, and refine the design based on real user interactions and data."
    },
    {
      step: "06",
      title: "Delivery & Support",
      description: "Deliver production-ready design assets and provide ongoing support to ensure successful implementation."
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Platform Redesign",
      category: "Web Design",
      description: "Increased conversion rate by 40% through improved user experience and streamlined checkout process.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Banking Mobile App",
      category: "Mobile Design",
      description: "Designed intuitive mobile banking experience with enhanced security features and user-friendly interface.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Healthcare Dashboard",
      category: "Web Application",
      description: "Created comprehensive dashboard for healthcare professionals to manage patient data efficiently.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Food Delivery App",
      category: "Mobile Design",
      description: "Designed seamless food ordering experience with real-time tracking and personalized recommendations.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const tools = [
    { name: "Figma", category: "Design Tools" },
    { name: "Adobe XD", category: "Design Tools" },
    { name: "Sketch", category: "Design Tools" },
    { name: "InVision", category: "Prototyping" },
    { name: "Principle", category: "Prototyping" },
    { name: "Framer", category: "Prototyping" },
    { name: "Hotjar", category: "Analytics" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Mixpanel", category: "Analytics" },
    { name: "Miro", category: "Collaboration" },
    { name: "Slack", category: "Collaboration" },
    { name: "Notion", category: "Collaboration" }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-lime-500" />,
      title: "Increased Conversions",
      description: "Well-designed interfaces can increase conversion rates by up to 200%",
      metric: "200%"
    },
    {
      icon: <Clock className="w-8 h-8 text-lime-500" />,
      title: "Reduced Development Time",
      description: "Clear designs and prototypes reduce development time and costs",
      metric: "50%"
    },
    {
      icon: <Users className="w-8 h-8 text-lime-500" />,
      title: "Better User Retention",
      description: "Intuitive UX keeps users engaged and coming back for more",
      metric: "75%"
    },
    {
      icon: <Award className="w-8 h-8 text-lime-500" />,
      title: "Brand Credibility",
      description: "Professional design builds trust and credibility with your audience",
      metric: "90%"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Infodaxx transformed our digital presence completely. Their UI/UX expertise helped us increase user engagement by 150% within just 3 months."
    },
    {
      name: "Michael Chen",
      position: "Product Manager, InnovateLabs",
      avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The team's attention to detail and user-centered approach resulted in a mobile app that our customers absolutely love. Highly recommended!"
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, GreenTech Solutions",
      avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with Infodaxx was a game-changer. They understood our vision and delivered a design that exceeded our expectations in every way."
    }
  ];

  const faqs = [
    {
      question: "How long does a typical UI/UX project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website redesign might take 4-6 weeks, while a comprehensive mobile app design can take 8-12 weeks. We'll provide a detailed timeline after understanding your requirements."
    },
    {
      question: "Do you provide development services as well?",
      answer: "While we specialize in UI/UX design, we have trusted development partners we can recommend. We also provide detailed design specifications and assets to ensure smooth handoff to your development team."
    },
    {
      question: "What's included in your design deliverables?",
      answer: "Our deliverables typically include user research reports, wireframes, high-fidelity mockups, interactive prototypes, design systems, style guides, and production-ready assets. We tailor deliverables based on your specific needs."
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer: "Absolutely! We excel at working within existing brand frameworks while enhancing the user experience. We can also help evolve your brand guidelines if needed to better serve your digital presence."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide ongoing support and can help with iterative improvements based on user feedback and analytics data. We believe in long-term partnerships and continuous optimization."
    }
  ];
  return (

         <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2384CC16%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-lime-500/10 text-lime-400 px-4 py-2 rounded-full mb-8 border border-lime-500/20">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Transform Your Digital Experience</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Exceptional <span className="text-lime-500">UI/UX Design</span> That Drives Results
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We create intuitive, beautiful, and conversion-focused digital experiences that your users will love. 
            From concept to launch, we deliver designs that make a lasting impact.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-400 transition-all duration-300 flex items-center gap-2 text-lg">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-lime-500 text-lime-500 px-8 py-4 rounded-lg font-semibold hover:bg-lime-500 hover:text-slate-900 transition-all duration-300 text-lg">
              View Our Work
            </button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-lime-500">150+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-lime-500">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-lime-500">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-lime-500">40+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-lime-500">UI/UX Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive UI/UX design services to help you create digital experiences that delight your users and drive business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section id="process" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-lime-500">Design Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven, systematic approach to ensure every project delivers exceptional results and meets your business objectives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-lime-500 transition-all duration-300 h-full">
                  <div className="text-6xl font-bold text-lime-500/20 mb-4 group-hover:text-lime-500/40 transition-colors">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-lime-500">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <button className="text-lime-500 hover:text-lime-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Tools & <span className="text-lime-500">Technologies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading tools and technologies to deliver cutting-edge designs and seamless user experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-lime-50 hover:border-lime-200 border border-gray-100 transition-all duration-300 group">
                <div className="font-semibold text-slate-800 mb-2 group-hover:text-lime-600">{tool.name}</div>
                <div className="text-sm text-gray-500">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gradient-to-r from-lime-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Benefits of Good <span className="text-lime-500">UI/UX Design</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investing in professional UI/UX design delivers measurable business results and competitive advantages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-4xl font-bold text-lime-500 mb-4">+{benefit.metric}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Client <span className="text-lime-500">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Frequently Asked <span className="text-lime-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our UI/UX design services and process.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-semibold text-slate-800 text-lg">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-lime-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-lime-500">Digital Experience?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create exceptional UI/UX designs that will elevate your brand and delight your users. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-400 transition-all duration-300 flex items-center gap-2 text-lg">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-lime-500 text-lime-500 px-8 py-4 rounded-lg font-semibold hover:bg-lime-500 hover:text-slate-900 transition-all duration-300 text-lg">
              View Pricing Plans
            </button>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 Infodaxx. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default page