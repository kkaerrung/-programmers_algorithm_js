function solution(num) {
    var answer = 0;
    let count = 0;
    
     if (num == 1) 
            count = 0;
    
    for(let i = 0; i <= 500; i++){
        if (i == 500) {
         count = -1;
         break;
        }
        if ( num == 1)
            break;
        if( num % 2 == 0) {
             num = num/2 
             count++
        }
        else {
            num = num*3 + 1
            count++;
        }
    }
    
    return count;
}