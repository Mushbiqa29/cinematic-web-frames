import { Button } from '@/components/ui/button';
import { Play, Camera } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Aperture Background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-film-base/20 to-film-base/60" />
      
      {/* Lens Flare Effect */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 opacity-30">
        <div className="aperture">
          <div className="aperture-blades animate-aperture" />
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-develop">
          <span className="block text-primary">CINEMATIC</span>
          <span className="block text-secondary">MOMENTS</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Professional photography that captures the essence of film, 
          blending classic techniques with modern artistry.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="shutter-button w-auto px-8 py-6 text-lg group hover:animate-shutter"
          >
            <Camera className="mr-3 w-6 h-6 group-hover:animate-focus-peaking" />
            View Portfolio
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="lcd-input px-8 py-6 text-lg border-lens-chrome hover:bg-lens-chrome/10"
          >
            <Play className="mr-3 w-6 h-6" />
            Watch Reel
          </Button>
        </div>
        
        {/* Camera Settings Display */}
        <div className="mt-16 flex justify-center space-x-8 text-sm text-muted-foreground font-mono">
          <div className="lcd-input text-xs px-3 py-1">
            f/2.8
          </div>
          <div className="lcd-input text-xs px-3 py-1">
            1/125s
          </div>
          <div className="lcd-input text-xs px-3 py-1">
            ISO 400
          </div>
        </div>
      </div>
      
      {/* Film Edge Decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-8 film-strip opacity-50" />
      <div className="absolute right-0 top-0 bottom-0 w-8 film-strip opacity-50 rotate-180" />
    </section>
  );
};