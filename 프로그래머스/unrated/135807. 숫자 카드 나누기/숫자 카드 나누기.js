function solution(arrayA, arrayB) {
    let answer = 0;
    
    arrayA.sort((a, b) => b - a);
    arrayB.sort((a, b) => b - a);
    
    return Math.max(findMaxDecimal(arrayA, arrayB), findMaxDecimal(arrayB, arrayA));
}

function findMaxDecimal(arrayA, arrayB) {
    for (let i = arrayA[0]; i > 0; i--) {
        if (arrayA.every((numA) => numA % i === 0) 
            && !arrayB.some((numB) => numB % i === 0)) return i;
    }
    
    return 0;
}