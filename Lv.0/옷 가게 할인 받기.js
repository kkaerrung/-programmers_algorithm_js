function solution(price) {
    var answer = 0;
    
    if (300000 > price && price >= 100000) {
        answer = Math.floor(price* 0.95);
    } 
    else if (500000 > price && price >= 300000){
        answer = Math.floor(price *0.9);
    }
    else if(price >= 500000){
        answer = Math.floor(price * 0.8);
    }
    else 
        answer = price
    
    return answer;
}