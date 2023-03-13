function solution(keymap, targets) {
    const answer = [];
    const keys = new Map();
    
    keymap.forEach((str) => {
        for (const [index, char] of Object.entries(str)) {
            const value = parseInt(index) + 1;
            
            keys.has(char) 
                ? keys.set(char, Math.min(keys.get(char), value))
                : keys.set(char, value);
        }
    });
    
    targets.forEach((str) => {
        let count = 0;
        
        for (const char of str) {
            if (keys.has(char)) {
                count += keys.get(char);
            } else {
                count = -1;
                break;
            }
        }
        
        answer.push(count);
    });
    
    return answer;
}