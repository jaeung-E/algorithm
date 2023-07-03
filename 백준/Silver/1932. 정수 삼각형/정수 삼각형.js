const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input.shift();
const tree = input.map((str) => [0, ...str.split(" ").map(Number), 0]);

function solution() {
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < tree[i].length - 1; j++) {
      tree[i][j] += Math.max(tree[i - 1][j - 1], tree[i - 1][j]);
    }
  }

  return Math.max(...tree[N - 1]);
}

console.log(solution());
