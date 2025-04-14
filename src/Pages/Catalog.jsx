import React, { useState, useRef, useEffect } from "react";
import { FaHeart, FaRegHeart, FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useFavorites } from "../Context/FavoritesContext";
import { productsData } from "../data/products";
import { Link } from "react-router-dom";

const brandFilters = [...new Set(productsData.map((p) => p.brand))].sort();
const categoryFilters = [...new Set(productsData.map((p) => p.category))].sort();
const sortOptions = ["Price: Low to High", "Price: High to Low", "Rating"];

const Catalog = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openBrandDropdown, setOpenBrandDropdown] = useState(false);
  const [openCategoryDropdown, setOpenCategoryDropdown] = useState(false);

  const productsPerPage = 6;

  const toggleSelection = (type, value) => {
    const setter = type === "brand" ? setSelectedBrands : setSelectedCategories;
    const current = type === "brand" ? selectedBrands : selectedCategories;
    setter(
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    );
  };

  const filtered = productsData.filter((product) => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return brandMatch && categoryMatch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "Price: Low to High") return a.price - b.price;
    if (sort === "Price: High to Low") return b.price - a.price;
    if (sort === "Rating") return b.rating - a.rating;
    return 0;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const currentProducts = sorted.slice(indexOfLastProduct - productsPerPage, indexOfLastProduct);
  const totalPages = Math.ceil(sorted.length / productsPerPage);

  const brandRef = useRef();
  const categoryRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (brandRef.current && !brandRef.current.contains(e.target)) {
        setOpenBrandDropdown(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setOpenCategoryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="md:w-1/4 space-y-6 bg-white text-black rounded-lg shadow-md p-4">
          {/* Brand Filter */}
          <div ref={brandRef} className="relative">
            <button
              onClick={() => setOpenBrandDropdown((prev) => !prev)}
              className="w-full border-0 border-b-2 border-gray-300 p-2 rounded-none flex justify-between items-center text-lg font-semibold text-gray-800 hover:text-blue-600"
            >
              <span>Brand</span>
              <FaChevronDown />
            </button>
            {openBrandDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white text-black border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
                {brandFilters.map((brand) => (
                  <label key={brand} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleSelection("brand", brand)}
                      className="mr-2"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            )}
            <div className="mt-2 flex flex-wrap gap-1">
              {selectedBrands.map((b) => (
                <span key={b} className="bg-blue-100 px-2 py-1 rounded text-sm">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div ref={categoryRef} className="relative">
            <button
              onClick={() => setOpenCategoryDropdown((prev) => !prev)}
              className="w-full border-0 border-b-2 border-gray-300 p-2 rounded-none flex justify-between items-center text-lg font-semibold text-gray-800 hover:text-blue-600"
            >
              <span>Category</span>
              <FaChevronDown />
            </button>
            {openCategoryDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white text-black border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
                {categoryFilters.map((cat) => (
                  <label key={cat} className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleSelection("category", cat)}
                      className="mr-2"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            )}
            <div className="mt-2 flex flex-wrap gap-1">
              {selectedCategories.map((c) => (
                <span key={c} className="bg-blue-100 px-2 py-1 rounded text-sm">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            className="text-sm text-black underline hover:text-gray-700"
            onClick={() => {
              setSelectedBrands([]);
              setSelectedCategories([]);
            }}
          >
            Clear Filters
          </button>
        </aside>

        {/* Product Grid */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">
              Products: {filtered.length}
            </h2>
            <select
              className="border p-2 rounded bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort</option>
              {sortOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white text-gray-800 border rounded-lg p-4 relative shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <button
                  className="absolute top-3 right-3 text-xl text-red-500 hover:text-red-700 z-10"
                  onClick={() => toggleFavorite(product.id)}
                >
                  {favorites.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 mx-auto object-contain mb-4"
                />
                <h3 className="mt-4 font-medium text-center">{product.name}</h3>
                <p className="text-center font-bold text-lg mt-2">${product.price}</p>
                <Link to={`/product/${product.id}`} className="block">
                  <button className="w-full mt-4 bg-black text-white py-2 rounded border hover:opacity-80 hover:bg-white hover:text-black transition-all">
                    Buy Now
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => setCurrentPage(currentPage - 2)}
              className={`px-4 py-2 text-lg font-semibold rounded-full transition-all ${
                currentPage > 2
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-500 cursor-not-allowed"
              }`}
              disabled={currentPage <= 2}
            >
              <FaChevronLeft />
            </button>
            {Array.from({ length: 2 }).map((_, idx) => {
              const pageNum = currentPage + idx;
              return (
                pageNum <= totalPages && (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-6 py-2 text-lg font-semibold rounded-full transition-all ${
                      currentPage === pageNum
                        ? "bg-white text-black"
                        : "bg-gray-800 text-white border border-gray-600"
                    } hover:bg-gray-700 hover:text-white`}
                  >
                    {pageNum}
                  </button>
                )
              );
            })}
            <button
              onClick={() => setCurrentPage(currentPage + 2)}
              className={`px-4 py-2 text-lg font-semibold rounded-full transition-all ${
                currentPage + 2 <= totalPages
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-500 cursor-not-allowed"
              }`}
              disabled={currentPage + 2 > totalPages}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
