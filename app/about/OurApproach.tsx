
'use client';

export default function OurApproach() {
  const processSteps = [
    {
      icon: 'ri-chat-3-line',
      title: 'Detailed Consultation',
      description: 'We begin with comprehensive consultation and requirement analysis to understand your vision and needs.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: 'ri-pencil-ruler-2-line',
      title: 'Custom Design',
      description: 'Our experts create custom designs and detailed planning tailored to your specific requirements.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: 'ri-palette-line',
      title: 'Material Selection',
      description: 'We help you choose the finest quality materials that match your style and budget preferences.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: 'ri-tools-line',
      title: 'Professional Installation',
      description: 'Our skilled team ensures flawless installation with attention to every detail and finish.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Post-Installation Support',
      description: 'We provide comprehensive support and maintenance services to ensure lasting satisfaction.',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
              Our <span className="font-bold">Approach</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              We follow a customer-centric process that ensures every project exceeds expectations through systematic planning and execution.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${step.icon} text-white text-2xl`}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="text-2xl font-light text-slate-300 mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{step.description}</p>
                  
                  <div className="mt-6 flex items-center text-amber-600 text-sm font-medium">
                    <i className="ri-check-line mr-2"></i>
                    <span>Quality Assured</span>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white border-2 border-amber-500 rounded-full flex items-center justify-center shadow-lg">
                      <i className="ri-arrow-right-line text-amber-500 text-sm"></i>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-light text-slate-900 mb-4">Customer-Centric Process</h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-light">
                Our systematic approach ensures that every aspect of your project is handled with precision and care. From initial consultation to final installation and beyond, we maintain the highest standards of professionalism and quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  <span>Start Your Project</span>
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a href="tel:+919946826583" className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>
                  <span>Call for Consultation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
