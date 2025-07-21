import { Button } from '@/components/ui/button';
import { Play, Camera } from 'lucide-react';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden luxframe-hero">
      {/* Polaroid Film Strips */}
      <div className="luxframe-film-strip left-0">
        <div className="p-4 space-y-4">
          <div className="luxframe-polaroid">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=240&fit=crop" 
              alt="Portrait" 
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="luxframe-polaroid">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=200&h=240&fit=crop" 
              alt="Wedding" 
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="luxframe-polaroid">
            <img 
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=240&fit=crop" 
              alt="Fashion" 
              className="w-full h-32 object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="luxframe-film-strip right-0">
        <div className="p-4 space-y-4">
          <div className="luxframe-polaroid">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=240&fit=crop" 
              alt="Architecture" 
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="luxframe-polaroid">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=240&fit=crop" 
              alt="Landscape" 
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="luxframe-polaroid">
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&h=240&fit=crop" 
              alt="Street" 
              className="w-full h-32 object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-develop">
          <span className="block luxframe-brand">LuxFrame</span>
          <span className="block luxframe-brand text-5xl md:text-7xl">Studio</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Where moments become timeless art
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="luxframe-cta px-12 py-6 text-lg font-semibold rounded-full border-0"
          >
            BOOK YOUR SESSION
          </Button>
        </div>
      </div>
    </section>
  );
};