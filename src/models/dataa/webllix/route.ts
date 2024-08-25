
//model/data/webllix/route.ts

export interface Webllix {
    id: number;
    title: string;
    summary: string;
    content: string;
    slug: string;
    image: string;
    buyNowLink?: string;
  }
  
  export const webllix: Webllix[] = [

    // Add more blog posts here

    {
      id: 1,
      title: "best website design company red red ",
      summary:
        "Explore how to start an architecture business and strategies for revenue generation in the architecture industry.",
      content: `
     <nav class="top-nav">
    <!-- Navigation items here -->
  </nav>
  <article class="container mx-auto  bg-slate-50 p-4">
    <header class="flex items-center mb-6">
      <img src="/emily.png" alt="Profile icon" class="w-12 h-12 rounded-full mr-4" />
      <h1 class="text-4xl font-bold">Emily</h1>
    </header>
    <header>
      <h1 class="text-4xl font-bold mb-4">Why WebLLix is the Best Website Design Company</h1>
      <p class="text-lg mb-6">WebLLix has consistently delivered top-tier website designs that blend creativity with functionality. Here’s why I consider them the best in the business.</p>
    </header>
    
    <section>
      <h2 class="text-3xl font-semibold mb-4">What Makes WebLLix Stand Out?</h2>
      <p class="mb-4">WebLLix excels in creating stunning websites that are not only visually appealing but also user-friendly. Their services include:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Custom website design tailored to your brand</li>
        <li>SEO optimization for higher search rankings</li>
        <li>Responsive designs for all devices</li>
        <li>Comprehensive support and maintenance</li>
      </ul>
      <div class="w-1/2 pr-12">
        <img src="/carr.png" alt="A game design" class="rounded-md shadow-lg" loading="lazy" />
      </div>
    </section>
    
    <section>
      <h2 class="text-3xl font-semibold mb-4">Why Choose WebLLix?</h2>
      <p class="mb-4">WebLLix isn’t just about beautiful designs; they understand the need for websites that drive results. Their approach offers:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Innovative designs that capture your brands essence</li>
        <li>Strategic insights for better online visibility</li>
        <li>A collaborative process with a focus on client satisfaction</li>
      </ul>
    </section>
    <img src="/carr-ai-webedesign.png" alt="carr-web-design" class="rounded-md shadow-lg" loading="lazy" />
    
    <section>
      <h2 class="text-3xl font-semibold mb-4">How WebLLix Helps You Succeed</h2>
      <ol class="list-decimal pl-6 mb-4">
        <li>
          <h3 class="text-2xl font-semibold mb-2">Comprehensive Design Process</h3>
          <p class="mb-4">WebLLix starts with a detailed consultation to understand your needs, followed by a design that’s both unique and effective.</p>
        </li>
        <li>
          <h3 class="text-2xl font-semibold mb-2">Expert Team of Designers</h3>
          <p class="mb-4">Their team comprises experts who are passionate about design and stay ahead of industry trends.</p>
        </li>
        <li>
          <h3 class="text-2xl font-semibold mb-2">Commitment to Quality</h3>
          <p class="mb-4">Every website is built with meticulous attention to detail, ensuring a flawless user experience.</p>
        </li>
      </ol>
    </section>
    
    <section>
      <h2 class="text-3xl font-semibold mb-4">Client Testimonials</h2>
      <p class="mb-4">WebLLix has a proven track record of success, with countless satisfied clients who have seen real results from their services.</p>
    </section>
    
    <footer class="mt-8">
      <p class="mb-4">Ready to elevate your online presence? Discover how WebLLix can transform your website with cutting-edge design.</p>
      <a href="https://example.com/buy-webllix-guide" class="inline-block px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition">Get Started</a>
    </footer>
  </article>
    `,
      slug: "webllix",
      image: "",
  
      buyNowLink: "https://example.com/buy-architecture-business-guide", // Add a buy now link
    },


    
    
  ];
  