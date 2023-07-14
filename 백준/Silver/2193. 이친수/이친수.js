const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const N = +input;

function solution() {
  const dp = [1, 1, 2];

  for (let i = 3; i < N; i++) {
    dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
  }

  return dp[N - 1] + "";
}

console.log(solution());
