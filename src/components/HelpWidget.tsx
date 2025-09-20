import React from 'react';
import { Phone } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

const HelpWidget = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919207011244', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919207011244';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
        title="Chat on WhatsApp"
      >
        <BsWhatsapp  size={24} />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </button>

      {/* Phone Button */}
      <button
        onClick={handleCall}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group"
        title="Call Us"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Us
        </span>
      </button>
    </div>
  );
};

export default HelpWidget;