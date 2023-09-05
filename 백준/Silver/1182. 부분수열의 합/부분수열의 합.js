const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N, S], numbers] = input.map((str) => str.split(" ").map(Number));

function solution() {
  const subsequence = [];
  let answer = 0;
  dfs(0);

  function dfs(depth) {
    if (depth === N) {
      const sum = subsequence.reduce((sum, num) => (sum += num), 0);
      if (sum === S) answer++;
      return;
    }

    subsequence.push(numbers[depth]);
    dfs(depth + 1);
    subsequence.pop();
    dfs(depth + 1);
  }

  return S === 0 ? answer - 1 : answer;
}

console.log(solution());
