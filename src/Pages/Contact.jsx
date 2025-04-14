import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement form submission logic, like an API call
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Clear form after submission
  };

  return (
    <div className="bg-gray-50">
      {/* Contact Header Section */}
      <section className="bg-black text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide">Contact Us</h1>
        <p className="text-lg font-medium mb-8 max-w-3xl mx-auto">
          We're here to assist you! Reach out to us and we’ll get back to you
          as soon as possible.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Have any questions? Feel free to contact us directly, and we'll do our
          best to respond quickly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Address</h3>
            <p className="text-gray-600">
              TechNest Electronics, 123 Innovation Street, Tech City, India.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Info</h3>
            <p className="text-gray-600">Phone: +91 987 654 3210</p>
            <p className="text-gray-600">Email: contact@technest.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you! Please fill out the form below, and
            we'll get back to you as soon as possible.
          </p>
          {isSubmitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg">
              <p>Your message has been sent successfully!</p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-700 font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email address"
              />
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-700 font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here"
                rows="6"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-gray-700 to-black text-white px-8 py-3 rounded-lg hover:from-gray-800 hover:to-gray-900 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

