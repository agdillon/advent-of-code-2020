// https://adventofcode.com/2020/day/6

const extract = require('../extract');

// Part 1
let lines = extract('./input.txt');

let groupResults = [];
let groupIndex = 0;
let groupLengths = [];
let totalGroupLengths = 0;

lines.forEach((line, i) => {
  if (line === '') {
    groupLengths[groupIndex] = Object.keys(groupResults[groupIndex]).length;
    totalGroupLengths += groupLengths[groupIndex];
    groupIndex++;
  } else {
    let letters = line.split('');
    letters.forEach((letter) => {
      if (!groupResults[groupIndex]) {
        groupResults[groupIndex] = {};
      }

      if (!groupResults[groupIndex][letter]) {
        groupResults[groupIndex][letter] = 1;
      }
    });
  }
});

// last group
groupLengths[groupIndex] = Object.keys(groupResults[groupIndex]).length;
totalGroupLengths += groupLengths[groupIndex];

console.log(`Part 1 solution: ${totalGroupLengths}`);

// Part 2
groupResults = [];
groupIndex = 0;
groupLengths = [];
totalGroupLengths = 0;

lines.forEach((line, index) => {
  if (line === '') {
    groupLengths[groupIndex] = groupResults[groupIndex].length;
    totalGroupLengths += groupLengths[groupIndex];
    groupIndex++;
  } else {
    if (index === 0 || lines[index - 1] === '') {
      groupResults[groupIndex] = line.split('');
    } else {
      let newResult = [];
      groupResults[groupIndex].forEach((letter, letterIndex) => {
        if (line.indexOf(letter) > -1) {
          newResult.push(letter);
        }
      });
      groupResults[groupIndex] = newResult;
    }
  }
});

// last group
groupLengths[groupIndex] = groupResults[groupIndex].length;
totalGroupLengths += groupLengths[groupIndex];

console.log(`Part 2 solution: ${totalGroupLengths}`);
