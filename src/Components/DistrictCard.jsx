import React from "react";
import { Link } from "react-router-dom";

const DistrictCard = ({ district }) => {
  return (
    <Link to={`/district/${district.id}`} className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer block">

      {/* Image */}
      <img
        src={district.image}
        alt={district.name}
        className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

      {/* Text */}
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold">{district.name}</h2>
        <p className="text-sm text-gray-200">{district.tagline}</p>
      </div>
    </Link>
  );
};

export default DistrictCard;