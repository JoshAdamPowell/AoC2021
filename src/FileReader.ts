import fs from "fs";

export default class FileReader {

    static getStringData = (fileName: string): string[] => {
        const path = `src/data/${fileName}.txt`;
        const file = fs.readFileSync(path, "utf-8");
        const regex = /\n/
        return file.split(regex)
    }

    static getNumericData = (fileName: string): number[] => {

        const stringData = FileReader.getStringData(fileName);
        return stringData.map(d => parseInt(d));
        
    }
}
