function solution(x, y, n) {
    const dp = [];
    const queue = [x];
    dp[x] = 0;
    
    while (queue.length > 0) {
        const num = queue.shift();
        const nextNums = [num + n, num * 2, num * 3];
        
        for (const nextNum of nextNums) {
            if (nextNum > y || dp[nextNum]) continue;
            if (nextNum === y) return dp[num] + 1;
            dp[nextNum] = dp[num] + 1;
            queue.push(nextNum);
        }
    }
    
    return x === y ? 0 : -1;
}