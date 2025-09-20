import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Phone, MessageCircle, Mail, Book } from 'lucide-react';

const HelpCenterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of CCTV cameras do you install?",
      answer: "We install various types of CCTV cameras including dome cameras, bullet cameras, PTZ cameras, wireless cameras, and IP cameras. We work with top brands like Hikvision, CP Plus, Dahua, and Uniview to provide high-quality surveillance solutions."
    },
    {
      question: "How long does it take to install a home automation system?",
      answer: "The installation time depends on the complexity of the system. A basic home automation setup can be completed in 1-2 days, while comprehensive systems may take 3-5 days. We provide a detailed timeline after the initial consultation."
    },
    {
      question: "Do you provide warranty on your products and services?",
      answer: "Yes, we provide comprehensive warranty on all our products and services. Hardware typically comes with 1-3 years warranty, and our installation services include a 1-year service warranty. Extended warranty options are also available."
    },
    {
      question: "Can I monitor my security system remotely?",
      answer: "Absolutely! All our modern security systems come with remote monitoring capabilities. You can view live feeds, receive alerts, and control your system through mobile apps or web portals from anywhere in the world."
    },
    {
      question: "What is the cost of a basic CCTV installation?",
      answer: "The cost varies based on the number of cameras, type of cameras, storage requirements, and installation complexity. A basic 4-camera system starts from ₹25,000. We provide free site surveys and detailed quotes."
    },
    {
      question: "Do you provide 24/7 technical support?",
      answer: "Yes, we offer 24/7 emergency technical support for critical security systems. For general inquiries, our support team is available Monday-Saturday 9AM-6PM, and Sunday 10AM-4PM."
    },
    {
      question: "Can you integrate different security systems together?",
      answer: "Yes, we specialize in integrating various security systems including CCTV, access control, alarm systems, and home automation into a unified platform for seamless control and monitoring."
    },
    {
      question: "What maintenance is required for security systems?",
      answer: "Regular maintenance includes cleaning cameras, checking connections, updating software, and testing all components. We recommend quarterly maintenance checks, and we offer annual maintenance contracts for hassle-free upkeep."
    }
  ];

  const helpTopics = [
    {
      title: "Installation Services",
      description: "Learn about our professional installation process",
      icon: "🔧"
    },
    {
      title: "Product Guides",
      description: "Detailed guides for our security products",
      icon: "📖"
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions",
      icon: "🛠️"
    },
    {
      title: "Warranty & Support",
      description: "Information about warranties and support options",
      icon: "🛡️"
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions and get the help you need
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-12">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for help topics, products, or questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>

        {/* Help Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {helpTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="text-3xl mb-4">{topic.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No FAQs found matching your search. Try different keywords or contact us directly.
              </p>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Our support team is ready to assist you with any questions or concerns
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-500 rounded-lg p-6 hover:bg-blue-400 transition-colors cursor-pointer">
              <Phone className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100 text-sm">+91 92070 11244</p>
            </div>
            
            <div className="bg-green-500 rounded-lg p-6 hover:bg-green-400 transition-colors cursor-pointer">
              <MessageCircle className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
              <p className="text-green-100 text-sm">Quick Chat Support</p>
            </div>
            
            <div className="bg-purple-500 rounded-lg p-6 hover:bg-purple-400 transition-colors cursor-pointer">
              <Mail className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-purple-100 text-sm">ethic4uz@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Documentation Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Additional Resources
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              <Book className="inline h-4 w-4 mr-2" />
              Installation Guides
            </a>
            <a href="#" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              <Book className="inline h-4 w-4 mr-2" />
              Product Manuals
            </a>
            <a href="#" className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 hover:text-blue-600">
              <Book className="inline h-4 w-4 mr-2" />
              Video Tutorials
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;