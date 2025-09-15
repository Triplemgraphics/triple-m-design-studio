import React from 'react';
import EnhancedContactForm from '../components/EnhancedContactForm';
import Newsletter from '../components/Newsletter';

const Contact = () => {
  return (
    <div className="pt-24">
      {/* Contact Form */}
      <EnhancedContactForm />
      
      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Contact;