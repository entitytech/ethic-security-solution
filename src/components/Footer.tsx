import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '../images/LOGO-W.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <img src={logo} alt="Logo" className="h-20 w-24" />
              </Link>
            </div>
            <p className="text-gray-300">
              Trusted protection and smart automation solutions for homes & businesses in Kerala.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ethic_security.official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/1CbLLFNyTA/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/ethic4uz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors cursor-pointer block">
                  CCTV Installation
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors cursor-pointer block">
                  Home Automations
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors cursor-pointer block">
                  Video Door Phones
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors cursor-pointer block">
                  Solar Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors cursor-pointer block">
                  Gate Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <a 
                  href="https://www.google.com/maps/search/Orphanage+Rd,+Mukkam,+Kerala+673602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors cursor-pointer"
                >
                  Orphanage Rd, Mukkam, Kerala 673602
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+91 92070 11244</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">ethic4uz@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Trusted Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trusted Brands</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-800 p-2 rounded text-center text-sm hover:bg-gray-700 transition-colors">
                Hikvision
              </div>
              <div className="bg-gray-800 p-2 rounded text-center text-sm hover:bg-gray-700 transition-colors">
                Imou
              </div>
              <div className="bg-gray-800 p-2 rounded text-center text-sm hover:bg-gray-700 transition-colors">
                Dahua
              </div>
              <div className="bg-gray-800 p-2 rounded text-center text-sm hover:bg-gray-700 transition-colors">
                Ezviz
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ethic Security Solution. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Trusted by Businesses & Homes in Kerala
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
