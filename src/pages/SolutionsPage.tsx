import React, { useState, useEffect } from 'react';
import cctvImage from '../images/cctvInstallation.webp';
import homeAutomations from '../images/HomeAutomations.webp';
import cablingSolutions from '../images/cablingSolutions.webp';
import gateAutomation from '../images/gateAutomation.webp';
import videoDoorPhones from '../images/videoDoorPhones.webp';
import computerNetworking from '../images/computerNetworking.webp';
import alarmSystem from '../images/alarmSystem.webp';
import ipPbx from '../images/ipPbx.webp';
import biometric from '../images/biometric.webp';




import { useLocation } from 'react-router-dom';
import { Cctv, Home, Phone, Fingerprint, Volume2, Network, DoorOpen, Cable, Shield } from 'lucide-react';

const SolutionsPage = () => {
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);
  const location = useLocation();

  // Scroll to top when component mounts or when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const solutions = [
    {
      icon: <Cctv className="h-12 w-12" />,
      title: "CCTV Installation",
      description: "Professional CCTV camera installation with HD quality recording, remote monitoring, and night vision capabilities for complete surveillance.",
      details: "Our CCTV systems include high-definition cameras, digital video recorders, remote access through mobile apps, and professional installation with optimal camera placement for maximum coverage.",
      image: cctvImage
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Home Automations",
      description: "Smart home automation systems for lighting, climate control, security, and entertainment systems with mobile app control.",
      details: "Transform your home into a smart home with automated lighting, temperature control, security systems, and entertainment centers. Control everything from your smartphone or tablet.",
      image: homeAutomations
    },
    {
      icon: <Phone className="h-12 w-12" />,
      title: "Video Door Phones",
      description: "Advanced video door phone systems with HD video quality, two-way communication, and remote access for enhanced security.",
      details: "See and communicate with visitors before opening the door. Our video door phone systems feature HD video, clear audio, remote unlocking, and smartphone integration.",
      image: videoDoorPhones
    },
    {
      icon: <Fingerprint className="h-12 w-12" />,
      title: "Biometric Attendance Systems",
      description: "Fingerprint and facial recognition attendance systems for accurate employee time tracking and access control.",
      details: "Advanced biometric systems using fingerprint and face recognition technology for accurate attendance tracking, access control, and employee management.",
      image: biometric
    },
    {
      icon: <Volume2 className="h-12 w-12" />,
      title: "IP PBX Systems",
      description: "Professional IP PBX installation for homes, offices, and commercial spaces with advanced VoIP technology and seamless communication solutions.",
      details: "Premium IP PBX solutions including multi-extension setups, cloud-based PBX, and hybrid PBX systemsIP PBX Systems offer professional installation for homes, offices, and commercial spaces with advanced VoIP technology, featuring multi-extension setups, call routing, voicemail-to-email, IVR, and integration with business tools for secure and cost-efficient communication.",
      image: ipPbx
    },
    {
      icon: <Network className="h-12 w-12" />,
      title: "Computer Networking",
      description: "Complete networking solutions including LAN/WAN setup, Wi-Fi installation, and network security for businesses.",
      details: "Comprehensive networking services including structured cabling, wireless networks, network security, server setup, and IT infrastructure management.",
      image: computerNetworking
    },
    {
      icon: <DoorOpen className="h-12 w-12" />,
      title: "Gate Automation",
      description: "Automated gate systems with remote control, smartphone access, and safety sensors for residential and commercial properties.",
      details: "Smart gate automation systems with remote controls, smartphone app integration, safety sensors, backup power, and professional installation.",
      image: gateAutomation
    },
    {
      icon: <Cable className="h-12 w-12" />,
      title: "Cabling Solutions",
      description: "Structured cabling systems for data, voice, and video transmission with Cat6/Cat6A cables and professional installation.",
      details: "Professional structured cabling services including data cables, fiber optic cables, cable management systems, and network infrastructure setup.",
      image: cablingSolutions
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Alarm Systems",
      description: "Advanced alarm systems with motion sensors, door/window sensors, and smartphone alerts for comprehensive security.",
      details: "Complete alarm systems with motion detectors, door/window sensors, sirens, smartphone notifications, and 24/7 monitoring options.",
      image: alarmSystem
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
                className="h-48 w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${solution.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-green-600">
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
          <a 
            href="https://wa.me/919207011244?text=Hi! I'm interested in getting a free quote for your security solutions. Please provide me with more information."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;