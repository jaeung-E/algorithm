function solution(k, score) {
    const answer = [];
    const sortedScore = []
    
    score.forEach((s) => {
        sortedScore.push(s);
        sortedScore.sort((a, b) => b - a);
        sortedScore.splice(k);
        answer.push(sortedScore[sortedScore.length - 1]);
    });
    
    return answer;
}