function solution(targets) {
    let [answer, lastEnd] = [0, 0];
    
    targets.sort((a, b) => a[1] - b[1]);
    targets.forEach(([start, end]) => {
        if (lastEnd <= start) {
            lastEnd = end;
            answer++;
        }
    });
    
    return answer;
}