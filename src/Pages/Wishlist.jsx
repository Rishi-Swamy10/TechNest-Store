import React from "react";
import { useFavorites } from "../Context/FavoritesContext";
import { FaHeart } from "react-icons/fa";
import { productsData } from "../data/products";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const favoriteProducts = productsData.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          ❤️ Your Wishlist
        </h2>

        {favoriteProducts.length === 0 ? (
          <div className="bg-white p-6 rounded-xl shadow-md text-center text-gray-500 text-lg">
            Your wishlist is empty. Start adding products!
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {favoriteProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 flex items-center shadow-md hover:shadow-lg transition-all"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-contain rounded-xl border bg-gray-50"
                />

                {/* Info */}
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 font-bold">${product.price}</p>
                  <div className="mt-2 flex gap-2">
                    <Link to={`/product/${product.id}`}>
                      <button className="text-sm px-4 py-1 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg hover:bg-gradient-to-l hover:from-gray-800 hover:to-black transition">
                        View Details
                      </button>
                    </Link>
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      title="Remove from wishlist"
                      className="text-red-500 hover:text-red-600 transition text-xl"
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

