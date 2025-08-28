import React, { useEffect, useRef, useState } from "react";
import expertImage1 from "../../Images/Expert-Section/1.jpg";
import expertImage2 from "../../Images/Expert-Section/2.jpg";

export default function ExpertSkincare() {
  // Count-up animation for experience badge when it enters viewport
  const [expCount, setExpCount] = useState(0);
  const badgeRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;

    const animate = (from, to, duration, setter) => {
      const start = performance.now();
      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
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
          animate(0, 20, 1200, setExpCount);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="bg-gradient-to-r from-orange-100 to-orange-50 py-14 sm:py-18 lg:py-24 overflow-hidden md:overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8 max-w-xl mx-auto lg:max-w-none lg:mx-0">
              {/* Main Heading */}
              <div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-domine font-medium text-[#BE7F58] leading-tight">
                  Expert Skincare For Your Beautiful Skin
                </h2>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-600 text-base leading-relaxed">
                  Holistic cosmetology for everyday radiance. We pair modern
                  techniques with skin‑friendly actives to gently renew tone,
                  texture, and glow.
                </p>
              </div>

              {/* Services List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Left Column Services */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600 text-sm">
                      Plastic Surgery
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600 text-sm">
                      Transplantation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600 text-sm">
                      Peeling & Serum
                    </span>
                  </div>
                </div>

                {/* Right Column Services */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600 text-sm">
                      Plastic Surgery
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600 text-sm">
                      Transplantation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-600 text-sm">
                      Peeling & Serum
                    </span>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <div className="pt-2 sm:pt-4">
                <button className="bg-[#c98963] hover:bg-[#be7f58] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main large image */}
              <div className="relative">
                <img
                  src={expertImage1}
                  alt="Skincare treatment"
                  className="w-full h-[320px] sm:h-[460px] object-cover rounded-2xl shadow-lg"
                />

                {/* Experience Badge */}
                <div
                  ref={badgeRef}
                  className="absolute top-6 left-6 bg-white rounded-lg p-4 shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-6 h-6 text-[#BE7F58]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {expCount} +
                    </div>
                    <div className="text-xs text-gray-600">Year Experience</div>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute bottom-6 right-6">
                  <button className="w-16 h-16 bg-[#c98963] hover:bg-[#be7f58] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Secondary smaller image */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 hidden lg:block">
                <img
                  src={expertImage2}
                  alt="Happy customer"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Decorative elements (hide on mobile for cleaner alignment) */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-60"></div>
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-12 h-12 bg-orange-200 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
