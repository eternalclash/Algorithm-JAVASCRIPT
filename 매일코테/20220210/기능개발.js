function solution(progresses, speeds) {
    var answer = [];
 
    let count = 0;
    for (let i = 0 ; i< progresses.length; i++)
        {
            progresses[i]=Math.ceil((100-progresses[i])/speeds[i])
        }
      let max = progresses[0]
    for (let i = 0 ; i<progresses.length ; i++)
        {
            if(progresses[i]>max)
                {
                    answer.push(count)
                    count = 1;
                    max=progresses[i]
                }
            else
                {
                    count++;
                    
                }
            if(i==progresses.length-1)
                        answer.push(count)
        }
    
    console.log(progresses)
    return answer;
}