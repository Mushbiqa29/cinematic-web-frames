import { Camera, Heart, Building, Mountain, User, Sparkles } from 'lucide-react';

const services = [
  {
    icon: User,
    title: "Portrait Sessions",
    description: "Capture your unique personality with professional lighting and film-inspired techniques.",
    features: ["Natural light & studio", "Individual & group", "Professional headshots", "Creative concepts"],
    price: "From $350"
  },
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Document your special day with cinematic storytelling and timeless elegance.",
    features: ["Full day coverage", "Engagement sessions", "Digital gallery", "Print packages"],
    price: "From $2,500"
  },
  {
    icon: Building,
    title: "Commercial Shoots",
    description: "Elevate your brand with compelling imagery that tells your story professionally.",
    features: ["Product photography", "Corporate portraits", "Brand campaigns", "Architecture"],
    price: "From $800"
  },
  {
    icon: Mountain,
    title: "Event Coverage",
    description: "Preserve important moments with documentary-style photography and attention to detail.",
    features: ["Corporate events", "Private parties", "Conferences", "Live performances"],
    price: "From $500"
  },
  {
    icon: Sparkles,
    title: "Creative Projects",
    description: "Bring artistic visions to life with experimental techniques and unique perspectives.",
    features: ["Fashion editorials", "Art projects", "Conceptual shoots", "Collaborations"],
    price: "Custom quote"
  },
  {
    icon: Camera,
    title: "Photography Workshops",
    description: "Learn professional techniques and develop your own cinematic photography style.",
    features: ["Beginner to advanced", "Film techniques", "Digital mastery", "One-on-one mentoring"],
    price: "From $150"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-primary">
            SERVICES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional photography services crafted with the precision of film and 
            the innovation of digital artistry. Every session is a collaboration to create something extraordinary.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="relative group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="polaroid-frame h-full p-6 bg-card">
                {/* Service Icon */}
                <div className="aperture w-16 h-16 mb-6 mx-auto group-hover:animate-aperture">
                  <div className="aperture-blades flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Service Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center justify-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="lcd-input inline-block px-4 py-2 text-lg font-bold">
                    {service.price}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </div>

              {/* Film Strip Decoration */}
              <div className="absolute -left-2 top-4 bottom-4 w-4 film-strip opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-film-base text-film-silver rounded-lg film-grain">
          <h3 className="text-3xl font-bold mb-4 text-primary">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-lg mb-6 text-film-silver/80">
            Let's discuss your project and bring your vision to life.
          </p>
          <button className="shutter-button w-auto px-8 py-4 text-lg group">
            <Camera className="mr-3 w-6 h-6 group-hover:animate-focus-peaking" />
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};