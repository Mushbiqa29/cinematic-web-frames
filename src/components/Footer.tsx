import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Portrait Sessions',
    'Wedding Photography', 
    'Commercial Shoots',
    'Event Coverage',
    'Creative Projects',
    'Photography Workshops'
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(260, 85%, 6%) 0%, hsl(260, 50%, 15%) 50%, hsl(260, 85%, 6%) 100%)'
    }}>
      {/* Polaroid decorations */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Camera className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold luxframe-brand">LuxFrame</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Where moments become timeless art. Professional photography that captures 
              the essence of every story with cinematic precision.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">
                    123 Creative Avenue<br />
                    Photo District, City 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-white/70 text-sm">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-white/70 text-sm">hello@luxframe.studio</p>
              </div>
              
              <div className="mt-6">
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="luxframe-cta px-6 py-3 text-sm font-medium rounded-full"
                >
                  Book a Session
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/50 text-sm">
              © {currentYear} LuxFrame Studio. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-white/50 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary" />
              <span>for photographers</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};