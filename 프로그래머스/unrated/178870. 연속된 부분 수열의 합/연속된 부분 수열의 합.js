function solution(sequence, k) {
    const prefix = [0];
    let [start, end] = [0, 0];
    let [left, right] = [0, 0];
    let minLength = Infinity;
    
    sequence.forEach((num, index) => {
        prefix[index + 1] = num + prefix[index];
    });
    
    while (left <= right) {
        const prefixSum = prefix[right] - prefix[left];
        
        if (prefixSum === k) {
            const prefixLength = right - left - 1;
            
            if (minLength > prefixLength) {
                [start, end] = [left, right - 1];
                minLength = prefixLength;
            }
        }
        
        prefixSum < k ? right++ : left++;
    }
    
    return [start, end];
}