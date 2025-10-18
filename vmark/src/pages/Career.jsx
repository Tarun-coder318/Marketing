import React from "react";

const Career = () => {
  return (
    <div className="w-full pt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg md:text-xl">
            We're always looking for creative and passionate marketers to join our family.
          </p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-20 bg-white rounded-lg shadow-lg -mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Apply Now</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <textarea
            placeholder="Why should we hire you?"
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-purple-700 transition"
          >
            Apply Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Career;
