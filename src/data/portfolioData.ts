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
    title: "Logo Design & Brand Identity",
    category: "branding", 
    thumbnail: "/lovable-uploads/4e14bef3-25c2-49dc-a6b8-73b0bee9ca46.png",
    images: ["/lovable-uploads/4e14bef3-25c2-49dc-a6b8-73b0bee9ca46.png"],
    description: "Vibrant custom logo design showcasing our creative branding capabilities"
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
    title: "Banner & Poster Design",
    category: "print",
    thumbnail: "/lovable-uploads/202cb0a6-6395-40f5-976a-9478c1e56afd.png",
    images: ["/lovable-uploads/202cb0a6-6395-40f5-976a-9478c1e56afd.png"],
    description: "Large-scale outdoor advertising billboard design"
  },
  {
    id: 4,
    title: "Social Media Content Management",
    category: "digital",
    thumbnail: "/lovable-uploads/29b09750-e8ad-4ba1-9752-67ba557ddaa0.png",
    images: ["/lovable-uploads/29b09750-e8ad-4ba1-9752-67ba557ddaa0.png"],
    description: "Comprehensive social media graphics and branding elements for consistent online presence"
  },
  {
    id: 5,
    title: "Brochure & Marketing Materials",
    category: "print",
    thumbnail: "/lovable-uploads/e02dde99-a61c-4b41-86ad-2c92d9ea1ffe.png",
    images: ["/lovable-uploads/e02dde99-a61c-4b41-86ad-2c92d9ea1ffe.png"],
    description: "Professional brochure design showcasing our comprehensive service offerings"
  },
  {
    id: 6,
    title: "Email Marketing Graphics",
    category: "digital",
    thumbnail: "/lovable-uploads/66d4a3d9-8804-456f-8b3c-3aee3581fd8c.png",
    images: ["/lovable-uploads/66d4a3d9-8804-456f-8b3c-3aee3581fd8c.png"],
    description: "Professional email newsletter template and marketing graphics"
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
    title: "UI/UX Design & Website Graphics",
    category: "digital",
    thumbnail: "/lovable-uploads/ed5d283c-f500-464c-ab2c-696552df71b6.png",
    images: ["/lovable-uploads/ed5d283c-f500-464c-ab2c-696552df71b6.png"],
    description: "Modern menu interface design showcasing our UI/UX capabilities"
  },
  {
    id: 10,
    title: "E-book & PDF Layout Design",
    category: "digital",
    thumbnail: "/lovable-uploads/1f49e2da-a51c-41d0-8bb7-764016afee00.png",
    images: ["/lovable-uploads/1f49e2da-a51c-41d0-8bb7-764016afee00.png"],
    description: "Professional book cover and digital publication layout design"
  },
  {
    id: 11,
    title: "Motion Graphics & Video Editing",
    category: "digital",
    thumbnail: "/lovable-uploads/fb1e859d-4e1b-4f16-9bc2-ac8b4c1ec1bd.png",
    images: [
      "/lovable-uploads/fb1e859d-4e1b-4f16-9bc2-ac8b4c1ec1bd.png",
      "/lovable-uploads/367bb699-ad0d-470b-a6ca-5909d9d41c31.png"
    ],
    description: "Dynamic animated content and video graphics for social media"
  },
  {
    id: 12,
    title: "Event Invitations & Digital Cards",
    category: "digital",
    thumbnail: "/lovable-uploads/fb082b04-9f4c-46df-8835-77fb8eeb5819.png",
    images: [
      "/lovable-uploads/fb082b04-9f4c-46df-8835-77fb8eeb5819.png", 
      "/lovable-uploads/831db846-fe3b-423c-8e9d-43ef7f4afc35.png", 
      "/lovable-uploads/735f8139-30b1-4200-8a3f-5bf9fda19a81.png"
    ],
    description: "Beautiful event invitations and social media graphics"
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
    title: "Product Mockups & Packaging Design",
    category: "branding",
    thumbnail: "/lovable-uploads/f138f197-b12b-4864-85d5-2d1b95e49110.png",
    images: [
      "/lovable-uploads/f138f197-b12b-4864-85d5-2d1b95e49110.png",
      "/lovable-uploads/8afe93c0-a0eb-435b-a490-976ec9f847a0.png"
    ],
    description: "Professional packaging templates and product mockup designs"
  },
  {
    id: 15,
    title: "Photo Editing & Manipulation",
    category: "digital",
    thumbnail: "/lovable-uploads/a6b47f0c-7686-4d3c-9de4-fd79f42c5b76.png",
    images: ["/lovable-uploads/a6b47f0c-7686-4d3c-9de4-fd79f42c5b76.png"],
    description: "Professional photo editing and retouching services"
  },
  {
    id: 16,
    title: "YouTube Thumbnails & Channel Branding",
    category: "digital",
    thumbnail: "/lovable-uploads/8cc84cb5-b125-4575-9a3f-6b6f486c55f5.png",
    images: ["/lovable-uploads/8cc84cb5-b125-4575-9a3f-6b6f486c55f5.png"],
    description: "Eye-catching YouTube thumbnails and video content graphics"
  },
  {
    id: 17,
    title: "Infographics & Visual Reports",
    category: "digital",
    thumbnail: "/lovable-uploads/c0ac1688-987b-4195-a2a6-fd4602d92daa.png",
    images: ["/lovable-uploads/c0ac1688-987b-4195-a2a6-fd4602d92daa.png"],
    description: "Data visualization and infographic design"
  },
  {
    id: 18,
    title: "Brand Style Guide Creation",
    category: "branding",
    thumbnail: "/lovable-uploads/c5649789-1a55-4eae-802f-ff421d2ab055.png",
    images: ["/lovable-uploads/c5649789-1a55-4eae-802f-ff421d2ab055.png"],
    description: "Comprehensive brand guidelines and style documentation"
  },
  {
    id: 19,
    title: "Presentation & Pitch Deck Design",
    category: "print",
    thumbnail: "/lovable-uploads/dcd533ba-0f17-4fd9-af32-6f77f19c0cbb.png",
    images: ["/lovable-uploads/dcd533ba-0f17-4fd9-af32-6f77f19c0cbb.png"],
    description: "Professional presentation and pitch deck layouts"
  },
  {
    id: 20,
    title: "Animated Logo Stings & Video Intros",
    category: "digital",
    thumbnail: "/lovable-uploads/f7f3a19d-bf35-4262-9303-586ed09e9179.png",
    images: ["/lovable-uploads/f7f3a19d-bf35-4262-9303-586ed09e9179.png"],
    description: "Dynamic animated logo reveals and video intro sequences"
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