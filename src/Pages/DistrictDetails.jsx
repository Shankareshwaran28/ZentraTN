import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import districts from "../data/districts";
import { MapPin, Utensils, Music, Calendar } from "lucide-react";

const DistrictDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const district = districts.find((d) => d.id === parseInt(id));

  if (!district) {
    return <h1 className="text-center mt-10">District not found</h1>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="m-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        ← Back
      </button>

      {/* 🌄 HERO HEADER */}
      <div className="relative h-[70vh] w-full">
        <img
          src={district.image}
          alt={district.name}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Title */}
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            {district.name}
          </h1>
          <p className="text-lg mt-2 text-gray-200">
            {district.tagline}
          </p>
        </div>
      </div>

      {/* 📄 CONTENT */}
      <div className="px-6 md:px-16 py-12 space-y-12">

        {/* 📖 HISTORY SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-4 border-l-4 border-yellow-400 pl-3">
            History
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            {district.history}
          </p>
        </section>

        {/* ℹ️ INFO SECTION */}
        <section className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700">
              {district.overview}
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Info</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Region:</strong> {district.region}</li>
              <li><strong>Type:</strong> {district.type}</li>
              <li><strong>Famous For:</strong> {district.famousFor}</li>
            </ul>
          </div>

        </section>

        {/* 🏛️ FAMOUS PLACES */}
        <section>
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-yellow-400 pl-3">
            Famous Places
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {district.famousPlaces?.map((place, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
                <div className="h-40 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">📷 {place.name}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{place.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        

        {/* 🗺️ MAP SECTION */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="text-green-500" />
            Location & Nearby Places
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-gray-400" />
                <p className="mt-2 text-gray-500">{district.name}, Tamil Nadu</p>
                <p className="text-sm text-gray-400">Coordinates: {district.map?.location}</p>
              </div>
            </div>

            {/* Nearby Places */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Nearby Places</h3>
              <div className="flex flex-wrap gap-2">
                {district.map?.nearby?.map((place, index) => (
                  <span key={index} className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DistrictDetails;