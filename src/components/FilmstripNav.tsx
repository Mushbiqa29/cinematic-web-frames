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
    <nav className="film-strip h-16 flex items-center px-4 sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <button 
            key={item.name} 
            onClick={() => scrollToSection(item.href)}
            className="film-frame group"
          >
            <div className="flex items-center space-x-2 text-film-silver group-hover:text-primary transition-colors">
              <item.icon className="w-5 h-5" />
              <span className="font-medium tracking-wide">{item.name}</span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};