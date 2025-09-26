import { CheckCircle, ArrowRight } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Increase qualified leads by 250% in 90 days",
    "Reduce cost-per-acquisition by up to 40%",
    "24/7 campaign monitoring and optimization",
    "Dedicated account manager and support team",
    "Custom reporting and performance insights",
    "30-day money-back guarantee"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 border border-primary/20">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Proven Results That <span className="text-primary">Drive Growth</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We don't just run ads – we build comprehensive growth systems that scale with your business. 
              Our data-driven approach ensures every dollar spent delivers maximum return.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 text-lg">
              Get Your Free Audit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-card/50 p-6 rounded-xl border border-border/50">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-card-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;