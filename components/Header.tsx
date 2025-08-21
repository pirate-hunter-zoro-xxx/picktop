
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
              <i className="ri-home-4-line text-white text-lg"></i>
            </div>
            <h1 className="text-xl font-light text-slate-900 tracking-wider">
              PICK TOP <span className="font-bold">INTERIOR'S</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
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
