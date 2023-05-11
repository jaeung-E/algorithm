function solution(dirs) {
    let position = [0, 0];
    const paths = new Set();
    
    for (const dir of dirs) {
        const nextPosition = move(position, dir);
        const path = position.join('') + nextPosition.join('');
        const reversePath = nextPosition.join('') + position.join('');
        
        if (!isBound(nextPosition)) continue;
        paths.add(path).add(reversePath);
        position = nextPosition;
    }
    
    return paths.size / 2;
}

function move(position, dir) {
    let [nextX, nextY] = [...position];
    
    switch (dir) {
        case 'U':
            nextX -= 1;
            break;
        case 'R':
            nextY += 1;
            break;
        case 'D':
            nextX += 1;
            break;
        case 'L':
            nextY -= 1;
            break;
    }
    
    return [nextX, nextY];
}

function isBound(position) {
    const [x, y] = position;
    if (x > 5 || x < -5 || y > 5 || y < -5) return false;
    return true;
}