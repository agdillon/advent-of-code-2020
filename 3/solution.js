// https://adventofcode.com/2020/day/3

const extract = require('../extract');

// Part 1
let grid = extract('./input.txt').map((line) => line.split(''));

function checkSlope(horizIncrement, vertIncrement) {
  let treeCount = 0;
  let horizPosition = 0;

  for (let vertPosition = 0; vertPosition < grid.length; vertPosition += vertIncrement) {
    if (horizPosition >= grid[vertPosition].length) {
        // wrap around
        horizPosition = -(grid[vertPosition].length - horizPosition);
    }

    if (grid[vertPosition][horizPosition] === '#') {
      treeCount++;
    }

    horizPosition += horizIncrement;
  }

  return treeCount;
}

let trees = checkSlope(3, 1);

console.log(`Part 1 solution: ${trees}`);

// Part 2
let trees11 = checkSlope(1, 1);
let trees31 = checkSlope(3, 1);
let trees51 = checkSlope(5, 1);
let trees71 = checkSlope(7, 1);
let trees12 = checkSlope(1, 2);

let result = trees11 * trees31 * trees51 * trees71 * trees12;

console.log(`Part 2 solution: ${result}`);
