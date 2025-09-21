import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import { Shield, Users, Award, Clock } from 'lucide-react';

const HomePage = () => {
  const location = useLocation();

  // Scroll to top when component mounts or when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Advanced Security",
      description: "State-of-the-art security systems with 24/7 monitoring and smart alerts"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Expert Team",
      description: "Certified professionals with years of experience in security solutions"
    },
    {
      icon: <Award className="h-12 w-12 text-blue-600" />,
      title: "Quality Assured",
      description: "Premium quality products with comprehensive warranty and support"
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your security needs"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      text: "Excellent service and professional installation. Our office security has never been better!"
    },
    {
      name: "Priya Nair",
      role: "Homeowner",
      text: "The home automation system is amazing. Everything works seamlessly and the team was very helpful."
    },
    {
      name: "Mohammed Ali",
      role: "Factory Manager",
      text: "Their industrial security solutions have greatly improved our facility's safety standards."
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ethic Security Solution?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver comprehensive security and automation solutions with unmatched quality and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by 500+ Businesses & Homes in Kerala
          </h3>
          <p className="text-blue-100 text-lg">
            Join thousands of satisfied customers who trust us with their security needs
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-6">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;