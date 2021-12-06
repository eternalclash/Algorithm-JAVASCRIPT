//행더하기
//열더하기

function solution (a) {
    let answer=0;
    let sum =0;
   for(let i=0;i<a.length;i++)
   {
       for(let j=0;j<a.length;j++)
       {
           sum+=a[i][j]
       }
       if(answer<sum)
       answer = sum
       sum=0;
   }
   for(let i=0;i<a.length;i++)
   {
       for(let j=0;j<a.length;j++)
       {
           sum+=a[j][i]
       }
       if(answer<sum)
       answer = sum
       sum=0;
   }
   for(let i=0;i<a.length;i++)
   {
       sum+=a[i][i]

       if(answer<sum&&i==a.length-1)
       {
        answer = sum
        sum =0;
       }    
   }
   for(let i=0;i<a.length;i++)
   {
       sum+=a[i][a.length-1-i]

       if(answer<sum&&i==a.length-1)
       {
        answer = sum
        sum =0;
       }    
    
   }
   return answer;
}
let arr=[[10, 13, 10, 12, 15], 
[12, 39, 30, 23, 11],
[11, 25, 50, 53, 15],
[19, 27, 29, 37, 27],
[19, 13, 30, 13, 19]];
console.log(solution(arr))