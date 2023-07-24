const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[M, N, _], ...area] = input.map((str) => str.split(" ").map(Number));

function solution() {
  const answer = [];
  const map = Array.from({ length: M }, () => Array(N).fill(0));

  for (const [leftX, leftY, rightX, rightY] of area) {
    for (let x = leftX; x < rightX; x++) {
      for (let y = leftY; y < rightY; y++) {
        map[y][x] = 1;
      }
    }
  }

  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[0].length; y++) {
      if (map[x][y] === 0) answer.push(BFS(x, y, map));
    }
  }

  return [answer.length, answer.sort((a, b) => a - b).join(" ")];
}

function BFS(x, y, map) {
  let count = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [[x, y]];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (isBound(nx, ny, map) && map[nx][ny] === 0) {
        queue.push([nx, ny]);
        count++;
        map[nx][ny] = 1;
      }
    }
  }

  return count === 0 ? 1 : count;
}

function isBound(x, y, map) {
  if (x >= 0 && y >= 0 && x < map.length && y < map[0].length) return true;
  return false;
}

solution().forEach((line) => console.log(line));
