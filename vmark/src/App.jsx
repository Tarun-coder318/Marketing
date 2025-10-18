import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyChooseUs from "./pages/WhyChooseUs";
import Client from "./pages/Client";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import {BrowserRouter as  Router,Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
     <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-us" element={<WhyChooseUs />} />
            <Route path="/clients" element={<Client />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
