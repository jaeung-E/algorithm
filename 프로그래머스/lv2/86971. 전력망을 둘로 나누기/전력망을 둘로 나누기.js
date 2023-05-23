function solution(n, wires) {
    let answer = Infinity;
    const tree = new Map();
    
    wires.forEach(([from, to]) => {
        tree.set(from, (tree.get(from) ?? []).concat(to));
        tree.set(to, (tree.get(to) ?? []).concat(from));
    });
    
    wires.forEach(([from, to]) => {
        const length1 = searchNodes(from, to, n, tree);
        const length2 = n - length1;
        answer = Math.min(answer, Math.abs(length1 - length2));
    });
    
    return answer;
}

function searchNodes(from, to, n, tree) {
    let count = 0;
    const queue = [from];
    const visited = Array(n).fill(false);
    visited[from] = true;
    
    while (queue.length) {
        const links = tree.get(queue.shift());
        
        links.forEach((nextNode) => {
            if (!visited[nextNode] && nextNode !== to) {
                visited[nextNode] = true;
                queue.push(nextNode);
            }
        });
        
        count++;
    }
    
    return count;
}


