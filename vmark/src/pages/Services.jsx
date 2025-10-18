import React from "react";

const Services = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Improve your website ranking on search engines to drive more organic traffic and increase visibility."
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and grow your brand across social platforms like Facebook, Instagram, LinkedIn, and Twitter."
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that attracts, educates, and converts your target audience."
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      description: "Run targeted ad campaigns to drive immediate traffic and achieve measurable ROI."
    },
    {
      title: "Web Design & Development",
      description: "Build professional, responsive, and user-friendly websites that convert visitors into customers."
    }
  ];

  return (
    <div className="w-full pt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl">
            At Digital Vmark Marketing, we offer a comprehensive suite of digital marketing services designed to grow your business online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{service.title}</h3>
              <p className="text-gray-700 flex-grow">{service.description}</p>
              <button className="mt-6 bg-purple-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-purple-700 transition w-full">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to boost your business?
          </h2>
          <p className="mb-6 text-gray-700 text-lg">
            Contact us today to discuss how our services can help your brand grow online.
          </p>
          <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
