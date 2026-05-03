import React from "react";
import categories from "../data/Explorecategories";
import CategoryCard from "../components/ExploreCategoryCard";

const Explore = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-12 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Explore by Interest
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Discover destinations based on what you love
      </p>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}

      </div>

    </div>
  );
};

export default Explore;