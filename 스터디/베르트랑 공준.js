function solution (n)
{ let sum=0;
    for(let i=n+1;i<=2*n;i++)
    {   let flag=1;
        if(i==1)
        {
            continue;
        }
        for(let j=2;j<i/2;j++)
        {   
            if(i%j==0)
            {   flag=0;
  
                break;
            }

        }
      if(flag) sum++;
    }
    return sum;
}
// console.log(solution(1))
// console.log(solution(10))
console.log(solution(13))
// console.log(solution(100))
// console.log(solution(1000))
// console.log(solution(10000))
// console.log(solution(100000))