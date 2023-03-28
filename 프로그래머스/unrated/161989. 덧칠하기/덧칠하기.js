function solution(n, m, section) {
    let answer = 0;
    let lastWall = 0;
    
    section.forEach((startWall) => {
        if (lastWall < startWall) {
            answer += 1;
            lastWall = startWall + m - 1;
        }     
    });
    
    return answer;
}
