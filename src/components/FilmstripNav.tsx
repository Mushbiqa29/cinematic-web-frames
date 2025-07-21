import { Camera, Image, Phone, User, Home } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#hero' },
  { name: 'Portfolio', icon: Image, href: '#portfolio' },
  { name: 'Services', icon: Camera, href: '#services' },
  { name: 'Contact', icon: Phone, href: '#contact' },
];

export const FilmstripNav = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="luxframe-nav h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      {/* LuxFrame Logo */}
      <div className="flex items-center space-x-3">
        <Camera className="w-8 h-8 text-primary" />
        <span className="text-xl font-bold text-white">LuxFrame</span>
      </div>
      
      {/* Navigation Menu */}
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <button 
            key={item.name} 
            onClick={() => scrollToSection(item.href)}
            className="group relative px-4 py-2 transition-all duration-300"
          >
            <div className="flex items-center space-x-2 text-white/80 group-hover:text-primary transition-colors">
              <item.icon className="w-5 h-5" />
              <span className="font-medium tracking-wide">{item.name}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </button>
        ))}
      </div>
    </nav>
  );
};