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
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 ease-soft hover:scale-110 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
      
      <img src="/whatsapp.png" alt="WhatsApp" className="h-10 w-10 object-contain" />
    </a>
  );
}
