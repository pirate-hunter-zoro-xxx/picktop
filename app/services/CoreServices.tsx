
'use client';

export default function CoreServices() {
  const services = [
    {
      title: 'Doors & Windows',
      image: "https://readdy.ai/api/search-image?query=Premium%20steel%20doors%20and%20windows%20collection%20showcasing%20various%20materials%20like%20WPC%2C%20teak%20wood%2C%20fiber%2C%20PVC%2C%20UPVC%2C%20and%20aluminum%20options%2C%20professional%20installation%20setup%20with%20elegant%20finishes%2C%20clean%20modern%20showroom%20display&width=400&height=300&seq=doors_windows&orientation=landscape",
      items: [
        'Steel Doors & Windows',
        'WPC Doors & Windows', 
        'Teak Wood Doors & Windows',
        'Fiber Doors',
        'PVC Doors',
        'UPVC Windows & Doors',
        'Aluminium Windows & Doors'
      ]
    },
    {
      title: 'Panels & Sheets',
      image: "https://readdy.ai/api/search-image?query=Modern%20interior%20panels%20and%20sheets%20display%20including%20fluted%20panels%2C%20PVC%20ceiling%20sheets%2C%20and%20gypsum%20sheets%2C%20elegant%20texture%20patterns%2C%20professional%20lighting%2C%20sophisticated%20material%20showcase%20in%20clean%20showroom%20setting&width=400&height=300&seq=panels_sheets&orientation=landscape",
      items: [
        'Fluted Panels',
        'PVC Ceiling Sheets',
        'Gypsum Sheets'
      ]
    },
    {
      title: 'Furnishings & Units',
      image: "https://readdy.ai/api/search-image?query=Luxury%20modular%20kitchen%2C%20wardrobes%2C%20prayer%20units%2C%20and%20showcases%20in%20modern%20interior%20setting%2C%20premium%20wood%20finishes%2C%20elegant%20design%20elements%2C%20professional%20craftsmanship%20display%2C%20warm%20ambient%20lighting&width=400&height=300&seq=furnishings_units&orientation=landscape",
      items: [
        'Modular Kitchen',
        'Wardrobes',
        'Prayer Unit',
        'Show Case'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Core <span className="font-medium bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Our fundamental offerings that form the foundation of exceptional interior solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-4 h-4 flex items-center justify-center mr-3">
                        <i className="ri-check-line text-amber-500 text-sm"></i>
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}