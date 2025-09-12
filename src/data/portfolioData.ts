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
    title: "Outdoor Billboard Design",
    category: "print", 
    thumbnail: "/lovable-uploads/202cb0a6-6395-40f5-976a-9478c1e56afd.png",
    images: ["/lovable-uploads/202cb0a6-6395-40f5-976a-9478c1e56afd.png"],
    description: "Large-scale outdoor advertising billboard for graphics services"
  },
  {
    id: 2,
    title: "Business Card Mockups",
    category: "print",
    thumbnail: "/lovable-uploads/c878a607-fd41-43ae-a72c-968b1e78759d.png",
    images: ["/lovable-uploads/c878a607-fd41-43ae-a72c-968b1e78759d.png"],
    description: "Professional business card design with modern gradient layout"
  },
  {
    id: 3,
    title: "Colorful Bird Logo Design",
    category: "branding",
    thumbnail: "/lovable-uploads/4e14bef3-25c2-49dc-a6b8-73b0bee9ca46.png",
    images: ["/lovable-uploads/4e14bef3-25c2-49dc-a6b8-73b0bee9ca46.png"],
    description: "Vibrant hummingbird logo created in Adobe Illustrator"
  },
  {
    id: 4,
    title: "Design Portfolio Showcase",
    category: "branding",
    thumbnail: "/lovable-uploads/29b09750-e8ad-4ba1-9752-67ba557ddaa0.png",
    images: ["/lovable-uploads/29b09750-e8ad-4ba1-9752-67ba557ddaa0.png"],
    description: "Comprehensive display of various design materials and branding elements"
  },
  {
    id: 5,
    title: "Triple M Graphics Brochure",
    category: "print",
    thumbnail: "/lovable-uploads/e02dde99-a61c-4b41-86ad-2c92d9ea1ffe.png",
    images: ["/lovable-uploads/e02dde99-a61c-4b41-86ad-2c92d9ea1ffe.png"],
    description: "Creative design service brochure with colorful graphics and service listings"
  },
  {
    id: 6,
    title: "Business Template Design",
    category: "print",
    thumbnail: "/lovable-uploads/66d4a3d9-8804-456f-8b3c-3aee3581fd8c.png",
    images: ["/lovable-uploads/66d4a3d9-8804-456f-8b3c-3aee3581fd8c.png"],
    description: "Professional business template created in design software"
  },
  {
    id: 7,
    title: "Greenland Farm Company Profile",
    category: "print",
    thumbnail: "/lovable-uploads/f71b08cd-da53-438f-a351-78c47dc8728d.png",
    images: ["/lovable-uploads/f71b08cd-da53-438f-a351-78c47dc8728d.png"],
    description: "Organic farm company profile design with green branding"
  },
  {
    id: 8,
    title: "Style Stash Fashion Catalog",
    category: "print",
    thumbnail: "/lovable-uploads/1d6b5e75-ea9a-4e24-b3ef-ad5cd5319612.png",
    images: ["/lovable-uploads/1d6b5e75-ea9a-4e24-b3ef-ad5cd5319612.png"],
    description: "Fashion accessories catalog design featuring handbags and style elements"
  },
  {
    id: 9,
    title: "Restaurant Menu Design",
    category: "print",
    thumbnail: "/lovable-uploads/ed5d283c-f500-464c-ab2c-696552df71b6.png",
    images: ["/lovable-uploads/ed5d283c-f500-464c-ab2c-696552df71b6.png"],
    description: "Modern food menu design with elegant layout and food photography"
  },
  {
    id: 10,
    title: "Book Cover Design",
    category: "print",
    thumbnail: "/lovable-uploads/1f49e2da-a51c-41d0-8bb7-764016afee00.png",
    images: ["/lovable-uploads/1f49e2da-a51c-41d0-8bb7-764016afee00.png"],
    description: "Professional book cover design for business and prophecy themed publication"
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
  },
  {
    id: 13,
    title: "Crystal Edge Product Branding",
    category: "branding",
    thumbnail: "/lovable-uploads/aa954ecd-8a1b-4731-8109-361e6947b891.png",
    images: [
      "/lovable-uploads/aa954ecd-8a1b-4731-8109-361e6947b891.png",
      "/lovable-uploads/fb3e43d9-27d9-4ebb-9044-b3cedfd69a1e.png",
      "/lovable-uploads/4c5d9dbe-7ba3-4b49-b37f-7bf8ec44c780.png",
      "/lovable-uploads/41e01f26-4a1f-46bc-a3ad-bd4199904e62.png"
    ],
    description: "Complete product branding and packaging design for Crystal Edge cleaning products line"
  },
  {
    id: 14,
    title: "Product Packaging Templates",
    category: "branding",
    thumbnail: "/lovable-uploads/f138f197-b12b-4864-85d5-2d1b95e49110.png",
    images: [
      "/lovable-uploads/f138f197-b12b-4864-85d5-2d1b95e49110.png",
      "/lovable-uploads/8afe93c0-a0eb-435b-a490-976ec9f847a0.png"
    ],
    description: "Blank packaging templates and container designs for various product lines"
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