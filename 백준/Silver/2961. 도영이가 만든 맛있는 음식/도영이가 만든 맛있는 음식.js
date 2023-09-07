const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N], ...ingredients] = input.map((str) => str.split(" ").map(Number));

function solution() {
  const list = [];
  let minGap = Infinity;
  dfs(0);

  function dfs(depth) {
    if (depth === N) {
      const [sour, bitter] = list.reduce(
        ([s, b], [sour, bitter]) => [s * sour, b + bitter],
        [1, 0]
      );
      const gap = sour !== 1 ? Math.abs(sour - bitter) : Infinity;
      minGap = Math.min(minGap, gap);
      return;
    }

    list.push(ingredients[depth]);
    dfs(depth + 1);
    list.pop();
    dfs(depth + 1);
  }

  return minGap;
}

console.log(solution());
