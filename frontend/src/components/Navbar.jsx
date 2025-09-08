import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" }
  ];

  return (
    <nav className="bg-gradient-to-r from-white/80 via-white/90 to-white/80 backdrop-blur-sm border-b border-neutral-200/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 sm:h-18 items-center">
          {/* Logo */}
          <Link 
            to="/"
            className="inline-flex items-center text-gray-900 font-semibold text-lg sm:text-xl md:text-2xl cursor-pointer group"
          >
            <span className="px-2 sm:px-3 py-1 border-2 border-gray-800 rounded-full text-gray-800 mr-2 sm:mr-3 text-xs sm:text-sm font-mono group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
              &lt;/&gt;
            </span>
            <span className="group-hover:text-gray-700 transition-colors duration-300">TechHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-neutral-700 font-medium px-3 py-2 rounded-lg hover:text-black transition-colors duration-300
                           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black
                           after:transition-all after:duration-300 hover:after:w-full
                           hover:bg-gray-50/50"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-black p-2 rounded-lg hover:bg-gray-50/50 transition-all duration-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-6 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-neutral-700 font-medium px-3 py-3 rounded-lg hover:text-black hover:bg-gray-50/50 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}