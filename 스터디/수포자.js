function solution(answers) {
    var answer = [];
    let check = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    let sum = [0,0,0]
    let top =0;
    for(let i=0; i<answers.length;i++)
        {
            if(answers[i]===check[0][i%10])
                sum[0]++
            if(answers[i]===check[1][i%10])
                sum[1]++
            if(answers[i]===check[2][i%10])
                sum[2]++
        }
        console.log(sum)
    for(let i=0; i<sum.length;i++)
        {
            if(sum[i]>top)
                top = sum[i]
        }
        console.log(top)
    for(let i=0; i<sum.length;i++)
        {
           if(top ===sum[i])
               answer.push(i+1)
        }
    return answer;
}
// console.log(solution([1,3,2,4,2,4,5,3,2,4,2,1,3,5]))
console.log(solution([1,3,2,4,2]))