const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N, M], ...maze] = input.map((str) => str.split(" ").map(Number));

function solution() {
  const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  for (let x = 1; x <= N; x++) {
    for (let y = 1; y <= M; y++) {
      dp[x][y] = Math.max(dp[x - 1][y], dp[x][y - 1]) + maze[x - 1][y - 1];
    }
  }

  return dp[N][M];
}

console.log(solution());