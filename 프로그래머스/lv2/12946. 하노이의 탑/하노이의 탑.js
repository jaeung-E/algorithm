function solution(n) {
    return dfs(n, 1, 2, 3);
}

function dfs(n, from, temp, to) {
    if (n === 1) return [[from, to]];
    let answer = [];
    
    answer = answer.concat(dfs(n - 1, from, to, temp));
    answer.push([from, to]);
    return answer.concat(dfs(n - 1, temp, from, to));;
}