const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N], [...cards]] = input.map((str) => str.split(" ").map(Number));

function solution() {
  const dp = Array(N + 1).fill(0);

  for (let i = 1; i <= cards.length; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
    }
  }

  return dp[N];
}

console.log(solution());
