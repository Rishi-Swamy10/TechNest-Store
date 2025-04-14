import { Link } from "react-router-dom";
import S23 from "../assets/S23galaxy.jpeg";
import PS5 from "../assets/PS5.png";
import Smart1 from "../assets/smartwatch1.png";
import Galaxy from "../assets/Samsunggalaxy.png";


const SummerSaleBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-800 to-black text-white py-20 px-6 overflow-hidden">
      {/* Background product images */}
      <img
        src={Galaxy}
        alt="Phone"
        className="absolute top-0 left-0 w-48 transform -translate-y-1/2 -translate-x-1/2"
      />
      <img
        src={PS5}
        alt="Phone"
        className="absolute bottom-10 left-20 w-48"
      />
      <img
        src={Smart1}
        alt="Watch"
        className="absolute bottom-0 right-32 w-40"
      />
      <img
        src={S23}
        alt="iPhone"
        className="absolute top-0 right-0 w-40 transform translate-x-1/2 -translate-y-1/3"
      />


      {/* Text content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-light">
          Big Summer <span className="font-semibold">Sale</span>
        </h1>
        <p className="mt-4 text-gray-300">
            Save Big on Your Favorite Gadgets This Summer.
        </p>
        <Link to="/catalog">
        <button className="mt-6 px-6 py-3 border rounded-md text-white hover:bg-white hover:text-black transition">
          Shop Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SummerSaleBanner;
