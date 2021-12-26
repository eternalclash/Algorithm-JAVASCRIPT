function solution(participant, completion) {
    var answer = '';
    for (let i=0;i<completion.length;i++)
    {
        for(let j=0;j<participant.length;j++)
        {
            if(participant[j]==completion[i])
            {   
                participant[j]=0;
                break;
            }
        }
    }
    answer=participant.filter((a)=>a!==0)
    console.log(participant)
    return answer[0];
}
//leo,kiki,eden = participant, eden,kiki=completion
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]))

//쉬운데 속도 오바

function solution(participant, completion) {
    var answer = '';
    participant.sort()
    completion.sort()
    let i=0;
    while(true)
    {
        if(participant[i]!=completion[i])
        {
           answer=participant[i]
           break;
        }
        i++
    }
    return answer;
}

//그냥 1명만 찾으면 되니깐 다 싹다 정렬해서 안 맞는 놈 찾으면된다. sort가 filter보다 효율적이다? 왜지???
//some 활용해보기