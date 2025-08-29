import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";
import dotenv from "dotenv";
dotenv.config();

// Basic Express app setup
const app = express();
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

// MongoDB connection (from env only)
const { MONGO_URI } = process.env;

async function connectDb() {
  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not set in environment");
  }
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

// Get profile (username only)
app.get("/api/admin/profile", async (req, res) => {
  try {
    const admin = await Admin.findOne({});
    if (!admin)
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    return res.json({ success: true, username: admin.username });
  } catch (err) {
    console.error("Profile error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// Change password
app.post("/api/admin/change-password", async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body || {};
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Both currentPassword and newPassword are required",
      });
    }
    if (String(newPassword).length < 6) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 6 characters",
      });
    }
    const admin = await Admin.findOne({});
    if (!admin)
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    const ok = await bcrypt.compare(currentPassword, admin.passwordHash);
    if (!ok)
      return res
        .status(401)
        .json({ success: false, message: "Current password is incorrect" });
    admin.passwordHash = await bcrypt.hash(newPassword, 10);
    await admin.save();
    return res.json({ success: true, message: "Password updated" });
  } catch (err) {
    console.error("Change password error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// Change username
app.post("/api/admin/change-username", async (req, res) => {
  try {
    const { password, newUsername } = req.body || {};
    if (!password || !newUsername) {
      return res.status(400).json({
        success: false,
        message: "Both password and newUsername are required",
      });
    }
    if (String(newUsername).trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: "Username must be at least 3 characters",
      });
    }
    const admin = await Admin.findOne({});
    if (!admin)
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok)
      return res
        .status(401)
        .json({ success: false, message: "Password is incorrect" });
    admin.username = String(newUsername).trim();
    await admin.save();
    return res.json({
      success: true,
      message: "Username updated",
      username: admin.username,
    });
  } catch (err) {
    if (err?.code === 11000) {
      return res
        .status(409)
        .json({ success: false, message: "Username already in use" });
    }
    console.error("Change username error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// Logout (stateless – provided for completeness)
app.post("/api/admin-logout", (req, res) => {
  return res.json({ success: true, message: "Logged out" });
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
