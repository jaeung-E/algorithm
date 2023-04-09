function solution(word) {
  let answer = 0;
  const digits = [781, 156, 31, 6, 1];
  const words = ["A", "E", "I", "O", "U"];

  [...word].forEach((char, idx) => {
    const wordValue = words.indexOf(char);
    const digit = digits[idx];

    answer += wordValue * digit;
  });

  return answer + word.length;
}
