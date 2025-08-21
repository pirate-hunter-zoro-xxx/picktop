
'use client';

export default function FeaturedServices() {
  const services = [
    {
      title: "Premium Doors & Windows",
      description: "Handcrafted steel, WPC, teak wood, and luxury materials",
      image: "https://readdy.ai/api/search-image?query=Luxury%20steel%20door%20with%20elegant%20wooden%20accents%2C%20premium%20entrance%20design%2C%20sophisticated%20hardware%2C%20high-end%20residential%20door%2C%20contemporary%20entrance%20with%20glass%20panels%2C%20warm%20lighting%2C%20expensive%20materials%2C%20architectural%20photography%2C%20minimalist%20luxury%20design&width=500&height=600&seq=premium-door-1&orientation=portrait",
      features: ["Steel Security Doors", "Teak Wood Luxury", "UPVC Premium", "Aluminium Elegance"],
      accent: "bg-amber-500"
    },
    {
      title: "Bespoke Furnishings",
      description: "Custom modular kitchens, wardrobes, and luxury units",
      image: "https://readdy.ai/api/search-image?query=Luxury%20modular%20kitchen%20with%20marble%20countertops%2C%20premium%20cabinets%2C%20sophisticated%20design%2C%20high-end%20appliances%2C%20elegant%20lighting%2C%20contemporary%20kitchen%20design%2C%20expensive%20materials%2C%20architectural%20photography%2C%20minimalist%20luxury%20aesthetic&width=500&height=600&seq=premium-kitchen-1&orientation=portrait",
      features: ["Modular Kitchens", "Walk-in Wardrobes", "Prayer Sanctuaries", "Display Galleries"],
      accent: "bg-slate-600"
    },
    {
      title: "Architectural Elements",
      description: "Sophisticated blinds, partitions, and ceiling artistry",
      image: "https://readdy.ai/api/search-image?query=Luxury%20interior%20with%20sophisticated%20zebra%20blinds%2C%20elegant%20ceiling%20design%2C%20premium%20hall%20partition%2C%20high-end%20window%20treatments%2C%20contemporary%20interior%20elements%2C%20expensive%20materials%2C%20architectural%20photography%2C%20minimalist%20luxury%20design&width=500&height=600&seq=premium-interior-1&orientation=portrait",
      features: ["Designer Blinds", "Artistic Ceilings", "Glass Partitions", "Luxury Treatments"],
      accent: "bg-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-amber-500/10 text-amber-600 text-sm font-medium rounded-full border border-amber-500/20 mb-6">
            Our Signature Services
          </span>
          <h2 className="text-5xl font-light text-slate-900 mb-6 tracking-wide">
            Curated <span className="font-bold">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Each project is a masterpiece, crafted with precision and an eye for detail that transforms spaces into works of art.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-none overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <div 
                  className="h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{backgroundImage: `url('${service.image}')`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute top-6 right-6 w-12 h-12 ${service.accent} rounded-full flex items-center justify-center`}>
                    <i className="ri-star-fill text-white text-lg"></i>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-light text-slate-900 mb-3 tracking-wide">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-700">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="group w-full bg-slate-900 hover:bg-amber-500 text-white font-medium px-6 py-4 rounded-none transition-all duration-300 whitespace-nowrap cursor-pointer">
                  <span className="flex items-center justify-center">
                    Explore Service
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
