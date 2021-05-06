import express from "express";
import { sendMail } from "../controllers";

const router = express.Router();

router.get("/", sendMail);

export default router;
