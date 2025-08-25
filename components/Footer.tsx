
'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                <i className="ri-home-4-line text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-light tracking-wider">
                PICK TOP <span className="font-bold">INTERIOR'S</span>
              </h3>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
              Creating exceptional interior spaces that blend luxury with functionality. Our commitment to excellence transforms ordinary spaces into extraordinary experiences.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="group w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                <i className="ri-facebook-fill text-lg group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="https://www.instagram.com/picktop_interiors?igsh=MzE2NHRqNnpiNW1x" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                <i className="ri-instagram-fill text-lg group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="https://wa.me/919946826583" className="group w-12 h-12 bg-slate-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                <i className="ri-whatsapp-fill text-lg group-hover:scale-110 transition-transform"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-light mb-6 tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-sm">Home</a></li>
              <li><a href="/about" className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-sm">About Us</a></li>
              <li><a href="/services" className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-sm">Services</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light mb-6 tracking-wider uppercase">Premium Services</h4>
            <ul className="space-y-4">
              <li><span className="text-slate-400 text-sm">Luxury Interior Design</span></li>
              <li><span className="text-slate-400 text-sm">Premium Steel Doors</span></li>
              <li><span className="text-slate-400 text-sm">Bespoke Modular Kitchens</span></li>
              <li><span className="text-slate-400 text-sm">Architectural Glass Works</span></li>
              <li><span className="text-slate-400 text-sm">Custom Fabrication</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12">
              <div className="flex items-center">
                <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-amber-400 mr-3"></i>
                <span className="text-slate-400 text-sm">
                  Service Road, OPP Police Station, Kodakara, Kerala-680 684
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-amber-400 mr-3"></i>
                  <a href="tel:+919946826583" className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-sm">
                    +91 99468 26583
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-amber-400 mr-3"></i>
                  <a href="tel:+919846340014" className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-sm">
                    +91 98463 40014
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-amber-400 mr-3"></i>
                  <a href="tel:+919400765687" className="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-sm">
                    +91 94007 65687
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-slate-500 text-sm">
                © 2024 PICK TOP INTERIOR'S. Crafted with Excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
