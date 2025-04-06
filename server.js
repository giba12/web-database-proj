import connectDB from "./config/database.js";
import dotenv from "dotenv";
import { createServer } from "http";
import cors from "cors";
import express from "express";
import path from "path";

// ✅ Route imports
import onboardingRoutes from "./routes/onboarding.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

// ✅ API Routes
app.use("/api", onboardingRoutes);
app.use("/api", authRoutes); // login route

// ✅ 404 Catch-all
app.use("*", (req, res) => {
  res.status(404).send(`❌ Route not found: ${req.originalUrl}`);
});

// ✅ Connect to DB and start server
httpServer.listen(PORT, () => {
  console.log(`✅ Server @ port: ${PORT}`);
  connectDB();
});
