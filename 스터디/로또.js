function solution(lottos, win_nums) {
    var answer = [];
    let zero = lottos.filter((a)=>a==0).length;
    let correct =0;
    console.log(zero)
    for (let i =0 ; i<lottos.length;i++)
    { 
        for(let j=0; j<win_nums.length;j++)
        {
            if(lottos[i]==win_nums[j])
             {
                 correct++
                 break;
             }
        }
    }
    answer.push(7-(correct+zero))
    answer.push(7-correct)
    console.log(answer)
    
    return answer;
}

console.log(solution([44,1,0,0,31,25],[31,10,45,1,6,19]))