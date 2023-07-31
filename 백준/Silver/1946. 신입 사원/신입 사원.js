const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [T, ...tc] = input;

function solution() {
  const answer = [];

  for (let i = 0; i < T; i++) {
    const grades = tc
      .splice(0, Number(tc[0]) + 1)
      .map((str) => str.split(" ").map(Number));
    let count = 0;
    let beforeGrade = grades.length;
    grades.sort((a, b) => a[0] - b[0]);

    for (let j = 0; j < grades.length; j++) {
      if (grades[j][1] < beforeGrade) {
        beforeGrade = grades[j][1];
        count++;
      }
    }

    answer.push(count);
  }

  return answer;
}

solution().forEach((count) => console.log(count));
