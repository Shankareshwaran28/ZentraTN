import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-16 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        About ZentraTN
      </h1>

      {/* Content Card */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">

        {/* Why */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-orange-500">
            Why this site?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This website was created to make exploring Tamil Nadu simple and enjoyable.
            Instead of searching across multiple sources, users can find everything
            in one place — from districts and culture to food and travel spots.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-orange-500">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            👉 “All Tamil Nadu districts in one place” — a single platform where
            people can explore, learn, and experience the beauty, culture, and
            diversity of Tamil Nadu.
          </p>
        </div>

        {/* Future */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-orange-500">
            What’s Next?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We plan to add more features like maps, travel guides, food discovery,
            and real-time recommendations to enhance your journey.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;