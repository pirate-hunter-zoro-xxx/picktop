
'use client';

export default function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Location <span className="font-medium bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Map</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Visit our showroom to experience our premium interior solutions firsthand
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg overflow-hidden border border-amber-100">
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5567!2d76.4!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDMwJzAwLjAiTiA3NsKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PICK TOP INTERIOR'S DECOR & STEEL DOOR'S Location"
            ></iframe>
          </div>
          
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex-shrink-0">
                <i className="ri-map-pin-line text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  PICK TOP INTERIOR'S DECOR & STEEL DOOR'S
                </h3>
                <p className="text-gray-700 mb-4">
                  Service Road, OPP Police Station<br />
                  Kodakara, Kerala-680 684<br />
                  THRISSUR, Kerala
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://maps.google.com/?q=Service+Road,+OPP+Police+Station,+Kodakara,+Kerala-680+684,+THRISSUR,+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-map-pin-line mr-2"></i>
                    View on Google Maps
                  </a>
                  <a
                    href="https://maps.google.com/?q=Service+Road,+OPP+Police+Station,+Kodakara,+Kerala-680+684,+THRISSUR,+Kerala&mode=directions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-amber-500 text-amber-600 px-4 py-2 rounded-lg hover:bg-amber-50 transition-all duration-300 text-sm font-medium whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-navigation-line mr-2"></i>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
