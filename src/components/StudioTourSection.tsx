import { useState } from 'react';
import { Camera, Lightbulb, Monitor, Palette, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const studioFeatures = [
  {
    icon: Camera,
    title: "Professional Equipment",
    description: "Latest Canon and Sony cameras with premium lenses for every scenario"
  },
  {
    icon: Lightbulb,
    title: "Advanced Lighting",
    description: "Professional studio lighting setup for perfect illumination control"
  },
  {
    icon: Monitor,
    title: "Live Preview",
    description: "Real-time image preview on large monitors for instant feedback"
  },
  {
    icon: Palette,
    title: "Creative Backdrops",
    description: "Variety of backdrops and sets for any style or theme you envision"
  }
];

const studioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop",
    title: "Main Studio Space",
    description: "Our spacious main studio with professional lighting setup"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1521302200778-33500795e128?w=600&h=400&fit=crop",
    title: "Equipment Corner",
    description: "Professional cameras and lenses ready for any project"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=600&h=400&fit=crop",
    title: "Editing Suite",
    description: "State-of-the-art editing workstation for post-production"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop",
    title: "Portrait Corner",
    description: "Dedicated portrait setup with controlled lighting"
  }
];

export const StudioTourSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{
      background: 'linear-gradient(135deg, hsl(260, 50%, 15%) 0%, hsl(260, 85%, 6%) 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 luxframe-brand">
            STUDIO TOUR
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Take a virtual tour of our professional photography studio equipped with the latest technology
          </p>
        </div>

        {/* Studio Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {studioFeatures.map((feature, index) => (
            <div key={feature.title} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Virtual Tour Button */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Play className="w-6 h-6 text-primary" />
            <span className="text-white font-medium">Take a Virtual 360° Tour</span>
          </div>
        </div>

        {/* Studio Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studioImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold mb-1">{image.title}</h4>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </div>
              
              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <img
                src={studioImages[selectedImage].src}
                alt={studioImages[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <Button
                onClick={() => setSelectedImage(null)}
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 border-white/20 hover:bg-black/70"
              >
                <X className="w-5 h-5" />
              </Button>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 rounded-lg p-4">
                <h4 className="text-white font-semibold text-xl mb-2">
                  {studioImages[selectedImage].title}
                </h4>
                <p className="text-white/80">
                  {studioImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Visit Our Studio</h3>
            <p className="text-white/80 mb-6">
              Schedule a visit to see our studio in person and discuss your photography needs.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="luxframe-cta px-8 py-4 text-lg rounded-full"
            >
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};