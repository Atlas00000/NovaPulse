import express from "express";
import config from "./config";
import healthRoutes from "./routes/healthRoutes";

export const app = express();

// Built-in JSON parser
app.use(express.json());

// Mount health check at '/'
app.use("/", healthRoutes);

export default app;
