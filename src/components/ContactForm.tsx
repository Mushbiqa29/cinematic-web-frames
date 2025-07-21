import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Camera, Calendar, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Your inquiry has been developed and sent. We'll be in touch soon!",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6" style={{
      background: 'linear-gradient(135deg, hsl(260, 50%, 15%) 0%, hsl(260, 85%, 6%) 100%)'
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6 luxframe-brand">
                GET IN TOUCH
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Ready to create something extraordinary? Let's discuss your vision 
                and bring it to life through the lens.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="aperture w-12 h-12 flex-shrink-0">
                  <div className="aperture-blades" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Studio Location</h3>
                  <p className="text-film-silver/70">123 Creative Avenue, Photo District</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="camera-dial w-12 h-12 flex-shrink-0">
                  <Calendar className="w-6 h-6 text-camera-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Availability</h3>
                  <p className="text-film-silver/70">Mon-Sat, 9AM-7PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="camera-dial w-12 h-12 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-camera-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Service Area</h3>
                  <p className="text-film-silver/70">Local & Destination shoots</p>
                </div>
              </div>
            </div>

            {/* Camera Settings Display */}
            <div className="pt-8 border-t border-lens-chrome/20">
              <h3 className="text-sm font-medium text-film-silver/60 mb-4">CURRENT SETTINGS</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="lcd-input text-center py-3">
                  <div className="text-xs text-lcd-green/60">APERTURE</div>
                  <div className="text-lg">f/1.4</div>
                </div>
                <div className="lcd-input text-center py-3">
                  <div className="text-xs text-lcd-green/60">SHUTTER</div>
                  <div className="text-lg">1/60s</div>
                </div>
                <div className="lcd-input text-center py-3">
                  <div className="text-xs text-lcd-green/60">ISO</div>
                  <div className="text-lg">800</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {/* Film Border */}
            <div className="absolute -inset-4 film-strip opacity-20 rounded-lg" />
            
            <form onSubmit={handleSubmit} className="relative space-y-6 p-8 bg-card rounded-lg">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground/80">
                    NAME
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className="lcd-input mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground/80">
                    EMAIL
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="lcd-input mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="project" className="text-sm font-medium text-foreground/80">
                    PROJECT TYPE
                  </Label>
                  <select className="lcd-input w-full mt-2">
                    <option>Portrait Session</option>
                    <option>Wedding Photography</option>
                    <option>Commercial Shoot</option>
                    <option>Event Coverage</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    PROJECT DETAILS
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your vision, preferred dates, and any specific requirements..."
                    className="lcd-input mt-2 min-h-32 resize-none"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="shutter-button w-full py-6 text-lg group"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-3 w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full" />
                    Developing...
                  </div>
                ) : (
                  <>
                    <Send className="mr-3 w-6 h-6 group-hover:animate-focus-peaking" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Your message will be processed within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};