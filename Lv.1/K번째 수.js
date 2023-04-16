function solution(array, commands) {
    var answer = [];
    for(let idx = 0; idx < commands.length; idx++){
        let ans = [...array];
        let anss = "";
        let i = Number(commands[idx][0]); 
        let j = Number(commands[idx][1]-i);
        let k = Number(commands[idx][2]);   
        anss = ans.splice(i-1,j+1);
        anss.sort((a,b) => a-b);
        answer.push(anss[k-1]);
        }
    return answer;
}