import React from "react";
import amazonLogo from "../assets/amazon-logo-png_seeklogo-286206.png";
import zomatoLogo from "../assets/zomato-logo-png_seeklogo-354338.png"
import swiggyLogo from "../assets/swiggy-logo-png_seeklogo-348257.png"


const Client = () => {
  const clients = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: amazonLogo },
   { name: "Zomato", logo: zomatoLogo},
   { name: "Swiggy", logo: swiggyLogo }
];

  return (
    <div className="w-full pt-24 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h1>
          <p className="text-lg md:text-xl">
            We are proud to have worked with some of the world's leading brands.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {clients.map((client, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex items-center justify-center w-full"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-24 md:h-28 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Client;
