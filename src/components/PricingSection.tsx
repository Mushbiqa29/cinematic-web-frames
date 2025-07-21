import { Check, Star, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: "Essential",
    icon: Star,
    price: "299",
    description: "Perfect for personal portraits and small events",
    features: [
      "2-hour photography session",
      "1 location shooting",
      "Basic editing included",
      "30 high-resolution images",
      "Online gallery access",
      "Digital download"
    ],
    popular: false,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Professional",
    icon: Crown,
    price: "599",
    description: "Ideal for weddings and corporate events",
    features: [
      "4-hour photography session",
      "Multiple location shooting",
      "Advanced editing & retouching",
      "100+ high-resolution images",
      "Private online gallery",
      "Print-ready files",
      "USB drive delivery",
      "Social media optimized images"
    ],
    popular: true,
    color: "from-orange-500 to-pink-500"
  },
  {
    name: "Premium",
    icon: Zap,
    price: "999",
    description: "Complete package for luxury projects",
    features: [
      "Full day photography coverage",
      "Unlimited locations",
      "Professional editing suite",
      "200+ high-resolution images",
      "Premium gallery with slideshow",
      "Print packages included",
      "Same-day preview gallery",
      "Custom photo album",
      "Drone photography (if applicable)",
      "Second photographer option"
    ],
    popular: false,
    color: "from-yellow-500 to-orange-500"
  }
];

export const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-6" style={{
      background: 'linear-gradient(135deg, hsl(260, 85%, 6%) 0%, hsl(260, 50%, 15%) 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 luxframe-brand">
            PRICING PLANS
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Choose the perfect package for your photography needs. All plans include our signature LuxFrame quality.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl bg-white/10 backdrop-blur-sm border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-primary shadow-2xl shadow-primary/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="luxframe-cta px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Icon */}
              <div className="text-center mb-6">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                  <plan.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-white/70 text-sm mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-white/70 ml-2">/ session</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'luxframe-cta'
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
            <p className="text-white/80 mb-6">
              Every project is unique. Contact us for a personalized quote tailored to your specific needs.
            </p>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};