
// products.js
import Iphone14 from "../assets/IPhone14pro.jpeg";
import GalaxyS23 from "../assets/S23galaxy.jpeg";
import Xiaomi13pro from "../assets/Xiaomi13pro.jpg";
import Series9 from "../assets/Applewatchseries9.jpeg"
import Galaxywatch6 from "../assets/Galaxywatch6.jpeg";
import AirM2 from "../assets/Macbookairm2.jpg";

export const productsData = [
  {
      id: 1,
      name: "iPhone 14 Pro",
      brand: "Apple",
      category: "Smartphones",
      price: 1399,
      oldPrice: 1499,
      image: [Iphone14],
      rating: 5,
      colors: ["#000000", "#800080", "#ff0000", "#ffcc00", "#f1f1f1"],
      storageOptions: ["128GB", "256GB", "512GB", "1TB"],
      specs: {
        screenSize: "6.7\"",
        cpu: "Apple A16 Bionic",
        cores: 6,
        mainCamera: "48–12–12 MP",
        frontCamera: "12 MP",
        battery: "4323 mAh"
      },
      availability: {
        delivery: "1–2 day",
        stock: "Today",
        warranty: "1 year"
      },
      description:
        "Enhanced capabilities thanks to an enlarged 6.7\" display and all-day battery life. Capture incredible photos even in low light with the improved dual camera system. Powered by the Apple A16 Bionic chip, the iPhone 14 Pro ensures fast, smooth performance in all your daily tasks and gaming needs."
    },
  {
      id: 2,
      name: "Samsung Galaxy S23",
      brand: "Samsung",
      category: "Smartphones",
      price: 1199,
      oldPrice: 1299,
      image: [GalaxyS23],
      rating: 5,
      colors: ["#000000", "#00ff00", "#ff0000", "#ffffff"],
      storageOptions: ["128GB", "256GB", "512GB"],
      specs: {
        screenSize: "6.8\"",
        cpu: "Snapdragon 8 Gen 2",
        cores: 8,
        mainCamera: "200 MP + 12 MP + 10 MP",
        frontCamera: "12 MP",
        battery: "5000 mAh"
      },
      availability: {
        delivery: "1–2 day",
        stock: "Today",
        warranty: "1 year"
      },
      description:
        "The Samsung Galaxy S23 Ultra brings flagship performance with a powerful Snapdragon 8 Gen 2 chipset and a versatile camera setup. Enjoy a stunning 6.8\" Dynamic AMOLED display with a 120Hz refresh rate and a massive 5000 mAh battery for all-day use."
    },
  {
      id: 3,
      name: "Xiaomi 13 Pro",
      brand: "Xiaomi",
      category: "Smartphones",
      price: 799,
      oldPrice: 899,
      image: [Xiaomi13pro],
      rating: 4,
      colors: ["#000000", "#008000", "#ff6600", "#d3d3d3"],
      storageOptions: ["128GB", "256GB"],
      specs: {
        screenSize: "6.73\"",
        cpu: "Qualcomm Snapdragon 8 Gen 2",
        cores: 8,
        mainCamera: "50 MP + 50 MP + 50 MP",
        frontCamera: "32 MP",
        battery: "4820 mAh"
      },
      availability: {
        delivery: "2–3 days",
        stock: "Limited",
        warranty: "1 year"
      },
      description:
        "Xiaomi 13 Pro offers premium flagship features, including a Leica-powered camera system, a stunning 6.73\" AMOLED display, and top-tier Snapdragon 8 Gen 2 performance. Capture vibrant and crisp images with the triple 50 MP rear cameras."
    },
  {
      id: 4,
      name: "Apple Watch Series 9",
      brand: "Apple",
      category: "Smartwatches",
      price: 399,
      oldPrice: 429,
      image: [Series9],
      rating: 5,
      colors: ["#000000", "#ffffff", "#ff00ff"],
      storageOptions: ["32GB", "64GB"],
      specs: {
        screenSize: "1.9\"",
        cpu: "S9 Chip",
        cores: 2,
        battery: "18 hours"
      },
      availability: {
        delivery: "1–2 day",
        stock: "Today",
        warranty: "1 year"
      },
      description:
        "Stay connected, active, and healthy with the Apple Watch Series 9. Featuring a larger display, new sensor technologies, and better performance, it's the ultimate companion for your daily activities. Stay fit with advanced tracking features and enjoy seamless integration with your iPhone."
    },
  {
      id: 5,
      name: "Galaxy Watch 6",
      brand: "Samsung",
      category: "Smartwatches",
      price: 349,
      oldPrice: 379,
      image: [Galaxywatch6],
      rating: 4,
      colors: ["#000000", "#ffffff", "#0066cc"],
      storageOptions: ["16GB", "32GB"],
      specs: {
        screenSize: "1.5\"",
        cpu: "Exynos W930",
        cores: 2,
        battery: "40 hours"
      },
      availability: {
        delivery: "1–2 day",
        stock: "Today",
        warranty: "1 year"
      },
      description:
        "The Samsung Galaxy Watch 6 combines fitness, style, and technology. With an AMOLED display, advanced health sensors, and up to 40 hours of battery life, it's a perfect companion for your workout and daily life. Seamlessly sync with your Samsung phone for the best experience."
    },
  {
      id: 6,
      name: "MacBook Air M2",
      brand: "Apple",
      category: "Laptops",
      price: 1199,
      oldPrice: 1299,
      image: [AirM2],
      rating: 5,
      colors: ["#000000", "#silver", "#spacegray"],
      storageOptions: ["256GB", "512GB", "1TB"],
      specs: {
        screenSize: "13.6\"",
        cpu: "Apple M2 Chip",
        cores: 8,
        battery: "18 hours"
      },
      availability: {
        delivery: "1–3 day",
        stock: "Today",
        warranty: "1 year"
      },
      description:
        "The MacBook Air M2 combines power with portability. Featuring the powerful M2 chip, a gorgeous Retina display, and an ultra-thin design, it’s perfect for work, play, and everything in between. Get all-day battery life and next-level performance on the go."
    },
  {
      id: 7,
      name: "PlayStation 5",
      brand: "Sony",
      category: "Gaming Consoles",
      price: 499,
      oldPrice: 599,
      image: "/ps5.png",
      rating: 5,
      colors: ["#ffffff", "#000000"],
      storageOptions: ["825GB SSD"],
      specs: {
        cpu: "AMD Ryzen Zen 2",
        cores: 8,
        gpu: "RDNA 2",
        resolution: "4K"
      },
      availability: {
        delivery: "2–3 days",
        stock: "Limited",
        warranty: "1 year"
      },
      description:
        "The PlayStation 5 offers next-gen gaming with blazing-fast load times, ultra-high-definition graphics, and an immersive gaming experience. With an 825GB SSD, 4K resolution, and support for ray tracing, get ready to experience games like never before."
    },
  {
      id: 8,
      name: "AirPods Pro",
      brand: "Apple",
      category: "Earbuds",
      price: 249,
      oldPrice: 279,
      image: "/airpods.png",
      rating: 4,
      colors: ["#ffffff", "#black"],
      storageOptions: ["N/A"],
      specs: {
        battery: "4.5 hours",
        noiseCancellation: "Active",
        waterResistance: "IPX4"
      },
      availability: {
        delivery: "1–2 day",
        stock: "Today",
        warranty: "1 year"
      },
      description:
        "AirPods Pro deliver superior sound quality and an immersive listening experience. With active noise cancellation, adaptive EQ, and a comfortable fit, they’re perfect for both casual listening and high-energy workouts."
    },
  {
      id: 9,
      name: "Galaxy Buds Pro",
      brand: "Samsung",
      category: "Earbuds",
      price: 199,
      oldPrice: 229,
      image: "/galaxybuds.png",
      rating: 4,
      colors: ["#black", "#silver", "#purple"],
      storageOptions: ["N/A"],
      specs: {
        battery: "5 hours",
        noiseCancellation: "Active",
        waterResistance: "IPX7"
      },
      availability: {
        delivery: "1–2 day",
        stock: "Today",
        warranty: "1 year"
      },
      description:
        "Galaxy Buds Pro offer immersive sound, deep bass, and active noise cancellation. With water resistance and long-lasting battery life, these earbuds are perfect for every environment, from the gym to commuting."
    },
  {
      id: 10,
      name: "Sony Alpha ZV-E10",
      brand: "Sony",
      category: "Cameras",
      price: 899,
      oldPrice: 999,
      image: "/camera.png",
      rating: 4,
      colors: ["#000000", "#silver"],
      storageOptions: ["SD card (up to 512GB)"],
      specs: {
        resolution: "24.2 MP",
        video: "4K",
        lens: "Sony E-mount",
        battery: "440 shots"
      },
      availability: {
        delivery: "1–2 days",
        stock: "In stock",
        warranty: "1 year"
      },
      description:
        "Capture professional-quality video and photos with the Sony Alpha ZV-E10. With a large APS-C sensor, 24.2 MP resolution, and 4K video capabilities, it's perfect for vloggers and content creators."
    },
  {
        id: 11,
        name: "Canon EOS R6",
        brand: "Canon",
        category: "Cameras",
        price: 2499,
        oldPrice: 2799,
        image: "/canon-eos-r6.png",
        rating: 5,
        colors: ["#000000", "#white"],
        storageOptions: ["SD card (up to 512GB)"],
        specs: {
          resolution: "20 MP",
          video: "4K",
          lens: "RF Lens",
          battery: "510 shots"
        },
        availability: {
          delivery: "1–2 days",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Canon EOS R6 is perfect for high-quality photography and video production. With 4K video recording, 20 MP resolution, and exceptional autofocus, it’s a great tool for professional photographers and content creators."
      },
  {
        id: 12,
        name: "Sony WH-1000XM5",
        brand: "Sony",
        category: "Headphones",
        price: 349,
        oldPrice: 379,
        image: "/sony-wh1000xm5.png",
        rating: 5,
        colors: ["#000000", "#silver"],
        storageOptions: ["N/A"],
        specs: {
          battery: "30 hours",
          noiseCancellation: "Active",
          bluetooth: "5.0"
        },
        availability: {
          delivery: "1–2 day",
          stock: "Today",
          warranty: "1 year"
        },
        description:
          "The Sony WH-1000XM5 is the best in class for noise-canceling headphones, offering exceptional sound quality, up to 30 hours of battery life, and an ultra-comfortable design for all-day listening."
      },
  {
        id: 13,
        name: "Bose QuietComfort 45",
        brand: "Bose",
        category: "Headphones",
        price: 329,
        oldPrice: 359,
        image: "/bose-qc45.png",
        rating: 4,
        colors: ["#black", "#white"],
        storageOptions: ["N/A"],
        specs: {
          battery: "24 hours",
          noiseCancellation: "Active",
          bluetooth: "5.1"
        },
        availability: {
          delivery: "1–2 day",
          stock: "Today",
          warranty: "1 year"
        },
        description:
          "Bose QuietComfort 45 headphones provide an unmatched noise-canceling experience, with high-quality audio and up to 24 hours of battery life. Perfect for travel, work, or simply enjoying music without distractions."
      },
  {
        id: 14,
        name: "LG C2 OLED TV",
        brand: "LG",
        category: "Televisions",
        price: 1599,
        oldPrice: 1799,
        image: "/lg-c2-oled.png",
        rating: 5,
        colors: ["#000000"],
        storageOptions: ["N/A"],
        specs: {
          screenSize: "55\"",
          resolution: "4K",
          hdmiPorts: 4,
          refreshRate: "120Hz"
        },
        availability: {
          delivery: "1–3 day",
          stock: "Today",
          warranty: "2 years"
        },
        description:
          "The LG C2 OLED TV offers stunning 4K OLED picture quality with perfect blacks and vibrant colors. Enjoy immersive visuals with a 120Hz refresh rate, ideal for gaming, sports, and movies."
      },
  {
        id: 15,
        name: "Samsung QN90B Neo QLED",
        brand: "Samsung",
        category: "Televisions",
        price: 2499,
        oldPrice: 2799,
        image: "/samsung-qn90b.png",
        rating: 5,
        colors: ["#black"],
        storageOptions: ["N/A"],
        specs: {
          screenSize: "65\"",
          resolution: "4K",
          hdmiPorts: 4,
          refreshRate: "120Hz"
        },
        availability: {
          delivery: "1–3 day",
          stock: "Limited",
          warranty: "2 years"
        },
        description:
          "The Samsung QN90B Neo QLED TV features incredible brightness, deep blacks, and exceptional clarity. With a 120Hz refresh rate and Quantum HDR technology, this TV is a game-changer for gaming, movies, and sports."
      },
  {
        id: 16,
        name: "NVIDIA GeForce RTX 4080",
        brand: "NVIDIA",
        category: "Graphics Cards",
        price: 1199,
        oldPrice: 1299,
        image: "/nvidia-rtx4080.png",
        rating: 5,
        colors: ["#green", "#black"],
        storageOptions: ["N/A"],
        specs: {
          memory: "16GB GDDR6X",
          boostClock: "2.5 GHz",
          ports: "HDMI, DisplayPort"
        },
        availability: {
          delivery: "2–3 days",
          stock: "Limited",
          warranty: "3 years"
        },
        description:
          "The NVIDIA GeForce RTX 4080 offers cutting-edge gaming performance with 16GB of GDDR6X memory and ultra-fast clock speeds. Experience ray-traced visuals and seamless gameplay in 4K and VR."
      },
  {
        id: 17,
        name: "AMD Radeon RX 7900 XTX",
        brand: "AMD",
        category: "Graphics Cards",
        price: 999,
        oldPrice: 1099,
        image: "/amd-rx7900xtx.png",
        rating: 4,
        colors: ["#red", "#black"],
        storageOptions: ["N/A"],
        specs: {
          memory: "24GB GDDR6",
          boostClock: "2.3 GHz",
          ports: "HDMI, DisplayPort"
        },
        availability: {
          delivery: "2–3 days",
          stock: "In stock",
          warranty: "3 years"
        },
        description:
          "The AMD Radeon RX 7900 XTX delivers amazing performance for gaming and content creation, offering 24GB of GDDR6 memory and stunning 4K and ray-traced graphics with the latest RDNA 3 architecture."
      },
  {
        id: 18,
        name: "Razer Blade 15",
        brand: "Razer",
        category: "Laptops",
        price: 2299,
        oldPrice: 2499,
        image: "/razer-blade15.png",
        rating: 5,
        colors: ["#black"],
        storageOptions: ["512GB", "1TB"],
        specs: {
          screenSize: "15.6\"",
          cpu: "Intel Core i7-12800H",
          gpu: "NVIDIA GeForce RTX 3070",
          battery: "8 hours"
        },
        availability: {
          delivery: "1–3 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Razer Blade 15 is a high-performance laptop designed for gamers and professionals alike. With the latest Intel Core i7 processor, NVIDIA GeForce RTX 3070 GPU, and a stunning 15.6\" display, it’s built for power and portability."
      },
  {
        id: 19,
        name: "Dell XPS 13",
        brand: "Dell",
        category: "Laptops",
        price: 1299,
        oldPrice: 1399,
        image: "/dell-xps13.png",
        rating: 4,
        colors: ["#silver", "#black"],
        storageOptions: ["256GB", "512GB", "1TB"],
        specs: {
          screenSize: "13.4\"",
          cpu: "Intel Core i7-1250U",
          battery: "12 hours"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Dell XPS 13 is a compact, ultra-portable laptop with powerful performance. Featuring a 13.4\" InfinityEdge display, Intel Core i7 processor, and all-day battery life, it’s a perfect choice for productivity and entertainment on the go."
      },
  {
        id: 20,
        name: "Lenovo ThinkPad X1 Carbon",
        brand: "Lenovo",
        category: "Laptops",
        price: 1699,
        oldPrice: 1799,
        image: "/lenovo-x1carbon.png",
        rating: 5,
        colors: ["#black"],
        storageOptions: ["512GB", "1TB"],
        specs: {
          screenSize: "14\"",
          cpu: "Intel Core i7-1185G7",
          battery: "15 hours"
        },
        availability: {
          delivery: "2–3 days",
          stock: "Limited",
          warranty: "1 year"
        },
        description:
          "The Lenovo ThinkPad X1 Carbon is an ultra-lightweight and durable business laptop with powerful performance. Enjoy a 14\" display, long battery life, and a premium design, making it ideal for professionals who need portability without sacrificing performance."
      },
  {
        id: 21,
        name: "HP Spectre x360",
        brand: "HP",
        category: "Laptops",
        price: 1599,
        oldPrice: 1699,
        image: "/hp-spectre-x360.png",
        rating: 5,
        colors: ["#silver", "#black"],
        storageOptions: ["512GB", "1TB"],
        specs: {
          screenSize: "13.3\"",
          cpu: "Intel Core i7-1165G7",
          battery: "10 hours"
        },
        availability: {
          delivery: "2–3 days",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The HP Spectre x360 is a 2-in-1 convertible laptop offering top-tier performance, a stunning 13.3\" display, and up to 10 hours of battery life. A perfect choice for work or play with its sleek design and versatile functionality."
      },
  {
        id: 22,
        name: "Microsoft Surface Laptop 4",
        brand: "Microsoft",
        category: "Laptops",
        price: 1299,
        oldPrice: 1399,
        image: "/microsoft-surface-laptop-4.png",
        rating: 4,
        colors: ["#platinum", "#matte black"],
        storageOptions: ["256GB", "512GB"],
        specs: {
          screenSize: "13.5\"",
          cpu: "Intel Core i7-1165G7",
          battery: "11 hours"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Microsoft Surface Laptop 4 combines high performance and a premium design. With a 13.5\" PixelSense display, Intel Core i7 processor, and a lightweight build, it's perfect for everyday tasks, business use, and entertainment."
      },
  {
        id: 23,
        name: "Acer Predator Helios 300",
        brand: "Acer",
        category: "Laptops",
        price: 1799,
        oldPrice: 1999,
        image: "/acer-predator-helios-300.png",
        rating: 4,
        colors: ["#black", "#blue"],
        storageOptions: ["512GB", "1TB"],
        specs: {
          screenSize: "15.6\"",
          cpu: "Intel Core i7-11800H",
          gpu: "NVIDIA GeForce RTX 3070",
          battery: "6 hours"
        },
        availability: {
          delivery: "1–3 day",
          stock: "Limited",
          warranty: "1 year"
        },
        description:
          "The Acer Predator Helios 300 is a powerful gaming laptop equipped with the latest Intel Core i7 processor and NVIDIA GeForce RTX 3070 GPU. With a 15.6\" display and fast refresh rate, it’s perfect for gaming and demanding tasks."
      },
  {
        id: 24,
        name: "Google Pixel 6 Pro",
        brand: "Google",
        category: "Smartphones",
        price: 899,
        oldPrice: 999,
        image: "/google-pixel6pro.png",
        rating: 5,
        colors: ["#stormy black", "#cloudy white"],
        storageOptions: ["128GB", "256GB", "512GB"],
        specs: {
          screenSize: "6.7\"",
          cpu: "Google Tensor",
          cores: 8,
          mainCamera: "50–12–48 MP",
          frontCamera: "11.1 MP",
          battery: "5003 mAh"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Google Pixel 6 Pro offers incredible photography and performance with Google's Tensor chip. Enjoy a 6.7\" OLED display, 50 MP main camera, and long-lasting battery life, all packed in a premium design."
      },
  {
        id: 25,
        name: "Samsung Galaxy S22 Ultra",
        brand: "Samsung",
        category: "Smartphones",
        price: 1199,
        oldPrice: 1299,
        image: "/samsung-galaxy-s22ultra.png",
        rating: 5,
        colors: ["#phantom black", "#phantom white"],
        storageOptions: ["128GB", "256GB", "512GB"],
        specs: {
          screenSize: "6.8\"",
          cpu: "Qualcomm Snapdragon 8 Gen 1",
          cores: 8,
          mainCamera: "108–12–10 MP",
          frontCamera: "40 MP",
          battery: "5000 mAh"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Samsung Galaxy S22 Ultra is a powerhouse phone with a 6.8\" Dynamic AMOLED display and quad-camera setup. It’s ideal for users who want a premium experience, featuring a 108 MP main camera and S Pen functionality."
      },
  {
        id: 26,
        name: "Xiaomi Mi 11 Ultra",
        brand: "Xiaomi",
        category: "Smartphones",
        price: 899,
        oldPrice: 999,
        image: "/xiaomi-mi11ultra.png",
        rating: 4,
        colors: ["#black", "#white"],
        storageOptions: ["128GB", "256GB"],
        specs: {
          screenSize: "6.81\"",
          cpu: "Qualcomm Snapdragon 888",
          cores: 8,
          mainCamera: "50–48–48 MP",
          frontCamera: "20 MP",
          battery: "5000 mAh"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Xiaomi Mi 11 Ultra is a flagship phone featuring a 6.81\" AMOLED display and a powerful Snapdragon 888 chip. With its 50 MP triple-camera setup and sleek design, it offers excellent value for those seeking high-end performance."
      },
  {
        id: 27,
        name: "OnePlus 9 Pro",
        brand: "OnePlus",
        category: "Smartphones",
        price: 1069,
        oldPrice: 1149,
        image: "/oneplus-9pro.png",
        rating: 5,
        colors: ["#morning mist", "#pine green"],
        storageOptions: ["128GB", "256GB"],
        specs: {
          screenSize: "6.7\"",
          cpu: "Qualcomm Snapdragon 888",
          cores: 8,
          mainCamera: "48–50–2 MP",
          frontCamera: "16 MP",
          battery: "4500 mAh"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The OnePlus 9 Pro offers a fast Snapdragon 888 processor and a stunning 6.7\" AMOLED display. With Hasselblad-powered cameras and a smooth 120Hz refresh rate, it's a top choice for those looking for flagship performance."
      },
  {
        id: 28,
        name: "Google Nest Thermostat",
        brand: "Google",
        category: "Smart Home",
        price: 129,
        oldPrice: 149,
        image: "/google-nest-thermostat.png",
        rating: 4,
        colors: ["#charcoal", "#snow"],
        storageOptions: ["N/A"],
        specs: {
          connectivity: "Wi-Fi",
          compatibility: "Google Home, Alexa"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Google Nest Thermostat offers a smart and energy-efficient way to control your home's temperature. With remote control through Google Home or Alexa, it’s easy to create a comfortable and energy-efficient environment."
      },
  {
        id: 29,
        name: "Amazon Echo Show 8",
        brand: "Amazon",
        category: "Smart Home",
        price: 129,
        oldPrice: 149,
        image: "/amazon-echo-show8.png",
        rating: 5,
        colors: ["#charcoal", "#sandstone"],
        storageOptions: ["N/A"],
        specs: {
          display: "8\" HD",
          speakers: "Stereo",
          compatibility: "Alexa"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Amazon Echo Show 8 is an 8\" smart display with a powerful speaker and Alexa integration. Use it to manage your smart home, play videos, and make video calls with a built-in camera."
      },
  {
        id: 30,
        name: "Ring Video Doorbell Pro 2",
        brand: "Ring",
        category: "Smart Home",
        price: 249,
        oldPrice: 279,
        image: "/ring-doorbell-pro2.png",
        rating: 5,
        colors: ["#black", "#white"],
        storageOptions: ["N/A"],
        specs: {
          camera: "1080p HD",
          features: "Motion Detection, Night Vision",
          compatibility: "Alexa"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Ring Video Doorbell Pro 2 offers high-definition video, motion detection, and two-way audio, allowing you to see and speak to visitors remotely through the Ring app. Compatible with Alexa for easy integration into your smart home."
      },
  {
        id: 31,
        name: "Apple HomePod Mini",
        brand: "Apple",
        category: "Smart Home",
        price: 99,
        oldPrice: 129,
        image: "/apple-homepod-mini.png",
        rating: 5,
        colors: ["#space gray", "#white"],
        storageOptions: ["N/A"],
        specs: {
          speakers: "Stereo",
          compatibility: "Apple HomeKit"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Apple HomePod Mini brings high-quality audio to your home in a compact, stylish form. With full integration with Apple HomeKit, it’s the perfect addition to your smart home."
      },
  {
        id: 32,
        name: "Philips Hue White and Color Ambiance Bulb",
        brand: "Philips",
        category: "Smart Home",
        price: 49,
        oldPrice: 59,
        image: "/philips-hue-bulb.png",
        rating: 4,
        colors: ["#white"],
        storageOptions: ["N/A"],
        specs: {
          connectivity: "Wi-Fi",
          features: "Color Changing, Voice Control"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Philips Hue White and Color Ambiance Bulb lets you control your lighting with your voice or phone. Choose from millions of colors to create the perfect ambiance for any room in your home."
      },
  {
        id: 33,
        name: "Dyson V11 Torque Drive",
        brand: "Dyson",
        category: "Home Appliances",
        price: 599,
        oldPrice: 649,
        image: "/dyson-v11.png",
        rating: 5,
        colors: ["#purple", "#blue"],
        storageOptions: ["N/A"],
        specs: {
          suctionPower: "185 AW",
          battery: "60 minutes",
          features: "Cordless, LED display"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "2 years"
        },
        description:
          "The Dyson V11 Torque Drive is a powerful cordless vacuum with 185 AW suction power and a 60-minute run time. It features intelligent suction adjustment and an LED display to show battery life and performance."
      },
  {
        id: 34,
        name: "Shark Navigator Lift-Away",
        brand: "Shark",
        category: "Home Appliances",
        price: 229,
        oldPrice: 249,
        image: "/shark-navigator.png",
        rating: 4,
        colors: ["#blue"],
        storageOptions: ["N/A"],
        specs: {
          suctionPower: "120 AW",
          features: "Lift-Away, HEPA filtration"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Shark Navigator Lift-Away is a versatile vacuum with powerful suction and the convenience of lift-away functionality. Its HEPA filtration system captures dust and allergens, making it ideal for homes with pets."
      },
  {
        id: 35,
        name: "iRobot Roomba 980",
        brand: "iRobot",
        category: "Home Appliances",
        price: 499,
        oldPrice: 599,
        image: "/irobot-roomba980.png",
        rating: 5,
        colors: ["#black"],
        storageOptions: ["N/A"],
        specs: {
          cleaningMode: "Automatic",
          features: "Wi-Fi, App Control"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The iRobot Roomba 980 is a smart robotic vacuum cleaner with Wi-Fi connectivity and app control. It provides automatic cleaning, efficient navigation, and powerful suction to keep your home spotless."
      },
  {
        id: 36,
        name: "Sonos One SL",
        brand: "Sonos",
        category: "Home Audio",
        price: 199,
        oldPrice: 219,
        image: "/sonos-one-sl.png",
        rating: 5,
        colors: ["#black", "#white"],
        storageOptions: ["N/A"],
        specs: {
          speakers: "Stereo",
          connectivity: "Wi-Fi, Ethernet"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Sonos One SL is a compact and powerful wireless speaker that delivers rich sound for any room. It’s perfect for streaming music, podcasts, and audiobooks with Wi-Fi and Ethernet support."
      },
  {
        id: 37,
        name: "Bose SoundLink Revolve+",
        brand: "Bose",
        category: "Home Audio",
        price: 299,
        oldPrice: 349,
        image: "/bose-soundlink-revolveplus.png",
        rating: 5,
        colors: ["#black", "#silver"],
        storageOptions: ["N/A"],
        specs: {
          speakers: "360°",
          battery: "16 hours",
          connectivity: "Bluetooth"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Bose SoundLink Revolve+ offers exceptional 360° sound and up to 16 hours of battery life. With a waterproof design and Bluetooth connectivity, it’s perfect for both indoor and outdoor listening."
      },
  {
        id: 38,
        name: "JBL Flip 5",
        brand: "JBL",
        category: "Home Audio",
        price: 119,
        oldPrice: 129,
        image: "/jbl-flip5.png",
        rating: 4,
        colors: ["#black", "#blue"],
        storageOptions: ["N/A"],
        specs: {
          speakers: "Stereo",
          battery: "12 hours",
          connectivity: "Bluetooth"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The JBL Flip 5 is a portable Bluetooth speaker offering great sound, a durable design, and up to 12 hours of battery life. It’s perfect for music lovers who need a portable solution for all occasions."
      },
  {
        id: 39,
        name: "Sennheiser Momentum 3",
        brand: "Sennheiser",
        category: "Headphones",
        price: 399,
        oldPrice: 429,
        image: "/sennheiser-momentum3.png",
        rating: 5,
        colors: ["#black"],
        storageOptions: ["N/A"],
        specs: {
          noiseCancellation: "Active",
          battery: "17 hours",
          connectivity: "Bluetooth"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Sennheiser Momentum 3 is a premium set of over-ear headphones with active noise cancellation and rich sound quality. With 17 hours of battery life, they provide a luxurious listening experience."
      },
  {
        id: 40,
        name: "Bose Noise Cancelling 700",
        brand: "Bose",
        category: "Headphones",
        price: 379,
        oldPrice: 399,
        image: "/bose-700.png",
        rating: 5,
        colors: ["#black", "#silver"],
        storageOptions: ["N/A"],
        specs: {
          noiseCancellation: "Active",
          battery: "20 hours",
          connectivity: "Bluetooth"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Bose Noise Cancelling 700 offers excellent active noise cancellation, up to 20 hours of battery life, and high-quality sound. Whether for travel or work, these headphones deliver an immersive listening experience."
      },
  {
        id: 41,
        name: "Sony Xperia 1 II",
        brand: "Sony",
        category: "Smartphones",
        price: 1199,
        oldPrice: 1299,
        image: "/sony-xperia1ii.png",
        rating: 5,
        colors: ["#black", "#purple"],
        storageOptions: ["256GB", "512GB"],
        specs: {
          screenSize: "6.5\"",
          cpu: "Qualcomm Snapdragon 865",
          cores: 8,
          mainCamera: "12–12–12 MP",
          frontCamera: "8 MP",
          battery: "4000 mAh"
        },
        availability: {
          delivery: "1–2 day",
          stock: "In stock",
          warranty: "1 year"
        },
        description:
          "The Sony Xperia 1 II offers incredible multimedia capabilities with its 6.5\" OLED display and triple-camera setup. Powered by Qualcomm Snapdragon 865, it provides premium performance for photography, gaming, and media consumption."
      }
];