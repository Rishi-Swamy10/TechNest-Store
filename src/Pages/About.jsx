import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-black font-sans">
      {/* About Header Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">About TechNest</h1>
        <p className="text-lg font-medium mb-8 max-w-3xl mx-auto">
          Your trusted partner in electronics innovation. Discover what makes
          TechNest your go-to source for cutting-edge tech products.
        </p>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed">
            At TechNest, we believe in the power of technology to change lives.
            Our mission is to bring you the best and latest in electronics with
            unmatched quality and service. We are a team of passionate
            professionals from India, offering products that define innovation,
            style, and value. From the latest gadgets to everyday essentials, we
            make sure you're always equipped with the best.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 text-center bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <h2 className="text-4xl font-semibold mb-6">Our Vision</h2>
        <p className="text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
          Our vision is simple: to bring innovation, style, and technology to
          your doorstep. We strive to stay at the forefront of the electronics
          industry, offering products that enhance your life while keeping
          affordability in mind.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 py-20 px-6 text-center">
        <h2 className="text-4xl font-semibold text-white mb-6">Our Core Values</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="transition duration-300 transform hover:scale-105 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We are constantly pushing the boundaries of technology to bring
              you the most innovative products that fit your lifestyle.
            </p>
          </div>
          <div className="transition duration-300 transform hover:scale-105 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality</h3>
            <p className="text-gray-600">
              Quality is at the heart of everything we do. From design to
              production, we ensure every product is built to last.
            </p>
          </div>
          <div className="transition duration-300 transform hover:scale-105 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Customer Focus</h3>
            <p className="text-gray-600">
              Our customers are our top priority. We listen to your feedback and
              continually strive to improve our offerings and services.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-teal-500 to-blue-400 text-white">
        <h2 className="text-4xl font-semibold mb-8">Meet Our Leadership Team</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="transition duration-300 transform hover:scale-105 p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">P Rishi Swamy</h3>
            <p className="text-gray-600 mb-2">CEO & Founder</p>
            <p className="text-gray-500">
              A visionary leader with a passion for technology and customer
              experience. Rishi has been the driving force behind TechNest's
              growth.
            </p>
          </div>
          <div className="transition duration-300 transform hover:scale-105 p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Krish Patel</h3>
            <p className="text-gray-600 mb-2">Head of Product</p>
            <p className="text-gray-500">
              Krish is responsible for curating the best products and ensuring
              their quality. She is passionate about bringing the latest and
              greatest tech to TechNest.
            </p>
          </div>
          <div className="transition duration-300 transform hover:scale-105 p-6 bg-white rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">P Lokesh Swamy</h3>
            <p className="text-gray-600 mb-2">Chief Marketing Officer</p>
            <p className="text-gray-500">
              Lokesh leads the creative and marketing efforts at TechNest,
              bringing innovative strategies to connect with our customers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
