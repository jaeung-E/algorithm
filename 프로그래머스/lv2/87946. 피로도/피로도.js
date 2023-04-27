let answer = 0;

function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false);
    intoDungeon(k, 0, visited, dungeons);
    
    return answer;
}

function intoDungeon(fatigue, depth, visited, dungeons) {
    for (let i = 0; i < dungeons.length; i++) {
        const [require, consume] = dungeons[i];
        if (visited[i] || require > fatigue) continue;
        visited[i] = true;
        intoDungeon(fatigue - consume, depth + 1, visited, dungeons);
        visited[i] = false;
    }

    answer = Math.max(answer, depth);
}