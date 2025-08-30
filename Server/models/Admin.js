import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
  },
  { collection: "admins", timestamps: true }
);

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);
export default Admin;
