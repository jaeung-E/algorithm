function solution(board, moves) {
    const stack = [];
    let count = 0;
    
    moves.forEach(num => {
        for(let i = 0; i < board.length; i++) {
            if(board[i][num-1] !== 0) {
                const item = stack.pop();
                
                if(item !== board[i][num-1]) {
                    item && stack.push(item);
                    stack.push(board[i][num-1]);
                } else {
                    count += 2;
                }
                
                board[i][num-1] = 0;
                break;
            } 
        }
    });
 
    return count;
}