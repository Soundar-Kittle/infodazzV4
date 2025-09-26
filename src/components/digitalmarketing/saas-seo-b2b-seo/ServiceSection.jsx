import { Target, TrendingUp, Users, BarChart3, Zap, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "PPC Campaign Management",
      description: "Strategic Google Ads and Microsoft Ads campaigns that maximize ROI and drive qualified leads to your business."
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "Data-driven landing page optimization and A/B testing to increase conversion rates by up to 300%."
    },
    {
      icon: Users,
      title: "Audience Targeting",
      description: "Advanced audience segmentation and remarketing strategies to reach your ideal customers at the right time."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive performance tracking with custom dashboards and weekly insights to measure success."
    },
    {
      icon: Zap,
      title: "Lead Generation",
      description: "Automated lead nurturing systems that convert prospects into paying customers with minimal effort."
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Monitor and protect your brand reputation across all digital channels with proactive management."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete <span className="text-primary">PPC Solutions</span> for B2B Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we handle every aspect of your digital marketing campaigns to deliver measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;