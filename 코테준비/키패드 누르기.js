// function distance(left,right,number,hand) {
//     let leftX=0;
//     let leftY=0;
//     let rightX=0;
//     let rightY=0;
//     let numberX=0;
//     let numberY=0;
  
//     if(left=="*"){
//       leftX=1;
//       leftY=4;



//       //  1 2 3
//         1 1 2 3
//         2 4 5 6
//         3 7 8 9
//         4 * 0 # 
//   }
//     else if(left%3!=0)
//     {
//         leftY= Math.ceil(left/3)
//         leftX= left%3
//     }
//     else if(left==0)
//     {
//         leftX=2;
//         leftY=4;
//     }
//     else{
//       leftY= Math.ceil(left/3)
//       leftX= 3;
//     } 
    
//     if(right=="#")
//     {
//        rightX=3;
//        rightY=4;
//     }
//     else if(right%3!=0)
//     {
//         rightY= Math.ceil(right/3)
//         rightX= right%3
//     }
//     else if(right==0)
//     {
//         rightX=2;
//         rightY=4;
//     }
//     else{
//       rightY= Math.ceil(right/3)
//       rightX= 3;
//     }     
//     if(number!=0)
//     {
//         numberY= Math.ceil(number/3)
//         numberX= number%3
//     }
//     else{
//        numberY=4;
//        numberX=2;
//     }     
//     let distanceL = Math.abs(leftX-numberX)+Math.abs(leftY-numberY);
//     let distanceR =Math.abs(rightX-numberX)+Math.abs(rightY-numberY);
//     console.log(distanceL,distanceR)
//     if(distanceL<distanceR) return "L"
//     else if(distanceR<distanceL) return "R"
//     else 
//     {
//         if(hand=="left")  
//         return "L"
//         else
//         return "R"
//     }
//   }
  
  function solution(numbers, hand) {
      var answer = '';
      let right = '#';
      let left = '*';
      for(let i=0;i<numbers.length;i++)
      {  
         if(numbers[i]==1||numbers[i]==4||numbers[i]==7)
         {  left=numbers[i];
          answer+="L"
         }
         
         else if(numbers[i]==3||numbers[i]==6||numbers[i]==9)
         {right=numbers[i];
          answer+="R"
         }
         else
         {  
             if(distance(left,right,numbers[i],hand)=="L")
         {   answer+="L"
             left=numbers[i]
         }
         else{
          answer+="R"
          right=numbers[i]
         }
          
         }
      }
      return answer;
  }


const solution = (numbers, hand) => {
    const answer = [];
    
    let leftHandPosition = '*';
    let rightHandPosition = '#'
    //처음 시작점 양 손가락 *,#
    
    numbers.forEach(number => {
        if(number ===1 || number ===4 || number ===7)
        {
            answer.push('L')
            leftHandPosition = number;
            return;
        }

        if(number ===3 || number === 6 || number ===9)
        {
            answer.push('R')
            rightHandPosition = number;
            return;
        }

        const leftHandDistance = getDistance(leftHandPosition, number);
        const rightHandDistance = getDistance(rightHandPosition, number);

        if(leftHandDistance === rightHandDistance) {
            if(hand === "right")
            {
                answer.push('R')
                rightHandPosition= number;
                return;
            }

            if (hand === 'left') {
                answer.push('L');
                leftHandPosition = number;
                return;
              }
        }

        if(leftHandDistance > rightHandDistance)
        {
            answer.push('R')
            rightHandPosition =number;
        }

        if(leftHandDistance < rightHandDistance)
        {
            answer.push('L')
            leftHandPosition = number;
        }
    })
   
    return answer.join("");
}

const getDistance = (locatedNumber, target) => {
    const keyPad = {
        1: [0,0], 2: [0,1], 3: [0,2],
        4: [1,0], 5: [1,1], 6: [1,2],
        7: [2,0], 8: [2,1], 9: [2,2],
        '*':[3,0], 0: [3,1], '#':[3,2]
    }

    const nowPosition= keyPad[locatedNumber];
    const targetPosition = keyPad[target];

    return Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1]- nowPosition[1]);

}

function solution(numbers, hand) {
    var answer = '';
    const arr = Array.from({length:4},()=>0)

    return answer;
}


//x,y좌표 2차원 배열로 생각해보자
//기본적 [1,4,7,*],[3,6,9,#] 기본적으로 왼쪽,오른쪽
//2,5,8,0 길이 차이가 나면 왼쪽,오른쪽 하면 되고 길이 같으면 왼손, 오른손