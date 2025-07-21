import { useState, useEffect, useRef } from 'react';
import { Eye, Heart, Camera, RotateCcw, ZoomIn, ZoomOut, Move3D, Grid, Maximize2 } from 'lucide-react';
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
  {
    id: 11,
    title: "Wedding Details",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
    caption: "Perfect moments"
  },
  {
    id: 12,
    title: "Mountain Vista",
    category: "Landscape",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
    caption: "Natural grandeur"
  }
];

export const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'gallery' | 'grid'>('gallery');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(-10);
  const [zoom, setZoom] = useState(1);
  
  const categories = ['All', 'Portrait', 'Wedding', 'Architecture', 'Landscape', 'Fashion', 'Street'];
  const galleryRef = useRef<HTMLDivElement>(null);

  const filteredPhotos = selectedCategory === 'All' 
    ? samplePhotos 
    : samplePhotos.filter(photo => photo.category === selectedCategory);

  // Auto-rotate gallery
  useEffect(() => {
    if (viewMode === 'gallery') {
      const interval = setInterval(() => {
        setRotationY(prev => prev + 0.5);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [viewMode]);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const resetView = () => {
    setRotationY(0);
    setRotationX(-10);
    setZoom(1);
  };

  return (
    <section id="portfolio" className="py-20 px-6 min-h-screen" style={{
      background: 'linear-gradient(135deg, hsl(260, 50%, 15%) 0%, hsl(260, 85%, 6%) 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-6 luxframe-brand">
            3D PORTFOLIO GALLERY
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore our work in an immersive 3D gallery experience
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'luxframe-cta text-white'
                    : 'border border-white/30 text-white/80 hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setViewMode(viewMode === 'gallery' ? 'grid' : 'gallery')}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              {viewMode === 'gallery' ? <Grid className="w-4 h-4" /> : <Move3D className="w-4 h-4" />}
            </Button>
            {viewMode === 'gallery' && (
              <>
                <Button
                  onClick={() => setZoom(prev => Math.max(0.5, prev - 0.1))}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => setZoom(prev => Math.min(2, prev + 0.1))}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <Button
                  onClick={resetView}
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
        </div>

        {viewMode === 'gallery' ? (
          /* 3D Gallery View */
          <div className="relative h-[700px] overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black">
            {/* 3D Gallery Container */}
            <div 
              ref={galleryRef}
              className="gallery-3d w-full h-full flex items-center justify-center"
              style={{
                perspective: '1200px',
                perspectiveOrigin: '50% 50%'
              }}
            >
              <div
                className="gallery-room relative"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(-400px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${zoom})`,
                  transition: 'transform 0.1s ease-out',
                  width: '600px',
                  height: '300px'
                }}
              >
                {/* Floor */}
                <div
                  className="gallery-floor"
                  style={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    left: '-300px',
                    top: '150px',
                    background: 'linear-gradient(45deg, #1a1a1a 25%, transparent 25%), linear-gradient(-45deg, #1a1a1a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1a1a1a 75%), linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)',
                    backgroundSize: '30px 30px',
                    backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px',
                    transform: 'rotateX(90deg)',
                    opacity: 0.4
                  }}
                />

                {/* Ceiling */}
                <div
                  className="gallery-ceiling"
                  style={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    left: '-300px',
                    top: '-300px',
                    background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
                    transform: 'rotateX(-90deg)',
                    opacity: 0.5
                  }}
                />

                {/* Front Wall */}
                <div
                  className="gallery-wall front-wall"
                  style={{
                    position: 'absolute',
                    width: '600px',
                    height: '300px',
                    left: '-300px',
                    top: '0px',
                    background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
                    transform: 'translateZ(300px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {filteredPhotos.slice(0, 3).map((photo, index) => (
                    <div
                      key={photo.id}
                      className="gallery-frame"
                      onClick={() => handlePhotoClick(photo)}
                      style={{
                        position: 'absolute',
                        width: '140px',
                        height: '100px',
                        left: `${80 + index * 160}px`,
                        top: '100px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        transform: 'translateZ(10px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateZ(20px) scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateZ(10px) scale(1)';
                      }}
                    >
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover rounded border-4 border-white shadow-2xl"
                      />
                      <div className="absolute -bottom-8 left-0 right-0 text-center">
                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {photo.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Left Wall */}
                <div
                  className="gallery-wall left-wall"
                  style={{
                    position: 'absolute',
                    width: '600px',
                    height: '300px',
                    left: '-300px',
                    top: '0px',
                    background: 'linear-gradient(135deg, #252525, #151515)',
                    transform: 'rotateY(-90deg) translateZ(300px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {filteredPhotos.slice(3, 6).map((photo, index) => (
                    <div
                      key={photo.id}
                      className="gallery-frame"
                      onClick={() => handlePhotoClick(photo)}
                      style={{
                        position: 'absolute',
                        width: '140px',
                        height: '100px',
                        left: `${80 + index * 160}px`,
                        top: '100px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        transform: 'translateZ(10px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateZ(20px) scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateZ(10px) scale(1)';
                      }}
                    >
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover rounded border-4 border-white shadow-2xl"
                      />
                      <div className="absolute -bottom-8 left-0 right-0 text-center">
                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {photo.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Wall */}
                <div
                  className="gallery-wall right-wall"
                  style={{
                    position: 'absolute',
                    width: '600px',
                    height: '300px',
                    left: '-300px',
                    top: '0px',
                    background: 'linear-gradient(135deg, #252525, #151515)',
                    transform: 'rotateY(90deg) translateZ(300px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {filteredPhotos.slice(6, 9).map((photo, index) => (
                    <div
                      key={photo.id}
                      className="gallery-frame"
                      onClick={() => handlePhotoClick(photo)}
                      style={{
                        position: 'absolute',
                        width: '140px',
                        height: '100px',
                        left: `${80 + index * 160}px`,
                        top: '100px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        transform: 'translateZ(10px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateZ(20px) scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateZ(10px) scale(1)';
                      }}
                    >
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover rounded border-4 border-white shadow-2xl"
                      />
                      <div className="absolute -bottom-8 left-0 right-0 text-center">
                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {photo.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Back Wall */}
                <div
                  className="gallery-wall back-wall"
                  style={{
                    position: 'absolute',
                    width: '600px',
                    height: '300px',
                    left: '-300px',
                    top: '0px',
                    background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
                    transform: 'rotateY(180deg) translateZ(300px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {filteredPhotos.slice(9, 12).map((photo, index) => (
                    <div
                      key={photo.id}
                      className="gallery-frame"
                      onClick={() => handlePhotoClick(photo)}
                      style={{
                        position: 'absolute',
                        width: '140px',
                        height: '100px',
                        left: `${80 + index * 160}px`,
                        top: '100px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        transform: 'translateZ(10px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateZ(20px) scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateZ(10px) scale(1)';
                      }}
                    >
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover rounded border-4 border-white shadow-2xl"
                      />
                      <div className="absolute -bottom-8 left-0 right-0 text-center">
                        <div className="bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {photo.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery Instructions */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white/60 text-sm">
                🖱️ Drag to rotate • 🔍 Use zoom controls • 📱 Click photos to view details
              </p>
            </div>
          </div>
        ) : (
          /* Traditional Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group cursor-pointer"
                onClick={() => handlePhotoClick(photo)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/10 p-4">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-48 object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-white font-semibold">{photo.title}</h3>
                    <p className="text-white/70 text-sm">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Photo Detail Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
                <p className="text-white/80 mb-4">{selectedPhoto.caption}</p>
                <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm">
                  {selectedPhoto.category}
                </span>
              </div>
              <Button
                onClick={() => setSelectedPhoto(null)}
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4 w-10 h-10 rounded-full"
              >
                ×
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};