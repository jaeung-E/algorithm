const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N], A, [M], B] = input.map((str) => str.split(" ").map(Number));

function solution() {
  let answer = [];
  A.sort((a, b) => a - b);

  B.forEach((num) => {
    const isFound = binarySearch(A, num) ? 1 : 0;
    answer.push(isFound);
  });

  return answer.join("\n");
}

function binarySearch(sortedArray, targetNumber) {
  let [left, mid, right] = [0, 0, sortedArray.length - 1];

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === targetNumber) return true;

    if (sortedArray[mid] < targetNumber) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}

console.log(solution());
