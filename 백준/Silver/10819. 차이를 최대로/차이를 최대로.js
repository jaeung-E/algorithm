const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N], numbers] = input.map((str) => str.split(" ").map(Number));

function solution() {
  const visited = Array(N).fill(false);
  let maxSum = -Infinity;
  searchMaximum([]);

  function searchMaximum(permutation) {
    if (permutation.length === N) {
      const sum = permutation.reduce((acc, _, index, arr) => {
        return index < arr.length - 1
          ? acc + Math.abs(permutation[index] - permutation[index + 1])
          : acc;
      }, 0);

      maxSum = Math.max(maxSum, sum);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[i]) {
        permutation.push(numbers[i]);
        visited[i] = true;
        searchMaximum(permutation);
        permutation.pop();
        visited[i] = false;
      }
    }
  }

  return maxSum;
}

console.log(solution());
