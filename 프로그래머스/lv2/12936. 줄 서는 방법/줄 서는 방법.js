// 순열을 이용한 풀이, 시간 초과
// function solution(n, k) {
//     const arr = Array.from({ length: n }, (_, index) => index + 1);
//     return getPermutation(arr, n)[k - 1];
// }

// function getPermutation(arr, depth) {
//     const permutations = [];
//     if (depth === 1) return arr.map((num) => [num]); 

//     arr.forEach((fixed, index, origin) => {
//       const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//       const results = getPermutation(rest, depth - 1); 
//       const attached = results.map((num) => [fixed, ...num]); 
//       permutations.push(...attached); 
//     });

//     return permutations;
// }

function solution(n, k) {
    const answer = [];
    let arr = Array.from({ length: n }, (_, index) => index + 1);
    let factorial = arr.reduce((acc, num) => acc * num, 1);
        
    while (answer.length < n) {
        factorial /= arr.length;
        answer.push(arr.splice(Math.floor((k - 1) / factorial), 1)[0]);
        k = k % factorial;
    }
    
    return answer;
}

