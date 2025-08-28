import React from "react";
import doctorImage from "../../Images/Doctor-img/1.jpeg";

export default function FounderMessage() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder's Message Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-domine font-medium text-gray-800 mb-4">
            Founder’s Message
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Founder Image and Name */}
          <div className="lg:order-1">
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src={doctorImage}
                  alt="Dr. Kirti Kothari - Founder"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full shadow-xl mx-auto"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-domine text-2xl font-medium text-[#BE7F58] mb-2">
                  Dr. Kirti Kothari
                </h3>
                <p className="text-gray-600 font-medium mb-3">
                  Founder & Lead Cosmetologist
                </p>
                <div className="w-20 h-1 bg-[#c98963] mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:order-2">
            <div className="space-y-6">
              <div className="space-y-5 text-gray-700 text-base leading-relaxed">
                <p>
                  I’m <span className="font-semibold">Dr. Kirti Kothari</span> —
                  a cosmetologist with over three years of experience across
                  clinical and aesthetic dermatology. As founder of
                  <span className="font-semibold"> DSkinova</span>, my focus is
                  helping people feel confident in their skin and hair through
                  evidence‑based, personalized care.
                </p>
                <p>
                  My practice blends medical insight with cosmetic science to
                  address concerns such as acne, pigmentation, early signs of
                  aging, hair thinning, and scalp issues. We prioritize modern
                  techniques, tailored treatment plans, and clear, honest
                  guidance.
                </p>
                <p>
                  Every skin and hair journey is unique. I’m committed to
                  creating a safe, welcoming space where you’re heard,
                  supported, and empowered to look and feel your best.
                </p>
                <p className="text-sm text-[#BE7F58] font-medium">
                  Founder · Cosmetologist · Skin & Hair Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
