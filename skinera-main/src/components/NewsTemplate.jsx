import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HeroThree from "./HeroThree.jsx";
import NewsFirstSec from "./NewsFirstSec.jsx";
import { useParams } from "react-router-dom";

export default function NewsTemplate() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let abort = false;
    async function load() {
      if (!slug) return;
      setLoading(true);
      setNotFound(false);
      try {
        const res = await fetch(
          import.meta.env.VITE_SERVER_URL +
            "/api/news/" +
            encodeURIComponent(slug)
        );
        if (res.status === 404) {
          if (!abort) setNotFound(true);
          return;
        }
        const data = await res.json();
        if (!abort) setArticle(data?.item || null);
      } catch (e) {
        if (!abort) setNotFound(true);
      } finally {
        if (!abort) setLoading(false);
      }
    }
    load();
    return () => {
      abort = true;
    };
  }, [slug]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Reuse header from /service page */}
      <Header onBookAppointment={() => setAppointmentOpen(true)} />

      {loading && (
        <div className="max-w-6xl mx-auto px-4 py-16 text-center text-gray-600">
          Loading article...
        </div>
      )}

      {!loading && notFound && (
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Article not found
          </h2>
          <p className="text-gray-600">
            Please check the link or go back to the news page.
          </p>
        </div>
      )}

      {!loading && article && (
        <>
          {/* Reuse hero from /service with custom title */}
          <HeroThree
            title={article.title}
            introPara={article.heroIntro || article.excerpt || ""}
          />
          {/* First section replicating the provided screenshot */}
          <NewsFirstSec article={article} />
        </>
      )}

      <Footer />
    </div>
  );
}
