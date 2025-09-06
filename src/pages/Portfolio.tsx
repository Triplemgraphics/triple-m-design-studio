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
      title: "Chesfield Investment Logo",
      category: "branding",
      thumbnail: "/lovable-uploads/2d396c7a-320c-4a99-ae44-a0d2d45388bf.png",
      images: [
        "/lovable-uploads/2d396c7a-320c-4a99-ae44-a0d2d45388bf.png"
      ]
    },
    {
      id: 6,
      title: "Logo Collection",
      category: "branding",
      thumbnail: "/lovable-uploads/487aa273-974c-402b-8dc7-a492f7fb86fc.png",
      images: [
        "/lovable-uploads/487aa273-974c-402b-8dc7-a492f7fb86fc.png"
      ]
    },
    {
      id: 7,
      title: "Product Packaging - Car Shampoo",
      category: "packaging",
      thumbnail: "/lovable-uploads/533158de-6d7f-4598-a8e8-3fa6ef7b0e90.png",
      images: [
        "/lovable-uploads/533158de-6d7f-4598-a8e8-3fa6ef7b0e90.png"
      ]
    },
    {
      id: 8,
      title: "Washing Powder Package Design",
      category: "packaging",
      thumbnail: "/lovable-uploads/32da0863-8239-4f1a-9166-79de4f15e0f1.png",
      images: [
        "/lovable-uploads/32da0863-8239-4f1a-9166-79de4f15e0f1.png"
      ]
    },
    {
      id: 9,
      title: "Event Posters & Flyers",
      category: "print",
      thumbnail: "/lovable-uploads/a6b47f0c-7686-4d3c-9de4-fd79f42c5b76.png",
      images: [
        "/lovable-uploads/a6b47f0c-7686-4d3c-9de4-fd79f42c5b76.png",
        "/lovable-uploads/442a1ff7-f315-4c2d-aaf4-43e6c49a6ae3.png",
        "/lovable-uploads/c5649789-1a55-4eae-802f-ff421d2ab055.png"
      ]
    },
    {
      id: 10,
      title: "Business Card Designs",
      category: "print",
      thumbnail: "/lovable-uploads/dcd533ba-0f17-4fd9-af32-6f77f19c0cbb.png",
      images: [
        "/lovable-uploads/dcd533ba-0f17-4fd9-af32-6f77f19c0cbb.png"
      ]
    },
    {
      id: 11,
      title: "Social Media Graphics",
      category: "digital",
      thumbnail: "/lovable-uploads/fb1e859d-4e1b-4f16-9bc2-ac8b4c1ec1bd.png",
      images: [
        "/lovable-uploads/fb1e859d-4e1b-4f16-9bc2-ac8b4c1ec1bd.png",
        "/lovable-uploads/367bb699-ad0d-470b-a6ca-5909d9d41c31.png"
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
                  onError={(e) => {
                    console.error(`Failed to load image: ${item.thumbnail}`);
                    e.currentTarget.src = '/api/placeholder/400/300';
                  }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image */}
            <div className="text-center">
              <img
                src={currentImages[currentImageIndex] || '/api/placeholder/800/600'}
                alt={lightboxTitle}
                className="max-w-full max-h-[80vh] object-contain mx-auto"
                onError={(e) => {
                  console.error(`Failed to load lightbox image: ${currentImages[currentImageIndex]}`);
                  e.currentTarget.src = '/api/placeholder/800/600';
                }}
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