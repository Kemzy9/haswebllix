// blog/page.tsx

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/models/dataa/blogData/route';
import { intro } from '@/models/dataa/intro/route';
import { webllix } from '@/models/dataa/webllix/route';
import Image from 'next/image';
import Footer from '../UI/footer/page';
import Nav from '@/app/UI/Nav/page';

const BlogList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Combine blog posts and intro data
  const allPosts = [...intro, ...blogPosts, ...webllix];

  // Filter combined posts based on search query
  const filteredPosts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container mx-auto p-4">
      <Nav />
      <h1 className="text-3xl font-bold mb-4">Blog</h1>

      <input
        type="text"
        placeholder="Search blog..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6 p-2 border bg-white rounded w-full"
      />

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post.id} className="mb-8 flex items-center justify-between">
            {/* Blog Title and Summary */}
            <div className="w-3/4">
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-semibold text-blue-500">
                  {post.title}
                </h2>
                <p>{post.summary}</p>
              </Link>
            </div>

            {/* Side Image */}
            <div className="w-1/4 ml-4">
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto rounded"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}

      <Footer />
    </main>
  );
};

export default BlogList;





