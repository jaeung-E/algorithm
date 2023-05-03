function solution(land) {
    const column = 4;
    
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < column; j++) {
            const filteredRow = [...land[i - 1]].filter((_, index) => index !== j);
            land[i][j] += Math.max(...filteredRow);
        }
    }
    
    return Math.max(...land[land.length - 1]);
}