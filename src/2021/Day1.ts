import FileReader from "../FileReader";
import Day from "./Day";

export default class DayOne implements Day{
    getPartOne = (): number => {
        const data = FileReader.getNumericData("1");
        const increases = data.reduce((acc, cur, ind, arr) => {
            if (!arr[ind + 1]) {
                return acc;
            }
            if (arr[ind + 1] > cur) {
                return acc + 1;
            }
            return acc
        }, 0)
        return increases;
    }

    getPartTwo = (): number => {

        const data = FileReader.getNumericData("1");
        const increases = data.reduce((acc, cur, ind, arr) => {
            if (!arr[ind + 3]){
                return acc;
            }
            const val1 = arr[ind];
            const val2 = arr[ind + 1];
            const val3 = arr[ind + 2];
            const val4 = arr[ind + 3];
            const sum1 = val1 + val2 + val3;
            const sum2 = val2 + val3 + val4;
            if (sum2 > sum1) {
                return acc + 1;
            }
            return acc
        }, 0)
        return increases;
    }
}