const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const N = +input;

function solution() {
  const dp = [0, 3, 7];

  for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
  }

  return dp[N];
}

console.log(solution());
