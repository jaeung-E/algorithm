function solution(today, terms, privacies) {
    const answer = [];
    const termsInfo = new Map();
    const [tYear, tMonth, tDay] = today.split('.').map(Number);
    
    terms.forEach((str) => {
        const [t, m] = str.split(' ');
        termsInfo.set(t, parseInt(m));
    });
    
    privacies.forEach((str, index) => {
        const [date, t] = str.split(' ');
        let [year, month, day] = date.split('.').map(Number);
        const isDelete = ((tYear - year) * 12 + (tMonth - month)) * 28 + (tDay - day) >= termsInfo.get(t) * 28;
        if (isDelete) answer.push(index + 1);
    });

    return answer;
}