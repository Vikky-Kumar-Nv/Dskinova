// Centralized mocked news content used by LatestNews and the news template
import imgList1 from "../../Images/news/1.avif";
import imgList2 from "../../Images/news/2.avif";
import imgList3 from "../../Images/news/3.jpg";
import imgList4 from "../../Images/news/4.jpg";
import botoxMain from "../../Images/Our-Service/imgi_51_woman-getting-cosmetic-injection-of-botox-in-lips-closeup-.jpg";

export const newsItems = [
  {
    slug: "botox-treatment-what-to-expect",
    title: "Botox Treatment: What To Expect, Safety and Aftercare",
    date: "April 26, 2025",
    excerpt:
      "A practical guide from Dskinova dermatologists—what happens during treatment, safety standards, and how to care for your skin after.",
    cardImage: imgList3,
    heroIntro:
      "A practical guide from Dskinova dermatologists—what happens during treatment, safety standards, and how to care for your skin after.",
    content: {
      intro:
        "Botox is one of the most researched cosmetic treatments in the world. At Dskinova, our dermatologists use medical‑grade botulinum toxin to relax overactive facial muscles and soften expression lines—while keeping your face looking natural and balanced.",
      image: botoxMain,
      paragraphs: [
        "Your visit begins with a consultation to assess facial anatomy and discuss goals—forehead lines, crow’s feet, frown lines and more. After cleansing, tiny micro‑injections are placed with ultra‑fine needles. The procedure typically takes 10–15 minutes with minimal discomfort and no downtime.",
        "Results start to appear in 3–7 days and peak by two weeks, lasting about 3–4 months depending on metabolism and muscle strength. For best results: avoid rubbing the area, stay upright for 4 hours, skip saunas and strenuous workouts for 24 hours, and delay facials for a couple of days.",
        "Mild redness or pinpoint bruising may occur and settles quickly. Our medical team follows strict hygiene and dosing protocols to keep treatment safe and predictable.",
        "Who is a good candidate? Most healthy adults seeking softer expression lines. We avoid treatment during pregnancy or breastfeeding and in certain neuromuscular conditions—your dermatologist will review your history to ensure safety.",
      ],
      tags: ["botox", "skincare"],
    },
    popular: [
      {
        slug: "preventive-botox-when-to-start",
        title: "Preventive Botox: When to Start and Who Is a Good Candidate?",
      },
      {
        slug: "fillers-vs-botox",
        title: "Dermal Fillers vs. Botox: Understanding the Difference",
      },
      {
        slug: "prepare-for-first-consultation",
        title: "How to Prepare for Your First Skin Consultation",
      },
    ],
  },
  {
    slug: "preventive-botox-when-to-start",
    title: "Preventive Botox: When to Start and Who Is a Good Candidate?",
    date: "May 10, 2025",
    excerpt:
      "Why many patients choose early, lower-dose Botox to slow etching of fine lines—what to consider and discuss with your dermatologist.",
    cardImage: imgList1,
    heroIntro:
      "An evidence‑based look at early, low‑dose Botox and how it helps slow line formation without looking ‘done’.",
    content: {
      intro:
        "Preventive Botox uses gentle dosing before lines become etched at rest. It’s popular among patients who animate strongly or notice early creasing.",
      image: imgList1,
      paragraphs: [
        "Candidacy depends on muscle activity, genetics and goals. Your dermatologist will evaluate movement patterns and tailor a very conservative plan.",
        "Routine maintenance every 4–6 months helps keep lines soft while preserving natural expression.",
        "Starting early does not ‘freeze’ the face—when performed correctly it simply softens the strongest muscles slightly to reduce repeated folding of the skin.",
        "Costs remain predictable with smaller doses, and treatments can be paused at any time if preferences change.",
      ],
      tags: ["botox", "aging-prevention"],
    },
    popular: [
      {
        slug: "botox-treatment-what-to-expect",
        title: "Botox Treatment: What To Expect, Safety and Aftercare",
      },
      {
        slug: "fillers-vs-botox",
        title: "Dermal Fillers vs. Botox: Understanding the Difference",
      },
      {
        slug: "prepare-for-first-consultation",
        title: "How to Prepare for Your First Skin Consultation",
      },
    ],
  },
  {
    slug: "fillers-vs-botox",
    title: "Dermal Fillers vs. Botox: Understanding the Difference",
    date: "June 1, 2025",
    excerpt:
      "Two powerful tools with different purposes—movement lines vs. volume loss. Learn when each treatment makes sense.",
    cardImage: imgList2,
    heroIntro:
      "A clear comparison between neuromodulators and hyaluronic acid fillers to help set realistic expectations.",
    content: {
      intro:
        "Botox softens expression lines by relaxing muscles; fillers replace lost volume and contour features.",
      image: imgList2,
      paragraphs: [
        "Your plan may use either or both depending on concerns—frown lines, smile lines, lip volume, cheek definition and more.",
        "Fillers (often hyaluronic acid) add structure where the face has deflated with time—think cheeks, nasolabial folds, chin and jawline. Botox targets dynamic wrinkles that appear with movement.",
        "In experienced hands, combining small doses can deliver natural, refreshed results without obvious signs of treatment.",
      ],
      tags: ["botox", "fillers"],
    },
    popular: [
      {
        slug: "botox-treatment-what-to-expect",
        title: "Botox Treatment: What To Expect, Safety and Aftercare",
      },
      {
        slug: "preventive-botox-when-to-start",
        title: "Preventive Botox: When to Start and Who Is a Good Candidate?",
      },
      {
        slug: "prepare-for-first-consultation",
        title: "How to Prepare for Your First Skin Consultation",
      },
    ],
  },
  {
    slug: "prepare-for-first-consultation",
    title: "How to Prepare for Your First Skin Consultation",
    date: "July 12, 2025",
    excerpt:
      "Simple steps—what to bring, how to describe concerns, and tips to get the most from your visit.",
    cardImage: imgList4,
    heroIntro:
      "Make the most of your appointment with a focused, personalized discussion about your skin goals.",
    content: {
      intro:
        "Arrive with current skincare products, medical history and photos if helpful. Think about top priorities and timelines.",
      image: imgList4,
      paragraphs: [
        "Avoid active irritants 48 hours before. Be honest about previous treatments and what you liked or didn’t. Together we’ll craft a safe, realistic plan.",
        "List any allergies and medications (including supplements). If you have upcoming events, let us know so we can plan around them.",
        "Bring your questions—downtime, longevity, pricing—and we’ll walk you through options step‑by‑step.",
      ],
      tags: ["consultation", "skincare"],
    },
    popular: [
      {
        slug: "botox-treatment-what-to-expect",
        title: "Botox Treatment: What To Expect, Safety and Aftercare",
      },
      {
        slug: "fillers-vs-botox",
        title: "Dermal Fillers vs. Botox: Understanding the Difference",
      },
      {
        slug: "preventive-botox-when-to-start",
        title: "Preventive Botox: When to Start and Who Is a Good Candidate?",
      },
    ],
  },
];

export function getNewsBySlug(slug) {
  return newsItems.find((n) => n.slug === slug);
}

export function getLatestNews(limit = 4) {
  return newsItems.slice(0, limit);
}
