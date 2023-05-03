function solution(s) {
    var answer = '';
    s = s.split(' ');
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s[i].length; j++){
            if(j == 0)
                answer += s[i][j].toUpperCase();
            if(j!=0)
            answer += s[i][j].toLowerCase();
        }
        
        if( i ===s.length-1)
         return answer;
        answer += ' ';
    }
   return answer;
}