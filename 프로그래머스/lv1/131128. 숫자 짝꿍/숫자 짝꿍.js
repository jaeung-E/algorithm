function solution(X, Y) {
    let answer = '';
    const xNum = new Array(10).fill(0);
    const yNum = new Array(10).fill(0);
    
    X.split('').forEach((x) => xNum[+x]++);
    Y.split('').forEach((y) => yNum[+y]++);
    
    xNum.forEach((_, index) => {
       answer += `${index}`.repeat(Math.min(xNum[index], yNum[index]));
    });
    
    answer = answer.split('').sort((a, b) => b - a).join('');
    if (answer.length === 0) return "-1"
    else if (answer[0] === '0') return "0";
    return answer;
}