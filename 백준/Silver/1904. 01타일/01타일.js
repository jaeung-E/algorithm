const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input;

function solution() {
  const dp = [1, 2, 3];

  for (let i = 3; i < N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }

  return dp[N - 1] % 15746;
}

console.log(solution());