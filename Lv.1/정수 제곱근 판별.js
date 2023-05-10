function solution(n) {
    var answer = 0;
    let sqrtnum = Math.sqrt(n)

    
    if (Number.isInteger(sqrtnum) == true)
        return (sqrtnum+1) * (sqrtnum+1)
    else return -1;
}