


function distance(left,right,number,hand) {
  let leftX=0;
  let leftY=0;
  let rightX=0;
  let rightY=0;
  let numberX=0;
  let numberY=0;

  if(left=="*"){
    leftX=1;
    leftY=4;
}
  else if(left%3!=0)
  {
      leftY= Math.ceil(left/3)
      leftX= left%3
  }
  else if(left==0)
  {
      leftX=2;
      leftY=4;
  }
  else{
    leftY= Math.ceil(left/3)
    leftX= 3;
  } 
  
  if(right=="#")
  {
     rightX=3;
     rightY=4;
  }
  else if(right%3!=0)
  {
      rightY= Math.ceil(right/3)
      rightX= right%3
  }
  else if(right==0)
  {
      rightX=2;
      rightY=4;
  }
  else{
    rightY= Math.ceil(right/3)
    rightX= 3;
  }     
  if(number!=0)
  {
      numberY= Math.ceil(number/3)
      numberX= number%3
  }
  else{
     numberY=4;
     numberX=2;
  }     
  let distanceL = Math.abs(leftX-numberX)+Math.abs(leftY-numberY);
  let distanceR =Math.abs(rightX-numberX)+Math.abs(rightY-numberY);
  console.log(distanceL,distanceR)
  if(distanceL<distanceR) return "L"
  else if(distanceR<distanceL) return "R"
  else 
  {
      if(hand=="left")  
      return "L"
      else
      return "R"
  }
}

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

console.log(solution([1,3,4,5,8,2,1,4,5,9,5],"right"))
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left"))

//키패드 거리를 나타내는것 2,5,8,0
//거리가 같다면 왼손잡이인지 오른손잡이인지