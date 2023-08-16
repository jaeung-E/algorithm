const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[X, Y]] = input.map((str) => str.split(" ").map(Number));
const Z = Math.floor((100 * Y) / X);

function solution() {
  let [left, right] = [0, 1000000001];
  let answer = Infinity;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (Z !== Math.floor(((Y + mid) / (X + mid)) * 100)) {
      answer = Math.min(answer, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer === Infinity ? -1 : answer;
}

console.log(solution());
