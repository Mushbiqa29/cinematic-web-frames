import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, Text, Environment } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Grid, Box } from 'lucide-react';
import * as THREE from 'three';

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

// Individual Book Component
function Book({ photo, position, isActive, onClick }: { 
  photo: Photo; 
  position: [number, number, number]; 
  isActive: boolean;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(photo.image);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      if (isActive) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group position={position} onClick={onClick}>
      {/* Book Spine */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 2, 1.5]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Book Cover */}
      <mesh position={[0.15, 0, 0]}>
        <boxGeometry args={[0.05, 1.8, 1.3]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      
      {/* Book Pages */}
      <mesh position={[-0.15, 0, 0]}>
        <boxGeometry args={[0.05, 1.7, 1.2]} />
        <meshStandardMaterial color="#f5f5dc" />
      </mesh>
      
      {/* Title Text */}
      <Text
        position={[0.2, -0.7, 0]}
        rotation={[0, 0, 0]}
        fontSize={0.1}
        color="gold"
        maxWidth={1.2}
        textAlign="center"
        font="/fonts/Playfair_Display/PlayfairDisplay-Bold.ttf"
      >
        {photo.title}
      </Text>
    </group>
  );
}

// Book Slider Scene Component
function BookSlider({ photos, currentIndex, onBookClick }: { 
  photos: Photo[]; 
  currentIndex: number;
  onBookClick: (index: number) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Smooth rotation animation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Bookshelf */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[12, 0.2, 3]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      {/* Books arranged in a curved pattern */}
      {photos.map((photo, index) => {
        const angle = (index - currentIndex) * 0.6;
        const radius = 4;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        const y = 0;
        
        return (
          <Book
            key={photo.id}
            photo={photo}
            position={[x, y, z]}
            isActive={index === currentIndex}
            onClick={() => onBookClick(index)}
          />
        );
      })}
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[0, 2, 0]} intensity={0.5} />
    </group>
  );
}

// Camera Controller
function CameraController() {
  const { camera, gl } = useThree();
  
  useFrame(() => {
    camera.position.lerp(new THREE.Vector3(0, 2, 8), 0.02);
    camera.lookAt(0, 0, 0);
  });
  
  return <OrbitControls enableZoom={true} enablePan={false} maxPolarAngle={Math.PI / 2} />;
}

export const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');
  
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

  const handleBookClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="portfolio" className="py-20 px-6 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            PORTFOLIO LIBRARY
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Browse our work in an interactive 3D book collection
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
              onClick={() => setViewMode(viewMode === '3d' ? 'grid' : '3d')}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              {viewMode === '3d' ? <Grid className="w-4 h-4" /> : <Box className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {viewMode === '3d' ? (
          /* 3D Book Slider */
          <div className="relative">
            <div className="h-[600px] bg-gradient-to-b from-amber-900/20 to-slate-900 rounded-2xl overflow-hidden">
              <Canvas camera={{ position: [0, 2, 8], fov: 75 }}>
                <Suspense fallback={null}>
                  <Environment preset="studio" />
                  <BookSlider 
                    photos={filteredPhotos} 
                    currentIndex={currentIndex}
                    onBookClick={handleBookClick}
                  />
                  <CameraController />
                </Suspense>
              </Canvas>
            </div>
            
            {/* Navigation Controls */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <Button
                onClick={handlePrevious}
                variant="outline"
                size="lg"
                className="bg-black/50 border-white/20 text-white hover:bg-black/70"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="absolute inset-y-0 right-4 flex items-center">
              <Button
                onClick={handleNext}
                variant="outline"
                size="lg"
                className="bg-black/50 border-white/20 text-white hover:bg-black/70"
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