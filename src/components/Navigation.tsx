import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import logo from '@/assets/triple-m-logo.jpg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-[var(--shadow-card)]'
          : 'bg-background/80 backdrop-blur-sm shadow-[0_4px_20px_rgba(218,165,32,0.3)]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 hover:scale-105">
            <img 
              src={logo} 
              alt="Triple M Graphics Logo" 
              className="h-16 w-16 rounded-full object-cover border-2 border-primary shadow-lg"
            />
            <div className="hidden sm:block">
              <div className="font-playfair font-bold text-xl text-primary">Triple M</div>
              <div className="text-sm font-semibold text-primary-glow">Graphics</div>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
              >
                <Button
                  variant={location.pathname === item.path ? "default" : "outline"}
                  size="sm"
                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground font-semibold text-xs px-2 py-1 h-7"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu - Hamburger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm" className="text-primary border-primary">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] bg-background">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant={location.pathname === item.path ? "default" : "outline"}
                      className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;