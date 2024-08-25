'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Head from 'next/head';



interface Business {
    name: string;
}

const Hero: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-900  container mx-auto  p-4  ">
            <Head>
                <title>Webllix AI Website Design</title>
                <meta name="description" content="Design Custom Website with Ai " />
                <meta name="keywords" content="AI Landing page,webllix,AI web design,AI Landing page ,web design,web design company,web design agency,web design services,custom web design" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Webllix Generate AI Website" />
                <meta property="og:description" content="Design Smarter, Not Harder: AI-Powered Web Creation" />
                <meta property="og:image" content="https://wwwwebllix.com/" />
                <meta property="og:url" content="https://webllix.com/UI/landing-page" />
                <meta name="twitter:title" content="webllix || Design fast better  with webllix" />
                <meta name="twitter:description" content="Transform Your Vision into Reality with High-Impact Website" />
                <meta name="twitter:image" content="https://webllix//2.png" />
                <meta name="description" content="AI-Powered Web Design, Building Smarter, Faster, Better." />
                <link rel="canonical" href="https://www.webllix.com/hero" />


                {/* Add these lines to include your favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>



            <main className="container bg-gray-900 mx-auto px-6 py-16 m-2 rounded-xl">



                <section
                    id="top"
                    className="bg-gray-100 py-20 px-12 flex items-center rounded-3xl animate-gradient"
                >
                    <div className="w-1/2 pr-12">
                        <Image
                            src="/game.png"
                            alt="A game design"
                            width={300}
                            height={300}
                            className="rounded-md shadow-lg"
                            loading="lazy"
                        />
                    </div>

                    <div className="w-1/2">
                        <h1 className="text-5xl font-extrabold mb-4">
                            AI-Powered Web Design, Building Smarter, Faster, Better
                        </h1>
                        <p className="text-lg mb-6">
                            Transform your digital strategy with AI-enhanced web and landing page design. Deliver personalized, high-impact experiences that resonate with your audience and drive engagement.
                        </p>
                        <div className="flex justify-center">
                            <button
                                type="button"
                                onClick={() => window.location.href = '/login'}
                                className="text-white bg-black hover:bg-gradient-to-bl font-bold rounded-full text-lg px-12 py-4 text-center"
                            >
                                Try Free
                            </button>
                        </div>
                    </div>
                </section>


                <div className="bg-gradient-to-r from-pink-500 to-orange-500 max-w-8xl mx-auto sm:w-8/9 md:w-7/5 lg:w-3/4 h-[800px] rounded-3xl p-6">
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                        <div className="rounded-md shadow"></div>
                    </div>
                    <div className="flex flex-col md:flex-row mt-10 items-center justify-between">
                        <div className="w-1/2">
                            <h1 className="text-5xl font-extrabold mb-4">
                                Transform Your Vision into Reality with High-Impact Website
                            </h1>
                            <p className="text-lg mb-6">
                                Boost your web design projects with stunning, responsive templates. Perfect for creating visually captivating websites that engage your audience and deliver results.
                            </p>
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    onClick={() => window.location.href = '/login'}
                                    className="text-black bg-white hover:bg-gradient-to-bl font-bold rounded-full text-lg px-12 py-4 text-center"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                        <div className="relative max-w-sm bg-purple-900 p-8 rounded-xl shadow-lg transform rotate-3 translate-x-10 mx-auto md:mx-0 md:ml-8">
                            <div className="relative flex items-center justify-center w-full h-64 rounded-full shadow-lg overflow-hidden">
                                <div className="w-auto">
                                    <Image
                                        src="/noah.png"
                                        alt="Boy"
                                        width={500}
                                        height={300}
                                        className="rounded-full w-auto h-auto shadow-lg"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <h2 className="text-2xl font-bold text-white mb-2"></h2>
                                <p className="text-gray-300">
                                    Clean, intuitive design that truly reflects my brand. The process was seamless, and the results are outstanding.
                                </p>
                            </div>
                            <div className="flex">
                                <a href="#" className="bg-yellow-500 text-white px-6 py-3 rounded-full mr-4 hover:bg-yellow-600 transition duration-200">
                                    DESIGN WEBSITE
                                </a>
                                <a href="/UI/gallery/landing-page" className="bg-gray-800 text-white px-6 py-3 rounded-full mr-4 hover:bg-black transition duration-200">
                                    COLLECTIONS
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Hero;
