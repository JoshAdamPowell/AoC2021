import FileReader from "../FileReader";
import Day from "./Day";

export default class Day5 implements Day {
    day = 5
    getPartOne = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        const lines = input.map(line => {
            const [start, end] = line.split(" -> ")
            const [x1, y1] = start.split(",").map(Number)
            const [x2, y2] = end.split(",").map(Number)
            return new Line(x1, y1, x2, y2)
        })

        const linesThatAreHorizontalOrVerticalLines = lines.filter(line => line.isVerticalOrHorizontalLine())

        const map: Point[] = [];
        for (let x = 0; x <= 1000; x++) {
            for (let y = 0; y <= 1000; y++) {
                map.push(new Point(x, y));
            }
        }
        linesThatAreHorizontalOrVerticalLines.forEach(line => {
            line.markPointsForHorizontalOrVertical(map)
        })

        const pointsWithMoreThanOneLine = map.filter(point => point.lines > 1)

        return pointsWithMoreThanOneLine.length;
    }

    getPartTwo = (): number => {
        const input = FileReader.getStringData(this.day.toLocaleString())
        const lines = input.map(line => {
            const [start, end] = line.split(" -> ")
            const [x1, y1] = start.split(",").map(Number)
            const [x2, y2] = end.split(",").map(Number)
            return new Line(x1, y1, x2, y2)
        })

        const linesThatAreHorizontalOrVerticalLines = lines.filter(line => line.isVerticalOrHorizontalLine())

        const map: Point[] = [];
        for (let x = 0; x <= 1000; x++) {
            for (let y = 0; y <= 1000; y++) {
                map.push(new Point(x, y));
            }
        }
        linesThatAreHorizontalOrVerticalLines.forEach(line => {
            line.markPointsForHorizontalOrVertical(map)
        })

        const linesThatAreDiagonalLines = lines.filter(line => line.isDiagonalLine())
        linesThatAreDiagonalLines.forEach(line => {
            line.markPointsForDiagonal(map)
        })

        const pointsWithMoreThanOneLine = map.filter(point => point.lines > 1)

        return pointsWithMoreThanOneLine.length;
    }
}

class Line {
    x1: number
    y1: number
    x2: number
    y2: number

    constructor(x1: number, y1: number, x2: number, y2: number) {
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
    }

    isVerticalOrHorizontalLine() {
        return (this.x1 === this.x2) || (this.y1 === this.y2)
    }

    markPointsForHorizontalOrVertical(map: Point[]) {
        const points = map.filter(point =>
            (((point.x >= this.x1 && point.x <= this.x2) || (point.x <= this.x1 && point.x >= this.x2)) && point.y === this.y1 && point.y === this.y2) ||
            (((point.y >= this.y1 && point.y <= this.y2) || (point.y <= this.y1 && point.y >= this.y2)) && point.x === this.x1 && point.x === this.x2)
        )
        points.forEach(point => point.addLine())
    }

    isDiagonalLine() {
        return Math.abs(this.x1 - this.x2) === Math.abs(this.y1 - this.y2)
    }

    markPointsForDiagonal(map: Point[]) {
        const points = map.filter(point =>
        (
            (Math.abs(point.x - this.x1) === Math.abs(point.y - this.y1) &&
            Math.abs(point.x - this.x2) === Math.abs(point.y - this.y2))  &&
            ((point.x >= this.x1 && point.x <= this.x2) || (point.x <= this.x1 && point.x >= this.x2)) &&
            ((point.y >= this.y1 && point.y <= this.y2) || (point.y <= this.y1 && point.y >= this.y2))
        ))
        points.forEach(point => point.addLine())
    }

}

class Point {
    x: number
    y: number
    lines: number = 0;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.lines = 0
    }

    addLine() {
        this.lines++
    }
}
