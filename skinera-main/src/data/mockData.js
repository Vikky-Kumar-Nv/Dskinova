// Mock data for services
// Import images so Vite processes them for production builds
import antiAgingImg from "../../Images/Services/anti-aging.jpg";
import deepPeelingImg from "../../Images/Services/deep-peeling.jpg";
import facialsImg from "../../Images/Services/facials.jpg";
import laserHairRemovalImg from "../../Images/Services/laser-hair-removal.jpg";
// Note: file name in assets is spelled 'threapy'
import laserSkinTherapyImg from "../../Images/Services/laser-skin-threapy.jpg";
import mesotherapyImg from "../../Images/Services/mesotherapy.jpg";
import microdermabrasionImg from "../../Images/Services/microdermabrasion.jpg";
import pigmentationSolutionsImg from "../../Images/Services/pigmentation-solution.jpg";
import skinTighteningImg from "../../Images/Services/skin-tightening.jpg";
import hairPrpImg from "../../Images/Services/hair-prp.jpg";
import hairGfcImg from "../../Images/Services/hair-gfc.jpg";
import hairRegrowthLaserImg from "../../Images/Services/hair-regrowth-laser.jpg";
import koreanSkinTreatmentImg from "../../Images/Services/korean-skin-treatment.jpg";
import botoxTreatmentImg from "../../Images/Services/botox-treatment.jpg";
import manicureImg from "../../Images/Services/Manicure.jpg";
import pedicureImg from "../../Images/Services/Pedicure.jpg";
import fillerImg from "../../Images/Our-Service/imgi_53_hyaluronic-acid-injection-fillers-for-cheeks.jpg";
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
  // Additional services
  "deep-peelings": {
    id: "deep-peelings",
    title: "Deep Peelings",
    price: 2200,
    currency: "₹",
    priceNote: "per session",
    image: deepPeelingImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: deepPeelingImg,
    overview: {
      title: "Overview",
      description:
        "Intense resurfacing peel that targets texture, pigmentation, and fine lines. Helps reveal clearer, smoother, and brighter skin with improved tone.\n\nIdeal for dull or uneven skin seeking visible renewal with professional post-care guidance.",
    },
    included: ["Consultation", "Customized Peel", "Neutralizer", "Sunscreen"],
    excluded: ["Home Peel Kits", "Dermal Fillers", "Microneedling", "Laser"],
  },
  facials: {
    id: "facials",
    title: "Facials",
    price: 1500,
    currency: "₹",
    priceNote: "per session",
    image: facialsImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: facialsImg,
    overview: {
      title: "Overview",
      description:
        "Customized facials for hydration, brightening, and deep cleansing. Includes exfoliation, massage, and mask for refreshed, glowing skin.",
    },
    included: ["Cleansing", "Exfoliation", "Mask", "Moisturizer"],
    excluded: ["Peels", "Injectables", "Laser", "Dermaplaning"],
  },
  "laser-hair-removal": {
    id: "laser-hair-removal",
    title: "Laser Hair Removal",
    price: 3500,
    currency: "₹",
    priceNote: "per session",
    image: laserHairRemovalImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: laserHairRemovalImg,
    overview: {
      title: "Overview",
      description:
        "State-of-the-art laser hair removal technology for long-term hair reduction. Safe, effective, and suitable for all skin types.",
    },
    included: ["Consultation", "Laser Treatment", "Cooling Gel", "Post-care"],
    excluded: ["Numbing Cream", "Additional Areas", "Touch-ups", "Home Kit"],
  },
  "laser-skin-therapy": {
    id: "laser-skin-therapy",
    title: "Laser Skin Therapy",
    price: 4800,
    currency: "₹",
    priceNote: "per session",
    image: laserSkinTherapyImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: laserSkinTherapyImg,
    overview: {
      title: "Overview",
      description:
        "Targeted laser treatment for scars, acne marks, and pigmentation. Stimulates collagen and promotes smoother, more even skin.",
    },
    included: ["Skin Prep", "Laser Session", "Cooling", "Aftercare"],
    excluded: ["Injectables", "Peels", "Home Lasers", "Medication"],
  },
  mesotherapy: {
    id: "mesotherapy",
    title: "Mesotherapy",
    price: 3200,
    currency: "₹",
    priceNote: "per session",
    image: mesotherapyImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: mesotherapyImg,
    overview: {
      title: "Overview",
      description:
        "Microinjections of vitamins and actives to rejuvenate and hydrate skin. Enhances tone and texture with minimal downtime.",
    },
    included: ["Consultation", "Topical Numbing", "Meso Cocktail", "Aftercare"],
    excluded: ["PRP", "Fillers", "Laser", "Peels"],
  },
  microdermabrasion: {
    id: "microdermabrasion",
    title: "Microdermabrasion",
    price: 2000,
    currency: "₹",
    priceNote: "per session",
    image: microdermabrasionImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: microdermabrasionImg,
    overview: {
      title: "Overview",
      description:
        "Gentle exfoliating procedure to remove dead skin cells, refine pores, and enhance glow. Suitable for most skin types.",
    },
    included: ["Cleansing", "Microderm", "Serum", "SPF"],
    excluded: ["Peels", "Dermaplaning", "Laser", "Injectables"],
  },
  "pigmentation-solutions": {
    id: "pigmentation-solutions",
    title: "Pigmentation Solutions",
    price: 3800,
    currency: "₹",
    priceNote: "per session",
    image: pigmentationSolutionsImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: pigmentationSolutionsImg,
    overview: {
      title: "Overview",
      description:
        "Targeted treatments for melasma, tanning, and dark spots using peels, laser, or serums as per skin type and concern.",
    },
    included: ["Assessment", "Treatment Plan", "In-clinic Care", "SPF"],
    excluded: ["Home Peels", "Self-medication", "Injectables", "Fillers"],
  },
  "skin-tightening": {
    id: "skin-tightening",
    title: "Skin Tightening",
    price: 4500,
    currency: "₹",
    priceNote: "per session",
    image: skinTighteningImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: skinTighteningImg,
    overview: {
      title: "Overview",
      description:
        "Non-surgical tightening to lift and firm skin using RF or ultrasound-based technology. Improves laxity and contours.",
    },
    included: ["Consultation", "Treatment Session", "Cooling", "Aftercare"],
    excluded: ["Surgery", "Injectables", "Implants", "Fillers"],
  },
  "hair-prp": {
    id: "hair-prp",
    title: "Hair PRP",
    price: 5000,
    currency: "₹",
    priceNote: "per session",
    image: hairPrpImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: hairPrpImg,
    overview: {
      title: "Overview",
      description:
        "Platelet-Rich Plasma therapy to strengthen hair roots and encourage regrowth. Minimally invasive and natural.",
    },
    included: [
      "Blood Draw",
      "PRP Preparation",
      "Scalp Injections",
      "Post-care",
    ],
    excluded: ["GFC", "Transplant", "Medication", "Laser"],
  },
  "hair-gfc": {
    id: "hair-gfc",
    title: "Hair GFC",
    price: 6000,
    currency: "₹",
    priceNote: "per session",
    image: hairGfcImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: hairGfcImg,
    overview: {
      title: "Overview",
      description:
        "Growth Factor Concentrate therapy to boost hair density and reduce hair fall. Advanced alternative to conventional PRP.",
    },
    included: ["Assessment", "GFC Preparation", "Injections", "Guidance"],
    excluded: ["PRP", "Transplant", "Medications", "Laser"],
  },
  "hair-regrowth-laser": {
    id: "hair-regrowth-laser",
    title: "Hair Regrowth Laser",
    price: 3000,
    currency: "₹",
    priceNote: "per session",
    image: hairRegrowthLaserImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: hairRegrowthLaserImg,
    overview: {
      title: "Overview",
      description:
        "Low-level laser therapy (LLLT) to stimulate scalp and promote hair growth. Comfortable and non-invasive.",
    },
    included: ["Consultation", "Laser Session", "Scalp Care", "Plan"],
    excluded: ["PRP", "GFC", "Transplant", "Drugs"],
  },
  "korean-skin-treatment": {
    id: "korean-skin-treatment",
    title: "Korean Skin Treatment",
    price: 2800,
    currency: "₹",
    priceNote: "per session",
    image: koreanSkinTreatmentImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: koreanSkinTreatmentImg,
    overview: {
      title: "Overview",
      description:
        "Signature K-beauty protocols focusing on hydration, glass-skin glow, and barrier repair using multi-step care.",
    },
    included: ["Double Cleanse", "Essence", "Ampoules", "Sheet Mask"],
    excluded: ["Injectables", "Laser", "Peels", "Dermaplaning"],
  },
  "botox-treatment": {
    id: "botox-treatment",
    title: "Botox Treatment",
    price: 12000,
    currency: "₹",
    priceNote: "per area",
    image: botoxTreatmentImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: botoxTreatmentImg,
    overview: {
      title: "Overview",
      description:
        "FDA-approved botulinum toxin injections to soften expression lines such as frown lines and crow's feet for a smoother look.",
    },
    included: ["Consultation", "Marking", "Injection", "Aftercare"],
    excluded: ["Fillers", "Peels", "Laser", "Surgery"],
  },
  filler: {
    id: "filler",
    title: "Dermal Filler Treatment",
    price: 15000,
    currency: "₹",
    priceNote: "per syringe/area",
    image: fillerImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: fillerImg,
    overview: {
      title: "Overview",
      description:
        "Hyaluronic acid-based dermal fillers to restore volume and contour lips, cheeks, and jawline. Provides immediate, natural-looking enhancement with minimal downtime.",
    },
    included: ["Consultation", "Marking", "Injection", "Aftercare"],
    excluded: ["Botox", "Laser", "Peels", "Surgery"],
  },
  manicure: {
    id: "manicure",
    title: "Manicure",
    price: 800,
    currency: "₹",
    priceNote: "per session",
    image: manicureImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: manicureImg,
    overview: {
      title: "Overview",
      description:
        "Professional manicure for clean, nourished, and polished hands. Includes cuticle care, nail shaping, gentle exfoliation, and hydration.",
    },
    included: ["Nail Shaping", "Cuticle Care", "Massage", "Polish"],
    excluded: ["Gel Extensions", "Acrylics", "Nail Art", "Paraffin"],
  },
  pedicure: {
    id: "pedicure",
    title: "Pedicure",
    price: 1000,
    currency: "₹",
    priceNote: "per session",
    image: pedicureImg,
    decorativeFlower: decorativeFlowerImg,
    videoThumbnail: pedicureImg,
    overview: {
      title: "Overview",
      description:
        "Revitalizing pedicure to soften and refresh feet. Includes soaking, exfoliation, cuticle care, nail shaping, and moisturizing.",
    },
    included: ["Foot Soak", "Exfoliation", "Cuticle Care", "Polish"],
    excluded: [
      "Medical Pedicure",
      "Callus Removal",
      "Gel Extensions",
      "Acrylics",
    ],
  },
};

export const getServiceById = (id) => {
  return servicesData[id] || null;
};

export const getAllServices = () => {
  return Object.values(servicesData);
};
