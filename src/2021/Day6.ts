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
        const input = FileReader.getStringData(this.day.toLocaleString())
        const pool = input[0].split(",").map(Number);
        const cleverPool = new CleverPool(
            pool.filter(num => num === 1).length,
            pool.filter(num => num === 2).length,
            pool.filter(num => num === 3).length,
            pool.filter(num => num === 4).length,
            pool.filter(num => num === 5).length,
            pool.filter(num => num === 6).length,
        )

        for (let i = 0; i < 256; i++) {
            cleverPool.process();
        }

        
        return cleverPool.count();
    }
}

class CleverPool {
    amountOfAge0: number;
    amountOfAge1: number;
    amountOfAge2: number;
    amountOfAge3: number;
    amountOfAge4: number;
    amountOfAge5: number;
    amountOfAge6: number;
    amountOfAge7: number;
    amountOfAge8: number;

    constructor(one: number, two: number, three: number, four: number, five: number, six: number) {
        this.amountOfAge0 = 0;
        this.amountOfAge1 = one;
        this.amountOfAge2 = two;
        this.amountOfAge3 = three;
        this.amountOfAge4 = four;
        this.amountOfAge5 = five;
        this.amountOfAge6 = six;
        this.amountOfAge7 = 0;
        this.amountOfAge8 = 0;
    }

    process() {
        const processingFish = this.amountOfAge0;
        this.amountOfAge0 = this.amountOfAge1;
        this.amountOfAge1 = this.amountOfAge2;
        this.amountOfAge2 = this.amountOfAge3;
        this.amountOfAge3 = this.amountOfAge4;
        this.amountOfAge4 = this.amountOfAge5;
        this.amountOfAge5 = this.amountOfAge6;
        this.amountOfAge6 = this.amountOfAge7 + processingFish;
        this.amountOfAge7 = this.amountOfAge8;
        this.amountOfAge8 = processingFish;
    }

    count() {
        return this.amountOfAge0 + this.amountOfAge1 + this.amountOfAge2 + this.amountOfAge3 + this.amountOfAge4 + this.amountOfAge5 + this.amountOfAge6 + this.amountOfAge7 + this.amountOfAge8;
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