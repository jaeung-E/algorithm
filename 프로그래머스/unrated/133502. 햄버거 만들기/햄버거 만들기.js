function solution(ingredient) {
    let answer = 0;
    const stack = [];
    
    ingredient.forEach((i) => {
        stack.push(i);
        
        if (stack.length >= 4) {
            const isComplete = stack.slice(-4).join('').includes('1231');
            if (isComplete) {
                for (let i = 0; i < 4; i++) stack.pop();
                answer++;
            }
        }
    });
        
    return answer;
}