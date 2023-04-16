function solution(info, query) {
    const answer = [];
    const dict = {};
    
    info.map((str) => {
        const arr = str.split(' ');
        const score = Number(arr.pop());
        const result = [];
        combination(arr, 0, result);
        
        result.forEach((string) => {
            dict[string] ? dict[string].push(score) : dict[string] = [score];
        });
    });
    
    for (const key in dict) {
        dict[key].sort((a, b) => a - b);
    }
    
    query.forEach((q) => {
        const qArr = q.replaceAll(/and\s/g, '').split(' ');
        const targetScore = Number(qArr.pop());
        const key = qArr.join('');
               
        answer.push(binarySearch(dict[key], targetScore));
    });
    
    return answer;
}

function combination(arr, start, result) {
    const key = arr.join("");
    result.push(key);
    
    for(let i = start; i < arr.length; i++) {
        const tempArr = [...arr];
        tempArr[i] = '-';
        combination(tempArr, i+1, result);
    }
}

function binarySearch(arr, targetScore) {
    if (!arr) return 0;
    
    let low = 0;
    let high = arr.length;
    
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] < targetScore) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    return arr.length - low;
}