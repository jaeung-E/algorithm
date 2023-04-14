function solution(fees, records) {
    const answer = [];
    const recordMap = new Map();
    const [baseMinute, baseFee, unitMinute, unitFee] = fees;
    
    records.forEach((record) => {
        const [time, carNumber, keyword] = record.split(' ');
        const [hour, minute] = time.split(':').map(Number);
        const defaultInfo = { lastHour: 23, lastMinute: 59, totalMinute: 0 };
        const info = recordMap.get(carNumber) ?? new Map(Object.entries(defaultInfo));
        
        if (keyword === 'IN') {
            info.set('lastHour', hour);
            info.set('lastMinute', minute);
            recordMap.set(carNumber, info);
        }
        
        if (keyword === 'OUT') {
            const nextHour = (hour - info.get('lastHour')) * 60;
            const nextMinute = minute - info.get('lastMinute');
            info.set('totalMinute', nextHour + nextMinute + info.get('totalMinute'));
            info.set('lastHour', 23);
            info.set('lastMinute', 59);
        }
    });
    
    new Map([...recordMap]
        .sort((a, b) => a[0] - b[0]))
        .forEach((info) => {
            const infoObject = Object.fromEntries(info);
            const { lastHour, lastMinute } = infoObject;
            let { totalMinute } = infoObject;
            
            if (lastHour !== 23 || lastMinute !== 59) {
                totalMinute += (23 - lastHour) * 60 + (59 - lastMinute);
            }
            
            if (totalMinute < baseMinute) answer.push(baseFee);
            else answer.push(baseFee + Math.ceil((totalMinute - baseMinute) / unitMinute) * unitFee);
        });
    
    return answer;
}