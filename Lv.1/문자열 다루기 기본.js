function solution(s) {
    var result;
    let count = 0;
        
      if (s.length === 4 || s.length === 6) {
          for(let i = 0; i < s.length; i++){
              for (let j = 0; j < 10; j++){
              if(s[i] == j)
                  count++;
          }
        }
      }
      else result = false; 
      count == s.length ? result = true : result = false
      return result;
      }