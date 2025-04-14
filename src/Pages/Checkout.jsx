import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { FaCreditCard, FaUniversity } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";

const Checkout = () => {
  const { cartItems } = useCart();
  const [step, setStep] = useState(0);

  const [addresses, setAddresses] = useState([]);
  const [editAddressId, setEditAddressId] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    name: "",
    line1: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const fullAddress = { ...newAddress, id: Date.now() };
    setAddresses([...addresses, fullAddress]);
    setEditAddressId(null);
    setSelectedAddress(fullAddress.id);
    setNewAddress({ name: "", line1: "", city: "", postalCode: "", phone: "" });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const discount = subtotal > 1000 ? 100 : 0;
  const total = subtotal + tax - discount;

  const steps = ["Address", "Shipping", "Payment"];

  const StepIndicator = () => (
    <div className="relative flex justify-between items-center mb-12">
      {steps.map((label, index) => (
        <React.Fragment key={label}>
          <div className="flex flex-col items-center z-10 w-1/3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              index === step ? "bg-black text-white" : "bg-gray-300 text-gray-700"
            }`}>
              {index + 1}
            </div>
            <p className={`mt-2 text-sm capitalize ${index === step ? "font-semibold text-black" : "text-gray-600"}`}>
              {label}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="absolute top-5 left-[calc(16.66%+1.25rem)] w-2/3 h-1 bg-gray-300 z-0">
              <div className={`h-1 transition-all duration-300 ${step > index ? "bg-black" : "bg-gray-300"}`}></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-6">
            {addresses.length > 0 && (
              <div>
                <label className="block font-medium mb-2">Choose a saved address:</label>
                <select
                  className="w-full p-3 border rounded"
                  value={selectedAddress || ""}
                  onChange={(e) => setSelectedAddress(Number(e.target.value))}
                >
                  <option value="" disabled>Select an address</option>
                  {addresses.map((addr) => (
                    <option key={addr.id} value={addr.id}>
                      {addr.name} - {addr.line1}, {addr.city}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <form onSubmit={handleAddressSubmit} className="space-y-4">
              <h3 className="text-lg font-semibold">Add New Address</h3>
              <input type="text" placeholder="Full Name" value={newAddress.name}
                onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                className="w-full p-3 border rounded" required />
              <input type="text" placeholder="Address Line 1" value={newAddress.line1}
                onChange={(e) => setNewAddress({ ...newAddress, line1: e.target.value })}
                className="w-full p-3 border rounded" required />
              <input type="text" placeholder="City" value={newAddress.city}
                onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                className="w-full p-3 border rounded" required />
              <input type="text" placeholder="Postal Code" value={newAddress.postalCode}
                onChange={(e) => setNewAddress({ ...newAddress, postalCode: e.target.value })}
                className="w-full p-3 border rounded" required />
              <input type="text" placeholder="Phone Number" value={newAddress.phone}
                onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                className="w-full p-3 border rounded" required />
              <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                Save Address
              </button>
            </form>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <label className="block">
              <input type="radio" name="shipping" className="mr-2" defaultChecked />
              Standard Shipping (4-6 days) - Free
            </label>
            <label className="block">
              <input type="radio" name="shipping" className="mr-2" />
              Express Shipping (1-2 days) - $25
            </label>
          </div>
        );
      case 2:
        const selected = addresses.find(a => a.id === selectedAddress);
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {selected && (
              <div className="col-span-1 bg-white rounded-xl p-6 shadow space-y-2">
                <h4 className="text-lg font-semibold">Shipping Address</h4>
                <p>{selected.name}</p>
                <p>{selected.line1}, {selected.city} - {selected.postalCode}</p>
                <p>Phone: {selected.phone}</p>
              </div>
            )}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-2">Select Payment Method:</h3>

              <label className="flex items-center gap-2">
                <input type="radio" name="payment" className="mr-2" defaultChecked />
                <FaCreditCard className="text-blue-500" /> Card (via Stripe)
              </label>
              <div className="space-y-2 ml-6">
                <input type="text" placeholder="Card Number" className="w-full p-2 border rounded" />
                <div className="flex gap-2">
                  <input type="text" placeholder="MM/YY" className="w-1/2 p-2 border rounded" />
                  <input type="text" placeholder="CVV" className="w-1/2 p-2 border rounded" />
                </div>
              </div>

              <label className="flex items-center gap-2 mt-4">
                <input type="radio" name="payment" className="mr-2" />
                <FaUniversity className="text-green-600" /> Net Banking / UPI
              </label>

              <label className="flex items-center gap-2 mt-2">
                <input type="radio" name="payment" className="mr-2" />
                <SiRazorpay className="text-indigo-600" /> Razorpay
              </label>
            </div>

            <div className="bg-white rounded-xl p-6 shadow space-y-4">
              <h4 className="text-lg font-semibold mb-4">Order Summary</h4>
              <ul className="space-y-2">
                {cartItems.map(item => (
                  <li key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <hr />
              <div className="flex justify-between text-gray-700 text-sm">
                <span>Subtotal:</span><span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 text-sm">
                <span>Estimated Tax:</span><span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600 text-sm">
                <span>Promo Discount:</span><span>-${discount.toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span><span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Checkout</h1>
        <StepIndicator />
        {renderStepContent()}
        <div className="mt-10 flex justify-between">
          {step > 0 && (
            <button onClick={() => setStep(step - 1)}
              className="px-6 py-3 border border-black text-black rounded hover:bg-black hover:text-white transition">
              Back
            </button>
          )}
          {step < steps.length - 1 ? (
            <button onClick={() => setStep(step + 1)}
              className="ml-auto px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
              Next
            </button>
          ) : (
            <button onClick={() => alert("Payment initiated")}
              className="ml-auto px-6 py-3 bg-black text-white rounded hover:bg-green-700 transition">
              Pay Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
