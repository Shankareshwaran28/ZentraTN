import React from "react";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer">

      {/* Image */}
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{food.name}</h2>
        <p className="text-sm text-gray-500">{food.district}</p>

        {/* Future Feature */}
        <button className="mt-3 text-orange-500 text-sm font-medium hover:underline">
          Where to try →
        </button>
      </div>
    </div>
  );
};

export default FoodCard;