function solution(left, right) {
    var answer = 0;

    for(let i=left;i<=right;i++)
    {  
      if(common(i)%2==0)
      {
          answer+=i
      }
      else
      {
          answer-=i;
      }
    }
    return answer;
}
function common(a) {
    let num=0;
    for(let i=0;i<=a;i++)
    {
        if(a%i==0)
        {
         num++;
        }
    }
    return num;
}
console.log(solution(13,17))