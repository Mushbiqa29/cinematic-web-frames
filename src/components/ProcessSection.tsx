import { MessageCircle, Calendar, Camera, Image, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: "Consultation",
    description: "We discuss your vision, requirements, and creative goals to understand exactly what you're looking for.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Calendar,
    title: "Planning",
    description: "We schedule your session and plan every detail, from location to lighting to ensure perfect results.",
    color: "from-pink-500 to-orange-500"
  },
  {
    icon: Camera,
    title: "Capture",
    description: "Our professional photography session where we bring your vision to life with cinematic precision.",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Image,
    title: "Edit & Enhance",
    description: "Post-production magic where we enhance each image to perfection using professional editing techniques.",
    color: "from-yellow-500 to-green-500"
  },
  {
    icon: Sparkles,
    title: "Delivery",
    description: "Receive your stunning images in high resolution, ready for print or digital use, delivered on time.",
    color: "from-green-500 to-blue-500"
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 px-6" style={{
      background: 'linear-gradient(135deg, hsl(260, 85%, 6%) 0%, hsl(260, 50%, 15%) 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 luxframe-brand">
            OUR PROCESS
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            From concept to delivery, we ensure every step is executed with precision and care
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center group">
                
                {/* Step Number */}
                <div className="relative mb-6">
                  <div 
                    className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm z-20">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Card */}
                <div className="absolute inset-0 -m-4 bg-white/5 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 border border-white/10" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-white/80 mb-6">
              Let's create something amazing together. Get in touch to begin your LuxFrame experience.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="luxframe-cta px-8 py-4 text-lg rounded-full"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};