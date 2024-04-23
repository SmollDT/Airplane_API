import { Request, Response } from "express";
import {
    generate2000Data, generate2001Data, generate2002Data, generate2003Data,
    generate2004Data, generate2005Data, generate2006Data, generate2007Data,
    generate2008Data, generate2009Data, generate2010Data, generate2011Data,
    generate2012Data, generate2013Data, generate2014Data, generate2015Data,
    generate2016Data, generate2017Data, generate2018Data, generate2019Data,
    generate2020Data, generate2021Data, generate2022Data, generate2023Data,
    generate2024Data
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
            console.log(generate2001Data());
            finalAirplaneData = generate2001Data();
        } else if (year === "2002") {
            console.log(generate2002Data());
            finalAirplaneData = generate2002Data();
        } else if (year === "2003") {
            console.log(generate2003Data());
            finalAirplaneData = generate2003Data();
        } else if (year === "2004") {
            console.log(generate2004Data());
            finalAirplaneData = generate2004Data();
        } else if (year === "2005") {
            console.log(generate2005Data());
            finalAirplaneData = generate2005Data();
        } else if (year === "2006") {
            console.log(generate2006Data());
            finalAirplaneData = generate2006Data();
        } else if (year === "2007") {
            console.log(generate2007Data());
            finalAirplaneData = generate2007Data();
        } else if (year === "2008") {
            console.log(generate2008Data());
            finalAirplaneData = generate2008Data();
        } else if (year === "2009") {
            console.log(generate2009Data());
            finalAirplaneData = generate2009Data();
        } else if (year === "2010") {
            console.log(generate2010Data());
            finalAirplaneData = generate2010Data();
        } else if (year === "2011") {
            console.log(generate2011Data());
            finalAirplaneData = generate2011Data();
        } else if (year === "2012") {
            console.log(generate2012Data());
            finalAirplaneData = generate2012Data();
        } else if (year === "2013") {
            console.log(generate2013Data());
            finalAirplaneData = generate2013Data();
        } else if (year === "2014") {
            console.log(generate2014Data());
            finalAirplaneData = generate2014Data();
        } else if (year === "2015") {
            console.log(generate2015Data());
            finalAirplaneData = generate2015Data();
        } else if (year === "2016") {
            console.log(generate2016Data());
            finalAirplaneData = generate2016Data();
        } else if (year === "2017") {
            console.log(generate2017Data());
            finalAirplaneData = generate2017Data();
        } else if (year === "2018") {
            console.log(generate2018Data());
            finalAirplaneData = generate2018Data();
        } else if (year === "2019") {
            console.log(generate2019Data());
            finalAirplaneData = generate2019Data();
        } else if (year === "2020") {
            console.log(generate2020Data());
            finalAirplaneData = generate2020Data();
        } else if (year === "2021") {
            console.log(generate2021Data());
            finalAirplaneData = generate2021Data();
        } else if (year === "2022") {
            console.log(generate2022Data());
            finalAirplaneData = generate2022Data();
        } else if (year === "2023") {
            console.log(generate2023Data());
            finalAirplaneData = generate2023Data();
        } else if (year === "2024") {
            console.log(generate2024Data());
            finalAirplaneData = generate2024Data();
        } else {
            res.status(404).send("Incorrect year");
        }
        res.status(200).json(finalAirplaneData);
    } catch (error) {
        res.status(500).send("Error in fetching airplane data");
    }
};