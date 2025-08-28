import React, { useState } from "react";

export default function ExclusiveUpdate() {
  const FORM_ACTION = "https://formsubmit.co/kunalking01grd@gmail.com"; // replace with your email
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function validate() {
    if (!email.trim()) return "Please enter your email";
    // simple email check
    const re = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!re.test(email)) return "Enter a valid email address";
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    const fd = new FormData();
    fd.append("Email", email);
    fd.append("_captcha", "false");
    fd.append("_template", "table");
    fd.append("_subject", "Newsletter Subscription");

    setError("");
    setSubmitted(true);

    fetch(FORM_ACTION, {
      method: "POST",
      body: fd,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("submit failed");
        setEmail("");
      })
      .catch(() => {
        // revert submitted state on failure
        setSubmitted(false);
        setError("Could not subscribe right now. Please try again.");
      });
  }

  return (
    <section className="bg-gradient-to-r from-orange-100 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-domine font-medium text-[#BE7F58] mb-2">
              Get exclusive updates
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Join our newsletter for skincare tips, special offers, and clinic
              news — no spam, ever.
            </p>
          </div>

          {/* Right Subscription Form */}
          <div className="w-full md:w-auto">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 sm:items-center w-full"
            >
              {/* Hidden controls for FormSubmit (redundant when using fetch but kept for clarity) */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_subject"
                value="Newsletter Subscription"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c98963] focus:border-transparent w-full sm:w-64"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-[#c98963] hover:bg-[#be7f58] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 whitespace-nowrap sm:self-auto"
              >
                Subscribe Now
              </button>
            </form>
            {/* Inline status messages */}
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            {submitted && !error && (
              <p className="mt-2 text-sm text-green-600">
                You're subscribed! Thanks for joining.
              </p>
            )}
          </div>

          {/* Decorative Element */}
          <div className="absolute top-0 right-8 hidden lg:block">
            <div className="w-16 h-16 bg-yellow-300 rounded-full opacity-80 transform rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
