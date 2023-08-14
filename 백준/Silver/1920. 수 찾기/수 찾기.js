const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N], A, [M], B] = input.map((str) => str.split(" ").map(Number));

function solution() {
  const map = new Map();
  let answer = [];

  A.forEach((num) => {
    map.set(num, true);
  });

  B.forEach((num) => {
    answer.push(map.get(num) ? 1 : 0);
  });

  return answer.join("\n");
}

console.log(solution());
