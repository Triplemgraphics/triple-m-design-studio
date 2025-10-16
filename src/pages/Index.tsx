import React, { useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Award, Star, CheckCircle, Users, ExternalLink, X } from 'lucide-react';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import EnhancedContactForm from '../components/EnhancedContactForm';
import { portfolioItems, categories } from '../data/portfolioData';

// Import service images
import logoShowcase from '../assets/services/logo-showcase.jpg';
import brandingIdentity from '../assets/services/branding-identity.jpg';
import brochureDesign from '../assets/services/brochure-design.jpg';
import socialMediaGraphics from '../assets/services/social-media-graphics.jpg';
import bannerPoster from '../assets/services/banner-poster.jpg';

const Index = () => {
  const [selectedService, setSelectedService] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<any>(null);

  const services = [
    {
      id: 1,
      title: 'Logo Design & Brand Identity',
      description: 'Your logo is the face of your business. Our custom logo designs and complete brand identity packages capture your brand essence and create powerful, lasting impressions that set you apart from competitors.',
      image: "/lovable-uploads/546c305c-101c-4b81-a11b-1164a8588c26.png",
      category: 'Branding'
    },
    {
      id: 2,
      title: 'Business Cards & Stationery Design',
      description: 'Professional business cards and stationery designs that leave memorable first impressions and establish credibility. A well-designed card increases follow-up rates by 40%.',
      image: "/lovable-uploads/d5005d57-720a-414a-92e0-a8b09a17b9e9.png",
      category: 'Print'
    },
    {
      id: 3,
      title: 'Flyers, Posters & Brochure Design',
      description: 'Eye-catching print materials that drive up to 400% more foot traffic. Our brochures effectively communicate your message with 79% of recipients sharing them with others.',
      image: brochureDesign,
      category: 'Print'
    },
    {
      id: 4,
      title: 'Social Media Post Design (Static & Animated)',
      description: 'Engaging social media graphics that boost your online presence with 650% more engagement. We create both static and animated posts that stop scrollers and drive action.',
      image: "/lovable-uploads/fb082b04-9f4c-46df-8835-77fb8eeb5819.png",
      category: 'Digital'
    },
    {
      id: 5,
      title: 'Social Media Page Setup & Optimization',
      description: 'Complete social media presence setup and optimization across all platforms. We ensure your profiles are professional, consistent, and optimized for maximum reach and engagement.',
      image: socialMediaGraphics,
      category: 'Digital'
    },
    {
      id: 6,
      title: 'Social Media Content Management',
      description: 'Consistent, engaging content that builds your brand and community. Our content management services ensure your social media stays active, relevant, and aligned with your business goals.',
      image: socialMediaGraphics,
      category: 'Digital'
    },
    {
      id: 7,
      title: 'Motion Graphics for Ads & Intros',
      description: 'Dynamic motion graphics that increase viewer retention by 95% and conversion rates by up to 80%. Perfect for ads, intros, and explainer content that captivates audiences.',
      image: brandingIdentity,
      category: 'Digital'
    },
    {
      id: 8,
      title: 'Animated Logo Stings/Reveal Videos',
      description: 'Professional animated logo reveals that bring your brand to life. These short, impactful animations enhance brand recognition and add polish to all your video content.',
      image: logoShowcase,
      category: 'Digital'
    },
    {
      id: 9,
      title: 'Promo Video Editing',
      description: 'Expert video editing that transforms raw footage into compelling promotional content. Our editing increases message retention and drives viewer action across all platforms.',
      image: brandingIdentity,
      category: 'Digital'
    },
    {
      id: 10,
      title: 'YouTube Thumbnails & Channel Branding',
      description: 'Click-worthy YouTube thumbnails and complete channel branding that increases click-through rates by up to 154%. Stand out in search results and recommended videos.',
      image: socialMediaGraphics,
      category: 'Digital'
    },
    {
      id: 11,
      title: 'Website Banner & Ad Design',
      description: 'High-converting web banners and digital ads that grab attention and drive clicks. Our designs increase time-on-site by 88% and significantly reduce bounce rates.',
      image: bannerPoster,
      category: 'Digital'
    },
    {
      id: 12,
      title: 'Company Profile & Pitch Decks',
      description: 'Professional company profiles and pitch decks that win contracts and attract investors. Our designs showcase your business story in formats that command respect and open doors.',
      image: brochureDesign,
      category: 'Print'
    },
    {
      id: 13,
      title: 'Product Mockup Design (Packaging, T-Shirts, Billboards)',
      description: 'Realistic mockups that increase client approval rates by 75%. Visualize your designs on packaging, apparel, billboards, and more before production.',
      image: "/lovable-uploads/fde51658-1aeb-48b1-b224-1c10a95b1486.png",
      category: 'Print'
    },
    {
      id: 14,
      title: 'Infographics & Visual Reports',
      description: 'Infographics are 30x more likely to be read than text articles. Our visual data representations make complex information digestible, shareable, and memorable.',
      image: brochureDesign,
      category: 'Digital'
    },
    {
      id: 15,
      title: 'UI/UX Design for Apps and Websites',
      description: 'User-centered interface designs that enhance usability and increase conversions. Our designs create seamless experiences that keep users engaged and coming back.',
      image: logoShowcase,
      category: 'Digital'
    },
    {
      id: 16,
      title: 'Event Invite & Digital Card Design',
      description: 'Stunning event invitations and digital cards that create excitement and drive attendance. Our designs make your events memorable from the first impression.',
      image: socialMediaGraphics,
      category: 'Digital'
    },
    {
      id: 17,
      title: 'Professional Photo Editing & Manipulation',
      description: 'High-quality images increase content engagement by 94%. Our expert photo editing enhances and transforms your images for professional marketing materials and e-commerce.',
      image: socialMediaGraphics,
      category: 'Digital'
    },
    {
      id: 18,
      title: 'E-book & Digital PDF Layout Design',
      description: 'Professional e-book and PDF layouts that enhance readability and engagement. Our designs make your digital publications look polished and professional.',
      image: brochureDesign,
      category: 'Digital'
    },
    {
      id: 19,
      title: 'Brand Style Guide Creation',
      description: 'Comprehensive brand guidelines that ensure consistency across all touchpoints. Our style guides empower your team to maintain brand integrity and recognition.',
      image: brandingIdentity,
      category: 'Branding'
    },
    {
      id: 20,
      title: 'Email Marketing Graphics & Newsletter Design',
      description: 'Compelling email graphics and newsletter designs that increase open rates and click-throughs. Our designs make your messages stand out in crowded inboxes.',
      image: socialMediaGraphics,
      category: 'Digital'
    }
  ];

  const serviceCategories = ['All', 'Branding', 'Print', 'Digital'];

  const filteredServices = selectedService === 'All' 
    ? services 
    : services.filter(service => service.category === selectedService);

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory.toLowerCase());

  const openLightbox = (item: any) => {
    setSelectedPortfolioItem(item);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedPortfolioItem(null);
  };

  return (
    <div>
      <Hero />

      {/* About Section */}
      <section id="about" className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-6 text-foreground">
                About Triple M Graphics
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transforming Ideas into Visual Masterpieces Since 2019
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2019, Triple M Graphics emerged from a passionate vision to bridge the gap 
                  between businesses and their audiences through the power of exceptional visual design. 
                  What started as a small creative studio has evolved into Kenya's premier design agency, 
                  serving clients across diverse industries with innovative solutions that drive real business results.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our name represents three core pillars: <strong>Mastery</strong> in our craft, 
                  <strong>Motivation</strong> to exceed expectations, and <strong>Momentum</strong> 
                  that propels brands forward.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">300+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={brandingIdentity} 
                  alt="Triple M Graphics Design Studio"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-card rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-foreground">
                  Why Choose Triple M Graphics?
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our unique approach combines artistic excellence with strategic thinking
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Client-Centric Approach</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We immerse ourselves in your business to understand your unique challenges and opportunities.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Quality Guarantee</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Rigorous quality assurance with multiple review stages ensures excellence in every deliverable.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Creative Innovation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We stay ahead of design trends using cutting-edge tools to create standout visuals.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Results-Driven Design</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategic designs that drive engagement, conversions, and business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-6 text-foreground">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Comprehensive design solutions tailored to elevate your brand
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {serviceCategories.map((category) => (
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-6 text-foreground">
                Our Portfolio
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Discover our diverse collection of creative projects
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                variant={selectedCategory === 'All' ? "default" : "outline"}
                onClick={() => setSelectedCategory('All')}
                className="text-sm font-medium transition-all duration-300"
              >
                All Work
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name)}
                  className="text-sm font-medium transition-all duration-300"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Card 
                  key={item.id}
                  className="card-hover overflow-hidden group cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="text-xs mb-3">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-6 text-foreground">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's collaborate to create something extraordinary for your brand
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
            </div>
            <EnhancedContactForm />
          </div>
        </div>
      </section>

      {/* Portfolio Lightbox */}
      {lightboxOpen && selectedPortfolioItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-background rounded-lg">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedPortfolioItem.thumbnail}
                    alt={selectedPortfolioItem.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <div className="space-y-4">
                  <Badge variant="secondary" className="mb-4">
                    {selectedPortfolioItem.category.charAt(0).toUpperCase() + selectedPortfolioItem.category.slice(1)}
                  </Badge>
                  <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
                    {selectedPortfolioItem.title}
                  </h2>
                  {selectedPortfolioItem.description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedPortfolioItem.description}
                    </p>
                  )}
                  
                  {selectedPortfolioItem.images && selectedPortfolioItem.images.length > 1 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Additional Images</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedPortfolioItem.images.slice(1).map((image: string, index: number) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${selectedPortfolioItem.title} ${index + 2}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
