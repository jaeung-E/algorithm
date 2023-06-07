function solution(data, col, row_begin, row_end) {
    let answer = 0;
    
    data.sort((a, b) => {
        return a[col - 1] === b[col - 1] 
                ? b[0] - a[0] 
                : a[col - 1] - b[col - 1];
    });
    
    for (let i = row_begin - 1; i < row_end; i++) {
        answer ^= data[i].reduce((acc, num) => acc + num % (i + 1), 0);
    }
    
    return answer;
}