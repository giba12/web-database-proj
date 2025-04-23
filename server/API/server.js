//use old server and properly integrate the project
//AKA be sure to finish client-side auth, onboarding, deboarding, role access, etc

import dotenv from "dotenv";
import { createServer } from "http";
import cors from "cors";
import express from "express";
import path from "path";



// ✅ Route imports
//import router from "./routes/deviceRoutes.js"; 
import onboard from "./routes/onboardingRoutes.js";
//import authRoutes from "./routes/authRoutes.js";


import { initializeSocket } from "./socket/socket.server.js";
import { connectDB } from "./config/database.js";

dotenv.config();

const app = express();
const httpServer = createServer(app);
const PORT =  5000; //process.env.PORT ||
const __dirname = path.resolve();

initializeSocket(httpServer);

// ✅ Middleware
app.use(cors())
app.use(express.json());

/*app.use(
  cors({
    origin: process.env.CLIENT_URL, //|| "http://localhost:5173", //5173
    credentials: true,
  })
); */



// ✅ API Routes
//app.use("/api/on", onboarding);
//app.use("/api/auth", authRoutes); // login route
app.use('/api',onboard)

if (process.env.NODE_ENV === "development") { //production or development
	app.use(express.static(path.join(__dirname, "/client/src")));

	app.get(/(.*)/, (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "index.html"));
	});
}

// ✅ 404 Catch-all
app.use(/(.*)/, (req, res) => {
  res.status(404).send(`❌ Route not found: ${req.originalUrl}`);
});

// ✅ Connect to DB and start server
httpServer.listen(PORT, () => {
  console.log(`✅ Server @ port: ${PORT}`);
  connectDB();
});

app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
