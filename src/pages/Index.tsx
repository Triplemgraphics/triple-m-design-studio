import React, { useState } from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Star, Award, Users, CheckCircle, ArrowRight, Calendar, User, Mail, Phone, MapPin, Facebook, MessageCircle, ExternalLink, X } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { portfolioItems as allPortfolioItems } from '../data/portfolioData';

// Import service images
import logoShowcase from '../assets/services/logo-showcase.jpg';
import brandingIdentity from '../assets/services/branding-identity.jpg';
import brochureDesign from '../assets/services/brochure-design.jpg';
import socialMediaGraphics from '../assets/services/social-media-graphics.jpg';
import bannerPoster from '../assets/services/banner-poster.jpg';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const blogPosts = [
    {
      id: 1,
      title: "The Power of Visual Branding in 2025",
      excerpt: "Discover how strong visual branding can transform your business and create lasting connections with your audience.",
      image: brandingIdentity,
      date: "2025-01-15",
      author: "Triple M Graphics Team"
    },
    {
      id: 2,
      title: "Logo Design Trends That Will Dominate This Year",
      excerpt: "Explore the latest logo design trends and learn how to create timeless designs that stand out in the market.",
      image: logoShowcase,
      date: "2025-01-10",
      author: "Creative Director"
    },
    {
      id: 3,
      title: "Social Media Graphics: Best Practices for Engagement",
      excerpt: "Learn the secrets to creating social media graphics that capture attention and drive meaningful engagement.",
      image: socialMediaGraphics,
      date: "2025-01-05",
      author: "Digital Designer"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
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
      <Hero />
      
      {/* Brief intro section */}
      <section className="section-padding bg-pattern">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4 sm:mb-6 text-foreground">
            Welcome to Triple M Graphics
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            We are a creative design agency specializing in visual identity, branding, 
            and innovative design solutions. Our team combines artistic vision with 
            strategic thinking to create designs that not only look exceptional but 
            also drive results for your business.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4 sm:mb-6 text-foreground">
                About Triple M Graphics
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Your trusted partner in creative design and visual storytelling
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
              <div className="order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-4 sm:mb-6 text-foreground">Our Story</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Triple M Graphics was founded with a simple yet powerful vision: to help businesses 
                  communicate their unique stories through exceptional design. We believe that great 
                  design is not just about aesthetics—it's about creating meaningful connections 
                  between brands and their audiences.
                </p>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Our team of creative professionals brings together years of experience in graphic 
                  design, branding, and visual communication. We work closely with our clients to 
                  understand their vision and transform it into compelling visual narratives that 
                  resonate with their target audience.
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">200+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={brandingIdentity} 
                  alt="About Triple M Graphics"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <Card className="card-hover">
                <CardHeader className="pb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    To empower businesses with exceptional design solutions that communicate their 
                    brand message effectively and drive meaningful engagement with their audience.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader className="pb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    To be the leading creative design agency in Kenya, known for innovative solutions 
                    and exceptional client service that transforms businesses through the power of design.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-4 sm:mb-6 text-center text-foreground">Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Client-Focused</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    We prioritize understanding your unique needs and delivering personalized solutions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Quality Assured</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Every project undergoes rigorous quality checks to ensure exceptional results.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Creative Excellence</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Our team brings creativity and innovation to every project we undertake.
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
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4 sm:mb-6 text-foreground">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Comprehensive design solutions tailored to your business needs
            </p>
          </div>

          {/* Service Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {['All', 'Branding', 'Print', 'Digital'].map((category) => (
              <Button
                key={category}
                variant={selectedService === category ? 'default' : 'outline'}
                onClick={() => setSelectedService(category)}
                className="rounded-full text-sm sm:text-base px-4 sm:px-6"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4 sm:mb-6 text-foreground">
              Our Portfolio
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Showcasing our best work and creative solutions
            </p>
          </div>

          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {['All', 'Branding', 'Print', 'Digital'].map((category) => (
              <Button
                key={category}
                variant={selectedService === category ? 'default' : 'outline'}
                onClick={() => setSelectedService(category)}
                className="rounded-full text-sm sm:text-base px-4 sm:px-6"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredPortfolioItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-item group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                      <Badge variant="secondary" className="text-xs sm:text-sm">{item.category}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-8 sm:mt-12">
            <Button 
              variant="outline" 
              className="btn-hero"
              onClick={() => window.location.href = '/portfolio'}
            >
              View Full Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding bg-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-foreground">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tips, and trends from the world of design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="card-hover overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <User className="w-4 h-4 ml-2" />
                    <span>{post.author}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      className="min-h-32"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@triplemgraphics.co.ke</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+254 740 717 670</p>
                      <p className="text-muted-foreground">+254 754 868 688</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                  <CardDescription>
                    Connect with us on social media for updates and inspiration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=100088884501805"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Facebook</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@triple.m.graphics?_t=ZM-8z26hSxoujI&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>TikTok</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
