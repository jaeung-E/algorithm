function solution(elements) {
    const answerSet = new Set();
    
    for (let i = 1; i <= elements.length; i++) {
        const sliceSet = new Set();
        
        for (let j = 0; j < elements.length; j++) {
            const sliceArray = j + i > elements.length 
                ? [...elements.slice(j, elements.length), ...elements.slice(0, j + i - elements.length)] 
                : elements.slice(j, j + i);
            
            sliceSet.add(sliceArray.reduce((sum, num) => sum += num), 0);
        }
        
        sliceSet.forEach((value) => answerSet.add(value));
    }

    return answerSet.size;
}