function solution(n, left, right) {
    var answer = [];
    
    for (let i = left; i <= right; i++){
        let a = Math.floor(i/n)
        let b = i % n
        answer.push(Math.max(a+1,b+1))
    }
    
    return answer;
}

