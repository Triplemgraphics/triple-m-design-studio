import React from 'react';
import { Facebook, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { section: 'home', label: 'Home' },
    { section: 'about', label: 'About' },
    { section: 'services', label: 'Services' },
    { section: 'portfolio', label: 'Portfolio' },
    { section: 'blog', label: 'Blog' },
    { section: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    'Logo Design',
    'Branding & Identity',
    'Social Media Graphics',
    'Web Graphics',
  ];

  return (
    <footer className="bg-grey-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">M</span>
              </div>
              <div>
                <div className="font-playfair font-bold text-2xl">Triple M Graphics</div>
                <div className="text-white/70">Creative Design Agency</div>
              </div>
            </div>
            <p className="text-white/80 max-w-md mb-6">
              We create exceptional visual identities and creative solutions that 
              elevate brands and connect with audiences through innovative design.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100088884501805"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                onClick={(e) => {
                  console.log('Facebook link clicked');
                  // Allow default behavior to continue
                }}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@triple.m.graphics?_t=ZM-8z26hSxoujI&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 font-bold text-sm"
                onClick={(e) => {
                  console.log('TikTok link clicked');
                  // Allow default behavior to continue
                }}
              >
                TT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair font-semibold text-xl mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <a
                href="mailto:triplemgraphics092@gmail.com"
                className="text-white/70 hover:text-primary transition-colors duration-300"
              >
                triplemgraphics092@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Phone</h4>
              <div className="text-white/70">
                <div>+254 740 717 670</div>
                <div>+254 754 868 688</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100088884501805"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  Facebook <ExternalLink size={14} className="ml-1" />
                </a>
                <a
                  href="https://www.tiktok.com/@triple.m.graphics?_t=ZM-8z26hSxoujI&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  TikTok <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} Triple M Graphics. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;