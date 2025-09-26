"use client";
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Play, 
  CheckCircle, 
  Video, 
  Palette, 
  Zap, 
  Film, 
  Camera, 
  Lightbulb,
  Users,
  Target,
  Settings,
  Star,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Eye
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import HeroSection from '@/components/animationvfx/HeroSection';


// import AboutUs from '@/components/animationvfx/AboutUs';
// import OurWork from '@/components/animationvfx/OurWork';
// import Service2 from '@/components/animationvfx/Service2';
// import VFXSection from '@/components/animationvfx/VFXSection';


export default function page() {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    videoType: '',
    message: ''
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animationStyles = [
    { icon: <Video className="w-8 h-8" />, title: "Explainer Videos", description: "Clear, engaging videos that explain complex concepts" },
    { icon: <Palette className="w-8 h-8" />, title: "2D Animation", description: "Beautiful flat design animations with smooth transitions" },
    { icon: <Zap className="w-8 h-8" />, title: "3D Animation", description: "Stunning three-dimensional visuals and characters" },
    { icon: <Film className="w-8 h-8" />, title: "VFX & Post Production", description: "Professional visual effects and post-production services" },
    { icon: <Camera className="w-8 h-8" />, title: "TV Commercials", description: "Broadcast-quality commercials for television and digital" },
  ];

  const services = [
    {
      icon: <Video className="w-12 h-12" />,
      title: "Explainer Videos",
      description: "Transform complex ideas into engaging visual stories that your audience will understand and remember.",
      features: ["Script Development", "Storyboard Creation", "Professional Voiceover", "Custom Animation"],
      number: "01"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Motion Graphic Animation",
      description: "Dynamic graphics and typography that bring data, concepts, and brands to life with stunning visual appeal.",
      features: ["Brand Integration", "Data Visualization", "Typography Animation", "Logo Animation"],
      number: "02"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Whiteboard Animation",
      description: "Engaging hand-drawn style animations that simplify complex topics with a personal, educational touch.",
      features: ["Hand-drawn Style", "Educational Content", "Step-by-step Reveals", "Custom Illustrations"],
      number: "03"
    },
    {
      icon: <Film className="w-12 h-12" />,
      title: "2D Animation",
      description: "Creative 2D animations with character design and storytelling that captivate audiences across all platforms.",
      features: ["Character Design", "Story Development", "Frame Animation", "Scene Composition"],
      number: "04"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "3D Animation",
      description: "Photorealistic 3D visuals and animations that bring products, characters, and environments to life.",
      features: ["3D Modeling", "Rigging & Animation", "Lighting & Rendering", "Texture Design"],
      number: "05"
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Live Action Video",
      description: "Professional video production services from concept to final delivery, including filming and post-production.",
      features: ["Pre-production Planning", "Professional Filming", "Post-Production Editing", "Color Grading"],
      number: "06"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Infographic Animation",
      description: "Transform static data and information into dynamic, animated infographics that engage and inform.",
      features: ["Data Visualization", "Chart Animation", "Icon Design", "Information Flow"],
      number: "07"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Screencast Videos",
      description: "High-quality screen recordings with professional editing for tutorials, software demos, and training content.",
      features: ["Screen Recording", "Callout Animations", "Professional Editing", "Audio Enhancement"],
      number: "08"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Typography Animation",
      description: "Dynamic text animations that bring words to life with creative motion and visual storytelling.",
      features: ["Kinetic Typography", "Text Effects", "Brand Integration", "Motion Design"],
      number: "09"
    }
  ];

  const portfolio = [
    {
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Tech Startup Explainer",
      category: "Explainer Video",
      description: "A compelling explainer video that helped increase conversions by 40%"
    },
    {
      image: "https://images.pexels.com/photos/7516360/pexels-photo-7516360.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Brand Motion Graphics",
      category: "Motion Graphics",
      description: "Dynamic brand animation package for social media campaigns"
    },
    {
      image: "https://images.pexels.com/photos/8134857/pexels-photo-8134857.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Product Demo 3D",
      category: "3D Animation",
      description: "Photorealistic 3D product visualization for e-commerce"
    },
    {
      image: "https://images.pexels.com/photos/7991582/pexels-photo-7991582.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Corporate Training",
      category: "Live Action",
      description: "Professional training video series for corporate onboarding"
    },
    {
      image: "https://images.pexels.com/photos/8134828/pexels-photo-8134828.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "App UI Animation",
      category: "Motion Graphics",
      description: "Smooth UI animations showcasing app functionality"
    },
    {
      image: "https://images.pexels.com/photos/7516349/pexels-photo-7516349.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Medical Explainer",
      category: "2D Animation",
      description: "Educational animation explaining complex medical procedures"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your goals, audience, and requirements to create the perfect video strategy."
    },
    {
      number: "02",
      title: "Scriptwriting & Storyboarding",
      description: "Our creative team develops compelling scripts and detailed storyboards to visualize your story."
    },
    {
      number: "03",
      title: "Design & Animation",
      description: "Professional designers and animators bring your vision to life with stunning visuals and smooth animations."
    },
    {
      number: "04",
      title: "Voiceover & Sound Design",
      description: "Professional voiceover artists and sound designers add the perfect audio layer to your video."
    },
    {
      number: "05",
      title: "Delivery & Revisions",
      description: "We deliver your final video and work with you on any revisions to ensure complete satisfaction."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team of Experts",
      description: "Our team includes talented animators, directors, editors, and scriptwriters with years of industry experience."
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Custom Approach",
      description: "Every project is tailored to meet your specific goals, timeline, and budget requirements."
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "End-to-End Solutions",
      description: "From concept development to final delivery, we handle every aspect of your video production."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (field) => (val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };


  const nextStyle = () => setCurrentStyleIndex((prev) => (prev + 1) % animationStyles.length);
  const prevStyle = () => setCurrentStyleIndex((prev) => (prev - 1 + animationStyles.length) % animationStyles.length);

  const getVisibleStyles = () => {
    const styles = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentStyleIndex + i + animationStyles.length) % animationStyles.length;
      styles.push({ ...animationStyles[index], offset: i, index });
    }
    return styles;
  };

  return (
    <>
<HeroSection/>
   <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 15}px`,
            top: `${mousePosition.y / 15}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 lg:px-12 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200 animate-pulse px-4 py-2">
              ✨ Professional Video Production Services
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
              Bring Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                Ideas
              </span>
              <br />
              to Life with Video
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional video production, animation, and VFX services that captivate audiences and deliver results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group font-bold relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  View Our Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white group">
                <Play className="mr-2 w-5 h-5 group-hover:text-white transition-colors" />
                Watch Demo Reel
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50">
     {/* Navigation buttons updated for responsiveness */}
<div className="relative max-w-6xl mx-auto flex items-center justify-between sm:justify-center gap-4 px-4 sm:px-0">
  <Button
    onClick={prevStyle}
    className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-full p-3 z-10 shadow-lg sm:absolute sm:left-0"
  >
    <ChevronLeft className="w-6 h-6 text-[#121d35]" />
  </Button>


  <div className="flex-1 overflow-hidden mx-2">
    <div className="flex items-center justify-center gap-6 transition-transform duration-500 ease-in-out">
      {/* Cards here */}
      {getVisibleStyles().map((style, index) => (
<div
    key={`${style.index}-${index}`}
    className={`flex-shrink-0 transition-all duration-500 ${
      style.offset === 0
        ? 'scale-110 opacity-100 z-10'
        : Math.abs(style.offset) === 1
        ? 'scale-95 opacity-80'
        : 'scale-85 opacity-40'
    }`}
    style={{
      transform: `translateX(${style.offset * 20}px) scale(${
        style.offset === 0 ? 1.1 : Math.abs(style.offset) === 1 ? 0.95 : 0.85
      })`,
      paddingBottom: style.offset === 0 ? '50px' : '0px' // ✅ add padding-bottom
    }}
  >
          <Card className="bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 w-72 sm:w-80 h-64">
            <CardContent className="p-8 text-center">
              <div className="text-blue-600 mb-6 flex justify-center">{style.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{style.title}</h3>
              <p className="text-gray-600 leading-relaxed">{style.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>

  <Button
    onClick={nextStyle}
    className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-full p-3 z-10 shadow-lg sm:absolute sm:right-0"
  >
    <ChevronRight className="w-6 h-6 text-[#121d35]" />
  </Button>
</div>



      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {animationStyles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStyleIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentStyleIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Production Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive video production services tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                  {service.number}
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-500 group-hover:text-gray-600 transition-colors">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              See Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest video production and animation projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="group cursor-pointer overflow-hidden bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white font-bold">
                    {item.category}
                  </Badge>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose InfoDazz Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">InfoDazz?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              How We Bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ideas to Life</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven 5-step process ensures your project exceeds expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Reach Out to Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Your Project</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch with our team today.
            </p>
          </div>
          
          <Card className="bg-white border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                   <Select value={formData.budget} onValueChange={(val) => setFormData(prev => ({ ...prev, budget: val }))}>
  <SelectTrigger>
    <SelectValue placeholder="Select Budget Range" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="5k-10k">$5K - $10K</SelectItem>
    <SelectItem value="10k-25k">$10K - $25K</SelectItem>
    <SelectItem value="25k-50k">$25K - $50K</SelectItem>
    <SelectItem value="50k+">$50K+</SelectItem>
  </SelectContent>
</Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video Type</label>
                  <Select value={formData.videoType} onValueChange={handleSelectChange("videoType")}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Video Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="explainer">Explainer Video</SelectItem>
                      <SelectItem value="motion-graphics">Motion Graphics</SelectItem>
                      <SelectItem value="whiteboard">Whiteboard Animation</SelectItem>
                      <SelectItem value="2d-animation">2D Animation</SelectItem>
                      <SelectItem value="3d-animation">3D Animation</SelectItem>
                      <SelectItem value="live-action">Live Action</SelectItem>
                      <SelectItem value="infographic">Infographic Animation</SelectItem>
                      <SelectItem value="screencast">Screencast Videos</SelectItem>
                      <SelectItem value="typography">Typography Animation</SelectItem>
                      <SelectItem value="commercial">TV Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                
                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-bold px-8">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
          </h2>
          
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 p-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Coming Soon!</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Have questions? We're preparing a helpful FAQ to guide you through our services. Stay tuned for detailed answers about our video production process, pricing, timelines, and more!
            </p>
          </Card>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="relative z-10 px-6 lg:px-12 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-200 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-white/50"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <Video className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Ready to Create Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Amazing?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's bring your vision to life with professional video production that engages audiences and drives results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-bold px-8">
                  GET IN TOUCH WITH OUR TEAM
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Schedule a Creative Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    </>
  )
}
