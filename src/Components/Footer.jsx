import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <NavLink to="/">
          <h2 className="text-2xl font-bold mb-4 tracking-wide">TechNest</h2>
          </NavLink>
          <p className="text-sm text-gray-400 leading-relaxed">
            At TechNest, we bring you the best in electronics with unmatched
            quality and service. Discover a world of innovation and style from
            our India-based tech studio.
          </p>
          <div className="flex gap-4 mt-6 text-gray-400 text-xl">
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            Services
          </h3>
          <ul className="text-sm space-y-3 text-gray-400">
            <li>Bonus Program</li>
            <li>Gift Cards</li>
            <li>Credit & Payment Options</li>
            <li>Service Contracts</li>
            <li>Non-Cash Account</li>
            <li>Easy Checkout</li>
          </ul>
        </div>

        {/* Assistance Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">
            Customer Assistance
          </h3>
          <ul className="text-sm space-y-3 text-gray-400">
            <li>Order Tracking</li>
            <li>Shipping Information</li>
            <li>Returns & Exchanges</li>
            <li>Warranty Support</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} TechNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
