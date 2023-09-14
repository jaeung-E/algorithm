const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N, S, M], volumes] = input.map((str) => str.split(" ").map(Number));

function solution() {
  const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
  dp[0][S] = true;

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      if (dp[i - 1][j]) {
        if (j - volumes[i - 1] >= 0) dp[i][j - volumes[i - 1]] = true;
        if (j + volumes[i - 1] <= M) dp[i][j + volumes[i - 1]] = true;
      }
    }
  }

  return dp[N].lastIndexOf(true);
}

console.log(solution());
