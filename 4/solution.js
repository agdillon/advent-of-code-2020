// https://adventofcode.com/2020/day/4

const extract = require('../extract');

// Part 1
let lines = extract('./input.txt');

let passports = [];
let passportIndex = 0;
let validPassports = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i] === '') {
    passportIndex++;
    i++;
  }

  let kvps = [];
  let regex = /([a-z]{3}):([^: ]+)/g;
  while (kvp = regex.exec(lines[i])) {
    kvps.push(...kvp.slice(1));
  }

  for (let j = 0; j < kvps.length; j += 2) {
    if (!passports[passportIndex]) {
      passports[passportIndex] = {};
    }
    passports[passportIndex][kvps[j]] = kvps[j + 1];
  }
}

for (let i = 0; i < passports.length; i++) {
  if (passports[i]['byr'] &&
      passports[i]['iyr'] &&
      passports[i]['eyr'] &&
      passports[i]['hgt'] &&
      passports[i]['hcl'] &&
      passports[i]['ecl'] &&
      passports[i]['pid']
    ) {
      validPassports++;
    }
}

console.log(`Part 1 solution: ${validPassports}`);

// Part 2

validPassports2 = 0;

for (let i = 0; i < passports.length; i++) {
  let heightMatch;
  let heightValid = false;
  if (passports[i]['hgt'] &&
      (heightMatch = passports[i]['hgt'].match(/^([0-9]{2,3})(in|cm)$/)) &&
      (heightMatch[2] === 'cm' && heightMatch[1] >= 150 && heightMatch[1] <= 193 ||
      heightMatch[2] === 'in' && heightMatch[1] >= 59 && heightMatch[1] <= 76)
    ) {
      heightValid = true;
    }

  if (passports[i]['byr'] >= 1920 &&
      passports[i]['byr'] <= 2002 &&
      passports[i]['iyr'] >= 2010 &&
      passports[i]['iyr'] <= 2020 &&
      passports[i]['eyr'] >= 2020 &&
      passports[i]['eyr'] <= 2030 &&
      heightValid &&
      /^#[0-9a-f]{6}$/.test(passports[i]['hcl']) &&
      /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(passports[i]['ecl']) &&
      /^[0-9]{9}$/.test(passports[i]['pid'])
    ) {
      validPassports2++;
    }
}

console.log(`Part 2 solution: ${validPassports2}`);
