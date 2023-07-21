const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [_, numbers, ...sections] = input.map((str) =>
  str.split(" ").map(Number)
);

function solution() {
  const answer = [];

  for (let i = 1; i < numbers.length; i++) numbers[i] += numbers[i - 1];
  sections.forEach(([start, end]) => {
    if (start === 1) answer.push(numbers[end - 1]);
    else answer.push(numbers[end - 1] - numbers[start - 2]);
  });

  return answer.join("\n");
}

console.log(solution());