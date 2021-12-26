function solution(n, lost, reserve) {
    let clothes = Array.from({length:n},()=>1)
    var answer = 0;
    for(let i=0;i<clothes.length;i++)
    {
        if(lost.filter((a)=>{return(a-1)==i}).length)
         clothes[i]--
        if(reserve.filter((a)=>{return(a-1)==i}).length)
         clothes[i]++
    }
    console.log(clothes)
    for(let j=0;j<clothes.length;j++)
    {  

        if(clothes[j]==0&&clothes[j-1]>1)
        {
            clothes[j]++
            clothes[j-1]--
            continue;
        }
        if(clothes[j]==0&&clothes[j+1]>1)
        {
            clothes[j]++
            clothes[j+1]--
            continue;
        }

    }
    answer=clothes.filter((a)=>{return(a>0)}).length
    console.log(clothes)

    return answer;
}

console.log(solution(5,[2,4],[1,3,5]))