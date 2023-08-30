const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const X = Number(input);
const numbers = input.split("").map((char) => Number(char));

function solution() {
  const permutations = [];
  const visited = Array(numbers.length).fill(false);
  dfs(0, visited, permutations, "");

  return permutations.length <= 0 ? 0 : permutations.sort((a, b) => a - b)[0];
}

function dfs(depth, visited, permutations, num) {
  if (depth === numbers.length && Number(num) > X) {
    permutations.push(Number(num));
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      dfs(depth + 1, visited, permutations, numbers[i] + num);
      visited[i] = false;
    }
  }
}

console.log(solution());
