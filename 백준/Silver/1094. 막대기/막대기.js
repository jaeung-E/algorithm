const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const X = +input;
const START_LENGTH = 64;

function solution() {
  let mergedLength = START_LENGTH;
  const sticks = [mergedLength];

  if (X === START_LENGTH) return 1;

  while (mergedLength > X) {
    const shortStick = sticks.pop();
    for (let i = 0; i < 2; i++) sticks.push(shortStick / 2);

    mergedLength = sticks.reduce((sum, stick) => (sum += stick), 0);
    if (mergedLength - shortStick / 2 >= X) sticks.pop();
  }

  return sticks.length - 1;
}

console.log(solution());
