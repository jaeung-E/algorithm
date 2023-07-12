const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [_, ...numbers] = input.map((str) => Number(str));

function solution() {
  const stack = [];
  let answer = "";
  let count = 1;

  for (const number of numbers) {
    while (count <= number) {
      stack.push(count);
      count++;
      answer += "+\n";
    }

    const top = stack.pop();
    answer += "-\n";
    if (top !== number) return "NO";
  }

  return answer;
}

console.log(solution());