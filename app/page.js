import ButtonCTA from "@/components/ButtonCTA";
import FAQListItem from "@/components/FAQListItem";
import ROICalculator from "@/components/ROICalculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const pricingFeaturesList = [
    "Professional property showcase website",
    "Built-in content management system",
    "SEO-optimized blog platform",
    "Mobile responsive design",
    "Property listing management",
    "Contact form integration"
  ]

  return (
    <main>
      <Header />
      
      {/* HERO SECTION */}
      <section className="text-center lg:text-left px-4 sm:px-8 py-16 sm:py-32 max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-14 items-center lg:items-start">
        <Image 
          src="/assets/images/property-hero.jpg" 
          alt="Professional property showcase" 
          width={500}
          height={350}
          className="w-full max-w-md sm:w-96 rounded-xl shadow-xl object-cover"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6">Professional websites for Rent-to-Rent landlords</h1>
          <div className="opacity-90 mb-6 sm:mb-10 text-base sm:text-lg">
            Showcase your properties with a professional website that attracts more landlords and tenants. Our tailored websites include a powerful CMS and SEO-optimized blog.
          </div>
          <ButtonCTA text="Get Your Website" href="#contact" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-base-100" id="features">
        <div className="px-4 sm:px-8 py-16 sm:py-32 max-w-5xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-12 text-center">
            Everything you need to showcase your properties
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 bg-base-200 rounded-xl">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Property Showcase</h3>
              <p className="opacity-75">Beautiful, professional displays of your properties with high-quality images and detailed information.</p>
            </div>

            <div className="p-6 bg-base-200 rounded-xl">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy CMS</h3>
              <p className="opacity-75">Update your property listings, images, and content without any technical knowledge required.</p>
            </div>

            <div className="p-6 bg-base-200 rounded-xl">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Blog</h3>
              <p className="opacity-75">Built-in blog optimized for search engines to attract more visitors and establish your authority.</p>
            </div>

            <div className="p-6 bg-base-200 rounded-xl">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
              <p className="opacity-75">Your website looks perfect on all devices - desktop, tablet, and mobile phones.</p>
            </div>

            <div className="p-6 bg-base-200 rounded-xl">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
              <p className="opacity-75">Secure admin area to manage properties, inquiries, and content with ease.</p>
            </div>

            <div className="p-6 bg-base-200 rounded-xl">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Forms</h3>
              <p className="opacity-75">Integrated contact forms for potential tenants and landlords to get in touch with you.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <ButtonCTA text="Explore All Features" href="#how-it-works" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-base-200" id="how-it-works">
        <div className="px-4 sm:px-8 py-16 sm:py-32 max-w-5xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            The Process
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-12 text-center">
            How we create your website
          </h2>

          <div className="space-y-12 sm:space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-primary/10 rounded-full p-6 flex items-center justify-center">
                <div className="font-black text-primary text-5xl">1</div>
              </div>
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold mb-3">Initial Contact</h3>
                <p className="opacity-80 text-lg">
                  Reach out to us through our contact form or email. Tell us a bit about your R2R business and what you&apos;re looking for in a website.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-primary/10 rounded-full p-6 flex items-center justify-center">
                <div className="font-black text-primary text-5xl">2</div>
              </div>
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold mb-3">Consultation Call</h3>
                <p className="opacity-80 text-lg">
                  We&apos;ll schedule a personalized consultation call to understand your specific needs, discuss your property portfolio, target audience, and design preferences.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-primary/10 rounded-full p-6 flex items-center justify-center">
                <div className="font-black text-primary text-5xl">3</div>
              </div>
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold mb-3">Website Development</h3>
                <p className="opacity-80 text-lg">
                  Over the next month, we&apos;ll develop your custom website with regular check-ins to gather your feedback. We&apos;ll make adjustments based on your input to ensure the final product perfectly matches your vision.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-primary/10 rounded-full p-6 flex items-center justify-center">
                <div className="font-black text-primary text-5xl">4</div>
              </div>
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold mb-3">Launch and Training</h3>
                <p className="opacity-80 text-lg">
                  Once you&apos;re happy with your website, we&apos;ll launch it and provide comprehensive training on how to use the CMS to manage your properties and content.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-primary/10 rounded-full p-6 flex items-center justify-center">
                <div className="font-black text-primary text-5xl">5</div>
              </div>
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold mb-3">Ongoing Support</h3>
                <p className="opacity-80 text-lg">
                  Our relationship doesn&apos;t end at launch. We provide ongoing support to address any bugs or issues, and we&apos;re available to implement small improvements to keep your website performing at its best.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <ButtonCTA text="Start Your Journey" href="#pricing" />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-base-100" id="benefits">
        <div className="px-4 sm:px-8 py-16 sm:py-32 max-w-5xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Benefits
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-12 text-center">
            Why a professional website matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Increased landlord trust</h3>
                    <p className="opacity-75">Landlords are 3x more likely to partner with R2R operators who have a professional online presence.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Better tenant quality</h3>
                    <p className="opacity-75">Professional websites attract higher-quality tenants who are willing to pay premium rates.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="text-primary mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Stand out from competition</h3>
                    <p className="opacity-75">Most R2R operators don&apos;t have professional websites, giving you a significant competitive advantage.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-primary/10 p-8 rounded-xl">
              <blockquote className="text-lg italic opacity-90">
                &ldquo;Since launching my professional website with Rent Press, I&apos;ve secured 5 new properties from landlords who specifically mentioned they were impressed by my online presence. The ROI has been incredible.&rdquo;
                <footer className="mt-4 font-bold">- Sarah T., R2R Operator in London</footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 text-center">
            <ButtonCTA text="Transform Your R2R Business" href="#why-choose-us" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-base-200" id="why-choose-us">
        <div className="px-4 sm:px-8 py-16 sm:py-32 max-w-5xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Our Advantage
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-12 text-center">
            Why choose Rent Press over other web development services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-base-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary">R2R Industry Specialists</h3>
              <p className="mb-6">Unlike general web developers, we exclusively focus on the rent-to-rent industry. We understand the unique challenges and opportunities in the R2R market.</p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Custom property listing fields designed for R2R properties</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Layout optimized to showcase your properties to both landlords and tenants</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Templates and content specifically designed for R2R businesses</span>
                </li>
              </ul>
            </div>

            <div className="bg-base-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary">Specialized R2R Tools</h3>
              <p className="mb-6">Our websites include custom tools that address the specific needs of rent-to-rent operators.</p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Dual-audience marketing features to attract both landlords and tenants</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Property availability calendar and vacancy alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Separate landlord information section to build trust with property owners</span>
                </li>
              </ul>
            </div>

            <div className="bg-base-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary">R2R-Specific SEO</h3>
              <p className="mb-6">Our SEO strategy is tailored to help your R2R business rank for the right keywords.</p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Local SEO optimization to target renters in your specific area</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Property-specific keyword strategy for maximum visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Blog content templates focused on R2R-relevant topics</span>
                </li>
              </ul>
            </div>

            <div className="bg-base-100 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-primary">Complete R2R Business Solution</h3>
              <p className="mb-6">We don&apos;t just build websites - we help grow your R2R business.</p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>R2R industry advice and best practices included with every website</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Online marketing strategies specific to property rentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-primary size-5 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Ongoing support from team members who understand the R2R business model</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <ButtonCTA text="Choose Rent Press" href="#pricing" />
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-base-100" id="pricing">
        <div className="px-4 sm:px-8 py-16 sm:py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-12 text-center">
            Investment that pays for itself
          </h2>

          <div className="p-6 sm:p-8 bg-base-200 w-full max-w-sm sm:w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline ">
              <div className="text-4xl font-black">£499</div>
              <div className="uppercase text-sm font-medium opacity-60">one-time setup</div>
            </div>
            <div className="flex gap-2 items-baseline mb-4">
              <div className="text-2xl font-bold">+£29</div>
              <div className="uppercase text-sm font-medium opacity-60">/month hosting</div>
            </div>

            <ul className="space-y-2 ">
              {pricingFeaturesList.map((priceItem) => {
                return (
                  <li key={priceItem} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-green-600 size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {priceItem}
                  </li>
                )
              })}
            </ul>
            <ButtonCTA text="Get Started Today" extraStyle="w-full" href="#contact" />
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="bg-base-200" id="calculator">
        <div className="px-4 sm:px-8 py-16 sm:py-32 max-w-4xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Return on Investment
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 text-center">
            See how quickly your website pays for itself
          </h2>
          <p className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            Just one additional property secured through your professional website can more than pay for the entire investment. Use our calculator to see exactly when you&apos;ll break even.
          </p>
          
          <ROICalculator />

          <div className="mt-12 text-center">
            <ButtonCTA text="Start Your Journey" href="#contact" />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-base-100" id="faq">
        <div className="px-4 sm:px-8 py-16 sm:py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <ul className="max-w-lg mx-auto">
            {
              [
                { 
                  question: "How long does it take to build my website?", 
                  answer: "We typically deliver your complete website within 7-10 business days after receiving all your property information and images." 
                },
                { 
                  question: "Do I need technical knowledge to update my website?", 
                  answer: "Not at all. Our CMS is designed to be user-friendly, allowing you to add properties, update content, and publish blog posts without any technical expertise." 
                },
                { 
                  question: "Can I add more properties later?", 
                  answer: "Absolutely! You can easily add new properties through the admin dashboard whenever you expand your portfolio." 
                },
                { 
                  question: "Do you help with SEO for my website?", 
                  answer: "Yes, all our websites are built with SEO best practices in mind, and we include initial optimization. We also offer ongoing SEO services for an additional fee." 
                },
                { 
                  question: "What's included in the monthly hosting fee?", 
                  answer: "The monthly fee covers website hosting, SSL certificate, security updates, backups, and basic technical support." 
                },
              ].map((qa) => (
                <FAQListItem key={qa.question} qa={qa}></FAQListItem>
              ))
            }
          </ul>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-base-200" id="contact">
        <div className="px-4 sm:px-8 py-16 sm:py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-12 text-center">
            Contact Us
          </h2>

          <div className="bg-base-100 p-8 rounded-xl max-w-lg mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-primary mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            
            <h3 className="text-xl font-bold mb-4">We&apos;d love to hear from you</h3>
            
            <p className="mb-6 text-lg">
              Have questions or ready to get started? Send us an email at:
            </p>
            
            <a href="mailto:veronsundaram13@gmail.com" className="text-primary font-medium text-xl hover:underline">
              veronsundaram13@gmail.com
            </a>
            
            <p className="mt-6 text-sm opacity-75">
              We typically respond to all inquiries within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}