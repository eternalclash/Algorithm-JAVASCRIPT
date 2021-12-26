function solution(d, budget) {
    let sum=0;
    var answer = 0;
    d.sort((a,b)=>{return a-b})
    for(let i=0;i<d.length;i++)
    {   sum+=d[i]
        if(sum<=budget)
        {
            answer++
            
        }
        else
        break;
    }
  
    return answer;
}
console.log(solution([1,3,2,5,4],9))