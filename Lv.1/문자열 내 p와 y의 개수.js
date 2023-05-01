function solution(s){
    var answer = true;
    let p = 0;
    let y = 0;

    for(let i = 0; i < s.length; i++){
        s = s.toLowerCase(); 
        if(s[i] == 'p'){
            p++;
        }
        else if(s[i] == 'y')
            y++;
    }
    if(p == y) 
        return true; 
    else if(p == 0 && y == 0)
        return true;
    else 
        return false;
}