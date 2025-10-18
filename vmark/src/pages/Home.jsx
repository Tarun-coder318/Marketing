import React from "react";

const Home = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your website's visibility on search engines and attract more organic traffic.",
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and grow your brand presence across all social platforms.",
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that converts visitors into loyal customers.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2 animate-fadeInLeft">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Grow Your Business with Digital Vmark Marketing
            </h1>
            <p className="mb-6 text-lg drop-shadow">
              We help brands scale online with SEO, social media marketing, content strategies, and more.
            </p>
            <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 hover:scale-105 transition transform shadow-lg">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center animate-fadeInRight">
            <img
              src="https://img.freepik.com/free-vector/digital-marketing-concept-illustration_114360-920.jpg"
              alt="Digital Marketing Illustration"
              className="w-full max-w-md rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        {/* Animated background circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="mb-6 text-lg drop-shadow">
            Contact us today and get a free consultation from our expert team.
          </p>
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 hover:scale-105 transition transform shadow-lg">
            Contact Us
          </button>
        </div>
        {/* Decorative pulse circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full opacity-10 animate-ping"></div>
      </section>
    </div>
  );
};

export default Home;
