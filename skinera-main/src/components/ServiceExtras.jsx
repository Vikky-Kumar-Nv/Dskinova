import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faUser,
  faSpa,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  { icon: faCertificate, number: 25, label: "Certified" },
  { icon: faUser, number: 125, label: "Customer" },
  { icon: faSpa, number: 50, label: "Services" },
  { icon: faUserTie, number: 30, label: "Specialist" },
];

function CountUp({ target = 0, duration = 1200, start = false, suffix = "+" }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef();

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);

  return <span>{`${value.toLocaleString()}${suffix}`}</span>;
}

export default function ServiceExtras() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#E0A075] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:h-[17.5vh] md:flex md:items-center py-6 md:py-0">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center justify-items-center w-full">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-white py-2 md:py-0"
              >
                <div className="text-white text-2xl sm:text-3xl md:text-4xl opacity-95">
                  <FontAwesomeIcon icon={s.icon} />
                </div>
                <div className="mt-2 font-domine text-lg sm:text-xl md:text-2xl">
                  <CountUp target={s.number} start={startCount} />
                </div>
                <div className="mt-1 text-xs md:text-sm text-white/90">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
