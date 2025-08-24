
'use client';

import Link from 'next/link';
import { openWhatsApp } from '@/utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxurious%20modern%20interior%20design%20showcase%20with%20marble%20surfaces%2C%20gold%20accents%2C%20sophisticated%20lighting%2C%20premium%20furniture%2C%20elegant%20living%20space%2C%20high-end%20residential%20design%2C%20architectural%20photography%2C%20warm%20ambient%20lighting%2C%20minimalist%20luxury%20aesthetic%2C%20clean%20lines%2C%20expensive%20materials&width=1920&height=1080&seq=premium-hero-1&orientation=landscape')`,
        }}
      >
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 py-32 lg:py-40">
        <div className="w-full max-w-5xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-300 text-sm font-medium rounded-full border border-amber-500/30">
              Premium Interior Design
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-light mb-8 leading-tight tracking-wide">
            Crafting <span className="font-bold text-amber-400">Exceptional</span><br />
            Interior Spaces
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 text-slate-300 max-w-3xl leading-relaxed font-light">
            Where luxury meets functionality. We transform ordinary spaces into extraordinary experiences with our premium interior design and steel door solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => openWhatsApp('consultation')}
              className="group bg-amber-500 hover:bg-amber-600 text-black font-semibold px-10 py-5 rounded-none transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer border-2 border-amber-500 hover:border-amber-600 text-lg"
            >
              <span className="flex items-center">
                <i className="ri-whatsapp-line mr-2"></i>
                Schedule Consultation
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </button>
            <Link 
              href="/services"
              className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold px-10 py-5 rounded-none transition-all whitespace-nowrap cursor-pointer text-lg backdrop-blur-sm inline-block"
            >
              <span className="flex items-center">
                Explore Services
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
              </span>
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-light text-amber-400 mb-2">7+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-light text-amber-400 mb-2">500+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="text-3xl font-light text-amber-400 mb-2">100%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-2xl text-white/70"></i>
      </div>
    </section>
  );
}
