const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[_], ...coor] = input.map((str) => str.split(" ").map(Number));

function solution() {
  let result = "";

  coor
    .sort(([x1, y1], [x2, y2]) => {
      if (x1 === x2) return y1 - y2;
      return x1 - x2;
    })
    .forEach(([x, y]) => (result = result.concat(`${x} ${y}\n`)));

  return result;
}

console.log(solution());