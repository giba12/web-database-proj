import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import learningCenterRoutes from "./API/routes/LearningCenterRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/learning-center", learningCenterRoutes);

// Simple test route
app.get("/", (req, res) => {
  res.send("Learning Center server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
