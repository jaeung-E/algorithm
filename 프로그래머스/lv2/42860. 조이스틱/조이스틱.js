function solution(name) {
    const A = 65;
    const Z = 91;
    let answer = 0;
    let moveCount = name.length - 1;
          
    [...name].forEach((char, currentIndex) => {
        const target = char.charCodeAt();
        let nextIndex = currentIndex + 1;
        answer += Math.min(Z - target, target - A);
        
        while (name.charAt(nextIndex) === 'A' && nextIndex < name.length) nextIndex++;
        moveCount = Math.min(moveCount, 
                            currentIndex * 2 + name.length - nextIndex,
                            currentIndex + 2 * (name.length - nextIndex))
    });
    
    return answer + moveCount;
}