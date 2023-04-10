function solution(players, callings) {
    const answer = [];
    const playerMap = new Map();
    const rankMap = new Map();
    
    players.forEach((value, index) => {
        playerMap.set(value, index);
        rankMap.set(index, value);
    });
    
    callings.forEach((name) => {
        const playerRank = playerMap.get(name);
        const prevName = rankMap.get(playerRank - 1);
        playerMap.set(name, playerRank - 1);
        playerMap.set(prevName, playerRank);
        rankMap.set(playerRank - 1, name);
        rankMap.set(playerRank, prevName);
    });
    
    playerMap.forEach((value, key) => {
       answer[value] = key;
    });
    
    return answer;
}