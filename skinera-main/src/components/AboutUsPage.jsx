import React, { useState } from "react";
import Header from "./Header.jsx";
import HeroTwo from "./HeroTwo.jsx";
import MoreYouCare from "./MoreYouCare.jsx";
import StorySection from "./StorySection.jsx";
import OurService from "./OurService.jsx";
import ExpertSkincare from "./ExpertSkincare.jsx";
import ProfessionalStaff from "./ProfessionalStaff.jsx";
import Footer from "./Footer.jsx";
import AppointmentModal from "./AppointmentModal.jsx";

export default function AboutUsPage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);
  const handleAppointmentSubmit = (payload) => {
    // TODO: Wire to backend or service (email, API). For now, just log.
    console.log("Appointment request:", payload);
  };

  return (
    <div className="min-h-screen bg-[#e0a075]">
      <Header onBookAppointment={openAppointment} />
      <HeroTwo />
      <MoreYouCare />
      <StorySection />
      <OurService onBookAppointment={openAppointment} />
      {/* Very thin, light divider under Our Service (About page only) */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[0.5px] bg-white/25" />
      </div>
      <ExpertSkincare />
      <ProfessionalStaff />
      <Footer />
      <AppointmentModal
        open={appointmentOpen}
        onClose={closeAppointment}
        onSubmit={handleAppointmentSubmit}
      />
    </div>
  );
}
