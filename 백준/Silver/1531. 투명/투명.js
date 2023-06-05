const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[_, M], ...coor] = input.map((str) => str.split(" ").map(Number));
const LENGTH = 101;

function solution() {
  const picture = Array.from({ length: LENGTH }, () => Array(LENGTH).fill(0));

  coor.forEach(([startX, startY, endX, endY]) => {
    for (let x = startX; x <= endX; x++) {
      for (let y = startY; y <= endY; y++) {
        picture[x][y] += 1;
      }
    }
  });

  return picture.reduce((sum, row) => {
    return (sum += row.filter((num) => num > M).length);
  }, 0);
}

console.log(solution());
