import React from 'react';
import Hero from '../components/Hero';

const Index = () => {
  return (
    <div>
      <Hero />
      
      {/* Brief intro section */}
      <section className="section-padding bg-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-foreground">
            Welcome to Triple M Graphics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a creative design agency specializing in visual identity, branding, 
            and innovative design solutions. Our team combines artistic vision with 
            strategic thinking to create designs that not only look exceptional but 
            also drive results for your business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
