'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { blogPosts } from '@/models/dataa/blogData/route';
import { intro } from '@/models/dataa/intro/route';
import { webllix } from '@/models/dataa/webllix/route';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '@/app/UI/footer/page';
import Nav from '@/app/UI/Nav/page';

const BlogPost: React.FC = () => {
  const { slug } = useParams();

  // Combine blog posts and intro data
  const allPosts = [...blogPosts, ...intro, ...webllix];

  // Find the current post based on slug
  const post = allPosts.find((p) => p.slug === slug);

  // Error handling if post is not found
  if (!post) {
    return (
      <div className="container mx-auto p-4">
        <Nav />
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="text-gray-700">The blog post you&apos;re looking for does not exist.</p>
        <Footer />
      </div>
    );
  }

  // Find the index of the current post
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);

  // Get the next three posts (looping around if necessary)
  const nextPosts = [
    allPosts[(currentIndex + 1) % allPosts.length],
    allPosts[(currentIndex + 2) % allPosts.length],
    allPosts[(currentIndex + 3) % allPosts.length],
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{post.title} | Webllix AI website builder</title>
        <meta name="description" content={post.summary} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://webllix.com/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />
      <main className="container mx-auto p-4 flex">
        {/* Next Blog Recommendations on the Left */}
        <aside className="w-1/4 pr-8">
          <h2 className="text-xl font-semibold mb-4">Explore</h2>
          {nextPosts.map((nextPost) => (
            <Link href={`/blog/${nextPost.slug}`} key={nextPost.slug} className="block mb-6">
              <Image
                src={nextPost.image}
                alt={nextPost.title}
                className="w-full h-auto rounded mb-2"
                width={200}
                height={150}
              />
              <h3 className="text-lg font-bold text-blue-500">{nextPost.title}</h3>
              <p>{nextPost.summary}</p>
            </Link>
          ))}
        </aside>

        {/* Blog Content */}
        <article className="w-3/4">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <Image
            src={post.image}
            alt={post.title}
            className="mb-4 w-full h-auto rounded"
            width={800}
            height={400}
          />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />

          {post.buyNowLink && (
            <a
              href={post.buyNowLink}
              className="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
            >
              Buy Now
            </a>
          )}
        </article>
      </main>
      <Footer />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Introducing Webllix",
          "url": "https://www.webllix.com/",
          "description": "Webblix. Desing Website with Webllix ",
          "provider": {
            "@type": "Organization",
            "name": "webllix"
          },
          "offers": {
            "@type": "Blog",
            "url": "https://www.webllix.com/blog",

         
            "priceValidUntil": "2024-12-31",
            "itemOffered": {
              "@type": "Service",
              "name": "Blog"
            }
            
          }
          
        })}
      </script>
    </>
  );
};

export default BlogPost;
