# Advent of code

Run `yarn install` after cloning
To see output, run `DAY=1 yarn start` (obviously replace the day as required)

# Setup

Create a local .env file:
`cp .env.template .env`

Ensure you populate your .env file with the following vars:

COOKIE -> your Advent of Code cookie. You can find this value in the headers of requests you make to advent of code.
YEAR -> what year it is.

The app can fetch puzzle input automatically, and will add it to src/data as appropriate (with a filename of the day)
To run this setup, `DAY=1 yarn setup`, replacing the day with which one you want to fetch.

# Nomenclature

Certain file names are expected and should not be changed. 
Day solutions should always look like `Day1.ts`
Data files should always look like `1.txt`

# Memory

Is your solution lazy and needs to use up lots of memory and you're too stupid to come up with a better solution?

`DAY=1 node --max_old_space_size=8192 -r ts-node/register ./src/index.ts`

will let you decide how much memory node is allowed to use.