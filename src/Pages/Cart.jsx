import React from "react";
import { useCart } from "../Context/CartContext";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const discount = subtotal > 1000 ? 100 : 0;
  const total = subtotal + tax - discount;

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-gray-100 via-white to-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-gray-900">Your Cart</h2>

      {/* Empty Cart UI */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 space-y-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty cart"
            className="w-32 opacity-70"
          />
          <h3 className="text-2xl font-semibold text-gray-600">
            Your cart is empty
          </h3>
          <Link
            to="/catalog"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white rounded-xl p-4 shadow-md gap-6 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-contain rounded border"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-full text-sm"
                    >
                      −
                    </button>
                    <span className="font-medium text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-full text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    title="Remove"
                    className="mt-2 text-red-500 hover:text-red-700 text-xl transition"
                  >
                    <HiOutlineTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Promo Discount</span>
                <span className="text-green-600">-${discount.toFixed(2)}</span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <input
              type="text"
              placeholder="Promo Code"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            />
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
