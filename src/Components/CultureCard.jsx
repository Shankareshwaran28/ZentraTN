import React from "react";

const CultureCard = ({ item }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-500 cursor-pointer">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-700"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition"></div>

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-white translate-y-4 group-hover:translate-y-0 transition duration-500">
        <h2 className="text-lg md:text-xl font-semibold tracking-wide">
          {item.name}
        </h2>
        <p className="text-sm text-gray-200 mt-1 opacity-0 group-hover:opacity-100 transition duration-500">
          {item.desc}
        </p>
      </div>

      {/* Subtle Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition"></div>
    </div>
  );
};

export default CultureCard;