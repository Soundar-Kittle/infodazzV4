'use client'

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Palette, 
  Users, 
  Zap, 
  Target, 
  Lightbulb, 
  Code, 
  Smartphone, 
  Monitor, 
  Figma, 
  Chrome, 
  Layers, 
  TrendingUp, 
  Clock, 
  Award, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  CheckCircle,
  Eye,
  Heart,
  Sparkles
} from 'lucide-react';

const faqs = [
  {
    question: "What's included in your UI/UX design process?",
    answer: "Our comprehensive process includes user research, wireframing, prototyping, visual design, usability testing, and design system creation. We ensure every step is collaborative and transparent."
  },
  {
    question: "How long does a typical UI/UX project take?",
    answer: "Project timelines vary based on scope, but most projects range from 4-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
  },
  {
    question: "Do you work with existing development teams?",
    answer: "Absolutely! We seamlessly integrate with your existing development team, providing detailed design specifications, assets, and ongoing support to ensure smooth implementation."
  },
  {
    question: "Can you redesign our existing application?",
    answer: "Yes, we specialize in redesigning existing applications. We conduct thorough audits, identify pain points, and create solutions that improve user experience while maintaining your brand identity."
  },
  {
    question: "What tools do you use for design and collaboration?",
    answer: "We primarily use Figma for design, which allows real-time collaboration. We also utilize tools like Miro for workshops, Principle for prototyping, and Slack for communication."
  }
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechFlow",
    content: "The UI/UX transformation was incredible. Our user engagement increased by 240% and customer satisfaction scores reached an all-time high.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Michael Rodriguez",
    role: "CEO at StartupHub",
    content: "Their storytelling approach to design helped us communicate our value proposition clearly. The results speak for themselves - 180% increase in conversions.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Emily Parker",
    role: "Marketing Director at InnovateCo",
    content: "The team didn't just design interfaces, they crafted experiences that tell our brand story. Our user retention improved by 160%.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export default function page() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [loading, setLoading] = useState(true);



  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

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


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <span className="text-sm font-medium">Award-winning UI/UX Design</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            We Craft Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              Stories That Convert
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Transform your digital presence with UI/UX design that doesn't just look beautiful—it tells your story, 
            connects with users, and drives measurable results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2">
              <Play className="h-6 w-6" />
              Watch Our Story
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20 flex items-center gap-2">
              View Portfolio
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-lg opacity-80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-lg opacity-80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">250%</div>
              <div className="text-lg opacity-80">Avg. Conversion Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our UI/UX Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine strategic thinking with creative execution to deliver experiences 
              that engage, convert, and inspire loyalty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Brand Identity Design",
                description: "Create cohesive visual identities that reflect your brand story and resonate with your target audience.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Mobile App Design",
                description: "Design intuitive mobile experiences that users love to interact with, optimized for engagement and retention.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Monitor className="h-8 w-8" />,
                title: "Web Application Design",
                description: "Build compelling web interfaces that guide users through meaningful journeys and drive conversions.",
                gradient: "from-green-500 to-teal-500"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "User Research & Testing",
                description: "Understand your users deeply through research, interviews, and usability testing to inform design decisions.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: <Layers className="h-8 w-8" />,
                title: "Design Systems",
                description: "Create scalable design systems that ensure consistency and efficiency across all digital touchpoints.",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Conversion Optimization",
                description: "Optimize user flows and interfaces to maximize conversions and achieve your business objectives.",
                gradient: "from-yellow-500 to-orange-500"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that transforms complex problems into elegant solutions through 
              collaboration, iteration, and user-centered thinking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Research",
                  description: "We dive deep into understanding your users, business goals, and market landscape through comprehensive research and stakeholder interviews.",
                  icon: <Eye className="h-6 w-6" />
                },
                {
                  step: "02", 
                  title: "Strategy & Planning",
                  description: "Transform insights into actionable strategies, defining user personas, journey maps, and design requirements that align with your objectives.",
                  icon: <Target className="h-6 w-6" />
                },
                {
                  step: "03",
                  title: "Design & Prototype",
                  description: "Create wireframes, interactive prototypes, and high-fidelity designs that bring your vision to life with pixel-perfect precision.",
                  icon: <Lightbulb className="h-6 w-6" />
                },
                {
                  step: "04",
                  title: "Test & Iterate",
                  description: "Validate designs through user testing, gather feedback, and refine the experience to ensure optimal usability and effectiveness.",
                  icon: <CheckCircle className="h-6 w-6" />
                }
              ].map((process, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                      {process.step}
                    </div>
                    {index < 3 && <div className="w-0.5 h-16 bg-gradient-to-b from-blue-600 to-purple-600 opacity-30"></div>}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                        {process.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{process.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Design Process"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Case Studies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Portfolio & Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real projects, real results. See how we've helped businesses transform their digital presence 
              and achieve measurable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Platform Redesign",
                client: "RetailMax",
                results: "+340% Conversion Rate",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                tags: ["E-commerce", "Mobile-First", "Conversion Optimization"]
              },
              {
                title: "SaaS Dashboard Experience",
                client: "DataFlow Pro",
                results: "+280% User Engagement", 
                image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
                tags: ["SaaS", "Data Visualization", "User Experience"]
              },
              {
                title: "Healthcare Mobile App",
                client: "HealthTech Solutions",
                results: "+450% User Retention",
                image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
                tags: ["Healthcare", "Mobile App", "Accessibility"]
              },
              {
                title: "Fintech Web Application",
                client: "InvestWise",
                results: "+200% User Acquisition",
                image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
                tags: ["Fintech", "Security", "User Trust"]
              }
            ].map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.results}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.client}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We use industry-leading tools and cutting-edge technologies to create designs that are 
              both beautiful and technically sound.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Figma", icon: <Figma className="h-8 w-8" />, color: "text-purple-600" },
              { name: "Adobe XD", icon: <Layers className="h-8 w-8" />, color: "text-pink-600" },
              { name: "Sketch", icon: <Code className="h-8 w-8" />, color: "text-orange-600" },
              { name: "Principle", icon: <Play className="h-8 w-8" />, color: "text-blue-600" },
              { name: "Framer", icon: <Zap className="h-8 w-8" />, color: "text-indigo-600" },
              { name: "InVision", icon: <Eye className="h-8 w-8" />, color: "text-red-600" },
              { name: "Miro", icon: <Target className="h-8 w-8" />, color: "text-yellow-600" },
              { name: "Hotjar", icon: <TrendingUp className="h-8 w-8" />, color: "text-green-600" },
              { name: "Maze", icon: <Users className="h-8 w-8" />, color: "text-teal-600" },
              { name: "Notion", icon: <Lightbulb className="h-8 w-8" />, color: "text-gray-600" },
              { name: "Slack", icon: <Users className="h-8 w-8" />, color: "text-purple-600" },
              { name: "Chrome DevTools", icon: <Chrome className="h-8 w-8" />, color: "text-blue-600" }
            ].map((tool, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mb-4">
                  <div className={`${tool.color} group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                    {tool.icon}
                  </div>
                </div>
                <p className="text-gray-700 font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Good UI/UX */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why UI/UX Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Great design isn't just about aesthetics—it's about creating meaningful connections 
              that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="UI/UX Benefits"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6 text-green-600" />,
                  title: "Increased Conversions",
                  stat: "Up to 400%",
                  description: "Well-designed user experiences guide visitors toward desired actions, significantly boosting conversion rates and revenue."
                },
                {
                  icon: <Heart className="h-6 w-6 text-red-600" />,
                  title: "Higher User Engagement", 
                  stat: "300% Average",
                  description: "Intuitive interfaces and compelling interactions keep users engaged longer, reducing bounce rates and increasing satisfaction."
                },
                {
                  icon: <Clock className="h-6 w-6 text-blue-600" />,
                  title: "Faster Development",
                  stat: "50% Time Saved",
                  description: "Clear design systems and prototypes streamline development, reducing iterations and accelerating time-to-market."
                },
                {
                  icon: <Award className="h-6 w-6 text-purple-600" />,
                  title: "Brand Differentiation",
                  stat: "85% Recognition",
                  description: "Distinctive design creates memorable brand experiences that set you apart from competitors and build loyalty."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                      <span className="text-lg font-bold text-orange-600">{benefit.stat}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it—hear from the businesses we've helped transform 
              their digital presence and achieve remarkable growth.
            </p>
          </div>
          
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
            <div className="relative">
              <div className="flex items-center justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-medium text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-4 border-white/20"
                />
                <div className="text-center">
                  <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-white/80">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get answers to common questions about our UI/UX design process and services.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Story?
          </h2>
          <p className="text-xl mb-12 leading-relaxed opacity-90">
            Let's create a digital experience that not only looks amazing but drives real results for your business. 
            Your users are waiting for a better experience—let's give it to them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20">
              Schedule a Call
            </button>
          </div>
          
          <div className="text-center opacity-80">
            <p className="text-lg mb-4">🎉 Limited Time: Free UX audit with every project</p>
            <p className="text-sm">Join 500+ satisfied clients who've transformed their digital presence</p>
          </div>
        </div>
      </section>
    </div>
  );
}
