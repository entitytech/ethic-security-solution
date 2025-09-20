import React, { useState } from 'react';
import { Camera, Home, Phone, Fingerprint, Volume2, Network, DoorOpen, Cable, Shield } from 'lucide-react';

const SolutionsPage = () => {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);

  const solutions = [
    {
      icon: <Camera className="h-12 w-12" />,
      title: "CCTV Installation",
      description: "Professional CCTV camera installation with HD quality recording, remote monitoring, and night vision capabilities for complete surveillance.",
      details: "Our CCTV systems include high-definition cameras, digital video recorders, remote access through mobile apps, and professional installation with optimal camera placement for maximum coverage.",
      image: "https://images.pexels.com/photos/8566533/pexels-photo-8566533.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Home Automations",
      description: "Smart home automation systems for lighting, climate control, security, and entertainment systems with mobile app control.",
      details: "Transform your home into a smart home with automated lighting, temperature control, security systems, and entertainment centers. Control everything from your smartphone or tablet.",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <Phone className="h-12 w-12" />,
      title: "Video Door Phones",
      description: "Advanced video door phone systems with HD video quality, two-way communication, and remote access for enhanced security.",
      details: "See and communicate with visitors before opening the door. Our video door phone systems feature HD video, clear audio, remote unlocking, and smartphone integration.",
      image: "https://images.pexels.com/photos/8566532/pexels-photo-8566532.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <Fingerprint className="h-12 w-12" />,
      title: "Biometric Attendance Systems",
      description: "Fingerprint and facial recognition attendance systems for accurate employee time tracking and access control.",
      details: "Advanced biometric systems using fingerprint and face recognition technology for accurate attendance tracking, access control, and employee management.",
      image: "https://images.pexels.com/photos/8566478/pexels-photo-8566478.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <Volume2 className="h-12 w-12" />,
      title: "Audio Systems",
      description: "Professional audio system installation for homes, offices, and commercial spaces with high-quality speakers and amplifiers.",
      details: "Premium audio solutions including surround sound systems, public address systems, background music setups, and conference room audio systems.",
      image: "https://images.pexels.com/photos/8566534/pexels-photo-8566534.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: "Computer Networking",
      description: "Complete networking solutions including LAN/WAN setup, Wi-Fi installation, and network security for businesses.",
      details: "Comprehensive networking services including structured cabling, wireless networks, network security, server setup, and IT infrastructure management.",
      image: "https://images.pexels.com/photos/8566477/pexels-photo-8566477.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <DoorOpen className="h-12 w-12" />,
      title: "Gate Automation",
      description: "Automated gate systems with remote control, smartphone access, and safety sensors for residential and commercial properties.",
      details: "Smart gate automation systems with remote controls, smartphone app integration, safety sensors, backup power, and professional installation.",
      image: "https://images.pexels.com/photos/8566475/pexels-photo-8566475.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <Cable className="h-12 w-12" />,
      title: "Cabling Solutions",
      description: "Structured cabling systems for data, voice, and video transmission with Cat6/Cat6A cables and professional installation.",
      details: "Professional structured cabling services including data cables, fiber optic cables, cable management systems, and network infrastructure setup.",
      image: "https://images.pexels.com/photos/8566476/pexels-photo-8566476.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Alarm Systems",
      description: "Advanced alarm systems with motion sensors, door/window sensors, and smartphone alerts for comprehensive security.",
      details: "Complete alarm systems with motion detectors, door/window sensors, sirens, smartphone notifications, and 24/7 monitoring options.",
      image: "https://images.pexels.com/photos/8566479/pexels-photo-8566479.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Security Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security and automation solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              onClick={() => setSelectedSolution(selectedSolution === index ? null : index)}
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${solution.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-blue-600">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl  font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                
                {selectedSolution === index && (
                  <div className="border-t pt-4 mt-4 animate-fade-in">
                    <h4 className="font-semibold text-gray-900 mb-2">Detailed Features:</h4>
                    <p className="text-gray-700">
                      {solution.details}
                    </p>
                  </div>
                )}
                
                <button className="mt-4 text-green-600 hover:text-green-700 font-medium flex items-center space-x-1">
                  <span>{selectedSolution === index ? 'Show Less' : 'Learn More'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-blue-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Get a free consultation and quote for your security needs
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;