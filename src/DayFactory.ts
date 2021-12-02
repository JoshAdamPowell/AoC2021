import Day2 from './2021/Day2';
import Day1 from './2021/Day1';
import Day from './2021/Day';


const DayFactory = (day: string): Day => {
    switch(day) {
        case '2': return new Day2();
        case '1': return new Day1();
        default:
            throw new Error(`Day ${day} not found`);
    }

}

export default DayFactory;