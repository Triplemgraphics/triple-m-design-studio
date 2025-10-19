import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { ExternalLink, X } from 'lucide-react';
import { portfolioItems, categories } from '../data/portfolioData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<any>(null);

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
    <div className="pt-24">
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 lg:mb-20">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-foreground">
                Our Portfolio
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Discover our diverse collection of creative projects that have helped brands tell their stories
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
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

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </Badge>
                    </div>
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

            {/* CTA Section */}
            <div className="text-center bg-card rounded-2xl p-12">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-foreground">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Let's collaborate to create something extraordinary for your brand. 
                Contact us today to discuss your design needs.
              </p>
              <Button size="lg" className="text-lg px-8 py-3">
                Get Started Today
              </Button>
            </div>
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
                  <div>
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
                  </div>
                  
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

export default Portfolio;