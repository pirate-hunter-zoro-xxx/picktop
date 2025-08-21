'use client';

export default function BrandValues() {
  const values = [
    {
      title: 'Quality',
      description: 'Highest standards of craftsmanship',
      icon: 'ri-award-line',
      color: 'from-blue-500 to-blue-600',
      details: 'We never compromise on quality, ensuring every project meets our exacting standards through premium materials and skilled craftsmanship.'
    },
    {
      title: 'Trust',
      description: 'Established reputation in the industry',
      icon: 'ri-shield-check-line',
      color: 'from-green-500 to-green-600',
      details: 'Built on years of reliable service and customer satisfaction, we have earned the trust of countless clients across Kerala.'
    },
    {
      title: 'Experience',
      description: 'Years of professional expertise',
      icon: 'ri-time-line',
      color: 'from-purple-500 to-purple-600',
      details: 'Our extensive experience in the industry allows us to handle complex projects with confidence and deliver exceptional results.'
    },
    {
      title: 'Comprehensive',
      description: 'Full-service interior solutions',
      icon: 'ri-layout-line',
      color: 'from-amber-500 to-orange-500',
      details: 'From design consultation to final installation, we provide complete interior solutions under one roof for your convenience.'
    },
    {
      title: 'Customer Focus',
      description: 'Customer-centric approach',
      icon: 'ri-customer-service-2-line',
      color: 'from-red-500 to-red-600',
      details: 'Every decision we make is centered around customer satisfaction, ensuring your vision becomes reality exactly as you imagined.'
    },
    {
      title: 'Professional',
      description: 'Skilled team and quality workmanship',
      icon: 'ri-team-line',
      color: 'from-indigo-500 to-indigo-600',
      details: 'Our team of skilled professionals brings expertise and dedication to every project, ensuring superior workmanship throughout.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
              Our <span className="font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              These core values guide every aspect of our work, ensuring we deliver excellence in every project we undertake.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${value.icon} text-white text-2xl`}></i>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-white mb-3">{value.title}</h3>
                  <p className="text-amber-400 font-medium mb-4">{value.description}</p>
                  <p className="text-slate-300 leading-relaxed">{value.details}</p>
                  
                  <div className="mt-6 flex items-center text-amber-400 text-sm font-medium">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3"></div>
                    <span>Core Value</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-medium text-white mb-4">Why Choose PICK TOP INTERIOR'S?</h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                Our commitment to these values has made us a trusted partner for premium interior solutions. We combine years of experience with innovative approaches to deliver results that exceed expectations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
                  <div className="text-slate-300 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">7+</div>
                  <div className="text-slate-300 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
                  <div className="text-slate-300 text-sm">Customer Satisfaction</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer">
                  <span>Start Your Project</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a href="https://wa.me/919946826583" className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-all duration-300 whitespace-nowrap cursor-pointer">
                  <i className="ri-whatsapp-fill mr-2"></i>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}