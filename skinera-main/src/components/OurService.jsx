import React from "react";
import { Link } from "react-router-dom";

// Decorative background and service images
import bgFlower from "../../Images/Our-Service/bg-Flower-png-Use-It-InLargeWidth.png";
import face from "../../Images/Our-Service/girl-use-facecream-ontheir-face.jpg";
import manicure from "../../Images/Our-Service/imgi_50_beautiful-female-hands-woman-hands-with-beautiful-french-manicure-nails-.jpg";
import lips from "../../Images/Our-Service/imgi_51_woman-getting-cosmetic-injection-of-botox-in-lips-closeup-.jpg";
import pedicure from "../../Images/Our-Service/imgi_52_female-feet-with-white-french-pedicure-on-nails-at-spa-salon.jpg";
import filler from "../../Images/Our-Service/imgi_53_hyaluronic-acid-injection-fillers-for-cheeks.jpg";
import body from "../../Images/Our-Service/imgi_54_skincare-bodycare-beauty-and-bath-concept-close-up-of-attractive-naked-asian-woman-in-shower.jpg";

const Card = ({ img, title, onBook, linkTo = "/service/anti-aging" }) => (
  <div className="relative">
    <img
      src={img}
      alt={title}
      className="w-full h-64 sm:h-72 md:h-80 object-cover shadow-md"
    />
    <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.12)] px-6 sm:px-8 py-4 w-[86%] sm:w-[78%] text-center">
      <h3 className="font-domine text-[#b37556] text-lg sm:text-xl font-medium">
        {title}
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Link
          to={linkTo}
          className="inline-flex items-center justify-center h-10 rounded-md text-sm font-medium border border-[#ead9cf] text-[#a36f52] hover:border-[#c98963] hover:bg-orange-50 transition-colors duration-300"
        >
          <span>Learn More</span>
        </Link>
        <button
          type="button"
          onClick={onBook}
          className="inline-flex items-center justify-center h-10 rounded-md text-sm font-medium bg-[#c98963] hover:bg-[#be7f58] text-white transition-colors duration-300"
        >
          <span>Book Now</span>
        </button>
      </div>
    </div>
  </div>
);

export default function OurService({ onBookAppointment }) {
  return (
    <section className="relative bg-[#fdeee2]">
      {/* side floral decoration */}
      <img
        src={bgFlower}
        alt=""
        className="pointer-events-none select-none hidden md:block absolute left-0 top-6 h-[520px] w-auto opacity-60 filter brightness-75 contrast-125"
      />
      <img
        src={bgFlower}
        alt=""
        className="pointer-events-none select-none hidden md:block absolute right-0 top-6 h-[520px] w-auto opacity-60 filter brightness-75 contrast-125 -scale-x-100"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-domine font-medium text-3xl sm:text-4xl text-[#b37556]">
            Our Service
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9b7a67]">
            Professional cosmetology care tailored to you. From deep-cleansing
            facials to gentle peels, we help restore balance and radiance.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {/* Face Treatment → Facials */}
          <Card
            img={face}
            title="Face Treatment"
            onBook={onBookAppointment}
            linkTo="/service/facials"
          />
          {/* Manicure → own service */}
          <Card
            img={manicure}
            title="Manicure"
            onBook={onBookAppointment}
            linkTo="/service/manicure"
          />
          {/* Lips Treatment → Filler */}
          <Card
            img={lips}
            title="Lips Treatment"
            onBook={onBookAppointment}
            linkTo="/service/filler"
          />
          {/* Pedicure → own service (spelling fix) */}
          <Card
            img={pedicure}
            title="Pedicure"
            onBook={onBookAppointment}
            linkTo="/service/pedicure"
          />
          {/* Filler & Botox → Botox Treatment */}
          <Card
            img={filler}
            title="Filler & Botox"
            onBook={onBookAppointment}
            linkTo="/service/botox-treatment"
          />
          {/* Body Care → Anti-aging solutions */}
          <Card
            img={body}
            title="Body Care"
            onBook={onBookAppointment}
            linkTo="/service/anti-aging"
          />
        </div>
      </div>
    </section>
  );
}
