import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../data/testimonialsData';

const Testimonials = () => {
  return (
    <section className="section-padding bg-pattern">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4 sm:mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover h-full">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/20 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 flex-grow leading-relaxed text-sm sm:text-base">
                  "{testimonial.testimonial}"
                </blockquote>
                
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-primary/10 flex items-center justify-center">
                    <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs sm:text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;