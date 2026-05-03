import React, { useState } from "react";
import galleryData from "../data/gallery";
import GalleryCard from "../components/GalleryCard";

const categories = ["All", "Nature", "Culture", "Food"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter
  const filteredData =
    selectedCategory === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === selectedCategory
        );

  // Group by district
  const grouped = filteredData.reduce((acc, item) => {
    if (!acc[item.district]) acc[item.district] = [];
    acc[item.district].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-12 py-10">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-6">
        Gallery 📸
      </h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* District-wise Sections */}
      {Object.keys(grouped).map((district) => (
        <div key={district} className="mb-12">

          {/* District Title */}
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-yellow-400 pl-3">
            {district}
          </h2>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {grouped[district].map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>

        </div>
      ))}

      {/* Empty */}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500">
          No media found
        </p>
      )}
    </div>
  );
};

export default Gallery;