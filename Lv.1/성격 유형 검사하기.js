function solution(survey, choices) {
    const types = ["RT", "CF", "JM", "AN"]
    const score = {
        "R" : 0,
        "T" : 0,
        "C" : 0,
        "F" : 0,
        "J" : 0,
        "M" : 0,
        "A" : 0,
        "N" : 0
    }
    
    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];
        
        score[choice > 4 ? agree : disagree] += Math.abs(choice - 4)
    })
    
    return types.map(([a, b]) => score[b] > score[a] ? b : a).join("");
}