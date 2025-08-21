
'use client';

import { openWhatsApp, MessageType } from '@/utils/whatsapp';

export default function OurServices() {
  const services = [
    {
      title: "Design & Fabrication",
      description: "Advanced 2D/3D visualization, precision aluminium fabrication, and premium cladding solutions",
      icon: "ri-compass-3-line",
      features: [
        "3D Architectural Visualization",
        "Precision Aluminium Fabrication",
        "Premium Cladding Systems",
        "Custom Design Development",
        "Technical Engineering",
        "Project Visualization"
      ],
      gradient: "from-amber-500 to-orange-500",
      messageType: "design-fabrication" as MessageType
    },
    {
      title: "Glass & Metal Artistry",
      description: "Sophisticated steel handrails, architectural glass works, and structural metal solutions",
      icon: "ri-hammer-line",
      features: [
        "Architectural Steel Handrails",
        "Premium Glass Installation",
        "Structural Metal Fabrication",
        "Decorative Steel Elements",
        "Glass Partition Systems",
        "Balcony & Staircase Design"
      ],
      gradient: "from-slate-600 to-slate-800",
      messageType: "glass-metal" as MessageType
    },
    {
      title: "Construction & Installation",
      description: "Complete construction management, luxury pergolas, and comprehensive interior/exterior solutions",
      icon: "ri-building-4-line",
      features: [
        "Turnkey Construction",
        "Luxury Pergola Design",
        "Complete Interior Solutions",
        "Exterior Architecture",
        "Renovation & Restoration",
        "Project Management"
      ],
      gradient: "from-blue-600 to-blue-800",
      messageType: "construction" as MessageType
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-slate-100 text-slate-700 text-sm font-medium rounded-full border border-slate-200 mb-6">
            Professional Services
          </span>
          <h2 className="text-5xl font-light text-slate-900 mb-6 tracking-wide">
            Comprehensive <span className="font-bold">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we provide end-to-end services that exceed expectations and deliver exceptional results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-50 rounded-none p-10 hover:bg-white transition-all duration-300 hover:shadow-xl border border-slate-200 hover:border-slate-300">
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-3xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
              
              <div className="space-y-4 mb-10">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-slate-700">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => openWhatsApp(service.messageType)}
                className={`group w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white font-medium px-6 py-4 rounded-none transition-all duration-300 whitespace-nowrap cursor-pointer`}
              >
                <span className="flex items-center justify-center">
                  <i className="ri-whatsapp-line mr-2"></i>
                  Request Quote
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
