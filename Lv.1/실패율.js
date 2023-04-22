function solution(N, stages) {
    var answer = [];
    let count =0;
    
    for(let i = 1; i <= N; i++){
      let win = stages.filter(x => x >= i).length;
      let curr = stages.filter(x => x === i).length;
      answer.push([i,curr/win]);    
    }
     answer.sort((a,b) => b[1]-a[1]); 
    return answer.map((x)=>x[0]);
    }