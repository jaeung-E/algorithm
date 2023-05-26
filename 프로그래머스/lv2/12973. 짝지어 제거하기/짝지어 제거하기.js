function solution(s) {
    const stack = [];
    
    [...s].forEach((char) => {
        stack.at(-1) !== char ? stack.push(char) : stack.pop();
    });

    return stack.length ? 0 : 1;
}
