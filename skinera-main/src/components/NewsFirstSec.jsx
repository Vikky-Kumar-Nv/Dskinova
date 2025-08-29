import React, { useEffect, useState } from "react";
import sideBg from "../../Images/Contact-page/bg-3-flower-2x.png";
import { Link } from "react-router-dom";

// Lightweight social icons
const Icon = ({ path, className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

const Facebook = (p) => (
  <Icon
    {...p}
    path="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.19 8.45 9.94v-7.03H8.4v-2.9h2.05V9.86c0-2.03 1.21-3.15 3.06-3.15.89 0 1.83.16 1.83.16v2.02h-1.03c-1.02 0-1.34.64-1.34 1.29v1.55h2.28l-.36 2.9h-1.92V22c4.79-.75 8.45-4.92 8.45-9.94Z"
  />
);
const Twitter = (p) => (
  <Icon
    {...p}
    path="M22.46 6c-.77.35-1.6.58-2.46.69a4.17 4.17 0 0 0 1.83-2.31 8.36 8.36 0 0 1-2.64 1.01A4.15 4.15 0 0 0 11.1 8.2a11.77 11.77 0 0 1-8.55-4.34 4.14 4.14 0 0 0 1.28 5.54 4.1 4.1 0 0 1-1.88-.52v.05c0 2 1.44 3.68 3.35 4.06-.35.1-.73.16-1.11.16-.27 0-.54-.03-.79-.07.54 1.7 2.1 2.93 3.95 2.96A8.33 8.33 0 0 1 2 18.58a11.75 11.75 0 0 0 6.36 1.86c7.63 0 11.8-6.32 11.8-11.8v-.54c.81-.58 1.52-1.3 2.08-2.1Z"
  />
);
const Pinterest = (p) => (
  <Icon
    {...p}
    path="M12 2C6.48 2 2 6.31 2 11.7c0 3.91 2.52 7.26 6.03 8.56-.08-.73-.15-1.86.03-2.66.16-.68 1.07-4.55 1.07-4.55s-.27-.55-.27-1.36c0-1.27.73-2.21 1.64-2.21.77 0 1.15.59 1.15 1.3 0 .79-.5 1.97-.76 3.07-.22.89.46 1.62 1.36 1.62 1.63 0 2.88-1.72 2.88-4.2 0-2.19-1.57-3.72-3.81-3.72-2.59 0-4.12 1.94-4.12 3.95 0 .79.3 1.63.67 2.1.07.08.08.15.06.24-.07.26-.22.8-.25.9-.04.14-.12.17-.26.1-.97-.45-1.58-1.86-1.58-3 0-2.43 1.77-4.67 5.1-4.67 2.68 0 4.77 1.9 4.77 4.44 0 2.66-1.68 4.8-4.01 4.8-.78 0-1.51-.41-1.76-.89l-.48 1.83c-.17.7-.63 1.57-.93 2.1.7.21 1.43.32 2.19.32 5.52 0 10-4.31 10-9.7C22 6.31 17.52 2 12 2Z"
  />
);
const LinkedIn = (p) => (
  <Icon
    {...p}
    path="M20.45 2H3.55C2.7 2 2 2.7 2 3.55v16.9C2 21.3 2.7 22 3.55 22h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2zM8.34 18.34H5.67V9.58h2.67v8.76zM7 8.43c-.86 0-1.55-.7-1.55-1.55S6.14 5.34 7 5.34s1.55.7 1.55 1.55S7.86 8.43 7 8.43zm11.34 9.91h-2.67v-4.65c0-1.11-.02-2.55-1.55-2.55-1.55 0-1.79 1.21-1.79 2.47v4.73h-2.67V9.58h2.56v1.19h.04c.36-.68 1.23-1.41 2.53-1.41 2.7 0 3.18 1.77 3.18 4.05v4.93z"
  />
);

export default function NewsFirstSec({ article }) {
  // Same POST target as appointment booking
  const FORM_ACTION = "https://formsubmit.co/kunalking01grd@gmail.com";
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [popularNews, setPopularNews] = useState([]);

  useEffect(() => {
    let abort = false;
    async function loadPopular() {
      try {
        const res = await fetch(import.meta.env.VITE_SERVER_URL + "/api/news");
        const data = await res.json();
        if (data?.success && Array.isArray(data.items)) {
          const list = data.items
            .filter((n) => n.slug !== article.slug)
            .slice(0, 5)
            .map((n) => ({ slug: n.slug, title: n.title }));
          if (!abort) setPopularNews(list);
        }
      } catch {}
    }
    loadPopular();
    return () => {
      abort = true;
    };
  }, [article?.slug]);

  function handleSubscribe(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    setSubmitting(true);
    setDone(false);
    fetch(FORM_ACTION, {
      method: "POST",
      body: fd,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to subscribe");
        formEl.reset();
        setDone(true);
      })
      .catch(() => {})
      .finally(() => setSubmitting(false));
  }
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left / Article */}
          <article className="lg:col-span-2">
            <p className="text-sm text-gray-600 leading-relaxed">
              {article.content.intro}
            </p>

            <h2 className="mt-6 text-2xl sm:text-3xl font-domine font-medium text-[#BE7F58]">
              {article.title}
            </h2>

            <div className="mt-4">
              {(() => {
                const placeholder =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgdmlld0JveD0iMCAwIDY0MCAzNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0MCIgaGVpZ2h0PSIzNjAiIGZpbGw9IiNFQUVBRUQiLz48cGF0aCBkPSJNMTYwIDEyMGMwIDIyLjA5IDE3LjkgNDAgNDAgNDBzNDAuMDktMTcuOTEgNDAtNDBzLTE3LjkxLTQwLTQwLTQwLTE2MCAxNy45MS0xNjAgNDBaIiBmaWxsPSIjQ0VDRUNGIi8+PC9zdmc+";
                const src =
                  article?.content?.image || article?.cardImage || placeholder;
                return (
                  <img
                    src={src}
                    alt={article.title}
                    className="w-full rounded-md object-cover"
                    onError={(e) => {
                      e.currentTarget.src = placeholder;
                    }}
                  />
                );
              })()}
            </div>

            {article.content.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="mt-4 text-sm text-gray-600 leading-relaxed"
              >
                {para}
              </p>
            ))}

            {/* Tags + Share */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t pt-4">
              <div className="text-sm text-gray-600">
                <span className="font-medium mr-2">Tags:</span>
                {article.content.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-block mr-2 px-3 py-1 bg-gray-100 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 text-[#c98963]">
                <span className="text-sm text-gray-600 mr-1">Share This:</span>
                <a
                  href="#"
                  aria-label="Share on Facebook"
                  className="hover:text-[#be7f58]"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Share on Twitter"
                  className="hover:text-[#be7f58]"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Share on Pinterest"
                  className="hover:text-[#be7f58]"
                >
                  <Pinterest className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Share on LinkedIn"
                  className="hover:text-[#be7f58]"
                >
                  <LinkedIn className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>

          {/* Right / Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Popular News */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Popular News
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-[#c98963]">
                {popularNews.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/news/${p.slug}`}
                      className="hover:text-[#be7f58]"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
                {popularNews.length === 0 && (
                  <li className="text-gray-500">No other articles yet.</li>
                )}
              </ul>
            </div>

            {/* Categories removed as requested */}

            {/* Newsletter subscribe card */}
            <div
              className="relative rounded-md overflow-hidden text-white"
              style={{ backgroundColor: "#b8896a" }}
            >
              <img
                src={sideBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative p-6">
                <h4 className="text-lg font-semibold">
                  Subscribe to our Newsletter
                </h4>
                <p className="mt-2 text-sm text-white/90">
                  Get skin tips, clinic updates and offers directly in your
                  inbox.
                </p>
                <form
                  action={FORM_ACTION}
                  method="POST"
                  onSubmit={handleSubscribe}
                  className="mt-4 flex flex-col sm:flex-row gap-3"
                >
                  {/* FormSubmit controls to mirror appointment modal */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Newsletter Subscription"
                  />
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="you@example.com"
                    className="w-full sm:flex-1 px-3 py-2 rounded-md bg-white text-[#3b2a21] placeholder-gray-500/60 focus:outline-none focus:ring-2 focus:ring-white/70"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-white text-[#b37556] px-4 py-2 rounded-md font-medium hover:bg-white/90 disabled:opacity-70"
                  >
                    {submitting ? "Submitting..." : "Subscribe"}
                  </button>
                </form>
                {done && (
                  <p className="mt-2 text-sm text-white">
                    Thanks for subscribing! Please check your inbox.
                  </p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
