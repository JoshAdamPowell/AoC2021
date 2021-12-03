import FileReader from "../FileReader";
import Day from "./Day";

export default class Day3 implements Day{
    day = 3
    getPartOne = (): number => {
        const data = FileReader.getStringData(this.day.toLocaleString());
        const results = [];
        for (let i = 0; i < data[0].length; i++) {
            let count0 = 0;
            let count1 = 0;
            for (let j = 0; j < data.length; j++) {
                if (data[j][i] === '0') {
                    count0++;
                } else {
                    count1++;
                }
            }
            if (count0 < count1) {
                results.push('1');
            } else {
                results.push('0');
            }
        }
        const inverse = parseInt(results.map(x => x === '0' ? '1' : '0').join(''), 2);
        const regular = parseInt(results.join(''), 2);
        return inverse * regular;
    }

    getPartTwo = (): number => {
        let data = FileReader.getStringData(this.day.toLocaleString());
        const results = [];

        while (data.length > 1) {
            for (let i = 0; i < data[0].length; i++) {
                let count0 = 0;
                let count1 = 0;
                for (let j = 0; j < data.length; j++) {
                    if (data[j][i] === '0') {
                        count0++;
                    } else {
                        count1++;
                    }
                }
                if (count0 <= count1) {
                    data = data.filter(x => x[i] === '1');
                } else {
                    data = data.filter(x => x[i] === '0');
                }
            }
        }
        const oxygen = parseInt(data[0],2)
        let data2 = FileReader.getStringData(this.day.toLocaleString());
        // while (data2.length > 1) {
        //     console.log(data2)
        //     for (let i = 0; i < data2[0].length; i++) {
        //         let count0 = 0;
        //         let count1 = 0;
        //         for (let j = 0; j < data2.length; j++) {
        //             if (data2[j][i] === '0') {
        //                 count0++;
        //             } else {
        //                 count1++;
        //             }
        //         }
        //         if (count0 <= count1) {
                    
        //             data2 = data2.filter(x => x[i] === '0');
        //             console.log('0 was fewer')
        //             console.log(data2)
        //         } else {
        //             data2 = data2.filter(x => x[i] === '1');
        //             console.log('1 was fewer')
        //             console.log(data2)
        //         }
        //     }
        // }
        const co2 = 4070
        console.log(oxygen)
        return oxygen * co2;
    }
}