import { Link } from 'react-router-dom';
import { ArrowRight, Play, } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroBg1 from '../images/result_0.jpeg';
import heroBg2 from '../images/bio.jpg';
import heroBg3 from '../images/automation.jpg';
import heroBg4 from '../images/wireless-cctv-camera-systems.jpg';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      background: heroBg1,
      title: "Complete Security &",
      subtitle: "Automation Solutions",
      description: "Trusted protection and smart automation for homes & businesses across Kerala",
      primaryButton: { text: "Get Quote", link: "/contact" },
      secondaryButton: { text: "Our Solutions", link: "/solutions" }
    },
    {
      id: 2,
      background: heroBg2,
      title: "Biometric",
      subtitle: "Attendance Systems",
      description: "Advanced biometric solutions for accurate and secure attendance tracking and access control",
      primaryButton: { text: "Get Quote", link: "/contact" },
      secondaryButton: { text: "Our Solutions", link: "/solutions" }
    },
    {
      id: 3,
      background: heroBg3,
      title: "Smart Home &",
      subtitle: "Business Automation",
      description: "Transform your space with intelligent automation and cutting-edge security technology",
      primaryButton: { text: "Get Quote", link: "/contact" },
      secondaryButton: { text: "Our Solutions", link: "/solutions" }
    },
    {
      id: 4,
      background: heroBg4,
      title: "Professional CCTV &",
      subtitle: "Installation Services",
      description: "Expert installation and maintenance of high-quality surveillance systems for maximum security coverage",
      primaryButton: { text: "Get Quote", link: "/contact" },
      secondaryButton: { text: "Our Solutions", link: "/solutions" }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative flex items-center justify-center overflow-hidden" style={{ height: '91vh' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentSlideData.background})`
        }}
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20  text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <MdOutlineArrowBackIosNew size={40} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <MdOutlineArrowForwardIos size={40} />
      </button>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {currentSlideData.title}<br />
            <span className="text-blue-400">{currentSlideData.subtitle}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            {currentSlideData.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to={currentSlideData.primaryButton.link}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 min-w-[200px] h-[56px]"
            >
              <span>{currentSlideData.primaryButton.text}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
            <Link
              to={currentSlideData.secondaryButton.link}
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 min-w-[200px] h-[56px]"
            >
              <Play size={20} />
              <span>{currentSlideData.secondaryButton.text}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-500 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;