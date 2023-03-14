function solution(s) {
    const answer = [];
    let temp = '';
    
    for (const char of s) {
        if (temp.lastIndexOf(char) !== -1) {
            answer.push(temp.length - temp.lastIndexOf(char))
        } else {
            answer.push(-1);
        }
        
        temp += char;
    }
    
    return answer;
}