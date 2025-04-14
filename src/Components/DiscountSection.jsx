import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../Context/FavoritesContext"; // Import context
import { Link } from "react-router-dom"; // Import Link for navigation

import Iphone14gold from "../assets/Iphone14progold.png";
import Airpodsmax from "../assets/Airpodsmax.png";
import Applewatch from "../assets/Applewatch.png";
import Iphone1tbgold from "../assets/Iphone14pro1tbgold.png";

const discountProducts = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: "$1437",
    image: [Iphone14gold],
  },
  {
    id: 2,
    name: "AirPods Max Silver Starlight Aluminium",
    price: "$549",
    image: [Airpodsmax],
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm Starlight",
    price: "$399",
    image: [Applewatch],
  },
  {
    id: 4,
    name: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
    price: "$1499",
    image: [Iphone1tbgold],
  },
];

const DiscountSection = () => {
  const { favorites, toggleFavorite } = useFavorites(); // ✅ Use global context

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Discounts up to -50%</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {discountProducts.map((product) => (
          <div
            key={product.id}
            className="relative border p-4 rounded-2xl shadow-sm hover:shadow-md transition duration-300 bg-white"
          >
            {/* Like icon */}
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-3 right-3 text-xl text-red-500"
            >
              {favorites.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
            </button>

            <img
              src={Array.isArray(product.image) ? product.image[0] : product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />

            <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
            <p className="text-lg font-bold text-gray-900">{product.price}</p>

            <Link to="/catalog">
            <button className="mt-4 w-full py-2 bg-black text-white border rounded-md hover:bg-white hover:text-black transition duration-300 font-medium">
              Buy Now
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountSection;
