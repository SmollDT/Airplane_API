import { faker } from "@faker-js/faker";

export const generate2000Data = (): AirplaneData => {
    const generatedAirplaneData = {
        height: faker.number.int({ min: 5, max: 15 }),
        width: faker.number.int({ min: 5, max: 10 }),
        length: faker.number.int({ min: 15, max: 30}),
        max_speed: faker.number.int({ min: 65, max: 75 }),
    };
    
    return generatedAirplaneData;
};

export const generate2001Data = (): AirplaneData => {
    const generatedAirplaneData =  {
        height: faker.number.int({ min: 5, max: 15 }),
        width: faker.number.int({ min: 5, max: 10 }),
        length: faker.number.int({ min: 15, max: 30}),
        max_speed: faker.number.int({ min: 65, max: 75 }),
    };
    
    return generatedAirplaneData;
};