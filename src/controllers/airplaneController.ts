import { Request, Response } from "express";
import {
    generate2000Data,
    generate2001Data,
} from "../services/airplaneServices.js";
import { validationResult } from "express-validator";

export const getAirplaneData = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    // A response for an error.
    if (!errors.isEmpty()) {
        console.error("Validation error", errors.mapped());
        res.status(400).json({ errors: errors.array() });
        return;
    }
    // Our try & catch block for the multitude of scenarios.
    try {
        const { year } = req.params;
        console.log(year);
        // Accessing our data.
        let finalAirplaneData: AirplaneData;
        // Different scenarios.
        if (year === "2000") {
            console.log(generate2000Data());
            finalAirplaneData = generate2000Data();
        } else if (year === "2001") {
            finalAirplaneData = generate2001Data();
        } else {
            res.status(404).send("City not found");
        }
        res.status(200).json(finalAirplaneData);
    } catch (error) {
        res.status(500).send("Error in fetching weather data");
    }
};