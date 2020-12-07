// https://adventofcode.com/2020/day/5

const extract = require('../extract');

// Part 1
let lines = extract('./input.txt');

let seatIds = [];
let highestSeatId = 0;

// go through lines
for (let i = 0; i < lines.length; i++) {
  let letters = lines[i].split('');

  let row, column, seatId;

  // get the row
  let lower = 0;
  let upper = 127;
  for (let j = 0; j < 6; j++) {
    if (letters[j] === 'F') {
      upper = Math.floor((lower+upper)/2);
    } else {
      lower = Math.ceil((lower+upper)/2);
    }
  }

  row = letters[6] === 'F' ? lower : upper;

  // get the column
  lower = 0;
  upper = 7;
  for (let j = 7; j < 9; j++) {
    if (letters[j] === 'L') {
      upper = Math.floor((lower+upper)/2);
    } else {
      lower = Math.ceil((lower+upper)/2);
    }
  }

  column = letters[9] === 'L' ? lower : upper;

  seatId = column + row * 8;
  seatIds.push(seatId);
  highestSeatId = highestSeatId > seatId ? highestSeatId : seatId;
}

console.log(`Part 1 solution: ${highestSeatId}`);

// Part 2

let mySeatId;

for (let i = 0; i < seatIds.length; i++) {
  if (!seatIds.includes(seatIds[i] + 1) && seatIds.includes(seatIds[i] + 2)) {
    mySeatId = seatIds[i] + 1;
  }
}

console.log(`Part 2 solution: ${mySeatId}`);
