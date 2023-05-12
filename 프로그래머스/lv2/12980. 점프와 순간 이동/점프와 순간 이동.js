function solution(n) {
    let answer = 0;
    
    while (n > 0) {
        if (n % 2 !== 0) {
            n -= 1;
            answer++;
            continue;
        }
        
        n /= 2;
    }
    
    return answer;
}