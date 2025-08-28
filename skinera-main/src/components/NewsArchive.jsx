import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import AppointmentModal from "./AppointmentModal.jsx";
import { newsItems } from "../data/mockednews";

export default function NewsArchive() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onBookAppointment={() => setAppointmentOpen(true)} />
      {/* Use the same hero as homepage */}
      <Hero onBookAppointment={() => setAppointmentOpen(true)} />

      {/* All News Grid */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-domine font-medium text-[#BE7F58] mb-8 text-center">
            All News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((article) => (
              <article
                key={article.slug}
                className="group border rounded-lg overflow-hidden"
              >
                <Link to={`/news/${article.slug}`}>
                  <img
                    src={article.cardImage}
                    alt={article.title}
                    className="w-full h-56 object-cover"
                  />
                </Link>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#BE7F58] transition-colors">
                    <Link to={`/news/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{article.date}</p>
                  <p className="text-gray-700 text-sm mt-3 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/news/${article.slug}`}
                    className="inline-block mt-4 text-[#c98963] hover:text-[#be7f58] font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        onSubmit={() => setAppointmentOpen(false)}
      />
    </div>
  );
}
