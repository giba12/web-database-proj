import express from "express";
import { onboardUser } from "../controllers/onboardingController.js";

const router = express.Router();

router.post("/onboarding", onboardUser);

export default router;
