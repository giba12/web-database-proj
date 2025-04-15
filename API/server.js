
import dotenv from "dotenv";
import { createServer } from "http";
import cors from "cors";
import express from "express";
import path from "path";


// ✅ Route imports
//import router from "./routes/deviceRoutes.js"; 
import onboarding from "./routes/onboardingRoutes.js";
import authRoutes from "./routes/authRoutes.js";


import { initializeSocket } from "./socket/socket.server.js";
import { connectDB } from "./config/database.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

initializeSocket(httpServer);

// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL, //|| "http://localhost:5173", //5173
    credentials: true,
  })
);

// ✅ API Routes
//app.use("/api/on", onboarding);
app.use("/api/auth", authRoutes); // login route

if (process.env.NODE_ENV === "development") { //production or development
	app.use(express.static(path.join(__dirname, "/new-client/src")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "new-client", "index.html"));
	});
}

// ✅ 404 Catch-all
app.use("*", (req, res) => {
  res.status(404).send(`❌ Route not found: ${req.originalUrl}`);
});

// ✅ Connect to DB and start server
httpServer.listen(PORT, () => {
  console.log(`✅ Server @ port: ${PORT}`);
  connectDB();
});

app.use(cors());
app.use(express.json());








