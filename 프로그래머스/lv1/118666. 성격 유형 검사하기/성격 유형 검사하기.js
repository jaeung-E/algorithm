function solution(survey, choices) {
    const answer = [];
    const points = [0, 3, 2, 1, 0, 1, 2, 3];
    const characters = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    const result = new Map();
    
    characters.forEach((c) => result.set(c, 0));
    
    survey.forEach((s, index) => {
        const [left, right] = s.split('');
        const choice = choices[index];
        if (choice >= 1 && choice < 4) result.set(left, result.get(left) + points[choice]);
        else result.set(right, result.get(right) + points[choice]);
    });
    
    result.get('R') < result.get('T') ? answer.push('T') : answer.push('R');
    result.get('C') < result.get('F') ? answer.push('F') : answer.push('C');
    result.get('J') < result.get('M') ? answer.push('M') : answer.push('J');
    result.get('A') < result.get('N') ? answer.push('N') : answer.push('A');
    
    return answer.join('');
}