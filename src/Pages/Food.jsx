import React, { useState } from "react";
import foodData from "../data/food";
import FoodCard from "../components/FoodCard";

const Food = () => {
  const [search, setSearch] = useState("");

  // Filter by search
  const filteredFood = foodData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Group by district
  const groupedFood = filteredFood.reduce((acc, item) => {
    if (!acc[item.district]) {
      acc[item.district] = [];
    }
    acc[item.district].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-12 py-10">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Taste of Tamil Nadu 🍛
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Discover famous dishes from different districts
      </p>

      {/* 🔍 Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-full max-w-md rounded-lg border outline-none"
        />
      </div>

      {/* 🍽️ District-wise Sections */}
      {Object.keys(groupedFood).map((district) => (
        <div key={district} className="mb-12">

          {/* District Title */}
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-orange-500 pl-3">
            {district}
          </h2>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {groupedFood[district].map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>

        </div>
      ))}

      {/* Empty State */}
      {filteredFood.length === 0 && (
        <p className="text-center text-gray-500">No food found</p>
      )}

    </div>
  );
};

export default Food;