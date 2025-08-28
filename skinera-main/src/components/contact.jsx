import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ContactForm from "./ContactForm.jsx";
import GoogleMap from "./GoogleMap.jsx";
import HeroThree from "./HeroThree.jsx";
import bgFlower from "../../Images/Contact-page/bg-3-flower-2x.png";

const content = {
  title: "Contact Us",
  introPara:
    "We're here to help. Reach out for appointments, treatment queries, or clinic information.",
  getInTouchTitle: "Get In Touch",
  getInTouchPara:
    "Visit our clinic or contact us via phone or email. We'll be happy to assist you.",
  locations: [
    {
      city: "Jaipur, Rajasthan",
      phone: "+91 78788 67379",
      email: "care@dskinova.in",
      address:
        "2nd Floor, A-2, Mall Rd, opposite MAHESHWARI GIRLS PUBLIC SCHOOL, Sector-3, Ambabari, Naya Khera, Vidyadhar Nagar, Jaipur, Rajasthan 302029",
    },
  ],
  form: {
    title: "Your Details",
    fields: [
      {
        label: "First Name *",
        name: "name",
        placeholder: "Your Name",
        type: "text",
        required: true,
      },
      {
        label: "Email Address *",
        name: "email",
        placeholder: "you@example.com",
        type: "email",
        required: true,
      },
      {
        label: "Subject *",
        name: "subject",
        placeholder: "Subject",
        type: "text",
        required: true,
      },
      {
        label: "Comments / Questions *",
        name: "message",
        placeholder: "Your Message",
        type: "textarea",
        required: true,
      },
    ],
    button: "Submit Message",
  },
};

const SectionTitle = ({ title, para }) => (
  <div className="text-left">
    <h2 className="text-[48px] leading-[48px] font-[500] text-[rgb(208,147,107)] font-['Domine,sans-serif']">
      {title}
    </h2>
    <p className="text-sm md:text-base text-gray-600 mt-4 leading-relaxed max-w-md">
      {para}
    </p>
  </div>
);

const ContactCard = ({ loc }) => (
  <div className="mt-6 md:mt-8">
    <h3 className="text-[24px] leading-[24px] font-[600] text-[rgb(208,147,107)] font-['Domine,sans-serif'] mb-2">
      {loc.city}
    </h3>
    <ul className="space-y-2 text-sm md:text-base text-gray-700">
      <li className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faPhone}
          className="h-4 w-4 text-[rgb(208,147,107)] flex-shrink-0"
        />
        <a href={`tel:${loc.phone}`} className="hover:text-[rgb(208,147,107)]">
          {loc.phone}
        </a>
      </li>
      <li className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="h-4 w-4 text-[rgb(208,147,107)] flex-shrink-0"
        />
        <a
          href={`mailto:${loc.email}`}
          className="hover:text-[rgb(208,147,107)]"
        >
          {loc.email}
        </a>
      </li>
      <li className="flex items-start gap-2">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="h-4 w-4 text-[rgb(208,147,107)] flex-shrink-0 mt-0.5"
        />
        <p>{loc.address}</p>
      </li>
    </ul>
  </div>
);

const ContactPage = () => (
  <>
    <Header />
    <main className="bg-white">
      <HeroThree title={content.title} introPara={content.introPara} />
      <section className="relative z-20 py-16 md:py-24 lg:py-32 overflow-hidden bg-gray-50">
        <div className="absolute top-0 right-0 h-full hidden md:block">
          <img
            src={bgFlower}
            alt="Decorative floral design"
            className="h-[85%] w-[180px] object-contain"
            style={{ marginTop: "20px", opacity: "1%" }}
          />
        </div>
        <div className="mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 md:grid-cols-5 gap-2 lg:gap-4 xl:gap-6 items-start max-w-[1100px] xl:max-w-[1200px]">
          <div className="pr-0 md:pr-0 lg:pr-1 md:col-span-3 max-w-[560px] md:self-center">
            <SectionTitle
              title={content.getInTouchTitle}
              para={content.getInTouchPara}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              {content.locations.map((loc, index) => (
                <ContactCard key={index} loc={loc} />
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <ContactForm formData={content.form} />
          </div>
        </div>
      </section>

      {/* Google Map Section - pulled up on desktop to overlap like design */}
      <GoogleMap
        title="Visit Our Clinic"
        className="md:-mt-24 lg:-mt-36 xl:-mt-44"
      />
    </main>
    <Footer />
  </>
);

export default ContactPage;
