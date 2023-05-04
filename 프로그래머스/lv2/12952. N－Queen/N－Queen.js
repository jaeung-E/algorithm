let answer = 0;

function solution(n) {
    for (let i = 1; i <= n; i++) {
        const visited = Array(n + 1).fill(0);
        visited[1] = i;
        moveQueen(n, visited, 1);
    }
    
    return answer;
}

function moveQueen(n, visited, depth) {
    if (depth === n) answer++;

    for (let i = 1; i <= n; i++) {
        visited[depth + 1] = i;
        if (isValid(visited, depth + 1)) moveQueen(n, visited, depth + 1);
    }
}

function isValid(visited, depth) {
    for (let i = 1; i < depth; i++) {
        const isColumn = visited[i] === visited[depth];
        const isDiagonal = Math.abs(visited[i] - visited[depth]) === Math.abs(i - depth);

        if (isColumn || isDiagonal) return false;
    }

    return true;
}

