import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/custom.css"; // Import the custom font styles
import bg from "../assets/images/frontbg.jpg"; // ✅ Correctly import the image

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }} // ✅ Use the imported image correctly
    >
      <div className="bg-black bg-opacity-60 min-h-screen flex flex-col">
        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Elevate Your Style
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Where every stitch inspires greatness. Talk less, work more.
            </p>
            <div className="space-x-4">
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-white text-black font-semibold rounded-md shadow-lg transition duration-300"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 border border-white text-white font-semibold rounded-md shadow-lg transition duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </main>

        {/* Footer with Inspirational Quote */}
        <footer className="p-6 bg-gray-900">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <p className="italic text-gray-300 text-lg mb-2">
              “The temporary satisfaction of quitting is outweighed by the eternal suffering of being nobody.” – Andrew Tate
            </p>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} DARZII. All rights reserved.
            </p>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}
