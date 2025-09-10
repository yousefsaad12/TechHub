import { FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 via-gray-75 to-gray-100 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Main Content */}
        <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <div className="inline-flex items-center text-gray-900 font-semibold text-base sm:text-lg md:text-xl cursor-pointer group">
              <span className="px-2 sm:px-3 py-1 border-2 border-gray-800 rounded-full text-gray-800 mr-2 sm:mr-3 text-xs sm:text-sm font-mono group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                &lt;/&gt;
              </span>
              <span className="group-hover:text-gray-700 transition-colors duration-300">
                TechHub
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center sm:justify-end space-x-4 sm:space-x-6">
            <a
              href="https://www.linkedin.com/in/yousefsaad1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300 p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="https://www.tiktok.com/@codecraftx?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#010101] hover:scale-110 transition-all duration-300 p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
              aria-label="TikTok"
            >
              <FaTiktok className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-red-600 hover:scale-110 transition-all duration-300 p-1.5 sm:p-2 rounded-full hover:bg-gray-100"
              aria-label="YouTube"
            >
              <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4 sm:my-6"></div>

        {/* Copyright */}
        <div className="text-center space-y-1">
          <p className="text-gray-500 text-xs sm:text-sm font-medium">
            &copy; {new Date().getFullYear()} TechHub. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Built with love by Yousef Saad
          </p>
        </div>
      </div>
    </footer>
  );
}
