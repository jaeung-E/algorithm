function solution(storey) {
    return DFS(storey);
}

function DFS(floor) {
    if (floor < 5) return floor;
    const remain = floor % 10;
    const nextFloor = Math.floor(floor / 10);
    return Math.min(remain + DFS(nextFloor), 10 - remain + DFS(nextFloor + 1));
}