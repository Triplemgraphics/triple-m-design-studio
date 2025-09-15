import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

// Import service images
import logoShowcase from '../assets/services/logo-showcase.jpg';
import brandingIdentity from '../assets/services/branding-identity.jpg';
import brochureDesign from '../assets/services/brochure-design.jpg';
import socialMediaGraphics from '../assets/services/social-media-graphics.jpg';
import bannerPoster from '../assets/services/banner-poster.jpg';

const Services = () => {
  const [selectedService, setSelectedService] = useState('All');

  const services = [
    {
      id: 1,
      title: 'Logo Design',
      description: 'Custom logo designs that capture your brand essence and create lasting impressions.',
      image: "/lovable-uploads/546c305c-101c-4b81-a11b-1164a8588c26.png",
      category: 'Branding'
    },
    {
      id: 2,
      title: 'Branding & Identity',
      description: 'Complete brand identity packages including guidelines, colors, and visual elements.',
      image: "/lovable-uploads/605350f9-9f14-4250-a1af-50989984c11b.png",
      category: 'Branding'
    },
    {
      id: 3,
      title: 'Brochure Design',
      description: 'Professional brochures that effectively communicate your message and services.',
      image: brochureDesign,
      category: 'Print'
    },
    {
      id: 4,
      title: 'Banner & Poster Design',
      description: 'Eye-catching banners and posters for events, promotions, and advertising.',
      image: bannerPoster,
      category: 'Print'
    },
    {
      id: 5,
      title: 'Social Media Graphics',
      description: 'Engaging social media visuals that boost your online presence and engagement.',
      image: "/lovable-uploads/fb082b04-9f4c-46df-8835-77fb8eeb5819.png",
      category: 'Digital'
    },
    {
      id: 6,
      title: 'Company Profiles',
      description: 'Professional company profile designs that showcase your business effectively.',
      image: brochureDesign,
      category: 'Print'
    },
    {
      id: 7,
      title: 'Presentations',
      description: 'Compelling presentation designs that captivate your audience and convey your message.',
      image: brandingIdentity,
      category: 'Digital'
    },
    {
      id: 8,
      title: 'Packaging Design',
      description: 'Creative packaging solutions that make your products stand out on shelves.',
      image: logoShowcase,
      category: 'Print'
    },
    {
      id: 9,
      title: 'Business Cards',
      description: 'Professional business card designs that leave a memorable first impression.',
      image: "/lovable-uploads/d5005d57-720a-414a-92e0-a8b09a17b9e9.png",
      category: 'Print'
    },
    {
      id: 10,
      title: 'Photo Editing & Manipulation',
      description: 'Expert photo editing services to enhance and transform your images.',
      image: socialMediaGraphics,
      category: 'Digital'
    },
    {
      id: 11,
      title: 'Mockups',
      description: 'Professional mockups to showcase your designs in realistic contexts.',
      image: "/lovable-uploads/fde51658-1aeb-48b1-b224-1c10a95b1486.png",
      category: 'Digital'
    },
    {
      id: 12,
      title: 'Event Flyers',
      description: 'Attractive event flyers that grab attention and drive attendance.',
      image: socialMediaGraphics,
      category: 'Print'
    },
    {
      id: 13,
      title: 'Infographics',
      description: 'Visual data representations that make complex information easy to understand.',
      image: brochureDesign,
      category: 'Digital'
    },
    {
      id: 14,
      title: 'Motion Graphics',
      description: 'Dynamic motion graphics and animations for digital platforms.',
      image: brandingIdentity,
      category: 'Digital'
    },
    {
      id: 15,
      title: 'Web Graphics',
      description: 'Custom web graphics and digital assets for websites and online platforms.',
      image: logoShowcase,
      category: 'Digital'
    }
  ];

  const categories = ['All', 'Branding', 'Print', 'Digital'];

  const filteredServices = selectedService === 'All' 
    ? services 
    : services.filter(service => service.category === selectedService);

  return (
    <div className="pt-24">
      <section className="section-padding bg-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 lg:mb-20">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-foreground">
                Our Services
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Comprehensive design solutions tailored to elevate your brand and drive business success
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedService === category ? "default" : "outline"}
                  onClick={() => setSelectedService(category)}
                  className="text-sm font-medium transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              ))}
            </div>

            {/* Process Section */}
            <div className="bg-card rounded-2xl p-8 lg:p-12 text-center">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-foreground">
                Our Design Process
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
                Every project follows our proven methodology to ensure exceptional results
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="text-xl font-semibold">Discovery</h4>
                  <p className="text-muted-foreground">
                    We dive deep into your brand, goals, and target audience to understand your unique needs.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <h4 className="text-xl font-semibold">Concept</h4>
                  <p className="text-muted-foreground">
                    Creative brainstorming and conceptualization to develop innovative design solutions.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h4 className="text-xl font-semibold">Design</h4>
                  <p className="text-muted-foreground">
                    Bringing concepts to life with meticulous attention to detail and brand consistency.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <h4 className="text-xl font-semibold">Delivery</h4>
                  <p className="text-muted-foreground">
                    Final refinements and delivery of high-quality assets ready for implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;