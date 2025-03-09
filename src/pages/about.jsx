import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <motion.h1
        className="text-6xl font-extrabold mb-6 text-center text-[#c79c74]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About DARZII
      </motion.h1>

      {/* Motto */}
      <motion.p
        className="text-2xl font-semibold italic text-center max-w-3xl text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        "Talk Less, Work More – Style with Purpose, Fashion with Discipline."
      </motion.p>

      {/* Story Section */}
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-[#c79c74] mb-4">Our Journey</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          DARZII was founded with a vision—to redefine fashion by blending timeless elegance with the mindset of a hustler.
          Our inspiration comes from the relentless pursuit of success, the discipline of champions, and the courage of leaders.
        </p>
      </motion.div>

      {/* Inspiration Section */}
      <motion.div
        className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl text-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-[#c79c74] mb-4">Inspired by Legends</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          "The temporary satisfaction of quitting is outweighed by the eternal suffering of being nobody." - Andrew Tate
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-12 flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="/shop"
          className="px-6 py-3 bg-[#c79c74] text-black font-semibold rounded-lg shadow-md hover:bg-[#a37850] transition duration-300"
        >
          Explore Our Collection
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-[#c79c74] text-[#c79c74] font-semibold rounded-lg shadow-md hover:bg-[#c79c74] hover:text-black transition duration-300"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  );
}