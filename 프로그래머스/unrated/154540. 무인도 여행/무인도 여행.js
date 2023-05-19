function solution(maps) {
    const answer = [];
    const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[i].length; j++) {
            if (!visited[i][j] && maps[i][j] !== 'X') {
                answer.push(BFS(i, j, maps, visited));
            }
        }
    }
    
    answer.sort((a, b) => a - b);
    
    return answer.length ? answer : [-1];
}

function BFS(x, y, maps, visited) {
    let sum = +maps[x][y];
    const queue = [[x, y]];
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    visited[x][y] = true;

    while (queue.length) {
        const [X, Y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const nx = X + dx[i];
            const ny = Y + dy[i];

            if (isBound(nx, ny, maps) && !visited[nx][ny] && maps[nx][ny] !== "X") {
              visited[nx][ny] = true;
              sum += +maps[nx][ny];
              queue.push([nx, ny]);
            }
        }
    }
    
    return sum;
}

function isBound(x, y, maps) {
    if (x >= 0 && y >= 0 && x < maps.length && y < maps[0].length) return true;
    return false;
}