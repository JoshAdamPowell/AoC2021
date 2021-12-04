import FileReader from "../FileReader";
import Day from "./Day";

export default class Day4 implements Day {
    day = 4
    getPartOne = (): number => {
        const data = FileReader.getStringData(this.day.toLocaleString());
        const numbersToRead = data.shift()!.split(",").map(Number);
        const boards = this.generateBoardsFromData(data);

        let firstBoard: Board;
        let complete = false;
        let i = 0;
        while (!complete) {
            boards.forEach(board => {
                board.markNumber(numbersToRead[i]);
                if (board.isComplete()){
                    firstBoard = board;
                    complete = true;
                }
            });
            i++
        }
        const sum = firstBoard!.getSumOfUnmarkedCells();
        return sum * numbersToRead[i - 1];
    }

    getPartTwo = (): number => {
        const data = FileReader.getStringData(this.day.toLocaleString());
        const numbersToRead = data.shift()!.split(",").map(Number);

        const boards = this.generateBoardsFromData(data);
        let result = 0;
        for (let i = 0; i < numbersToRead.length; i++) {
            boards.forEach(board => {
                board.markNumber(numbersToRead[i]);
                const amountOfBoardsUnComplete = boards.filter(board => !board.isComplete()).length;
                // I couldn't be bothered to refactor to be able to break the forEach so just check we dont already have an answer
                // It doesn't take that long anyway
                if (amountOfBoardsUnComplete === 0 && result === 0) {
                    result = board.getSumOfUnmarkedCells() * numbersToRead[i];
                }

            });
        }
        return result
    }

    generateBoardsFromData = (data: string[]): Board[] => {
        const boardSets: string[][] = [];
        for (let i = 0; i<data.length; i++) {
            if (data[i] === ""){
                let newBoard: string[] = [];
                boardSets.push(newBoard);
                continue;
            }
            boardSets[boardSets.length - 1].push(data[i]);
        }

        // the last one is empty because of the weird implementation above.
        boardSets.pop();
        return boardSets.map(boardSet => {
            const rows = boardSet.map(row => row.split(" ").filter(x => x !== "").map(Number));
            return new Board(rows);
        });
    }
}

class Board {
    rows: Row[];
    constructor(values: number[][]) {
        this.rows = values.map(row => {
            return {
                cells: row.map(column => ({
                    value: column,
                    isMarked: false
                })
                )
            }
        })

    }

    isComplete() {
        try {
            if (this.rows.some(row => row.cells.every(cell => cell.isMarked))) {
                return true;
            }
            for (let i = 0; i < this.rows[0].cells.length; i++) {
                if (this.rows.every(row => row.cells[i].isMarked)) {
                    return true;
                }
            }
            return false;
        } catch (e) {
            throw this;
        }
        
        
    }

    markNumber(number: number) {
        for (let i = 0; i < this.rows.length; i++) {
            for (let j = 0; j < this.rows[i].cells.length; j++) {
                if (this.rows[i].cells[j].value === number) {
                    this.rows[i].cells[j].isMarked = true;
                }
            }
        }
    }

    getSumOfUnmarkedCells() {
        return this.rows.reduce((acc, cur) => {
            return acc + cur.cells.reduce((acc, cur) => {
                return acc + (cur.isMarked ? 0 : cur.value);
            }, 0)
        }, 0)
    }
}

type Row = {
    cells: Cell[]
}

type Cell = {
    value: number;
    isMarked: boolean;
}