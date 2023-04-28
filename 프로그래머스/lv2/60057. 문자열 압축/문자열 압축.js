function solution(s) {
    let min = s.length;
    
    for(let i = 1; i <= s.length / 2; i++) {
        const sliceArr = [];
        const compArr = [];
        let count = 1;
        
        for(let j = 0; j < s.length; j+=i) {
            sliceArr.push(s.slice(j, j+i));
        }
        
        for(let j = 0; j < sliceArr.length; j++) {
            const isSame = sliceArr[j] === sliceArr[j+1];
            let compString = sliceArr[j];
            
            if (isSame) {
                count++;
                continue;
            } 
            
            if (count > 1) {
                compString = count + sliceArr[j];
            }
            
            compArr.push(compString);
            count = 1;
        }
        
        min = Math.min(min, compArr.join('').length);
    }
    
    return min;
}