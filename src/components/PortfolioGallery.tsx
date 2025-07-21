import { useState, useEffect } from 'react';
import { Eye, Heart, Camera, Play, Pause, SkipBack, SkipForward, Monitor, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
    caption: "Natural light magic"
  },
  {
    id: 2,
    title: "Urban Architecture",
    category: "Architecture", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    caption: "Modern geometry"
  },
  {
    id: 3,
    title: "Wedding Moment",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
    caption: "Love captured"
  },
  {
    id: 4,
    title: "Nature Landscape",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    caption: "Earth's beauty"
  },
  {
    id: 5,
    title: "Fashion Editorial",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
    caption: "Style statement"
  },
  {
    id: 6,
    title: "Street Photography",
    category: "Street",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    caption: "Life in motion"
  },
  {
    id: 7,
    title: "Creative Studio",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    caption: "Studio magic"
  },
  {
    id: 8,
    title: "City Nights",
    category: "Street",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
    caption: "Urban energy"
  }
];

const filters = [
  { name: 'Original', value: 'none' },
  { name: 'Vintage', value: 'sepia(0.8) contrast(1.2)' },
  { name: 'Black & White', value: 'grayscale(1)' },
  { name: 'Film Noir', value: 'contrast(1.5) brightness(0.8) grayscale(0.7)' },
  { name: 'Warm', value: 'hue-rotate(15deg) saturate(1.3)' },
  { name: 'Cool', value: 'hue-rotate(-15deg) saturate(1.1)' }
];

export const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>(samplePhotos[0]);
  const [currentFilter, setCurrentFilter] = useState('none');
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const categories = ['All', 'Portrait', 'Wedding', 'Architecture', 'Landscape', 'Fashion', 'Street'];

  const filteredPhotos = selectedCategory === 'All' 
    ? samplePhotos 
    : samplePhotos.filter(photo => photo.category === selectedCategory);

  // Auto-advance the photo slideshow
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, filteredPhotos.length]);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const nextPhoto = () => {
    const newIndex = (currentIndex + 1) % filteredPhotos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const prevPhoto = () => {
    const newIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

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
            Watch our cinematic stories unfold on the big screen
          </p>
        </div>

        {/* Main TV Screen */}
        <div className="relative max-w-5xl mx-auto mb-12">
          {/* TV Frame */}
          <div className="relative p-8 rounded-3xl" style={{
            background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 50px rgba(255,255,255,0.05)'
          }}>
            {/* Screen */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              {/* Scanlines Effect */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
              }} />
              
              {/* Main Display Photo */}
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover transition-all duration-500"
                style={{ filter: currentFilter }}
              />
              
              {/* Photo Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                <p className="text-white/80">{selectedPhoto.caption}</p>
                <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm mt-2">
                  {selectedPhoto.category}
                </span>
              </div>
              
              {/* TV Controls Overlay */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-black/50 border-white/20 hover:bg-black/70"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            
            {/* TV Brand */}
            <div className="absolute bottom-2 right-6 text-white/30 text-sm font-mono">
              LUX-VISION
            </div>
          </div>
          
          {/* TV Controls */}
          <div className="flex justify-center mt-6 space-x-4">
            <Button
              onClick={prevPhoto}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </Button>
            <Button
              onClick={nextPhoto}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <SkipForward className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center space-x-2 text-white/80 mr-4">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filters:</span>
          </div>
          {filters.map((filter) => (
            <Button
              key={filter.name}
              onClick={() => setCurrentFilter(filter.value)}
              size="sm"
              variant={currentFilter === filter.value ? "default" : "outline"}
              className={
                currentFilter === filter.value
                  ? "luxframe-cta"
                  : "border-white/20 text-white hover:bg-white/10"
              }
            >
              {filter.name}
            </Button>
          ))}
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

        {/* Running Film Strip */}
        <div className="relative overflow-hidden rounded-2xl bg-black/30 p-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Monitor className="w-6 h-6 mr-3 text-primary" />
            Photo Reel
          </h3>
          
          {/* Film Strip Container */}
          <div className="relative h-32 overflow-hidden rounded-lg bg-black/50">
            <div 
              className={`flex space-x-4 h-full transition-transform duration-500 ease-linear ${
                isPlaying ? 'animate-slide-film' : ''
              }`}
              style={{
                transform: `translateX(-${currentIndex * 144}px)`
              }}
            >
              {[...filteredPhotos, ...filteredPhotos].map((photo, index) => (
                <div
                  key={`${photo.id}-${index}`}
                  className="flex-shrink-0 w-32 h-full cursor-pointer group relative"
                  onClick={() => handlePhotoClick(photo)}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover rounded border-2 border-transparent group-hover:border-primary transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Film Perforations */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};