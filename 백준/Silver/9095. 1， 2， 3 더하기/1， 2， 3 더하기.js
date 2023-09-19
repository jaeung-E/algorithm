const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [_, ...numbers] = input.map(Number);

function solution() {
  const answer = [];

  for (const n of numbers) {
    const dp = [0, 1, 2, 4];

    for (let i = 4; i <= n; i++) {
      dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }

    answer.push(dp[n]);
  }

  return answer.join("\n");
}

console.log(solution());
