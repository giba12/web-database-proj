import express from "express";
import { loginUser } from "../controllers/authController.js"; 
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

router.post("/login", loginUser);


export default router;
