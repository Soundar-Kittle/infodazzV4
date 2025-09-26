// app/[slug]/page.jsx (Next.js App Router example)
import { Palette, Layers, ArrowRight, Zap, Target, Users, Award } from "lucide-react";

// Data can come from API, DB, or getStaticProps/getServerSideProps
const seoContent = {
  tag: "⚡ Tailored SEO Pages",
  title: "Professional <span class='text-lime-500'>[Service/Industry]</span> Solutions",
  description: "Boost your online presence with our expert [service/industry] solutions. Optimized for performance, user experience, and conversions.",
  ctaPrimary: "Get Started Today",
  ctaSecondary: "See Case Studies",
  stats: [
    { value: "200+", label: "Projects Delivered" },
    { value: "99%", label: "Client Retention" },
    { value: "7+", label: "Years Experience" },
    { value: "60+", label: "Active Clients" },
  ],
};

const services = [
  {
    icon: <Palette className="w-8 h-8 text-white" />,
    title: "Creative Design",
    desc: "Unique and innovative designs that capture your brand's essence",
  },
  {
    icon: <Layers className="w-8 h-8 text-white" />,
    title: "Brand Identity",
    desc: "Complete brand packages from logos to style guides",
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Fast Delivery",
    desc: "Quick turnaround times without compromising on quality",
  },
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "Strategic Approach",
    desc: "Data-driven designs that align with your business goals",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Collaborative Process",
    desc: "Work closely with our team throughout the design journey",
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: "Award-Winning",
    desc: "Recognized excellence in graphic design and branding",
  },
];

const page = () => {
  return (
    <>
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2384CC16%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-lime-500/10 text-lime-400 px-4 py-2 rounded-full mb-8 border border-lime-500/20">
          <Zap className="w-4 h-4" />
          <span
            className="text-sm font-medium"
            dangerouslySetInnerHTML={{ __html: seoContent.tag }}
          />
        </div>
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: seoContent.title }}
        />

      
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {seoContent.description}
        </p>

       
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-lime-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-lime-400 transition-all duration-300 flex items-center gap-2 text-lg">
            {seoContent.ctaPrimary}
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-lime-500 text-lime-500 px-8 py-4 rounded-lg font-semibold hover:bg-lime-500 hover:text-slate-900 transition-all duration-300 text-lg">
            {seoContent.ctaSecondary}
          </button>
        </div>

       
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {seoContent.stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-lime-500">{s.value}</div>
              <div className="text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="bg-white text-slate-900 py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left: Icon / Image Card */}
    <div className="bg-gray-50 rounded-2xl shadow-xl p-12 flex flex-col items-center justify-center text-center">
      <img
        src="/icons/logo-design.svg" // Replace with your icon/image
        alt="Logo Design Showcase"
        className="w-16 h-16 mb-6"
      />
      <h3 className="text-xl font-semibold">Logo Design Showcase</h3>
      <p className="text-gray-500 mt-2">
        Professional logo designs and brand mockups
      </p>
    </div>

    {/* Right: Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Why a Great Logo <span className="text-purple-600">Matters</span>
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Your logo is the face of your brand — the first thing people notice
        and remember. A well-designed logo builds recognition, trust, and
        sets the tone for every interaction to follow.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        From concept development to final delivery, our team works closely
        with you to understand your vision, values, and audience. We translate
        these into a visual identity that communicates your brand story
        with clarity and beauty.
      </p>

      {/* What You Get */}
      <h3 className="font-semibold mb-4">What You Get:</h3>
      <ul className="space-y-3 text-gray-700">
        <li>✔ Modern, timeless logo concepts tailored to your brand</li>
        <li>✔ Multiple design directions and iteration rounds</li>
        <li>✔ Delivery in all major file formats (SVG, PNG, EPS, PDF)</li>
        <li>✔ Brand guidelines and usage instructions</li>
        <li>✔ Unlimited revisions until you’re 100% satisfied</li>
      </ul>

      {/* CTA Button */}
      <button className="mt-8 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 transition-all duration-300 flex items-center gap-2">
        Start Your Project →
      </button>
    </div>
  </div>
</section>

<section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          Why Choose Our <span className="text-lime-600">Design Services</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We combine artistic vision with strategic thinking to create designs
          that not only look stunning but also drive results for your business.
        </p>
      </div>

      {/* Grid of Boxes */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow hover:shadow-lg transition-all border border-gray-100 text-left"
          >
            <div className="w-12 h-12 rounded-lg bg-lime-600 flex items-center justify-center mb-6">
              {s.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>


    
<section className="bg-white text-slate-900 py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <img
      src="/images/seo-strategy.png"
      alt="SEO Strategy"
      className="rounded-xl shadow-lg"
    />
    <div>
      <h2 className="text-3xl font-bold mb-4">Tailored SEO Strategy</h2>
      <p className="text-lg text-gray-600 mb-6">
        We build data-driven SEO campaigns customized to your business, 
        helping you rank higher and attract the right audience.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li>✔ Keyword & competitor analysis</li>
        <li>✔ Technical SEO audits</li>
        <li>✔ Content optimization roadmap</li>
      </ul>
    </div>
  </div>
</section>

<section className="bg-gray-50 text-slate-900 py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-3xl font-bold mb-4">Conversion-Focused Design</h2>
      <p className="text-lg text-gray-600 mb-6">
        SEO gets you traffic, but design converts. Our UI/UX experts 
        optimize every page for user engagement and conversion.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li>✔ Modern, responsive layouts</li>
        <li>✔ Optimized user journeys</li>
        <li>✔ A/B tested CTAs</li>
      </ul>
    </div>
    <img
      src="/images/conversion-design.png"
      alt="Conversion Design"
      className="rounded-xl shadow-lg"
    />
  </div>
</section>

<section className="bg-white text-slate-900 py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <img
      src="/images/reporting-analytics.png"
      alt="Analytics Dashboard"
      className="rounded-xl shadow-lg"
    />
    <div>
      <h2 className="text-3xl font-bold mb-4">Transparent Reporting</h2>
      <p className="text-lg text-gray-600 mb-6">
        Stay informed with clear reports and dashboards that show exactly 
        how your SEO investment drives results.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li>✔ Keyword ranking updates</li>
        <li>✔ Organic traffic growth</li>
        <li>✔ ROI-driven insights</li>
      </ul>
    </div>
  </div>
</section>
</>

  );
};

export default page;
