import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Grid, Box } from 'lucide-react';

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
  },
  {
    id: 9,
    title: "Artistic Portrait",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop",
    caption: "Creative vision"
  },
  {
    id: 10,
    title: "Modern Architecture",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=800&h=600&fit=crop",
    caption: "Structural beauty"
  },
];

export const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  
  const categories = ['All', 'Portrait', 'Wedding', 'Architecture', 'Landscape', 'Fashion', 'Street'];
  
  const filteredPhotos = selectedCategory === 'All' 
    ? samplePhotos 
    : samplePhotos.filter(photo => photo.category === selectedCategory);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  // Auto-advance slider
  useEffect(() => {
    if (viewMode === 'slider') {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredPhotos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [filteredPhotos.length, viewMode]);

  return (
    <section id="portfolio" className="py-20 px-6 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            PORTFOLIO LIBRARY
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Browse our work in an interactive book collection
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white'
                    : 'border border-white/30 text-white/80 hover:border-amber-400 hover:text-amber-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setViewMode(viewMode === 'slider' ? 'grid' : 'slider')}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              {viewMode === 'slider' ? <Grid className="w-4 h-4" /> : <Box className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {viewMode === 'slider' ? (
          /* CSS-Based Book Slider */
          <div className="relative">
            <div className="h-[600px] bg-gradient-to-b from-amber-900/20 to-slate-900 rounded-2xl overflow-hidden relative">
              {/* Bookshelf Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 to-slate-900">
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-800/30 to-transparent"></div>
                <div className="absolute bottom-4 left-0 right-0 h-4 bg-amber-900/50 rounded-full mx-8"></div>
              </div>
              
              {/* Books Container */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1000px' }}>
                <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
                  {filteredPhotos.map((photo, index) => {
                    const offset = index - currentIndex;
                    const absOffset = Math.abs(offset);
                    const isActive = index === currentIndex;
                    
                    let transform = '';
                    let opacity = 1;
                    let zIndex = 10;
                    
                    if (offset === 0) {
                      transform = 'translateX(0) translateZ(50px) rotateY(0deg) scale(1.1)';
                      zIndex = 20;
                    } else if (offset > 0) {
                      transform = `translateX(${offset * 120}px) translateZ(${-absOffset * 20}px) rotateY(-${Math.min(absOffset * 15, 45)}deg) scale(${Math.max(0.8, 1 - absOffset * 0.1)})`;
                      opacity = Math.max(0.3, 1 - absOffset * 0.2);
                      zIndex = 10 - absOffset;
                    } else {
                      transform = `translateX(${offset * 120}px) translateZ(${-absOffset * 20}px) rotateY(${Math.min(absOffset * 15, 45)}deg) scale(${Math.max(0.8, 1 - absOffset * 0.1)})`;
                      opacity = Math.max(0.3, 1 - absOffset * 0.2);
                      zIndex = 10 - absOffset;
                    }
                    
                    return (
                      <div
                        key={photo.id}
                        className="absolute transition-all duration-700 ease-out cursor-pointer"
                        style={{
                          transform,
                          opacity,
                          zIndex,
                          transformStyle: 'preserve-3d'
                        }}
                        onClick={() => setCurrentIndex(index)}
                      >
                        {/* Book Structure */}
                        <div className="relative w-48 h-64 group">
                          {/* Book Spine */}
                          <div className="absolute -left-6 top-0 w-6 h-64 bg-gradient-to-r from-amber-800 to-amber-700 rounded-l-lg shadow-2xl border-r border-amber-600">
                            <div className="absolute top-4 left-1 right-1 h-8 bg-amber-600/50 rounded"></div>
                            <div className="absolute bottom-4 left-1 right-1 h-8 bg-amber-600/50 rounded"></div>
                          </div>
                          
                          {/* Book Cover */}
                          <div className="relative w-48 h-64 bg-gradient-to-br from-amber-100 to-amber-50 rounded-r-lg shadow-2xl border border-amber-200 group-hover:shadow-amber-500/30 transition-all duration-300">
                            {/* Cover Image */}
                            <div className="absolute inset-2 rounded-lg overflow-hidden">
                              <img
                                src={photo.image}
                                alt={photo.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>
                            
                            {/* Book Title */}
                            <div className="absolute bottom-3 left-3 right-3">
                              <h3 className="text-white font-bold text-sm mb-1 drop-shadow-lg">
                                {photo.title}
                              </h3>
                              <p className="text-white/80 text-xs drop-shadow">
                                {photo.caption}
                              </p>
                            </div>
                            
                            {/* Active Book Glow */}
                            {isActive && (
                              <div className="absolute inset-0 bg-amber-400/20 rounded-r-lg animate-pulse"></div>
                            )}
                          </div>
                          
                          {/* Book Pages */}
                          <div className="absolute -right-1 top-1 w-1 h-64 bg-gradient-to-b from-amber-50 to-amber-100 rounded-r-sm shadow-lg"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="absolute inset-y-0 left-4 flex items-center">
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  size="lg"
                  className="bg-black/50 border-white/20 text-white hover:bg-black/70 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
              </div>
              
              <div className="absolute inset-y-0 right-4 flex items-center">
                <Button
                  onClick={handleNext}
                  variant="outline"
                  size="lg"
                  className="bg-black/50 border-white/20 text-white hover:bg-black/70 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
              
              {/* Current Photo Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full text-center">
                  <h3 className="text-white font-semibold text-lg">
                    {filteredPhotos[currentIndex]?.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {filteredPhotos[currentIndex]?.caption}
                  </p>
                  <Badge variant="secondary" className="mt-2">
                    {filteredPhotos[currentIndex]?.category}
                  </Badge>
                </div>
              </div>
              
              {/* Progress Indicators */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {filteredPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-amber-400 scale-110' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Grid View Fallback */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div key={photo.id} className="group relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{photo.caption}</p>
                    <Badge variant="secondary">{photo.category}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};