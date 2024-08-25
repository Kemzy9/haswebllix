export interface Intro {
    id: number;
    title: string;
    summary: string;
    content: string;
    slug: string;
    image: string;
    buyNowLink?: string;
  }
  
  export const intro: Intro[] = [
    {
      id: 1,
      title: "Website Maker AI: Effortless Website Creation with AI ",
      summary:
        "Create beautiful, responsive websites easily with AI-driven tools. Customizable templates, real-time editing, and automated design suggestions ensure a professional look without coding",
      content: `
        <nav class="top-nav">
          <!-- Navigation items here -->
        </nav>
        Prompt> Design a website for saas 
     

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
    <h1 style="background-size: cover; background-position: center center; background-repeat: no-repeat;"><span style="color: rgb(229, 42, 42);"><span style=""><span style=""><span style="color: rgb(223, 48, 48);"><span style="color: rgb(204, 30, 30);"><span style=""><span style=""><span style="font-family: Tahoma, sans-serif;"><span style="font-family: Georgia, serif;">Welcome</span></span></span></span></span></span></span></span> </span>to webllix: Your <span style="font-family: &quot;Times New Roman&quot;, Times, serif;">AI-Powered </span><span style="font-family: Tahoma, sans-serif;">eCommerce</span> <span style="font-family: Georgia, serif;"><span style="color: rgb(217, 23, 23);">Chatbot</span></span></h1>
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
        <p style="">Gain valuable insights into customer behavior with webllix comprehensive analytics. Understand your audience better and optimize your sales strategies for maximum impact.</p>
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
        <h3>- Sarah J., E-Commerce Store Owner</h3>
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
        <p>Absolutely. webllix is designed to be scalable, making it suitable for businesses of all sizes. You can customize the chatbot&quot;s functionalities to meet your specific needs.</p>
    </div>
</section>

<footer>
    <p>© 2024 webllix. All Rights Reserved.</p>
</footer>
        <article class="bg-white text-black">
          <header>
            <h1 class="text-5xl font-extrabold mb-6 text-black-100">A simple Saas website </h1>
            <p class="text-xl mb-8 text-black-300">Discover how AI is transforming the web design process, making it accessible for everyone, from beginners to professionals.</p>
          </header>
          
          
          
          
  
         
        </article>
      


    




        
      `,
      slug: "Ai-web-design",
      image: "/carr.png",
     
    },
    // Add more blog posts here

    {
        id: 2,
        title: "Top best website design by AI  ",
        summary:
          "Webllix -  top website design by   AI the future of web design.",
        content: `
          
<article class="bg-white text-black">
  <header>
    <h1 class="text-5xl font-extrabold mb-6 text-black-100">Top Best Website Designs by AI </h1>
    <p class="text-xl mb-8 text-black-300">Explore the most outstanding website designs of the year, showcasing the best in creativity, functionality, and user experience.</p>
  </header>
  
  <section>
    <h2 class="text-4xl font-semibold mb-6 text-black-100">What Makes a Top Website Design?</h2>
    <p class="mb-6 text-black-300">Top website designs excel in several key areas: aesthetics, usability, and performance. They seamlessly blend eye-catching visuals with intuitive navigation and robust functionality.</p>
    <ul class="list-disc pl-8 mb-6 text-black-300">
      <li>Striking visuals that capture attention</li>
      <li>Intuitive and user-friendly navigation</li>
      <li>Responsive design that looks great on any device</li>
      <li>Fast loading times and optimized performance</li>
    </ul>
  </section>

  <div class="w-full md:w-1/2 pr-12 mb-8">
    <Image
      src="/archo.png"
      alt="Top Website Design"
      width={600}
      height={400}
      className="rounded-lg shadow-md"
      loading="lazy"
    />
  </div>

  <section>
    <h2 class="text-4xl font-semibold mb-6 text-black-100">Examples of Stunning Website Designs</h2>
    <p class="mb-6 text-black-300">Here are some of the most impressive website designs of 2024, each demonstrating unique design principles and innovative features.</p>
    <ul class="list-disc pl-8 mb-6 text-black-300">
      <li>Minimalist designs with a focus on whitespace</li>
      <li>Interactive elements that engage users</li>
      <li>Bold typography and vibrant color schemes</li>
      <li>Creative use of multimedia and animations</li>
    </ul>
  </section>

  <div class="w-full md:w-1/2 pr-12 mb-8">
    <Image
      src="/Aiwebeditory.png"
      alt="Top Website Design Example"
      width={600}
      height={400}
      className="rounded-lg shadow-md"
      loading="lazy"
    />
  </div>

  <section>
    <h2 class="text-4xl font-semibold mb-6 text-black-100">How to Achieve Top-Tier Website Design</h2>
    <ol class="list-decimal pl-8 mb-6 text-black-300">
      <li class="mb-4">
        <h3 class="text-3xl font-semibold mb-3 text-black-100">Understand Your Audience</h3>
        <p>Tailor your design to meet the needs and preferences of your target audience for better engagement and conversion.</p>
      </li>
      <div class="w-full md:w-1/2 pr-12 mb-8">
        <Image
          src="/cosmetic.png"
          alt="Website Design Tips"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
          loading="lazy"
        />
      </div>
      <li class="mb-4">
        <h3 class="text-3xl font-semibold mb-3 text-black-100">Focus on User Experience</h3>
        <p>Ensure that your website is easy to navigate, with clear calls to action and a seamless user journey.</p>
      </li>
      <li class="mb-4">
        <h3 class="text-3xl font-semibold mb-3 text-black-100">Incorporate Modern Design Trends</h3>
        <p>Stay updated with the latest design trends and technologies to keep your website fresh and relevant.</p>
      </li>
      <li class="mb-4">
        <h3 class="text-3xl font-semibold mb-3 text-black-100">Optimize for All Devices</h3>
        <p>Ensure your website performs well on all devices, from desktops to smartphones, with a responsive design.</p>
      </li>
    </ol>
  </section>

  <div class="w-full md:w-1/2 pr-12 mb-8">
    <Image
      src="/archit.png"
      alt="Top Website Design Tips"
      width={600}
      height={400}
      className="rounded-lg shadow-md"
      loading="lazy"
    />
  </div>

  <!-- New rotating image section -->
  <div class="rotate-wrapper mt-12">
    <Link href="/UI/gallery/landing-page" className="block bg-dark-500 shadow-md rounded-lg p-6 scroll-up rounded rotate-on-hover">
      <h3 className="font-semibold text-white mt-2">Explore Designs</h3>
      <p className="text-white mt-2">Check out our gallery for more examples of outstanding website designs.</p>
      <a href="/" class="text-indigo-600 border-e-blue-800 transition">Explore Now</a>
    </Link>
  </div>

  <div class="w-full md:w-1/2 pr-12 mb-8">
    <Image
      src="/carr.png"
      alt="Top Website Design Inspiration"
      width={600}
      height={400}
      className="rounded-lg shadow-md"
      loading="lazy"
    />
  </div>

  <footer class="mt-12 text-center">
    <p class="mb-6 text-xl text-black-100">Ready to elevate your website design? Discover the best practices and trends for creating top-tier websites with Ai model</p>
    <a href="https://example.com/" class="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Try free</a>
  </footer>
</article>

`,
        slug: "top-website-design",
        image: "/game.png",

      },


      {
        "id": 3,
        "title": "E-Commerce Website Creator ",
        "summary": "WebLLix is the best.",
        "content": `
        <nav class="top-nav bg-gray-900 text-white">
            <!-- Navigation items here -->
        </nav>
        <article class="container mx-auto p-4 bg-white text-black">
           
            <header>
                <h1 class="text-4xl font-bold mb-4">Design Websites and Get Code Faster with WebLLix</h1>
                <p class="text-lg mb-6">Discover the steps and strategies to create stunning websites effortlessly with WebLLix, the best AI-powered website builder.</p>
            </header>
            
            
            
            
            
            
            
            
            
            <Image
                src="/ecommerce.png"
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
       
    }
    
  ];
  