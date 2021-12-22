import FileReader from "../FileReader";
import Day from "./Day";

export default class Day7 implements Day{
    day = 7
    getPartOne = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        const crabs = input[0].split(",").map(Number);
        const horizontalMax = crabs.sort((a, b) => a - b)[crabs.length - 1];

        const fuelGuesses: number[] = [];
        for (let i = 0; i < horizontalMax; i++) {
            crabs.forEach(crab => {
                fuelGuesses[i] = (fuelGuesses[i] || 0) + Math.abs(crab - i);
            })
        }

        fuelGuesses.sort((a, b) => a - b);
        return fuelGuesses[0];
    }

    getPartTwo = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        const crabs = input[0].split(",").map(Number);
        const horizontalMax = crabs.sort((a, b) => a - b)[crabs.length - 1];

        const fuelGuesses: number[] = [];
        for (let i = 0; i < horizontalMax; i++) {
            crabs.forEach(crab => {
                fuelGuesses[i] = (fuelGuesses[i] || 0) + getTriangularNumber(Math.abs(crab - i));
            })
        }

        fuelGuesses.sort((a, b) => a - b);
        return fuelGuesses[0];
    }
}

const getTriangularNumber = (input: number) => {
    return input * (input + 1) / 2;
}