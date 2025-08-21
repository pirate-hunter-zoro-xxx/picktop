
'use client';
import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto font-light">
          Let our expert team bring your vision to life with our comprehensive interior and exterior solutions
        </p>
        
        <Link href="/contact">
          <button className="group bg-white hover:bg-gray-50 text-amber-600 font-medium px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
            <span className="flex items-center justify-center">
              Get in Touch
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}