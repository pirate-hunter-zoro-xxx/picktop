'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Luxury%20modern%20interior%20design%20office%20with%20sophisticated%20furniture%2C%20elegant%20lighting%2C%20marble%20textures%2C%20and%20premium%20finishes.%20Professional%20workspace%20with%20clean%20lines%2C%20contemporary%20design%20elements%2C%20and%20high-end%20materials.%20Warm%20ambient%20lighting%20creating%20an%20inviting%20atmosphere.%20Architectural%20details%20showcasing%20craftsmanship%20and%20attention%20to%20detail.&width=1920&height=1080&seq=about-hero&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-slate-900/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-light tracking-wider uppercase rounded-full">
              About Our Company
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-light text-white mb-8 tracking-wide leading-tight">
            <span className="font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">PICK TOP INTERIOR'S</span>
            <br />
          </h1>
          
         <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Your trusted partner for premium interior decor and steel door solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#our-story" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer">
              <span>Discover Our Story</span>
              <i className="ri-arrow-down-line ml-2 group-hover:translate-y-1 transition-transform"></i>
            </a>
            <a href="tel:+919946826583" className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2"></i>
              <span>Call Now</span>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </div>
    </section>
  );
}