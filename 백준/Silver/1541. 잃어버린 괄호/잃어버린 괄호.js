const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const expressions = input.split("-");

function solution() {
  const calculatedNumbers = expressions.map((str) =>
    str
      .split("+")
      .map(Number)
      .reduce((sum, num) => (sum += num), 0)
  );

  return calculatedNumbers.reduce((sum, number) => (sum -= number));
}

console.log(solution());