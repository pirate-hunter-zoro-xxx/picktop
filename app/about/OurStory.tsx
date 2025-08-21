
'use client';

export default function OurStory() {
  return (
    <section id="our-story" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
              Our <span className="font-bold">Story</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100/50">
                <h3 className="text-2xl font-light text-slate-900 mb-6">Leading Provider of Premium Solutions</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                  PICK TOP INTERIOR'S has established itself as a leading provider of premium interior solutions and steel doors. Our journey began with a simple vision: to transform ordinary spaces into extraordinary experiences through exceptional craftsmanship and innovative design.
                </p>
                <p className="text-slate-600 leading-relaxed font-light">
                  With years of experience in the industry, we have built a reputation based on our unwavering commitment to excellence and customer satisfaction. Our expertise spans across interior decor, steel door manufacturing, and professional installation services.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white border border-slate-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-award-line text-white text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-medium text-slate-900 mb-2">Excellence</h4>
                  <p className="text-slate-600 text-sm font-light">Committed to delivering the highest quality</p>
                </div>
                
                <div className="text-center p-6 bg-white border border-slate-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-line text-white text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-medium text-slate-900 mb-2">Trust</h4>
                  <p className="text-slate-600 text-sm font-light">Established reputation in the industry</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20interior%20design%20team%20working%20on%20luxury%20residential%20project%20with%20modern%20furniture%2C%20premium%20materials%2C%20and%20elegant%20decor%20elements.%20Skilled%20craftsmen%20and%20designers%20collaborating%20on%20high-end%20interior%20solutions.%20Contemporary%20workspace%20with%20design%20plans%2C%20material%20samples%2C%20and%20quality%20finishes%20showcasing%20expertise%20and%20professionalism.&width=600&height=800&seq=our-story&orientation=portrait"
                  alt="Our Story"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <i className="ri-team-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900">Expert Team</h4>
                    <p className="text-slate-600 text-sm font-light">Skilled professionals ensuring quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100">
              <h4 className="text-xl font-medium text-slate-900 mb-4">Comprehensive Solutions</h4>
              <p className="text-slate-600 leading-relaxed font-light">
                We provide complete interior solutions for both residential and commercial spaces, ensuring every project meets our exacting standards.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100">
              <h4 className="text-xl font-medium text-slate-900 mb-4">Quality Craftsmanship</h4>
              <p className="text-slate-600 leading-relaxed font-light">
                Our team of skilled professionals ensures the highest standards of quality and craftsmanship in every project we undertake.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-100">
              <h4 className="text-xl font-medium text-slate-900 mb-4">Trusted Name</h4>
              <p className="text-slate-600 leading-relaxed font-light">
                With years of experience and countless satisfied customers, we have become a trusted name in the interior design industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
