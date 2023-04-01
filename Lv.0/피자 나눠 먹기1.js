function solution(n) {
    return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
}
//  Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환함