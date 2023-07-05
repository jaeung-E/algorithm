const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const K = +input;

function solution() {
  const moveList = hanoi(K, 1, 2, 3);
  let answer = `${moveList.length}`;

  moveList.forEach(([from, to]) => {
    answer = answer.concat(`\n${from} ${to}`);
  });

  return answer;
}

function hanoi(depth, from, temp, to) {
  let move = [];
  if (depth === 1) return [[from, to]];

  move = move.concat(hanoi(depth - 1, from, to, temp));
  move.push([from, to]);
  return move.concat(hanoi(depth - 1, temp, from, to));
}

console.log(solution());
