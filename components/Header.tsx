
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/60 backdrop-blur-lg shadow-md sticky top-0 z-50 border-b border-slate-100/30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-2 sm:mr-4 shadow-lg group-hover:scale-105 transition-transform">
              <i className="ri-home-4-line text-white text-lg sm:text-xl"></i>
            </div>
            <div className="bg-gradient-to-r from-black/80 via-slate-900/80 to-black/80 backdrop-blur-sm border border-amber-400/60 sm:border-2 rounded-sm px-3 py-2 sm:px-6 sm:py-3 shadow-2xl relative overflow-hidden group-hover:border-amber-400/80 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"></div>
              <h1 className="text-base sm:text-2xl font-light tracking-tight sm:tracking-[0.2em] relative z-10 flex flex-col sm:flex-row items-center sm:items-baseline">
                <span className="font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent drop-shadow-sm leading-tight">PICK TOP</span> 
                <span className="text-white font-medium text-xs sm:text-2xl sm:ml-1 drop-shadow-sm leading-tight">INTERIOR'S</span>
              </h1>
            </div>
          </Link>          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-amber-600 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://wa.me/919946826583" className="w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="ri-whatsapp-fill text-lg"></i>
            </a>
            <a href="tel:+919946826583" className="w-12 h-12 flex items-center justify-center bg-slate-900 hover:bg-amber-500 text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="ri-phone-fill text-lg"></i>
            </a>
            
            <button 
              className="md:hidden w-12 h-12 flex items-center justify-center text-slate-700 hover:text-amber-500 transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-slate-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                About
              </Link>
              <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
