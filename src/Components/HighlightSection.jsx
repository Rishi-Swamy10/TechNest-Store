import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Huaweibuds from "../assets/huaweibuds.png";
import Smartwatch from "../assets/smartwatch1.png";
import Ipadpro from "../assets/Ipads.png";
import Samsunggalaxy from "../assets/Samsunggalaxy.png";
import Macbookpro from "../assets/Macbookair.png";
import { Link } from "react-router-dom";

const highlights = [
  {
    id: 1,
    title: "Popular Products",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: Huaweibuds,
    bg: 'bg-white text-black',
  },
  {
    id: 2,
    title: "Ipad Pro",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: Ipadpro,
    bg: 'bg-[#f9f9f9] text-black',
  },
  {
    id: 3,
    title: "Samsung Galaxy",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: Samsunggalaxy,
    bg: 'bg-[#eaeaea] text-black',
  },
  {
    id: 4,
    title: "Macbook Pro",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    image: Macbookpro,
    bg: 'bg-[#2c2c2c] text-white',
  },
];

const HighlightSection = () => {
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
    <div className="relative">
      {/* Arrows only visible on small screens */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 sm:hidden bg-white p-2 shadow-md"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 sm:hidden bg-white p-2 shadow-md"
      >
        <FaArrowRight />
      </button>

      <div
        ref={scrollRef}
        className="overflow-x-auto sm:overflow-x-visible scroll-smooth"
      >
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 min-w-[640px] sm:min-w-0 px-4 sm:px-0">
          {highlights.map((product) => (
            <div
              key={product.id}
              className={`min-w-[250px] sm:min-w-0 flex-shrink-0 sm:flex-shrink p-6 flex flex-col items-center text-center ${product.bg}`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-6"
              />
              <h3 className="text-3xl font-bold mb-2">{product.title}</h3>
              <p className="mb-6 max-w-xs opacity-80">{product.desc}</p>
              <Link to="/catalog">
              <button className="px-5 py-2 border rounded-md text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Shop Now
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;

