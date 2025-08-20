import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-design-agency.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Creative Design Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-white mb-6 animate-fade-in">
            Design That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              Speaks
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            We craft exceptional visual identities and creative solutions that 
            elevate your brand and connect with your audience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link
              to="/contact"
              className="btn-hero group inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold tracking-wide hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;