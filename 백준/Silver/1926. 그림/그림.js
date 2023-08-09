const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N, M], ...paper] = input.map((str) => str.split(" ").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function solution() {
  const paints = [];
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (visited[x][y] === false && paper[x][y] === 1)
        paints.push(searchPaint(x, y, visited));
    }
  }

  return paints.length > 0 ? [paints.length, Math.max(...paints)] : [0, 0];
}

function searchPaint(x, y, visited) {
  let depth = 1;
  visited[x][y] = true;

  for (let i = 0; i < dx.length; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (isBound(nx, ny) && !visited[nx][ny] && paper[nx][ny] === 1)
      depth += searchPaint(nx, ny, visited);
  }

  return depth;
}

function isBound(x, y) {
  return x >= 0 && y >= 0 && x < N && y < M ? true : false;
}

solution().forEach((value) => console.log(value));
