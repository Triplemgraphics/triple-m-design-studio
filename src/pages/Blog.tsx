import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import LoadingSkeleton from '@/components/LoadingSkeleton';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image_url: string | null;
  category: string;
  tags: string[] | null;
  featured: boolean;
  author_name: string;
  author_avatar_url: string | null;
  created_at: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(['All Posts']);
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, featured_image_url, category, tags, featured, author_name, author_avatar_url, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;

      if (data) {
        setBlogPosts(data);
        
        // Extract unique categories
        const uniqueCategories = ['All Posts', ...new Set(data.map(post => post.category))];
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = filteredPosts.find(post => post.featured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6 text-foreground">
            Design Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest design trends, insights, and tips from our 
            creative team. Explore articles that help you make informed design decisions.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <LoadingSkeleton type="portfolio" count={6} />
            </div>
          </div>
        </section>
      )}

      {/* Featured Post */}
      {!loading && featuredPost && (
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.featured_image_url || "/api/placeholder/600/400"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {featuredPost.author_name}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {formatDate(featuredPost.created_at)}
                    </div>
                  </div>
                  <h2 className="text-3xl font-playfair font-bold mb-4 text-foreground">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <button className="inline-flex items-center text-primary font-semibold hover:text-primary-glow transition-colors">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      {!loading && regularPosts.length > 0 && (
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-card rounded-xl shadow-[var(--shadow-card)] overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={post.featured_image_url || "/api/placeholder/600/400"}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {post.author_name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.created_at)}
                      </div>
                    </div>
                    <h3 className="text-xl font-playfair font-semibold mb-3 text-foreground line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <button className="inline-flex items-center text-primary font-medium hover:text-primary-glow transition-colors">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Posts Message */}
      {!loading && filteredPosts.length === 0 && (
        <section className="section-padding">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-lg">No blog posts found for this category.</p>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="section-padding bg-grey-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Stay Inspired
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter and get the latest design insights, 
            trends, and tips delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-hero">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;