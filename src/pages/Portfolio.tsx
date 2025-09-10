import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioItems, categories, createImageGallery } from '../data/portfolioData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');

  // Create a flat array of all individual images
  const allImages = createImageGallery(portfolioItems);

  const filteredItems = selectedCategory === 'all' 
    ? allImages 
    : allImages.filter(item => item.category === selectedCategory);

  const openLightbox = (item: typeof allImages[0]) => {
    setCurrentImages([item.image]);
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
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold mb-4 sm:mb-6 text-foreground">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Explore our collection of creative work spanning branding, print design, 
            digital graphics, and more. Each project represents our commitment to 
            exceptional design and client satisfaction.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
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
      <section className="pb-12 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-item group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      console.error(`Failed to load image: ${item.image}`);
                      e.currentTarget.src = '/api/placeholder/400/400';
                    }}
                  />
                </div>
                <div className="portfolio-overlay">
                  <h3 className="portfolio-title text-xs sm:text-sm md:text-base">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Navigation Buttons */}
            {currentImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="text-center">
              <img
                src={currentImages[currentImageIndex] || '/api/placeholder/800/600'}
                alt={lightboxTitle}
                className="max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain mx-auto"
                onError={(e) => {
                  console.error(`Failed to load lightbox image: ${currentImages[currentImageIndex]}`);
                  e.currentTarget.src = '/api/placeholder/800/600';
                }}
              />
              <div className="mt-2 sm:mt-4 text-white px-4">
                <h3 className="text-lg sm:text-2xl font-playfair font-semibold mb-1 sm:mb-2">{lightboxTitle}</h3>
                {currentImages.length > 1 && (
                  <p className="text-white/70 text-sm sm:text-base">
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