import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'services' | 'breadcrumb';
}

const StructuredData = ({ type }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Triple M Graphics",
          "description": "Creative Design Agency specializing in Logo Design, Branding, and Visual Identity Solutions",
          "url": "https://triplemgraphics.co.ke",
          "logo": "https://triplemgraphics.co.ke/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+254-XXX-XXX-XXX",
            "contactType": "customer service",
            "areaServed": "KE",
            "availableLanguage": ["en", "sw"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
          },
          "sameAs": [
            "https://facebook.com/triplemgraphics",
            "https://instagram.com/triplemgraphics",
            "https://twitter.com/triplemgraphics"
          ]
        };

      case 'services':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Graphic Design Services",
          "provider": {
            "@type": "Organization",
            "name": "Triple M Graphics"
          },
          "areaServed": "KE",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Design Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Logo Design & Brand Identity"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Business Cards & Stationery Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Social Media Content Management"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Motion Graphics & Video Editing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "UI/UX Design for Apps and Websites"
                }
              }
            ]
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://triplemgraphics.co.ke"
            }
          ]
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default StructuredData;