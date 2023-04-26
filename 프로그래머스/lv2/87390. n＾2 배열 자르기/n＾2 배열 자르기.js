function solution(n, left, right) {
    const array = Array.from({ length: right - left + 1 }, (_, index) => left + index);
    
    return array.map((num) => {
        const x = Math.floor(num / n);
        const y = num % n;
        
        return Math.max(x, y) + 1;
    });
}