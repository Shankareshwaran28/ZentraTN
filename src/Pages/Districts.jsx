import React, { useState } from "react";
import districtsData from "../data/districts";
import DistrictCard from "../Components/DistrictCard";

const Districts = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [type, setType] = useState("All");

  // Filter Logic
  const filteredDistricts = districtsData.filter((d) => {
    return (
      d.name.toLowerCase().includes(search.toLowerCase()) &&
      (region === "All" || d.region === region) &&
      (type === "All" || d.type === type)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-12 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Explore Districts
      </h1>

      {/* 🔍 Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">

        {/* Search */}
        <input
          type="text"
          placeholder="Search district..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border outline-none w-full md:w-64"
        />

        {/* Region Filter */}
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="px-4 py-2 rounded-lg border"
        >
          <option>All</option>
          <option>North</option>
          <option>South</option>
          <option>Delta</option>
          <option>West</option>
        </select>

        {/* Type Filter */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-4 py-2 rounded-lg border"
        >
          <option>All</option>
          <option>Temple</option>
          <option>Hill</option>
          <option>Beach</option>
          <option>City</option>
        </select>

      </div>

      {/* 🧱 Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredDistricts.length > 0 ? (
          filteredDistricts.map((district) => (
            <DistrictCard key={district.id} district={district} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No districts found
          </p>
        )}
      </div>

    </div>
  );
};

export default Districts;