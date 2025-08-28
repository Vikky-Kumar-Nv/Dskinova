import React from "react";
import girl from "../../Images/More-u-care/girl.jpg";
import lemonoil from "../../Images/More-u-care/lemonoil.jpg";
import handsLeaf from "../../Images/second-section/both-hand-on-leaf.jpg";
// Removed image for the small left card; keeping layout blank

export default function MoreYouCare() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white text-[#c67c54]">
      {/* soft decorative glows */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute -top-24 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] h-[40vw] max-h-[380px] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(224,160,117,0.35), transparent 55%), radial-gradient(ellipse at top left, rgba(255,230,120,0.28), transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-domine font-medium text-3xl sm:text-4xl md:text-5xl leading-tight text-[#c67c54]">
            More You Care About
            <br className="hidden sm:block" /> Yourself Makes You More
            <br className="hidden sm:block" /> Beautifull
          </h2>
          <div className="mt-5">
            <div className="text-xl italic tracking-wide text-[#a96945]">
              Margaret T.
            </div>
            <div className="text-sm text-[#a96945]/80">
              Margaret T., DSkinova CEO
            </div>
          </div>
        </div>

        {/* Gallery layout */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left stack with glow + overlay */}
          <div className="relative order-2 md:order-1 md:pb-12 lg:pb-16 hidden md:block">
            {/* soft radial blob */}
            <div
              aria-hidden
              className="absolute -left-10 -top-16 w-[420px] h-[420px] rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(224,160,117,0.35), transparent 60%)",
              }}
            />

            {/* base small card removed per request */}

            {/* portrait overlay */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-10 w-[220px] sm:w-[260px] lg:w-[280px] h-[300px] sm:h-[340px] lg:h-[360px] shadow-lg mx-auto mt-6 md:mt-0">
              <img
                src={girl}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 md:hover:scale-105 will-change-transform"
              />
            </div>
          </div>

          {/* Center large landscape */}
          <div className="order-1 md:order-2 hidden md:block">
            <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px] xl:h-[340px] shadow-md">
              <img
                src={handsLeaf}
                alt="Hands on leaf"
                className="w-full h-full object-cover transition-transform duration-300 md:hover:scale-105 will-change-transform"
              />
            </div>
          </div>

          {/* Right tall bottle */}
          <div className="order-3 hidden md:block">
            <div className="w-[240px] sm:w-[280px] md:w-full h-[300px] sm:h-[320px] lg:h-[380px] shadow-md mx-auto">
              <img
                src={lemonoil}
                alt="Lemon oil"
                className="w-full h-full object-cover transition-transform duration-300 md:hover:scale-105 will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
