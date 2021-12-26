// function solution(arr)
// {
//     var answer = [];
   
//     for(let i=0 ;i<arr.length;i++)
//         {   let find=1
//             for(let j=0;j<answer.length;j++)
//                 {
//                     if(answer[j]==arr[i])
//                         {
//                             find=0;
//                         }
//                 }
//             if(find)
//                 answer.push(arr[i])
//         }
    
//     return answer;
// }
//효율적인 중복검사
function solution(arr)
{
    var answer = [];
   
    for(let i=0 ;i<arr.length;i++)
        {   if(arr[i]==arr[i-1])
               continue;
            else
                answer.push(arr[i])
        }
    
    return answer;
}