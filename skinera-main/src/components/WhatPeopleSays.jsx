import React, { useState, useEffect } from "react";
import sectionImage from "../../Images/what-people-says/1.jpg";
import petals from "../../Images/what-people-says/petals-3.png";

// Profile images
import anupamaProfile from "../../Images/what-people-says/Peoples-profile/Anupama-rani.jpg";
import mukeshProfile from "../../Images/what-people-says/Peoples-profile/mukesh-rawani.jpg";
import roshanProfile from "../../Images/what-people-says/Peoples-profile/roshan khalil.jpeg";
import sunitaProfile from "../../Images/what-people-says/Peoples-profile/sunita kumari.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Monika Tiwari",
    role: "Customer",
    image: anupamaProfile,
    text: "I had been struggling with acne scars for years and tried countless treatments without success. After visiting this clinic, Dr. Kothari recommended a personalized skincare regimen that has completely transformed my skin. The staff is incredibly knowledgeable and caring. I finally have the confidence to go makeup-free!",
  },
  {
    id: 2,
    name: "Mukesh Rawani",
    role: "Customer",
    image: mukeshProfile,
    text: "Amazing service and professional staff. The cosmetology treatments have transformed my skin completely. I couldn't be happier with the results and highly recommend this clinic to everyone.",
  },
  {
    id: 3,
    name: "Roshan Khalil",
    role: "Customer",
    image: roshanProfile,
    text: "Exceptional care and attention to detail. The team is knowledgeable and the treatments are effective. My skin has never looked better thanks to their expertise and personalized approach.",
  },
  {
    id: 4,
    name: "Sunita Kumari",
    role: "Customer",
    image: sunitaProfile,
    text: "Outstanding experience from start to finish. The clinic is modern, clean, and the staff is incredibly professional. The results exceeded my expectations and I feel more confident than ever.",
  },
];

export default function WhatPeopleSays() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-change testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = testimonials[currentTestimonial];

  return (
    <section className="relative bg-gradient-to-r from-orange-200 via-orange-100 to-orange-50 py-14 sm:py-18 lg:py-24 overflow-hidden">
      {/* Decorative petals */}
      <img
        src={petals}
        alt=""
        className="absolute top-4 right-4 w-16 h-16 opacity-60"
      />
      <img
        src={petals}
        alt=""
        className="absolute bottom-8 left-8 w-12 h-12 opacity-40"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-domine font-medium text-gray-800">
            What People Says!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Testimonial Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg relative">
              {/* Quote icon */}
              <div className="absolute bottom-4 right-6">
                <svg
                  className="w-12 h-12 text-gray-300 rotate-180"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Testimonial text */}
              <div className="mb-6">
                <p className="text-gray-600 text-base leading-relaxed line-clamp-5 sm:line-clamp-none">
                  {currentReview.text}
                </p>
              </div>

              {/* Customer info */}
              <div className="flex items-center gap-4">
                <img
                  src={currentReview.image}
                  alt={currentReview.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {currentReview.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{currentReview.role}</p>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-orange-400"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={sectionImage}
                alt="Happy customer with beautiful skin"
                className="w-full h-[320px] sm:h-[460px] lg:h-[560px] object-cover rounded-2xl shadow-lg"
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-60"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-200 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
