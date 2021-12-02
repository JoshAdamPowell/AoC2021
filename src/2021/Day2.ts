import FileReader from "../FileReader";
import Day from "./Day";

export default class DayTwo implements Day{
    getPartOne = (): number => {
        const data = FileReader.getStringData("2");
        let depth = 0;
        let hor = 0;
        data.forEach(instruction => {
            const [direction, amount] = instruction.split(" ");
            switch (direction) {
                case "forward":
                    hor += parseInt(amount);
                    break;
                case "down":
                    depth += parseInt(amount);
                    break;
                case "up":
                    depth -= parseInt(amount);
                    break;
            }

        })
        return hor * depth;
    }

    getPartTwo = (): number => {
        const data = FileReader.getStringData("2");
        let depth = 0;
        let hor = 0;
        let aim = 0;
        data.forEach(instruction => {
            const [direction, amount] = instruction.split(" ");
            switch (direction) {
                case "forward":
                    hor += parseInt(amount);
                    depth += aim * parseInt(amount);
                    break;
                case "down":
                    aim += parseInt(amount);
                    break;
                case "up":
                    aim -= parseInt(amount);
                    break;
            }

        })
        return hor * depth;
    }
}