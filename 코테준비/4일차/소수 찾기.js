function solution(n) {
    var answer = 0;
    let x=2;
    while(x<=n)
        {
            if(x<4)
            { answer++

            }
               
            else{
                let k=0;
                for(let i=2;i<=Math.sqrt(x);i++)
                {
                  if(x%i==0)
                     {    k=1;                
                         break;
                     }
                }
                if(!k)
                answer++;
            }
               
         x++;
        }
    return answer;
}
console.log(solution(10))
console.log(Math.sqrt(10))