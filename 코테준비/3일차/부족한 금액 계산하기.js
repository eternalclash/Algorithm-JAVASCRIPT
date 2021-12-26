function solution(price, money, count) {
    var answer = -1;

    for(let i=1;i<=count;i++)
    {
         money-=i*price
   
    }
    answer = money> 0? 0 : Math.abs(money)
    return answer;
}
console.log(solution(3,20,4))