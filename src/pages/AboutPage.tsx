import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Users, Award, Clock, Shield } from "lucide-react";

const AboutPage = () => {
  const location = useLocation();

  // Scroll to top when component mounts or when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Function to open Google Maps with the location
  const openGoogleMaps = () => {
    const address = "8XCR+FRR, Orphanage Rd, Mukkam, Kerala 673602, India";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, "_blank");
  };
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Expert Team" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <Helmet>
        <title>
          About Ethic Security Solution | CCTV & Automation in Kerala
        </title>
        <meta
          name="description"
          content="With 8+ years of experience, Ethic Security Solution provides CCTV installation, home automation, networking, and security systems across Kerala. Certified experts with 24/7 support."
        />
        <link
          rel="canonical"
          href="https://www.ethicsecuritysolution.com/about"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Ethic Security Solution
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of comprehensive security and automation solutions
            in Kerala, trusted by businesses and homeowners for over 8 years.
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Founded with a vision to provide cutting-edge security
                solutions, Ethic Security Solution has been at the forefront of
                protecting homes and businesses across Kerala. We combine
                advanced technology with professional expertise to deliver
                reliable security systems.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From humble beginnings to becoming a trusted name in security
                solutions, we have consistently focused on quality, innovation,
                and customer satisfaction. Our team of certified professionals
                ensures every installation meets the highest standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900">Trusted Security</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900">Expert Team</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900">Quality Products</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900">24/7 Support</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-600 rounded-2xl p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    8XCR+FRR, Orphanage Rd
                    <br />
                    Mukkam, Kerala 673602, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">0495 208 2227</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">ethic4uz@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
                <p className="text-blue-600 font-semibold">
                  Emergency Support: 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Our Location
            </h2>
            <div className="relative rounded-2xl h-96 overflow-hidden">
              {/* Map Background with Location Pin */}
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center relative">
                {/* Map Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                      linear-gradient(90deg, #e5e7eb 1px, transparent 1px),
                      linear-gradient(180deg, #e5e7eb 1px, transparent 1px)
                    `,
                      backgroundSize: "40px 40px",
                    }}
                  ></div>
                </div>

                {/* Central Location Marker */}
                <div className="relative z-10 text-center">
                  <div className="relative">
                    {/* Location Pin */}
                    <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
                      <MapPin className="h-8 w-8" />
                    </div>
                    {/* Pulse Effect */}
                    <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Ethic Security Solution
                  </h3>
                  <p className="text-gray-600 text-sm">
                    8XCR+FRR, Orphanage Rd
                    <br />
                    Mukkam, Kerala 673602
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 bg-white/80 rounded-lg px-3 py-1 text-xs text-gray-600">
                  📍 Location
                </div>
                <div className="absolute bottom-4 left-4 bg-white/80 rounded-lg px-3 py-1 text-xs text-gray-600">
                  🗺️ Kerala, India
                </div>
              </div>

              {/* Overlay with location info and button */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Get Directions
                      </p>
                      <p className="text-xs text-gray-600">
                        Click to open in Google Maps
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={openGoogleMaps}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shadow-md hover:shadow-lg"
                  >
                    Open in Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg">
              To provide innovative, reliable, and comprehensive security
              solutions that protect what matters most to our customers, while
              delivering exceptional service and support.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg">
              To be Kerala's leading security solutions provider, known for
              cutting-edge technology, professional excellence, and unwavering
              commitment to customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
