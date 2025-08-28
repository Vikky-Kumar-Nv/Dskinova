import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AppointmentModal from "./AppointmentModal.jsx";
import HeroThree from "./HeroThree.jsx";
import { getServiceById } from "../data/mockData";
import bgFlower from "../../Images/Our-Service/bg-Flower-png-Use-It-InLargeWidth.png";
import ServiceExtras from "./ServiceExtras.jsx";
import ClientFaq from "./ClientFaq.jsx";
import OurService from "./OurService.jsx";

export default function ServiceDetail({ serviceId }) {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);
  const handleAppointmentSubmit = (payload) => {
    console.log("Appointment request:", payload);
  };

  const params = typeof useParams === "function" ? useParams() : {};
  const effectiveId =
    serviceId || (params ? params.id : undefined) || "anti-aging";

  const service = getServiceById(effectiveId);

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    console.log("Playing video for:", service.title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      <Header onBookAppointment={openAppointment} />

      <HeroThree
        title={service.title}
        introPara="Professional skincare treatments for radiant and healthy skin"
      />

      {/* Service Detail Content */}
      <div className="relative overflow-hidden py-16">
        {/* side floral decoration */}
        <img
          src={bgFlower}
          alt=""
          className="pointer-events-none select-none hidden md:block absolute left-0 top-6 h-[520px] w-auto opacity-60 filter brightness-75 contrast-125"
        />
        <img
          src={bgFlower}
          alt=""
          className="pointer-events-none select-none hidden md:block absolute right-0 top-6 h-[520px] w-auto opacity-60 filter brightness-75 contrast-125 -scale-x-100"
        />

        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
              {/* Left Column - Image/Video Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Service Details */}
              <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
                {/* Overview Section */}
                <div className="space-y-2 lg:space-y-3">
                  <h3 className="text-lg sm:text-xl font-domine font-medium text-[#b37556]">
                    {service.overview.title}
                  </h3>
                  <div className="text-gray-600 leading-relaxed text-sm">
                    {service.overview.description
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p
                          key={index}
                          className={index > 0 ? "mt-2 lg:mt-3" : ""}
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                {/* Included & Excluded Section */}
                <div>
                  <h3 className="text-lg sm:text-xl font-domine font-medium text-[#b37556] mb-3 lg:mb-4">
                    Included & Excluded
                  </h3>

                  <div className="grid grid-cols-2 gap-4 lg:gap-8">
                    {/* Included */}
                    <div className="flex-1">
                      <ul className="space-y-2">
                        {service.included.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <span className="text-green-500 text-sm">✓</span>
                            <span className="text-gray-700 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Excluded */}
                    <div className="flex-1">
                      <ul className="space-y-2">
                        {service.excluded.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <span className="text-red-500 text-sm">✗</span>
                            <span className="text-gray-700 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <div className="mt-4 lg:mt-6">
                    <button
                      onClick={openAppointment}
                      className="w-full sm:w-auto bg-[#c98963] hover:bg-[#be7f58] text-white font-domine font-medium py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extras (compact features) - inserted after service detail */}
      <ServiceExtras />

      {/* Client FAQ accordion */}
      <ClientFaq />

      {/* Related services */}
      <OurService onBookAppointment={openAppointment} />

      <Footer />

      <AppointmentModal
        open={appointmentOpen}
        onClose={closeAppointment}
        onSubmit={handleAppointmentSubmit}
      />
    </div>
  );
}
