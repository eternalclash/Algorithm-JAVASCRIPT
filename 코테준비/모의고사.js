function solution(answers) {
    var answer = [];
    let correct=[];
    let math = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
  
   for(let i=0;i<math.length;i++)
   {
       correct[i]= answers.filter((a,index)=>{return a==math[i][index%math[i].length]}).length
   }
   const max = Math.max(...correct)
   for(let j=0;j<correct.length;j++)
   {
       if(correct[j]==max)
       answer.push(j+1)
   }
//    console.log(answer)
//     // let rank =0;
//     // let correct = [[0,1],[0,2],[0,3]]
//     // for(let i=0; i<answers.length;i++)
//     //     {   let person1= math[0][i]
//     //         let person2= math[1][i]
//     //         let person3= math[2][i]
//     //         if(i>=math[0].length) person1=math[0][Math.ceil(i/math[0].length)]
//     //         if(i>=math[1].length) person2=math[1][Math.ceil(i/math[1].length)]
//     //         if(i>=math[2].length) person3=math[2][Math.ceil(i/math[2].length)]
            
//     //         if(math[0][i]==answers[i])  correct[0][0]++
//     //         if(math[1][i]==answers[i])  correct[1][0]++ 
//     //         if(math[2][i]==answers[i])  correct[2][0]++
//     //     }
// //랭킹순
//     correct.sort((a,b)=> a-b)
//     console.log(correct)
//     for(let j=0;j<correct.length;j++)
//         {   if(correct[j][0]==correct[0][0])
//             answer.push(correct[j][1])
//         }
        return answer;
}

console.log(solution([1,2,3,4,5]))