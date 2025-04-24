import mongoose from "mongoose";
import config from "./index";

mongoose
  .connect(config.dbUri, { autoIndex: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
