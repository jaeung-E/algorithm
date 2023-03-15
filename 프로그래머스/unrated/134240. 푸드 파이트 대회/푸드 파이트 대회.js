function solution(food) {
    let foods = '';
    
    for (let i = 1; i < food.length; i++) {
        foods += `${i}`.repeat(food[i] / 2);
    }
    
    return foods + '0' + foods.split('').reverse().join('');
}