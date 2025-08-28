import React from "react";
import gallery1 from "../../Images/Gallery-Collection/1.webp";
import gallery2 from "../../Images/Gallery-Collection/2.jpg";
import gallery3 from "../../Images/Gallery-Collection/3.jpg";
import gallery4 from "../../Images/Gallery-Collection/4.jpg";
import gallery5 from "../../Images/Gallery-Collection/5.avif";
import gallery6 from "../../Images/Gallery-Collection/6.jpg";

export default function GalleryCollection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden md:overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#BE7F58] text-sm uppercase tracking-wide mb-4 font-medium">
            Discover our featured treatments
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-domine font-medium text-gray-700 leading-tight">
            Gallery collection
            <br />
            of our services.
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Top Row - 2 Large Images */}
          <div className="col-span-1 lg:col-span-2">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={gallery1}
                alt="Facial treatment with mask"
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={gallery2}
                alt="Professional skincare treatment"
                className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Bottom Row - 3 Images */}
          <div className="col-span-1">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={gallery3}
                alt="Skincare consultation"
                className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={gallery4}
                alt="Advanced treatment procedure"
                className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={gallery5}
                alt="Relaxing facial massage"
                className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#c98963] hover:bg-[#be7f58] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
            View All Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
