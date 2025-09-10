// Shared portfolio data for consistency across the website
import restaurantBranding from '../assets/portfolio/restaurant-branding.jpg';
import techStartup from '../assets/portfolio/tech-startup-brand.jpg';
import fashionRetail from '../assets/portfolio/fashion-retail-brand.jpg';
import healthcareBranding from '../assets/portfolio/healthcare-branding.jpg';

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  description?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Restaurant Brand Identity",
    category: "branding", 
    thumbnail: restaurantBranding,
    images: [restaurantBranding, restaurantBranding, restaurantBranding],
    description: "Complete brand identity design for a premium restaurant chain"
  },
  {
    id: 2,
    title: "Tech Startup Branding",
    category: "branding",
    thumbnail: techStartup,
    images: [techStartup, techStartup, techStartup, techStartup],
    description: "Modern tech startup visual identity and brand guidelines"
  },
  {
    id: 3,
    title: "Fashion Retail Brand",
    category: "branding",
    thumbnail: fashionRetail,
    images: [fashionRetail, fashionRetail],
    description: "Luxury fashion brand identity with elegant visual elements"
  },
  {
    id: 4,
    title: "Healthcare Branding",
    category: "branding",
    thumbnail: healthcareBranding,
    images: [healthcareBranding, healthcareBranding, healthcareBranding, healthcareBranding, healthcareBranding],
    description: "Professional healthcare brand identity focused on trust and care"
  },
  {
    id: 5,
    title: "Chesfield Investment Logo",
    category: "branding",
    thumbnail: "/lovable-uploads/2d396c7a-320c-4a99-ae44-a0d2d45388bf.png",
    images: ["/lovable-uploads/2d396c7a-320c-4a99-ae44-a0d2d45388bf.png"],
    description: "Corporate logo design for investment company"
  },
  {
    id: 6,
    title: "Logo Collection",
    category: "branding",
    thumbnail: "/lovable-uploads/487aa273-974c-402b-8dc7-a492f7fb86fc.png",
    images: ["/lovable-uploads/487aa273-974c-402b-8dc7-a492f7fb86fc.png"],
    description: "Diverse logo designs showcasing creative versatility"
  },
  {
    id: 7,
    title: "Product Packaging - Car Shampoo",
    category: "packaging",
    thumbnail: "/lovable-uploads/533158de-6d7f-4598-a8e8-3fa6ef7b0e90.png",
    images: ["/lovable-uploads/533158de-6d7f-4598-a8e8-3fa6ef7b0e90.png"],
    description: "Automotive product packaging with modern design approach"
  },
  {
    id: 8,
    title: "Washing Powder Package Design",
    category: "packaging",
    thumbnail: "/lovable-uploads/32da0863-8239-4f1a-9166-79de4f15e0f1.png",
    images: ["/lovable-uploads/32da0863-8239-4f1a-9166-79de4f15e0f1.png"],
    description: "Consumer product packaging design for household detergent"
  },
  {
    id: 9,
    title: "Event Posters & Flyers",
    category: "print",
    thumbnail: "/lovable-uploads/a6b47f0c-7686-4d3c-9de4-fd79f42c5b76.png",
    images: [
      "/lovable-uploads/a6b47f0c-7686-4d3c-9de4-fd79f42c5b76.png",
      "/lovable-uploads/442a1ff7-f315-4c2d-aaf4-43e6c49a6ae3.png",
      "/lovable-uploads/c5649789-1a55-4eae-802f-ff421d2ab055.png"
    ],
    description: "Eye-catching event promotional materials and flyers"
  },
  {
    id: 10,
    title: "Business Card Designs",
    category: "print",
    thumbnail: "/lovable-uploads/dcd533ba-0f17-4fd9-af32-6f77f19c0cbb.png",
    images: ["/lovable-uploads/dcd533ba-0f17-4fd9-af32-6f77f19c0cbb.png"],
    description: "Professional business card designs with creative layouts"
  },
  {
    id: 11,
    title: "Social Media Graphics",
    category: "digital",
    thumbnail: "/lovable-uploads/fb1e859d-4e1b-4f16-9bc2-ac8b4c1ec1bd.png",
    images: [
      "/lovable-uploads/fb1e859d-4e1b-4f16-9bc2-ac8b4c1ec1bd.png",
      "/lovable-uploads/367bb699-ad0d-470b-a6ca-5909d9d41c31.png"
    ],
    description: "Engaging social media graphics for various platforms"
  },
  {
    id: 12,
    title: "Social Media Campaign Designs",
    category: "digital",
    thumbnail: "/lovable-uploads/fb082b04-9f4c-46df-8835-77fb8eeb5819.png",
    images: [
      "/lovable-uploads/fb082b04-9f4c-46df-8835-77fb8eeb5819.png", 
      "/lovable-uploads/831db846-fe3b-423c-8e9d-43ef7f4afc35.png", 
      "/lovable-uploads/735f8139-30b1-4200-8a3f-5bf9fda19a81.png"
    ],
    description: "Comprehensive social media campaign visuals"
  }
];

export const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'branding', name: 'Branding' },
  { id: 'print', name: 'Print Design' },
  { id: 'digital', name: 'Digital Design' },
  { id: 'packaging', name: 'Packaging' },
];

// Create a flat array of all individual images for gallery view
export const createImageGallery = (items: PortfolioItem[]) => {
  return items.flatMap((item, itemIndex) => 
    item.images.map((image, imageIndex) => ({
      id: `${item.id}-${imageIndex}`,
      title: item.images.length > 1 ? `${item.title} - ${imageIndex + 1}` : item.title,
      category: item.category,
      image: image,
      originalItem: item,
      description: item.description
    }))
  );
};