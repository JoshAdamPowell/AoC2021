import FileReader from "../FileReader";
import Day from "./Day";

export default class DayTemplate implements Day{
    // reserved for day variable
    getPartOne = (): number => {
        throw new Error("Method not implemented.");
    }

    getPartTwo = (): number => {
        throw new Error("Method not implemented.");
    }
}