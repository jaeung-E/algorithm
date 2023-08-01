const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [T, ...tc] = input;

function solution() {
  const answer = [];

  for (let i = 0; i < T; i++) {
    const stickers = tc
      .splice(0, Number(3))
      .map((str) => str.split(" ").map(Number));
    const stickerLength = +stickers.shift()[0];
    const dp = [[0, stickers[0][0], stickers[1][0]]];

    for (let j = 1; j < stickerLength; j++) {
      dp[j] = [
        Math.max(...dp[j - 1]),
        Math.max(dp[j - 1][0], dp[j - 1][2]) + stickers[0][j],
        Math.max(dp[j - 1][0], dp[j - 1][1]) + stickers[1][j],
      ];
    }

    answer.push(Math.max(...dp[stickerLength - 1]));
  }

  return answer;
}

solution().forEach((count) => console.log(count));
