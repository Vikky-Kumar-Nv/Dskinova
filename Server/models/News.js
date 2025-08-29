import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    intro: { type: String, default: "" },
    image: { type: String, default: "" },
    paragraphs: { type: [String], default: [] },
    tags: { type: [String], default: [] },
  },
  { _id: false }
);

const newsSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    date: { type: Date, default: Date.now },
    excerpt: { type: String, default: "" },
    cardImage: { type: String, default: "" },
    heroIntro: { type: String, default: "" },
    content: { type: contentSchema, default: () => ({}) },
    popular: { type: [String], default: [] },
  },
  { timestamps: true }
);

const News = mongoose.models.News || mongoose.model("News", newsSchema);
export default News;
