function solution(park, routes) {
    let answer = [];
    
    park.forEach((str, index) => {
        if (str.indexOf('S') >= 0) answer = [index, str.indexOf('S')];
    });
    
    routes.forEach((route) => {
        const [direction, distance] = route.split(' ');
        const [tempX, tempY] = [...answer];
        
        for (let i = 0; i < distance; i++) {
            const [nextX, nextY] = moveRobot(answer, direction);

            if (!isBound(nextX, nextY, park) || park[nextX][nextY] === 'X') {
                answer = [tempX, tempY];
                break;
            }
            
            answer = [nextX, nextY];
        }
    });
    
    return answer;
}

function moveRobot(position, direction) {
    const directions = {
        "E": [0, 1],
        "W": [0, -1],
        "N": [-1, 0],
        "S": [1, 0]
    }

    return [position[0] + directions[direction][0], position[1] + directions[direction][1]];
}

function isBound(x, y, park) {
    if (x >= 0 && x < park.length 
        && y >= 0 && y < park[0].length) return true;
    
    return false;
}
