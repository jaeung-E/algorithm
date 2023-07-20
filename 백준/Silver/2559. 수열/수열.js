const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N, K], inputs] = input.map((str) => str.split(" ").map(Number));

function solution() {
  const answer = [0];
  for (let i = 0; i < K; i++) answer[0] += inputs[i];
  for (let i = 1; i < N - K + 1; i++)
    answer.push(answer[i - 1] - inputs[i - 1] + inputs[i + K - 1]);

  return Math.max(...answer);
}

console.log(solution());
