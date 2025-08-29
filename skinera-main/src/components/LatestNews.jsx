import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LatestNews() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    let abort = false;
    async function load() {
      try {
        const res = await fetch(
          (import.meta.env.VITE_SERVER_URL || "") + "/api/news/latest?limit=4"
        );
        const data = await res.json();
        if (!abort && data?.success) {
          setNewsArticles(Array.isArray(data.items) ? data.items : []);
        }
      } catch (e) {
        if (!abort) setNewsArticles([]);
      }
    }
    load();
    return () => {
      abort = true;
    };
  }, []);

  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "";
    }
  };
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-domine font-medium text-[#BE7F58] mb-4">
            Latest in Cosmetology
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Tips, trends, and science-backed advice to care for your skin.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.slice(0, 4).map((article) => (
            <div key={article.slug} className="group">
              <div className="flex gap-4">
                {/* Image */}
                <div className="flex-shrink-0">
                  <Link to={`/news/${article.slug}`}>
                    <img
                      src={article.cardImage || "/logo.png"}
                      onError={(e) => {
                        e.currentTarget.src = "/logo.png";
                      }}
                      alt={article.title}
                      className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
                    />
                  </Link>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#BE7F58] transition-colors duration-300">
                    <Link to={`/news/${article.slug}`}>{article.title}</Link>
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-500">
                      {formatDate(article.date || article.createdAt)}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <Link
                    to={`/news/${article.slug}`}
                    className="text-[#c98963] text-sm font-medium hover:text-[#be7f58] transition-colors duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-block bg-[#c98963] hover:bg-[#be7f58] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
