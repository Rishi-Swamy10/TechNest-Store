import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  HiOutlineSearch,
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi";
import { useSearch } from "../Context/SearchContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { setQuery } = useSearch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    navigate("/search");
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <h1
            className="text-3xl font-extrabold tracking-wide text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            TechNest
          </h1>
        </NavLink>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
          <HiOutlineSearch className="text-gray-400 text-3xl" />
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            className="ml-2 bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium text-sm">
          <li><NavLink to="/" className="hover:text-black">Home</NavLink></li>
          <li><NavLink to="/catalog" className="hover:text-black">Catalog</NavLink></li>
          <li><NavLink to="/about" className="hover:text-black">About</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-black">Contact</NavLink></li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-2xl text-gray-800">
          {/* Mobile Search Trigger */}
          <div className="md:hidden">
            <HiOutlineSearch
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="text-gray-500 text-2xl cursor-pointer hover:text-black transition"
            />
          </div>

          {/* Action Icons */}
          <div className="flex gap-4 text-xl">
            <NavLink to="/wishlist" className="hover:text-red-600"><HiOutlineHeart /></NavLink>
            <NavLink to="/cart" className="hover:text-blue-600"><HiOutlineShoppingCart /></NavLink>
            <NavLink to="/login" className="hover:text-green-600"><HiOutlineUser /></NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-3xl text-gray-700">
              {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {mobileSearchOpen && (
        <div className="md:hidden mt-3 flex items-center bg-gray-100 rounded-full px-4 py-2 mx-4">
          <HiOutlineSearch className="text-gray-400 text-3xl" />
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearch}
            className="ml-2 bg-transparent outline-none w-full text-sm text-gray-700"
          />
        </div>
      )}

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-black shadow-md rounded-md px-6 py-4 mx-4 space-y-4 text-white text-sm font-medium">
          <ul className="space-y-3">
            <li><NavLink to="/" className="hover:text-white block">Home</NavLink></li>
            <li><NavLink to="/catalog" className="hover:text-white block">Catalog</NavLink></li>
            <li><NavLink to="/about" className="hover:text-white block">About</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white block">Contact</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

