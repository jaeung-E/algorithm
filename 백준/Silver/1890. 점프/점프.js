const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N], ...board] = input.map((str) => str.split(" ").map(Number));

function solution() {
  const dp = Array.from({ length: N }, () => Array(N).fill(BigInt(0)));
  dp[0][0] = 1;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      const value = board[x][y];
      const right = y + value;
      const down = x + value;

      if (value === 0) continue;
      if (isBound(down, y)) dp[down][y] += BigInt(dp[x][y]);
      if (isBound(x, right)) dp[x][right] += BigInt(dp[x][y]);
    }
  }

  return dp[N - 1][N - 1].toString();
}

function isBound(x, y) {
  return x >= 0 && y >= 0 && x < N && y < N ? true : false;
}

console.log(solution());
