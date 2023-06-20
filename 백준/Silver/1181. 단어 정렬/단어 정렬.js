const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const words = input.slice(1);

function solution() {
  return [...new Set(words)].sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a < b ? -1 : 1;
  });
}

solution().forEach((word) => console.log(word));
