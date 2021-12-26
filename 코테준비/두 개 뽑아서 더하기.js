function solution(numbers) {
    var answer = [];
    for(let i=0;i<numbers.length;i++)
        for(let j=i+1;j<numbers.length;j++)
            {   if(answer.filter((a)=>{return a===numbers[i]+numbers[j]}).length==0)
                answer.push(numbers[i]+numbers[j])
            }
    answer.sort((a,b)=>{return a-b})
    return answer;
}
console.log(solution([2,1,3,4,1]))