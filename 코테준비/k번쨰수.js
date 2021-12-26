function solution(array, commands) {
    var answer = [];
    for(let i=0;i<commands.length;i++)
        { let find =[]
            for(let j=commands[i][0]-1;j<=commands[i][1]-1;j++) //인덱스는 0번쨰 부터니깐
                {
                    find.push(array[j])
                }
           find.sort((a,b)=>a-b)
           answer.push(find[commands[i][2]-1])
        }
    return answer;
}