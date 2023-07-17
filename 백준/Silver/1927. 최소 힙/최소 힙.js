const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [_, ...inputs] = input.map((str) => Number(str));

function solution() {
  const heap = new Heap();
  const answer = [];

  inputs.forEach((n) => {
    const number = parseInt(n);
    if (number === 0) answer.push(heap.poll());
    else heap.push(number);
  });

  return answer.join("\n");
}

class Heap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let valueIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(valueIndex);

    while (valueIndex > 1 && this.heap[parentIndex] > this.heap[valueIndex]) {
      this.swap(valueIndex, parentIndex);
      valueIndex = parentIndex;
      parentIndex = this.getParentIndex(valueIndex);
    }
  }

  poll() {
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heap.pop();
    const value = this.heap[1];
    this.heap[1] = this.heap.pop();

    let parentIndex = 1;
    let leftChildIndex = parentIndex * 2;
    let rightChildIndex = parentIndex * 2 + 1;

    while (
      this.isLower(leftChildIndex, parentIndex) ||
      this.isLower(rightChildIndex, parentIndex)
    ) {
      const lowerIndex = this.isLower(rightChildIndex, leftChildIndex)
        ? rightChildIndex
        : leftChildIndex;
      this.swap(parentIndex, lowerIndex);

      parentIndex = lowerIndex;
      leftChildIndex = parentIndex * 2;
      rightChildIndex = parentIndex * 2 + 1;
    }

    return value;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length === 1 ? 0 : this.heap.length - 1;
  }

  getParentIndex(index) {
    return Math.floor(index / 2);
  }

  isLower(a, b) {
    return this.heap[a] && this.heap[a] < this.heap[b];
  }
}

console.log(solution());
