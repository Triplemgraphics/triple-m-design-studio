import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({ title, description, image, icon }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {icon && (
          <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
      </div>
      
      <h3 className="font-playfair font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;