import { param } from "express-validator";
export const validateYear = param("year")
    .isString()
    .isIn(["2000", "2001"])
    .withMessage("Must be a year between 2000-2001");
//# sourceMappingURL=validators.js.map