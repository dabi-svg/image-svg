import React from "react";
import landing from "../assets/Group 381.svg";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Company Logo" className="h-10 w-10" />
          <span className="font-bold text-xl text-gray-800">VK Company</span>
        </div>
        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">VK Company</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We help businesses grow with modern web solutions.  
            From custom applications to e-commerce platforms, we build what you need.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="#services"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* SVG */}
        <div className="w-full">
          <object
            type="image/svg+xml"
            data={landing}
            className="w-full h-auto"
            aria-label="Landing SVG"
          >
            Your browser does not support SVG
          </object>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: "Fast Development", desc: "Build modern apps quickly with our agile team." },
    { title: "Secure Systems", desc: "We implement enterprise-grade security." },
    { title: "Scalable Solutions", desc: "Our systems grow with your business." },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Features</h2>
        <p className="mt-4 text-gray-600">Why choose us?</p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
              <p className="mt-4 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://via.placeholder.com/500"
          alt="About us"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          <p className="mt-4 text-gray-600">
            VK Company is a leading software solutions provider helping startups and enterprises
            create innovative digital products. Our team has expertise in MERN stack, cloud
            solutions, and AI integrations.
          </p>
          <p className="mt-4 text-gray-600">
            We believe in quality, security, and long-term client relationships. Let’s build
            something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { name: "Custom Apps", desc: "We build tailored applications for your business." },
    { name: "E-commerce", desc: "Scalable and secure online stores." },
    { name: "AI & ML", desc: "Leverage artificial intelligence in your products." },
    { name: "Cloud Solutions", desc: "Deploy apps on scalable cloud infrastructure." },
  ];
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-gray-600">We provide end-to-end solutions.</p>
        <div className="mt-12 grid md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{s.name}</h3>
              <p className="mt-4 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "Alice", text: "VK Company transformed our business with a scalable app." },
    { name: "John", text: "Professional, fast, and reliable service. Highly recommend!" },
    { name: "Maria", text: "Our e-commerce platform runs smoothly thanks to VK Company." },
  ];
  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow">
              <p className="text-gray-600">"{t.text}"</p>
              <h4 className="mt-4 font-semibold text-gray-900">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="bg-blue-600 py-16 text-center text-white">
      <h2 className="text-3xl font-bold">Ready to start your project?</h2>
      <p className="mt-4">Let’s build something amazing together.</p>
      <a
        href="#contact"
        className="mt-6 inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
      >
        Contact Us
      </a>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-bold">VK Company</h3>
          <p className="mt-4">
            Building modern web solutions for startups and enterprises worldwide.
          </p>
        </div>
        {/* Links */}
        <div>
          <h3 className="text-white text-lg font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-bold">Contact</h3>
          <p className="mt-4">Email: contact@vkcompany.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-500">
        © {new Date().getFullYear()} VK Company. All rights reserved.
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <CTA />
       <object
        type="image/svg+xml"
        data={landing}
        className="w-full h-auto"
        aria-label="Timeline SVG"
      >
        Your browser does not support SVG
      </object>
      <Footer />
      
    </div>
  );
};

export default Home;
