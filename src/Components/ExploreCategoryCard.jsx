import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/explore/${category.name.toLowerCase()}`)}
      className="relative group rounded-xl overflow-hidden cursor-pointer shadow-lg"
    >
      {/* Image */}
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="text-4xl mb-2">{category.icon}</span>
        <h2 className="text-2xl font-bold">{category.name}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;