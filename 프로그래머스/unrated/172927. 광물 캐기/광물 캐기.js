function solution(picks, minerals) {
    const maxDepth = picks.reduce((sum, pick) => sum += pick * 5, 0);
    const slicedMinerals = minerals.slice(0, maxDepth);
    const fatigue = [];
    let answer = 0;
    
    for (let i = 0; i < minerals.length; i += 5) {
        const mineralMap = { diamond: 0, iron: 0, stone: 0 };

        slicedMinerals.slice(i, i + 5).forEach((count) => mineralMap[count]++);
        fatigue.push([
            mineralMap.diamond * 1+ mineralMap.iron * 1+ mineralMap.stone * 1,
            mineralMap.diamond * 5 + mineralMap.iron * 1 + mineralMap.stone * 1,
            mineralMap.diamond * 25 + mineralMap.iron * 5 + mineralMap.stone * 1,
        ]);
    }
    
    fatigue.sort((a, b) => b[2] - a[2]);
    fatigue.forEach(([fatigueDiamond, fatigueIron, fatigueStone]) => {
        if (picks[0]) {
            picks[0]--;
            answer += fatigueDiamond;
        } else if (picks[1]) {
            picks[1]--;
            answer += fatigueIron;
        } else {
            picks[2]--;
            answer += fatigueStone;
        }
    });
    
    return answer;
}