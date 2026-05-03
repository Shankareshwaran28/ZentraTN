import React from "react";
import {
  Mountain,
  Utensils,
  Palmtree,
  Landmark,
  PartyPopper,
} from "lucide-react";

const categories = [
  { name: "Temples", icon: <Landmark /> },
  { name: "Hill Stations", icon: <Mountain /> },
  { name: "Beaches", icon: <Palmtree /> },
  { name: "Food", icon: <Utensils /> },
  { name: "Festivals", icon: <PartyPopper /> },
  { name: "Heritage", icon: <Landmark /> },
];

const CategoryBar = () => {
  return (
    <div className="absolute bottom-5 w-full flex justify-center z-40">
      <div className="bg-black/70 backdrop-blur-md text-white rounded-full px-6 py-4 flex gap-8 shadow-lg">
        {categories.map((cat, i) => (
          <div key={i} className="flex items-center gap-2 cursor-pointer hover:text-yellow-400">
            {cat.icon}
            <span className="text-sm">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;