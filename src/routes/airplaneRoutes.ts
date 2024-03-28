import express from "express";
import { getAirplaneData } from "../controllers/airplaneController.js";
import { validateYear } from "../middleware/validators.js";

const router = express.Router();

router.get("/:city", validateYear, getAirplaneData);

export default router;