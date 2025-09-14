import React, { useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Star, Award, Users, CheckCircle, ArrowRight, ExternalLink, X } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { portfolioItems as allPortfolioItems } from '../data/portfolioData';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ProcessTimeline from '../components/ProcessTimeline';
import Newsletter from '../components/Newsletter';
import EnhancedContactForm from '../components/EnhancedContactForm';

// Import service images
import logoShowcase from '../assets/services/logo-showcase.jpg';
import brandingIdentity from '../assets/services/branding-identity.jpg';
import brochureDesign from '../assets/services/brochure-design.jpg';
import socialMediaGraphics from '../assets/services/social-media-graphics.jpg';
import bannerPoster from '../assets/services/banner-poster.jpg';

const Index = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<any>(null);

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

  // Use first 4 items for home page preview
  const portfolioItems = allPortfolioItems.slice(0, 4).map(item => ({
    ...item,
    category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
    image: item.thumbnail
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // This can be used by child components if needed
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // This can be used by child components if needed
  };

  const filteredServices = selectedService === 'All' 
    ? services 
    : services.filter(service => service.category === selectedService);

  const filteredPortfolioItems = selectedService === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedService);

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
      <div id="hero">
        <Hero />
      </div>
      
      {/* About Section - Enhanced */}
      <section id="about" className="section-padding">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 lg:mb-20">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-foreground">
                About Triple M Graphics
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transforming Ideas into Visual Masterpieces Since 2019
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
            </div>

            {/* Hero Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-foreground">
                    Our Creative Journey
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Founded in 2019, Triple M Graphics emerged from a passionate vision to bridge the gap 
                    between businesses and their audiences through the power of exceptional visual design. 
                    What started as a small creative studio has evolved into Kenya's premier design agency, 
                    serving clients across diverse industries with innovative solutions that drive real business results.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our name represents three core pillars: <strong>Mastery</strong> in our craft, 
                    <strong>Motivation</strong> to exceed expectations, and <strong>Momentum</strong> 
                    that propels brands forward. Every project we undertake reflects these values, 
                    ensuring that our clients don't just get beautiful designs—they get strategic 
                    visual solutions that enhance their market presence.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe that exceptional design is born from deep understanding. That's why we 
                    invest time in learning about your business, your challenges, and your aspirations. 
                    This collaborative approach has earned us the trust of over 150 satisfied clients 
                    and recognition as industry leaders in creative excellence.
                  </p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">300+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={brandingIdentity} 
                  alt="Triple M Graphics Design Studio"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Mission, Vision & Values */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              <Card className="card-hover text-center p-8 bg-gradient-to-br from-primary/5 to-transparent">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4 font-playfair">Our Mission</CardTitle>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses of all sizes with exceptional design solutions that not only 
                    capture attention but also communicate brand messages effectively, foster meaningful 
                    connections, and drive sustainable growth in an increasingly visual world.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover text-center p-8 bg-gradient-to-br from-secondary/5 to-transparent">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-4 font-playfair">Our Vision</CardTitle>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed">
                    To be East Africa's most trusted creative design agency, recognized for transforming 
                    businesses through innovative visual storytelling, strategic design thinking, and 
                    an unwavering commitment to excellence that sets new industry standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover text-center p-8 bg-gradient-to-br from-accent/5 to-transparent">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-4 font-playfair">Our Values</CardTitle>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed">
                    Integrity in every interaction, creativity without compromise, collaboration as our 
                    foundation, and continuous innovation that pushes boundaries while maintaining 
                    the highest standards of professionalism and client satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What Sets Us Apart */}
            <div className="bg-card rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-foreground">
                  What Sets Us Apart
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our unique approach combines artistic excellence with strategic thinking to deliver results that exceed expectations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Client-Centric Approach</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We don't just listen—we immerse ourselves in your business to understand your unique 
                    challenges and opportunities, ensuring every design solution is perfectly aligned with your goals.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Quality Guarantee</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our rigorous quality assurance process includes multiple review stages, client feedback 
                    integration, and final optimization to ensure every deliverable meets our exacting standards.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Creative Innovation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We stay ahead of design trends while maintaining timeless appeal, using cutting-edge 
                    tools and techniques to create visuals that stand out in today's competitive marketplace.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Results-Driven Design</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Every design decision is backed by strategy. We create visuals that not only look 
                    exceptional but also drive engagement, conversions, and business growth for our clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Philosophy */}
            <div className="mt-20 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-8 text-foreground">
                  Our Creative Philosophy
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  "Great design is not just what looks good. Great design is what works beautifully, 
                  communicates clearly, and creates lasting connections between brands and their audiences."
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section id="services" className="section-padding bg-pattern">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 lg:mb-20">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-foreground">
                Our Services
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Comprehensive Design Solutions That Transform Your Business Vision Into Reality
              </p>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Service Categories Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              <Card className="card-hover p-8 text-center bg-gradient-to-br from-primary/5 to-transparent">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-4 font-playfair">Branding & Identity</CardTitle>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Complete brand identity solutions from concept to implementation. We create cohesive 
                    visual identities that resonate with your target audience and differentiate you in the marketplace.
                  </p>
                  <Badge variant="outline" className="mb-2 mr-2">Logo Design</Badge>
                  <Badge variant="outline" className="mb-2 mr-2">Brand Guidelines</Badge>
                  <Badge variant="outline" className="mb-2">Visual Identity</Badge>
                </CardContent>
              </Card>

              <Card className="card-hover p-8 text-center bg-gradient-to-br from-secondary/5 to-transparent">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-secondary" />
                </div>
                <CardTitle className="text-2xl mb-4 font-playfair">Print Design</CardTitle>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    High-impact print materials that command attention and communicate your message effectively. 
                    From business cards to large-format displays, we ensure every piece reflects your brand excellence.
                  </p>
                  <Badge variant="outline" className="mb-2 mr-2">Brochures</Badge>
                  <Badge variant="outline" className="mb-2 mr-2">Business Cards</Badge>
                  <Badge variant="outline" className="mb-2">Marketing Materials</Badge>
                </CardContent>
              </Card>

              <Card className="card-hover p-8 text-center bg-gradient-to-br from-accent/5 to-transparent">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-4 font-playfair">Digital Design</CardTitle>
                <CardContent className="p-0">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Engaging digital assets optimized for online platforms. We create visually stunning content 
                    that captures attention in the digital space and drives meaningful engagement with your audience.
                  </p>
                  <Badge variant="outline" className="mb-2 mr-2">Social Media</Badge>
                  <Badge variant="outline" className="mb-2 mr-2">Web Graphics</Badge>
                  <Badge variant="outline" className="mb-2">Motion Graphics</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Service Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'Branding', 'Print', 'Digital'].map((category) => (
                <Button
                  key={category}
                  variant={selectedService === category ? 'default' : 'outline'}
                  onClick={() => setSelectedService(category)}
                  className="rounded-full text-base px-8 py-2 font-medium"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>

            {/* Why Choose Our Services */}
            <div className="mt-20 bg-card rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-foreground">
                  Why Choose Our Design Services
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our comprehensive approach ensures every project delivers exceptional results that exceed expectations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">Strategic Consultation</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every project begins with in-depth consultation to understand your business objectives and target audience.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">Quality Assurance</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rigorous quality checks at every stage ensure flawless execution and professional results.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">Creative Excellence</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Award-winning designs that combine aesthetic appeal with strategic marketing effectiveness.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">Timely Delivery</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Reliable project management ensures on-time delivery without compromising on quality or creativity.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Process */}
            <div className="mt-20 text-center">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-8 text-foreground">
                Our Service Process
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                A streamlined approach that ensures exceptional results from concept to completion
              </p>
              <Button 
                size="lg" 
                className="px-8 py-3"
                onClick={() => {
                  const processSection = document.getElementById('process');
                  if (processSection) {
                    processSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Our Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Enhanced */}
      <section id="portfolio" className="section-padding">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 lg:mb-20">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-foreground">
                Our Portfolio
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Showcasing Excellence: A Collection of Our Most Impactful Design Solutions
              </p>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Portfolio Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">300+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </div>

            {/* Portfolio Categories Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4">Brand Identity Projects</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Complete brand transformations that established market presence and drove business growth 
                  for our clients across various industries.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4">Print Design Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  High-impact print materials that commanded attention and effectively communicated 
                  our clients' messages in both local and international markets.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4">Digital Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cutting-edge digital designs that increased online engagement and helped our clients 
                  stand out in the competitive digital landscape.
                </p>
              </div>
            </div>

            {/* Portfolio Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'Branding', 'Print', 'Digital'].map((category) => (
                <Button
                  key={category}
                  variant={selectedService === category ? 'default' : 'outline'}
                  onClick={() => setSelectedService(category)}
                  className="rounded-full text-base px-8 py-2 font-medium"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
              {filteredPortfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="portfolio-item group cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                        <Badge variant="secondary" className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Client Success Stories */}
            <div className="bg-card rounded-2xl p-8 lg:p-12 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-foreground">
                  Portfolio Impact
                </h3>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Real results from our portfolio projects that transformed businesses and exceeded expectations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-lg font-semibold mb-2">Average Brand Recognition Increase</div>
                  <p className="text-muted-foreground text-sm">
                    Our branding projects typically result in significant improvements in brand awareness and market recognition.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">300%</div>
                  <div className="text-lg font-semibold mb-2">Social Media Engagement Boost</div>
                  <p className="text-muted-foreground text-sm">
                    Our social media designs dramatically increase engagement rates and follower growth for clients.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-lg font-semibold mb-2">Client Retention Rate</div>
                  <p className="text-muted-foreground text-sm">
                    Our exceptional results and service quality ensure long-term partnerships with our clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-foreground">
                Ready to Create Your Success Story?
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Join our growing portfolio of successful projects and transform your business with exceptional design
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="px-8 py-3"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="px-8 py-3"
                  onClick={() => openLightbox(filteredPortfolioItems[0])}
                >
                  View Gallery
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Enhanced Contact Section */}
      <div id="contact">
        <EnhancedContactForm />
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedPortfolioItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold">{selectedPortfolioItem.title}</h3>
                <Badge variant="secondary" className="mt-2">{selectedPortfolioItem.category}</Badge>
              </div>
              <Button variant="ghost" size="icon" onClick={closeLightbox}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedPortfolioItem.images.map((image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedPortfolioItem.title} ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
