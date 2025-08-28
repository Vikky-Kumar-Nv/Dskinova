import React from "react";

export default function ConsultationBanner({ onBookAppointment }) {
  return (
    <section className="bg-gradient-to-r from-[#f7e6d9] from-60% to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-domine font-medium text-gray-800 mb-2">
              Consult your needs for free.
            </h3>
            <p className="text-gray-600 text-base">Without paying for it.</p>
          </div>

          {/* Center Button */}
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={onBookAppointment}
              className="inline-block bg-[#c98963] hover:bg-[#be7f58] text-white px-6 py-2 rounded-md font-medium transition-colors duration-300 text-sm"
            >
              GET STARTED FOR FREE
            </button>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-right">
            <p className="text-[#BE7F58] text-sm font-medium mb-1">
              Want to place an appointment now?
            </p>
            <button
              type="button"
              onClick={onBookAppointment}
              className="text-gray-600 text-xs no-underline hover:text-gray-700"
            >
              📞 BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
