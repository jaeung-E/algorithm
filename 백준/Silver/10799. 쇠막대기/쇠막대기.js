const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const brackets = [...input];

function solution() {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "(") stack.push(brackets[i]);
    else {
      stack.pop();
      if (brackets[i - 1] === "(") answer += stack.length;
      else answer++;
    }
  }

  return answer;
}

console.log(solution());
