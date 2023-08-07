const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((str) => str.split(" ").map(Number));
const [N, M] = input[0];

function solution() {
  const whiteList = Array.from({ length: N + 1 }, () => []);
  const lengths = Array(N + 1).fill(0);
  let answer = "";
  let maxLength = 0;

  for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i];
    whiteList[b].push(a);
  }

  for (let i = 1; i <= N; i++) {
    const length = bfs(i, whiteList);
    lengths[i] = length;
    maxLength = Math.max(maxLength, length);
  }

  lengths.forEach((length, key) => {
    if (length === maxLength) answer += `${key} `;
  });

  return answer.trim();
}

function bfs(startNode, whiteList) {
  const visited = Array(N + 1).fill(false);
  const queue = new Queue();
  let length = 0;

  queue.push(startNode);
  visited[startNode] = true;

  while (!queue.isEmpty()) {
    const nextNodes = whiteList[queue.shift()];
    queue.pop();
    if (!nextNodes) continue;

    for (let i = 0; i < nextNodes.length; i++) {
      const node = nextNodes[i];
      if (visited[node]) continue;

      queue.push(node);
      visited[node] = true;
      length++;
    }
  }

  return length;
}

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  push(value) {
    this.queue[this.rear++] = value;
  }

  pop() {
    this.front++;
  }

  shift() {
    return this.queue[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

console.log(solution());
