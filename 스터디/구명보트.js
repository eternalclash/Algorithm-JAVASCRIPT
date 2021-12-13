// function solution(people, limit) {
//     var answer = 0;
//     var sum =0;
//     people.sort(function (a,b) {
//         if(a>b)
//             return 1;
//         else
//             return -1;
//     }); [50,50,70,80]
//     for(let i=0; i<people.length ;i++)
//     {   sum+=people[i]
//         if(sum<=limit)
//         { 
//             continue;
//         }
//         else
//         {
//            answer++
//            if(i==people.length-1)
//            {
//                answer++;
//                break;
//            }
//            sum=people[i]
//         }
//     }

//     return answer;
// }
// function solution(people, limit) {
//     var answer = 0;
//     var sum =0;
//     sum=people.reduce((acc,cur)=>acc+cur,0)
//     answer=Math.floor(sum/limit)+1
//     return answer;
// }
function solution(people, limit) {
    var answer = 0;
    people.sort(function (a,b) {
                if(a>b)
                    return -1;
                else
                    return 1;
            });
   [80,70,50,50]
    for(let i =0, j = people.length-1; i <= j ; i++ ){
        if(people[i]+people[j] <= limit) j--
        answer++
    }

    return answer;
}
console.log(solution([70,50,80,50],100))
console.log(solution([70,80,50],150))