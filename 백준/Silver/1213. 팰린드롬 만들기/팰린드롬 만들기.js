const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const name = input.split("");

function solution() {
  const map = new Map();
  let oddCount = 0;
  let oddChar = "";
  let answer = "";

  name.sort();
  name.forEach((char) => {
    map.set(char, (map.get(char) || 0) + 1);
  });
  map.forEach((count, alphabet) => {
    if (count % 2 !== 0) {
      oddCount++;
      oddChar = alphabet;
    }
  });

  if (oddCount > 1) return "I'm Sorry Hansoo";

  map.forEach((count, alphabet) => {
    answer = answer.concat(alphabet.repeat(Math.floor(count / 2)));
  });

  const reverseAnswer = [...answer].reverse().join("");

  return oddCount ? answer + oddChar + reverseAnswer : answer + reverseAnswer;
}

console.log(solution());
