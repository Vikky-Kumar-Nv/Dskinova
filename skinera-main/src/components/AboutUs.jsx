import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../Images/about/img_serv.jpg";

export default function AboutUs() {
  // Count-up animation for About Us stats when section enters viewport
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
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
          animate(0, 15, 1200, setYearsCount);
          animate(0, 1000, 1200, setClientsCount);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="bg-gradient-to-r from-[#f7e6d9] from-60% to-white py-14 sm:py-18 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={aboutImage}
                alt="Cosmetology consultation"
                className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:pl-8">
            <div className="mb-6">
              <h3 className="text-[#c4a484] font-domine text-lg sm:text-xl italic mb-2">
                About Us
              </h3>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-domine text-[#2d2d2d] leading-tight font-medium">
                What To Expect From A Cosmetologist For Beautiful Results
              </h2>
            </div>

            <div className="space-y-4 text-[#6b6b6b] text-sm sm:text-base leading-relaxed">
              <p>
                Cosmetology focuses on the care of skin, hair, and nails to
                enhance appearance and confidence. Our cosmetologists combine
                safe techniques with personalized plans for visible, lasting
                results.{" "}
                <span className="text-[#c4a484] cursor-pointer hover:underline">
                  Read more.
                </span>
              </p>
            </div>

            {/* Optional: Add some stats or features */}
            <div
              ref={statsRef}
              className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-6"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-domine font-medium text-[#c4a484]">
                  {yearsCount}+
                </div>
                <div className="text-sm text-[#6b6b6b] mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-domine font-medium text-[#c4a484]">
                  {clientsCount}+
                </div>
                <div className="text-sm text-[#6b6b6b] mt-1">Happy Clients</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block bg-[#c98963] text-white px-6 py-3 rounded-md hover:bg-[#be7f58] transition-colors duration-300 text-sm sm:text-base font-medium"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
