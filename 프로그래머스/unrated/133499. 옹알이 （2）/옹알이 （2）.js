function solution(babbling) {
    let answer = 0;
    const words = ['aya', 'ye', 'woo', 'ma'];
    const duplicate = words.map((word) => word.repeat(2));
    
    for (let b of babbling) {
        if (duplicate.some((d) => b.includes(d))) continue;
        for (const w of words) {
            b = b.replaceAll(w, ' ');
        }
        
        b = b.replaceAll(' ', '');
        if (b.length === 0) answer++;
    }
    
    return answer;
}