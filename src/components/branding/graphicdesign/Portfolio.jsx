import React, { useState } from 'react';
import { ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Logos', 'Brochures', 'Posters', 'Packaging', 'Digital'];

  const projects = [
    {
      id: 1,
      title: "Tech Startup Logo",
      category: "Logos",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern logo design for innovative tech company"
    },
    {
      id: 2,
      title: "Restaurant Brochure",
      category: "Brochures",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Elegant tri-fold brochure for fine dining establishment"
    },
    {
      id: 3,
      title: "Music Festival Poster",
      category: "Posters",
      image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Vibrant poster design for summer music festival"
    },
    {
      id: 4,
      title: "Organic Product Packaging",
      category: "Packaging",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Eco-friendly packaging for organic food products"
    },
    {
      id: 5,
      title: "E-commerce Banner",
      category: "Digital",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Conversion-focused banner for online store"
    },
    {
      id: 6,
      title: "Healthcare Logo",
      category: "Logos",
      image: "https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional logo for medical practice"
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
            Our Creative <span className="text-[#78A52B]">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of stunning designs that have helped businesses
            across industries make their mark in the market.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="w-5 h-5 text-slate-400 mr-2" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#78A52B] text-white shadow-lg'
                  : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-white border border-slate-200 text-slate-600 hover:border-[#78A52B]/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#78A52B]/50 transition-all duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/40 backdrop-blur-sm">
                  <button className="bg-[#78A52B] hover:bg-[#6f9526] text-white p-3 rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-[#78A52B] text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">
            Ready to see your brand transformed?
          </p>
          <button className="bg-[#78A52B] hover:bg-[#6f9526] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
