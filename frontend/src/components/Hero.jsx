import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className=" mb-50">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Heading */}
        <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight tracking-tight max-w-3xl mx-auto">
          Summaries That Actually <span className="text-gray-500">Save</span>{" "}
          Your Time.
        </h1>

        {/* Subheading */}
        <p className=" mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
          TechHub condenses programming books and tutorials into clear,
          actionable insights—learn fast, build faster.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            to="/books"
            className=" px-8 py-3 rounded-4xl bg-black text-white font-medium 
                       hover:bg-white hover:text-black hover:border hover:border-black 
                       transition-colors duration-300 tracking-wide text-base sm:text-lg md:text-xl
                       "
          >
            Get Started
          </Link>
        </div>

        {/* Extra small text */}
        <p className="mt-8 text-sm sm:text-base text-gray-400 tracking-wide ">
          Free to start · No credit card required
        </p>
      </div>
    </section>
  );
}
