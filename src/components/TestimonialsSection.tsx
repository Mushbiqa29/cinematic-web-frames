import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "LuxFrame captured our wedding day perfectly! Every photo tells a story and the quality is absolutely stunning. We couldn't be happier with the results."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Professional, creative, and delivered beyond our expectations. The corporate headshots look amazing and really elevated our brand image."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Model",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Working with LuxFrame was an incredible experience. They have an amazing eye for detail and made me feel comfortable throughout the entire shoot."
  },
  {
    id: 4,
    name: "David Williams",
    role: "Event Organizer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "They captured every important moment of our conference. The photos are professional, vibrant, and perfectly showcase the energy of our event."
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6" style={{
      background: 'linear-gradient(135deg, hsl(260, 50%, 15%) 0%, hsl(260, 85%, 6%) 100%)'
    }}>
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-6 luxframe-brand">
            CLIENT STORIES
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Hear from our amazing clients about their LuxFrame experience
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="p-12 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 relative">
            
            {/* Quote Icon */}
            <Quote className="w-16 h-16 text-primary/30 mx-auto mb-8" />
            
            {/* Stars */}
            <div className="flex justify-center mb-8">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-2xl text-white/90 leading-relaxed mb-8 font-light italic">
              "{currentTestimonial.text}"
            </blockquote>
            
            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div className="text-left">
                <div className="text-xl font-semibold text-white">
                  {currentTestimonial.name}
                </div>
                <div className="text-white/70">
                  {currentTestimonial.role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-white/20 text-white hover:bg-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};