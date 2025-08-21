
'use client';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: 'ri-map-pin-line',
      title: 'Office Address',
      details: [
        'Service Road, OPP Police Station',
        'Kodakara, Kerala-680 684',
        'THRISSUR, Kerala'
      ],
      action: {
        text: 'View on Google Maps',
        href: 'https://maps.google.com/?q=Service+Road,+OPP+Police+Station,+Kodakara,+Kerala-680+684,+THRISSUR,+Kerala'
      }
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      details: ['+91 99468 26583'],
      action: {
        text: 'Call Now',
        href: 'tel:+919946826583'
      }
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: ['info@picktopinteriors.com'],
      action: {
        text: 'Send Email',
        href: 'mailto:info@picktopinteriors.com'
      }
    }
  ];

  const businessHours = [
    { day: 'Monday - Saturday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const socialLinks = [
    { icon: 'ri-facebook-fill', name: 'Facebook', href: 'https://facebook.com/picktopinteriors' },
    { icon: 'ri-instagram-fill', name: 'Instagram', href: 'https://www.instagram.com/picktop_interiors?igsh=MzE2NHRqNnpiNW1x' },
    { icon: 'ri-whatsapp-fill', name: 'WhatsApp', href: 'https://wa.me/919946826583' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Get in <span className="font-medium bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We're here to help bring your interior design dreams to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((contact, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4">
                <i className={`${contact.icon} text-white text-lg`}></i>
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">{contact.title}</h3>
              
              <div className="space-y-1 mb-4">
                {contact.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-700">{detail}</p>
                ))}
              </div>
              
              <a 
                href={contact.action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors cursor-pointer"
              >
                {contact.action.text}
                <i className="ri-external-link-line ml-1 text-sm"></i>
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-md border border-amber-100">
            <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-time-line text-amber-600 text-lg"></i>
              </div>
              Business Hours
            </h3>
            <div className="space-y-3">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-amber-200 last:border-b-0">
                  <span className="text-gray-700 font-medium">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-md border border-amber-100">
            <h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-share-line text-amber-600 text-lg"></i>
              </div>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}