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
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group relative"
        title="Chat on WhatsApp"
        style={{
          animation: 'whatsappCollision 3s ease-in-out infinite'
        }}
      >
        <div>
          <BsWhatsapp size={24} />
        </div>
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
        {/* Floating ring animation */}
        <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-ping opacity-20"></div>
      </button>

      {/* Phone Button */}
      <button
        onClick={handleCall}
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 group relative"
        title="Call Us"
        style={{
          animation: 'callCollision 3s ease-in-out infinite'
        }}
      >
        <div>
          <Phone size={24} />
        </div>
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Us
        </span>
        {/* Floating ring animation */}
        <div className="absolute inset-0 rounded-full border-2 border-green-300 animate-ping opacity-20"></div>
      </button>

      <style jsx>{`
        @keyframes whatsappCollision {
          0%, 100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(12px);
          }
          75% {
            transform: translateY(0);
          }
        }

        @keyframes callCollision {
          0%, 100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
          75% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HelpWidget;