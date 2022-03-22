function solution(A, B, V)
{
   return Math.ceil((V-A)/(A-B))+1
}
console.log(solution(100,99,1000000000))