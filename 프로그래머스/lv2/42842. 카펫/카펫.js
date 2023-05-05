function solution(brown, yellow) {
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i !== 0) continue;
        
        const width = yellow / i + 2;
        const height = i + 2;
        if (width * height - yellow === brown) return [width, height];
    }
}