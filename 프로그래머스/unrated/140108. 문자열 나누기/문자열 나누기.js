function solution(s) {
    let answer = 0;
    let firstChar = s[0];
    let same = 0, diff = 0;

    for (const [index, char] of Object.entries(s)) {
        char === firstChar ? same++ : diff++;

        if (same === diff) { 
            firstChar = s[+index + 1];
            same = diff = 0;
            answer++;
        }
    }
    
    if (firstChar) answer++;
    
    return answer;
}