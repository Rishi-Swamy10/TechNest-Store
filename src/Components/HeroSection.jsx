import Iphone from "../assets/IphoneImage.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-[rgb(33,28,36)] border border-gray-400">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center">
        {/* Left side text */}
        <div className="w-full sm:w-1/2 text-center sm:text-left mt-8 sm:mt-0">
          <div className="text-black">
            <div className="flex justify-center sm:justify-start items-center gap-2">
              <p className="font-bold text-gray-400 text-xl sm:text-lg md:text-2xl">
                Pro. Beyond.
              </p>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white leading-snug sm:py-2">
              iPhone 14 <b>Pro</b>
            </h1>
            <p className="font-semibold text-gray-300 text-sm sm:text-base md:text-xl mt-2">
              Created to change everything for the better. For everyone.
            </p>
            <Link to="/catalog">
            <button className="mt-6 px-6 py-2 font-bold border border-white text-white rounded-md hover:bg-white hover:text-black transition duration-300">
              Shop Now
            </button>
            </Link>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full sm:w-1/2 flex justify-center items-end">
          <img
            src={Iphone}
            alt="iPhone 14 Pro"
            className="w-4/5 sm:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

