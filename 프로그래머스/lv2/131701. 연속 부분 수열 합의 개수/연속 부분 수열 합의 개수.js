function solution(elements) {
    const answerSet = new Set();
    
    for (let i = 1; i <= elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            const sliceArray = j + i > elements.length 
                ? [...elements.slice(j, elements.length), ...elements.slice(0, j + i - elements.length)] 
                : elements.slice(j, j + i);
            
            answerSet.add(sliceArray.reduce((sum, num) => sum += num), 0);
        }
    }

    return answerSet.size;
}