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
      description: 'Your logo is the face of your business—the first thing customers notice and remember. Our custom logo designs capture your brand essence and create powerful, lasting impressions that set you apart from competitors. A professional logo builds trust, credibility, and instant brand recognition across all platforms.',
      image: "/lovable-uploads/546c305c-101c-4b81-a11b-1164a8588c26.png",
      category: 'Branding'
    },
    {
      id: 2,
      title: 'Branding & Identity',
      description: 'Complete brand identity is crucial for consistent market presence. Our comprehensive packages include brand guidelines, color palettes, typography, and visual elements that work seamlessly together. Strong brand identity increases customer loyalty by 33% and helps you command premium pricing in your market.',
      image: "/lovable-uploads/605350f9-9f14-4250-a1af-50989984c11b.png",
      category: 'Branding'
    },
    {
      id: 3,
      title: 'Brochure Design',
      description: 'Brochures remain one of the most effective marketing tools with 79% of recipients sharing them with others. Our professional brochure designs effectively communicate your message, showcase your services, and convert prospects into customers through compelling visuals and strategic information hierarchy.',
      image: brochureDesign,
      category: 'Print'
    },
    {
      id: 4,
      title: 'Banner & Poster Design',
      description: 'Eye-catching banners and posters drive up to 400% more foot traffic to events and promotions. Perfect for advertising campaigns, trade shows, and in-store displays, our designs grab attention instantly and communicate your message effectively even from a distance.',
      image: bannerPoster,
      category: 'Print'
    },
    {
      id: 5,
      title: 'Social Media Graphics',
      description: 'Social media posts with compelling visuals get 650% more engagement than text-only posts. Our engaging social media graphics boost your online presence, increase shares and comments, and help you stand out in crowded feeds—essential for building brand awareness and driving conversions.',
      image: "/lovable-uploads/fb082b04-9f4c-46df-8835-77fb8eeb5819.png",
      category: 'Digital'
    },
    {
      id: 6,
      title: 'Company Profiles',
      description: 'A well-designed company profile is your business\'s resume—critical for winning contracts, attracting investors, and building partnerships. Our professional designs showcase your business story, achievements, and capabilities in a format that commands respect and opens doors to new opportunities.',
      image: brochureDesign,
      category: 'Print'
    },
    {
      id: 7,
      title: 'Presentations',
      description: 'Research shows 91% of professionals believe presentation design directly impacts audience retention and decision-making. Our compelling presentation designs captivate your audience, reinforce key messages, and significantly increase your chances of winning pitches, securing funding, or closing deals.',
      image: brandingIdentity,
      category: 'Digital'
    },
    {
      id: 8,
      title: 'Packaging Design',
      description: 'Packaging influences 72% of purchasing decisions and can increase product value perception by up to 30%. Our creative packaging solutions make your products irresistible on shelves, communicate quality instantly, and turn first-time buyers into loyal customers through memorable unboxing experiences.',
      image: logoShowcase,
      category: 'Print'
    },
    {
      id: 9,
      title: 'Business Cards',
      description: 'Despite digital alternatives, 88% of business cards are kept for future reference. Professional business card designs leave memorable first impressions, establish credibility, and facilitate networking. A well-designed card increases follow-up rates by 40% and positions you as a serious professional.',
      image: "/lovable-uploads/d5005d57-720a-414a-92e0-a8b09a17b9e9.png",
      category: 'Print'
    },
    {
      id: 10,
      title: 'Photo Editing & Manipulation',
      description: 'High-quality images increase content engagement by 94% and improve brand perception significantly. Our expert photo editing services enhance and transform your images, ensuring every visual represents your brand professionally—crucial for marketing materials, e-commerce, and social media success.',
      image: socialMediaGraphics,
      category: 'Digital'
    },
    {
      id: 11,
      title: 'Mockups',
      description: 'Professional mockups increase client approval rates by 75% and help secure projects before production. They showcase your designs in realistic contexts, allowing stakeholders to visualize end results, make informed decisions, and get excited about your products before investing in full production.',
      image: "/lovable-uploads/fde51658-1aeb-48b1-b224-1c10a95b1486.png",
      category: 'Digital'
    },
    {
      id: 12,
      title: 'Event Flyers',
      description: 'Well-designed flyers increase event attendance by 35% on average. Our attractive event flyers grab attention in busy environments, communicate essential information instantly, and create excitement that drives registrations and ticket sales—essential for successful events and promotions.',
      image: socialMediaGraphics,
      category: 'Print'
    },
    {
      id: 13,
      title: 'Infographics',
      description: 'Infographics are 30x more likely to be read than text articles and increase website traffic by 12%. Our visual data representations make complex information digestible, shareable, and memorable—perfect for marketing campaigns, reports, and educational content that needs to make an impact.',
      image: brochureDesign,
      category: 'Digital'
    },
    {
      id: 14,
      title: 'Motion Graphics',
      description: 'Video content with motion graphics increases viewer retention by 95% and conversion rates by up to 80%. Our dynamic animations bring your brand to life on digital platforms, explain complex concepts quickly, and create engaging content that stops scrollers and drives action.',
      image: brandingIdentity,
      category: 'Digital'
    },
    {
      id: 15,
      title: 'Web Graphics',
      description: 'Quality web graphics increase time-on-site by 88% and reduce bounce rates significantly. Our custom web graphics and digital assets ensure your website looks professional, loads quickly, and creates seamless user experiences that convert visitors into customers across all devices.',
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