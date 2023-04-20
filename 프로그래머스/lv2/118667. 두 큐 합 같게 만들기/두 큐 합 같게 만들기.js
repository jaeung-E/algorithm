function solution(queue1, queue2) {
    let answer = 0;
    let [sum1, sum2] = [sumArray(queue1), sumArray(queue2)];
    let [pointer1, pointer2] = [0, queue1.length];
    const targetNum = (sum1 + sum2) / 2;
    const mergeQueue = [...queue1, ...queue2];
    
    while (sum1 !== targetNum && answer < queue1.length * 3) {
        if (sum1 > targetNum) sum1 -= mergeQueue[pointer1++];
        else sum1 += mergeQueue[pointer2++];
        answer++;
    }
    
    return sum1 !== targetNum ? - 1 : answer;
}

function sumArray(array) {
    return array.reduce((sum, num) => sum + num, 0);
};