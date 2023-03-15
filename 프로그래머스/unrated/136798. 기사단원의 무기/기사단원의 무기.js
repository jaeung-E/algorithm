function solution(number, limit, power) {
    let answer = 0;
    
    for (let i = 1; i <= number; i++) {
        const damage = getDivisor(i);
        answer += damage > limit 
            ? power 
            : damage;
    }
    
    return answer;
}

function getDivisor(number) {
    let count = 0;
    
    for (let i = 1; i * i <= number; i++) {
        if (i * i === number) count++;
        else if (number % i === 0) count += 2;
    }
    
    return count;
}