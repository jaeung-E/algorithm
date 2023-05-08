function solution(clothes) {
    let answer = 1;
    const clothMap = new Map();
    
    clothes.forEach(([cloth, type]) => {
        clothMap.set(type, (clothMap.get(type) ?? []).concat(cloth));
    });
    
    clothMap.forEach((array) => answer *= array.length + 1);
    
    return answer - 1;
}