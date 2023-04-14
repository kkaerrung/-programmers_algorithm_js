function solution(players, callings) {
    const score = new Map();
    
    players.forEach((name, index) => {
        score.set(name, index);
    })
    
    callings.forEach(name => {
        const currentIdx = score.get(name);
        const front = players[currentIdx - 1];

        [players[currentIdx], players[currentIdx -1]] = [players[currentIdx -1], players[currentIdx]];
        
        score.set(name, score.get(name) - 1);
        score.set(front, score.get(name) + 1);
    })
    
    return players;
}