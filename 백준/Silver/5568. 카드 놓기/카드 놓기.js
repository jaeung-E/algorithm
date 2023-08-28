const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M, ...cards] = input.map((str) => Number(str));

function solution() {
  const set = new Set();
  const visited = Array(N).fill(false);
  dfs(0, "", set, visited);

  return set.size;
}

function dfs(depth, num, set, visited) {
  if (depth === M) {
    set.add(num);
    return;
  }

  for (let i = 0; i < cards.length; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    dfs(depth + 1, num + cards[i], set, visited);
    visited[i] = false;
  }
}

console.log(solution());
