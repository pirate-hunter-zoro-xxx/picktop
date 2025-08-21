export type MessageType = 'consultation' | 'design-fabrication' | 'glass-metal' | 'construction';

const WHATSAPP_NUMBER = "+919946826583";

const messageTemplates = {
  consultation: "Hi! I'd like to schedule a consultation for interior design services with PICK TOP INTERIOR'S.",
  'design-fabrication': "Hello! I'm interested in Design & Fabrication services. Can you provide more details and a quote?",
  'glass-metal': "Hello! I'm interested in Glass & Metal Artistry services. Can you provide more details and a quote?",
  construction: "Hello! I'm interested in Construction & Installation services. Can you provide more details and a quote?"
};

export const openWhatsApp = (messageType: MessageType = 'consultation', customMessage?: string) => {
  const message = customMessage || messageTemplates[messageType];
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  // Open in new tab for desktop, same tab for mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    window.location.href = url;
  } else {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};
