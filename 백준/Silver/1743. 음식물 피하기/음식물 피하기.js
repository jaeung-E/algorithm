const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N, M, _], ...waste] = input.map((str) =>
  str.trim().split(" ").map(Number)
);
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function solution() {
  const passage = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
  const visited = Array.from({ length: N + 1 }, () => Array(M + 1).fill(false));
  let answer = 0;

  waste.forEach(([a, b]) => {
    passage[a][b] = 1;
  });

  for (let x = 0; x <= N; x++) {
    for (let y = 0; y <= M; y++) {
      if (passage[x][y] === 1 && !visited[x][y]) {
        answer = Math.max(answer, getWeight(x, y, visited, passage));
      }
    }
  }

  return answer;
}

function getWeight(x, y, visited, passage) {
  let weight = 1;
  visited[x][y] = true;

  for (let i = 0; i < dx.length; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (isBound(nx, ny) && !visited[nx][ny] && passage[nx][ny] === 1) {
      weight += getWeight(nx, ny, visited, passage);
    }
  }

  return weight;
}

function isBound(x, y) {
  return x >= 0 && y >= 0 && x <= N && y <= M ? true : false;
}

console.log(solution());
