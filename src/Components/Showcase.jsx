import PS5 from "../assets/PlayStation.png";
import Macbook from "../assets/MacBookPro14.png";
import Airpods from "../assets/Airpodsmaxhalf.png";
import VisionPro from "../assets/Visionpro.png";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2">
      {/* LEFT COLUMN */}
      <div className="flex flex-col">
        {/* Playstation 5 */}
        <div className="bg-white flex flex-col sm:flex-row items-center gap-6 px-6 py-10 min-h-[300px]">
          <div className="flex-shrink-0 w-full sm:w-1/2 flex justify-center">
            <img
              src={PS5}
              alt="Playstation 5"
              className="h-40 sm:h-56 md:h-64 object-contain"
            />
          </div>
          <div className="text-center sm:text-left sm:w-1/2">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3">
              Playstation 5
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
            </p>
          </div>
        </div>

        {/* AirPods & Vision Pro */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* AirPods Max */}
          <div className="bg-gray-50 flex flex-col sm:flex-row items-center gap-4 px-4 py-10 min-h-[250px]">
            <div className="flex-shrink-0 w-full sm:w-1/2 flex justify-center">
              <img
                src={Airpods}
                alt="AirPods Max"
                className="h-32 sm:h-40 object-contain"
              />
            </div>
            <div className="text-center sm:text-left sm:w-1/2">
              <h3 className="text-xl sm:text-2xl font-medium">
                Apple <span className="font-semibold">AirPods Max</span>
              </h3>
              <p className="text-gray-600 mt-1 text-sm">
                Computational audio. Listen, it’s powerful
              </p>
            </div>
          </div>

          {/* Vision Pro */}
          <div className="bg-gray-800 text-white flex flex-col sm:flex-row items-center gap-4 px-4 py-10 min-h-[250px]">
            <div className="flex-shrink-0 w-full sm:w-1/2 flex justify-center">
              <img
                src={VisionPro}
                alt="Vision Pro"
                className="h-32 sm:h-40 object-contain"
              />
            </div>
            <div className="text-center sm:text-left sm:w-1/2">
              <h3 className="text-xl sm:text-2xl font-medium">
                Apple <span className="font-semibold">Vision Pro</span>
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN - MacBook */}
      <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-12 min-h-[400px]">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-light">
            MacBook <span className="font-semibold">Air</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg mt-4">
            The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
          </p>
          <Link to="/catalog">
          <button className="mt-6 px-5 py-2 border border-black rounded-md hover:bg-black hover:text-white transition">
            Shop Now
          </button>
          </Link>
        </div>
        <div className="flex-shrink-0 md:w-1/2 flex justify-center">
          <img
            src={Macbook}
            alt="MacBook Air"
            className="h-40 sm:h-48 md:h-[300px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;

