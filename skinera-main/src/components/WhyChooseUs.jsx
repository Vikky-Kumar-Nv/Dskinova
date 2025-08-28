import React from "react";
import whyChooseUsImage from "../../Images/WhyChooseUs/1.png";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-r from-[#f7e6d9] from-60% to-white py-16 sm:py-20 lg:py-24 border-t border-b border-gray-200 overflow-hidden md:overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#BE7F58] font-serif text-xl italic mb-4">
            Benefits
          </h3>
          <h2 className="text-4xl sm:text-5xl font-domine font-medium text-gray-700">
            Why Choose Us
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Benefits 1 & 2 */}
          <div className="space-y-12">
            {/* Benefit 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#c98963] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-3">
                  20 Years of Cosmetology Experience
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Patients who wish to improve the health of their skin have
                  many excellent options.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#c98963] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-3">
                  A Leader in Aesthetic Skin Care
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our cosmetology clinic helps you take control of your skin
                  care.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={whyChooseUsImage}
                alt="Beautiful woman with healthy skin"
                className="w-full max-w-md h-auto object-cover rounded-md"
              />
            </div>
          </div>

          {/* Right Column - Benefits 3 & 4 */}
          <div className="space-y-12">
            {/* Benefit 3 */}
            <div className="flex items-start gap-4 flex-row-reverse text-right">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#c98963] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-3">
                  Advanced Cosmetic Techniques
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Disorders of skin are addressed with emphasis on prevention
                  and early detection.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start gap-4 flex-row-reverse text-right">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#c98963] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-3">
                  Skilled, experienced cosmetologists
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Only certified and tested products ensure the perfect
                  treatment for your skin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
