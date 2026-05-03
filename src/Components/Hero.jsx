import React from "react";
import bgImage from "../assets/Home2.png";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src={bgImage}
        alt="Tamil Nadu"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

        <p className="tracking-[4px] text-sm mb-3 text-gray-300">
          WELCOME TO
        </p>

        {/* Title with Google Font */}
        <h1 className="text-5xl md:text-7xl leading-tight">
          <span style={{ fontFamily: "Water Brush, cursive" }}>
            Tamil
          </span>{" "}
          <span style={{ fontFamily: "Water Brush, cursive" }}className="text-yellow-400 font-bold">
            Nadu
          </span>
        </h1>

       <p 
  style={{ fontFamily: "'Climate Crisis', sans-serif" }}
  className="mt-4 text-lg md:text-xl text-gray-200"
>
          Explore. Experience. Embrace.
        </p>

        <p className="mt-4 max-w-2xl text-sm md:text-base text-gray-300">
          From ancient temples and royal heritage to serene beaches and lush hill
          stations — discover the beauty, culture and flavors of Tamil Nadu.
        </p>

        {/* Search Box */}
        <div className="mt-8 flex justify-center w-full px-4">
          <div className="flex bg-white rounded-full overflow-hidden shadow-xl w-full max-w-[550px]">

            <input
              type="text"
              placeholder="Search for districts, places, food..."
              className="flex-1 px-5 py-3 text-black outline-none"
            />

            {/* Rounded Button */}
            <button className="bg-orange-500 px-6 text-white font-medium rounded-full m-1 hover:bg-orange-600 transition">
              Explore →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;