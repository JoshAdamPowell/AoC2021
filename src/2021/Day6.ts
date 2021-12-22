import FileReader from "../FileReader";
import Day from "./Day";

export default class Day6 implements Day{
    day = 6
    getPartOne = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        const pool = input[0].split(",").map(Number).map(x => new LanternFish(x));

        for (let i = 0; i < 80; i++) {
            pool.forEach(fish => {
                if (fish.process()) {
                    pool.push(new LanternFish());
                }
            })
        }

        return pool.length;
    }

    getPartTwo = (): number => {
        throw new Error("Method not implemented.");
    }
}


class LanternFish {
    age: number;
    constructor(age: number = 8) {
        this.age = age;
    }

    process(): boolean {
        if (this.age === 0) {
            this.age = 6;
            return true;
        }
        this.age--;
        return false;
    }
}