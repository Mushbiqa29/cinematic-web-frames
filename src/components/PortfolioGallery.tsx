import { useState } from 'react';
import { Eye, Heart, Camera } from 'lucide-react';

interface Photo {
  id: number;
  title: string;
  category: string;
  image: string;
  caption: string;
}

const samplePhotos: Photo[] = [
  {
    id: 1,
    title: "Golden Hour Portrait",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
    caption: "Natural light magic"
  },
  {
    id: 2,
    title: "Urban Architecture",
    category: "Architecture", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=500&fit=crop",
    caption: "Modern geometry"
  },
  {
    id: 3,
    title: "Wedding Moment",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=500&fit=crop",
    caption: "Love captured"
  },
  {
    id: 4,
    title: "Nature Landscape",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
    caption: "Earth's beauty"
  },
  {
    id: 5,
    title: "Fashion Editorial",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop",
    caption: "Style statement"
  },
  {
    id: 6,
    title: "Street Photography",
    category: "Street",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop",
    caption: "Life in motion"
  }
];

export const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Portrait', 'Wedding', 'Architecture', 'Landscape', 'Fashion', 'Street'];

  const filteredPhotos = selectedCategory === 'All' 
    ? samplePhotos 
    : samplePhotos.filter(photo => photo.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-6" style={{
      background: 'linear-gradient(135deg, hsl(260, 50%, 15%) 0%, hsl(260, 85%, 6%) 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 luxframe-brand">
            PORTFOLIO
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A curated collection of moments frozen in time, 
            each frame telling its own cinematic story.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'luxframe-cta text-white'
                  : 'border border-white/30 text-white/80 hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={photo.id}
              className="polaroid-frame group cursor-pointer animate-develop"
              data-caption={photo.caption}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-film-base/0 group-hover:bg-film-base/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <button className="shutter-button">
                      <Eye className="w-5 h-5 text-primary" />
                    </button>
                    <button className="shutter-button">
                      <Heart className="w-5 h-5 text-primary" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Photo Info */}
              <div className="mt-4 space-y-1">
                <h3 className="font-semibold text-lg">{photo.title}</h3>
                <p className="text-sm text-primary font-medium">{photo.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="shutter-button w-auto px-8 py-4 text-lg group">
            <Camera className="mr-3 w-6 h-6 group-hover:animate-focus-peaking" />
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};