function solution(s, skip, index) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let idx = 0;
    let answer = '';
    let alphabet = '';
    
    for (let i = 0; i < skip.length; i++) {
        for(let j = 0; j < alpha.length; j++){
              if(alpha[j] == skip[i])
                 alpha = alpha.replace(alpha[j], '');
        }
    }
    for (let i = 0; i < s.length; i++){
        idx = alpha.indexOf(s[i]) + index;
    
            idx= idx % alpha.length;
     
        answer += alpha[idx];
    }
    

    return answer;
}