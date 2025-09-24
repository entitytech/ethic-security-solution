import React, { useState, useEffect } from 'react';
import p1 from '../images/1.png';
import p2 from '../images/2.png';
import p3 from '../images/3.png';
import p4 from '../images/4.png';
import p5 from '../images/5.png';
import p6 from '../images/6.png';
import p7 from '../images/hikvision1.png';
import p8 from '../images/hikvision2.png';
import p9 from '../images/hikvision3.png';
import p10 from '../images/hikvision4.png';
import p11 from '../images/hikvision5.png';
import p12 from '../images/hikvision6.png';
import p13 from '../images/hikvision7.png';
import p14 from '../images/hikvision8.png';

import { useLocation } from 'react-router-dom';
import { Filter } from 'lucide-react';

const ProductsPage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Scroll to top when component mounts or when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const categories = ['All', 'CCTV', 'Networking', 'Video Door Phone', 'Attendance system', 'IP PBX', 'Cables'];

  const products = [
    {
      id: 1,
      name: "IMOU Cruiser Dual 2",
      category: "CCTV",
      description: "Blue & Red Warning Light Smart Full-color Night Vision | Wide View Dual Lens IMOU Algorithm Mart: Algo Play",
      price: "₹8,500",
      image: p1,
      features: [
        "5+5MP Dual Lens",
        "Wide View Dual Lens",
        "Algo Play (IMOU Algorithm)"
      ]
    },
    {
      id: 2,
      name: "IMOU Cruiser Dual",
      category: "CCTV",
      description: "Smart Full-color Night Vision | Wide View Dual Lens | IMOU SENSE® Dual-channel Human & Vehicle Detection",
      price: "₹1,200",
      image: p2,
      features: [
        "5+5MP Dual Lens",
        "Wide View Dual Lens",
        "IMOU SENSE",
        "Human & Vehicle Detection"
      ]
    },
    {
      id: 3,
      name: "IMOU Cruiser SE+",
      category: "CCTV",
      description: "Always focus on the point | Smart Auto Tracking | 360° Coverage | Two-way Talk",
      price: "₹12,000",
      image: p3,
      features: [
        "3MP/5MP Options",
        "Smart Auto Tracking",
        "360° Coverage",
        "Two‑way Talk",
        "Always-on Focus"
      ]
    },
    {
      id: 4,
      name: "IMOU DK3",
      category: "CCTV",
      description: "Reliable Surveillance Starts Here | Multiple Resolutions | Night Vision Mode | IP67 | Alarm Notification | Worry-Free Storage | Multi-Scenario Adaptability",
      price: "₹15,000",
      image: p4,
      features: [
        "2MP/3MP/4MP",
        "IP67 Rated",
        "Human Detection",
        "Alarm Notifications",
        "Worry‑free Storage",
      ]
    },
    {
      id: 5,
      name: "IMOU Bullet 3C",
      category: "CCTV",
      description: "Supports Wi‑Fi 6 Connection | Powered by IMOU SENSE™ | IP67 Weather-resistance",
      price: "₹18,000",
      image: p5,
      features: [
        "3MP/5MP",
        "5MP 3K Image",
        "Wi‑Fi 6 Support",
        "IMOU SENSE Powered",
        "IP67 Weather‑resistant"
      ]
    },
    {
      id: 6,
      name: "IMOU Turret SE",
      category: "CCTV",
      description: "Keep Connected to Your Business | Human Detection | Night Vision",
      price: "₹5,500",
      image: p6,
      features: [
        "2MP/4MP",
        "Human Detection",
        "Night Vision"
      ]
    },
    {
      id: 7,
      name: "HIKVISION DS-2CD2H86G2H-IZS2UY/S(L)(RB)",
      category: "CCTV",
      description: "8MP Powered by Darkfighter Motorized Varifocal Turret Network Camera",
      price: "₹45/meter",
      image: p7,
      features: [
        "8MP",
        "Powered by Darkfighter",
        "Motorized Varifocal",
        "Turret Network Camera"
      ]
    },
    {
      id: 8,
      name: "HIKVISION DS-2CD20123G2-LI(U)Y",
      category: "CCTV",
      description: "12MP Acusense Smart Hybrid Light Fixed Bullet Network Camera",
      price: "₹6,800",
      image: p8,
      features: [
        "12MP",
        "AcuSense",
        "Smart Hybrid Light",
        "Fixed Bullet",
        "Network Camera"
      ]
    },
    {
      id: 9,
      name: "HIKVISION DS-2CD23123G2-LI(2U)Y",
      category: "CCTV",
      description: "12MP Acusense Smart Hybrid Light Fixed Turret Network Camera",
      price: "₹5,500",
      image: p9,
      features: [
        "12MP",
        "AcuSense",
        "Smart Hybrid Light",
        "Fixed Turret",
        "Network Camera"
      ]
    }, {
      id: 10,
      name: "HIKVISION DS-2CD2H23G2-IZS",
      category: "CCTV",
      description: "2MP AcuSense Motorized Varifocal Turret Network Camera",
      price: "₹5,500",
      image: p10,
      features: [
        "2MP",
        "AcuSense",
        "Motorized Varifocal",
        "Turret",
        "Network Camera"
      ]
    }, {
      id: 11,
      name: "HIKVISION DS-2CD2767G2H-LIPTRZS",
      category: "CCTV",
      description: "6MP Smart Hybrid Light with ColorVu Motorized PTRZ Varifocal Dome Network Camera",
      price: "₹5,500",
      image: p11,
      features: [
        "6MP",
        "Smart Hybrid Light",
        "ColorVu",
        "Motorized PTRZ",
        "Varifocal Dome",
        "Network Camera"
      ]
    }, {
      id: 12,
      name: "HIKVISION DS-2CD2767G2H-LIPTRZS2U/SL",
      category: "CCTV",
      description: "6MP Smart Hybrid Light with ColorVu Motorized PTRZ Varifocal Dome Network Camera",
      price: "₹5,500",
      image: p12,
      features: [
        "6MP",
        "Smart Hybrid Light",
        "ColorVu",
        "Motorized PTRZ",
        "Varifocal Dome",
        "Network Camera"
      ]
    }, {
      id: 13,
      name: "HIKVISION DS-2CD2767G2HT-LIZS",
      category: "CCTV",
      description: "6MP Smart Hybrid Light with ColorVu Motorized Varifocal Dome Network Camera",
      price: "₹5,500",
      image: p13,
      features: [
        "6MP",
        "Smart Hybrid Light",
        "ColorVu",
        "Motorized Varifocal",
        "Dome",
        "Network Camera"
      ]
    }, {
      id: 14,
      name: "HIKVISION DS-2CD2346G2H-I(U)",
      category: "CCTV",
      description: "4MP Powered by Darkfighter Fixed Turret Network Camera",
      price: "₹5,500",
      image: p14,
      features: [
        "4MP",
        "Powered by Darkfighter",
        "Fixed Turret",
        "Network Camera"
      ]
    },
    
    // {
    //   id: 6,
    //   name: "Turret SE",
    //   category: "CCTV",
    //   description: "Keep Connected to Your Business | Human Detection | Night Vision",
    //   price: "₹5,500",
    //   image: p15,
    //   features: [
    //     "2MP/4MP",
    //     "Human Detection",
    //     "Night Vision"
    //   ]
    // }, {
    //   id: 6,
    //   name: "Turret SE",
    //   category: "CCTV",
    //   description: "Keep Connected to Your Business | Human Detection | Night Vision",
    //   price: "₹5,500",
    //   image: p16,
    //   features: [
    //     "2MP/4MP",
    //     "Human Detection",
    //     "Night Vision"
    //   ]
    // }, {
    //   id: 6,
    //   name: "Turret SE",
    //   category: "CCTV",
    //   description: "Keep Connected to Your Business | Human Detection | Night Vision",
    //   price: "₹5,500",
    //   image: p17,
    //   features: [
    //     "2MP/4MP",
    //     "Human Detection",
    //     "Night Vision"
    //   ]
    // }, {
    //   id: 6,
    //   name: "Turret SE",
    //   category: "CCTV",
    //   description: "Keep Connected to Your Business | Human Detection | Night Vision",
    //   price: "₹5,500",
    //   image: p18,
    //   features: [
    //     "2MP/4MP",
    //     "Human Detection",
    //     "Night Vision"
    //   ]
    // }, {
    //   id: 6,
    //   name: "Turret SE",
    //   category: "CCTV",
    //   description: "Keep Connected to Your Business | Human Detection | Night Vision",
    //   price: "₹5,500",
    //   image: p19,
    //   features: [
    //     "2MP/4MP",
    //     "Human Detection",
    //     "Night Vision"
    //   ]
    // },
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of security and automation products from trusted brands
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="p-6">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">
                    {product.name}
                  </h3>
                </div>
                <div className='mb-2'>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full text-center flex-shrink-0">
                    {product.category}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* <div className="flex justify-end items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Get Quote
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Contact us for bulk orders and customized security solutions
          </p>
          <a 
            href="https://wa.me/919207011244?text=Hi! I'm interested in your products and would like to speak with your sales team. Please provide me with more information about your security solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
          >
            Contact Sales Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;