import React, { useEffect, useRef, useState } from "react";

import girlHands from "../../Images/Thestory/girl-hand.jpg";
import girl from "../../Images/Thestory/girl.jpg";
import petal1 from "../../Images/Thestory/petals-1.png";
import petal2 from "../../Images/Thestory/petals-2.png";
import petal3 from "../../Images/Thestory/petals-3.png";
import leftFlower from "../../Images/Thestory/left-flower.png";
import rightFlower from "../../Images/Thestory/right-flower.png";

export default function StorySection() {
  // Count-up animation for stats when section enters viewport
  const [happyCount, setHappyCount] = useState(0);
  const [outletCount, setOutletCount] = useState(0);
  const statsRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const animate = (from, to, duration, setter) => {
      const start = performance.now();
      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutCubic for a nice finish
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(from + (to - from) * eased);
        setter(value);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          animate(0, 90, 1200, setHappyCount);
          animate(0, 35, 1200, setOutletCount);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white overflow-hidden md:overflow-visible">
      {/* subtle side flower outlines */}
      <img
        src={leftFlower}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute left-2 top-1/3 -translate-y-1/2 w-36 opacity-60"
      />
      <img
        src={rightFlower}
        alt=""
        className="pointer-events-none select-none hidden lg:block absolute right-4 bottom-0 w-40 opacity-60"
      />

      {/* floating petals around the card */}
      <img
        src={petal1}
        alt=""
        className="pointer-events-none select-none hidden md:block absolute left-[52%] -translate-x-1/2 top-16 w-16 rotate-12"
      />
      <img
        src={petal2}
        alt=""
        className="pointer-events-none select-none hidden md:block absolute right-[18%] top-[46%] w-10 rotate-6"
      />
      <img
        src={petal3}
        alt=""
        className="pointer-events-none select-none hidden md:block absolute right-[20%] bottom-10 w-16 -rotate-6"
      />

      {/* mobile-only decorative petal near the image pair */}
      <img
        src={petal2}
        alt=""
        className="pointer-events-none select-none md:hidden absolute left-6 top-52 w-10 rotate-6 opacity-90"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* image pair + overlay card */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-start">
          {/* Left tall image */}
          <div className="order-1 col-span-1">
            <img
              src={girlHands}
              alt="Hands"
              className="w-full h-96 sm:h-[420px] md:h-[500px] lg:h-[700px] object-cover p-2 sm:p-3 md:p-4 bg-white shadow-none"
            />
          </div>

          {/* Middle tall image */}
          <div className="order-2 relative col-span-1">
            <img
              src={girl}
              alt=""
              className="w-full h-96 sm:h-[420px] md:h-[500px] lg:h-[700px] object-cover object-center shadow"
            />
          </div>

          {/* Right overlay card */}
          <div className="order-3 col-span-2 md:col-span-2 lg:col-span-1">
            {/* Wrapper gains a fixed height at lg so we can center the card vertically */}
            <div className="relative lg:h-[700px]">
              <div className="relative z-10 bg-white shadow-[0_12px_28px_rgba(0,0,0,0.15)] p-5 sm:p-8 lg:p-10 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:-ml-16 xl:-ml-24 lg:max-w-[520px]">
                <h2 className="font-domine text-[#b37556] text-3xl sm:text-4xl font-medium">
                  The Story
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#6c6c6c] leading-relaxed">
                  From first consult to after-care, we focus on gentle,
                  effective cosmetology rituals that calm, smooth, and brighten
                  your skin.
                </p>
                <button className="mt-6 inline-block bg-[#c98963] text-white px-6 py-3 hover:bg-[#be7f58] transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="mt-4 md:mt-6 lg:-mt-14 grid grid-cols-2 gap-6"
            >
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl sm:text-5xl font-medium font-domine text-[#2b2b2b]">
                    {happyCount}
                  </span>
                  <span className="text-[#b37556] text-base sm:text-lg font-medium -translate-y-2 font-domine">
                    %
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#6c6c6c]">Happy Customer</p>
              </div>
              <div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl sm:text-5xl font-medium font-domine text-[#2b2b2b]">
                    {outletCount}
                  </span>
                  <span className="text-[#b37556] text-xl sm:text-2xl font-medium -translate-y-1 pl-1 font-domine">
                    +
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#6c6c6c]">New Outlet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
