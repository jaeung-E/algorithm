function solution(plans) {
    const answer = [];
    const stack = [];
    
    plans = plans
        .map(([name, start, playtime]) => {
            const [hour, minute] = start.split(':').map(Number);
            return [name, hour * 60 + minute, +playtime];
        })
        .sort((a, b) => b[1] - a[1]);
    
    while (plans.length) {
        const [name, startMinute, playtime] = plans.pop();

        stack.forEach((arr, index) => {
            const [_, time] = arr;
            if (startMinute < time) stack[index][1] += playtime;
        });

        stack.push([name, startMinute + playtime]);
    }
    
    return stack.sort((a, b) => a[1] - b[1]).map(val => val[0]);
}