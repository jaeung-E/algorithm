function solution(book_time) {
    let answer = 0;
    const endTime = [];
    
    book_time = book_time
                    .map(([start, end]) => {
                        const [sHour, sMinute] = start.split(':').map(Number);
                        const [eHour, eMinute] = end.split(':').map(Number);
                        return [sHour * 60 + sMinute, eHour * 60 + eMinute];
                    })
                    .sort((a, b) => a[0] - b[0]);
    
    book_time.forEach(([start, end]) => {
        const index = endTime.findIndex((time) => time <= start);
        if (index !== -1) endTime[index] = end + 10;
        else endTime.push(end + 10);
    });
    
    return endTime.length;
}