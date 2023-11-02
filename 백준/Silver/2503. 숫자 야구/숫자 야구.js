const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[N], ...numbers] = input.map((str) => str.split(" ").map(Number));

function solution() {
  let answer = 0;

  for (let number = 123; number <= 987; number++) {
    let check = 0;
    number = number.toString();

    if (isValidNum(number)) {
      for (let [targetNumber, strike, ball] of numbers) {
        targetNumber = targetNumber.toString();
        let [strikeCount, ballCount] = [0, 0];

        for (let i = 0; i < 3; i++) {
          if (targetNumber.charAt(i) === number.charAt(i)) strikeCount++;
          else if (targetNumber.includes(number.charAt(i))) ballCount++;
        }

        if (strike === strikeCount && ball === ballCount) check++;
      }

      if (check === N) answer++;
    }
  }
  return answer;
}

function isValidNum(string) {
  const [first, second, third] = [
    string.charAt(0),
    string.charAt(1),
    string.charAt(2),
  ];

  if (
    first === second ||
    first === third ||
    second === third ||
    string.includes("0")
  )
    return false;

  return true;
}

console.log(solution());
