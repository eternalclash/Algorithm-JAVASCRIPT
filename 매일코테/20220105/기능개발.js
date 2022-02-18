function solution(progresses, speeds) {
    var answer = [];
    for(let i = 0 ; i<progresses.length ; i++)
        {
            answer.push((Math.ceil((100-progresses[i])/speeds[i])))
        }
    let max=1
    let k = answer[0]
    let arr=[];
    for(let i = 1 ; i<answer.length;i++)
        {  
            if(answer[i]>k)
                {   k=answer[i]
                    arr.push(max)
                    max=1;
                }
            else
                {
                    max++;
                }
              if(i==answer.length-1)   
                  arr.push(max)
            [20, 99, 93, 30, 55, 10], [5, 10, 1, 1, 30, 5], [3, 3]
        }
    console.log(answer)
    console.log(arr)
    return arr;
}
solution( [20, 99, 93, 30, 55, 10], [5, 10, 1, 1, 30, 5])
//작업 일수로 변환한 후
//비교를 통해서 전의 있던 날보다 클 때마다 배열 요소 생성