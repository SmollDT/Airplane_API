import express from "express";
import { getAirplaneData } from "../controllers/airplaneController.js";
import { validateYear } from "../middleware/validators.js";
const router = express.Router();
router.get("/:year", validateYear, getAirplaneData);
export default router;
//# sourceMappingURL=airplaneRoutes.js.map