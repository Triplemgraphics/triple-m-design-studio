import React from 'react';
import { Award, Users, Target, Eye } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering designs that exceed expectations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their vision and bring it to life."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategy",
      description: "Every design decision is driven by strategic thinking and market insights."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vision",
      description: "We see beyond the ordinary to create extraordinary visual experiences."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-pattern">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-foreground">
              About Triple M Graphics
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a creative design agency passionate about transforming ideas into 
              compelling visual stories that resonate with audiences and drive business success.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold mb-6 text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between creativity and strategy, 
                Triple M Graphics has been at the forefront of innovative design solutions. 
                Our journey began with a simple belief: great design has the power to 
                transform businesses and create meaningful connections.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we specialize in branding, graphic design, and visual identity, 
                helping businesses of all sizes establish their unique presence in the market. 
                Our expertise spans across various industries, from startups to established 
                corporations, each receiving personalized attention and creative solutions.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-secondary rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-4xl">M</span>
                  </div>
                  <h3 className="font-playfair font-bold text-2xl text-foreground">Creative Excellence</h3>
                  <p className="text-muted-foreground">Since our founding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-playfair font-bold mb-6 text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses through exceptional design that communicates their 
                unique value proposition, builds brand recognition, and drives meaningful 
                engagement with their target audience. We believe in the transformative 
                power of visual communication.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-playfair font-bold mb-6 text-foreground">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading creative partner for businesses seeking to establish 
                a distinctive visual identity. We envision a world where every brand 
                has the opportunity to stand out through thoughtful, strategic design 
                that reflects their authentic story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-6 text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we approach 
              every project and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground">
                  {value.icon}
                </div>
                <h3 className="font-playfair font-semibold text-xl mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6 text-foreground">
            Our Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            We specialize in comprehensive visual identity solutions, combining creativity 
            with strategic insight to deliver designs that make a lasting impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-xl shadow-[var(--shadow-card)]">
              <h3 className="font-playfair font-semibold text-2xl mb-4 text-foreground">
                Branding & Identity
              </h3>
              <p className="text-muted-foreground">
                Complete brand identity systems including logos, color palettes, 
                typography, and brand guidelines that establish strong market presence.
              </p>
            </div>
            <div className="p-8 bg-card rounded-xl shadow-[var(--shadow-card)]">
              <h3 className="font-playfair font-semibold text-2xl mb-4 text-foreground">
                Graphic Design
              </h3>
              <p className="text-muted-foreground">
                From marketing materials to digital graphics, we create visually 
                compelling designs that communicate your message effectively.
              </p>
            </div>
            <div className="p-8 bg-card rounded-xl shadow-[var(--shadow-card)]">
              <h3 className="font-playfair font-semibold text-2xl mb-4 text-foreground">
                Visual Identity
              </h3>
              <p className="text-muted-foreground">
                Cohesive visual systems that reflect your brand's personality and 
                values across all touchpoints and platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;