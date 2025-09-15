import React from 'react';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';

const FAQPage = () => {
  return (
    <div className="pt-24">
      {/* FAQ Section */}
      <FAQ />
      
      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default FAQPage;