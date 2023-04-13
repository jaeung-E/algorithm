function solution(topping) {
    const [ob, yb] = [new Map(), new Set()];
    let answer = 0;
    
    topping.forEach((num) => ob.set(num, (ob.get(num) ?? 0) + 1));
    topping.forEach((num) => {
        yb.add(num);
        ob.set(num, ob.get(num) - 1);
        if (ob.get(num) < 1) ob.delete(num);
        if (ob.size === yb.size) answer++;
    });
    
    return answer;
}