import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const ContactPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    service: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validatePhone = (phone: string) => {
    // Remove country code and spaces to get just the number
    const phoneNumber = phone.replace(/^\+\d+\s/, "").replace(/\s/g, "");

    if (!phoneNumber) {
      return "Phone number is required";
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      return "Phone number must be exactly 10 digits";
    }

    return "";
  };

  const validateEmail = (email: string) => {
    if (!email) {
      return "Email address is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    return "";
  };

  const validateName = (name: string) => {
    if (!name.trim()) {
      return "Full name is required";
    }

    if (name.trim().length < 2) {
      return "Name must be at least 2 characters long";
    }

    return "";
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) {
      return "Message is required";
    }

    if (message.trim().length < 10) {
      return "Message must be at least 10 characters long";
    }

    return "";
  };

  const isFormValid = () => {
    return (
      validateName(formData.name) === "" &&
      validateEmail(formData.email) === "" &&
      validatePhone(formData.phone) === "" &&
      validateMessage(formData.message) === ""
    );
  };

  const getServiceDisplayName = (serviceValue: string) => {
    const serviceMap: { [key: string]: string } = {
      "cctv": "CCTV Installation",
      "home-automation": "Home Automation",
      "video-door-phone": "Video Door Phone",
      "biometric": "Biometric Systems",
      "solar": "Solar Solutions",
      "audio": "Audio Systems",
      "networking": "Computer Networking",
      "gate-automation": "Gate Automation",
      "cabling": "Cabling Solutions",
      "alarm": "Alarm Systems",
      "other": "Other",
      "": "Not specified"
    };
    
    return serviceMap[serviceValue] || "Not specified";
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate fields when they change
    if (name === "phone") {
      const error = validatePhone(value);
      setPhoneError(error);
    } else if (name === "email") {
      const error = validateEmail(value);
      setEmailError(error);
    } else if (name === "name") {
      const error = validateName(value);
      setNameError(error);
    } else if (name === "message") {
      const error = validateMessage(value);
      setMessageError(error);
    }
  };

  // Scroll to top when component mounts or when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields before submission
    const nameValidationError = validateName(formData.name);
    const emailValidationError = validateEmail(formData.email);
    const phoneValidationError = validatePhone(formData.phone);
    const messageValidationError = validateMessage(formData.message);

    setNameError(nameValidationError);
    setEmailError(emailValidationError);
    setPhoneError(phoneValidationError);
    setMessageError(messageValidationError);

    // If any validation fails, don't submit
    if (
      nameValidationError ||
      emailValidationError ||
      phoneValidationError ||
      messageValidationError
    ) {
      return;
    }

    // Format the form data into a WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Interested:* ${getServiceDisplayName(formData.service)}
*Message:* ${formData.message}

---
*Submitted via website contact form*`;

    // Send to WhatsApp
    const phoneNumber = "917736173663"; // Remove + and spaces for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      phone: "+91 ",
      service: "",
      message: "",
    });
    
    // Clear all errors
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setMessageError("");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919207011244"; // Remove + and spaces for WhatsApp URL
    const message = encodeURIComponent(
      "Hello! I am interested in your security solutions. Please provide me with more information."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+919207011244";
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    const email = "ethic4uz@gmail.com";
    const subject = encodeURIComponent("Inquiry about Security Solutions");
    const body = encodeURIComponent(
      "Hello,\n\nI am interested in your security solutions. Please provide me with more information.\n\nThank you!"
    );
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to secure your property? Get in touch with our security
            experts for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Our team is ready to help you with your security needs. Contact
                us through any of the following methods.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 92070 11244</p>
                  <p className="text-sm text-gray-500">Mon-Sat 9AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">ethic4uz@gmail.com</p>
                  <p className="text-sm text-gray-500">
                    We reply within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-600">
                    8XCR+FRR, Orphanage Rd
                    <br />
                    Mukkam, Kerala 673602
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Business Hours
                  </h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                    <p className="text-blue-600 font-medium">Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <h4 className="font-semibold text-red-800 mb-1">
                Emergency Support
              </h4>
              <p className="text-red-700 text-sm">
                For urgent security issues, call us anytime at +91 92070 11244
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        nameError
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Your full name"
                    />
                    {nameError && (
                      <p className="mt-1 text-sm text-red-600">{nameError}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        emailError
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-red-600">{emailError}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        phoneError
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="XXXXX XXXXX"
                    />
                    {phoneError && (
                      <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>                 
                      <option value="cctv">CCTV Installation</option>
                      <option value="home-automation">Home Automation</option>
                      <option value="video-door-phone">Video Door Phone</option>
                      <option value="biometric">Biometric Systems</option>
                      <option value="solar">Solar Solutions</option>
                      <option value="audio">Audio Systems</option>
                      <option value="networking">Computer Networking</option>
                      <option value="gate-automation">Gate Automation</option>
                      <option value="cabling">Cabling Solutions</option>
                      <option value="alarm">Alarm Systems</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                      messageError
                        ? "border-red-300 focus:ring-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Please describe your security needs, location, and any specific requirements..."
                  ></textarea>
                  {messageError && (
                    <p className="mt-1 text-sm text-red-600">{messageError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isFormValid()
                      ? "bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 cursor-pointer"
                      : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  }`}
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm">
                  By submitting this form, you agree to our privacy policy.
                  We'll contact you within 24 hours to discuss your
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl text-center transition-colors cursor-pointer"
            onClick={handleWhatsAppClick}
          >
            <div className="text-3xl mb-2 flex justify-center"><BsWhatsapp /></div>
            <h3 className="font-semibold mb-1">WhatsApp Chat</h3>
            <p className="text-green-100 text-sm">
              Quick response via WhatsApp
            </p>
          </div>

          <div
            className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl text-center transition-colors cursor-pointer"
            onClick={handlePhoneClick}
          >
            <div className="text-3xl mb-2 flex justify-center"><IoCallOutline /></div>
            <h3 className="font-semibold mb-1">Call Now</h3>
            <p className="text-blue-100 text-sm">Speak with our experts</p>
          </div>

          <div
            className="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-xl text-center transition-colors cursor-pointer"
            onClick={handleEmailClick}
          >
            <div className="text-3xl mb-2 flex justify-center"><MdOutlineEmail /></div>
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-purple-100 text-sm">
              Detailed inquiries welcome
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
