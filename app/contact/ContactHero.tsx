
'use client';

export default function ContactHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Professional%20interior%20design%20consultation%20office%20with%20modern%20furniture%2C%20elegant%20meeting%20space%2C%20premium%20materials%20display%2C%20warm%20lighting%2C%20sophisticated%20business%20environment%2C%20client%20discussion%20area%20setup&width=1200&height=800&seq=contact_hero&orientation=landscape')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Contact <span className="font-medium bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">PICK TOP INTERIOR'S</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Let's discuss your interior decor and steel door requirements
          </p>
        </div>
      </div>
    </section>
  );
}