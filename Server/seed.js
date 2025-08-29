import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/skinera";

async function run() {
  await mongoose.connect(MONGO_URI, {});
  console.log("MongoDB connected");

  const username = process.env.SEED_ADMIN_USERNAME || "admin";
  const password = process.env.SEED_ADMIN_PASSWORD || "admin";

  let admin = await Admin.findOne({ username });
  if (admin) {
    console.log(
      `Admin user '${username}' already exists. Updating password...`
    );
    admin.passwordHash = await bcrypt.hash(password, 10);
    await admin.save();
  } else {
    const passwordHash = await bcrypt.hash(password, 10);
    await Admin.create({ username, passwordHash });
    console.log(`Seeded admin user '${username}'.`);
  }

  await mongoose.disconnect();
  console.log("MongoDB disconnected");
}

run().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
