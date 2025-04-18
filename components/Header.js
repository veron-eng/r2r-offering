'use client';

import { useState, useEffect } from 'react';
import ButtonCTA from "@/components/ButtonCTA";
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-base-200">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-8 py-2">
        <div>
          <Image 
            src="/assets/logo-no-background.png" 
            alt="Rent Press Logo" 
            width={240} 
            height={80} 
            className="h-24 w-auto"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="space-x-4 hidden md:flex">
          <Link href="#features" className="link link-hover">Features</Link>
          <Link href="#how-it-works" className="link link-hover">How It Works</Link>
          <Link href="#pricing" className="link link-hover">Pricing</Link>
          <Link href="/blogs" className="link link-hover">Blog</Link>
        </div>
        
        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ButtonCTA text="Contact Us" href="#contact" />
        </div>
        
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {mounted && isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mounted && isMenuOpen && (
        <div className="md:hidden bg-base-200 px-8 py-4 border-t border-base-300">
          <div className="flex flex-col space-y-4">
            <Link href="#features" className="link link-hover py-2" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="#how-it-works" className="link link-hover py-2" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            <Link href="#pricing" className="link link-hover py-2" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="/blogs" className="link link-hover py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <div className="pt-2">
              <ButtonCTA text="Contact Us" href="#contact" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 