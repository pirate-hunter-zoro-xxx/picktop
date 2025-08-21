
'use client';

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Modern%20luxurious%20interior%20design%20workspace%20with%20premium%20tools%20and%20materials%2C%20professional%20lighting%2C%20elegant%20wooden%20panels%2C%20steel%20doors%2C%20and%20sophisticated%20design%20elements%20arranged%20beautifully%2C%20clean%20minimal%20background%20with%20warm%20lighting%20showcasing%20craftsmanship%20and%20quality&width=1200&height=800&seq=services_hero&orientation=landscape')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Our <span className="font-medium bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive interior and exterior design solutions for your space
          </p>
        </div>
      </div>
    </section>
  );
}