import { faker } from "@faker-js/faker";
import { storeAirplaneData } from "../helpers/helpers.js";

export const generate2000Data = (): AirplaneData => {
    const generatedAirplaneData = {
        name: "Mikoyan Project 1.44",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6 }),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2001Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "General Atomics RQ-1 Predator B",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6 }),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2002Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Boeing X-45",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6 }),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2003Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Scaled Composites SpaceShipOne",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6 }),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2004Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "HESA Saeqeh",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2005Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "ATG Javelin",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2006Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Lockheed Martin F-35 Lighting II",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2007Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Dornier S-Ray 007",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2008Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Scaled Composites White Knight Two",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2009Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Boeing 787 Dreamliner",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2010Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Sukhoi Su-57",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2011Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Chengdu J-20",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2012Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Boeing Phantom Eye",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2013Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Airbus A350",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2014Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "AeroMobil s.r.o. AeroMobil",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2015Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Boeing KC-46 Pegasus",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2016Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Boeing T-7 Red Hawk",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2017Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Bell V-280 Valor",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2018Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Airbus BelugaXL",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2019Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Kratos XQ-58 Valkyrie",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2020Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "AIDC T-5 Brave Eagle",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2021Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Boeing F-15 Eagle",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2022Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Dassault Rafale",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2023Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Eurofighter Typhoon",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};

export const generate2024Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        name: "Sukhoi Su-35S",
        height: faker.number.int({ min: 8000, max: 10000 }),
        width: faker.number.int({ min: 5, max: 6}),
        length: faker.number.int({ min: 40, max: 50}),
        max_speed: faker.number.int({ min: 860, max: 1060 }),
    };
    storeAirplaneData(generatedAirplaneData).catch(console.error);
    return generatedAirplaneData;
};