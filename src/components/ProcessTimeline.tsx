import React from 'react';
import { MessageCircle, Search, Lightbulb, Palette, RefreshCw, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { processSteps } from '../data/processData';

const iconMap = {
  MessageCircle,
  Search,
  Lightbulb,
  Palette,
  RefreshCw,
  Package,
};

const ProcessTimeline = () => {
  return (
    <section className="section-padding bg-pattern">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold mb-4 sm:mb-6 text-foreground">
            Our Design Process
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            From concept to completion - our proven process ensures exceptional results
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              
              return (
                <Card key={step.id} className="card-hover relative">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        Step {step.id}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg sm:text-xl">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      <span>Duration: {step.duration}</span>
                    </div>
                  </CardContent>
                  
                  {/* Connection line for larger screens */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-primary/30"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full -mt-0.5"></div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;