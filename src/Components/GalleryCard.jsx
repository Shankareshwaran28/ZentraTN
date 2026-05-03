import React from "react";

const GalleryCard = ({ item }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg group">

      {/* Image */}
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={item.district}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
        />
      ) : (
        <video
          src={item.src}
          controls
          className="w-full h-60 object-cover"
        />
      )}

      {/* Info */}
      <div className="p-3 bg-white">
        <h3 className="font-semibold">{item.district}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>
      </div>

    </div>
  );
};

export default GalleryCard;