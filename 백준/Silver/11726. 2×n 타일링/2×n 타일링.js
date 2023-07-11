const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const N = +input;

function solution() {
  const dp = [1, 1, 2];

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  return dp[N];
}

console.log(solution());
