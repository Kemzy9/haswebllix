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
    <main className="container mx-auto px-6 py-16">
      <Nav />
      <section className="text-center mb-16 water-drop-animation rounded-md">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>

        <input
          type="text"
          placeholder="Search blog..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-6 p-2 border bg-white rounded w-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.id}
                className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transform transition-transform duration-500 ease-in-out hover:scale-105"
              >
                <div className="overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-48 md:h-60 md:w-60 rounded-t-lg md:rounded-none md:rounded-s-lg"
                    width={240}
                    height={240}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {post.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700">
                    {post.summary}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BlogList;
