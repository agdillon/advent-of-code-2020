// https://adventofcode.com/2020/day/2

const extract = require('../extract');

// Part 1
let lines = extract('./input.txt');

let result = lines.map((line) => {
  let [ , min, max, letter, password ] = line.match(/(\d+)-(\d+) (.): (.*)/);
  let letterCount = 0;

  for (let i = 0; i < password.length; i++) {
    if (password[i] === letter) {
      letterCount++;
    }
  }

  if (letterCount < min || letterCount > max) {
    return false;
  } else {
    return true;
  }
}).reduce((total, isValid) => {
  if (isValid) {
    total++;
  }
  return total;
}, 0);

console.log(`Part 1 solution: ${result}`);

// Part 2
let result2 = lines.map((line) => {
  let [ , first, second, letter, password ] = line.match(/(\d+)-(\d+) (.): (.*)/);
  let occurrences = 0;

  if (password[first-1] === letter) {
    occurrences++;
  }

  if (password[second-1] === letter) {
    occurrences++;
  }

  return occurrences === 1;
}).reduce((total, isValid) => {
  if (isValid) {
    total++;
  }
  return total;
}, 0);

console.log(`Part 2 solution: ${result2}`);
