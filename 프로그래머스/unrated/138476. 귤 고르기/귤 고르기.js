function solution(k, tangerine) {
    let answer = 0;
    const tangerineMap = new Map();
    
    tangerine.forEach((t) => tangerineMap.set(t, (tangerineMap.get(t) ?? 0) + 1));
    
    [...tangerineMap]
        .sort((a, b) => b[1] - a[1])
        .some(([size, count]) => {
            k -= count;
            answer++;
            if (k <= 0) return true;
        });
        
    return answer;
}