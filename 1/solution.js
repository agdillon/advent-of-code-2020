// https://adventofcode.com/2020/day/1

const extract = require('../extract');

// Part 1
let expenses = extract('./input.txt').map(el => parseInt(el, 10));
let a, b;
let found = false;

for (let i = 0; i < expenses.length; i++) {
  for (let j = i + 1; j < expenses.length; j++) {
    if (expenses[i] + expenses[j] === 2020) {
      a = expenses[i];
      b = expenses[j];
      found = true;
      break;
    }
  }
  if (found === true) {
    break;
  }
}

console.log(`Part 1 solution: ${a * b}`);

// Part 2
let c, d, e;
found = false;

for (let i = 0; i < expenses.length; i++) {
  for (let j = i + 1; j < expenses.length; j++) {
    for (let k = j + 1; k < expenses.length; k++) {
      if (expenses[i] + expenses[j] + expenses[k] === 2020) {
        c = expenses[i];
        d = expenses[j];
        e = expenses[k];
        found = true;
        break;
      }
    }
    if (found === true) {
      break;
    }
  }
  if (found === true) {
    break;
  }
}

console.log(`Part 2 solution: ${c * d * e}`)
