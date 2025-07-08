import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getBlogById } from '../data/blogList';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogById(id || '');

  if (!post) return <div className="py-20 text-center">Article introuvable.</div>;

  return (
    <div className="container-padding py-16 max-w-3xl mx-auto">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://webkoda.com/blog/${post.id}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.image} />

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            image: [post.image],
            datePublished: "2025-06-01", 
            author: {
              "@type": "Organization",
              name: "Webkoda"
            },
            publisher: {
              "@type": "Organization",
              name: "Webkoda"
            },
            description: post.description,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://webkoda.com/blog/${post.id}`
            }
          })}
        </script>
      </Helmet>

      <Link to="/blog" className="text-blue-600 mb-6 block">← Retour au blog</Link>

      <div
        className="prose max-w-none text-gray-800"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export default BlogPostPage;
