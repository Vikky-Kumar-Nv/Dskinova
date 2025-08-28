import React from "react";

import droplet from "../../Images/second-section/droplet.jpg";
import surface from "../../Images/second-section/both-hand-on-surface.jpg";
import girl from "../../Images/second-section/girl.jpg";
import leaf from "../../Images/second-section/both-hand-on-leaf.jpg";
import lemon from "../../Images/second-section/lemon-and-oil.jpg";

export default function SecondSection() {
  return (
    <section className="relative bg-white overflow-hidden md:overflow-visible">
      {/* soft glow accents */}
      <div className="pointer-events-none absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-yellow-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-orange-100/50 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Title + CTA for small/medium screens */}
        <div className="text-center mb-10 lg:hidden">
          <h2 className="font-domine font-medium text-[#b37556] text-3xl sm:text-4xl leading-tight">
            Consistent Care Creates
            <br className="hidden sm:block" /> Lasting Glow
          </h2>
          <button className="mt-6 inline-block bg-[#c98963] text-white px-6 py-3 text-sm sm:text-base hover:bg-[#be7f58] transition-colors">
            Learn More
          </button>
        </div>

        {/* Grid layout - large screens mirrors the reference composition */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Row 1 */}
          <figure className="lg:col-span-4 lg:row-start-1 lg:col-start-1">
            <img
              src={droplet}
              alt="Serum dropper in hand"
              className="h-56 sm:h-64 md:h-72 lg:h-[320px] w-full object-cover shadow-xl"
            />
          </figure>

          {/* Center text at large screens */}
          <div className="hidden lg:flex lg:col-span-4 lg:row-start-1 lg:col-start-5 flex-col items-center justify-center text-center px-4">
            <h2 className="font-domine font-medium text-[#b37556] text-[34px] leading-snug">
              Consistent Care Creates
              <br /> Lasting Glow
            </h2>
            <button className="mt-6 inline-block bg-[#c98963] text-white px-6 py-3 hover:bg-[#be7f58] transition-colors">
              Learn More
            </button>
          </div>

          <figure className="lg:col-span-4 lg:row-start-1 lg:col-start-9">
            <img
              src={surface}
              alt="Hands on surface"
              className="h-56 sm:h-64 md:h-72 lg:h-[320px] w-full object-cover shadow-xl"
            />
          </figure>

          {/* Row 2 */}
          <figure className="md:col-span-1 lg:col-span-4 lg:row-start-2 lg:col-start-1">
            <img
              src={girl}
              alt="Skincare close up"
              className="h-56 sm:h-64 md:h-72 lg:h-[340px] w-full object-cover shadow-xl"
            />
          </figure>

          <figure className="md:col-span-1 lg:col-span-4 lg:row-start-2 lg:col-start-5">
            <img
              src={leaf}
              alt="Hands on green leaf"
              className="h-72 sm:h-80 md:h-96 lg:h-[420px] xl:h-[460px] w-full object-cover shadow-xl"
            />
          </figure>

          <figure className="md:col-span-1 lg:col-span-4 lg:row-start-2 lg:col-start-9">
            <img
              src={lemon}
              alt="Bottle with lemon and oil"
              className="h-56 sm:h-64 md:h-72 lg:h-[340px] w-full object-cover shadow-xl"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
