import dotenv from 'dotenv'
import DayFactory from "./DayFactory";
dotenv.config()

    const currentDay = DayFactory(process.env.DAY!)

try {
    const partOne = currentDay.getPartOne();
    console.log("Result for part one:")
    console.log(partOne);
} catch(e) {
    console.log(`Error with part one: ${e}`)
}

try {
    const partTwo = currentDay.getPartTwo();
    console.log("Result for part two:")
    console.log(partTwo);
} catch(e) {
    console.log(`Error with part two: ${e}`)
    throw e;
}

console.log("complete");

