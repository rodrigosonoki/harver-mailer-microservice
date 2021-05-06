import express from "express";
import { welcome } from "../controllers";

const router = express.Router();

router.post("/welcome", welcome);

export default router;
