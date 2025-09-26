"use client";
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause,
  Film,
  Palette,
  Zap,
  Users,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  Clock,
  Shield,
  Video,
  Layers,
  Sparkles,
  MousePointer,
  Gamepad2,
  Building,
  Heart,
  Eye,
} from 'lucide-react';

const page = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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

  const animationTypes = [
    {
      icon: <Video className="w-8 h-8 text-purple-500" />,
      title: "2D Character Animation",
      description: "Bring characters to life with smooth, expressive 2D animations perfect for explainer videos, commercials, and storytelling.",
      features: ["Character Design", "Rigging & Animation", "Lip Sync", "Motion Graphics"]
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-500" />,
      title: "3D Modeling & Animation",
      description: "Create stunning 3D visuals with realistic modeling, texturing, and animation for products, architecture, and entertainment.",
      features: ["3D Modeling", "Texturing", "Lighting", "Rendering"]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-pink-500" />,
      title: "Motion Graphics",
      description: "Dynamic motion graphics and visual effects that captivate audiences and enhance your brand messaging.",
      features: ["Logo Animation", "Kinetic Typography", "Visual Effects", "Transitions"]
    },
    {
      icon: <MousePointer className="w-8 h-8 text-green-500" />,
      title: "UI/UX Animation",
      description: "Micro-interactions and interface animations that improve user experience and engagement in digital products.",
      features: ["Micro-interactions", "Loading Animations", "Hover Effects", "Page Transitions"]
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-red-500" />,
      title: "Game Animation",
      description: "Character animations, environmental effects, and interactive elements for games and interactive media.",
      features: ["Character Rigs", "Idle Animations", "Combat Moves", "Environmental FX"]
    },
    {
      icon: <Building className="w-8 h-8 text-indigo-500" />,
      title: "Architectural Visualization",
      description: "Photorealistic 3D architectural animations and walkthroughs for real estate and construction projects.",
      features: ["3D Walkthroughs", "Interior Design", "Lighting Simulation", "Virtual Tours"]
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Concept & Requirements",
      description: "We discuss your vision, target audience, and project goals to create a detailed brief and timeline.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Storyboard & Design",
      description: "Create detailed storyboards, character designs, and style frames to visualize the final animation.",
      icon: <Film className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Asset Creation",
      description: "Develop all necessary assets including characters, backgrounds, props, and 3D models.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Animation Production",
      description: "Bring everything to life with smooth animations, timing, and professional motion principles.",
      icon: <Play className="w-6 h-6" />
    },
    {
      step: "05",
      title: "Post-Production",
      description: "Add sound effects, music, color correction, and final polish to create the finished product.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: "06",
      title: "Delivery & Revisions",
      description: "Deliver the final animation with support for revisions and multiple format exports.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const portfolio = [
    {
      title: "Corporate Explainer Video",
      category: "2D Animation",
      description: "Engaging 2D animated explainer video that increased client conversion rates by 45%.",
      thumbnail: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "2:30",
      type: "explainer"
    },
    {
      title: "Product Visualization",
      category: "3D Animation",
      description: "Photorealistic 3D product animation showcasing features and functionality.",
      thumbnail: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "1:45",
      type: "product"
    },
    {
      title: "Brand Logo Animation",
      category: "Motion Graphics",
      description: "Dynamic logo animation with modern transitions and visual effects.",
      thumbnail: "https://images.pexels.com/photos/7688340/pexels-photo-7688340.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "0:15",
      type: "logo"
    },
    {
      title: "Character Animation Reel",
      category: "2D Animation",
      description: "Expressive character animations with personality and smooth motion.",
      thumbnail: "https://images.pexels.com/photos/7688339/pexels-photo-7688339.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "3:20",
      type: "character"
    },
    {
      title: "Architectural Walkthrough",
      category: "3D Animation",
      description: "Immersive 3D architectural visualization with realistic lighting and materials.",
      thumbnail: "https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "4:15",
      type: "architectural"
    },
    {
      title: "UI Animation Showcase",
      category: "UI/UX Animation",
      description: "Smooth micro-interactions and interface animations for mobile app.",
      thumbnail: "https://images.pexels.com/photos/7688341/pexels-photo-7688341.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "1:30",
      type: "ui"
    }
  ];

  const beforeAfter = [
    {
      title: "E-learning Platform Animation",
      before: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Transformed static educational content into engaging animated lessons, increasing student engagement by 60%."
    },
    {
      title: "Product Demo Enhancement",
      before: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Converted basic product photos into dynamic 3D animations, resulting in 35% higher conversion rates."
    },
    {
      title: "Brand Identity Animation",
      before: "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/7688340/pexels-photo-7688340.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Elevated static brand elements into memorable animated experiences that increased brand recall by 50%."
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      position: "Marketing Director, TechCorp",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The animation quality exceeded our expectations. Our explainer video has become our most effective marketing tool, generating 3x more leads than our previous static content."
    },
    {
      name: "Sarah Chen",
      position: "Creative Director, BrandStudio",
      avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Working with this team was incredible. They brought our characters to life in ways we never imagined. The attention to detail and smooth animations are outstanding."
    },
    {
      name: "Michael Rodriguez",
      position: "CEO, StartupXYZ",
      avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The 3D product visualization helped us secure major investors. The photorealistic quality and smooth animations perfectly showcased our product's potential."
    },
    {
      name: "Emma Wilson",
      position: "UX Designer, AppFlow",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The UI animations they created transformed our app experience. User engagement increased by 40% after implementing their micro-interactions and transitions."
    }
  ];

  const faqs = [
    {
      question: "What's the difference between 2D and 3D animation?",
      answer: "2D animation involves creating movement in a two-dimensional space using traditional frame-by-frame techniques or digital tools. It's great for explainer videos, character animation, and motion graphics. 3D animation creates movement in three-dimensional space with depth, allowing for more realistic visuals, product demonstrations, and architectural visualizations."
    },
    {
      question: "How long does it take to create an animated video?",
      answer: "Timeline depends on complexity and length. A simple 30-second 2D animation might take 2-3 weeks, while a complex 3D animation could take 6-8 weeks or more. We provide detailed timelines after understanding your specific requirements during the consultation phase."
    },
    {
      question: "What do you need from me to get started?",
      answer: "We need your project brief, target audience information, preferred style references, script or storyboard ideas, brand guidelines, and any existing assets. The more information you provide, the better we can tailor the animation to your needs."
    },
    {
      question: "Can you create animations in different styles?",
      answer: "Absolutely! We work in various styles including flat design, realistic 3D, cartoon, minimalist, corporate, hand-drawn, motion graphics, and more. We adapt our approach to match your brand and project requirements."
    },
    {
      question: "Do you provide voiceover and sound design?",
      answer: "Yes, we offer complete audio production including professional voiceover recording, sound effects, background music, and audio mixing. We can work with your preferred voice talent or recommend professionals from our network."
    },
    {
      question: "What formats do you deliver the final animation in?",
      answer: "We deliver in multiple formats optimized for your intended use: MP4 for web and social media, MOV for professional use, GIF for web animations, and other formats as needed. We also provide different resolutions and aspect ratios for various platforms."
    }
  ];

 const togglePlay = (id) => {
    setIsPlaying(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23A855F7%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full mb-8 border border-purple-500/20 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Bring Your Ideas to Life</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse">2D & 3D Animation</span> Services
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into captivating animated experiences. From character animation to product visualization, 
            we create stunning animations that engage audiences and drive results.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 text-lg transform hover:scale-105">
              <Play className="w-5 h-5" />
              Start Your Animation
            </button>
            <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg transform hover:scale-105">
              View Portfolio
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-400 animate-pulse">500+</div>
              <div className="text-gray-400">Animations Created</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-400 animate-pulse">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-400 animate-pulse">7+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-400 animate-pulse">100+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Animation?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Animation is one of the most powerful tools for storytelling, marketing, and communication. 
              Here's why businesses choose animated content over static alternatives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Higher Engagement</h3>
                <p className="text-gray-600">Animated content receives 1200% more shares than text and images combined</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Better Conversion</h3>
                <p className="text-gray-600">Landing pages with videos convert 80% better than those without</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Emotional Connection</h3>
                <p className="text-gray-600">Animation creates stronger emotional bonds with your audience</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Clear Communication</h3>
                <p className="text-gray-600">Complex ideas become simple and memorable through animation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Animation Videos */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Types of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Animation Videos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in various animation styles and techniques to bring your vision to life, 
              from simple 2D graphics to complex 3D visualizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animationTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                <div className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Samples */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent animation projects and see how we've helped businesses tell their stories through motion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => togglePlay(project.type)}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      {isPlaying[project.type] ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {project.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design & Order Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Design Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven step-by-step process to ensure your animation project exceeds expectations 
              and delivers results on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl font-bold text-purple-500/20 group-hover:text-purple-500/40 transition-colors">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Before & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">After</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the dramatic transformation from static content to engaging animated experiences 
              and the impact on our clients' business metrics.
            </p>
          </div>

          <div className="space-y-16">
            {beforeAfter.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">{project.title}</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold mb-4">
                        Before
                      </span>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src={project.before} 
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold mb-4">
                        After
                      </span>
                    </div>
                    <div className="aspect-video rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src={project.after} 
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about our animation services 
              and the results they've achieved.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-8">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-bold text-slate-800 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].position}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our animation services, process, and pricing.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="font-semibold text-slate-800 text-lg pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-500 transform rotate-180 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23A855F7%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 border border-purple-400/30 rounded-full animate-spin opacity-60" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-pink-400/30 rounded-full animate-spin opacity-60" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-blue-400/30 rounded-full animate-spin opacity-60" style={{ animationDuration: '25s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full mb-8 border border-purple-500/20 animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Bring Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vision to Life</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into stunning animations? Get started with a free consultation 
            and discover how animation can elevate your brand and engage your audience.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 text-lg transform hover:scale-105">
              <Play className="w-5 h-5" />
              Start Your Animation Project
            </button>
            <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-lg transform hover:scale-105">
              Get Free Quote
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="font-semibold text-lg">Quick Turnaround</div>
              <div className="text-gray-400 text-sm">Fast delivery without compromising quality</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="font-semibold text-lg">100% Satisfaction</div>
              <div className="text-gray-400 text-sm">Unlimited revisions until you're happy</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="font-semibold text-lg">Professional Quality</div>
              <div className="text-gray-400 text-sm">Industry-leading animation standards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page