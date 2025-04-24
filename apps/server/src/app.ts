import express from "express";
import config from "./config";
import "./config/db";
import healthRoutes from "./routes/healthRoutes";

// Connect to MongoDB
// connectDB() is now in config/db

export const app = express();

// Built-in JSON parser
app.use(express.json());

// Mount health check at '/'
app.use("/", healthRoutes);

export default app;
