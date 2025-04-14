// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { productsData } from "../data/products";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = productsData.find((p) => p.id === parseInt(id));
//   const [mainImage, setMainImage] = useState(product?.images?.[0] || "");

//   if (!product) return <div className="p-6">Product not found.</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
//       {/* Top Section */}
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Images */}
//         <div className="flex flex-col items-center lg:w-1/2">
//           <img
//             src={mainImage}
//             alt={product.name}
//             className="h-80 object-contain rounded mb-4"
//           />
//           <div className="flex gap-2">
//             {product.images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`thumbnail ${index}`}
//                 className={`h-20 w-20 object-cover border rounded cursor-pointer ${
//                   mainImage === img ? "border-blue-500" : "border-gray-300"
//                 }`}
//                 onClick={() => setMainImage(img)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Info */}
//         <div className="lg:w-1/2 space-y-4">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-xl text-gray-700 font-semibold">₹{product.price.toLocaleString()}</p>
//           <p className="text-gray-600">{product.description}</p>

//           {/* Specifications */}
//           <div>
//             <h2 className="text-lg font-semibold mt-4 mb-2">Specifications:</h2>
//             <ul className="list-disc pl-5 space-y-1 text-gray-700">
//               {product.specifications &&
//                 Object.entries(product.specifications).map(([key, value]) => (
//                   <li key={key}>
//                     <strong>{key}:</strong> {value}
//                   </li>
//                 ))}
//             </ul>
//           </div>

//           <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Reviews */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
//         {product.reviews && product.reviews.length > 0 ? (
//           product.reviews.map((review, index) => (
//             <div key={index} className="border-b py-4">
//               <p className="font-semibold">{review.user}</p>
//               <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
//               <p className="text-gray-600 italic">"{review.comment}"</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No reviews yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/products";
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../Context/FavoritesContext";
import { useCart } from "../Context/CartContext"; // ✅ Step 1: Import useCart
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id.toString() === id);
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart(); // ✅ Step 2: Get addToCart
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState(product.reviews || []);
  const [newReview, setNewReview] = useState({
    user: "",
    rating: 5,
    comment: "",
  });

  if (!product) return <div className="text-white p-6">Product not found.</div>;

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < product.rating ? (
      <FaStar key={i} className="text-yellow-400" />
    ) : (
      <FaRegStar key={i} className="text-gray-600" />
    )
  );

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.user && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ user: "", rating: 5, comment: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 text-black px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Image */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-xl p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[26rem] object-contain rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold text-gray-900 drop-shadow-lg">
              {product.name}
            </h1>
            <button
              onClick={() => toggleFavorite(product.id)}
              className="text-red-500 text-2xl"
            >
              {favorites.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
          <div className="flex gap-1">{stars}</div>
          <p className="text-gray-700 text-lg leading-relaxed">
            {product.description || "No description available."}
          </p>
          <p className="text-3xl font-bold text-green-600">${product.price}</p>

          {/* Quantity Counter */}
          <div className="flex items-center gap-4">
            <label className="font-semibold text-lg">Quantity</label>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-gray-800 transition"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-gray-800 transition"
            >
              +
            </button>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Warranty</h3>
            <p className="text-sm text-gray-600">
              {product.warranty || "1-year standard manufacturer warranty"}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
              onClick={() => {
                addToCart(product, quantity);
                toast.success(`${product.name} added to cart!`);
              }}
            >
              Add to Cart
            </button>
            <button
              className="bg-white border border-black text-black px-6 py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition"
              onClick={() => {
                addToCart(product, quantity); // optional if you want to ensure it's in cart
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Specifications</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {product.specs &&
            Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>
                <span className="font-semibold text-gray-900 capitalize">
                  {key}:
                </span>{" "}
                {value}
              </li>
            ))}
        </ul>
      </div>

      {/* Reviews */}
      <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="mb-6 border-b border-gray-200 pb-4">
              <p className="text-lg font-semibold text-gray-900">
                {review.user}
              </p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) =>
                  i < review.rating ? (
                    <FaStar key={i} className="text-yellow-500" />
                  ) : (
                    <FaRegStar key={i} className="text-gray-400" />
                  )
                )}
              </div>
              <p className="text-gray-700 mt-1">{review.comment}</p>
            </div>
          ))
        )}

        {/* Write a Review */}
        <form onSubmit={handleReviewSubmit} className="mt-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Write a Review
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.user}
            onChange={(e) =>
              setNewReview({ ...newReview, user: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-gray-100 text-black"
            required
          />
          <textarea
            placeholder="Your Review"
            value={newReview.comment}
            onChange={(e) =>
              setNewReview({ ...newReview, comment: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-gray-100 text-black"
            required
          />
          <div>
            <label className="block font-semibold mb-1 text-gray-900">
              Rating:
            </label>
            <select
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({ ...newReview, rating: parseInt(e.target.value) })
              }
              className="p-2 rounded bg-gray-100 text-black"
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} Star{r > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
