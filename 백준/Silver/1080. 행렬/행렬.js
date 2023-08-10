const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const matrix = input.map((str) => str.trim().split("").map(Number));
const RANGE = 3;

function solution() {
  const [matrixA, matrixB] = [matrix.slice(0, N), matrix.slice(N)];
  let count = 0;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (matrixA[x][y] !== matrixB[x][y] && isBound(x, y)) {
        flipMatrix(matrixA, x, y);
        count++;
      }
    }
  }

  return compareMatrix(matrixA, matrixB) ? count : -1;
}

function flipMatrix(matrix, x, y) {
  for (let i = x; i < x + RANGE; i++) {
    for (let j = y; j < y + RANGE; j++) {
      matrix[i][j] = matrix[i][j] === 1 ? 0 : 1;
    }
  }
}

function compareMatrix(matrixA, matrixB) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (matrixA[x][y] !== matrixB[x][y]) return false;
    }
  }

  return true;
}

function isBound(x, y) {
  return x >= 0 && y >= 0 && x + RANGE <= N && y + RANGE <= M ? true : false;
}

console.log(solution());
