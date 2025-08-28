import React, { useState } from "react";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book directly by calling us using the 'Call Now' button, or via our online booking form on the Services page. Please have your preferred date and time ready and our team will confirm availability.",
  },
  {
    question: "Do you offer a consultation before treatment?",
    answer:
      "Yes — we provide a complimentary consultation to assess your skin, discuss goals, and recommend a personalised treatment plan. Consultations can be scheduled in-person or over the phone.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, major credit/debit cards, and popular UPI/wallet payments. For certain packages, we may require a small deposit to secure the appointment.",
  },
];

export default function ClientFaq() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left copy */}
          <div>
            <h2 className="font-domine text-3xl sm:text-4xl md:text-5xl text-[#b37556] mb-4">
              Client Question
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Have questions about our treatments, booking, or aftercare? Our
              friendly team is ready to help — call us or use the online booking
              form and we’ll guide you through preparation, expected results,
              and personalised recommendations for your skin.
            </p>

            <a
              href="tel:+917878867379"
              aria-label="Call +91 78788 67379"
              className="w-full sm:w-auto inline-block bg-[#c98963] text-white px-6 py-3 rounded shadow text-center"
            >
              Call Now
            </a>
          </div>

          {/* Right accordion */}
          <div>
            <div className="space-y-4">
              {faqs.map((f, i) => {
                const open = openIndex === i;
                const panelId = `faq-panel-${i}`;
                return (
                  <div key={i} className="border rounded overflow-hidden">
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className={`w-full text-left px-4 py-4 flex items-center justify-between ${
                        open
                          ? "bg-[#c98963] text-white"
                          : "bg-white text-gray-800"
                      }`}
                    >
                      <span className="font-medium text-sm sm:text-base">
                        {f.question}
                      </span>
                      <svg
                        className={`w-6 h-6 sm:w-5 sm:h-5 transform transition-transform duration-200 ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    {open && (
                      <div
                        id={panelId}
                        className="bg-white p-4 text-sm text-gray-600 border-t"
                      >
                        {f.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
