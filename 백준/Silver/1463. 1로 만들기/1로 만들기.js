const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const X = +input;

function solution() {
  const dp = [0, 0, 1];

  for (let i = 2; i <= X; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  return dp[X];
}

console.log(solution());
