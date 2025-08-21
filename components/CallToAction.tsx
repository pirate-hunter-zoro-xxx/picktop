
'use client';

import { openWhatsApp } from '@/utils/whatsapp';

export default function CallToAction() {
  return (
    <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20interior%20design%20consultation%20meeting%2C%20elegant%20modern%20office%20space%2C%20premium%20furniture%2C%20sophisticated%20lighting%2C%20professional%20consultation%20room%2C%20high-end%20interior%20design%20studio%2C%20architectural%20photography%2C%20warm%20ambient%20lighting%2C%20minimalist%20luxury%20aesthetic&width=1920&height=800&seq=premium-cta-1&orientation=landscape')`,
        }}
      >
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <span className="inline-block px-6 py-3 bg-amber-500/20 text-amber-300 text-sm font-medium rounded-full border border-amber-500/30 mb-8">
          Ready to Begin?
        </span>
        
        <h2 className="text-5xl lg:text-6xl font-light mb-8 tracking-wide">
          Transform Your <span className="font-bold text-amber-400">Vision</span>
        </h2>
        
        <p className="text-xl mb-12 max-w-4xl mx-auto text-slate-300 leading-relaxed">
          Our expert team brings decades of experience and an unwavering commitment to excellence. Let us create a space that reflects your unique style and exceeds your expectations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={() => openWhatsApp('consultation')}
            className="group bg-amber-500 hover:bg-amber-600 text-black font-semibold px-12 py-6 rounded-none transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer text-lg"
          >
            <span className="flex items-center">
              <i className="ri-whatsapp-line mr-2"></i>
              Schedule Consultation
              <i className="ri-calendar-line ml-2 group-hover:rotate-12 transition-transform"></i>
            </span>
          </button>
          <a href="tel:+919946826583" className="group bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold px-12 py-6 rounded-none transition-all whitespace-nowrap cursor-pointer text-lg backdrop-blur-sm">
            <span className="flex items-center">
              Call Expert Now
              <i className="ri-phone-line ml-2 group-hover:rotate-12 transition-transform"></i>
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-time-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">Express Service</h3>
            <p className="text-slate-300 leading-relaxed">Rapid project delivery with 24/7 premium support and dedicated project management</p>
          </div>
          
          <div className="group text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-award-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">Premium Quality</h3>
            <p className="text-slate-300 leading-relaxed">Luxury materials, master craftsmanship, and lifetime warranty on all installations</p>
          </div>
          
          <div className="group text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="ri-shield-star-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-light mb-4 tracking-wide">Transparent Pricing</h3>
            <p className="text-slate-300 leading-relaxed">Upfront pricing with no hidden costs, flexible payment options, and value guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
