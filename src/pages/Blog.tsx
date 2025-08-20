import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Psychology of Color in Brand Design",
      excerpt: "Discover how different colors can influence emotions and perceptions, and how to choose the right color palette for your brand identity.",
      image: "/api/placeholder/600/400",
      author: "Triple M Graphics Team",
      date: "December 15, 2024",
      category: "Branding"
    },
    {
      id: 2,
      title: "5 Essential Elements of Effective Logo Design",
      excerpt: "Learn about the fundamental principles that make a logo memorable, versatile, and impactful for your business success.",
      image: "/api/placeholder/600/400",
      author: "Triple M Graphics Team",
      date: "December 10, 2024",
      category: "Design Tips"
    },
    {
      id: 3,
      title: "Print vs Digital: Choosing the Right Medium",
      excerpt: "Understanding when to use print materials versus digital designs, and how to optimize your message for each platform.",
      image: "/api/placeholder/600/400",
      author: "Triple M Graphics Team",
      date: "December 5, 2024",
      category: "Strategy"
    },
    {
      id: 4,
      title: "Creating Cohesive Visual Identity Systems",
      excerpt: "A comprehensive guide to developing consistent brand visuals across all touchpoints and marketing materials.",
      image: "/api/placeholder/600/400",
      author: "Triple M Graphics Team",
      date: "November 28, 2024",
      category: "Branding"
    },
    {
      id: 5,
      title: "The Rise of Motion Graphics in Marketing",
      excerpt: "How animated visuals are transforming digital marketing and why motion graphics should be part of your content strategy.",
      image: "/api/placeholder/600/400",
      author: "Triple M Graphics Team",
      date: "November 20, 2024",
      category: "Trends"
    }
  ];

  const categories = [
    "All Posts",
    "Branding",
    "Design Tips",
    "Strategy",
    "Trends"
  ];

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
                className="px-6 py-3 rounded-full font-medium bg-secondary text-secondary-foreground hover:bg-accent transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
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
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {blogPosts[0].date}
                  </div>
                </div>
                <h2 className="text-3xl font-playfair font-bold mb-4 text-foreground">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <button className="inline-flex items-center text-primary font-semibold hover:text-primary-glow transition-colors">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-card rounded-xl shadow-[var(--shadow-card)] overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
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
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
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