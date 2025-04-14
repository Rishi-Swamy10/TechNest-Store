import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../Context/FavoritesContext"; // Import context

import Iphone14pro1 from "../assets/iphone14pro1.png";
import Pocketcamera from "../assets/pocketcamera.png";
import Applewatch from "../assets/Applewatch.png";
import Airpodsmax from "../assets/Airpodsmax.png";
import Samsungwatch from "../assets/Samsungwatch.png";
import Galaxyzfold from "../assets/GalaxyZfold.png";
import Galaxybuds from "../assets/Galaxybuds.png";
import Appleipad from "../assets/Appleipad.png";

const tabs = ["New Arrival", "Bestseller", "Featured Products"];

const products = {
  "New Arrival": [
    { id: 1, name: "iPhone 14 Pro Max", price: "$900", image: [Iphone14pro1] },
    { id: 2, name: "Blackmagic Cinema Camera 6K", price: "$2535", image: [Pocketcamera] },
    { id: 3, name: "Apple Watch Series 9", price: "$399", image: [Applewatch] },
    { id: 4, name: "AirPods Max Silver", price: "$549", image: [Airpodsmax] },
    { id: 5, name: "Samsung Galaxy Watch6", price: "$369", image: [Samsungwatch] },
    { id: 6, name: "Galaxy Z Fold5", price: "$1799", image: [Galaxyzfold] },
    { id: 7, name: "Galaxy Buds FE", price: "$99.99", image: [Galaxybuds] },
    { id: 8, name: "Apple iPad 9 10.2”, 64GB", price: "$398", image: [Appleipad] },
  ],
  "Bestseller": [
    { id: 9, name: "MacBook Air M2", price: "$1099", image: "/macbookair.png" },
    { id: 10, name: "Sony WH-1000XM5", price: "$348", image: "/sonyheadphones.png" },
    { id: 11, name: "Canon EOS R5", price: "$3899", image: "/canon.png" },
    { id: 12, name: "iPhone 13", price: "$699", image: "/iphone13.png" },
  ],
  "Featured Products": [
    { id: 13, name: "Apple Vision Pro", price: "$3499", image: "/visionpro.png" },
    { id: 14, name: "Samsung Galaxy Tab S9", price: "$899", image: "/tabs9.png" },
    { id: 15, name: "PS5 Digital Edition", price: "$449", image: "/ps5.png" },
    { id: 16, name: "Beats Studio Buds", price: "$149.99", image: "/beatsbuds.png" },
  ],
};

const ProductGrid = () => {
  const [activeTab, setActiveTab] = useState("New Arrival");

  const { favorites, toggleFavorite } = useFavorites(); // ✅ Use context

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Tabs */}
      <div className="flex gap-6 border-b pb-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 font-semibold transition duration-300 ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products[activeTab].map((product) => (
          <div
            key={product.id}
            className="relative border p-4 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            {/* Heart icon */}
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-3 right-3 text-xl text-red-500"
            >
              {favorites.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
            </button>

            {/* Product Image */}
            <img
              src={Array.isArray(product.image) ? product.image[0] : product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />

            {/* Product Info */}
            <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
            <p className="text-lg font-bold text-gray-900">{product.price}</p>

            <button className="mt-4 w-full py-2 bg-black text-white border rounded-md hover:bg-white hover:text-black transition duration-300 font-medium">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
