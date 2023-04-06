function solution(numbers) {
    var answer = 0;
    var sum = 0;
    var count = 0;
    for (let idx of numbers) { 
        sum += idx; 
        count++; 
    } 
    answer = sum / count; 
    return answer;
}