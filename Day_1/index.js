const fs = require("fs");

const elves = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n\n");

// Part 1
const calories = elves.map((elf) => {
  const calories = elf.split("\n").map(Number);
  return calories.reduce((a, b) => a + b, 0);
});
console.log(calories);

// Part 2
const sortedCalories = calories.sort((a, b) => b - a);
const topThree = sortedCalories.slice(0, 3).reduce((a, b) => a + b, 0);
console.log(topThree);
