function solution(cards) {
    let answer = 0;
    
    cards.forEach((card) => {
        const copyCards1 = [...cards];
        const firstBox = openBox(card - 1, copyCards1, 0);
        
        copyCards1.some((card) => {
            if (card === 0) return false;
            
            const copyCards2 = [...copyCards1];
            const secondBox = openBox(card - 1, copyCards2, 0);
            answer = Math.max(answer, firstBox * secondBox);
        });
    });
    
    return answer;
}

function openBox(index, copyCards, count) {
    if (copyCards[index] === 0) return count;
    
    const card = copyCards[index];
    copyCards[index] = 0;
    return openBox(card - 1, copyCards, count + 1);
}