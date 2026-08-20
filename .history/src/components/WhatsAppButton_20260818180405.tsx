import React from 'react';

export function WhatsAppButton() {
  const phoneNumber = '917000609353'; // WhatsApp format without +
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-6 z-40 flex h-14 w-14 items-center justify-center transition-transform duration-200 ease-soft hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600 animate-bounce">
      
      <img src="/whatsapp.png" alt="WhatsApp" className="h-14 w-14 object-contain drop-shadow-lg" />
    </a>
  );
}
