
'use client';

export default function OurExpertise() {
  const expertiseAreas = [
    {
      title: 'Doors & Windows',
      description: 'Expert installation of various types including Steel, WPC, Teak Wood, Fiber, PVC, UPVC, and Aluminium options.',
      icon: 'ri-door-line',
      features: ['Steel Doors', 'WPC Doors', 'Teak Wood', 'Fiber Doors', 'PVC & UPVC', 'Aluminium Frames'],
      image: 'https://readdy.ai/api/search-image?query=Premium%20steel%20doors%20and%20windows%20installation%20showcase%20with%20various%20materials%20including%20teak%20wood%2C%20aluminum%2C%20and%20PVC.%20Professional%20craftsmanship%20displaying%20different%20door%20styles%20and%20window%20frames.%20Modern%20residential%20and%20commercial%20door%20solutions%20with%20elegant%20finishes%20and%20hardware%20details.&width=600&height=400&seq=doors-windows&orientation=landscape'
    },
    {
      title: 'Interior Solutions',
      description: 'Comprehensive interior services including modular kitchens, wardrobes, prayer units, showcases and ceiling works.',
      icon: 'ri-home-2-line',
      features: ['Modular Kitchens', 'Custom Wardrobes', 'Prayer Units', 'Display Showcases', 'Ceiling Works', 'Interior Design'],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20modular%20kitchen%20and%20interior%20solutions%20showcasing%20custom%20wardrobes%2C%20prayer%20units%2C%20and%20elegant%20showcases.%20Modern%20interior%20design%20with%20premium%20finishes%2C%20sophisticated%20lighting%2C%20and%20contemporary%20furniture.%20Professional%20craftsmanship%20in%20residential%20interior%20spaces%20with%20attention%20to%20detail.&width=600&height=400&seq=interior-solutions&orientation=landscape'
    },
    {
      title: 'Construction & Fabrication',
      description: 'Professional construction works, aluminium fabrication, glass works, and complete interior & exterior solutions.',
      icon: 'ri-hammer-line',
      features: ['Construction Works', 'Aluminium Fabrication', 'Glass Works', 'Steel Fabrication', 'Exterior Solutions', 'Custom Fabrication'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20construction%20and%20fabrication%20workspace%20with%20aluminum%20and%20steel%20materials.%20Skilled%20craftsmen%20working%20on%20custom%20fabrication%20projects%2C%20glass%20works%2C%20and%20construction%20elements.%20Modern%20fabrication%20facility%20with%20precision%20tools%20and%20quality%20materials%20for%20interior%20and%20exterior%20solutions.&width=600&height=400&seq=construction-fabrication&orientation=landscape'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
              Our <span className="font-bold">Expertise</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We specialize in three core service areas, delivering exceptional results through years of experience and dedication to quality.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-8"></div>
          </div>
          
          <div className="space-y-16">
            {expertiseAreas.map((area, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                      <i className={`${area.icon} text-white text-2xl`}></i>
                    </div>
                    <div>
                      <span className="text-sm font-light text-amber-600 tracking-wider uppercase">Service Area {index + 1}</span>
                      <h3 className="text-3xl font-light text-slate-900">{area.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light">
                    {area.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center p-4 bg-slate-50 rounded-lg">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></div>
                        <span className="text-slate-700 font-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                      <span>Get Quote</span>
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </a>
                    <a href="/services" className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300 whitespace-nowrap cursor-pointer">
                      <span>View Services</span>
                      <i className="ri-external-link-line ml-2 group-hover:scale-110 transition-transform"></i>
                    </a>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={area.image}
                      alt={area.title}
                      className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-medium text-slate-900">{area.title}</h4>
                            <p className="text-slate-600 text-sm font-light">Professional Excellence</p>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                            <i className="ri-award-line text-white text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
