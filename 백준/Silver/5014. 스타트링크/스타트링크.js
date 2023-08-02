const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const [F, S, G, U, D] = input.split(" ").map(Number);

function solution() {
  if (S === G) return 0;

  const floor = Array(F + 1).fill(0);
  const buttons = [U, -D];
  const queue = [S];

  while (queue.length) {
    const currentFloor = queue.shift();

    for (const button of buttons) {
      const nextFloor = currentFloor + button;
      if (
        isBound(nextFloor, floor.length) &&
        floor[nextFloor] === 0 &&
        button !== 0
      ) {
        floor[nextFloor] = floor[currentFloor] + 1;
        queue.push(nextFloor);
      }
    }
  }

  return floor[G] ? floor[G] : "use the stairs";
}

function isBound(nextFloor, length) {
  return nextFloor > 0 && nextFloor < length ? true : false;
}

console.log(solution());
