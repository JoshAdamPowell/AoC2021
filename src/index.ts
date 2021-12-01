import DayOne from './2021/DayOne';

const currentDay = new DayOne();

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
}

console.log("complete");