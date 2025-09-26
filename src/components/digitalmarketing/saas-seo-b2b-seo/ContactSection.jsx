import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-lime-500/10 text-lime-400 px-4 py-2 rounded-full mb-6 border border-lime-500/20">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-lime-500">Scale Your Business</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Book a free strategy call and discover how our proven PPC methods can transform your lead generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Get Your Free PPC Audit</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Business Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Monthly Ad Spend</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-lime-500 focus:outline-none transition-colors">
                  <option className="bg-slate-800">$5K - $10K</option>
                  <option className="bg-slate-800">$10K - $25K</option>
                  <option className="bg-slate-800">$25K - $50K</option>
                  <option className="bg-slate-800">$50K+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your goals</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none transition-colors resize-none"
                  placeholder="What are your main objectives for PPC campaigns?"
                />
              </div>

              <button className="w-full bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-400 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                Get Free Audit Report
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Ready to transform your digital marketing? Our team of PPC experts is here to help you achieve your growth goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-lime-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-lime-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">hello@ppcpro.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-lime-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office</h4>
                  <p className="text-gray-300">New York, NY<br />San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-lime-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-lime-500" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Response Time</h4>
                  <p className="text-gray-300">Within 2 hours<br />Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
            </div>

            <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-lime-400 mb-2">🚀 Free Strategy Session</h4>
              <p className="text-gray-300">
                Book a 30-minute call with our PPC experts to discuss your goals and get actionable insights for your campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;