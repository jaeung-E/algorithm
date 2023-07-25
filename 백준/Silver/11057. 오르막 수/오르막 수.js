const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input;
const LENGTH = 10;

function solution() {
  const dp = Array.from({ length: N }, () => Array(LENGTH).fill(1));

  for (let x = 1; x < N; x++) {
    for (let y = 1; y < LENGTH; y++) {
      dp[x][y] = (dp[x - 1][y] + dp[x][y - 1]) % 10007;
    }
  }

  return dp[N - 1].reduce((sum, num) => sum + num, 0) % 10007;
}

console.log(solution());
