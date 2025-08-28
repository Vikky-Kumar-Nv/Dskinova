import React, { useMemo, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HeroThree from "./HeroThree.jsx";
import NewsFirstSec from "./NewsFirstSec.jsx";
import { useParams } from "react-router-dom";
import { getNewsBySlug } from "../data/mockednews";

export default function NewsTemplate() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const { slug } = useParams();
  const article = useMemo(
    () => getNewsBySlug(slug ?? "botox-treatment-what-to-expect"),
    [slug]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Reuse header from /service page */}
      <Header onBookAppointment={() => setAppointmentOpen(true)} />

      {/* Reuse hero from /service with custom title */}
      <HeroThree title={article.title} introPara={article.heroIntro} />

      {/* First section replicating the provided screenshot */}
      <NewsFirstSec article={article} />

      <Footer />
    </div>
  );
}
