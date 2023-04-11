function solution(name, yearning, photo) {
    const answer = [];
    const yearningMap = new Map();
    
    name.forEach((n, index) => {
        yearningMap.set(n, yearning[index]); 
    });
    
    photo.forEach((array) => {
        const point = array.reduce((sum, n) => sum += yearningMap.get(n) ?? 0, 0);
        answer.push(point);
    });
    
    return answer;
}