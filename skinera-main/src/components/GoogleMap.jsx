import React from "react";

const GoogleMap = ({
  title = "Our Location",
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.370340461055!2d75.77656337611594!3d26.955169158263573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3404de74af7%3A0x1be4186b1cc34063!2sDSKINOVA%20%5BSkin%20Clinic%20in%20Jaipur%5D!5e0!3m2!1sen!2sin!4v1756271923737!5m2!1sen!2sin",
  className = "",
}) => {
  return (
    <section className={`w-full relative ${className}`}>
      {/* Map Container with responsive height */}
      <div className="w-full h-[40vh] min-h-[260px] max-h-[500px] md:h-[80vh] md:min-h-[500px] md:max-h-[900px] relative overflow-hidden">
        {title && (
          <div className="absolute top-4 left-4 z-10 bg-white bg-opacity-95 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-[rgb(208,147,107)] font-['Domine,sans-serif']">
              {title}
            </h3>
          </div>
        )}

        <iframe
          src={mapSrc}
          className="w-full h-full border-0 transition-all duration-300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DSKINOVA Clinic Location - Jaipur, Rajasthan"
          style={{
            filter: "grayscale(85%) contrast(1.05)",
          }}
        />

        {/* Subtle overlay for better visual integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/3 to-transparent pointer-events-none"></div>

        {/* Top gradient overlay for seamless blend under content */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      </div>

      {/* Mobile optimization: Touch-friendly area */}
      <div className="block md:hidden absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-12 pointer-events-auto bg-transparent"></div>
      </div>
    </section>
  );
};

export default GoogleMap;
