
'use client';

export default function SpecializedServices() {
  const services = [
    {
      title: 'Interior Elements',
      image: "https://readdy.ai/api/search-image?query=Modern%20interior%20elements%20including%20zebra%20blinds%2C%20pleated%20mosquito%20nets%2C%20hall%20partitions%2C%20and%20ceiling%20works%2C%20elegant%20design%20showcase%2C%20professional%20installation%2C%20sophisticated%20room%20dividers%20and%20window%20treatments&width=400&height=300&seq=interior_elements&orientation=landscape",
      items: [
        'Zebra Blinds Curtains',
        'Pleated Mosquito Net',
        'Hall Partition',
        'Ceiling Works'
      ]
    },
    {
      title: 'Design & Fabrication',
      image: "https://readdy.ai/api/search-image?query=Professional%20interior%20design%20workspace%20with%202D%203D%20blueprints%2C%20aluminum%20fabrication%20tools%2C%20cladding%20materials%2C%20modern%20CAD%20workstation%2C%20technical%20drawings%2C%20premium%20metal%20works%20showcase%2C%20clean%20industrial%20setting&width=400&height=300&seq=design_fabrication&orientation=landscape",
      items: [
        'Interior Designing (2D, 3D)',
        'Aluminium Fabrication Works',
        'Cladding Works'
      ]
    },
    {
      title: 'Glass & Metal Works',
      image: "https://readdy.ai/api/search-image?query=Premium%20steel%20handrails%20and%20glass%20works%20display%2C%20modern%20metal%20fabrication%2C%20elegant%20glass%20panels%2C%20professional%20metalwork%20showcase%2C%20contemporary%20architectural%20elements%2C%20clean%20minimalist%20setting&width=400&height=300&seq=glass_metal&orientation=landscape",
      items: [
        'Steel Handrail',
        'All Type of Glass Works'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Specialized <span className="font-medium bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Advanced solutions tailored to meet your specific design and fabrication needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100">
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