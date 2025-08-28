import React, { useState } from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import SecondSection from "./SecondSection.jsx";
import OurService from "./OurService.jsx";
import AboutUs from "./AboutUs.jsx";
import FounderMessage from "./FounderMessage.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import StorySection from "./StorySection.jsx";
import WhatPeopleSays from "./WhatPeopleSays.jsx";
import ExpertSkincare from "./ExpertSkincare.jsx";
import GalleryCollection from "./GalleryCollection.jsx";
import ConsultationBanner from "./ConsultationBanner.jsx";
import LatestNews from "./LatestNews.jsx";
import ExclusiveUpdate from "./ExclusiveUpdate.jsx";
import Footer from "./Footer.jsx";
import AppointmentModal from "./AppointmentModal.jsx";

export default function HomePage() {
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
      <Hero onBookAppointment={openAppointment} />
      <SecondSection />
      <OurService onBookAppointment={openAppointment} />
      <AboutUs />
      <FounderMessage />
      <WhyChooseUs />
      <StorySection />
      <WhatPeopleSays />
      <ExpertSkincare />
      <GalleryCollection />
      <ConsultationBanner onBookAppointment={openAppointment} />
      <LatestNews />
      <ExclusiveUpdate />
      <Footer />
      <AppointmentModal
        open={appointmentOpen}
        onClose={closeAppointment}
        onSubmit={handleAppointmentSubmit}
      />
    </div>
  );
}
