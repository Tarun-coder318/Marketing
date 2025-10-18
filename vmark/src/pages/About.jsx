import React from "react";

const About = () => {
  return (
    <div className="w-full pt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Digital Vmark Marketing</h1>
          <p className="text-lg md:text-xl">
            We help brands grow online through SEO, social media, content strategies, and more.  
            Our team of experts is dedicated to delivering measurable results for every client.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/teamwork-concept-illustration_114360-1923.jpg"
            alt="Teamwork"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          <p className="mb-4 text-gray-700">
            <strong>Mission:</strong> To help businesses achieve online growth through innovative marketing strategies and measurable results.
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Vision:</strong> To be the leading digital marketing partner trusted by brands worldwide for their online success.
          </p>
          <p className="text-gray-700">
            With years of experience and a passionate team, we focus on delivering customized strategies for each client, ensuring maximum ROI and long-term growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default  About ;
