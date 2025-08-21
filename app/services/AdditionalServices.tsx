
'use client';

export default function AdditionalServices() {
  const services = [
    'Pergola',
    'All Interior & Exterior Works',
    'Construction Works'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Additional <span className="font-medium bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Comprehensive solutions for all your interior and exterior requirements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Beautiful%20pergola%20and%20comprehensive%20interior%20exterior%20construction%20works%2C%20modern%20architectural%20elements%2C%20professional%20construction%20site%2C%20elegant%20outdoor%20structures%2C%20premium%20building%20materials%2C%20sophisticated%20design%20showcase&width=800&height=400&seq=additional_services&orientation=landscape"
                alt="Additional Services"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">
                Other Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-100">
                    <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full">
                      <i className="ri-tools-line text-white text-lg"></i>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">{service}</h4>
                    <p className="text-sm text-gray-600">Professional and comprehensive solutions</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}