const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N], numbers, operators] = input.map((str) =>
  str.split(" ").map(Number)
);

let [max, min] = [-Infinity, Infinity];

function solution() {
  dfs(0, numbers[0]);
  return [max, min];
}

function dfs(depth, sum) {
  if (depth === N - 1) {
    max = Math.max(max, sum);
    min = Math.min(min, sum);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (!operators[i]) continue;

    operators[i]--;
    dfs(depth + 1, calculator(sum, numbers[depth + 1], i));
    operators[i]++;
  }
}

function calculator(a, b, operator) {
  switch (operator) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return ~~(a / b);
  }
}

solution().forEach((value) => console.log(value));