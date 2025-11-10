import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BlogPostRow {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  category: string;
  tags: string[] | null;
  author_name: string;
  author_avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, slug, excerpt, content, featured_image_url, category, tags, author_name, author_avatar_url, created_at, updated_at')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (error) throw error;
        setPost(data);
      } catch (err) {
        console.error('Error loading post:', err);
        setError('Post not found or unavailable.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  const formattedDate = useMemo(() => {
    if (!post?.created_at) return '';
    return new Date(post.created_at).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }, [post?.created_at]);

  const description = useMemo(() => {
    const text = post?.excerpt || '';
    return text.length > 150 ? text.slice(0, 147) + '…' : text;
  }, [post?.excerpt]);

  const canonical = useMemo(() => {
    return typeof window !== 'undefined' && slug
      ? `${window.location.origin}/blog/${slug}`
      : undefined;
  }, [slug]);

  return (
    <main className="pt-20">
      <Helmet>
        <title>{post ? `${post.title} | Blog` : 'Blog Post | Blog'}</title>
        {description && <meta name="description" content={description} />}
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      {/* JSON-LD Article Schema */}
      {post && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            image: post.featured_image_url ? [post.featured_image_url] : undefined,
            datePublished: post.created_at,
            dateModified: post.updated_at,
            author: [{ '@type': 'Person', name: post.author_name }],
            articleSection: post.category,
            keywords: post.tags?.join(', '),
            description
          })}
        </script>
      )}

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Link to="/blog" className="inline-flex items-center text-primary font-medium hover:text-primary-glow transition-colors">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
              </Link>
            </div>

            {loading && (
              <div className="text-muted-foreground">Loading…</div>
            )}

            {!loading && error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-destructive">
                {error}
              </div>
            )}

            {!loading && post && (
              <article>
                <header className="mb-6 text-center">
                  <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
                    {post.title}
                  </h1>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><User size={16} /> {post.author_name}</span>
                    <span className="inline-flex items-center gap-1"><Calendar size={16} /> {formattedDate}</span>
                  </div>
                </header>

                {post.featured_image_url && (
                  <div className="mb-8">
                    <img
                      src={post.featured_image_url}
                      alt={`${post.title} featured image`}
                      className="w-full h-auto rounded-xl object-cover"
                      loading="lazy"
                      width={1200}
                      height={675}
                    />
                  </div>
                )}

                <section className="prose prose-neutral dark:prose-invert max-w-none leading-relaxed">
                  {/* Render plain text content with basic formatting */}
                  {post.content.split('\n').map((para, idx) => (
                    <p key={idx} className="mb-4">{para}</p>
                  ))}
                </section>
              </article>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
