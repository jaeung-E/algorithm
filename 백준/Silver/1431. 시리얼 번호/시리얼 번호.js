const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[_], ...serials] = input;

function solution() {
  return serials
    .sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      if (sumNumbers(a) !== sumNumbers(b)) return sumNumbers(a) - sumNumbers(b);
      return a.localeCompare(b);
    })
    .join("\n");
}

function sumNumbers(string) {
  return [...string.replace(/[A-Z]/gi, "")]
    .map(Number)
    .reduce((sum, num) => (sum += num), 0);
}

console.log(solution());
