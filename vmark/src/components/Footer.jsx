import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Brand Name */}
        <div className="mb-4 md:mb-0 text-white font-bold text-lg">
         Digital Vmark Marketing
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-300">
          <a href="/" className="hover:text-purple-500 transition">Home</a>
          <a href="/about" className="hover:text-purple-500 transition">About</a>
          <a href="/services" className="hover:text-purple-500 transition">Services</a>
          <a href="/why-us" className="hover:text-purple-500 transition">Why Us</a>
          <a href="/clients" className="hover:text-purple-500 transition">Clients</a>
          <a href="/career" className="hover:text-purple-500 transition">Career</a>
          <a href="/contact" className="hover:text-purple-500 transition">Contact</a>
        </div>

        {/* Copyright */}
        <div className=" md:mt-0 text-gray-400 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Digital Vmark Marketing| All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export  default Footer;
