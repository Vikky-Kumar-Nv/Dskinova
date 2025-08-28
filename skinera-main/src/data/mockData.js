// Mock data for services
// Import images so Vite processes them for production builds
import antiAgingImg from "../../Images/Services/anti-aging.jpg";
import decorativeFlowerImg from "../../Images/Services/Flower/flower.png";

export const servicesData = {
  "anti-aging": {
    id: "anti-aging",
    title: "Anti-Aging Treatment",
    price: 2500,
    currency: "₹",
    priceNote: "per session",
    image: antiAgingImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: antiAgingImg, // placeholder for video
    overview: {
      title: "Overview",
      description:
        "Advanced anti-aging facial treatment designed to reduce fine lines, wrinkles, and age spots. Our expert aestheticians use premium serums and cutting-edge technology to restore youthful radiance. Treatment includes deep cleansing, exfoliation, and targeted anti-aging therapy for visible results.\n\nThis comprehensive treatment stimulates collagen production and improves skin elasticity. Perfect for mature skin seeking rejuvenation and long-lasting hydration with natural glow enhancement.",
    },
    included: [
      "Skin Analysis",
      "Anti-Aging Serum",
      "Collagen Mask",
      "Moisturizing",
    ],
    excluded: [
      "Chemical Peel",
      "Botox Injection",
      "Laser Therapy",
      "Dermal Fillers",
    ],
    additionalInfo: {
      duration: "60-90 minutes",
      sessions: "4-6 sessions recommended",
      results: "Visible in 2-3 weeks",
    },
  },
  // Additional services can be added here
  "laser-hair-removal": {
    id: "laser-hair-removal",
    title: "Laser Hair Removal",
    price: 3500,
    currency: "₹",
    priceNote: "per session",
    image: antiAgingImg, // placeholder
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: antiAgingImg,
    overview: {
      title: "Overview",
      description:
        "State-of-the-art laser hair removal technology for permanent hair reduction. Safe, effective, and suitable for all skin types.",
    },
    included: [
      "Consultation",
      "Laser Treatment",
      "Cooling Gel",
      "Post-care Products",
    ],
    excluded: [
      "Numbing Cream",
      "Additional Areas",
      "Touch-up Sessions",
      "Home Care Kit",
    ],
  },
};

export const getServiceById = (id) => {
  return servicesData[id] || null;
};

export const getAllServices = () => {
  return Object.values(servicesData);
};
