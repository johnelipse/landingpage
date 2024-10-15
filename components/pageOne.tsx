"use client";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Send,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import Banner from "@/components/headerOffer";
import Link from "next/link";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-md  z-50 shadow-md fixed w-full ">
        <Banner />
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Desishub</div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Services
            </a>
            <a
              href="#testimonial"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Testimonial
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <a
              href="#services"
              className="block px-6 py-2 text-gray-700 hover:bg-blue-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#testimonial"
              className="block px-6 py-2 text-gray-700 hover:bg-blue-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonial
            </a>
            <a
              href="#contact"
              className="block px-6 py-2 text-gray-700 hover:bg-blue-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="container  mx-auto z-10 px-6 pt-24 pb-16 text-center relative overflow-hidden">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 animate-fade-in-down">
            Transform Your Online Presence with Desishub{" ' "}s Website
            Development Services
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-600 animate-fade-in-up">
            Your Vision, Our Expertise: Websites That Work for You
          </h2>
          <p className="text-xl mb-12 text-gray-600 max-w-3xl mx-auto animate-fade-in">
            In today{" ' "}s digital world, your website is often the first
            impression you make. Don{" ' "}t let technical hurdles or budget
            constraints hold you back from making it a great one.
          </p>
          <Link
            href="#contact"
            className="bg-blue-600 text-white z-10 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center animate-bounce"
          >
            Get Started
            <ArrowRight className="ml-2" />
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Image
            src="/placeholder.svg"
            alt="Background Pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </header>

      {/* Why Choose Desishub Section */}
      <section className="bg-white py-16 relative" id="services">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Why Choose Desishub?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Custom designs tailored to your brand",
              "Responsive websites that look great on all devices",
              "SEO-optimized to help you rank higher on search engines",
              "Reliable web hosting with 99.9% uptime",
              "Ongoing support and maintenance",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg hover:shadow-md transition duration-300 transform hover:-translate-y-1"
              >
                <CheckCircle className="text-green-500 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-10">
          <Image
            src="/placeholder.svg"
            alt="Decorative Pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Our Services Include:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Business Websites",
              "E-commerce Platforms",
              "Landing Pages",
              "Blogs and Content Websites",
              "Portfolio Sites",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  {service}
                </h3>
                <p className="text-gray-600">
                  Custom-built to meet your specific needs and goals.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Testimonial Section */}
      <section
        className="py-16 bg-blue-600 text-white relative"
        id="testimonial"
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">
            Don{" ' "}t Just Take Our Word For It
          </h2>
          <blockquote className="text-2xl italic mb-8 relative">
            <span className="text-6xl absolute top-0 left-0 transform -translate-x-4 -translate-y-4 opacity-25">
              {" ' "}
            </span>
            Desishub transformed our online presence. Our new website has
            increased our leads by 150% in just three months!
            <span className="text-6xl absolute bottom-0 right-0 transform translate-x-4 translate-y-4 opacity-25">
              {" ' "}
            </span>
          </blockquote>
          <p className="text-xl font-semibold">
            - Sarah T., Small Business Owner
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Image
            src="/placeholder.svg"
            alt="Testimonial Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white relative" id="contact">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-center text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to receive a free consultation and website
            audit. We{" ' "}ll analyze your current online presence and provide
            actionable insights to improve your digital strategy.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="company"
                placeholder="Your Company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <input
                type="url"
                name="website"
                placeholder="Current Website URL"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center transform hover:scale-105"
            >
              Get My Free Website Audit
              <Send className="ml-2" />
            </button>
          </form>
        </div>
        <div className="absolute top-0 left-0 w-1/3 h-full opacity-5">
          <Image
            src="/placeholder.svg"
            alt="Contact Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Download Guide Section */}
      <section className="py-16 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Download Our Free Guide
          </h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Get our exclusive e-book: 10 Essential Elements of a High-Converting
            Website - Learn the secrets to creating a website that turns
            visitors into customers.
          </p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 inline-flex items-center transform hover:scale-105">
            Download Free Guide
            <Download className="ml-2" />
          </button>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10">
          <Image
            src="/placeholder.svg"
            alt="Guide Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Let{"'"}s Build Your Dream Website Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don{"'"}t let another day go by with a website that doesn{"'"}t do
            your business justice. Contact Desishub today and let{"'"}s create a
            website that works as hard as you do.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Contact Us Now
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Image
            src="/placeholder.svg"
            alt="CTA Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {currentYear} Desishub. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 z-40 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 animate-bounce"
        >
          <ChevronUp />
        </button>
      )}
    </div>
  );
}
