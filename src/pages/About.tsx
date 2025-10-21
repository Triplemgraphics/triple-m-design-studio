import React from 'react';
import { Card, CardContent, CardTitle } from '../components/ui/card';
import { Award, Star, CheckCircle, Users } from 'lucide-react';
import triplemImage from '../assets/triplem.jpg';

const About = () => {
  return (
    <div className="pt-24">
      <section className="section-padding">
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
                  src={triplemImage} 
                  alt="Triple M Graphics Showcase"
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

            {/* Why Choose Us Section */}
            <div className="bg-card rounded-2xl p-8 lg:p-12 mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl font-playfair font-bold mb-6 text-foreground">
                  Why Choose Triple M Graphics?
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
    </div>
  );
};

export default About;