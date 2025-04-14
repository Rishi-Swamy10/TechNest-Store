import React from "react";
import { useSearch } from "../Context/SearchContext";
import { productsData } from "../data/products";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { query } = useSearch();
  const navigate = useNavigate();

  const filtered = productsData.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for: <span className="text-blue-600">{query}</span></h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <p className="text-gray-600">No products found.</p>
        ) : (
          filtered.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow p-4">
              <img src={product.image} alt={product.name} className="h-40 w-full object-contain" />
              <h3 className="text-lg font-bold text-gray-800 mt-2">{product.name}</h3>
              <p className="text-green-600 font-semibold">${product.price}</p>
              <button
                onClick={() => navigate(`/product/${product.id}`)}
                className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                Buy Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchBar;

