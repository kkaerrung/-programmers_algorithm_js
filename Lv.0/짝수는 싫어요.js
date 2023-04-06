function solution(n) {
    var answer = [];
    let number = 0;
    while(number <= n ){
            if(number%2 != 0) {
                answer.push(number)
                number++;
                    }
        number++;
    }
   answer.sort(function(a,b) { 
   return a-b
   })
    return answer;
}