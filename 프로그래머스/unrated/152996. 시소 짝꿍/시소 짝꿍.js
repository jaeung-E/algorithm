function solution(weights) {
    let answer = 0;
    const ratioList = [1, 3 / 2, 2, 4 / 3];
    const weightMap = new Map();
    
    weights.sort((a, b) => b - a)
            .forEach((weight) => {
                ratioList.forEach((ratio) => {
                    const calcWeight = weightMap.get(weight * ratio);
                    if (calcWeight) answer += calcWeight;
                });
                weightMap.set(weight, (weightMap.get(weight) || 0) + 1);
            });
    
    return answer;
}