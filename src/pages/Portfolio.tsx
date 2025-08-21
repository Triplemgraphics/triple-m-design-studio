import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import restaurantBranding from '../assets/portfolio/restaurant-branding.jpg';
import techStartup from '../assets/portfolio/tech-startup-brand.jpg';
import fashionRetail from '../assets/portfolio/fashion-retail-brand.jpg';
import healthcareBranding from '../assets/portfolio/healthcare-branding.jpg';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'branding', name: 'Branding' },
    { id: 'print', name: 'Print Design' },
    { id: 'digital', name: 'Digital Design' },
    { id: 'packaging', name: 'Packaging' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Restaurant Brand Identity",
      category: "branding", 
      thumbnail: restaurantBranding,
      images: [
        restaurantBranding,
        restaurantBranding,
        restaurantBranding
      ]
    },
    {
      id: 2,
      title: "Tech Startup Branding",
      category: "branding",
      thumbnail: techStartup,
      images: [
        techStartup,
        techStartup,
        techStartup,
        techStartup
      ]
    },
    {
      id: 3,
      title: "Fashion Retail Brand",
      category: "branding",
      thumbnail: fashionRetail,
      images: [
        fashionRetail,
        fashionRetail
      ]
    },
    {
      id: 4,
      title: "Healthcare Branding",
      category: "branding",
      thumbnail: healthcareBranding,
      images: [
        healthcareBranding,
        healthcareBranding,
        healthcareBranding,
        healthcareBranding,
        healthcareBranding
      ]
    },
    {
      id: 5,
      title: "Product Packaging",
      category: "packaging",
      thumbnail: "/api/placeholder/400/300",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      id: 6,
      title: "Event Posters",
      category: "print",
      thumbnail: "/api/placeholder/400/300",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      id: 7,
      title: "Website Graphics",
      category: "digital",
      thumbnail: "/api/placeholder/400/300",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      id: 8,
      title: "Business Card Designs",
      category: "print",
      thumbnail: "/api/placeholder/400/300",
      images: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: typeof portfolioItems[0]) => {
    setCurrentImages(item.images);
    setLightboxTitle(item.title);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImages([]);
    setCurrentImageIndex(0);
    setLightboxTitle('');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-foreground">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our collection of creative work spanning branding, print design, 
            digital graphics, and more. Each project represents our commitment to 
            exceptional design and client satisfaction.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-[var(--shadow-gold)]'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-item group"
                onClick={() => openLightbox(item)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {currentImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image */}
            <div className="text-center">
              <img
                src={currentImages[currentImageIndex]}
                alt={lightboxTitle}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
              />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-playfair font-semibold mb-2">{lightboxTitle}</h3>
                {currentImages.length > 1 && (
                  <p className="text-white/70">
                    {currentImageIndex + 1} of {currentImages.length}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;