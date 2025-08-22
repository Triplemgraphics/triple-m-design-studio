import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { 
  Palette, 
  FileText, 
  Image, 
  Share2, 
  Building, 
  Presentation, 
  Package, 
  CreditCard,
  Edit3,
  Layers,
  Calendar,
  BarChart3,
  Play,
  Monitor
} from 'lucide-react';
import logoDesign from '@/assets/services/logo-design-showcase.jpg';
import branding from '@/assets/services/brand-identity-complete.jpg';
import brochure from '@/assets/services/brochure-templates.jpg';
import socialMedia from '@/assets/services/social-media-designs.jpg';
import bannerPoster from '@/assets/services/banner-poster-designs.jpg';
import companyProfiles from '@/assets/services/company-profiles.jpg';
import presentations from '@/assets/services/presentations.jpg';
import packagingDesign from '@/assets/services/packaging-design.jpg';
import businessCards from '@/assets/services/business-cards.jpg';
import photoEditing from '@/assets/services/photo-editing.jpg';
import mockups from '@/assets/services/mockups.jpg';
import eventFlyers from '@/assets/services/event-flyers.jpg';
import infographics from '@/assets/services/infographics.jpg';
import motionGraphics from '@/assets/services/motion-graphics.jpg';
import webGraphics from '@/assets/services/web-graphics.jpg';

const Services = () => {
  const services = [
    {
      title: "Logo Design",
      description: "Custom logo designs that capture your brand's essence and create lasting impressions. Professional, memorable, and scalable across all platforms.",
      image: "/lovable-uploads/546c305c-101c-4b81-a11b-1164a8588c26.png",
      icon: <Palette />
    },
    {
      title: "Branding & Identity",
      description: "Complete brand identity systems including color palettes, typography, and brand guidelines that establish your unique market presence.",
      image: "/lovable-uploads/605350f9-9f14-4250-a1af-50989984c11b.png",
      icon: <Building />
    },
    {
      title: "Brochure Design",
      description: "Professional brochures and marketing materials that effectively communicate your message and showcase your products or services.",
      image: "/lovable-uploads/f7f3a19d-bf35-4262-9303-586ed09e9179.png",
      icon: <FileText />
    },
    {
      title: "Banner & Poster Design",
      description: "Eye-catching banners and posters for events, promotions, and advertising campaigns that grab attention and drive action.",
      image: bannerPoster,
      icon: <Image />
    },
    {
      title: "Social Media Graphics",
      description: "Engaging social media content including posts, stories, and cover designs optimized for various platforms and audiences.",
      image: "/lovable-uploads/fb082b04-9f4c-46df-8835-77fb8eeb5819.png",
      icon: <Share2 />
    },
    {
      title: "Company Profiles",
      description: "Professional company profile designs that showcase your business story, values, and capabilities in an impressive format.",
      image: "/lovable-uploads/00c5a5f4-a44d-41d1-bd65-2c3c399c572e.png",
      icon: <Building />
    },
    {
      title: "Presentations",
      description: "Dynamic presentation designs that captivate audiences and effectively communicate your ideas, data, and proposals.",
      image: presentations,
      icon: <Presentation />
    },
    {
      title: "Packaging Design",
      description: "Creative packaging solutions that protect your products while enhancing brand appeal and shelf presence.",
      image: packagingDesign,
      icon: <Package />
    },
    {
      title: "Business Cards",
      description: "Professional business card designs that make memorable first impressions and reflect your brand's professionalism.",
      image: "/lovable-uploads/d5005d57-720a-414a-92e0-a8b09a17b9e9.png",
      icon: <CreditCard />
    },
    {
      title: "Photo Editing & Manipulation",
      description: "Expert photo editing services including retouching, color correction, and creative manipulation for stunning visual results.",
      image: photoEditing,
      icon: <Edit3 />
    },
    {
      title: "Mockups",
      description: "Professional mockup designs that showcase your products and designs in realistic, appealing contexts for presentations.",
      image: "/lovable-uploads/fde51658-1aeb-48b1-b224-1c10a95b1486.png",
      icon: <Layers />
    },
    {
      title: "Event Flyers",
      description: "Creative event flyers and promotional materials that generate excitement and drive attendance for your events and activities.",
      image: eventFlyers,
      icon: <Calendar />
    },
    {
      title: "Infographics",
      description: "Data visualization and infographic designs that transform complex information into engaging, easy-to-understand visuals.",
      image: infographics,
      icon: <BarChart3 />
    },
    {
      title: "Motion Graphics",
      description: "Animated graphics and motion design for digital platforms, presentations, and video content that brings your brand to life.",
      image: motionGraphics,
      icon: <Play />
    },
    {
      title: "Web Graphics",
      description: "Custom web graphics including banners, icons, and digital assets optimized for websites and online platforms.",
      image: "/lovable-uploads/b247bba0-149f-4dea-8fdb-6f7ca8ffb191.png",
      icon: <Monitor />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-foreground">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We offer comprehensive design solutions to elevate your brand and create 
            impactful visual communications across all platforms and mediums.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-grey-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Let's collaborate to create exceptional designs that capture your vision 
            and connect with your audience. Get in touch today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn-hero inline-flex items-center"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold tracking-wide hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;