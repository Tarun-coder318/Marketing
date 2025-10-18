import React from "react";

const WhyChooseUs = () => {
  const points = [
    "Experienced marketing team",
    "Data-driven strategies",
    "Proven track record of success",
    "Customized solutions for every client",
    "Transparent communication and reporting",
    "Cutting-edge tools and technologies"
  ];

  return (
    <div className="w-full pt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h1>
          <p className="text-lg md:text-xl">
            At DigitalX Marketing, we provide exceptional service and measurable results that help your business grow.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {points.map((point, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
          >
            <h3 className="text-purple-600 text-xl font-semibold mb-4">{point}</h3>
            <p className="text-gray-700 flex-grow">
              We ensure every client gets personalized strategies tailored to their unique business needs.
            </p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with the Best</h2>
          <p className="text-gray-700 mb-6 text-lg">
            Experience professional marketing services that deliver results. Let's grow your business together.
          </p>
          <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export  default WhyChooseUs;
