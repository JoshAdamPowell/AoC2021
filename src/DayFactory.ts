import Day6 from './2021/Day6';
import Day5 from './2021/Day5';
import Day4 from './2021/Day4';
import Day3 from './2021/Day3';
import Day2 from './2021/Day2';
import Day1 from './2021/Day1';
import Day from './2021/Day';


const DayFactory = (day: string): Day => {
    switch(day) {
        case '6': return new Day6();
        case '5': return new Day5();
        case '4': return new Day4();
        case '3': return new Day3();
        case '2': return new Day2();
        case '1': return new Day1();
        default:
            throw new Error(`Day ${day} not found`);
    }

}

export default DayFactory;