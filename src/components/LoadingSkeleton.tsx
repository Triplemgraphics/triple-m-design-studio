import React from 'react';

interface LoadingSkeletonProps {
  type: 'service' | 'portfolio' | 'testimonial';
  count?: number;
}

const LoadingSkeleton = ({ type, count = 3 }: LoadingSkeletonProps) => {
  const renderServiceSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-muted rounded-lg h-48 mb-6"></div>
      <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
      </div>
    </div>
  );

  const renderPortfolioSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-muted rounded-lg h-64 mb-4"></div>
      <div className="h-5 bg-muted rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-muted rounded w-1/2"></div>
    </div>
  );

  const renderTestimonialSkeleton = () => (
    <div className="animate-pulse bg-card p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-muted rounded-full mr-4"></div>
        <div className="flex-1">
          <div className="h-4 bg-muted rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-muted rounded w-1/4"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-muted rounded"></div>
        <div className="h-3 bg-muted rounded w-5/6"></div>
        <div className="h-3 bg-muted rounded w-4/6"></div>
      </div>
    </div>
  );

  const skeletonMap = {
    service: renderServiceSkeleton,
    portfolio: renderPortfolioSkeleton,
    testimonial: renderTestimonialSkeleton,
  };

  const renderSkeleton = skeletonMap[type];

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </>
  );
};

export default LoadingSkeleton;