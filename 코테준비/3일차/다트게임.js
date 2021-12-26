function solution(dartResult) {
    var answer = 0;
    let arr=dartResult.split("")
    let num=[];
   
    for(let i=0 ;i<arr.length;i++)
    {   if(arr[i]==0&&arr[i-1]==1)
        {
            arr[i]=10
        }
        if(isNaN(arr[i]))
        {
          if(!isNaN(arr[i-1]))  //뒤에는 숫자일 떄 
          { if(arr[i]=="S")
            num.push(arr[i-1]**1)
            if(arr[i]=="D")
            num.push(arr[i-1]**2)
            if(arr[i]=="T")
            num.push(arr[i-1]**3)
          }
          else  //보너스가 붙은 경우
          {
           num.push(arr[i])
          }
        }
    }
    for(let i=0;i<num.length;i++)
    {
        if(num[i]=='*')
        {
            num[i-1]*=2
            num[i-2]*=2
            num.splice(i,1)
        }
        if(num[i]=='#')
        {
            num[i-1]*=-1;
            num.splice(i,1)
        }
    }
    console.log(num)
    answer=num.reduce((acc,cur)=>acc+cur)
    return answer;
}
console.log(solution("1S2D*3T"))
console.log(solution("1D2S#10S"))
