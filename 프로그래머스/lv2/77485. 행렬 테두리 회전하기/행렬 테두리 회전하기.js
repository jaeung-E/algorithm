function solution(rows, columns, queries) {
    const answer = [];
    const matrix = Array
                    .from({ length: rows }, () => Array(columns).fill(1))
                    .map((row, r) => row.map((column, c) => r * columns + column + c))
    
    queries.forEach((q) => {
        answer.push(rotateBorder(matrix, q))
        
    });
    
    return answer;
}
                    
function rotateBorder(matrix, query) {
    const dequeue = [];
    const [startRow, startCol, endRow, endCol] = query;
    let min = Infinity;
    
    for (let i = startCol - 1; i < endCol - 1; i++) dequeue.push(matrix[startRow - 1][i]);
    for (let i = startRow - 1; i < endRow - 1; i++) dequeue.push(matrix[i][endCol - 1]);
    for (let i = endCol - 1; i > startCol - 1; i--) dequeue.push(matrix[endRow - 1][i]);
    for (let i = endRow - 1; i > startRow - 1; i--) dequeue.push(matrix[i][startCol - 1]);
    
    min = Math.min(...dequeue);
    
    for (let i = startCol; i < endCol; i++) matrix[startRow - 1][i] = dequeue.shift();
    for (let i = startRow; i < endRow; i++) matrix[i][endCol - 1] = dequeue.shift();
    for (let i = endCol - 2; i > startCol - 2; i--) matrix[endRow - 1][i] = dequeue.shift();
    for (let i = endRow - 2; i > startRow - 2; i--) matrix[i][startCol - 1] = dequeue.shift();
    
    return min;
}
    