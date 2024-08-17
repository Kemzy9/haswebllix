'use client'

import React from "react";


const FrequentlyAsk = () => {
    return (
        <div
            className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            <div className="mx-auto px-5">
                <div className="flex flex-col items-center">
                    <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
                    <p className="mt-3 text-lg text-neutral-500 md:text-xl">Frequenty asked questions

                    </p>
                </div>
                <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> How do build website Design with Webllix</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Its very easy to design website /landing page  just signup  and open Dashboard  where you can type your company,trade name  and type  which kind of website design you want within in sec Webllix will generate website design 
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> Can I try free?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes,We&apos;ve implemented  limit for free 1 Website design/user 
                            </p>
                        </details>
                    </div>
                    
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> How many type of website design I can create ?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <a className="text-blue-500 hover:underline" href="/UI/gallery/landing-page">Collection</a>

                         
                            When comes how many types of website design .All type of website design can be tailored to specific needs and objectives.and theres no limit to the creativity and functionality you can incorporate into all type website design
                            <a className="text-blue-500 hover:underline" href="">PREMIUM plan.</a>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> If I am  beginner in website design. Can I build website like professional website ?  </span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">Yes,If you are beginner you came the right palace Webllix offer for beginner to design website with just with prompt and your website design will be ready .
                            </p>
                        </details>
                    </div>
                    <div className="py-5">
                        <details className="group">
                            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                <span> Can we build  functional website  ?</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className="group-open:animate-fadeIn mt-3 text-neutral-600">We are working on it . Sigup-up for stay updated 
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FrequentlyAsk;
