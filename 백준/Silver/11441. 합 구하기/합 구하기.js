const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N], numbers, [M], ...range] = input.map((str) =>
  str.split(" ").map(Number)
);

function solution() {
  const prefixSum = [0, numbers[0]];
  const answer = [];

  for (let i = 1; i < N + 1; i++) {
    prefixSum[i] = numbers[i - 1] + prefixSum[i - 1];
  }

  for (let i = 0; i < M; i++) {
    const [start, end] = range[i];
    answer.push(prefixSum[end] - prefixSum[start - 1]);
  }

  return answer;
}

console.log(solution().join("\n"));