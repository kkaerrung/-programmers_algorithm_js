function solution(k, score) {
    var answer = [];
    let king = [];
    let min = 0;
    for ( let i = 0; i < score.length; i++){
         if (i < k){
            king.push(score[i]);
            king.sort((a, b) => a- b);
         }
        else{
         if(score[i]>Math.min(...king)){
            king.shift();
            king.push(score[i]);
            king.sort((a, b) => a - b);
         }
        }
         answer.push(king[0]);
    }
    
    return answer;
}