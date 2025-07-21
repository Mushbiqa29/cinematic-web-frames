import { Camera, Image, Phone, User, Home } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Portfolio', icon: Image, path: '/portfolio' },
  { name: 'Services', icon: Camera, path: '/services' },
  { name: 'About', icon: User, path: '/about' },
  { name: 'Contact', icon: Phone, path: '/contact' },
];

export const FilmstripNav = () => {
  return (
    <nav className="film-strip h-16 flex items-center px-4 sticky top-0 z-50">
      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <div key={item.name} className="film-frame group">
            <div className="flex items-center space-x-2 text-film-silver group-hover:text-primary transition-colors">
              <item.icon className="w-5 h-5" />
              <span className="font-medium tracking-wide">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};