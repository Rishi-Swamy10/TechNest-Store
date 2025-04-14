import React, { useRef } from "react";
import {
  Smartphone,
  Clock3,
  Camera,
  Headphones,
  Laptop,
  Gamepad2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const categories = [
  { name: "Smart Phones", icon: <Smartphone size={32} /> },
  { name: "Smart Watches", icon: <Clock3 size={32} /> },
  { name: "Cameras", icon: <Camera size={32} /> },
  { name: "Headphones", icon: <Headphones size={32} /> },
  { name: "Computers", icon: <Laptop size={32} /> },
  { name: "Gaming", icon: <Gamepad2 size={32} /> },
];

const Categories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Browse By Category
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white border shadow hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white border shadow hover:bg-gray-100 transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition duration-300 min-w-[180px] cursor-pointer"
          >
            <span className="text-indigo-600">{category.icon}</span>
            <p className="mt-3 text-base font-medium text-gray-700 text-center">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
