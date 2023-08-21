const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [A, B] = input;

function solution() {
  const dp = Array.from({ length: A.length + 1 }, () =>
    Array(B.length + 1).fill(0)
  );

  for (let x = 1; x <= A.length; x++) {
    for (let y = 1; y <= B.length; y++) {
      dp[x][y] =
        A[x - 1] === B[y - 1]
          ? dp[x - 1][y - 1] + 1
          : Math.max(dp[x][y - 1], dp[x - 1][y]);
    }
  }

  return dp[A.length][B.length];
}

console.log(solution());