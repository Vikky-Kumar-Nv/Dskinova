import React from "react";

// Staff photos
import staff1 from "../../Images/professional-staff/staff1-devika.jpg";
import staff2 from "../../Images/professional-staff/staff2-ayesha.webp";
import staff3 from "../../Images/professional-staff/staff3-veena.jpg";

// Decorative assets
import flower3 from "../../Images/professional-staff/flower3.png";
import flower4 from "../../Images/professional-staff/flower4.png";
import petals1 from "../../Images/professional-staff/petals.png";
import petals2 from "../../Images/professional-staff/petals2.png";

const people = [
  { img: staff1, name: "Devika Sharma" },
  { img: staff2, name: "Ayesha Khan" },
  { img: staff3, name: "Veena Patel" },
];

export default function ProfessionalStaff() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Decorative petals/flowers matching screenshot composition */}
      <img
        src={petals1}
        alt=""
        className="pointer-events-none select-none absolute -top-3 sm:-top-5 right-6 sm:right-14 w-12 sm:w-16 rotate-6 opacity-90"
      />
      <img
        src={petals2}
        alt=""
        className="pointer-events-none select-none absolute bottom-3 left-6 sm:left-24 w-14 sm:w-20 -rotate-12 opacity-90"
      />
      {/* very subtle floral outline on the right */}
      <img
        src={flower4}
        alt=""
        className="pointer-events-none select-none absolute inset-y-0 -right-28 sm:-right-10 md:right-0 max-h-none h-[140%] top-1/2 -translate-y-1/2 opacity-40"
      />
      {/* faint helper on the left */}
      <img
        src={flower3}
        alt=""
        className="pointer-events-none select-none absolute top-1/2 -left-24 w-44 -translate-y-1/2 opacity-30 md:w-56"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#c88b6e]">
            Professional Staff
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Our licensed aestheticians and clinical assistants combine years of
            experience with a gentle, people‑first approach. From consultation
            to post‑treatment care, they follow evidence‑based protocols so you
            feel informed, comfortable, and cared for at every step.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pb-10 sm:pb-12">
          {people.map((p, i) => (
            <article key={p.name} className="group relative overflow-visible">
              {/* image */}
              <div className="relative aspect-[4/5] md:aspect-[5/6]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>

              {/* name plate - tan rectangle centered under photo */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 md:-bottom-7">
                <div className="min-w-[240px] md:min-w-[260px] bg-[#c88b6e] text-white shadow-lg px-6 py-3 md:py-3.5 text-center">
                  <div className="text-base md:text-lg font-semibold leading-tight">
                    {p.name}
                  </div>
                  <div className="text-[11px] md:text-xs tracking-wide opacity-95">
                    Professionals Staff
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
