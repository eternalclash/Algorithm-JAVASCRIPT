function solution(N, stages) {
    var answer = [];
    let a=[]
    let k=0;
    let fail=0;
    
    let success=stages.length;
    for (let i=1;i<N+1;i++)
    {
       fail= stages.filter((stage)=>i==stage).length;
       answer.push([fail/success,i])
       success-=fail;
    }
    console.log(answer)
  
    answer.sort(function(a,b){return b[0]-a[0]})
    console.log(answer)

   return answer.map((b)=>b[1])
}
console.log(solution(5,[2,1,2,6,2,4,3,3]))