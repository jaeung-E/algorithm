function solution(a, b, n) {
    let answer = 0;
    
    while (n >= a) {
        const cola = parseInt(n / a) * b;
        answer += cola;
        n = n % a + cola;
    }
    
    return answer;
}