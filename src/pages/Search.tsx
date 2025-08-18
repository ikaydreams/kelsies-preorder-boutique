import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const allProducts = [
    { id: 1, name: "iPhone 16 Pro", price: "$999", category: "Smartphones", image: "", description: "Next-generation iPhone with revolutionary features" },
    { id: 2, name: "PlayStation 6", price: "$599", category: "Gaming", image: "", description: "Next-gen gaming console with 8K support" },
    { id: 3, name: "Tesla Model Y 2025", price: "$54,999", category: "Automotive", image: "", description: "Updated electric SUV with enhanced autopilot" },
    { id: 4, name: "MacBook Pro M4", price: "$2,399", category: "Computers", image: "", description: "Revolutionary laptop with M4 chip technology" },
    { id: 5, name: "Samsung Galaxy S25", price: "$899", category: "Smartphones", image: "", description: "Flagship Android with AI photography" },
    { id: 6, name: "Nintendo Switch 2", price: "$399", category: "Gaming", image: "", description: "Next-gen hybrid gaming console" },
    { id: 7, name: "Apple Watch Series 10", price: "$499", category: "Wearables", image: "", description: "Advanced health features and new design" },
    { id: 8, name: "Google Pixel 9 Pro", price: "$899", category: "Smartphones", image: "", description: "AI-powered flagship Android phone" },
    { id: 9, name: "Sony Alpha ZV-E10 II", price: "$1,299", category: "Cameras", image: "", description: "Vlogging camera with 4K video" },
    { id: 10, name: "DJI Phantom 5", price: "$1,499", category: "Drones", image: "", description: "Professional drone with enhanced stability" },
    { id: 11, name: "Bose QuietComfort Ultra", price: "$349", category: "Audio", image: "", description: "Noise-cancelling headphones with immersive sound" },
    { id: 12, name: "Canon EOS R2", price: "$2,499", category: "Cameras", image: "", description: "Full-frame mirrorless camera" },
    { id: 13, name: "Samsung Galaxy Tab S10", price: "$799", category: "Tablets", image: "", description: "High-performance Android tablet" },
    { id: 14, name: "Microsoft Surface Pro 10", price: "$1,099", category: "Computers", image: "", description: "Versatile 2-in-1 laptop" },
    { id: 15, name: "GoPro Hero 13", price: "$499", category: "Cameras", image: "", description: "Action camera with 8K video" },
    { id: 16, name: "Amazon Echo 6", price: "$129", category: "Smart Home", image: "", description: "Smart speaker with improved Alexa" },
    { id: 17, name: "Oculus Quest 4", price: "$499", category: "Gaming", image: "", description: "Wireless VR headset" },
    { id: 18, name: "Dell XPS 16", price: "$1,799", category: "Computers", image: "", description: "Ultra-thin laptop with OLED display" },
    { id: 19, name: "Fitbit Charge 6", price: "$179", category: "Wearables", image: "", description: "Fitness tracker with ECG" },
    { id: 20, name: "LG OLED TV G4", price: "$2,999", category: "TVs", image: "", description: "4K OLED TV with AI upscaling" },
    { id: 21, name: "HP Spectre x360 16", price: "$1,399", category: "Computers", image: "", description: "Convertible laptop with touch screen" },
    { id: 22, name: "Razer Blade 18", price: "$2,499", category: "Gaming", image: "", description: "High-end gaming laptop" },
    { id: 23, name: "Apple iPad Air 7", price: "$699", category: "Tablets", image: "", description: "Lightweight tablet with M3 chip" },
    { id: 24, name: "Sony WH-1000XM6", price: "$399", category: "Audio", image: "", description: "Premium wireless headphones" },
    { id: 25, name: "Google Nest Hub Max 2", price: "$249", category: "Smart Home", image: "", description: "Smart display for home automation" },
    { id: 26, name: "Canon PowerShot G8", price: "$899", category: "Cameras", image: "", description: "Compact camera with 4K video" },
    { id: 27, name: "Samsung Galaxy Buds 3", price: "$149", category: "Audio", image: "", description: "Wireless earbuds with noise cancellation" },
    { id: 28, name: "DJI Mavic 4", price: "$1,299", category: "Drones", image: "", description: "Portable drone with 8K camera" },
    { id: 29, name: "Apple HomePod 3", price: "$349", category: "Smart Home", image: "", description: "Smart speaker with spatial audio" },
    { id: 30, name: "Microsoft Xbox Series Z", price: "$599", category: "Gaming", image: "", description: "Next-gen console with cloud gaming" },
    { id: 31, name: "Lenovo Yoga Pro 10", price: "$1,299", category: "Computers", image: "", description: "2-in-1 laptop with stylus support" },
    { id: 32, name: "Panasonic Lumix S2", price: "$1,599", category: "Cameras", image: "", description: "Mirrorless camera for professionals" },
    { id: 33, name: "Asus ROG Phone 8", price: "$999", category: "Smartphones", image: "", description: "Gaming smartphone with cooling system" },
    { id: 34, name: "JBL Charge 6", price: "$179", category: "Audio", image: "", description: "Portable Bluetooth speaker" },
    { id: 35, name: "Amazon Fire TV Cube 4", price: "$149", category: "TVs", image: "", description: "Streaming device with voice control" },
    { id: 36, name: "Garmin Fenix 8", price: "$799", category: "Wearables", image: "", description: "Advanced GPS smartwatch" },
    {
        id: 37,
        name: "Apple TV 4K (2026)",
        price: "$179",
        expectedDate: "October 2026",
        image: "",
        rating: 4.9,
        description: "Streaming media player with 4K HDR",
        category: "TVs"
    },
    {
        id: 38,
        name: "Samsung Galaxy Z Fold 6",
        price: "$1,799",
        expectedDate: "November 2026",
        image: "",
        rating: 4.8,
        description: "Foldable smartphone with tablet features",
        category: "Smartphones"
    },
    {
        id: 39,
        name: "Sony A7 IV",
        price: "$2,499",
        expectedDate: "December 2026",
        image: "",
        rating: 4.9,
        description: "Full-frame mirrorless camera with AI",
        category: "Cameras"
    },
    {
        id: 40,
        name: "DJI Osmo Action 3",
        price: "$329",
        expectedDate: "January 2027",
        image: "",
        rating: 4.7,
        description: "Action camera with dual screens",
        category: "Cameras"
    },
    {
        id: 41,
        name: "Apple AirPods Pro 3",
        price: "$249",
        expectedDate: "February 2027",
        image: "",
        rating: 4.8,
        description: "Noise-cancelling earbuds with spatial audio",
        category: "Audio"
    },
    {
        id: 42,
        name: "Samsung Galaxy Watch 6",
        price: "$399",
        expectedDate: "March 2027",
        image: "",
        rating: 4.9,
        description: "Smartwatch with advanced health tracking",
        category: "Wearables"
    },
    {
        id: 43,
        name: "Google Pixel Watch 2",
        price: "$349",
        expectedDate: "April 2027",
        image: "",
        rating: 4.7,
        description: "Smartwatch with Fitbit integration",
        category: "Wearables"
    },
    {
        id: 44,
        name: "Amazon Kindle Oasis 4",
        price: "$249",
        expectedDate: "May 2027",
        image: "",
        rating: 4.8,
        description: "Premium e-reader with adjustable warm light",
        category: "E-readers"
    },
    {
        id: 45,
        name: "Apple Pencil (2nd Gen)",
        price: "$129",
        expectedDate: "June 2027",
        image: "",
        rating: 4.9,
        description: "Precision stylus for iPad",
        category: "Accessories"
    },
    {
        id: 46,
        name: "Logitech MX Master 4",
        price: "$99",
        expectedDate: "July 2027",
        image: "",
        rating: 4.8,
        description: "Advanced wireless mouse",
        category: "Accessories"
    },
    {
        id: 47,
        name: "Razer Huntsman Mini",
        price: "$119",
        expectedDate: "August 2027",
        image: "",
        rating: 4.7,
        description: "Compact gaming keyboard",
        category: "Accessories"
    },
    {
        id: 48,
        name: "HyperX Cloud II",
        price: "$99",
        expectedDate: "September 2027",
        image: "",
        rating: 4.8,
        description: "Gaming headset with 7.1 surround sound",
        category: "Audio"
    },
    {
        id: 49,
        name: "SteelSeries Arctis 7",
        price: "$149",
        expectedDate: "October 2027",
        image: "",
        rating: 4.9,
        description: "Wireless gaming headset",
        category: "Audio"
    },
    {
        id: 50,
        name: "Corsair K95 RGB Platinum",
        price: "$199",
        expectedDate: "November 2027",
        image: "",
        rating: 4.8,
        description: "Mechanical gaming keyboard",
        category: "Accessories"
    },
    {
        id: 51,
        name: "ASUS ROG Swift 360Hz",
        price: "$699",
        expectedDate: "December 2027",
        image: "",
        rating: 4.9,
        description: "Gaming monitor with ultra-high refresh rate",
        category: "Monitors"
    },
    {
        id: 52,
        name: "Dell Alienware AW2521H",
        price: "$1,499",
        expectedDate: "January 2028",
        image: "",
        rating: 4.8,
        description: "Gaming monitor with G-SYNC and HDR",
        category: "Monitors"
    },
    {
        id: 53,
        name: "BenQ PD3220U",
        price: "$1,199",
        expectedDate: "February 2028",
        image: "",
        rating: 4.7,
        description: "4K professional monitor for designers",
        category: "Monitors"
    },
    {
        id: 54,
        name: "LG UltraFine 5K",
        price: "$1,299",
        expectedDate: "March 2028",
        image: "",
        rating: 4.9,
        description: "5K display with Thunderbolt 3",
        category: "Monitors"
    },
    {
        id: 55,
        name: "Samsung Odyssey G9",
        price: "$1,299",
        expectedDate: "April 2028",
        image: "",
        rating: 4.8,
        description: "Dual QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 56,
        name: "Acer Predator X38",
        price: "$1,799",
        expectedDate: "May 2028",
        image: "",
        rating: 4.9,
        description: "Curved gaming monitor with NVIDIA G-SYNC",
        category: "Monitors"
    },
    {
        id: 57,
        name: "ViewSonic Elite XG270QG",
        price: "$599",
        expectedDate: "June 2028",
        image: "",
        rating: 4.7,
        description: "QHD gaming monitor with 165Hz refresh rate",
        category: "Monitors"
    },
    {
        id: 58,
        name: "Gigabyte AORUS FI27Q-P",
        price: "$799",
        expectedDate: "July 2028",
        image: "",
        rating: 4.8,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 59,
        name: "MSI Optix MAG272CQR",
        price: "$499",
        expectedDate: "August 2028",
        image: "",
        rating: 4.9,
        description: "27-inch curved gaming monitor",
        category: "Monitors"
    },
    {
        id: 60,
        name: "Razer Raptor 27",
        price: "$699",
        expectedDate: "September 2028",
        image: "",
        rating: 4.8,
        description: "27-inch gaming monitor with Chroma RGB",
        category: "Monitors"
    },
    {
        id: 61,
        name: "Alienware AW3420DW",
        price: "$1,499",
        expectedDate: "October 2028",
        image: "",
        rating: 4.9,
        description: "34-inch curved gaming monitor",
        category: "Monitors"
    },
    {
        id: 62,
        name: "Samsung CHG90",
        price: "$1,299",
        expectedDate: "November 2028",
        image: "",
        rating: 4.8,
        description: "49-inch super ultra-wide gaming monitor",
        category: "Monitors"
    },
    {
        id: 63,
        name: "LG 34GN850-B",
        price: "$899",
        expectedDate: "December 2028",
        image: "",
        rating: 4.7,
        description: "34-inch ultra-wide QHD monitor",
        category: "Monitors"
    },
    {
        id: 64,
        name: "Dell UltraSharp U2720Q",
        price: "$1,199",
        expectedDate: "January 2029",
        image: "",
        rating: 4.9,
        description: "27-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 65,
        name: "BenQ SW321C",
        price: "$1,299",
        expectedDate: "February 2029",
        image: "",
        rating: 4.8,
        description: "27-inch 4K photographer's monitor",
        category: "Monitors"
    },
    {
        id: 66,
        name: "Eizo ColorEdge CG319X",
        price: "$2,999",
        expectedDate: "March 2029",
        image: "",
        rating: 4.9,
        description: "31-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 67,
        name: "ASUS ProArt PA32UCX",
        price: "$1,999",
        expectedDate: "April 2029",
        image: "",
        rating: 4.8,
        description: "32-inch 4K HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 68,
        name: "LG 27UK850-W",
        price: "$449",
        expectedDate: "May 2029",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD IPS monitor",
        category: "Monitors"
    },
    {
        id: 69,
        name: "Dell P2720DC",
        price: "$549",
        expectedDate: "June 2029",
        image: "",
        rating: 4.8,
        description: "27-inch QHD USB-C monitor",
        category: "Monitors"
    },
    {
        id: 70,
        name: "BenQ PD2725U",
        price: "$1,199",
        expectedDate: "July 2029",
        image: "",
        rating: 4.9,
        description: "27-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 71,
        name: "Samsung Odyssey Neo G9",
        price: "$1,499",
        expectedDate: "August 2029",
        image: "",
        rating: 4.8,
        description: "49-inch curved gaming monitor with Mini LED",
        category: "Monitors"
    },
    {
        id: 72,
        name: "LG 38WN95C-W",
        price: "$1,499",
        expectedDate: "September 2029",
        image: "",
        rating: 4.9,
        description: "38-inch ultra-wide curved monitor",
        category: "Monitors"
    },
    {
        id: 73,
        name: "Dell Alienware AW3423DW",
        price: "$1,699",
        expectedDate: "October 2029",
        image: "",
        rating: 4.8,
        description: "34-inch curved QD-OLED gaming monitor",
        category: "Monitors"
    },
    {
        id: 74,
        name: "Samsung S80A",
        price: "$699",
        expectedDate: "November 2029",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD monitor",
        category: "Monitors"
    },
    {
        id: 75,
        name: "LG 27GL850-B",
        price: "$499",
        expectedDate: "December 2029",
        image: "",
        rating: 4.8,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 76,
        name: "Dell UltraSharp U3219Q",
        price: "$1,199",
        expectedDate: "January 2030",
        image: "",
        rating: 4.9,
        description: "32-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 77,
        name: "BenQ SW271C",
        price: "$1,799",
        expectedDate: "February 2030",
        image: "",
        rating: 4.8,
        description: "27-inch 4K photo editing monitor",
        category: "Monitors"
    },
    {
        id: 78,
        name: "Eizo ColorEdge CG279X",
        price: "$2,499",
        expectedDate: "March 2030",
        image: "",
        rating: 4.9,
        description: "27-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 79,
        name: "ASUS ProArt PA27AC",
        price: "$899",
        expectedDate: "April 2030",
        image: "",
        rating: 4.8,
        description: "27-inch QHD HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 80,
        name: "LG 34WK95U-W",
        price: "$1,199",
        expectedDate: "May 2030",
        image: "",
        rating: 4.7,
        description: "34-inch ultra-wide 5K monitor",
        category: "Monitors"
    },
    {
        id: 81,
        name: "Dell P3421W",
        price: "$899",
        expectedDate: "June 2030",
        image: "",
        rating: 4.8,
        description: "34-inch curved QHD monitor",
        category: "Monitors"
    },
    {
        id: 82,
        name: "BenQ PD3220PE",
        price: "$1,199",
        expectedDate: "July 2030",
        image: "",
        rating: 4.9,
        description: "32-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 83,
        name: "Samsung Odyssey G7",
        price: "$699",
        expectedDate: "August 2030",
        image: "",
        rating: 4.8,
        description: "32-inch curved gaming monitor",
        category: "Monitors"
    },
    {
        id: 84,
        name: "LG 27GP850-B",
        price: "$499",
        expectedDate: "September 2030",
        image: "",
        rating: 4.9,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 85,
        name: "Dell UltraSharp U2723QE",
        price: "$1,199",
        expectedDate: "October 2030",
        image: "",
        rating: 4.8,
        description: "27-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 86,
        name: "BenQ SW321U",
        price: "$1,299",
        expectedDate: "November 2030",
        image: "",
        rating: 4.7,
        description: "32-inch 4K photographer's monitor",
        category: "Monitors"
    },
    {
        id: 87,
        name: "Eizo ColorEdge CG319X-B",
        price: "$2,999",
        expectedDate: "December 2030",
        image: "",
        rating: 4.9,
        description: "31-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 88,
        name: "ASUS ProArt PA32UCX-P",
        price: "$1,999",
        expectedDate: "January 2031",
        image: "",
        rating: 4.8,
        description: "32-inch 4K HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 89,
        name: "LG 27UK850-W",
        price: "$449",
        expectedDate: "February 2031",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD IPS monitor",
        category: "Monitors"
    },
    {
        id: 90,
        name: "Dell P2720DC",
        price: "$549",
        expectedDate: "March 2031",
        image: "",
        rating: 4.8,
        description: "27-inch QHD USB-C monitor",
        category: "Monitors"
    },
    {
        id: 91,
        name: "BenQ PD2725U",
        price: "$1,199",
        expectedDate: "April 2031",
        image: "",
        rating: 4.9,
        description: "27-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 92,
        name: "Samsung Odyssey Neo G9",
        price: "$1,499",
        expectedDate: "May 2031",
        image: "",
        rating: 4.8,
        description: "49-inch curved gaming monitor with Mini LED",
        category: "Monitors"
    },
    {
        id: 93,
        name: "LG 38WN95C-W",
        price: "$1,499",
        expectedDate: "June 2031",
        image: "",
        rating: 4.9,
        description: "38-inch ultra-wide curved monitor",
        category: "Monitors"
    },
    {
        id: 94,
        name: "Dell Alienware AW3423DW",
        price: "$1,699",
        expectedDate: "July 2031",
        image: "",
        rating: 4.8,
        description: "34-inch curved QD-OLED gaming monitor",
        category: "Monitors"
    },
    {
        id: 95,
        name: "Samsung S80A",
        price: "$699",
        expectedDate: "August 2031",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD monitor",
        category: "Monitors"
    },
    {
        id: 96,
        name: "LG 27GL850-B",
        price: "$499",
        expectedDate: "September 2031",
        image: "",
        rating: 4.8,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 97,
        name: "Dell UltraSharp U3219Q",
        price: "$1,199",
        expectedDate: "October 2031",
        image: "",
        rating: 4.9,
        description: "32-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 98,
        name: "BenQ SW271C",
        price: "$1,799",
        expectedDate: "November 2031",
        image: "",
        rating: 4.8,
        description: "27-inch 4K photo editing monitor",
        category: "Monitors"
    },
    {
        id: 99,
        name: "Eizo ColorEdge CG279X",
        price: "$2,499",
        expectedDate: "December 2031",
        image: "",
        rating: 4.9,
        description: "27-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 100,
        name: "ASUS ProArt PA27AC",
        price: "$899",
        expectedDate: "January 2032",
        image: "",
        rating: 4.8,
        description: "27-inch QHD HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 101,
        name: "LG 34WK95U-W",
        price: "$1,199",
        expectedDate: "February 2032",
        image: "",
        rating: 4.7,
        description: "34-inch ultra-wide 5K monitor",
        category: "Monitors"
    },
    {
        id: 102,
        name: "Dell P3421W",
        price: "$899",
        expectedDate: "March 2032",
        image: "",
        rating: 4.8,
        description: "34-inch curved QHD monitor",
        category: "Monitors"
    },
    {
        id: 103,
        name: "BenQ PD3220PE",
        price: "$1,199",
        expectedDate: "April 2032",
        image: "",
        rating: 4.9,
        description: "32-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 104,
        name: "Samsung Odyssey G7",
        price: "$699",
        expectedDate: "May 2032",
        image: "",
        rating: 4.8,
        description: "32-inch curved gaming monitor",
        category: "Monitors"
    },
    {
        id: 105,
        name: "LG 27GP850-B",
        price: "$499",
        expectedDate: "June 2032",
        image: "",
        rating: 4.9,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 106,
        name: "Dell UltraSharp U2723QE",
        price: "$1,199",
        expectedDate: "July 2032",
        image: "",
        rating: 4.8,
        description: "27-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 107,
        name: "BenQ SW321U",
        price: "$1,299",
        expectedDate: "August 2032",
        image: "",
        rating: 4.7,
        description: "32-inch 4K photographer's monitor",
        category: "Monitors"
    },
    {
        id: 108,
        name: "Eizo ColorEdge CG319X-B",
        price: "$2,999",
        expectedDate: "September 2032",
        image: "",
        rating: 4.9,
        description: "31-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 109,
        name: "ASUS ProArt PA32UCX-P",
        price: "$1,999",
        expectedDate: "October 2032",
        image: "",
        rating: 4.8,
        description: "32-inch 4K HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 110,
        name: "LG 27UK850-W",
        price: "$449",
        expectedDate: "November 2032",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD IPS monitor",
        category: "Monitors"
    },
    {
        id: 111,
        name: "Dell P2720DC",
        price: "$549",
        expectedDate: "December 2032",
        image: "",
        rating: 4.8,
        description: "27-inch QHD USB-C monitor",
        category: "Monitors"
    },
    {
        id: 112,
        name: "BenQ PD2725U",
        price: "$1,199",
        expectedDate: "January 2033",
        image: "",
        rating: 4.9,
        description: "27-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 113,
        name: "Samsung Odyssey Neo G9",
        price: "$1,499",
        expectedDate: "February 2033",
        image: "",
        rating: 4.8,
        description: "49-inch curved gaming monitor with Mini LED",
        category: "Monitors"
    },
    {
        id: 114,
        name: "LG 38WN95C-W",
        price: "$1,499",
        expectedDate: "March 2033",
        image: "",
        rating: 4.9,
        description: "38-inch ultra-wide curved monitor",
        category: "Monitors"
    },
    {
        id: 115,
        name: "Dell Alienware AW3423DW",
        price: "$1,699",
        expectedDate: "April 2033",
        image: "",
        rating: 4.8,
        description: "34-inch curved QD-OLED gaming monitor",
        category: "Monitors"
    },
    {
        id: 116,
        name: "Samsung S80A",
        price: "$699",
        expectedDate: "May 2033",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD monitor",
        category: "Monitors"
    },
    {
        id: 117,
        name: "LG 27GL850-B",
        price: "$499",
        expectedDate: "June 2033",
        image: "",
        rating: 4.8,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 118,
        name: "Dell UltraSharp U3219Q",
        price: "$1,199",
        expectedDate: "July 2033",
        image: "",
        rating: 4.9,
        description: "32-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 119,
        name: "BenQ SW271C",
        price: "$1,799",
        expectedDate: "August 2033",
        image: "",
        rating: 4.8,
        description: "27-inch 4K photo editing monitor",
        category: "Monitors"
    },
    {
        id: 120,
        name: "Eizo ColorEdge CG279X",
        price: "$2,499",
        expectedDate: "September 2033",
        image: "",
        rating: 4.9,
        description: "27-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 121,
        name: "ASUS ProArt PA27AC",
        price: "$899",
        expectedDate: "October 2033",
        image: "",
        rating: 4.8,
        description: "27-inch QHD HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 122,
        name: "LG 34WK95U-W",
        price: "$1,199",
        expectedDate: "November 2033",
        image: "",
        rating: 4.7,
        description: "34-inch ultra-wide 5K monitor",
        category: "Monitors"
    },
    {
        id: 123,
        name: "Dell P3421W",
        price: "$899",
        expectedDate: "December 2033",
        image: "",
        rating: 4.8,
        description: "34-inch curved QHD monitor",
        category: "Monitors"
    },
    {
        id: 124,
        name: "BenQ PD3220PE",
        price: "$1,199",
        expectedDate: "January 2034",
        image: "",
        rating: 4.9,
        description: "32-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 125,
        name: "Samsung Odyssey G7",
        price: "$699",
        expectedDate: "February 2034",
        image: "",
        rating: 4.8,
        description: "32-inch curved gaming monitor",
        category: "Monitors"
    },
    {
        id: 126,
        name: "LG 27GP850-B",
        price: "$499",
        expectedDate: "March 2034",
        image: "",
        rating: 4.9,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 127,
        name: "Dell UltraSharp U2723QE",
        price: "$1,199",
        expectedDate: "April 2034",
        image: "",
        rating: 4.8,
        description: "27-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 128,
        name: "BenQ SW321U",
        price: "$1,299",
        expectedDate: "May 2034",
        image: "",
        rating: 4.7,
        description: "32-inch 4K photographer's monitor",
        category: "Monitors"
    },
    {
        id: 129,
        name: "Eizo ColorEdge CG319X-B",
        price: "$2,999",
        expectedDate: "June 2034",
        image: "",
        rating: 4.9,
        description: "31-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 130,
        name: "ASUS ProArt PA32UCX-P",
        price: "$1,999",
        expectedDate: "July 2034",
        image: "",
        rating: 4.8,
        description: "32-inch 4K HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 131,
        name: "LG 27UK850-W",
        price: "$449",
        expectedDate: "August 2034",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD IPS monitor",
        category: "Monitors"
    },
    {
        id: 132,
        name: "Dell P2720DC",
        price: "$549",
        expectedDate: "September 2034",
        image: "",
        rating: 4.8,
        description: "27-inch QHD USB-C monitor",
        category: "Monitors"
    },
    {
        id: 133,
        name: "BenQ PD2725U",
        price: "$1,199",
        expectedDate: "October 2034",
        image: "",
        rating: 4.9,
        description: "27-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 134,
        name: "Samsung Odyssey Neo G9",
        price: "$1,499",
        expectedDate: "November 2034",
        image: "",
        rating: 4.8,
        description: "49-inch curved gaming monitor with Mini LED",
        category: "Monitors"
    },
    {
        id: 135,
        name: "LG 38WN95C-W",
        price: "$1,499",
        expectedDate: "December 2034",
        image: "",
        rating: 4.9,
        description: "38-inch ultra-wide curved monitor",
        category: "Monitors"
    },
    {
        id: 136,
        name: "Dell Alienware AW3423DW",
        price: "$1,699",
        expectedDate: "January 2035",
        image: "",
        rating: 4.8,
        description: "34-inch curved QD-OLED gaming monitor",
        category: "Monitors"
    },
    {
        id: 137,
        name: "Samsung S80A",
        price: "$699",
        expectedDate: "February 2035",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD monitor",
        category: "Monitors"
    },
    {
        id: 138,
        name: "LG 27GL850-B",
        price: "$499",
        expectedDate: "March 2035",
        image: "",
        rating: 4.8,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 139,
        name: "Dell UltraSharp U3219Q",
        price: "$1,199",
        expectedDate: "April 2035",
        image: "",
        rating: 4.9,
        description: "32-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 140,
        name: "BenQ SW271C",
        price: "$1,799",
        expectedDate: "May 2035",
        image: "",
        rating: 4.8,
        description: "27-inch 4K photo editing monitor",
        category: "Monitors"
    },
    {
        id: 141,
        name: "Eizo ColorEdge CG279X",
        price: "$2,499",
        expectedDate: "June 2035",
        image: "",
        rating: 4.9,
        description: "27-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 142,
        name: "ASUS ProArt PA27AC",
        price: "$899",
        expectedDate: "July 2035",
        image: "",
        rating: 4.8,
        description: "27-inch QHD HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 143,
        name: "LG 34WK95U-W",
        price: "$1,199",
        expectedDate: "August 2035",
        image: "",
        rating: 4.7,
        description: "34-inch ultra-wide 5K monitor",
        category: "Monitors"
    },
    {
        id: 144,
        name: "Dell P3421W",
        price: "$899",
        expectedDate: "September 2035",
        image: "",
        rating: 4.8,
        description: "34-inch curved QHD monitor",
        category: "Monitors"
    },
    {
        id: 145,
        name: "BenQ PD3220PE",
        price: "$1,199",
        expectedDate: "October 2035",
        image: "",
        rating: 4.9,
        description: "32-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 146,
        name: "Samsung Odyssey G7",
        price: "$699",
        expectedDate: "November 2035",
        image: "",
        rating: 4.8,
        description: "32-inch curved gaming monitor",
        category: "Monitors"
    },
    {
        id: 147,
        name: "LG 27GP850-B",
        price: "$499",
        expectedDate: "December 2035",
        image: "",
        rating: 4.9,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 148,
        name: "Dell UltraSharp U2723QE",
        price: "$1,199",
        expectedDate: "January 2036",
        image: "",
        rating: 4.8,
        description: "27-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 149,
        name: "BenQ SW321U",
        price: "$1,299",
        expectedDate: "February 2036",
        image: "",
        rating: 4.7,
        description: "32-inch 4K photographer's monitor",
        category: "Monitors"
    },
    {
        id: 150,
        name: "Eizo ColorEdge CG319X-B",
        price: "$2,999",
        expectedDate: "March 2036",
        image: "",
        rating: 4.9,
        description: "31-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 151,
        name: "ASUS ProArt PA32UCX-P",
        price: "$1,999",
        expectedDate: "April 2036",
        image: "",
        rating: 4.8,
        description: "32-inch 4K HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 152,
        name: "LG 27UK850-W",
        price: "$449",
        expectedDate: "May 2036",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD IPS monitor",
        category: "Monitors"
    },
    {
        id: 153,
        name: "Dell P2720DC",
        price: "$549",
        expectedDate: "June 2036",
        image: "",
        rating: 4.8,
        description: "27-inch QHD USB-C monitor",
        category: "Monitors"
    },
    {
        id: 154,
        name: "BenQ PD2725U",
        price: "$1,199",
        expectedDate: "July 2036",
        image: "",
        rating: 4.9,
        description: "27-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 155,
        name: "Samsung Odyssey Neo G9",
        price: "$1,499",
        expectedDate: "August 2036",
        image: "",
        rating: 4.8,
        description: "49-inch curved gaming monitor with Mini LED",
        category: "Monitors"
    },
    {
        id: 156,
        name: "LG 38WN95C-W",
        price: "$1,499",
        expectedDate: "September 2036",
        image: "",
        rating: 4.9,
        description: "38-inch ultra-wide curved monitor",
        category: "Monitors"
    },
    {
        id: 157,
        name: "Dell Alienware AW3423DW",
        price: "$1,699",
        expectedDate: "October 2036",
        image: "",
        rating: 4.8,
        description: "34-inch curved QD-OLED gaming monitor",
        category: "Monitors"
    },
    {
        id: 158,
        name: "Samsung S80A",
        price: "$699",
        expectedDate: "November 2036",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD monitor",
        category: "Monitors"
    },
    {
        id: 159,
        name: "LG 27GL850-B",
        price: "$499",
        expectedDate: "December 2036",
        image: "",
        rating: 4.8,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 160,
        name: "Dell UltraSharp U3219Q",
        price: "$1,199",
        expectedDate: "January 2037",
        image: "",
        rating: 4.9,
        description: "32-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 161,
        name: "BenQ SW271C",
        price: "$1,799",
        expectedDate: "February 2037",
        image: "",
        rating: 4.8,
        description: "27-inch 4K photo editing monitor",
        category: "Monitors"
    },
    {
        id: 162,
        name: "Eizo ColorEdge CG279X",
        price: "$2,499",
        expectedDate: "March 2037",
        image: "",
        rating: 4.9,
        description: "27-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 163,
        name: "ASUS ProArt PA27AC",
        price: "$899",
        expectedDate: "April 2037",
        image: "",
        rating: 4.8,
        description: "27-inch QHD HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 164,
        name: "LG 34WK95U-W",
        price: "$1,199",
        expectedDate: "May 2037",
        image: "",
        rating: 4.7,
        description: "34-inch ultra-wide 5K monitor",
        category: "Monitors"
    },
    {
        id: 165,
        name: "Dell P3421W",
        price: "$899",
        expectedDate: "June 2037",
        image: "",
        rating: 4.8,
        description: "34-inch curved QHD monitor",
        category: "Monitors"
    },
    {
        id: 166,
        name: "BenQ PD3220PE",
        price: "$1,199",
        expectedDate: "July 2037",
        image: "",
        rating: 4.9,
        description: "32-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 167,
        name: "Samsung Odyssey G7",
        price: "$699",
        expectedDate: "August 2037",
        image: "",
        rating: 4.8,
        description: "32-inch curved gaming monitor",
        category: "Monitors"
    },
    {
        id: 168,
        name: "LG 27GP850-B",
        price: "$499",
        expectedDate: "September 2037",
        image: "",
        rating: 4.9,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 169,
        name: "Dell UltraSharp U2723QE",
        price: "$1,199",
        expectedDate: "October 2037",
        image: "",
        rating: 4.8,
        description: "27-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 170,
        name: "BenQ SW321U",
        price: "$1,299",
        expectedDate: "November 2037",
        image: "",
        rating: 4.7,
        description: "32-inch 4K photographer's monitor",
        category: "Monitors"
    },
    {
        id: 171,
        name: "Eizo ColorEdge CG319X-B",
        price: "$2,999",
        expectedDate: "December 2037",
        image: "",
        rating: 4.9,
        description: "31-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 172,
        name: "ASUS ProArt PA32UCX-P",
        price: "$1,999",
        expectedDate: "January 2038",
        image: "",
        rating: 4.8,
        description: "32-inch 4K HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 173,
        name: "LG 27UK850-W",
        price: "$449",
        expectedDate: "February 2038",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD IPS monitor",
        category: "Monitors"
    },
    {
        id: 174,
        name: "Dell P2720DC",
        price: "$549",
        expectedDate: "March 2038",
        image: "",
        rating: 4.8,
        description: "27-inch QHD USB-C monitor",
        category: "Monitors"
    },
    {
        id: 175,
        name: "BenQ PD2725U",
        price: "$1,199",
        expectedDate: "April 2038",
        image: "",
        rating: 4.9,
        description: "27-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 176,
        name: "Samsung Odyssey Neo G9",
        price: "$1,499",
        expectedDate: "May 2038",
        image: "",
        rating: 4.8,
        description: "49-inch curved gaming monitor with Mini LED",
        category: "Monitors"
    },
    {
        id: 177,
        name: "LG 38WN95C-W",
        price: "$1,499",
        expectedDate: "June 2038",
        image: "",
        rating: 4.9,
        description: "38-inch ultra-wide curved monitor",
        category: "Monitors"
    },
    {
        id: 178,
        name: "Dell Alienware AW3423DW",
        price: "$1,699",
        expectedDate: "July 2038",
        image: "",
        rating: 4.8,
        description: "34-inch curved QD-OLED gaming monitor",
        category: "Monitors"
    },
    {
        id: 179,
        name: "Samsung S80A",
        price: "$699",
        expectedDate: "August 2038",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD monitor",
        category: "Monitors"
    },
    {
        id: 180,
        name: "LG 27GL850-B",
        price: "$499",
        expectedDate: "September 2038",
        image: "",
        rating: 4.8,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 181,
        name: "Dell UltraSharp U3219Q",
        price: "$1,199",
        expectedDate: "October 2038",
        image: "",
        rating: 4.9,
        description: "32-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 182,
        name: "BenQ SW271C",
        price: "$1,799",
        expectedDate: "November 2038",
        image: "",
        rating: 4.8,
        description: "27-inch 4K photo editing monitor",
        category: "Monitors"
    },
    {
        id: 183,
        name: "Eizo ColorEdge CG279X",
        price: "$2,499",
        expectedDate: "December 2038",
        image: "",
        rating: 4.9,
        description: "27-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 184,
        name: "ASUS ProArt PA27AC",
        price: "$899",
        expectedDate: "January 2039",
        image: "",
        rating: 4.8,
        description: "27-inch QHD HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 185,
        name: "LG 34WK95U-W",
        price: "$1,199",
        expectedDate: "February 2039",
        image: "",
        rating: 4.7,
        description: "34-inch ultra-wide 5K monitor",
        category: "Monitors"
    },
    {
        id: 186,
        name: "Dell P3421W",
        price: "$899",
        expectedDate: "March 2039",
        image: "",
        rating: 4.8,
        description: "34-inch curved QHD monitor",
        category: "Monitors"
    },
    {
        id: 187,
        name: "BenQ PD3220PE",
        price: "$1,199",
        expectedDate: "April 2039",
        image: "",
        rating: 4.9,
        description: "32-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 188,
        name: "Samsung Odyssey G7",
        price: "$699",
        expectedDate: "May 2039",
        image: "",
        rating: 4.8,
        description: "32-inch curved gaming monitor",
        category: "Monitors"
    },
    {
        id: 189,
        name: "LG 27GP850-B",
        price: "$499",
        expectedDate: "June 2039",
        image: "",
        rating: 4.9,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 190,
        name: "Dell UltraSharp U2723QE",
        price: "$1,199",
        expectedDate: "July 2039",
        image: "",
        rating: 4.8,
        description: "27-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 191,
        name: "BenQ SW321U",
        price: "$1,299",
        expectedDate: "August 2039",
        image: "",
        rating: 4.7,
        description: "32-inch 4K photographer's monitor",
        category: "Monitors"
    },
    {
        id: 192,
        name: "Eizo ColorEdge CG319X-B",
        price: "$2,999",
        expectedDate: "September 2039",
        image: "",
        rating: 4.9,
        description: "31-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 193,
        name: "ASUS ProArt PA32UCX-P",
        price: "$1,999",
        expectedDate: "October 2039",
        image: "",
        rating: 4.8,
        description: "32-inch 4K HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 194,
        name: "LG 27UK850-W",
        price: "$449",
        expectedDate: "November 2039",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD IPS monitor",
        category: "Monitors"
    },
    {
        id: 195,
        name: "Dell P2720DC",
        price: "$549",
        expectedDate: "December 2039",
        image: "",
        rating: 4.8,
        description: "27-inch QHD USB-C monitor",
        category: "Monitors"
    },
    {
        id: 196,
        name: "BenQ PD2725U",
        price: "$1,199",
        expectedDate: "January 2040",
        image: "",
        rating: 4.9,
        description: "27-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 197,
        name: "Samsung Odyssey Neo G9",
        price: "$1,499",
        expectedDate: "February 2040",
        image: "",
        rating: 4.8,
        description: "49-inch curved gaming monitor with Mini LED",
        category: "Monitors"
    },
    {
        id: 198,
        name: "LG 38WN95C-W",
        price: "$1,499",
        expectedDate: "March 2040",
        image: "",
        rating: 4.9,
        description: "38-inch ultra-wide curved monitor",
        category: "Monitors"
    },
    {
        id: 199,
        name: "Dell Alienware AW3423DW",
        price: "$1,699",
        expectedDate: "April 2040",
        image: "",
        rating: 4.8,
        description: "34-inch curved QD-OLED gaming monitor",
        category: "Monitors"
    },
    {
        id: 200,
        name: "Samsung S80A",
        price: "$699",
        expectedDate: "May 2040",
        image: "",
        rating: 4.7,
        description: "27-inch 4K UHD monitor",
        category: "Monitors"
    },
    {
        id: 201,
        name: "LG 27GL850-B",
        price: "$499",
        expectedDate: "June 2040",
        image: "",
        rating: 4.8,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    },
    {
        id: 202,
        name: "Dell UltraSharp U3219Q",
        price: "$1,199",
        expectedDate: "July 2040",
        image: "",
        rating: 4.9,
        description: "32-inch 4K USB-C monitor",
        category: "Monitors"
    },
    {
        id: 203,
        name: "BenQ SW271C",
        price: "$1,799",
        expectedDate: "August 2040",
        image: "",
        rating: 4.8,
        description: "27-inch 4K photo editing monitor",
        category: "Monitors"
    },
    {
        id: 204,
        name: "Eizo ColorEdge CG279X",
        price: "$2,499",
        expectedDate: "September 2040",
        image: "",
        rating: 4.9,
        description: "27-inch 4K color management monitor",
        category: "Monitors"
    },
    {
        id: 205,
        name: "ASUS ProArt PA27AC",
        price: "$899",
        expectedDate: "October 2040",
        image: "",
        rating: 4.8,
        description: "27-inch QHD HDR professional monitor",
        category: "Monitors"
    },
    {
        id: 206,
        name: "LG 34WK95U-W",
        price: "$1,199",
        expectedDate: "November 2040",
        image: "",
        rating: 4.7,
        description: "34-inch ultra-wide 5K monitor",
        category: "Monitors"
    },
    {
        id: 207,
        name: "Dell P3421W",
        price: "$899",
        expectedDate: "December 2040",
        image: "",
        rating: 4.8,
        description: "34-inch curved QHD monitor",
        category: "Monitors"
    },
    {
        id: 208,
        name: "BenQ PD3220PE",
        price: "$1,199",
        expectedDate: "January 2041",
        image: "",
        rating: 4.9,
        description: "32-inch 4K designer monitor",
        category: "Monitors"
    },
    {
        id: 209,
        name: "Samsung Odyssey G7",
        price: "$699",
        expectedDate: "February 2041",
        image: "",
        rating: 4.8,
        description: "32-inch curved gaming monitor",
        category: "Monitors"
    },
    {
        id: 210,
        name: "LG 27GP850-B",
        price: "$499",
        expectedDate: "March 2041",
        image: "",
        rating: 4.9,
        description: "27-inch QHD gaming monitor",
        category: "Monitors"
    }
];

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Search = () => {
    const query = useQuery().get("query")?.toLowerCase() || "";

    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query)
    );

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Search Results</h1>
                {filteredProducts.length === 0 ? (
                    <p>No products found for "{query}"</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="border rounded-lg p-4 bg-white">
                                <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-32 object-cover mb-2 rounded" />
                                <h2 className="font-semibold">{product.name}</h2>
                                <p className="text-sm text-muted-foreground">{product.description}</p>
                                <p className="font-bold">{product.price}</p>
                                <p className="text-xs">{product.category}</p>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Search;