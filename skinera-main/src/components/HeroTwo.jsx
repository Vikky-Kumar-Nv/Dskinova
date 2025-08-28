import React from "react";
import backgroundImg from "../../Images/second-hero/background-of-girl.jpg";
import girlImg from "../../Images/second-hero/girl.png";

export default function HeroTwo({
  title = "About Us",
  description = "Discover our journey in providing exceptional skincare and\n              cosmetic services",
}) {
  return (
    <section className="relative -mt-px w-full h-[40vh] min-h-[300px] overflow-hidden bg-[#e0a075]">
      {/* Top fade mask to prevent any hairline seam under the header */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-6 z-30 bg-gradient-to-b from-[#e0a075] via-[#e0a075]/80 to-transparent"
      />
      {/* Decorative background only on the right, fading into the header color */}
      <div className="absolute right-0 top-0 bottom-0 w-[68%] sm:w-[62%] md:w-[58%] lg:w-1/2">
        <img
          src={backgroundImg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        {/* Fade to exact header color so left/center match perfectly */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#e0a075]"></div>
      </div>

      {/* Girl Image - Overlapping and touching bottom */}
      <div className="absolute inset-0 flex items-end justify-center lg:justify-end lg:pr-16">
        <div className="relative z-10">
          <img
            src={girlImg}
            alt="Girl"
            className="h-[35vh] min-h-[250px] w-auto object-contain max-w-none"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-domine font-medium text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
