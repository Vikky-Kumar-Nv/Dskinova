import React from "react";
import girl from "../../Images/Hero/girl.png";
import backFlower from "../../Images/Hero/girl-back-flower.png";
import frontFlower from "../../Images/Hero/girl-front-flower.png";
import petals1 from "../../Images/Hero/petals-1.png";
import petals2 from "../../Images/Hero/petals-2.png";

export default function Hero({ onBookAppointment }) {
  return (
    <section className="relative bg-[#e0a075] text-white overflow-hidden md:overflow-visible">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[56vh] sm:min-h-[65vh] lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left content */}
        <div className="py-14 sm:py-16 lg:py-0 lg:pr-8 z-20">
          <h1 className="leading-tight font-domine font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[80px]">
            <span className="block lg:whitespace-nowrap">Care Your Skin,</span>
            <span className="block lg:whitespace-nowrap">Care Your Beauty</span>
          </h1>
          <p className="mt-5 max-w-xl text-white/95 text-base sm:text-lg">
            Personalized cosmetology care for healthy, glowing skin. Expert
            advice, gentle treatments, and routines that fit your life.
          </p>

          <div className="mt-8">
            <button
              type="button"
              onClick={onBookAppointment}
              className="inline-block bg-white text-[#c67c54] border border-white hover:bg-white/90 px-6 sm:px-8 py-3 text-base rounded-md transition-colors shadow"
            >
              Book an Appointment
            </button>
          </div>
        </div>

        {/* Right visual area with images */}
        <div className="relative h-[32vh] sm:h-[45vh] lg:h-full lg:min-h-[70vh]">
          {/* Back floral line art */}
          <img
            src={backFlower}
            alt=""
            className="pointer-events-none select-none absolute right-0 md:right-4 lg:right-8 top-0 md:top-2 lg:top-0 h-[62%] md:h-[88%] lg:h-[112%] max-w-none w-auto opacity-60 z-0 hidden sm:block"
          />

          {/* Main subject */}
          <img
            src={girl}
            alt=""
            className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 right-auto sm:right-0 bottom-0 h-[100%] sm:h-[86%] lg:h-[95%] max-w-none w-auto object-contain z-10"
          />

          {/* Front floral line art over the shoulder */}
          <img
            src={frontFlower}
            alt=""
            className="pointer-events-none select-none absolute left-4 sm:left-6 md:left-8 bottom-0 h-[34%] sm:h-[38%] md:h-[44%] max-w-none w-auto opacity-80 z-20"
          />

          {/* Petals highlights */}
          <img
            src={petals1}
            alt=""
            className="pointer-events-none select-none absolute left-[16%] sm:left-[20%] top-12 sm:top-16 h-8 sm:h-10 max-w-none w-auto rotate-[-10deg] z-30"
          />
          <img
            src={petals2}
            alt=""
            className="pointer-events-none select-none absolute left-[48%] sm:left-[52%] bottom-4 sm:bottom-8 h-10 sm:h-12 max-w-none w-auto z-30"
          />
        </div>
      </div>
    </section>
  );
}
