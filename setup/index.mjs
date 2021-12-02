import fetch from 'node-fetch';
import dotenv from 'dotenv'
import fs from "fs";
dotenv.config()

const fetchData = async () => {
    const day = process.env.DAY
    const url = `https://adventofcode.com/${process.env.YEAR}/day/${day}/input`
    const response = await fetch(url, {headers: {cookie: process.env.COOKIE}})
    fs.writeFileSync(`./src/data/${day}.txt`, await response.text())
    console.log("Fetched data from advent of code.")
}



const copyDayTemplate = async() => {
    const day = process.env.DAY
    const template = `./src/2021/Day.template.ts`
    const data = fs.readFileSync(template, 'utf8')
    const contents = data.split(/\n/)
    contents[3] = `export default class Day${day} implements Day{\r`
    contents[4] = `    day = ${day}\r`
    const result = contents.join("")
    fs.writeFileSync(`./src/2021/Day${day}.ts`, result)
    console.log("Copied template.")
}

const updateDayFactory = async() => {
    const day = process.env.DAY
    const indexPath = `./src/DayFactory.ts`
    const data = fs.readFileSync(indexPath, 'utf8')
    const contents = data.split(/\n/)
    console.log(contents[5])
    const switchStatement = contents.indexOf("    switch(day) {\r")
    console.log(switchStatement);
    contents.splice(switchStatement + 1, 0, `        case '${day}': return new Day${day}();\r`)
    contents.unshift(`import Day${day} from './2021/Day${day}';\r`)
    fs.writeFileSync(indexPath, contents.join(""))
    console.log("Updated day factory.")
}

fetchData();
copyDayTemplate()
updateDayFactory()