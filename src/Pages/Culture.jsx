import React from "react";
import cultureData from "../data/culture";
import CultureCard from "../components/CultureCard";

const Section = ({ title, data }) => {
  return (
    <div className="mb-16">

      {/* Section Title */}
      <div className="flex items-center mb-8">
        <div className="w-10 h-[2px] bg-yellow-500 mr-4"></div>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-wide">
          {title}
        </h2>
      </div>

      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <CultureCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Culture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 px-4 md:px-12 py-12">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Culture of Tamil Nadu
        </h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded"></div>
        <p className="text-gray-600 mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Discover the traditions, heritage, and artistic richness that define Tamil Nadu.
        </p>
      </div>

      {/* Sections */}
      <Section title="Festivals" data={cultureData.festivals} />
      <Section title="Dance" data={cultureData.dance} />
      <Section title="Traditions" data={cultureData.traditions} />

    </div>
  );
};

export default Culture;