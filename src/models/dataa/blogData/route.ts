export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  slug: string;
  image: string;

  buyNowLink?: string; // Optional field for the "Buy Now" button
}

export const blogPosts: BlogPost[] = [
  {
    "id": 1,
    "title": "AI Web Design for Games: Design Your Website With in Seconds",
    "summary": "Create a stunning game website instantly with WebLLix's AI-powered design. Get award-winning, attractive designs in seconds.",
    "content": `
      <nav class="top-nav">
        <!-- Navigation items here -->
      </nav>
      <article class="container mx-auto p-4">
        <header class="flex items-center mb-6">
          <img src="/emily.png" alt="Profile icon" class="w-12 h-12 rounded-full mr-4" />
          <h1 class="text-4xl font-bold">Emily</h1>
        </header>
        <header>
          <h1 class="text-4xl font-bold mb-4">Design Your Game Website Instantly</h1>
          <p class="text-lg mb-6">Discover how to use AI to create a game website in seconds with WebLLix. Get a design that’s as captivating as your game.</p>
        </header>
        
        <section>
          <h2 class="text-3xl font-semibold mb-4">What is AI Web Design?</h2>
          <p class="mb-4">AI web design leverages artificial intelligence to automatically generate website designs tailored to your needs, including:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Automated, award-winning designs</li>
            <li>Custom layouts and styles</li>
            <li>Optimized user experience for all devices</li>
            <li>Instant updates and adjustments</li>
          </ul>
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
        </section>
        
        <section>
          <h2 class="text-3xl font-semibold mb-4">Why Choose AI Web Design?</h2>
          <p class="mb-4">AI-driven web design ensures speed, efficiency, and creativity. With WebLLix, you can:</p>
          <ul class="list-disc pl-6 mb-4">
            <li>Create a fully responsive website in minutes</li>
            <li>Access professional design elements</li>
            <li>Focus on content, while AI handles the design</li>
          </ul>
        </section>
        <Image
          src="/profile.png"
          alt="A game design"
          width={300}
          height={300}
          className="rounded-md shadow-lg"
          loading="lazy"
        />
        
        <section>
          <h2 class="text-3xl font-semibold mb-4">How AI Web Design Works</h2>
          <ol class="list-decimal pl-6 mb-4">
            <li>
              <h3 class="text-2xl font-semibold mb-2">Input Your Preferences</h3>
              <p class="mb-4">Tell the AI what you need—whether it’s a portfolio, eCommerce site, or blog.</p>
            </li>
            <li>
              <h3 class="text-2xl font-semibold mb-2">Generate Your Design</h3>
              <p class="mb-4">AI instantly generates a website layout based on your preferences.</p>
            </li>
            <li>
              <h3 class="text-2xl font-semibold mb-2">Customize and Launch</h3>
              <p class="mb-4">Make any final tweaks and launch your site—no coding required.</p>
            </li>
          </ol>
        </section>
        <Image
          src="/Aieditor.png"
          alt="A game design"
          width={300}
          height={300}
          className="rounded-md shadow-lg"
          loading="lazy"
        />
        
        <footer class="mt-8">
          <p class="mb-4">Ready to design your website? Start using WebLLix AI for free and create a professional site in seconds.</p>
          <a href="/signup" class="inline-block px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition">Get Started</a>
        </footer>
      </article>
    `,
    "slug": "Introducing",
    "image": "/a4.png",

  },
  
  {
    "id": 2,
    "title": "Best Website Builde greenr",
    "summary": "WebLLix - Best website builder.",
    "content": `
    <nav class="top-nav">
        <!-- Navigation items here -->
    </nav>
    <article class="container border-green-500 mx-auto p-4">
        <header class="flex items-center mb-6">
            <img src="/sophia.png" alt="Profile icon" class="w-12 h-12 rounded-full mr-4" />
            <h1 class="text-2xl font-bold">Sofia</h1>
        </header>
        <header>
            <h1 class="text-4xl font-bold mb-4">Design Websites and Get Code Faster with WebLLix</h1>
            <p class="text-lg mb-6">Discover the steps and strategies to create stunning websites effortlessly with WebLLix, the best AI-powered website builder.</p>
        </header>
        
        <section>
            <h2 class="text-3xl font-semibold mb-4">What is WebLLix?</h2>
            <p class="mb-4">WebLLix is an innovative AI-driven platform that allows you to design and build professional websites quickly, featuring:</p>
            <ul class="list-disc pl-6 mb-4">
                <li>Customizable design templates</li>
                <li>Effortless drag-and-drop interface</li>
                <li>SEO optimization tools</li>
                <li>Seamless integration with popular platforms</li>
            </ul>
            <div className="w-1/2 pr-12">
                <Image
                    src="/a4.png"
                    alt="A website design"
                    width={300}
                    height={300}
                    className="rounded-md shadow-lg"
                    loading="lazy"
                />
            </div>
        </section>
        
        <section>
            <h2 class="text-3xl font-semibold mb-4">Why Choose WebLLix?</h2>
            <p class="mb-4">WebLLix stands out as the leading website builder due to its user-friendly interface, flexibility, and cutting-edge AI technology that helps you build websites in minutes.</p>
            <ul class="list-disc pl-6 mb-4">
                <li>Customizable to suit any business needs</li>
                <li>Boosts your online presence with built-in SEO tools</li>
                <li>Designed for both beginners and professionals</li>
            </ul>
        </section>
        
        <Image
            src="/2.png"
            alt="A website design"
            width={300}
            height={300}
            className="rounded-md shadow-lg"
            loading="lazy"
        />
        
        <section>
            <h2 class="text-3xl font-semibold mb-4">How to Create a Website with WebLLix in 6 Steps</h2>
            <ol class="list-decimal pl-6 mb-4">
                <li>
                    <h3 class="text-2xl font-semibold mb-2">Choose a Template</h3>
                    <p class="mb-4">Select from a variety of professionally designed templates that suit your business or personal needs.</p>
                </li>
                <li>
                    <h3 class="text-2xl font-semibold mb-2">Customize Your Design</h3>
                    <p class="mb-4">Use WebLLix’s intuitive drag-and-drop editor to adjust the layout, colors, and content.</p>
                </li>
                <li>
                    <h3 class="text-2xl font-semibold mb-2">Optimize for SEO</h3>
                    <p class="mb-4">Ensure your website ranks well in search engines with built-in SEO tools.</p>
                </li>
                <li>
                    <h3 class="text-2xl font-semibold mb-2">Integrate Third-Party Services</h3>
                    <p class="mb-4">Add e-commerce, social media, or analytics tools to enhance your website’s functionality.</p>
                </li>
                <li>
                    <h3 class="text-2xl font-semibold mb-2">Preview and Test</h3>
                    <p class="mb-4">Check your site’s performance across devices before publishing.</p>
                </li>
                <li>
                    <h3 class="text-2xl font-semibold mb-2">Publish and Promote</h3>
                    <p class="mb-4">Launch your website and start driving traffic with targeted marketing strategies.</p>
                </li>
            </ol>
        </section>
        
        <Image
            src="/2.png"
            alt="A website design"
            width={300}
            height={300}
            className="rounded-md shadow-lg"
            loading="lazy"
        />
        
        <section>
            <h2 class="text-3xl font-semibold mb-4">WebLLix Website Design Plan Template</h2>
            <p class="mb-4">Use this template to outline your website design plan:</p>
            <div class="bg-gray-100 p-4 mb-4 rounded">
                <h3 class="text-2xl font-semibold mb-2">Project Overview</h3>
                <p>Project Name: [Your Website’s Name]</p>
                <p>Design Style: [Modern/Minimalist/Professional/etc.]</p>
                <p>Target Audience: [Demographics]</p>
                <p>Features: [Blog/Portfolio/E-commerce/etc.]</p>
                <p>Launch Date: [Month, Year]</p>
            </div>
        </section>
        
        <Image
            src="/2.png"
            alt="A website design"
            width={300}
            height={300}
            className="rounded-md shadow-lg"
            loading="lazy"
        />
        
        <footer class="mt-8">
            <p class="mb-4">Ready to design your website with WebLLix? Explore our comprehensive guide and get started today.</p>
            <a href="https://webllix.com/signup" class="inline-block px-6 py-3 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition">Get Started</a>
        </footer>
    </article>
    `,
    "slug": "best-website-builder",
    "image": "/r4.png",
    "buyNowLink": "https://webllix.com/signup"
},
  {
    id: 3,
    title: "best website design company green ",
    summary:
      "Explore how to start an architecture business and strategies for revenue generation in the architecture industry.",
    content: `
   <nav class="top-nav">
  <!-- Navigation items here -->
</nav>
<article class="container mx-auto  bg-indigo-400 p-4">
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
    slug: "starting-an-architecture-business",
    image: "/archo.png",

    buyNowLink: "https://example.com/buy-architecture-business-guide", // Add a buy now link
  },


  {
    id: 4,
    title: "Introducing AI  WebLLix ",
    summary:
      "Explore how AI is revolutionizing web design with WebLLix. Create stunning, responsive websites with ease.",
    content: `
      <nav class="top-nav">
        <!-- Navigation items here -->
      </nav>

      
      Prompt> create a clean modern, and engaging landing page for saas platform that offer ai powered customer support chatbots for ecommerce website the design should emphasiz efficency reliablity and cutting edge technolgy.


      <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>webllix - AI-Powered E-Commerce Chatbot</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          background-color: #0c2e45;
          color: #ffffff;
          margin: 0;
          padding: 0;
          text-align: center;
      }
      header {
          padding: 20px;
      }
      header nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
      header nav a {
          color: #ffffff;
          margin: 0 10px;
          text-decoration: none;
          font-weight: bold;
      }
      .cta-button {
          background-color: #3be8b0;
          color: #0c2e45;
          padding: 10px 20px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: bold;
      }
      .main-content {
          padding: 100px 20px;
      }
      .main-content h1 {
          font-size: 42px;
          margin-bottom: 20px;
      }
      .main-content p {
          font-size: 20px;
          margin-bottom: 40px;
          max-width: 800px;
          margin: 0 auto 40px;
      }
      .robot-section {
          display: flex;
          justify-content: space-around;
          padding: 50px 20px;
          flex-wrap: wrap;
      }
      .robot-section div {
          background-color: #35d7a4;
          padding: 20px;
          border-radius: 10px;
          width: 300px;
          text-align: left;
          margin: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }
      .robot-section div img {
          max-width: 100%;
          border-radius: 10px;
      }
      .robot-section h2 {
          font-size: 24px;
          margin-bottom: 10px;
      }
      .robot-section p {
          font-size: 16px;
          line-height: 1.5;
      }
      .features-section {
          padding: 50px 20px;
          background-color: #067a68;
      }
      .features-section h2 {
          font-size: 36px;
          margin-bottom: 30px;
      }
      .features-list {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
      }
      .features-list div {
          width: 250px;
          margin: 20px;
          text-align: left;
      }
      .features-list h3 {
          font-size: 20px;
          margin-bottom: 10px;
      }
      .features-list p {
          font-size: 16px;
          line-height: 1.5;
      }
      .testimonials-section {
          padding: 50px 20px;
          background-color: #0c2e45;
      }
      .testimonials-section h2 {
          font-size: 36px;
          margin-bottom: 30px;
      }
      .testimonial {
          margin: 20px;
          padding: 20px;
          background-color: #35d7a4;
          border-radius: 10px;
          max-width: 600px;
          margin: 20px auto;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }
      .testimonial p {
          font-size: 16px;
          font-style: italic;
      }
      .testimonial h3 {
          font-size: 20px;
          margin-top: 15px;
      }
      .pricing-section {
          padding: 50px 20px;
          background-color: #067a68;
      }
      .pricing-section h2 {
          font-size: 36px;
          margin-bottom: 30px;
      }
      .pricing-table {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
      }
      .pricing-plan {
          background-color: #35d7a4;
          padding: 20px;
          border-radius: 10px;
          width: 300px;
          margin: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }
      .pricing-plan h3 {
          font-size: 24px;
          margin-bottom: 10px;
      }
      .pricing-plan p {
          font-size: 16px;
          margin: 10px 0;
      }
      .pricing-plan .price {
          font-size: 36px;
          font-weight: bold;
          margin: 20px 0;
      }
      .pricing-plan .cta-button {
          background-color: #0c2e45;
          color: #35d7a4;
          margin-top: 20px;
          display: inline-block;
      }
      .faq-section {
          padding: 50px 20px;
          background-color: #0c2e45;
      }
      .faq-section h2 {
          font-size: 36px;
          margin-bottom: 30px;
      }
      .faq-list {
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
      }
      .faq-list h3 {
          font-size: 20px;
          margin-bottom: 10px;
      }
      .faq-list p {
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 20px;
      }
      footer {
          background-color: #0c2e45;
          padding: 20px;
          color: #35d7a4;
          text-align: center;
      }
  </style>



<header style="">
  <nav>
      <div><strong>webllix</strong></div>
      <div style="">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">FAQ</a>
          <a href="#" class="cta-button" style="">Get Started</a>
      </div>
  </nav>
</header>

<section class="main-content" style="background-size: cover; background-position: center center; background-repeat: no-repeat;">
  <h1 style="background-size: cover; background-position: center center; background-repeat: no-repeat;"><span style="color: rgb(229, 42, 42);"><span style=""><span style=""><span style="color: rgb(223, 48, 48);"><span style="color: rgb(204, 30, 30);"><span style=""><span style=""><span style="font-family: Tahoma, sans-serif;"><span style="font-family: Georgia, serif;">Welcome</span></span></span></span></span></span></span></span> </span>to webllix: Your <span style="font-family: &quot;Times New Roman&quot;, Times, serif;">AI-Powered </span><span style="font-family: Tahoma, sans-serif;">E-Commerce</span> <span style="font-family: Georgia, serif;"><span style="color: rgb(217, 23, 23);">Chatbot</span></span></h1>
  <p style="">Transform the way you engage with customers. Our AI chatbot automates customer support, boosts sales, and provides a personalized shopping experience. Save time, increase efficiency, and elevate customer satisfaction with webllix.</p>
  <a href="#" class="cta-button">Start Your Free Trial</a></section>

<section class="robot-section" style="">
  <div style="">
      <h2 style="">Automated Support</h2><img src="https://drive.google.com/file/d/1K5yxppMcalxkXZkVKUdVM7qHuQpIof8r/view?usp=drive_link" alt="Incoming Image 1" class="w-full rounded-md">
      <p style="">Webllix provides instant responses to common customer queries, reducing the workload on your support team. It’s like having a 24/7 customer service agent that <span style="font-family: &quot;Times New Roman&quot;, Times, serif;">never sleeps.</span></p>
  </div>
  <div style="">
      <h2 style="">Personalized Shopping</h2><br><img src="https://replicate.delivery/yhqm/wBrfqlboHTzLWqi2zwgamvEuN1Akh2rw3Em0YIvetouJnXUTA/out-0.webp" alt="Incoming Image 1" class="w-full rounded-md">
      <p style="">Our chatbot tailors product recommendations based on customer preferences and browsing behavior. This ensures every customer gets the products they lov<span style="font-family: &quot;Times New Roman&quot;, Times, serif;">e, right at their fingertips.</span></p>
  </div>
  <div style="">
      <h2 style=""><span style="font-family: Georgia, serif;">Seamless</span></h2><img src="https://replicate.delivery/yhqm/wBrfqlboHTzLWqi2zwgamvEuN1Akh2rw3Em0YIvetouJnXUTA/out-0.webp" alt="Incoming Image 1" class="w-full rounded-md"><h2 style="">&nbsp;Transactions</h2>
      <p>Webllix guides customers through the checkout process, making transactions smoother and reducing cart abandonment rates. Secure, fast, and hassle-free.</p>
  </div>
  <div style="">
      <h2 style="">Analytics and Insights</h2>
      <p style="">Gain valuable insights into customer behavior with webllix’s comprehensive analytics. Understand your audience better and optimize your sales strategies for maximum impact.</p>
  </div>
</section>

<section class="features-section">
  <h2>Why Choose Webllix?</h2>
  <div class="features-list" style="">
      <div>
          <h3>24/7 Availability</h3>
          <p style="">Never miss a customer query, even outside of business hours. webllix is always online, ensuring your customers get the help they need, whenever they need it.</p>
      </div>
      <div>
          <h3 style="">Multi-Language Support</h3>
          <p>Expand your reach globally with Webllix multi-language capabilities. Communicate with customers in their preferred language, enhancing their shopping experience.</p>
      </div>
      <div>
          <h3>Integration with Major Platforms</h3>
          <p>Seamlessly integrate Webllix with your existing eCommerce platforms like Shopify, WooCommerce, and Magento. Setup is easy, and the benefits are immediate.</p>
      </div>
      <div>
          <h3>Scalable Solutions</h3>
          <p>Whether you are a small business or a large enterprise, webllix scales with you. Customize the chatbots functionalities to meet your specific business needs.</p>
      </div>
  </div>
</section>

<section class="testimonials-section">
  <h2>What Our Customers Say</h2>
  <div class="testimonial">
      <p>"Webllix has completely transformed our customer support process. Our response times have improved drastically, and our customers love the personalized shopping experience. Its a game-changer!"</p>
      <h3>- Sarah J., eCommerce Store Owner</h3>
  </div>
  <div class="testimonial">
      <p>"The integration with Shopify was seamless. Webllix is intuitive, easy to use, and our sales have seen a noticeable boost since we started using it."</p>
      <h3>- Mark T., Online Retailer</h3>
  </div>
  <div class="testimonial">
      <p>"We were able to scale our operations without increasing our support staff, thanks to webllix. The analytics feature gives us a deep understanding of our customer needs."</p>
      <h3>- Emily R., Marketing Manager</h3>
  </div>
</section>

<section class="pricing-section">
  <h2>Choose Your Plan</h2>
  <div class="pricing-table">
      <div class="pricing-plan">
          <h3>Basic</h3>
          <p>Perfect for small businesses</p>
          <div class="price">$29/month</div>
          <p>✓ 24/7 Support</p>
          <p>✓ Basic Analytics</p>
          <p>✓ Integration with Shopify</p>
          <a href="#" class="cta-button">Get Started</a>
      </div>
      <div class="pricing-plan">
          <h3>Pro</h3>
          <p>For growing businesses</p>
          <div class="price">$59/month</div>
          <p>✓ Everything in Basic</p>
          <p>✓ Multi-Language Support</p>
          <p>✓ Advanced Analytics</p>
          <a href="#" class="cta-button">Get Started</a>
      </div>
      <div class="pricing-plan">
          <h3>Enterprise</h3>
          <p>Custom solutions for large enterprises</p>
          <div class="price">Contact Us</div>
          <p>✓ Everything in Pro</p>
          <p>✓ Dedicated Account Manager</p>
          <p>✓ Custom Integrations</p>
          <a href="#" class="cta-button">Contact Us</a>
      </div>
  </div>
</section>

<section class="faq-section">
  <h2>Frequently Asked Questions</h2>
  <div class="faq-list">
      <h3>How easy is it to integrate webllix with my existing eCommerce platform?</h3>
      <p>webllix offers seamless integration with major eCommerce platforms such as Shopify, WooCommerce, and Magento. The setup process is straightforward, and our support team is always available to assist you.</p>

      <h3>Can webllix handle multiple languages?</h3>
      <p>Yes, webllix supports multiple languages, allowing you to communicate with customers in their preferred language, enhancing their shopping experience.</p>

      <h3>Is there a free trial available?</h3>
      <p>Yes, we offer a 14-day free trial so you can explore all the features of webllix and see how it can benefit your business.</p>

      <h3>What kind of support does webllix offer?</h3>
      <p>webllix offers 24/7 customer support via chat and email. We also provide detailed documentation and tutorials to help you get the most out of the platform.</p>

      <h3>Can webllix scale with my business as it grows?</h3>
      <p>Absolutely. webllix is designed to be scalable, making it suitable for businesses of all sizes. You can customize the chatbot’s functionalities to meet your specific needs.</p>
  </div>
</section>

<footer>
  <p>© 2024 webllix. All Rights Reserved.</p>
</footer>
      <article class="bg-white text-black">
        <header>
          <h1 class="text-5xl font-extrabold mb-6 text-black-100">How AI is Revolutionizing Web Design</h1>
          <p class="text-xl mb-8 text-black-300">Discover how AI is transforming the web design process, making it accessible for everyone, from beginners to professionals.</p>
          <p class="text-xl mb-8 text-black-300">Just input preference and lets Webllix design website for you.</p>
        </header>
          <div className="w-1/2 pr-12 mb-8">
          <Image
            src="/Ai-webllix.png"
            alt="AI Web Design"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
        
        <section>
          <h2 class="text-4xl font-semibold mb-6 text-black-100">What is AI-Powered Web Design?</h2>
          <p class="mb-6 text-black-300">AI-powered web design leverages intelligent algorithms to automate the creation of websites. With , you can effortlessly create beautiful, responsive designs without writing a single line of code.</p>
          <ul class="list-disc pl-8 mb-6 text-black-300">
            <li>Instant layout and design suggestions</li>
            <li>Automatic optimization for all devices</li>
            <li>Customizable templates tailored to your brand</li>
          </ul>
          
        </section>
        
        <section>
          <h2 class="text-4xl font-semibold mb-6 text-black-100">Why Choose AI for Your Website?</h2>
          <p class="mb-6 text-black-300">AI-driven design offers unparalleled speed, efficiency, and creativity. Its like having a professional designer at your fingertips, 24/7.</p>
          <ul class="list-disc pl-8 mb-6 text-black-300">
            <li>Faster turnaround for website projects</li>
            <li>Consistent, high-quality designs</li>
            <li>Cost-effective solutions for businesses of all sizes</li>
          </ul>
        </section>
        <section>
          <h2 class="text-4xl font-semibold mb-6 text-black-100">Webllix Web builder </h2>
          <p class="mb-6 text-black-300">Customize layouts, colors, and content with our intuitive drag-and-drop interface to make your site truly unique..</p>
          <ul class="list-disc pl-8 mb-6 text-black-300">
            <li>AI Image generation</li>
            <li>Customization </li>
            <li>Source Code and  many more</li>
          </ul>
        </section>

        <div className="w-1/2 pr-12 mb-8">
          <Image
            src="/Aieditor.png"
            alt="AI Web Design"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        <section>
          <h2 class="text-4xl font-semibold mb-6 text-black-100">How to Get Started with AI Web Design</h2>
          <ol class="list-decimal pl-8 mb-6 text-black-300">
            <li class="mb-4">
              <h3 class="text-3xl font-semibold mb-3 text-black-100">Sign Up</h3>
                    <a href="https://example.com/buy-ai-web-design-guide" type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</a>
              <p>Join WebLLix and get instant access to webllix. Start designing your website today.</p>
            </li>
            <li class="mb-4">
              <h3 class="text-3xl font-semibold mb-3 text-black-100">Design Your website </h3>
              <p>Browse through a variety of customizable templates tailored to your industry and needs.</p>
            </li>
            <li class="mb-4">
              <h3 class="text-3xl font-semibold mb-3 text-black-100">Personalize Your Design</h3>
              <p>Use AI-powered tools to adjust colors, fonts, and layouts to perfectly match your brand.</p>
            </li>
            <li class="mb-4">
              <h3 class="text-3xl font-semibold mb-3 text-black-100">Publish and Grow</h3>
              <p>Once your website is ready,Download Source Code</p>
            </li>
          </ol>
        </section>

        <!-- New rotating image section -->
        <div className="rotate-wrapper mt-12">
          <Link href="/UI/gallery/landing-page" className="block bg-dark-500 shadow-md rounded-lg p-6 scroll-up rounding rotate-on-hover">
           
          
          
            <a href="/blog" class="text-indigo-600  border-e-blue-800 transition">Explore More</a>
          </Link>
        </div>

        <footer class="mt-12 text-center">
          <p class="mb-6 text-xl text-black-100">Ready to revolutionize your web design process? Experience the power of AI with webllix today.</p>
          <a href="https://example.com/buy-ai-web-design-guide" class="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Sign Up</a>
        </footer>
      </article>
      <span style="color: rgb(137, 11, 11);"></span>
    
    `,
    slug: "ai-web-design",
    image: "/AI-website -for-saas.png",
   
  },

  // Add more blog posts here
];
