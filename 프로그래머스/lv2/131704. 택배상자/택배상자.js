function solution(order) {
    let answer = 0;
    let boxNumber = 1;
    const stack = [];
    
    for (const o of order) {
        while (boxNumber < o) {
            stack.push(boxNumber++);
        }
        
        if (boxNumber === o || stack.at(-1) === o) {
            if (boxNumber === o) boxNumber++;
            if (stack.at(-1) === o) stack.pop();
            answer++;
        } else break;
    }
    
    return answer;
}