-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image_url TEXT,
  category TEXT NOT NULL DEFAULT 'General',
  tags TEXT[],
  published BOOLEAN NOT NULL DEFAULT false,
  featured BOOLEAN NOT NULL DEFAULT false,
  author_name TEXT NOT NULL DEFAULT 'Admin',
  author_avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read published posts
CREATE POLICY "Anyone can view published blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

-- Create policy to allow authenticated users to manage all posts (for admin)
CREATE POLICY "Authenticated users can manage blog posts" 
ON public.blog_posts 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, featured, author_name)
VALUES 
(
  'The Future of Graphic Design: AI and Creativity',
  'future-of-graphic-design-ai-creativity',
  'Exploring how artificial intelligence is revolutionizing the creative industry while maintaining the human touch.',
  'Artificial intelligence is transforming every industry, and graphic design is no exception. As we stand at the intersection of technology and creativity, designers are discovering new ways to leverage AI tools while preserving the essential human elements that make design truly impactful...',
  'Design Trends',
  true,
  'Triple M Graphics'
),
(
  'Brand Identity: More Than Just a Logo',
  'brand-identity-more-than-logo',
  'Understanding the complete ecosystem of brand identity and how it impacts business success.',
  'When most people think of brand identity, they immediately picture a logo. While logos are undeniably important, true brand identity encompasses so much more. It''s the complete visual and emotional experience that customers have with your brand...',
  'Branding',
  false,
  'Triple M Graphics'
),
(
  '5 Essential Design Principles Every Business Owner Should Know',
  'essential-design-principles-business-owners',
  'Key design fundamentals that can transform your marketing materials and brand presence.',
  'Good design isn''t just about making things look pretty—it''s about effective communication. Whether you''re a startup founder or seasoned business owner, understanding these fundamental design principles can dramatically improve your marketing effectiveness...',
  'Design Tips',
  false,
  'Triple M Graphics'
);

-- Create index for better performance
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published);
CREATE INDEX idx_blog_posts_featured ON public.blog_posts(featured);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);