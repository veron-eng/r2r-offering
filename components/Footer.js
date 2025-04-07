'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <section className="bg-base-300 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image 
              src="/assets/logo-no-background.png" 
              alt="Rent Press Logo" 
              width={240} 
              height={80} 
              className="h-24 w-auto"
            />
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <a href="#features" className="link link-hover">Features</a>
            <a href="#how-it-works" className="link link-hover">How It Works</a>
            <a href="#benefits" className="link link-hover">Benefits</a>
            <a href="#why-choose-us" className="link link-hover">Why Choose Us</a>
            <a href="#pricing" className="link link-hover">Pricing</a>
            <a href="#calculator" className="link link-hover">ROI Calculator</a>
            <a href="#faq" className="link link-hover">FAQ</a>
          </div>
        </div>
        <div className="mt-6 text-center md:text-left opacity-75 text-sm">
          © {new Date().getFullYear()} Rent Press. All rights reserved.
        </div>
      </div>
    </section>
  );
} 