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
import logoDesign from '@/assets/services/logo-design.jpg';
import branding from '@/assets/services/branding.jpg';
import brochure from '@/assets/services/brochure.jpg';
import socialMedia from '@/assets/services/social-media.jpg';

const Services = () => {
  const services = [
    {
      title: "Logo Design",
      description: "Custom logo designs that capture your brand's essence and create lasting impressions. Professional, memorable, and scalable across all platforms.",
      image: logoDesign,
      icon: <Palette />
    },
    {
      title: "Branding & Identity",
      description: "Complete brand identity systems including color palettes, typography, and brand guidelines that establish your unique market presence.",
      image: branding,
      icon: <Building />
    },
    {
      title: "Brochure Design",
      description: "Professional brochures and marketing materials that effectively communicate your message and showcase your products or services.",
      image: brochure,
      icon: <FileText />
    },
    {
      title: "Banner & Poster Design",
      description: "Eye-catching banners and posters for events, promotions, and advertising campaigns that grab attention and drive action.",
      image: "/api/placeholder/400/300",
      icon: <Image />
    },
    {
      title: "Social Media Graphics",
      description: "Engaging social media content including posts, stories, and cover designs optimized for various platforms and audiences.",
      image: socialMedia,
      icon: <Share2 />
    },
    {
      title: "Company Profiles",
      description: "Professional company profile designs that showcase your business story, values, and capabilities in an impressive format.",
      image: "/api/placeholder/400/300",
      icon: <Building />
    },
    {
      title: "Presentations",
      description: "Dynamic presentation designs that captivate audiences and effectively communicate your ideas, data, and proposals.",
      image: "/api/placeholder/400/300",
      icon: <Presentation />
    },
    {
      title: "Packaging Design",
      description: "Creative packaging solutions that protect your products while enhancing brand appeal and shelf presence.",
      image: "/api/placeholder/400/300",
      icon: <Package />
    },
    {
      title: "Business Cards",
      description: "Professional business card designs that make memorable first impressions and reflect your brand's professionalism.",
      image: "/api/placeholder/400/300",
      icon: <CreditCard />
    },
    {
      title: "Photo Editing & Manipulation",
      description: "Expert photo editing services including retouching, color correction, and creative manipulation for stunning visual results.",
      image: "/api/placeholder/400/300",
      icon: <Edit3 />
    },
    {
      title: "Mockups",
      description: "Professional mockup designs that showcase your products and designs in realistic, appealing contexts for presentations.",
      image: "/api/placeholder/400/300",
      icon: <Layers />
    },
    {
      title: "Event Flyers",
      description: "Creative event flyers and promotional materials that generate excitement and drive attendance for your events and activities.",
      image: "/api/placeholder/400/300",
      icon: <Calendar />
    },
    {
      title: "Infographics",
      description: "Data visualization and infographic designs that transform complex information into engaging, easy-to-understand visuals.",
      image: "/api/placeholder/400/300",
      icon: <BarChart3 />
    },
    {
      title: "Motion Graphics",
      description: "Animated graphics and motion design for digital platforms, presentations, and video content that brings your brand to life.",
      image: "/api/placeholder/400/300",
      icon: <Play />
    },
    {
      title: "Web Graphics",
      description: "Custom web graphics including banners, icons, and digital assets optimized for websites and online platforms.",
      image: "/api/placeholder/400/300",
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