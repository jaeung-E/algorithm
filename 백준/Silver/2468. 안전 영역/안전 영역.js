const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N], ...area] = input.map((str) => str.split(" ").map(Number));
const MAX_HEIGHT = 100;

function solution() {
  let answer = 0;

  for (let height = 0; height <= MAX_HEIGHT; height++) {
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    let safeCount = 0;

    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (height < area[x][y] && !visited[x][y]) {
          searchSafeArea([x, y], height, visited);
          safeCount++;
        }
      }
    }

    answer = Math.max(answer, safeCount);
  }

  return answer;
}

function searchSafeArea([startX, startY], height, visited) {
  const queue = [[startX, startY]];
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  visited[startX][startY] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (isBound(nx, ny) && !visited[nx][ny] && area[nx][ny] > height) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
}

function isBound(x, y) {
  if (x >= 0 && y >= 0 && x < N && y < N) return true;
  return false;
}

console.log(solution());
