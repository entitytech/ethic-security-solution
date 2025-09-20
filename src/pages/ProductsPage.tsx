import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'CCTV', 'Home Automation', 'Networking', 'Video Door Phone', 'Attendance system', 'IP PBX', 'Cables'];

  const products = [
    {
      id: 1,
      name: "Hikvision DS-2CD2043G2-I",
      category: "CCTV",
      description: "4MP AcuSense Fixed Bullet Network Camera with built-in microphone",
      price: "₹8,500",
      image: "https://images.pexels.com/photos/8566533/pexels-photo-8566533.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      features: ["4MP Resolution", "Night Vision", "Weather Resistant"]
    },
    {
      id: 2,
      name: "Smart Light Switch",
      category: "Home Automation",
      description: "WiFi enabled smart switch with voice control and mobile app",
      price: "₹1,200",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      features: ["WiFi Control", "Voice Assistant", "Timer Function"]
    },
    {
      id: 3,
      name: "TP-Link Archer AX73",
      category: "Networking",
      description: "AX5400 Dual Band Gigabit Wi-Fi 6 Router",
      price: "₹12,000",
      image: "https://images.pexels.com/photos/8566477/pexels-photo-8566477.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      features: ["Wi-Fi 6", "Dual Band", "Gigabit Speed"]
    },
    {
      id: 4,
      name: "Bose SoundLink Mini",
      category: "Video Door Phone",
      description: "Portable Bluetooth speaker with premium sound quality",
      price: "₹15,000",
      image: "https://images.pexels.com/photos/8566534/pexels-photo-8566534.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      features: ["Bluetooth 5.0", "12hr Battery", "Premium Sound"]
    },
    {
      id: 5,
      name: "Solar Panel 320W",
      category: "Attendance system",
      description: "Monocrystalline solar panel with 25-year warranty",
      price: "₹18,000",
      image: "https://images.pexels.com/photos/9875391/pexels-photo-9875391.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      features: ["320W Output", "25yr Warranty", "Weather Resistant"]
    },
    {
      id: 6,
      name: "Fingerprint Scanner",
      category: "IP PBX",
      description: "Biometric fingerprint scanner with 1000 user capacity",
      price: "₹5,500",
      image: "https://images.pexels.com/photos/8566478/pexels-photo-8566478.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      features: ["1000 Users", "Fast Recognition", "Backup Power"]
    },
    {
      id: 7,
      name: "Cat6A Ethernet Cable",
      category: "Cables",
      description: "High-speed ethernet cable for network installations",
      price: "₹45/meter",
      image: "https://images.pexels.com/photos/8566476/pexels-photo-8566476.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      features: ["Cat6A Standard", "10Gbps Speed", "23AWG"]
    },
    {
      id: 8,
      name: "CP Plus CP-UNC-VA40L3-S",
      category: "CCTV",
      description: "4MP Vandal Proof IR Dome Camera",
      price: "₹6,800",
      image: "https://images.pexels.com/photos/8566532/pexels-photo-8566532.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      features: ["4MP Resolution", "Vandal Proof", "IR Night Vision"]
    }
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
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
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
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
            Contact Sales Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;