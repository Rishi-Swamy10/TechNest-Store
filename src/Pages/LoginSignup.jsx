import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Components/LoginSignup.css"; // Import custom CSS file for the animation

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleFormToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="bg-gradient-animated min-h-screen flex justify-center items-center py-16 px-4">
      {/* Floating particles */}
      {[...Array(10)].map((_, index) => (
        <div key={index} className="particle"></div>
      ))}

      <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Welcome</h2>
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          {isLogin ? "Login to Your Account" : "Create an Account"}
        </h2>

        {/* Login Form */}
        {isLogin ? (
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2 rounded" />
                Remember me
              </label>
              <NavLink to="/forgot-password" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </NavLink>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-gray-700 to-black text-white font-semibold rounded-lg hover:from-gray-800 hover:to-gray-900 transition"
              >
                Login
              </button>
            </div>
          </form>
        ) : (
          // Signup Form
          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-gray-700 to-black text-white font-semibold rounded-lg hover:from-gray-800 hover:to-gray-900 transition"
              >
                Sign Up
              </button>
            </div>
          </form>
        )}

        {/* Toggle Between Login and Signup */}
        <div className="mt-6 text-center">
          <span className="text-gray-600 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={handleFormToggle}
              className="text-blue-500 font-medium hover:underline ml-2"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
