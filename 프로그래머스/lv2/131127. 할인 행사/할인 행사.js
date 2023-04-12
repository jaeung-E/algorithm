function solution(want, number, discount) {
    let answer = 0;
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const list = discount.slice(i, i + 10);
        let flag = false;
        
        for (const [index, w] of Object.entries(want)) {
            const matchCount = list.filter((string) => string === w).length;
            if (matchCount !== number[index]) {
                flag = true;
                break;
            }
        }
        
        if (flag) continue;
        answer += 1;
    }
    
    return answer;
}