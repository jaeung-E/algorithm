const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const K = +input;

function solution() {
  const array = [
    [1, 0],
    [0, 1],
    [1, 1],
  ];

  for (let i = 3; i <= K; i++) {
    const [prev2A, prev2B] = array[i - 2];
    const [prevA, prevB] = array[i - 1];

    array[i] = [prev2A + prevA, prev2B + prevB];
  }

  return `${array[K][0]} ${array[K][1]}`;
}

console.log(solution());
