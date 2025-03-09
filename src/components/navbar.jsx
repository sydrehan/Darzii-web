import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] text-[#f5e1da] px-6 py-4 flex justify-between items-center shadow-lg border-b-4 border-[#c79c74]">
      {/* Brand Name */}
      <div className="text-3xl font-extrabold tracking-wide retro-text">
        <Link to="/" className="hover:text-[#c79c74] transition duration-300">
          DARZII
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="space-x-8 text-lg font-semibold">
        
        <Link to="/shop" className="hover:text-[#c79c74] transition duration-300">
          Shop
        </Link>
        <Link to="/contact" className="hover:text-[#c79c74] transition duration-300">
          Contact
        </Link>
        <Link to="/about" className="hover:text-[#c79c74] transition duration-300">
          About Us
        </Link>
      </div>
      {/* Custom Font Style */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        .retro-text {
          font-family: 'Playfair Display', serif;
          text-transform: uppercase;
          letter-spacing: 3px;
        }
      `}</style>
    </nav>
  );
}
