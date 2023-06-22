const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const LENGTH = 6;

function solution() {
  const map = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5 };
  const visited = Array.from({ length: LENGTH }, () =>
    Array(LENGTH).fill(false)
  );
  const paths = input.map((str) => {
    const [row, col] = str.split("");
    return [map[row], Number(col - 1)];
  });
  const [startX, startY] = paths[0];
  const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];

  while (paths.length > 1) {
    const [currentX, currentY] = paths.shift();
    const [nextX, nextY] = paths[0];
    let flag = false;

    visited[currentX][currentY] = true;

    for (let i = 0; i < dx.length; i++) {
      if (
        dx[i] === Math.abs(currentX - nextX) &&
        dy[i] === Math.abs(currentY - nextY)
      ) {
        flag = true;
      }
    }

    if (!flag || visited[nextX][nextY]) return "Invalid";
  }

  const [endX, endY] = paths.shift();

  for (let i = 0; i < dx.length; i++) {
    if (dx[i] === Math.abs(startX - endX) && dy[i] === Math.abs(startY - endY))
      return "Valid";
  }

  return "Invalid";
}

console.log(solution());
