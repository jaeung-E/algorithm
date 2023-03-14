function solution(s, skip, index) {    
    const MAX_CHAR_CODE = 122;
    const MIN_CHAR_CODE = 97;
    let answer = '';
    
    for (const char of s) {
        let count = index;
        let charCode = char.charCodeAt();
        
        while (count > 0) {
            charCode = (charCode + 1 - MIN_CHAR_CODE) % 26 + MIN_CHAR_CODE;
            if (skip.includes(String.fromCharCode(charCode))) continue;
            count--;
        }
        
        answer += String.fromCharCode(charCode);
    }
    
    return answer;
}