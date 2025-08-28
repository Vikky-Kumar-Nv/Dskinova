import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/Header/logo.png";

// Simple down-caret icon
const CaretDown = ({ className = "w-3 h-3" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.356a.75.75 0 111.02 1.1l-4.22 3.82a.75.75 0 01-1.02 0l-4.22-3.82a.75.75 0 01.02-1.1z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Header({ onBookAppointment }) {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  // Desktop dropdown state with hover-delay to avoid flicker
  const [svcDesktopOpen, setSvcDesktopOpen] = useState(false);
  const svcTimer = useRef(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header className="bg-[#e0a075] text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 sm:h-18 md:h-24 flex items-center justify-between md:grid md:grid-cols-[auto_1fr_auto] md:gap-6">
          {/* Left: Logo + Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="DSkinova — Professional Skincare & Cosmetology Clinic logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Center: Desktop nav */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-white/90 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white/90 hover:text-white transition-colors"
            >
              About Us
            </Link>
            {/* Service dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (svcTimer.current) clearTimeout(svcTimer.current);
                setSvcDesktopOpen(true);
              }}
              onMouseLeave={() => {
                if (svcTimer.current) clearTimeout(svcTimer.current);
                svcTimer.current = setTimeout(
                  () => setSvcDesktopOpen(false),
                  120
                );
              }}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors"
              >
                Services
                <CaretDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    svcDesktopOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 top-full mt-2 min-w-[180px] bg-white text-[#c67c54] shadow-xl ring-1 ring-black/5 z-50 transition-opacity duration-150 ${
                  svcDesktopOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => {
                  if (svcTimer.current) clearTimeout(svcTimer.current);
                  setSvcDesktopOpen(true);
                }}
                onMouseLeave={() => {
                  if (svcTimer.current) clearTimeout(svcTimer.current);
                  svcTimer.current = setTimeout(
                    () => setSvcDesktopOpen(false),
                    120
                  );
                }}
              >
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Anti-aging solutions
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Deep peelings
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Facials
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Laser hair removal
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Laser skin therapy
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Mesotherapy
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Microdermabrasion
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Pigmentation solutions
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Skin tightening
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Hair PRP
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  HAIR GFC
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Hair regrowth laser
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Korean Skin Treatment
                </a>
                <a
                  href="#services"
                  className="block px-4 py-2 hover:bg-[#f6e8e0]"
                >
                  Botox Treatment
                </a>
              </div>
            </div>
            <Link
              to="/contact"
              className="text-white/90 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right: Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center justify-end gap-2">
            <a
              href="tel:+917878867379"
              className="hidden md:inline-block bg-white text-[#c67c54] px-6 lg:px-8 py-2.5 lg:py-3 text-base border border-white hover:bg-white/90 transition-colors"
              aria-label="Call now"
            >
              Call Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              className="md:hidden ml-2 p-2 text-white hover:text-white/90"
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                {open ? (
                  <path
                    fillRule="evenodd"
                    d="M6.22 5.97a.75.75 0 0 1 1.06 0L12 10.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L13.06 11.75l4.72 4.72a.75.75 0 1 1-1.06 1.06L12 12.81l-4.72 4.72a.75.75 0 0 1-1.06-1.06l4.72-4.72-4.72-4.72a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                ) : (
                  <>
                    <path d="M4 6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6.75Z" />
                    <path d="M4 12a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 12Z" />
                    <path d="M4 17.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1-.75-.75Z" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - professional slide-over */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-11/12 max-w-sm bg-[#e0a075] text-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          } [will-change:transform]`}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="DSkinova — Professional Skincare & Cosmetology Clinic logo"
                className="h-8 w-auto"
              />
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 hover:text-white/90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <nav className="px-4 py-3 overflow-y-auto h-[calc(100%-4rem)]">
            <Link
              to="/"
              className="block py-3 text-base border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-3 text-base border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>

            {/* Services accordion */}
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-base border-b border-white/10"
              onClick={() => setSvcOpen((v) => !v)}
              aria-expanded={svcOpen}
            >
              <span>Services</span>
              <CaretDown
                className={`w-4 h-4 transition-transform duration-200 ease-in-out ${
                  svcOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`pl-3 text-white/90 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                svcOpen ? "max-h-[60vh] opacity-100 pb-2" : "max-h-0 opacity-0"
              }`}
              aria-hidden={!svcOpen}
            >
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Anti-aging solutions
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Deep peelings
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Facials
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Laser hair removal
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Laser skin therapy
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Mesotherapy
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Microdermabrasion
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Pigmentation solutions
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Skin tightening
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Hair PRP
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                HAIR GFC
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Hair regrowth laser
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Korean Skin Treatment
              </a>
              <a
                href="#services"
                className="block py-2"
                onClick={() => setOpen(false)}
              >
                Botox Treatment
              </a>
            </div>

            {/* Call now CTA */}
            <Link
              to="/contact"
              className="block py-3 text-base border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
            <div className="pt-4">
              <a
                href="tel:+917878867379"
                className="inline-flex items-center justify-center w-full bg-white text-[#c67c54] px-5 py-3 text-base border border-white shadow-sm"
                aria-label="Call now"
                onClick={() => setOpen(false)}
              >
                Call Now
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
