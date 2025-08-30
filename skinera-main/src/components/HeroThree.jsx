import React from "react";

const HeroThree = ({
  title = "Contact Us",
  introPara = "We're here to help. Reach out for appointments, treatment queries, or clinic information.",
}) => (
  <section
    className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden contact-hero bg-cover bg-no-repeat"
    style={{
      // backgroundImage: `url(${backgroundImage})`,
      backgroundColor: "#e0a075",
      "--hero-pos": "center top -560px",
    }}
  >
    <div className="container mx-auto px-4 md:px-6 relative z-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-domine font-medium text-center tracking-tight text-white leading-tight">
        {title}
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-center mt-4 md:mt-6 max-w-2xl mx-auto text-white leading-relaxed">
        {introPara}
      </p>
    </div>
  </section>
);

export default HeroThree;
