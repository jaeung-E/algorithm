const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N, L], pipe] = input.map((str) => str.split(" ").map(Number));

function solution() {
  pipe.sort((a, b) => a - b);
  let tape = 0;
  let lastLength = pipe[0];

  for (const length of pipe) {
    if (lastLength > length) continue;

    lastLength = length + L;
    tape += 1;
  }

  return tape;
}

console.log(solution());
