import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import p1 from "../images/1.png";
import p2 from "../images/2.png";
import p3 from "../images/3.png";
import p4 from "../images/4.png";
import p5 from "../images/5.png";
import p6 from "../images/6.png";
import p7 from "../images/hikvision1.png";
import p8 from "../images/hikvision2.png";
import p9 from "../images/hikvision3.png";
import p10 from "../images/hikvision4.png";
import p11 from "../images/hikvision5.png";
import p12 from "../images/hikvision6.png";
import p13 from "../images/hikvision7.png";
import p14 from "../images/hikvision8.png";
import p15 from "../images/dahua1.png";
import p16 from "../images/dahua2.png";
import p17 from "../images/dahua3.png";
import p18 from "../images/dahua4.png";
import p19 from "../images/ezviv 1.jpg";
import p20 from "../images/ezviv 2.png";
import p21 from "../images/cable1.webp";
import p22 from "../images/cable2.webp";
import p23 from "../images/IP PBX 1.webp";
import p24 from "../images/IP PBX 2.webp";
import p25 from "../images/videoDoorPhone1.webp";
import p26 from "../images/videoDoorPhone2.webp";
import p27 from "../images/videoDoorPhone3.webp";
import p28 from "../images/videoDoorPhone4.webp";
import p29 from "../images/videoDoorPhone5.webp";
import p30 from "../images/attendance1.webp";
import p31 from "../images/attendance2.webp";

import { useLocation } from "react-router-dom";
import { Filter } from "lucide-react";
import { Badge } from "antd";

// No Products Animation Component
const NoProductsAnimation = () => {
  return (
    <div className="text-center py-16">
      <div className="animate-fade-in-up">
        {/* Animated Icon */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center animate-pulse"
              style={{ backgroundColor: "#50DA7A20" }}
            >
              <svg
                className="w-12 h-12 animate-bounce"
                fill="none"
                stroke="#50DA7A"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {/* Floating dots */}
            <div
              className="absolute -top-2 -right-2 w-3 h-3 rounded-full animate-ping"
              style={{ backgroundColor: "#50DA7A60" }}
            ></div>
            <div
              className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: "#50DA7A40", animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3
            className="text-xl font-semibold text-gray-700 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            No products found
          </h3>
          <p
            className="text-gray-500 text-lg animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Try adjusting your filters or browse other categories
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center space-x-2">
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#50DA7A80" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#50DA7A60", animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ backgroundColor: "#50DA7A40", animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

const ProductsPage = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Scroll to top when component mounts or when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const categories = [
    "All",
    "CCTV",
    "Video Door Phone",
    "Home Automation",
    "Attendance system",
    "IP PBX",
    "Cables",
  ];

  type Product = {
    id: number;
    name: string;
    category: string;
    description: string;
    price: string;
    image: string;
    features: string[];
    new?: boolean;
  };

  const products: Product[] = [
    {
      id: 1,
      name: "IMOU Cruiser Dual 2",
      category: "CCTV",
      description:
        "Blue & Red Warning Light Smart Full-color Night Vision | Wide View Dual Lens IMOU Algorithm Mart: Algo Play",
      price: "₹8,500",
      image: p1,
      features: [
        "5+5MP Dual Lens",
        "Wide View Dual Lens",
        "Algo Play (IMOU Algorithm)",
      ],
    },
    {
      id: 2,
      name: "IMOU Cruiser Dual",
      category: "CCTV",
      description:
        "Smart Full-color Night Vision | Wide View Dual Lens | IMOU SENSE® Dual-channel Human & Vehicle Detection",
      price: "₹1,200",
      image: p2,
      features: [
        "5+5MP Dual Lens",
        "Wide View Dual Lens",
        "IMOU SENSE",
        "Human & Vehicle Detection",
      ],
    },
    {
      id: 3,
      name: "IMOU Cruiser SE+",
      category: "CCTV",
      description:
        "Always focus on the point | Smart Auto Tracking | 360° Coverage | Two-way Talk",
      price: "₹12,000",
      image: p3,
      features: [
        "3MP/5MP Options",
        "Smart Auto Tracking",
        "360° Coverage",
        "Two‑way Talk",
        "Always-on Focus",
      ],
    },
    {
      id: 4,
      name: "IMOU DK3",
      category: "CCTV",
      description:
        "Reliable Surveillance Starts Here | Multiple Resolutions | Night Vision Mode | IP67 | Alarm Notification | Worry-Free Storage | Multi-Scenario Adaptability",
      price: "₹15,000",
      image: p4,
      features: [
        "2MP/3MP/4MP",
        "IP67 Rated",
        "Human Detection",
        "Alarm Notifications",
        "Worry‑free Storage",
      ],
    },
    {
      id: 5,
      name: "IMOU Bullet 3C",
      category: "CCTV",
      description:
        "Supports Wi‑Fi 6 Connection | Powered by IMOU SENSE™ | IP67 Weather-resistance",
      price: "₹18,000",
      image: p5,
      features: [
        "3MP/5MP",
        "5MP 3K Image",
        "Wi‑Fi 6 Support",
        "IMOU SENSE Powered",
        "IP67 Weather‑resistant",
      ],
    },
    {
      id: 6,
      name: "IMOU Turret SE",
      category: "CCTV",
      description:
        "Keep Connected to Your Business | Human Detection | Night Vision",
      price: "₹5,500",
      image: p6,
      features: ["2MP/4MP", "Human Detection", "Night Vision"],
    },
    {
      id: 7,
      name: "HIKVISION DS-2CD2H86G2H-IZS2UY/S(L)(RB)",
      category: "CCTV",
      description:
        "8MP Powered by Darkfighter Motorized Varifocal Turret Network Camera",
      price: "₹45/meter",
      image: p7,
      features: [
        "8MP",
        "Powered by Darkfighter",
        "Motorized Varifocal",
        "Turret Network Camera",
      ],
    },
    {
      id: 8,
      name: "HIKVISION DS-2CD20123G2-LI(U)Y",
      category: "CCTV",
      description:
        "12MP Acusense Smart Hybrid Light Fixed Bullet Network Camera",
      price: "₹6,800",
      image: p8,
      features: [
        "12MP",
        "AcuSense",
        "Smart Hybrid Light",
        "Fixed Bullet",
        "Network Camera",
      ],
    },
    {
      id: 9,
      name: "HIKVISION DS-2CD23123G2-LI(2U)Y",
      category: "CCTV",
      description:
        "12MP Acusense Smart Hybrid Light Fixed Turret Network Camera",
      price: "₹5,500",
      image: p9,
      features: [
        "12MP",
        "AcuSense",
        "Smart Hybrid Light",
        "Fixed Turret",
        "Network Camera",
      ],
    },
    {
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
        "Network Camera",
      ],
    },
    {
      id: 11,
      name: "HIKVISION DS-2CD2767G2H-LIPTRZS",
      category: "CCTV",
      description:
        "6MP Smart Hybrid Light with ColorVu Motorized PTRZ Varifocal Dome Network Camera",
      price: "₹5,500",
      image: p11,
      features: [
        "6MP",
        "Smart Hybrid Light",
        "ColorVu",
        "Motorized PTRZ",
        "Varifocal Dome",
        "Network Camera",
      ],
    },
    {
      id: 12,
      name: "HIKVISION DS-2CD2767G2H-LIPTRZS2U/SL",
      category: "CCTV",
      description:
        "6MP Smart Hybrid Light with ColorVu Motorized PTRZ Varifocal Dome Network Camera",
      price: "₹5,500",
      image: p12,
      features: [
        "6MP",
        "Smart Hybrid Light",
        "ColorVu",
        "Motorized PTRZ",
        "Varifocal Dome",
        "Network Camera",
      ],
    },
    {
      id: 13,
      name: "HIKVISION DS-2CD2767G2HT-LIZS",
      category: "CCTV",
      description:
        "6MP Smart Hybrid Light with ColorVu Motorized Varifocal Dome Network Camera",
      price: "₹5,500",
      image: p13,
      features: [
        "6MP",
        "Smart Hybrid Light",
        "ColorVu",
        "Motorized Varifocal",
        "Dome",
        "Network Camera",
      ],
    },
    {
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
        "Network Camera",
      ],
    },

    {
      id: 15,
      name: "DAHUA IPC-HFW2449S-S-IL",
      category: "CCTV",
      description:
        "4MP Smart Dual Light Fixed-focal Bullet WizSense Network Camera",
      price: "₹5,500",
      image: p15,
      features: [
        "4MP Resolution",
        '1/2.9" CMOS Image Sensor',
        "Low Luminance",
        "High Definition Image",
        "Smart Dual Light",
        "Fixed-focal Bullet",
      ],
    },
    {
      id: 16,
      name: "DAHUA IPC-HDW2249T-S-IL",
      category: "CCTV",
      description:
        "2MP Smart Dual Light Fixed-focal Eyeball WizSense Network Camera",
      price: "₹5,500",
      image: p16,
      features: [
        "2MP Resolution",
        '1/2.8" CMOS Image Sensor',
        "Low Luminance",
        "High Definition Image",
        "Smart Dual Light",
        "Fixed-focal Eyeball",
      ],
    },
    {
      id: 17,
      name: "DAHUA DH-IPC-HFW3449EP-AS-LED",
      category: "CCTV",
      description:
        "4MP Full-color Warm LED Fixed-focal Bullet WizSense Network Camera",
      price: "₹5,500",
      image: p17,
      features: [
        "4MP Resolution",
        '1/2.7" CMOS Image Sensor',
        "Low Illuminance",
        "High Image Definition",
        "Full-color Warm LED",
        "Fixed-focal Bullet",
      ],
    },
    {
      id: 18,
      name: "DAHUA IPC-HDW3249TM-AS-LED",
      category: "CCTV",
      description:
        "2MP Full-color Warm LED Fixed-focal Eyeball WizSense Network Camera",
      price: "₹5,500",
      image: p18,
      features: [
        "2MP Resolution",
        '1/2.8" CMOS Image Sensor',
        "Low Illuminance",
        "High Image Definition",
        "Full-color Warm LED",
        "Fixed-focal Eyeball",
      ],
    },
    {
      id: 19,
      name: "EZVIV HB8",
      category: "CCTV",
      description: "Battery-Powered Pan & Tilt Wi-Fi Camera",
      price: "₹5,500",
      image: p19,
      features: [
        "Self-adaptive shutter",
        "Smart Human Motion Detection",
        "Two-way Talk Supports",
        "Anti-Flicker",
        "Heart Beat",
        "Password Protection",
        "Watermark",
      ],
    },
    {
      id: 20,
      name: "EZVIV CB3",
      category: "CCTV",
      description: "Standalone Smart Home Battery Camera",
      price: "₹5,500",
      image: p20,
      features: [
        "Self-adaptive shutter",
        "Day & Night IR-Cut filter with auto-switching",
        "3D DNR",
        "Night Vision IR Distance: 15m",
        "Color Night Vision Distance: 15m",
        "Smart Human Motion Detection",
        "Two-way Talk Supports",
      ],
    },
    {
      id: 21,
      name: "HIKVISION DS-1NP6ADL0",
      category: "Cables",
      description:
        "Cat6A patch cord - Stable electrical performance, compliant with ANSI/TIA-568.2-D Category 6A and ISO 11801 Class EA",
      price: "₹45/meter",
      image: p21,
      features: [
        "ISO 11801 Class EA compliant",
        "Bare Copper conductor with less resistance",
        "Better electrical properties",
        "Gold plated plug",
        "Less resistance and insertion loss",
        "Compliant with RoHS 2.0",
      ],
    },
    {
      id: 22,
      name: "D-Link Cat 6 UTP 23AWG LAN Cable",
      category: "Cables",
      description:
        "4-pair unshielded twisted pair (UTP) cable with aluminum foil shielding and drain wire and Superior conductivity",
      price: "₹45/meter",
      image: p22,
      features: [
        "4-pair unshielded twisted pair (UTP) cable",
        "23 AWG solid copper conductor",
        "HDPE insulation",
        "FR PVC Jacket",
        "EIA/TIA standards compliant",
        "UL-listed",
        "Easy-to-pull box packaging",
      ],
    },
    {
      id: 23,
      name: "GRANDSTREAM UCM6300 Series IP PBX",
      category: "IP PBX",
      description:
        "Unified communications platform for voice, video calling/conferencing, surveillance, web meetings, data, analytics, mobility, facility access, and intercoms on a single network.",
      price: "Contact for pricing",
      image: p23,
      features: [
        "Supports up to 3000 users & 450 concurrent calls",
        "Zero-config Grandstream SIP provisioning",
        "Wave app for Android, iOS, Chrome & Firefox",
        "API for CRM & PMS integrations",
        "Powered by Asterisk v16 open-source telephony",
      ],
    },
    {
      id: 24,
      name: "GRANDSTREAM UCM6300 Audio Series IP PBX",
      category: "IP PBX",
      description:
        "Unified audio communications platform for voice, IM, voice meetings, audio web meetings, data, analytics, mobility, facility access, and intercoms.",
      price: "Contact for pricing",
      image: p24,
      features: [
        "Supports up to 1500 users & 200 concurrent calls",
        "Zero-config Grandstream SIP provisioning",
        "3 Gigabit RJ45 with PoE+ & NAT router support",
        "Powered by Asterisk v16 open-source telephony",
      ],
    },
    {
      id: 29,
      name: "HIKVISION DS-KV6114-MWBE1",
      category: "Video Door Phone",
      description:
        "Villa door station with 4MP 150° camera and multiple unlocking options.",
      price: "Contact for pricing",
      image: p29,
      new: true,
      features: [
        "4MP resolution with 150° viewing angle",
        "2 locks control",
        "Multiple unlocking: Card, Bluetooth, Hik-Connect, indoor station",
        "Video recording & playback via Hik-Connect or PC web",
        "IEEE802.3at PoE power supply",
      ],
    },
    {
      id: 25,
      name: "HIKVISION DS-KV6114-E1",
      category: "Video Door Phone",
      description:
        " Villa door station with 4MP camera, 150° view, and dual lock control.",
      price: "Contact for pricing",
      image: p25,
      new: true,
      features: [
        "4MP resolution with 150° viewing angle",
        "2 locks control",
        "Multiple unlocking: Card, Hik-Connect, indoor station",
        "Video recording & playback via Hik-Connect or PC web",
        "IEEE802.3at PoE power supply",
      ],
    },
    {
      id: 26,
      name: "HIKVISION DS-KV6133-WME1/Flush",
      category: "Video Door Phone",
      description:
        "IP villa door station with IR camera, PoE, and Hik-Connect direct calling.",
      price: "Contact for pricing",
      image: p26,
      new: true,
      features: [
        "2MP camera with IR supplement",
        "One-button calling design",
        "Built-in card reader module",
        "Standard PoE power supply",
        "IP65 with aluminum alloy casing",
        "Call directly to Hik-Connect APP",
      ],
    },

    {
      id: 28,
      name: "HIKVISION DS-KV6133-ME1",
      category: "Video Door Phone",
      description:
        "Villa door station with 2MP IR camera, PoE, IP65, and Hik-Connect calling.",
      price: "Contact for pricing",
      image: p28,
      features: [
        "2MP camera with IR supplement",
        "One-button calling design",
        "Built-in card reader module",
        "Standard PoE power supply",
        "IP65 with aluminum alloy casing",
        "Call directly to Hik-Connect APP",
      ],
    },

    {
      id: 27,
      name: "HIKVISION DS-KH8350-TE1",
      category: "Video Door Phone",
      description:
        "KH8 Series indoor station with premium materials and 7-inch touch screen.",
      price: "Contact for pricing",
      image: p27,
      features: [
        "Premium tempered glass",
        "Aerospace‑grade aluminum",
        "New UI V2.0 user-friendly design",
        "7-inch touch screen, 1024×600",
        "8.6 mm ultra‑slim design",
      ],
    },
    {
      id: 30,
      name: "eSSL UFace 302 Multi Biometric Face Attendance Machine",
      category: "Attendance system",
      description:
        "Face recognition attendance device with long battery backup and rich self-service functions.",
      price: "Contact for pricing",
      image: p30,
      features: [
        "Type: Face Recognition",
        "Up to 12 hours battery backup",
        "Automatic Status Switch & Self‑Service Query",
        "Work Code, SMS, DST, T9 Input",
        "9‑digit User ID, Scheduled Bell",
      ],
    },
    {
      id: 31,
      name: "eSSL F22+ID+WIFI Time & Attendance",
      category: "Attendance system",
      description:
        "Fingerprint and card based time & attendance terminal with Wi‑Fi and LCD display.",
      price: "Contact for pricing",
      image: p31,
      features: [
        "Scratch‑proof surface",
        "Fingerprint capacity: 3000",
        "LCD display",
        "Identification: Fingerprint & Card",
        "Built‑in Wi‑Fi",
      ],
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
     <Helmet>
  <title>Security Products in Kerala | CCTV, Automation & IP PBX</title>
  <meta 
    name="description" 
    content="Shop high-quality CCTV cameras, video door phones, IP PBX, attendance systems, home automation, and cabling products from Hikvision, Dahua, Imou, Ezviz and more in Kerala." 
  />
  <link rel="canonical" href="https://www.ethicsecuritysolution.com/products" />
</Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of security and automation products
            from trusted brands
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Filter by Category
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const hasRibbon = Boolean(product.new);
            const card = (
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
                  <div className="mb-2">
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
            );

            if (!hasRibbon) return card;

            return (
              <Badge.Ribbon key={product.id} placement="start" text="NEW">
                {card}
              </Badge.Ribbon>
            );
          })}
        </div>

        {filteredProducts.length === 0 && <NoProductsAnimation />}

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
