const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[_], ...schedule] = input.map((str) => str.split(" ").map(Number));

function solution() {
  let count = 0;

  schedule.sort(([startA, endA], [startB, endB]) => {
    if (endA === endB) return startA - startB;
    return endA - endB;
  });

  let lastEndTime = 0;
  schedule.forEach(([startTime, endTime]) => {
    if (startTime >= lastEndTime) {
      lastEndTime = endTime;
      count++;
    }
  });

  return count;
}

console.log(solution());
