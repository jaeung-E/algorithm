function solution(cards1, cards2, goal) {    
    while (goal.length) {
        const target = goal.shift();
        
        if (cards1[0] === target) {
            cards1.shift();
        } else if (cards2[0] === target) {
            cards2.shift();
        } else {
            goal.unshift(target);
            break;
        }
    }
    
    return goal.length === 0 ? "Yes" : "No";
}