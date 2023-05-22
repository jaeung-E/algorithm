function solution(maps) {
    let [start, lever, exit] = Array.from(Array(3), () => Array());
    let [timeLever, timeExit] = [0, 0];
    
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === 'S') start = [i, j];
            else if (maps[i][j] === 'L') lever = [i, j];
            else if (maps[i][j] === 'E') exit = [i, j];
        }
    }
    
    timeLever = BFS(start, lever, maps);
    timeExit = BFS(lever, exit, maps);
    
    if (timeLever === 0 || timeExit === 0) return -1;
    return timeLever + timeExit;
}

function BFS(from, to, maps) {
    const distance = Array.from(
        { length: maps.length }, 
        () => Array(maps[0].length).fill(0));
    const queue = [[...from]];
    const [endX, endY] = to;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1,  0, -1];
    
    while (queue.length) {
        const [x, y] = queue.shift();
        if (x === endX && y === endY) break;
        
        for (let i = 0; i < dx.length; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (isBound(nx, ny, maps) && distance[nx][ny] === 0 && maps[nx][ny] !== 'X') {
                distance[nx][ny] = distance[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    
    return distance[endX][endY];
}

function isBound(x, y, maps) {
    if (x >= 0 
        && y >= 0 
        && x < maps.length 
        && y < maps[0].length) return true;
    return false;
}