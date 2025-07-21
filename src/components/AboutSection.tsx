import { Camera, Award, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Camera, value: '2000+', label: 'Photos Captured' },
  { icon: Award, value: '50+', label: 'Awards Won' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Zap, value: '5+', label: 'Years Experience' }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6" style={{
      background: 'linear-gradient(135deg, hsl(260, 85%, 6%) 0%, hsl(260, 50%, 15%) 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482b22a88?w=600&h=700&fit=crop"
                alt="Professional photographer at work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Floating Camera Element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 luxframe-cta rounded-full flex items-center justify-center">
                <Camera className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6 luxframe-brand">
                ABOUT LUXFRAME
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                We are passionate storytellers who believe every moment deserves to be captured 
                with cinematic precision and artistic vision.
              </p>
              <p className="text-white/70 leading-relaxed">
                Founded in 2019, LuxFrame Studio has been dedicated to creating timeless 
                photography that transcends ordinary moments. Our team combines technical 
                expertise with creative storytelling to deliver exceptional results for 
                every client.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-white/80">
                To transform fleeting moments into lasting memories through the art of 
                photography, bringing out the beauty and emotion in every frame.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};