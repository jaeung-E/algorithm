const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");
let [A, B, N] = input.map(Number);

function solution() {
  let result = 0;

  for (let i = 0; i < N + 1; i++) {
    result = A / B;
    A = (A % B) * 10;
  }

  return Math.floor(result);
}

console.log(solution());
