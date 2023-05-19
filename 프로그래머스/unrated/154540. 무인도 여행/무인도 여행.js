function solution(maps) {
    const answer = [];
    const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[i].length; j++) {
            if (!visited[i][j] && maps[i][j] !== 'X') {
                answer.push(DFS(i, j, maps, visited));
            }
        }
    }
    
    answer.sort((a, b) => a - b);
    
    return answer.length ? answer : [-1];
}

function DFS(x, y, maps, visited) {
    let sum = +maps[x][y];
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (isBound(nx, ny, maps) && !visited[nx][ny] && maps[nx][ny] !== "X") {
            sum += DFS(nx, ny, maps, visited)
        }
    }
    
    return sum;
}

function isBound(x, y, maps) {
    if (x >= 0 && y >= 0 && x < maps.length && y < maps[0].length) return true;
    return false;
}