import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

export default {
  port: process.env.PORT ? Number(process.env.PORT) : 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  dbUri: process.env.MONGODB_URI || "",
  jwtSecret: process.env.JWT_SECRET || ""
};
