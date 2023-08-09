const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N, M], ...paper] = input.map((str) => str.split(" ").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let weight = 0;

function solution() {
  const paints = [];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (visited[x][y] === false && paper[x][y] === 1) {
        searchPaint(x, y, visited);
        paints.push(weight);
        weight = 0;
      }
    }
  }

  return paints.length > 0 ? [paints.length, Math.max(...paints)] : [0, 0];
}

function searchPaint(x, y, visited) {
  visited[x][y] = true;
  weight++;

  for (let i = 0; i < dx.length; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (isBound(nx, ny) && !visited[nx][ny] && paper[nx][ny] === 1)
      searchPaint(nx, ny, visited);
  }
}

function isBound(x, y) {
  return x >= 0 && y >= 0 && x < N && y < M ? true : false;
}

solution().forEach((value) => console.log(value));
