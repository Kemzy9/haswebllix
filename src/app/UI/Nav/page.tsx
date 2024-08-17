'use client'
import { LogIn } from 'lucide-react';


import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Logo from '@/app/UI/logo/page';

const Nav = () => {
  const logo = {
    name: 'LogoName',
    icon: 'LogoIcon',
    business: { name: 'BusinessName' },
    alt: 'Logo Alt Text',
    size: 50,

    quality: 75,
  };

  return (
    <div className=" bg-gray-900">
      <Head>
        <title>Build landing page</title>
        <meta name="author" content="ChatGPT and User" />
        <meta name="keywords" content="conversation, dialogue, topics, chat, AI" />
        <meta
          name="description"
          content="Transform your conversations into PDF and sign documents securely with TheChatPdf."
        />
        <link rel="canonical" href="https://example.com" />
        <meta property="og:title" content="TheChatPdf - Transform Conversations to PDF & Sign Securely" />
        <meta
          property="og:description"
          content="Transform your conversations into PDF and sign documents securely with TheChatPdf."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:image" content="https://thechatpdf.com/og-image.jpg" />
      </Head>
      <NextSeo
        title="TheChatPdf - Transform Conversations to PDF & Sign Securely"
        description="Transform your conversations into PDF and sign documents securely with TheChatPdf."
        openGraph={{
          type: 'website',
          url: 'https://example.com',
          title: 'TheChatPdf - Transform Conversations to PDF & Sign Securely',
          description: 'Transform your conversations into PDF and sign documents securely with TheChatPdf.',
          images: [
            {
              url: 'https://thechatpdf.com/og-image.jpg',
              alt: 'TheChatPdf - Transform Conversations to PDF & Sign Securely',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <header className="bg-gray-900 water-drop-animation">
        <div className="container  px-9 py-8 flex justify-between items-center text-white">

          <div className="flex items-center space-x-4">
            <Logo />
            <span className="ml-2 text-white text-2xl font-semibold">WᴇʙʟLIx</span>
            <div className="flex items-center">


            </div>
          </div>






          <div className="flex items-center space-x-4">
            <a href="/signup" className="inline-flex items-center px-4 py-2 text-white font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-colors duration-300">
              <LogIn className="mr-2 h-5 w-5" />
              Sign In
            </a>

          </div>
        </div>
      </header>


    </div>
  );
};

export default Nav;
