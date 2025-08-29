import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

// Basic Express app setup
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// MongoDB connection (local)
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/skinera";

async function connectDb() {
  await mongoose.connect(MONGO_URI, {});
  console.log("MongoDB connected");
}

// Login route
app.post("/api/admin-login", async (req, res) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // For simplicity, return a lightweight session token substitute
    // In production, use JWT/cookies. Here we just signal success.
    return res.json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// Health route
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Start server after DB is ready
const PORT = process.env.PORT || 3002;
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
