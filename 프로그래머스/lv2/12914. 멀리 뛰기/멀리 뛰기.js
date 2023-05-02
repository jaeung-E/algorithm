function solution(n) {
    const fibo = [1, 1, 2];
    
    for (let i = 3; i <= n; i++) {
        fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
    }

    return fibo[n];
}